// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListResourcesForWebACLRequest, ListResourcesForWebACLResponse } from "../models/models_0";
import { de_ListResourcesForWebACLCommand, se_ListResourcesForWebACLCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListResourcesForWebACLCommand}.
 */
export interface ListResourcesForWebACLCommandInput extends ListResourcesForWebACLRequest {}
/**
 * @public
 *
 * The output of {@link ListResourcesForWebACLCommand}.
 */
export interface ListResourcesForWebACLCommandOutput extends ListResourcesForWebACLResponse, __MetadataBearer {}

/**
 * <p>Retrieves an array of the Amazon Resource Names (ARNs) for the regional resources that
 *       are associated with the specified web ACL. </p>
 *          <p>For Amazon CloudFront, don't use this call. Instead, use the CloudFront call
 *           <code>ListDistributionsByWebACLId</code>. For information, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributionsByWebACLId.html">ListDistributionsByWebACLId</a>
 *           in the <i>Amazon CloudFront API Reference</i>. </p>
 *          <p>
 *             <b>Required permissions for customer-managed IAM policies</b>
 *          </p>
 *          <p>This call requires permissions that are specific to the protected resource type.
 *     For details, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/security_iam_service-with-iam.html#security_iam_action-ListResourcesForWebACL">Permissions for ListResourcesForWebACL</a> in the <i>WAF Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, ListResourcesForWebACLCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, ListResourcesForWebACLCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const input = { // ListResourcesForWebACLRequest
 *   WebACLArn: "STRING_VALUE", // required
 *   ResourceType: "APPLICATION_LOAD_BALANCER" || "API_GATEWAY" || "APPSYNC" || "COGNITO_USER_POOL" || "APP_RUNNER_SERVICE" || "VERIFIED_ACCESS_INSTANCE",
 * };
 * const command = new ListResourcesForWebACLCommand(input);
 * const response = await client.send(command);
 * // { // ListResourcesForWebACLResponse
 * //   ResourceArns: [ // ResourceArns
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListResourcesForWebACLCommandInput - {@link ListResourcesForWebACLCommandInput}
 * @returns {@link ListResourcesForWebACLCommandOutput}
 * @see {@link ListResourcesForWebACLCommandInput} for command's `input` shape.
 * @see {@link ListResourcesForWebACLCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for WAFV2Client's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *  <p>Your request is valid, but WAF couldn’t perform the operation because of a system
 *          problem. Retry your request. </p>
 *
 * @throws {@link WAFInvalidOperationException} (client fault)
 *  <p>The operation isn't valid. </p>
 *
 * @throws {@link WAFInvalidParameterException} (client fault)
 *  <p>The operation failed because WAF didn't recognize a parameter in the request. For
 *          example: </p>
 *          <ul>
 *             <li>
 *                <p>You specified a parameter name or value that isn't valid.</p>
 *             </li>
 *             <li>
 *                <p>Your nested statement isn't valid. You might have tried to nest a statement that
 *                can’t be nested. </p>
 *             </li>
 *             <li>
 *                <p>You tried to update a <code>WebACL</code> with a <code>DefaultAction</code> that
 *                isn't among the types available at <a>DefaultAction</a>.</p>
 *             </li>
 *             <li>
 *                <p>Your request references an ARN that is malformed, or corresponds to a resource
 *                with which a web ACL can't be associated.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link WAFNonexistentItemException} (client fault)
 *  <p>WAF couldn’t perform the operation because your resource doesn't exist.
 *        If you've just created a resource that you're using in this operation, you might
 *        just need to wait a few minutes. It can take from a few seconds to a number of minutes
 *        for changes to propagate. </p>
 *
 * @throws {@link WAFV2ServiceException}
 * <p>Base exception class for all service exceptions from WAFV2 service.</p>
 *
 * @public
 */
export class ListResourcesForWebACLCommand extends $Command
  .classBuilder<
    ListResourcesForWebACLCommandInput,
    ListResourcesForWebACLCommandOutput,
    WAFV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WAFV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSWAF_20190729", "ListResourcesForWebACL", {})
  .n("WAFV2Client", "ListResourcesForWebACLCommand")
  .f(void 0, void 0)
  .ser(se_ListResourcesForWebACLCommand)
  .de(de_ListResourcesForWebACLCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResourcesForWebACLRequest;
      output: ListResourcesForWebACLResponse;
    };
    sdk: {
      input: ListResourcesForWebACLCommandInput;
      output: ListResourcesForWebACLCommandOutput;
    };
  };
}
