// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { IoTWirelessServiceException as __BaseException } from "./IoTWirelessServiceException";

import {
  ApplicationConfig,
  CertificateList,
  ConnectionStatusEventConfiguration,
  ConnectionStatusResourceTypeEventConfiguration,
  DeviceRegistrationStateEventConfiguration,
  DeviceRegistrationStateResourceTypeEventConfiguration,
  DownlinkQueueMessage,
  EventNotificationPartnerType,
  ExpressionType,
  FuotaDeviceStatus,
  IdentifierType,
  ImportTaskStatus,
  JoinEventConfiguration,
  JoinResourceTypeEventConfiguration,
  LogLevel,
  LoRaWANFuotaTask,
  LoRaWANGateway,
  LoRaWANGatewayVersion,
  LoRaWANMulticast,
  LoRaWANMulticastSession,
  LoRaWANSendDataToDevice,
  MessageDeliveryStatusEventConfiguration,
  MessageDeliveryStatusResourceTypeEventConfiguration,
  PartnerType,
  PositionConfigurationFec,
  PositionConfigurationStatus,
  Positioning,
  PositioningConfigStatus,
  PositionResourceType,
  PositionSolverDetails,
  ProximityEventConfiguration,
  ProximityResourceTypeEventConfiguration,
  SidewalkGetStartImportInfo,
  SummaryMetricConfiguration,
  Tag,
  TraceContent,
  WirelessDeviceLogOption,
  WirelessDeviceSidewalkStatus,
  WirelessDeviceType,
  WirelessGatewayLogOption,
} from "./models_0";

/**
 * <p>The wrapper for a position configuration.</p>
 * @public
 */
export interface PositionConfigurationItem {
  /**
   * <p>Resource identifier for the position configuration.</p>
   * @public
   */
  ResourceIdentifier?: string;

  /**
   * <p>Resource type of the resource for the position configuration.</p>
   * @public
   */
  ResourceType?: PositionResourceType;

  /**
   * <p>The details of the positioning solver object used to compute the location.</p>
   * @public
   */
  Solvers?: PositionSolverDetails;

  /**
   * <p>The position data destination that describes the AWS IoT rule that processes the
   *             device's position data for use by AWS IoT Core for LoRaWAN.</p>
   * @public
   */
  Destination?: string;
}

/**
 * @public
 */
export interface ListPositionConfigurationsResponse {
  /**
   * <p>A list of position configurations.</p>
   * @public
   */
  PositionConfigurationList?: PositionConfigurationItem[];

  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListQueuedMessagesRequest {
  /**
   * <p>The ID of a given wireless device which the downlink message packets are being
   *             sent.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code> value from a previous
   *             response; otherwise <b>null</b> to receive the first set of
   *             results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in this operation.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The wireless device type, whic can be either Sidewalk or LoRaWAN.</p>
   * @public
   */
  WirelessDeviceType?: WirelessDeviceType;
}

/**
 * @public
 */
export interface ListQueuedMessagesResponse {
  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code> value from a previous
   *             response; otherwise <b>null</b> to receive the first set of
   *             results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The messages in the downlink queue.</p>
   * @public
   */
  DownlinkQueueMessagesList?: DownlinkQueueMessage[];
}

/**
 * @public
 */
export interface ListServiceProfilesRequest {
  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code> value from a previous
   *             response; otherwise <b>null</b> to receive the first set of
   *             results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in this operation.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>Information about a service profile.</p>
 * @public
 */
export interface ServiceProfile {
  /**
   * <p>The Amazon Resource Name of the resource.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The name of the resource.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The ID of the service profile.</p>
   * @public
   */
  Id?: string;
}

/**
 * @public
 */
export interface ListServiceProfilesResponse {
  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The list of service profiles.</p>
   * @public
   */
  ServiceProfileList?: ServiceProfile[];
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource for which you want to list tags.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags to attach to the specified resource. Tags are metadata that you can use to
   *             manage a resource.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface ListWirelessDeviceImportTasksRequest {
  /**
   * <p>The maximum number of results to return in this operation.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code> value from a previous
   *             response; otherwise <code>null</code> to receive the first set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>Information about an import task for wireless devices.</p>
 * @public
 */
export interface WirelessDeviceImportTask {
  /**
   * <p>The ID of the wireless device import task.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The ARN (Amazon Resource Name) of the wireless device import task.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The name of the Sidewalk destination that that describes the IoT rule to route
   *             messages from the device in the import task that will be onboarded to AWS IoT
   *             Wireless</p>
   * @public
   */
  DestinationName?: string;

  /**
   * <p>The Sidewalk-related information of the wireless device import task.</p>
   * @public
   */
  Sidewalk?: SidewalkGetStartImportInfo;

  /**
   * <p>The time at which the import task was created.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>The status information of the wireless device import task.</p>
   * @public
   */
  Status?: ImportTaskStatus;

  /**
   * <p>The reason that provides additional information about the import task status.</p>
   * @public
   */
  StatusReason?: string;

  /**
   * <p>The summary information of count of wireless devices that are waiting for the control
   *             log to be added to an import task.</p>
   * @public
   */
  InitializedImportedDeviceCount?: number;

  /**
   * <p>The summary information of count of wireless devices in an import task that are
   *             waiting in the queue to be onboarded.</p>
   * @public
   */
  PendingImportedDeviceCount?: number;

  /**
   * <p>The summary information of count of wireless devices in an import task that have been
   *             onboarded to the import task.</p>
   * @public
   */
  OnboardedImportedDeviceCount?: number;

  /**
   * <p>The summary information of count of wireless devices in an import task that failed to
   *             onboarded to the import task.</p>
   * @public
   */
  FailedImportedDeviceCount?: number;
}

/**
 * @public
 */
export interface ListWirelessDeviceImportTasksResponse {
  /**
   * <p>The token to use to get the next set of results, or <code>null</code> if there are no
   *             additional results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>List of import tasks and summary information of onboarding status of devices in each
   *             import task.</p>
   * @public
   */
  WirelessDeviceImportTaskList?: WirelessDeviceImportTask[];
}

/**
 * @public
 */
export interface ListWirelessDevicesRequest {
  /**
   * <p>The maximum number of results to return in this operation.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code> value from a previous
   *             response; otherwise <b>null</b> to receive the first set of
   *             results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>A filter to list only the wireless devices that use this destination.</p>
   * @public
   */
  DestinationName?: string;

  /**
   * <p>A filter to list only the wireless devices that use this device profile.</p>
   * @public
   */
  DeviceProfileId?: string;

  /**
   * <p>A filter to list only the wireless devices that use this service profile.</p>
   * @public
   */
  ServiceProfileId?: string;

  /**
   * <p>A filter to list only the wireless devices that use this wireless device type.</p>
   * @public
   */
  WirelessDeviceType?: WirelessDeviceType;

  /**
   * <p>The ID of a FUOTA task.</p>
   * @public
   */
  FuotaTaskId?: string;

  /**
   * <p>The ID of the multicast group.</p>
   * @public
   */
  MulticastGroupId?: string;
}

/**
 * <p>LoRaWAN object for list functions.</p>
 * @public
 */
export interface LoRaWANListDevice {
  /**
   * <p>The DevEUI value.</p>
   * @public
   */
  DevEui?: string;
}

/**
 * <p>Sidewalk object used by list functions.</p>
 * @public
 */
export interface SidewalkListDevice {
  /**
   * <p>The Sidewalk Amazon ID.</p>
   * @public
   */
  AmazonId?: string;

  /**
   * <p>The sidewalk device identification.</p>
   * @public
   */
  SidewalkId?: string;

  /**
   * <p>The Sidewalk manufacturing series number.</p>
   * @public
   */
  SidewalkManufacturingSn?: string;

  /**
   * <p>The sidewalk device certificates for Ed25519 and P256r1.</p>
   * @public
   */
  DeviceCertificates?: CertificateList[];

  /**
   * <p>Sidewalk object used by list functions.</p>
   * @public
   */
  DeviceProfileId?: string;

  /**
   * <p>The status of the Sidewalk devices, such as provisioned or registered.</p>
   * @public
   */
  Status?: WirelessDeviceSidewalkStatus;
}

/**
 * <p>Information about a wireless device's operation.</p>
 * @public
 */
export interface WirelessDeviceStatistics {
  /**
   * <p>The Amazon Resource Name of the resource.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The ID of the wireless device reporting the data.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The wireless device type.</p>
   * @public
   */
  Type?: WirelessDeviceType;

  /**
   * <p>The name of the resource.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The name of the destination to which the device is assigned.</p>
   * @public
   */
  DestinationName?: string;

  /**
   * <p>The date and time when the most recent uplink was received.</p>
   *          <note>
   *             <p>Theis value is only valid for 3 months.</p>
   *          </note>
   * @public
   */
  LastUplinkReceivedAt?: string;

  /**
   * <p>LoRaWAN device info.</p>
   * @public
   */
  LoRaWAN?: LoRaWANListDevice;

  /**
   * <p>The Sidewalk account credentials.</p>
   * @public
   */
  Sidewalk?: SidewalkListDevice;

  /**
   * <p>The status of a wireless device in a FUOTA task.</p>
   * @public
   */
  FuotaDeviceStatus?: FuotaDeviceStatus;

  /**
   * <p>The status of the wireless device in the multicast group.</p>
   * @public
   */
  MulticastDeviceStatus?: string;

  /**
   * <p>Id of the multicast group.</p>
   * @public
   */
  McGroupId?: number;
}

/**
 * @public
 */
export interface ListWirelessDevicesResponse {
  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The ID of the wireless device.</p>
   * @public
   */
  WirelessDeviceList?: WirelessDeviceStatistics[];
}

/**
 * @public
 */
export interface ListWirelessGatewaysRequest {
  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code> value from a previous
   *             response; otherwise <b>null</b> to receive the first set of
   *             results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in this operation.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>Information about a wireless gateway's operation.</p>
 * @public
 */
export interface WirelessGatewayStatistics {
  /**
   * <p>The Amazon Resource Name of the resource.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The ID of the wireless gateway reporting the data.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The name of the resource.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The description of the resource.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>LoRaWAN gateway info.</p>
   * @public
   */
  LoRaWAN?: LoRaWANGateway;

  /**
   * <p>The date and time when the most recent uplink was received.</p>
   *          <note>
   *             <p>This value is only valid for 3 months.</p>
   *          </note>
   * @public
   */
  LastUplinkReceivedAt?: string;
}

/**
 * @public
 */
export interface ListWirelessGatewaysResponse {
  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The ID of the wireless gateway.</p>
   * @public
   */
  WirelessGatewayList?: WirelessGatewayStatistics[];
}

/**
 * @public
 * @enum
 */
export const WirelessGatewayTaskDefinitionType = {
  UPDATE: "UPDATE",
} as const;

/**
 * @public
 */
export type WirelessGatewayTaskDefinitionType =
  (typeof WirelessGatewayTaskDefinitionType)[keyof typeof WirelessGatewayTaskDefinitionType];

/**
 * @public
 */
export interface ListWirelessGatewayTaskDefinitionsRequest {
  /**
   * <p>The maximum number of results to return in this operation.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code> value from a previous
   *             response; otherwise <b>null</b> to receive the first set of
   *             results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>A filter to list only the wireless gateway task definitions that use this task
   *             definition type.</p>
   * @public
   */
  TaskDefinitionType?: WirelessGatewayTaskDefinitionType;
}

/**
 * <p>LoRaWANUpdateGatewayTaskEntry object.</p>
 * @public
 */
export interface LoRaWANUpdateGatewayTaskEntry {
  /**
   * <p>The version of the gateways that should receive the update.</p>
   * @public
   */
  CurrentVersion?: LoRaWANGatewayVersion;

  /**
   * <p>The firmware version to update the gateway to.</p>
   * @public
   */
  UpdateVersion?: LoRaWANGatewayVersion;
}

/**
 * <p>UpdateWirelessGatewayTaskEntry object.</p>
 * @public
 */
export interface UpdateWirelessGatewayTaskEntry {
  /**
   * <p>The ID of the new wireless gateway task entry.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The properties that relate to the LoRaWAN wireless gateway.</p>
   * @public
   */
  LoRaWAN?: LoRaWANUpdateGatewayTaskEntry;

  /**
   * <p>The Amazon Resource Name of the resource.</p>
   * @public
   */
  Arn?: string;
}

/**
 * @public
 */
export interface ListWirelessGatewayTaskDefinitionsResponse {
  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The list of task definitions.</p>
   * @public
   */
  TaskDefinitions?: UpdateWirelessGatewayTaskEntry[];
}

/**
 * <p>Information about the Semtech GNSS solver configuration.</p>
 * @public
 */
export interface SemtechGnssConfiguration {
  /**
   * <p>The status indicating whether the solver is enabled.</p>
   * @public
   */
  Status: PositionConfigurationStatus | undefined;

  /**
   * <p>Whether forward error correction is enabled.</p>
   * @public
   */
  Fec: PositionConfigurationFec | undefined;
}

/**
 * <p>The wrapper for position solver configurations.</p>
 * @public
 */
export interface PositionSolverConfigurations {
  /**
   * <p>The Semtech GNSS solver configuration object.</p>
   * @public
   */
  SemtechGnss?: SemtechGnssConfiguration;
}

/**
 * @public
 */
export interface PutPositionConfigurationRequest {
  /**
   * <p>Resource identifier used to update the position configuration.</p>
   * @public
   */
  ResourceIdentifier: string | undefined;

  /**
   * <p>Resource type of the resource for which you want to update the position
   *             configuration.</p>
   * @public
   */
  ResourceType: PositionResourceType | undefined;

  /**
   * <p>The positioning solvers used to update the position configuration of the
   *             resource.</p>
   * @public
   */
  Solvers?: PositionSolverConfigurations;

  /**
   * <p>The position data destination that describes the AWS IoT rule that processes the
   *             device's position data for use by AWS IoT Core for LoRaWAN.</p>
   * @public
   */
  Destination?: string;
}

/**
 * @public
 */
export interface PutPositionConfigurationResponse {}

/**
 * @public
 */
export interface PutResourceLogLevelRequest {
  /**
   * <p>The identifier of the resource. For a Wireless Device, it is the wireless device ID.
   *             For a wireless gateway, it is the wireless gateway ID.</p>
   * @public
   */
  ResourceIdentifier: string | undefined;

  /**
   * <p>The type of the resource, which can be <code>WirelessDevice</code> or
   *                 <code>WirelessGateway</code>.</p>
   * @public
   */
  ResourceType: string | undefined;

  /**
   * <p>The log level for a log message. The log levels can be disabled, or set to
   *                 <code>ERROR</code> to display less verbose logs containing only error information,
   *             or to <code>INFO</code> for more detailed logs.</p>
   * @public
   */
  LogLevel: LogLevel | undefined;
}

/**
 * @public
 */
export interface PutResourceLogLevelResponse {}

/**
 * @public
 */
export interface ResetAllResourceLogLevelsRequest {}

/**
 * @public
 */
export interface ResetAllResourceLogLevelsResponse {}

/**
 * @public
 */
export interface ResetResourceLogLevelRequest {
  /**
   * <p>The identifier of the resource. For a Wireless Device, it is the wireless device ID.
   *             For a wireless gateway, it is the wireless gateway ID.</p>
   * @public
   */
  ResourceIdentifier: string | undefined;

  /**
   * <p>The type of the resource, which can be <code>WirelessDevice</code> or
   *                 <code>WirelessGateway</code>.</p>
   * @public
   */
  ResourceType: string | undefined;
}

/**
 * @public
 */
export interface ResetResourceLogLevelResponse {}

/**
 * <p>The metadata information of the LoRaWAN multicast group.</p>
 * @public
 */
export interface LoRaWANMulticastMetadata {
  /**
   * <p>The Fport value.</p>
   * @public
   */
  FPort?: number;
}

/**
 * <p>Wireless metadata that is to be sent to multicast group.</p>
 * @public
 */
export interface MulticastWirelessMetadata {
  /**
   * <p>The metadata information of the LoRaWAN multicast group.</p>
   * @public
   */
  LoRaWAN?: LoRaWANMulticastMetadata;
}

/**
 * @public
 */
export interface SendDataToMulticastGroupRequest {
  /**
   * <p>The ID of the multicast group.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The binary to be sent to the end device, encoded in base64.</p>
   * @public
   */
  PayloadData: string | undefined;

  /**
   * <p>Wireless metadata that is to be sent to multicast group.</p>
   * @public
   */
  WirelessMetadata: MulticastWirelessMetadata | undefined;
}

/**
 * @public
 */
export interface SendDataToMulticastGroupResponse {
  /**
   * <p>ID of a multicast group message.</p>
   * @public
   */
  MessageId?: string;
}

/**
 * @public
 * @enum
 */
export const MessageType = {
  CUSTOM_COMMAND_ID_GET: "CUSTOM_COMMAND_ID_GET",
  CUSTOM_COMMAND_ID_NOTIFY: "CUSTOM_COMMAND_ID_NOTIFY",
  CUSTOM_COMMAND_ID_RESP: "CUSTOM_COMMAND_ID_RESP",
  CUSTOM_COMMAND_ID_SET: "CUSTOM_COMMAND_ID_SET",
} as const;

/**
 * @public
 */
export type MessageType = (typeof MessageType)[keyof typeof MessageType];

/**
 * <p>Information about a Sidewalk router.</p>
 * @public
 */
export interface SidewalkSendDataToDevice {
  /**
   * <p>The sequence number.</p>
   * @public
   */
  Seq?: number;

  /**
   * <p>Sidewalk device message type. Default value is
   *             <code>CUSTOM_COMMAND_ID_NOTIFY</code>.</p>
   * @public
   */
  MessageType?: MessageType;

  /**
   * <p>The duration of time in seconds to retry sending the ACK.</p>
   * @public
   */
  AckModeRetryDurationSecs?: number;
}

/**
 * <p>WirelessMetadata object.</p>
 * @public
 */
export interface WirelessMetadata {
  /**
   * <p>LoRaWAN device info.</p>
   * @public
   */
  LoRaWAN?: LoRaWANSendDataToDevice;

  /**
   * <p>The Sidewalk account credentials.</p>
   * @public
   */
  Sidewalk?: SidewalkSendDataToDevice;
}

/**
 * @public
 */
export interface SendDataToWirelessDeviceRequest {
  /**
   * <p>The ID of the wireless device to receive the data.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The transmit mode to use to send data to the wireless device. Can be: <code>0</code>
   *             for UM (unacknowledge mode) or <code>1</code> for AM (acknowledge mode).</p>
   * @public
   */
  TransmitMode: number | undefined;

  /**
   * <p>The binary to be sent to the end device, encoded in base64.</p>
   * @public
   */
  PayloadData: string | undefined;

  /**
   * <p>Metadata about the message request.</p>
   * @public
   */
  WirelessMetadata?: WirelessMetadata;
}

/**
 * @public
 */
export interface SendDataToWirelessDeviceResponse {
  /**
   * <p>The ID of the message sent to the wireless device.</p>
   * @public
   */
  MessageId?: string;
}

/**
 * @public
 */
export interface StartBulkAssociateWirelessDeviceWithMulticastGroupRequest {
  /**
   * <p>The ID of the multicast group.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>Query string used to search for wireless devices as part of the bulk associate and
   *             disassociate process.</p>
   * @public
   */
  QueryString?: string;

  /**
   * <p>The tag to attach to the specified resource. Tags are metadata that you can use to
   *             manage a resource.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface StartBulkAssociateWirelessDeviceWithMulticastGroupResponse {}

/**
 * @public
 */
export interface StartBulkDisassociateWirelessDeviceFromMulticastGroupRequest {
  /**
   * <p>The ID of the multicast group.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>Query string used to search for wireless devices as part of the bulk associate and
   *             disassociate process.</p>
   * @public
   */
  QueryString?: string;

  /**
   * <p>The tag to attach to the specified resource. Tags are metadata that you can use to
   *             manage a resource.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface StartBulkDisassociateWirelessDeviceFromMulticastGroupResponse {}

/**
 * <p>The LoRaWAN information used to start a FUOTA task.</p>
 * @public
 */
export interface LoRaWANStartFuotaTask {
  /**
   * <p>Start time of a FUOTA task.</p>
   * @public
   */
  StartTime?: Date;
}

/**
 * @public
 */
export interface StartFuotaTaskRequest {
  /**
   * <p>The ID of a FUOTA task.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The LoRaWAN information used to start a FUOTA task.</p>
   * @public
   */
  LoRaWAN?: LoRaWANStartFuotaTask;
}

/**
 * @public
 */
export interface StartFuotaTaskResponse {}

/**
 * @public
 */
export interface StartMulticastGroupSessionRequest {
  /**
   * <p>The ID of the multicast group.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The LoRaWAN information used with the multicast session.</p>
   * @public
   */
  LoRaWAN: LoRaWANMulticastSession | undefined;
}

/**
 * @public
 */
export interface StartMulticastGroupSessionResponse {}

/**
 * <p>Information about an import task created for an individual Sidewalk device.</p>
 * @public
 */
export interface SidewalkSingleStartImportInfo {
  /**
   * <p>The Sidewalk manufacturing serial number (SMSN) of the device added to the import
   *             task.</p>
   * @public
   */
  SidewalkManufacturingSn?: string;
}

/**
 * @public
 */
export interface StartSingleWirelessDeviceImportTaskRequest {
  /**
   * <p>The name of the Sidewalk destination that describes the IoT rule to route messages
   *             from the device in the import task that will be onboarded to AWS IoT Wireless.</p>
   * @public
   */
  DestinationName: string | undefined;

  /**
   * <p>Each resource must have a unique client request token. If you try to create a new
   *             resource with the same token as a resource that already exists, an exception occurs. If
   *             you omit this value, AWS SDKs will automatically generate a unique client
   *             request.</p>
   * @public
   */
  ClientRequestToken?: string;

  /**
   * <p>The name of the wireless device for which an import task is being started.</p>
   * @public
   */
  DeviceName?: string;

  /**
   * <p>The tag to attach to the specified resource. Tags are metadata that you can use to
   *             manage a resource.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>The Sidewalk-related parameters for importing a single wireless device.</p>
   * @public
   */
  Sidewalk: SidewalkSingleStartImportInfo | undefined;
}

/**
 * @public
 */
export interface StartSingleWirelessDeviceImportTaskResponse {
  /**
   * <p>The import task ID.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The ARN (Amazon Resource Name) of the import task.</p>
   * @public
   */
  Arn?: string;
}

/**
 * <p>Information about an import task created for bulk provisioning.</p>
 * @public
 */
export interface SidewalkStartImportInfo {
  /**
   * <p>The CSV file contained in an S3 bucket that's used for adding devices to an import
   *             task.</p>
   * @public
   */
  DeviceCreationFile?: string;

  /**
   * <p>The IAM role that allows AWS IoT Wireless to access the CSV file in the S3
   *             bucket.</p>
   * @public
   */
  Role?: string;
}

/**
 * @public
 */
export interface StartWirelessDeviceImportTaskRequest {
  /**
   * <p>The name of the Sidewalk destination that describes the IoT rule to route messages
   *             from the devices in the import task that are onboarded to AWS IoT Wireless.</p>
   * @public
   */
  DestinationName: string | undefined;

  /**
   * <p>Each resource must have a unique client request token. If you try to create a new
   *             resource with the same token as a resource that already exists, an exception occurs. If
   *             you omit this value, AWS SDKs will automatically generate a unique client
   *             request.</p>
   * @public
   */
  ClientRequestToken?: string;

  /**
   * <p>The tag to attach to the specified resource. Tags are metadata that you can use to
   *             manage a resource.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>The Sidewalk-related parameters for importing wireless devices that need to be
   *             provisioned in bulk.</p>
   * @public
   */
  Sidewalk: SidewalkStartImportInfo | undefined;
}

/**
 * @public
 */
export interface StartWirelessDeviceImportTaskResponse {
  /**
   * <p>The import task ID.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The ARN (Amazon Resource Name) of the import task.</p>
   * @public
   */
  Arn?: string;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource to add tags to.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>Adds to or modifies the tags of the given resource. Tags are metadata that you can use
   *             to manage a resource.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * <p>The request was denied because the resource can't have any more tags.</p>
 * @public
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>Name of the resource that exceeds maximum number of tags allowed.</p>
   * @public
   */
  ResourceName?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
    this.Message = opts.Message;
    this.ResourceName = opts.ResourceName;
  }
}

/**
 * @public
 */
export interface TestWirelessDeviceRequest {
  /**
   * <p>The ID of the wireless device to test.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface TestWirelessDeviceResponse {
  /**
   * <p>The result returned by the test.</p>
   * @public
   */
  Result?: string;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The ARN of the resource to remove tags from.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>A list of the keys of the tags to remove from the resource.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateDestinationRequest {
  /**
   * <p>The new name of the resource.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The type of value in <code>Expression</code>.</p>
   * @public
   */
  ExpressionType?: ExpressionType;

  /**
   * <p>The new rule name or topic rule to send messages to.</p>
   * @public
   */
  Expression?: string;

  /**
   * <p>A new description of the resource.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The ARN of the IAM Role that authorizes the destination.</p>
   * @public
   */
  RoleArn?: string;
}

/**
 * @public
 */
export interface UpdateDestinationResponse {}

/**
 * @public
 */
export interface UpdateEventConfigurationByResourceTypesRequest {
  /**
   * <p>Device registration state resource type event configuration object for enabling and
   *             disabling wireless gateway topic.</p>
   * @public
   */
  DeviceRegistrationState?: DeviceRegistrationStateResourceTypeEventConfiguration;

  /**
   * <p>Proximity resource type event configuration object for enabling and disabling wireless
   *             gateway topic.</p>
   * @public
   */
  Proximity?: ProximityResourceTypeEventConfiguration;

  /**
   * <p>Join resource type event configuration object for enabling and disabling wireless
   *             device topic.</p>
   * @public
   */
  Join?: JoinResourceTypeEventConfiguration;

  /**
   * <p>Connection status resource type event configuration object for enabling and disabling
   *             wireless gateway topic.</p>
   * @public
   */
  ConnectionStatus?: ConnectionStatusResourceTypeEventConfiguration;

  /**
   * <p>Message delivery status resource type event configuration object for enabling and
   *             disabling wireless device topic.</p>
   * @public
   */
  MessageDeliveryStatus?: MessageDeliveryStatusResourceTypeEventConfiguration;
}

/**
 * @public
 */
export interface UpdateEventConfigurationByResourceTypesResponse {}

/**
 * @public
 */
export interface UpdateFuotaTaskRequest {
  /**
   * <p>The ID of a FUOTA task.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The name of a FUOTA task.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The description of the new resource.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The LoRaWAN information used with a FUOTA task.</p>
   * @public
   */
  LoRaWAN?: LoRaWANFuotaTask;

  /**
   * <p>The S3 URI points to a firmware update image that is to be used with a FUOTA
   *             task.</p>
   * @public
   */
  FirmwareUpdateImage?: string;

  /**
   * <p>The firmware update role that is to be used with a FUOTA task.</p>
   * @public
   */
  FirmwareUpdateRole?: string;

  /**
   * <p>The percentage of the added fragments that are redundant. For example, if the size of
   *             the firmware image file is 100 bytes and the fragment size is 10 bytes, with
   *                 <code>RedundancyPercent</code> set to 50(%), the final number of encoded fragments
   *             is (100 / 10) + (100 / 10 * 50%) = 15.</p>
   * @public
   */
  RedundancyPercent?: number;

  /**
   * <p>The size of each fragment in bytes. This parameter is supported only for FUOTA tasks
   *             with multicast groups.</p>
   * @public
   */
  FragmentSizeBytes?: number;

  /**
   * <p>The interval for sending fragments in milliseconds, rounded to the nearest
   *             second.</p>
   *          <note>
   *             <p>This interval only determines the timing for when the Cloud sends down the
   *                 fragments to yor device. There can be a delay for when your device will receive
   *                 these fragments. This delay depends on the device's class and the communication
   *                 delay with the cloud.</p>
   *          </note>
   * @public
   */
  FragmentIntervalMS?: number;
}

/**
 * @public
 */
export interface UpdateFuotaTaskResponse {}

/**
 * @public
 */
export interface UpdateLogLevelsByResourceTypesRequest {
  /**
   * <p>The log level for a log message. The log levels can be disabled, or set to
   *                 <code>ERROR</code> to display less verbose logs containing only error information,
   *             or to <code>INFO</code> for more detailed logs.</p>
   * @public
   */
  DefaultLogLevel?: LogLevel;

  /**
   * <p>The list of wireless device log options.</p>
   * @public
   */
  WirelessDeviceLogOptions?: WirelessDeviceLogOption[];

  /**
   * <p>The list of wireless gateway log options.</p>
   * @public
   */
  WirelessGatewayLogOptions?: WirelessGatewayLogOption[];
}

/**
 * @public
 */
export interface UpdateLogLevelsByResourceTypesResponse {}

/**
 * @public
 */
export interface UpdateMetricConfigurationRequest {
  /**
   * <p>The value to be used to set summary metric configuration.</p>
   * @public
   */
  SummaryMetric?: SummaryMetricConfiguration;
}

/**
 * @public
 */
export interface UpdateMetricConfigurationResponse {}

/**
 * @public
 */
export interface UpdateMulticastGroupRequest {
  /**
   * <p>The ID of the multicast group.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The name of the multicast group.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The description of the new resource.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The LoRaWAN information that is to be used with the multicast group.</p>
   * @public
   */
  LoRaWAN?: LoRaWANMulticast;
}

/**
 * @public
 */
export interface UpdateMulticastGroupResponse {}

/**
 * @public
 */
export interface UpdateNetworkAnalyzerConfigurationRequest {
  /**
   * <p>Name of the network analyzer configuration.</p>
   * @public
   */
  ConfigurationName: string | undefined;

  /**
   * <p>Trace content for your wireless devices, gateways, and multicast groups.</p>
   * @public
   */
  TraceContent?: TraceContent;

  /**
   * <p>Wireless device resources to add to the network analyzer configuration. Provide the
   *                 <code>WirelessDeviceId</code> of the resource to add in the input array.</p>
   * @public
   */
  WirelessDevicesToAdd?: string[];

  /**
   * <p>Wireless device resources to remove from the network analyzer configuration. Provide
   *             the <code>WirelessDeviceId</code> of the resources to remove in the input array.</p>
   * @public
   */
  WirelessDevicesToRemove?: string[];

  /**
   * <p>Wireless gateway resources to add to the network analyzer configuration. Provide the
   *                 <code>WirelessGatewayId</code> of the resource to add in the input array.</p>
   * @public
   */
  WirelessGatewaysToAdd?: string[];

  /**
   * <p>Wireless gateway resources to remove from the network analyzer configuration. Provide
   *             the <code>WirelessGatewayId</code> of the resources to remove in the input array.</p>
   * @public
   */
  WirelessGatewaysToRemove?: string[];

  /**
   * <p>The description of the new resource.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>Multicast group resources to add to the network analyzer configuration. Provide the
   *             <code>MulticastGroupId</code> of the resource to add in the input array.</p>
   * @public
   */
  MulticastGroupsToAdd?: string[];

  /**
   * <p>Multicast group resources to remove from the network analyzer configuration. Provide the
   *             <code>MulticastGroupId</code> of the resources to remove in the input array.</p>
   * @public
   */
  MulticastGroupsToRemove?: string[];
}

/**
 * @public
 */
export interface UpdateNetworkAnalyzerConfigurationResponse {}

/**
 * <p>Sidewalk update.</p>
 * @public
 */
export interface SidewalkUpdateAccount {
  /**
   * <p>The new Sidewalk application server private key.</p>
   * @public
   */
  AppServerPrivateKey?: string;
}

/**
 * @public
 */
export interface UpdatePartnerAccountRequest {
  /**
   * <p>The Sidewalk account credentials.</p>
   * @public
   */
  Sidewalk: SidewalkUpdateAccount | undefined;

  /**
   * <p>The ID of the partner account to update.</p>
   * @public
   */
  PartnerAccountId: string | undefined;

  /**
   * <p>The partner type.</p>
   * @public
   */
  PartnerType: PartnerType | undefined;
}

/**
 * @public
 */
export interface UpdatePartnerAccountResponse {}

/**
 * @public
 */
export interface UpdatePositionRequest {
  /**
   * <p>Resource identifier of the resource for which position is updated.</p>
   * @public
   */
  ResourceIdentifier: string | undefined;

  /**
   * <p>Resource type of the resource for which position is updated.</p>
   * @public
   */
  ResourceType: PositionResourceType | undefined;

  /**
   * <p>The position information of the resource.</p>
   * @public
   */
  Position: number[] | undefined;
}

/**
 * @public
 */
export interface UpdatePositionResponse {}

/**
 * @public
 */
export interface UpdateResourceEventConfigurationRequest {
  /**
   * <p>Resource identifier to opt in for event messaging.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>Identifier type of the particular resource identifier for event configuration.</p>
   * @public
   */
  IdentifierType: IdentifierType | undefined;

  /**
   * <p>Partner type of the resource if the identifier type is
   *             <code>PartnerAccountId</code>
   *          </p>
   * @public
   */
  PartnerType?: EventNotificationPartnerType;

  /**
   * <p>Event configuration for the device registration state event.</p>
   * @public
   */
  DeviceRegistrationState?: DeviceRegistrationStateEventConfiguration;

  /**
   * <p>Event configuration for the proximity event.</p>
   * @public
   */
  Proximity?: ProximityEventConfiguration;

  /**
   * <p>Event configuration for the join event.</p>
   * @public
   */
  Join?: JoinEventConfiguration;

  /**
   * <p>Event configuration for the connection status event.</p>
   * @public
   */
  ConnectionStatus?: ConnectionStatusEventConfiguration;

  /**
   * <p>Event configuration for the message delivery status event.</p>
   * @public
   */
  MessageDeliveryStatus?: MessageDeliveryStatusEventConfiguration;
}

/**
 * @public
 */
export interface UpdateResourceEventConfigurationResponse {}

/**
 * @public
 */
export interface UpdateResourcePositionRequest {
  /**
   * <p>The identifier of the resource for which position information is updated. It can be
   *             the wireless device ID or the wireless gateway ID, depending on the resource
   *             type.</p>
   * @public
   */
  ResourceIdentifier: string | undefined;

  /**
   * <p>The type of resource for which position information is updated, which can be a
   *             wireless device or a wireless gateway.</p>
   * @public
   */
  ResourceType: PositionResourceType | undefined;

  /**
   * <p>The position information of the resource, displayed as a JSON payload. The payload
   *             uses the GeoJSON format, which a format that's used to encode geographic data
   *             structures. For more information, see <a href="https://geojson.org/">GeoJSON</a>.</p>
   * @public
   */
  GeoJsonPayload?: Uint8Array;
}

/**
 * @public
 */
export interface UpdateResourcePositionResponse {}

/**
 * <p>ABP device object for LoRaWAN specification v1.0.x</p>
 * @public
 */
export interface UpdateAbpV1_0_x {
  /**
   * <p>The FCnt init value.</p>
   * @public
   */
  FCntStart?: number;
}

/**
 * <p>ABP device object for LoRaWAN specification v1.1</p>
 * @public
 */
export interface UpdateAbpV1_1 {
  /**
   * <p>The FCnt init value.</p>
   * @public
   */
  FCntStart?: number;
}

/**
 * <p>Object for updating the FPorts information.</p>
 * @public
 */
export interface UpdateFPorts {
  /**
   * <p>Positioning FPorts for the ClockSync, Stream, and GNSS functions.</p>
   * @public
   */
  Positioning?: Positioning;

  /**
   * <p>LoRaWAN application, which can be used for geolocation by activating
   *             positioning.</p>
   * @public
   */
  Applications?: ApplicationConfig[];
}

/**
 * <p>LoRaWAN object for update functions.</p>
 * @public
 */
export interface LoRaWANUpdateDevice {
  /**
   * <p>The ID of the device profile for the wireless device.</p>
   * @public
   */
  DeviceProfileId?: string;

  /**
   * <p>The ID of the service profile.</p>
   * @public
   */
  ServiceProfileId?: string;

  /**
   * <p>ABP device object for update APIs for v1.1</p>
   * @public
   */
  AbpV1_1?: UpdateAbpV1_1;

  /**
   * <p>ABP device object for update APIs for v1.0.x</p>
   * @public
   */
  AbpV1_0_x?: UpdateAbpV1_0_x;

  /**
   * <p>FPorts object for the positioning information of the device.</p>
   * @public
   */
  FPorts?: UpdateFPorts;
}

/**
 * @public
 */
export interface UpdateWirelessDeviceRequest {
  /**
   * <p>The ID of the resource to update.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The name of the new destination for the device.</p>
   * @public
   */
  DestinationName?: string;

  /**
   * <p>The new name of the resource.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>A new description of the resource.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The updated wireless device's configuration.</p>
   * @public
   */
  LoRaWAN?: LoRaWANUpdateDevice;

  /**
   * <p>FPort values for the GNSS, stream, and ClockSync functions of the positioning
   *             information.</p>
   * @public
   */
  Positioning?: PositioningConfigStatus;
}

/**
 * @public
 */
export interface UpdateWirelessDeviceResponse {}

/**
 * <p>Sidewalk object information for updating an import task.</p>
 * @public
 */
export interface SidewalkUpdateImportInfo {
  /**
   * <p>The CSV file contained in an S3 bucket that's used for appending devices to an
   *             existing import task.</p>
   * @public
   */
  DeviceCreationFile?: string;
}

/**
 * @public
 */
export interface UpdateWirelessDeviceImportTaskRequest {
  /**
   * <p>The identifier of the import task to be updated.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The Sidewalk-related parameters of the import task to be updated.</p>
   * @public
   */
  Sidewalk: SidewalkUpdateImportInfo | undefined;
}

/**
 * @public
 */
export interface UpdateWirelessDeviceImportTaskResponse {}

/**
 * @public
 */
export interface UpdateWirelessGatewayRequest {
  /**
   * <p>The ID of the resource to update.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The new name of the resource.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>A new description of the resource.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>A list of JoinEuiRange used by LoRa gateways to filter LoRa frames.</p>
   * @public
   */
  JoinEuiFilters?: string[][];

  /**
   * <p>A list of NetId values that are used by LoRa gateways to filter the uplink
   *             frames.</p>
   * @public
   */
  NetIdFilters?: string[];

  /**
   * <p>The MaxEIRP value.</p>
   * @public
   */
  MaxEirp?: number;
}

/**
 * @public
 */
export interface UpdateWirelessGatewayResponse {}

/**
 * @internal
 */
export const SidewalkUpdateAccountFilterSensitiveLog = (obj: SidewalkUpdateAccount): any => ({
  ...obj,
  ...(obj.AppServerPrivateKey && { AppServerPrivateKey: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdatePartnerAccountRequestFilterSensitiveLog = (obj: UpdatePartnerAccountRequest): any => ({
  ...obj,
  ...(obj.Sidewalk && { Sidewalk: SidewalkUpdateAccountFilterSensitiveLog(obj.Sidewalk) }),
});
