// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmplifyUIBuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyUIBuilderClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ExportFormsRequest, ExportFormsResponse } from "../models/models_0";
import { de_ExportFormsCommand, se_ExportFormsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ExportFormsCommand}.
 */
export interface ExportFormsCommandInput extends ExportFormsRequest {}
/**
 * @public
 *
 * The output of {@link ExportFormsCommand}.
 */
export interface ExportFormsCommandOutput extends ExportFormsResponse, __MetadataBearer {}

/**
 * <p>Exports form configurations to code that is ready to integrate into an Amplify app.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyUIBuilderClient, ExportFormsCommand } from "@aws-sdk/client-amplifyuibuilder"; // ES Modules import
 * // const { AmplifyUIBuilderClient, ExportFormsCommand } = require("@aws-sdk/client-amplifyuibuilder"); // CommonJS import
 * const client = new AmplifyUIBuilderClient(config);
 * const input = { // ExportFormsRequest
 *   appId: "STRING_VALUE", // required
 *   environmentName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ExportFormsCommand(input);
 * const response = await client.send(command);
 * // { // ExportFormsResponse
 * //   entities: [ // FormList // required
 * //     { // Form
 * //       appId: "STRING_VALUE", // required
 * //       environmentName: "STRING_VALUE", // required
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       formActionType: "create" || "update", // required
 * //       style: { // FormStyle
 * //         horizontalGap: { // FormStyleConfig Union: only one key present
 * //           tokenReference: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //         verticalGap: {//  Union: only one key present
 * //           tokenReference: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //         outerPadding: {//  Union: only one key present
 * //           tokenReference: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //       },
 * //       dataType: { // FormDataTypeConfig
 * //         dataSourceType: "STRING_VALUE", // required
 * //         dataTypeName: "STRING_VALUE", // required
 * //       },
 * //       fields: { // FieldsMap // required
 * //         "<keys>": { // FieldConfig
 * //           label: "STRING_VALUE",
 * //           position: { // FieldPosition Union: only one key present
 * //             fixed: "first",
 * //             rightOf: "STRING_VALUE",
 * //             below: "STRING_VALUE",
 * //           },
 * //           excluded: true || false,
 * //           inputType: { // FieldInputConfig
 * //             type: "STRING_VALUE", // required
 * //             required: true || false,
 * //             readOnly: true || false,
 * //             placeholder: "STRING_VALUE",
 * //             defaultValue: "STRING_VALUE",
 * //             descriptiveText: "STRING_VALUE",
 * //             defaultChecked: true || false,
 * //             defaultCountryCode: "STRING_VALUE",
 * //             valueMappings: { // ValueMappings
 * //               values: [ // ValueMappingList // required
 * //                 { // ValueMapping
 * //                   displayValue: { // FormInputValueProperty
 * //                     value: "STRING_VALUE",
 * //                     bindingProperties: { // FormInputValuePropertyBindingProperties
 * //                       property: "STRING_VALUE", // required
 * //                       field: "STRING_VALUE",
 * //                     },
 * //                     concat: [ // FormInputValuePropertyList
 * //                       {
 * //                         value: "STRING_VALUE",
 * //                         bindingProperties: {
 * //                           property: "STRING_VALUE", // required
 * //                           field: "STRING_VALUE",
 * //                         },
 * //                         concat: [
 * //                           "<FormInputValueProperty>",
 * //                         ],
 * //                       },
 * //                     ],
 * //                   },
 * //                   value: "<FormInputValueProperty>", // required
 * //                 },
 * //               ],
 * //               bindingProperties: { // FormInputBindingProperties
 * //                 "<keys>": { // FormInputBindingPropertiesValue
 * //                   type: "STRING_VALUE",
 * //                   bindingProperties: { // FormInputBindingPropertiesValueProperties
 * //                     model: "STRING_VALUE",
 * //                   },
 * //                 },
 * //               },
 * //             },
 * //             name: "STRING_VALUE",
 * //             minValue: Number("float"),
 * //             maxValue: Number("float"),
 * //             step: Number("float"),
 * //             value: "STRING_VALUE",
 * //             isArray: true || false,
 * //             fileUploaderConfig: { // FileUploaderFieldConfig
 * //               accessLevel: "public" || "protected" || "private", // required
 * //               acceptedFileTypes: [ // StrValues // required
 * //                 "STRING_VALUE",
 * //               ],
 * //               showThumbnails: true || false,
 * //               isResumable: true || false,
 * //               maxFileCount: Number("int"),
 * //               maxSize: Number("int"),
 * //             },
 * //           },
 * //           validations: [ // ValidationsList
 * //             { // FieldValidationConfiguration
 * //               type: "STRING_VALUE", // required
 * //               strValues: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               numValues: [ // NumValues
 * //                 Number("int"),
 * //               ],
 * //               validationMessage: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       sectionalElements: { // SectionalElementMap // required
 * //         "<keys>": { // SectionalElement
 * //           type: "STRING_VALUE", // required
 * //           position: {//  Union: only one key present
 * //             fixed: "first",
 * //             rightOf: "STRING_VALUE",
 * //             below: "STRING_VALUE",
 * //           },
 * //           text: "STRING_VALUE",
 * //           level: Number("int"),
 * //           orientation: "STRING_VALUE",
 * //           excluded: true || false,
 * //         },
 * //       },
 * //       schemaVersion: "STRING_VALUE", // required
 * //       tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       cta: { // FormCTA
 * //         position: "top" || "bottom" || "top_and_bottom",
 * //         clear: { // FormButton
 * //           excluded: true || false,
 * //           children: "STRING_VALUE",
 * //           position: {//  Union: only one key present
 * //             fixed: "first",
 * //             rightOf: "STRING_VALUE",
 * //             below: "STRING_VALUE",
 * //           },
 * //         },
 * //         cancel: {
 * //           excluded: true || false,
 * //           children: "STRING_VALUE",
 * //           position: {//  Union: only one key present
 * //             fixed: "first",
 * //             rightOf: "STRING_VALUE",
 * //             below: "STRING_VALUE",
 * //           },
 * //         },
 * //         submit: {
 * //           excluded: true || false,
 * //           children: "STRING_VALUE",
 * //           position: {//  Union: only one key present
 * //             fixed: "first",
 * //             rightOf: "STRING_VALUE",
 * //             below: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //       labelDecorator: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ExportFormsCommandInput - {@link ExportFormsCommandInput}
 * @returns {@link ExportFormsCommandOutput}
 * @see {@link ExportFormsCommandInput} for command's `input` shape.
 * @see {@link ExportFormsCommandOutput} for command's `response` shape.
 * @see {@link AmplifyUIBuilderClientResolvedConfig | config} for AmplifyUIBuilderClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred. Please retry your request.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>An invalid or out-of-range value was supplied for the input parameter.</p>
 *
 * @throws {@link AmplifyUIBuilderServiceException}
 * <p>Base exception class for all service exceptions from AmplifyUIBuilder service.</p>
 *
 * @public
 */
export class ExportFormsCommand extends $Command
  .classBuilder<
    ExportFormsCommandInput,
    ExportFormsCommandOutput,
    AmplifyUIBuilderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmplifyUIBuilderClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmplifyUIBuilder", "ExportForms", {})
  .n("AmplifyUIBuilderClient", "ExportFormsCommand")
  .f(void 0, void 0)
  .ser(se_ExportFormsCommand)
  .de(de_ExportFormsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExportFormsRequest;
      output: ExportFormsResponse;
    };
    sdk: {
      input: ExportFormsCommandInput;
      output: ExportFormsCommandOutput;
    };
  };
}
