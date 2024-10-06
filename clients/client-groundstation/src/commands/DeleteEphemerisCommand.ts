// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { DeleteEphemerisRequest, EphemerisIdResponse } from "../models/models_0";
import { de_DeleteEphemerisCommand, se_DeleteEphemerisCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteEphemerisCommand}.
 */
export interface DeleteEphemerisCommandInput extends DeleteEphemerisRequest {}
/**
 * @public
 *
 * The output of {@link DeleteEphemerisCommand}.
 */
export interface DeleteEphemerisCommandOutput extends EphemerisIdResponse, __MetadataBearer {}

/**
 * <p>Deletes an ephemeris</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, DeleteEphemerisCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, DeleteEphemerisCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const input = { // DeleteEphemerisRequest
 *   ephemerisId: "STRING_VALUE", // required
 * };
 * const command = new DeleteEphemerisCommand(input);
 * const response = await client.send(command);
 * // { // EphemerisIdResponse
 * //   ephemerisId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteEphemerisCommandInput - {@link DeleteEphemerisCommandInput}
 * @returns {@link DeleteEphemerisCommandOutput}
 * @see {@link DeleteEphemerisCommandInput} for command's `input` shape.
 * @see {@link DeleteEphemerisCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for GroundStationClient's `config` shape.
 *
 * @throws {@link DependencyException} (server fault)
 *  <p>Dependency encountered an error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource was not found.</p>
 *
 * @throws {@link GroundStationServiceException}
 * <p>Base exception class for all service exceptions from GroundStation service.</p>
 *
 * @public
 */
export class DeleteEphemerisCommand extends $Command
  .classBuilder<
    DeleteEphemerisCommandInput,
    DeleteEphemerisCommandOutput,
    GroundStationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GroundStationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GroundStation", "DeleteEphemeris", {})
  .n("GroundStationClient", "DeleteEphemerisCommand")
  .f(void 0, void 0)
  .ser(se_DeleteEphemerisCommand)
  .de(de_DeleteEphemerisCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEphemerisRequest;
      output: EphemerisIdResponse;
    };
    sdk: {
      input: DeleteEphemerisCommandInput;
      output: DeleteEphemerisCommandOutput;
    };
  };
}
