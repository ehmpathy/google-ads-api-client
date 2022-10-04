// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/resources/bidding_data_exclusion.proto" (package "google.ads.googleads.v11.resources", syntax proto3)
// tslint:disable
//
// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { AdvertisingChannelTypeEnum_AdvertisingChannelType } from "../enums/advertising_channel_type";
import { DeviceEnum_Device } from "../enums/device";
import { SeasonalityEventStatusEnum_SeasonalityEventStatus } from "../enums/seasonality_event_status";
import { SeasonalityEventScopeEnum_SeasonalityEventScope } from "../enums/seasonality_event_scope";
/**
 * Represents a bidding data exclusion.
 *
 * See "About data exclusions" at
 * https://support.google.com/google-ads/answer/10370710.
 *
 * @generated from protobuf message google.ads.googleads.v11.resources.BiddingDataExclusion
 */
export interface BiddingDataExclusion {
    /**
     * Immutable. The resource name of the data exclusion.
     * Data exclusion resource names have the form:
     *
     * `customers/{customer_id}/biddingDataExclusions/{data_exclusion_id}`
     *
     * @generated from protobuf field: string resource_name = 1;
     */
    resourceName: string;
    /**
     * Output only. The ID of the data exclusion.
     *
     * @generated from protobuf field: int64 data_exclusion_id = 2;
     */
    dataExclusionId: bigint;
    /**
     * The scope of the data exclusion.
     *
     * @generated from protobuf field: google.ads.googleads.v11.enums.SeasonalityEventScopeEnum.SeasonalityEventScope scope = 3;
     */
    scope: SeasonalityEventScopeEnum_SeasonalityEventScope;
    /**
     * Output only. The status of the data exclusion.
     *
     * @generated from protobuf field: google.ads.googleads.v11.enums.SeasonalityEventStatusEnum.SeasonalityEventStatus status = 4;
     */
    status: SeasonalityEventStatusEnum_SeasonalityEventStatus;
    /**
     * Required. The inclusive start time of the data exclusion in yyyy-MM-dd HH:mm:ss
     * format.
     *
     * A data exclusion is backward looking and should be used for events that
     * start in the past and end either in the past or future.
     *
     * @generated from protobuf field: string start_date_time = 5;
     */
    startDateTime: string;
    /**
     * Required. The exclusive end time of the data exclusion in yyyy-MM-dd HH:mm:ss format.
     *
     * The length of [start_date_time, end_date_time) interval must be
     * within (0, 14 days].
     *
     * @generated from protobuf field: string end_date_time = 6;
     */
    endDateTime: string;
    /**
     * The name of the data exclusion. The name can be at most 255
     * characters.
     *
     * @generated from protobuf field: string name = 7;
     */
    name: string;
    /**
     * The description of the data exclusion. The description can be at
     * most 2048 characters.
     *
     * @generated from protobuf field: string description = 8;
     */
    description: string;
    /**
     * If not specified, all devices will be included in this exclusion.
     * Otherwise, only the specified targeted devices will be included in this
     * exclusion.
     *
     * @generated from protobuf field: repeated google.ads.googleads.v11.enums.DeviceEnum.Device devices = 9;
     */
    devices: DeviceEnum_Device[];
    /**
     * The data exclusion will apply to the campaigns listed when the scope of
     * this exclusion is CAMPAIGN. The maximum number of campaigns per event is
     * 2000.
     * Note: a data exclusion with both advertising_channel_types and
     * campaign_ids is not supported.
     *
     * @generated from protobuf field: repeated string campaigns = 10;
     */
    campaigns: string[];
    /**
     * The data_exclusion will apply to all the campaigns under the listed
     * channels retroactively as well as going forward when the scope of this
     * exclusion is CHANNEL.
     * The supported advertising channel types are DISPLAY, SEARCH and SHOPPING.
     * Note: a data exclusion with both advertising_channel_types and
     * campaign_ids is not supported.
     *
     * @generated from protobuf field: repeated google.ads.googleads.v11.enums.AdvertisingChannelTypeEnum.AdvertisingChannelType advertising_channel_types = 11;
     */
    advertisingChannelTypes: AdvertisingChannelTypeEnum_AdvertisingChannelType[];
}
// @generated message type with reflection information, may provide speed optimized methods
class BiddingDataExclusion$Type extends MessageType<BiddingDataExclusion> {
    constructor() {
        super("google.ads.googleads.v11.resources.BiddingDataExclusion", [
            { no: 1, name: "resource_name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["IMMUTABLE"], "google.api.resource_reference": { type: "googleads.googleapis.com/BiddingDataExclusion" } } },
            { no: 2, name: "data_exclusion_id", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 3, name: "scope", kind: "enum", T: () => ["google.ads.googleads.v11.enums.SeasonalityEventScopeEnum.SeasonalityEventScope", SeasonalityEventScopeEnum_SeasonalityEventScope] },
            { no: 4, name: "status", kind: "enum", T: () => ["google.ads.googleads.v11.enums.SeasonalityEventStatusEnum.SeasonalityEventStatus", SeasonalityEventStatusEnum_SeasonalityEventStatus], options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 5, name: "start_date_time", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["REQUIRED"] } },
            { no: 6, name: "end_date_time", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["REQUIRED"] } },
            { no: 7, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 8, name: "description", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 9, name: "devices", kind: "enum", repeat: 1 /*RepeatType.PACKED*/, T: () => ["google.ads.googleads.v11.enums.DeviceEnum.Device", DeviceEnum_Device] },
            { no: 10, name: "campaigns", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/, options: { "google.api.resource_reference": { type: "googleads.googleapis.com/Campaign" } } },
            { no: 11, name: "advertising_channel_types", kind: "enum", repeat: 1 /*RepeatType.PACKED*/, T: () => ["google.ads.googleads.v11.enums.AdvertisingChannelTypeEnum.AdvertisingChannelType", AdvertisingChannelTypeEnum_AdvertisingChannelType] }
        ], { "google.api.resource": { type: "googleads.googleapis.com/BiddingDataExclusion", pattern: ["customers/{customer_id}/biddingDataExclusions/{seasonality_event_id}"] } });
    }
    create(value?: PartialMessage<BiddingDataExclusion>): BiddingDataExclusion {
        const message = { resourceName: "", dataExclusionId: 0n, scope: 0, status: 0, startDateTime: "", endDateTime: "", name: "", description: "", devices: [], campaigns: [], advertisingChannelTypes: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<BiddingDataExclusion>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BiddingDataExclusion): BiddingDataExclusion {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string resource_name */ 1:
                    message.resourceName = reader.string();
                    break;
                case /* int64 data_exclusion_id */ 2:
                    message.dataExclusionId = reader.int64().toBigInt();
                    break;
                case /* google.ads.googleads.v11.enums.SeasonalityEventScopeEnum.SeasonalityEventScope scope */ 3:
                    message.scope = reader.int32();
                    break;
                case /* google.ads.googleads.v11.enums.SeasonalityEventStatusEnum.SeasonalityEventStatus status */ 4:
                    message.status = reader.int32();
                    break;
                case /* string start_date_time */ 5:
                    message.startDateTime = reader.string();
                    break;
                case /* string end_date_time */ 6:
                    message.endDateTime = reader.string();
                    break;
                case /* string name */ 7:
                    message.name = reader.string();
                    break;
                case /* string description */ 8:
                    message.description = reader.string();
                    break;
                case /* repeated google.ads.googleads.v11.enums.DeviceEnum.Device devices */ 9:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.devices.push(reader.int32());
                    else
                        message.devices.push(reader.int32());
                    break;
                case /* repeated string campaigns */ 10:
                    message.campaigns.push(reader.string());
                    break;
                case /* repeated google.ads.googleads.v11.enums.AdvertisingChannelTypeEnum.AdvertisingChannelType advertising_channel_types */ 11:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.advertisingChannelTypes.push(reader.int32());
                    else
                        message.advertisingChannelTypes.push(reader.int32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: BiddingDataExclusion, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string resource_name = 1; */
        if (message.resourceName !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.resourceName);
        /* int64 data_exclusion_id = 2; */
        if (message.dataExclusionId !== 0n)
            writer.tag(2, WireType.Varint).int64(message.dataExclusionId);
        /* google.ads.googleads.v11.enums.SeasonalityEventScopeEnum.SeasonalityEventScope scope = 3; */
        if (message.scope !== 0)
            writer.tag(3, WireType.Varint).int32(message.scope);
        /* google.ads.googleads.v11.enums.SeasonalityEventStatusEnum.SeasonalityEventStatus status = 4; */
        if (message.status !== 0)
            writer.tag(4, WireType.Varint).int32(message.status);
        /* string start_date_time = 5; */
        if (message.startDateTime !== "")
            writer.tag(5, WireType.LengthDelimited).string(message.startDateTime);
        /* string end_date_time = 6; */
        if (message.endDateTime !== "")
            writer.tag(6, WireType.LengthDelimited).string(message.endDateTime);
        /* string name = 7; */
        if (message.name !== "")
            writer.tag(7, WireType.LengthDelimited).string(message.name);
        /* string description = 8; */
        if (message.description !== "")
            writer.tag(8, WireType.LengthDelimited).string(message.description);
        /* repeated google.ads.googleads.v11.enums.DeviceEnum.Device devices = 9; */
        if (message.devices.length) {
            writer.tag(9, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.devices.length; i++)
                writer.int32(message.devices[i]);
            writer.join();
        }
        /* repeated string campaigns = 10; */
        for (let i = 0; i < message.campaigns.length; i++)
            writer.tag(10, WireType.LengthDelimited).string(message.campaigns[i]);
        /* repeated google.ads.googleads.v11.enums.AdvertisingChannelTypeEnum.AdvertisingChannelType advertising_channel_types = 11; */
        if (message.advertisingChannelTypes.length) {
            writer.tag(11, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.advertisingChannelTypes.length; i++)
                writer.int32(message.advertisingChannelTypes[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.resources.BiddingDataExclusion
 */
export const BiddingDataExclusion = new BiddingDataExclusion$Type();