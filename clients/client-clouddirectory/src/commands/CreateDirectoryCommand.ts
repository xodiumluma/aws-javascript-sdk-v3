// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateDirectoryRequest, CreateDirectoryResponse } from "../models/models_0";
import { de_CreateDirectoryCommand, se_CreateDirectoryCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDirectoryCommand}.
 */
export interface CreateDirectoryCommandInput extends CreateDirectoryRequest {}
/**
 * @public
 *
 * The output of {@link CreateDirectoryCommand}.
 */
export interface CreateDirectoryCommandOutput extends CreateDirectoryResponse, __MetadataBearer {}

/**
 * <p>Creates a <a>Directory</a> by copying the published schema into the
 *       directory. A directory cannot be created without a schema.</p>
 *          <p>You can also quickly create a directory using a managed schema, called the
 *         <code>QuickStartSchema</code>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_managed.html">Managed Schema</a> in the <i>Amazon Cloud Directory Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, CreateDirectoryCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, CreateDirectoryCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const input = { // CreateDirectoryRequest
 *   Name: "STRING_VALUE", // required
 *   SchemaArn: "STRING_VALUE", // required
 * };
 * const command = new CreateDirectoryCommand(input);
 * const response = await client.send(command);
 * // { // CreateDirectoryResponse
 * //   DirectoryArn: "STRING_VALUE", // required
 * //   Name: "STRING_VALUE", // required
 * //   ObjectIdentifier: "STRING_VALUE", // required
 * //   AppliedSchemaArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateDirectoryCommandInput - {@link CreateDirectoryCommandInput}
 * @returns {@link CreateDirectoryCommandOutput}
 * @see {@link CreateDirectoryCommandInput} for command's `input` shape.
 * @see {@link CreateDirectoryCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for CloudDirectoryClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access denied or directory not found. Either you don't have permissions for this directory or the directory does not exist. Try calling <a>ListDirectories</a> and check your permissions.</p>
 *
 * @throws {@link DirectoryAlreadyExistsException} (client fault)
 *  <p>Indicates that a <a>Directory</a> could not be created due to a naming
 *       conflict. Choose a different name and try again.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
 *
 * @throws {@link InvalidArnException} (client fault)
 *  <p>Indicates that the provided ARN value is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link RetryableConflictException} (client fault)
 *  <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Indicates that your request is malformed in some manner. See the exception
 *       message.</p>
 *
 * @throws {@link CloudDirectoryServiceException}
 * <p>Base exception class for all service exceptions from CloudDirectory service.</p>
 *
 * @public
 * @example To create a new Cloud Directory
 * ```javascript
 * //
 * const input = {
 *   "Name": "ExampleCD",
 *   "SchemaArn": "arn:aws:clouddirectory:us-west-2:45132example:schema/published/person/1"
 * };
 * const command = new CreateDirectoryCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "AppliedSchemaArn": "arn:aws:clouddirectory:us-west-2:45132example:directory/AfMr4qym1kZTvwqOafAYfqI/schema/person/1",
 *   "DirectoryArn": "arn:aws:clouddirectory:us-west-2:45132example:directory/AfMr4qym1kZTvwqOafAYfqI",
 *   "Name": "ExampleCD",
 *   "ObjectIdentifier": "AQHzK-KsptZGU78KjmnwGH6i-4guCM3uQFOTA9_NjeHDrg"
 * }
 * *\/
 * // example id: to-create-a-new-cloud-directory-1506119878996
 * ```
 *
 */
export class CreateDirectoryCommand extends $Command
  .classBuilder<
    CreateDirectoryCommandInput,
    CreateDirectoryCommandOutput,
    CloudDirectoryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudDirectoryClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonCloudDirectory_20170111", "CreateDirectory", {})
  .n("CloudDirectoryClient", "CreateDirectoryCommand")
  .f(void 0, void 0)
  .ser(se_CreateDirectoryCommand)
  .de(de_CreateDirectoryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDirectoryRequest;
      output: CreateDirectoryResponse;
    };
    sdk: {
      input: CreateDirectoryCommandInput;
      output: CreateDirectoryCommandOutput;
    };
  };
}
