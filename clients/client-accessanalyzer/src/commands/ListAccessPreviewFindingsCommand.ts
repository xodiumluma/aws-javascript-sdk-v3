// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListAccessPreviewFindingsRequest, ListAccessPreviewFindingsResponse } from "../models/models_0";
import { de_ListAccessPreviewFindingsCommand, se_ListAccessPreviewFindingsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAccessPreviewFindingsCommand}.
 */
export interface ListAccessPreviewFindingsCommandInput extends ListAccessPreviewFindingsRequest {}
/**
 * @public
 *
 * The output of {@link ListAccessPreviewFindingsCommand}.
 */
export interface ListAccessPreviewFindingsCommandOutput extends ListAccessPreviewFindingsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of access preview findings generated by the specified access
 *          preview.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, ListAccessPreviewFindingsCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, ListAccessPreviewFindingsCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const input = { // ListAccessPreviewFindingsRequest
 *   accessPreviewId: "STRING_VALUE", // required
 *   analyzerArn: "STRING_VALUE", // required
 *   filter: { // FilterCriteriaMap
 *     "<keys>": { // Criterion
 *       eq: [ // ValueList
 *         "STRING_VALUE",
 *       ],
 *       neq: [
 *         "STRING_VALUE",
 *       ],
 *       contains: [
 *         "STRING_VALUE",
 *       ],
 *       exists: true || false,
 *     },
 *   },
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAccessPreviewFindingsCommand(input);
 * const response = await client.send(command);
 * // { // ListAccessPreviewFindingsResponse
 * //   findings: [ // AccessPreviewFindingsList // required
 * //     { // AccessPreviewFinding
 * //       id: "STRING_VALUE", // required
 * //       existingFindingId: "STRING_VALUE",
 * //       existingFindingStatus: "STRING_VALUE",
 * //       principal: { // PrincipalMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       action: [ // ActionList
 * //         "STRING_VALUE",
 * //       ],
 * //       condition: { // ConditionKeyMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       resource: "STRING_VALUE",
 * //       isPublic: true || false,
 * //       resourceType: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       changeType: "STRING_VALUE", // required
 * //       status: "STRING_VALUE", // required
 * //       resourceOwnerAccount: "STRING_VALUE", // required
 * //       error: "STRING_VALUE",
 * //       sources: [ // FindingSourceList
 * //         { // FindingSource
 * //           type: "STRING_VALUE", // required
 * //           detail: { // FindingSourceDetail
 * //             accessPointArn: "STRING_VALUE",
 * //             accessPointAccount: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       resourceControlPolicyRestriction: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAccessPreviewFindingsCommandInput - {@link ListAccessPreviewFindingsCommandInput}
 * @returns {@link ListAccessPreviewFindingsCommandOutput}
 * @see {@link ListAccessPreviewFindingsCommandInput} for command's `input` shape.
 * @see {@link ListAccessPreviewFindingsCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for AccessAnalyzerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict exception error.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Throttling limit exceeded error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation exception error.</p>
 *
 * @throws {@link AccessAnalyzerServiceException}
 * <p>Base exception class for all service exceptions from AccessAnalyzer service.</p>
 *
 * @public
 */
export class ListAccessPreviewFindingsCommand extends $Command
  .classBuilder<
    ListAccessPreviewFindingsCommandInput,
    ListAccessPreviewFindingsCommandOutput,
    AccessAnalyzerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AccessAnalyzerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AccessAnalyzer", "ListAccessPreviewFindings", {})
  .n("AccessAnalyzerClient", "ListAccessPreviewFindingsCommand")
  .f(void 0, void 0)
  .ser(se_ListAccessPreviewFindingsCommand)
  .de(de_ListAccessPreviewFindingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAccessPreviewFindingsRequest;
      output: ListAccessPreviewFindingsResponse;
    };
    sdk: {
      input: ListAccessPreviewFindingsCommandInput;
      output: ListAccessPreviewFindingsCommandOutput;
    };
  };
}
