import { S3, S3ClientConfig, waitUntilBucketExists, waitUntilBucketNotExists } from "@aws-sdk/client-s3";
import { GetCallerIdentityCommandOutput, STS } from "@aws-sdk/client-sts";
import { afterAll, beforeAll, describe, expect, onTestFailed, test as it } from "vitest";

const testValue = "Hello S3 global client!";

describe("S3 Global Client Test", () => {
  const errors = [] as any[];
  let testFailed = false;
  const setTestFailed = () => {
    testFailed = true;
  };

  const regionConfigs = [
    { region: "us-east-1", followRegionRedirects: true } as S3ClientConfig,
    { region: "eu-west-1", followRegionRedirects: true } as S3ClientConfig,
    { region: "us-west-2", followRegionRedirects: true } as S3ClientConfig,
  ].map((config) => {
    config.logger = {
      trace() {},
      debug() {},
      info() {},
      warn() {},
      error(entry: any) {
        errors.push(entry);
      },
    };
    return config;
  });
  const s3Clients = regionConfigs.map((config) => new S3(config));
  const stsClient = new STS({});

  let callerID = null as unknown as GetCallerIdentityCommandOutput;
  let bucketNames = [] as string[];

  // random element limited to 2 letters to avoid concurrent IO, and
  // to limit bucket count to 676 if there is failure to delete them.
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const randId = alphabet[(Math.random() * alphabet.length) | 0] + alphabet[(Math.random() * alphabet.length) | 0];

  beforeAll(async () => {
    callerID = await stsClient.getCallerIdentity({});
    bucketNames = regionConfigs.map((config) => `${callerID.Account}-${randId}-redirect-${config.region}`);
    await Promise.all(
      bucketNames.map(async (bucketName, index) => {
        await deleteBucket(s3Clients[index], bucketName);
        return waitUntilBucketNotExists({ client: s3Clients[index], maxWaitTime: 60 }, { Bucket: bucketName });
      })
    );
    await Promise.all(
      bucketNames.map(async (bucketName, index) => {
        await s3Clients[index].createBucket({ Bucket: bucketName });
        return waitUntilBucketExists({ client: s3Clients[index], maxWaitTime: 60 }, { Bucket: bucketName });
      })
    );
    await Promise.all(bucketNames.map((bucketName, index) => s3Clients[index].headBucket({ Bucket: bucketName })));
  });

  afterAll(async () => {
    await Promise.all(bucketNames.map((bucketName, index) => deleteBucket(s3Clients[index], bucketName)));
    if (testFailed) {
      console.info("Test failed, logging errors collecting during test.");
      for (const error of errors) {
        console.error(error);
      }
    }
  });

  it("Should be able to put objects following region redirect", async () => {
    onTestFailed(setTestFailed);
    // Upload objects to each bucket
    for (const bucketName of bucketNames) {
      for (const s3Client of s3Clients) {
        const objKey = `object-from-${await s3Client.config.region()}-client`;
        await s3Client.putObject({ Bucket: bucketName, Key: objKey, Body: testValue });
      }
    }
  });

  it("Should be able to get objects following region redirect", async () => {
    onTestFailed(setTestFailed);
    // Fetch and assert objects
    for (const bucketName of bucketNames) {
      for (const s3Client of s3Clients) {
        const objKey = `object-from-${await s3Client.config.region()}-client`;
        await s3Client.headObject({ Bucket: bucketName, Key: objKey });
        const { Body } = await s3Client.getObject({ Bucket: bucketName, Key: objKey });
        const data = await Body?.transformToString();
        expect(data).toEqual(testValue);
      }
    }
  });

  it("Should delete objects following region redirect", async () => {
    onTestFailed(setTestFailed);
    for (const bucketName of bucketNames) {
      for (const s3Client of s3Clients) {
        const objKey = `object-from-${await s3Client.config.region()}-client`;
        await s3Client.deleteObject({ Bucket: bucketName, Key: objKey });
      }
    }
  });
}, 100_000);

async function deleteBucket(s3: S3, bucketName: string) {
  const Bucket = bucketName;

  try {
    await s3.headBucket({
      Bucket,
    });
  } catch (e) {
    return;
  }

  const list = await s3
    .listObjects({
      Bucket,
    })
    .catch((e) => {
      if (!String(e).includes("NoSuchBucket")) {
        throw e;
      }
      return {
        Contents: [],
      };
    });

  const promises = [] as any[];
  for (const key of list.Contents ?? []) {
    promises.push(
      s3.deleteObject({
        Bucket,
        Key: key.Key,
      })
    );
  }
  await Promise.all(promises);

  try {
    return await s3.deleteBucket({
      Bucket,
    });
  } catch (e) {
    if (!String(e).includes("NoSuchBucket")) {
      throw e;
    }
  }
}
