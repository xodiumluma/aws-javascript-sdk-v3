// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateInferenceExperimentRequest, CreateInferenceExperimentResponse } from "../models/models_1";
import { de_CreateInferenceExperimentCommand, se_CreateInferenceExperimentCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateInferenceExperimentCommand}.
 */
export interface CreateInferenceExperimentCommandInput extends CreateInferenceExperimentRequest {}
/**
 * @public
 *
 * The output of {@link CreateInferenceExperimentCommand}.
 */
export interface CreateInferenceExperimentCommandOutput extends CreateInferenceExperimentResponse, __MetadataBearer {}

/**
 * <p>
 *            Creates an inference experiment using the configurations specified in the request.
 *        </p>
 *          <p>
 *            Use this API to setup and schedule an experiment to compare model variants on a Amazon SageMaker inference endpoint. For
 *            more information about inference experiments, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/shadow-tests.html">Shadow tests</a>.
 *        </p>
 *          <p>
 *            Amazon SageMaker begins your experiment at the scheduled time and routes traffic to your endpoint's model variants based
 *            on your specified configuration.
 *        </p>
 *          <p>
 *            While the experiment is in progress or after it has concluded, you can view metrics that compare your model
 *            variants. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/shadow-tests-view-monitor-edit.html">View, monitor, and edit shadow tests</a>.
 *        </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateInferenceExperimentCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateInferenceExperimentCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // CreateInferenceExperimentRequest
 *   Name: "STRING_VALUE", // required
 *   Type: "ShadowMode", // required
 *   Schedule: { // InferenceExperimentSchedule
 *     StartTime: new Date("TIMESTAMP"),
 *     EndTime: new Date("TIMESTAMP"),
 *   },
 *   Description: "STRING_VALUE",
 *   RoleArn: "STRING_VALUE", // required
 *   EndpointName: "STRING_VALUE", // required
 *   ModelVariants: [ // ModelVariantConfigList // required
 *     { // ModelVariantConfig
 *       ModelName: "STRING_VALUE", // required
 *       VariantName: "STRING_VALUE", // required
 *       InfrastructureConfig: { // ModelInfrastructureConfig
 *         InfrastructureType: "RealTimeInference", // required
 *         RealTimeInferenceConfig: { // RealTimeInferenceConfig
 *           InstanceType: "ml.t2.medium" || "ml.t2.large" || "ml.t2.xlarge" || "ml.t2.2xlarge" || "ml.t3.medium" || "ml.t3.large" || "ml.t3.xlarge" || "ml.t3.2xlarge" || "ml.m4.xlarge" || "ml.m4.2xlarge" || "ml.m4.4xlarge" || "ml.m4.10xlarge" || "ml.m4.16xlarge" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.12xlarge" || "ml.m5.24xlarge" || "ml.m5d.large" || "ml.m5d.xlarge" || "ml.m5d.2xlarge" || "ml.m5d.4xlarge" || "ml.m5d.8xlarge" || "ml.m5d.12xlarge" || "ml.m5d.16xlarge" || "ml.m5d.24xlarge" || "ml.c4.xlarge" || "ml.c4.2xlarge" || "ml.c4.4xlarge" || "ml.c4.8xlarge" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.18xlarge" || "ml.c5d.xlarge" || "ml.c5d.2xlarge" || "ml.c5d.4xlarge" || "ml.c5d.9xlarge" || "ml.c5d.18xlarge" || "ml.p2.xlarge" || "ml.p2.8xlarge" || "ml.p2.16xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.p3dn.24xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.r5.large" || "ml.r5.xlarge" || "ml.r5.2xlarge" || "ml.r5.4xlarge" || "ml.r5.8xlarge" || "ml.r5.12xlarge" || "ml.r5.16xlarge" || "ml.r5.24xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.16xlarge" || "ml.g5.12xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.inf1.xlarge" || "ml.inf1.2xlarge" || "ml.inf1.6xlarge" || "ml.inf1.24xlarge" || "ml.trn1.2xlarge" || "ml.trn1.32xlarge" || "ml.trn1n.32xlarge" || "ml.inf2.xlarge" || "ml.inf2.8xlarge" || "ml.inf2.24xlarge" || "ml.inf2.48xlarge" || "ml.p4d.24xlarge" || "ml.p4de.24xlarge" || "ml.p5.48xlarge" || "ml.m6i.large" || "ml.m6i.xlarge" || "ml.m6i.2xlarge" || "ml.m6i.4xlarge" || "ml.m6i.8xlarge" || "ml.m6i.12xlarge" || "ml.m6i.16xlarge" || "ml.m6i.24xlarge" || "ml.m6i.32xlarge" || "ml.m7i.large" || "ml.m7i.xlarge" || "ml.m7i.2xlarge" || "ml.m7i.4xlarge" || "ml.m7i.8xlarge" || "ml.m7i.12xlarge" || "ml.m7i.16xlarge" || "ml.m7i.24xlarge" || "ml.m7i.48xlarge" || "ml.c6i.large" || "ml.c6i.xlarge" || "ml.c6i.2xlarge" || "ml.c6i.4xlarge" || "ml.c6i.8xlarge" || "ml.c6i.12xlarge" || "ml.c6i.16xlarge" || "ml.c6i.24xlarge" || "ml.c6i.32xlarge" || "ml.c7i.large" || "ml.c7i.xlarge" || "ml.c7i.2xlarge" || "ml.c7i.4xlarge" || "ml.c7i.8xlarge" || "ml.c7i.12xlarge" || "ml.c7i.16xlarge" || "ml.c7i.24xlarge" || "ml.c7i.48xlarge" || "ml.r6i.large" || "ml.r6i.xlarge" || "ml.r6i.2xlarge" || "ml.r6i.4xlarge" || "ml.r6i.8xlarge" || "ml.r6i.12xlarge" || "ml.r6i.16xlarge" || "ml.r6i.24xlarge" || "ml.r6i.32xlarge" || "ml.r7i.large" || "ml.r7i.xlarge" || "ml.r7i.2xlarge" || "ml.r7i.4xlarge" || "ml.r7i.8xlarge" || "ml.r7i.12xlarge" || "ml.r7i.16xlarge" || "ml.r7i.24xlarge" || "ml.r7i.48xlarge" || "ml.m6id.large" || "ml.m6id.xlarge" || "ml.m6id.2xlarge" || "ml.m6id.4xlarge" || "ml.m6id.8xlarge" || "ml.m6id.12xlarge" || "ml.m6id.16xlarge" || "ml.m6id.24xlarge" || "ml.m6id.32xlarge" || "ml.c6id.large" || "ml.c6id.xlarge" || "ml.c6id.2xlarge" || "ml.c6id.4xlarge" || "ml.c6id.8xlarge" || "ml.c6id.12xlarge" || "ml.c6id.16xlarge" || "ml.c6id.24xlarge" || "ml.c6id.32xlarge" || "ml.r6id.large" || "ml.r6id.xlarge" || "ml.r6id.2xlarge" || "ml.r6id.4xlarge" || "ml.r6id.8xlarge" || "ml.r6id.12xlarge" || "ml.r6id.16xlarge" || "ml.r6id.24xlarge" || "ml.r6id.32xlarge" || "ml.g6.xlarge" || "ml.g6.2xlarge" || "ml.g6.4xlarge" || "ml.g6.8xlarge" || "ml.g6.12xlarge" || "ml.g6.16xlarge" || "ml.g6.24xlarge" || "ml.g6.48xlarge", // required
 *           InstanceCount: Number("int"), // required
 *         },
 *       },
 *     },
 *   ],
 *   DataStorageConfig: { // InferenceExperimentDataStorageConfig
 *     Destination: "STRING_VALUE", // required
 *     KmsKey: "STRING_VALUE",
 *     ContentType: { // CaptureContentTypeHeader
 *       CsvContentTypes: [ // CsvContentTypes
 *         "STRING_VALUE",
 *       ],
 *       JsonContentTypes: [ // JsonContentTypes
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   ShadowModeConfig: { // ShadowModeConfig
 *     SourceModelVariantName: "STRING_VALUE", // required
 *     ShadowModelVariants: [ // ShadowModelVariantConfigList // required
 *       { // ShadowModelVariantConfig
 *         ShadowModelVariantName: "STRING_VALUE", // required
 *         SamplingPercentage: Number("int"), // required
 *       },
 *     ],
 *   },
 *   KmsKey: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateInferenceExperimentCommand(input);
 * const response = await client.send(command);
 * // { // CreateInferenceExperimentResponse
 * //   InferenceExperimentArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateInferenceExperimentCommandInput - {@link CreateInferenceExperimentCommandInput}
 * @returns {@link CreateInferenceExperimentCommandOutput}
 * @see {@link CreateInferenceExperimentCommandInput} for command's `input` shape.
 * @see {@link CreateInferenceExperimentCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceInUse} (client fault)
 *  <p>Resource being accessed is in use.</p>
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many
 *             training jobs created. </p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class CreateInferenceExperimentCommand extends $Command
  .classBuilder<
    CreateInferenceExperimentCommandInput,
    CreateInferenceExperimentCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "CreateInferenceExperiment", {})
  .n("SageMakerClient", "CreateInferenceExperimentCommand")
  .f(void 0, void 0)
  .ser(se_CreateInferenceExperimentCommand)
  .de(de_CreateInferenceExperimentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateInferenceExperimentRequest;
      output: CreateInferenceExperimentResponse;
    };
    sdk: {
      input: CreateInferenceExperimentCommandInput;
      output: CreateInferenceExperimentCommandOutput;
    };
  };
}
