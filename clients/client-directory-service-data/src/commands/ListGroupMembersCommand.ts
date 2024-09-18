// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  DirectoryServiceDataClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DirectoryServiceDataClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListGroupMembersRequest,
  ListGroupMembersRequestFilterSensitiveLog,
  ListGroupMembersResult,
  ListGroupMembersResultFilterSensitiveLog,
} from "../models/models_0";
import { de_ListGroupMembersCommand, se_ListGroupMembersCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListGroupMembersCommand}.
 */
export interface ListGroupMembersCommandInput extends ListGroupMembersRequest {}
/**
 * @public
 *
 * The output of {@link ListGroupMembersCommand}.
 */
export interface ListGroupMembersCommandOutput extends ListGroupMembersResult, __MetadataBearer {}

/**
 * <p> Returns member information for the specified group. </p>
 *          <p> This operation supports pagination with the use of the <code>NextToken</code> request and
 *       response parameters. If more results are available, the
 *         <code>ListGroupMembers.NextToken</code> member contains a token that you pass in the next
 *       call to <code>ListGroupMembers</code>. This retrieves the next set of items. </p>
 *          <p> You can also specify a maximum number of return results with the <code>MaxResults</code>
 *       parameter. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceDataClient, ListGroupMembersCommand } from "@aws-sdk/client-directory-service-data"; // ES Modules import
 * // const { DirectoryServiceDataClient, ListGroupMembersCommand } = require("@aws-sdk/client-directory-service-data"); // CommonJS import
 * const client = new DirectoryServiceDataClient(config);
 * const input = { // ListGroupMembersRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   Realm: "STRING_VALUE",
 *   MemberRealm: "STRING_VALUE",
 *   SAMAccountName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListGroupMembersCommand(input);
 * const response = await client.send(command);
 * // { // ListGroupMembersResult
 * //   DirectoryId: "STRING_VALUE",
 * //   Realm: "STRING_VALUE",
 * //   MemberRealm: "STRING_VALUE",
 * //   Members: [ // MemberList
 * //     { // Member
 * //       SID: "STRING_VALUE", // required
 * //       SAMAccountName: "STRING_VALUE", // required
 * //       MemberType: "USER" || "GROUP" || "COMPUTER", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListGroupMembersCommandInput - {@link ListGroupMembersCommandInput}
 * @returns {@link ListGroupMembersCommandOutput}
 * @see {@link ListGroupMembersCommandInput} for command's `input` shape.
 * @see {@link ListGroupMembersCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceDataClientResolvedConfig | config} for DirectoryServiceDataClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have permission to perform the request or access the directory. It can also
 *       occur when the <code>DirectoryId</code> doesn't exist or the user, member, or group might be
 *       outside of your organizational unit (OU). </p>
 *          <p> Make sure that you have the authentication and authorization to perform the action.
 *       Review the directory information in the request, and make sure that the object isn't outside
 *       of your OU. </p>
 *
 * @throws {@link DirectoryUnavailableException} (client fault)
 *  <p> The request could not be completed due to a problem in the configuration or current state
 *       of the specified directory. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> The operation didn't succeed because an internal error occurred. Try again later. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The resource couldn't be found. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p> The limit on the number of requests per second has been exceeded. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The request isn't valid. Review the details in the error message to update the invalid
 *       parameters or values in your request. </p>
 *
 * @throws {@link DirectoryServiceDataServiceException}
 * <p>Base exception class for all service exceptions from DirectoryServiceData service.</p>
 *
 * @public
 */
export class ListGroupMembersCommand extends $Command
  .classBuilder<
    ListGroupMembersCommandInput,
    ListGroupMembersCommandOutput,
    DirectoryServiceDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceDataClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DirectoryServiceData", "ListGroupMembers", {})
  .n("DirectoryServiceDataClient", "ListGroupMembersCommand")
  .f(ListGroupMembersRequestFilterSensitiveLog, ListGroupMembersResultFilterSensitiveLog)
  .ser(se_ListGroupMembersCommand)
  .de(de_ListGroupMembersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListGroupMembersRequest;
      output: ListGroupMembersResult;
    };
    sdk: {
      input: ListGroupMembersCommandInput;
      output: ListGroupMembersCommandOutput;
    };
  };
}
