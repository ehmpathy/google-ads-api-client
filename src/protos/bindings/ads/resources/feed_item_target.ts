// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/resources/feed_item_target.proto" (package "google.ads.googleads.v11.resources", syntax proto3)
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
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { AdScheduleInfo } from "../common/criteria";
import { FeedItemTargetDeviceEnum_FeedItemTargetDevice } from "../enums/feed_item_target_device";
import { KeywordInfo } from "../common/criteria";
import { FeedItemTargetStatusEnum_FeedItemTargetStatus } from "../enums/feed_item_target_status";
import { FeedItemTargetTypeEnum_FeedItemTargetType } from "../enums/feed_item_target_type";
// Proto file describing the FeedItemTarget resource.

/**
 * A feed item target.
 *
 * @generated from protobuf message google.ads.googleads.v11.resources.FeedItemTarget
 */
export interface FeedItemTarget {
    /**
     * Immutable. The resource name of the feed item target.
     * Feed item target resource names have the form:
     * `customers/{customer_id}/feedItemTargets/{feed_id}~{feed_item_id}~{feed_item_target_type}~{feed_item_target_id}`
     *
     * @generated from protobuf field: string resource_name = 1;
     */
    resourceName: string;
    /**
     * Immutable. The feed item to which this feed item target belongs.
     *
     * @generated from protobuf field: optional string feed_item = 12;
     */
    feedItem?: string;
    /**
     * Output only. The target type of this feed item target. This field is read-only.
     *
     * @generated from protobuf field: google.ads.googleads.v11.enums.FeedItemTargetTypeEnum.FeedItemTargetType feed_item_target_type = 3;
     */
    feedItemTargetType: FeedItemTargetTypeEnum_FeedItemTargetType;
    /**
     * Output only. The ID of the targeted resource. This field is read-only.
     *
     * @generated from protobuf field: optional int64 feed_item_target_id = 13;
     */
    feedItemTargetId?: bigint;
    /**
     * Output only. Status of the feed item target.
     * This field is read-only.
     *
     * @generated from protobuf field: google.ads.googleads.v11.enums.FeedItemTargetStatusEnum.FeedItemTargetStatus status = 11;
     */
    status: FeedItemTargetStatusEnum_FeedItemTargetStatus;
    /**
     * @generated from protobuf oneof: target
     */
    target: {
        oneofKind: "campaign";
        /**
         * Immutable. The targeted campaign.
         *
         * @generated from protobuf field: string campaign = 14;
         */
        campaign: string;
    } | {
        oneofKind: "adGroup";
        /**
         * Immutable. The targeted ad group.
         *
         * @generated from protobuf field: string ad_group = 15;
         */
        adGroup: string;
    } | {
        oneofKind: "keyword";
        /**
         * Immutable. The targeted keyword.
         *
         * @generated from protobuf field: google.ads.googleads.v11.common.KeywordInfo keyword = 7;
         */
        keyword: KeywordInfo;
    } | {
        oneofKind: "geoTargetConstant";
        /**
         * Immutable. The targeted geo target constant resource name.
         *
         * @generated from protobuf field: string geo_target_constant = 16;
         */
        geoTargetConstant: string;
    } | {
        oneofKind: "device";
        /**
         * Immutable. The targeted device.
         *
         * @generated from protobuf field: google.ads.googleads.v11.enums.FeedItemTargetDeviceEnum.FeedItemTargetDevice device = 9;
         */
        device: FeedItemTargetDeviceEnum_FeedItemTargetDevice;
    } | {
        oneofKind: "adSchedule";
        /**
         * Immutable. The targeted schedule.
         *
         * @generated from protobuf field: google.ads.googleads.v11.common.AdScheduleInfo ad_schedule = 10;
         */
        adSchedule: AdScheduleInfo;
    } | {
        oneofKind: undefined;
    };
}
// @generated message type with reflection information, may provide speed optimized methods
class FeedItemTarget$Type extends MessageType<FeedItemTarget> {
    constructor() {
        super("google.ads.googleads.v11.resources.FeedItemTarget", [
            { no: 1, name: "resource_name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["IMMUTABLE"], "google.api.resource_reference": { type: "googleads.googleapis.com/FeedItemTarget" } } },
            { no: 12, name: "feed_item", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["IMMUTABLE"], "google.api.resource_reference": { type: "googleads.googleapis.com/FeedItem" } } },
            { no: 3, name: "feed_item_target_type", kind: "enum", T: () => ["google.ads.googleads.v11.enums.FeedItemTargetTypeEnum.FeedItemTargetType", FeedItemTargetTypeEnum_FeedItemTargetType], options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 13, name: "feed_item_target_id", kind: "scalar", opt: true, T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 11, name: "status", kind: "enum", T: () => ["google.ads.googleads.v11.enums.FeedItemTargetStatusEnum.FeedItemTargetStatus", FeedItemTargetStatusEnum_FeedItemTargetStatus], options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 14, name: "campaign", kind: "scalar", oneof: "target", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["IMMUTABLE"], "google.api.resource_reference": { type: "googleads.googleapis.com/Campaign" } } },
            { no: 15, name: "ad_group", kind: "scalar", oneof: "target", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["IMMUTABLE"], "google.api.resource_reference": { type: "googleads.googleapis.com/AdGroup" } } },
            { no: 7, name: "keyword", kind: "message", oneof: "target", T: () => KeywordInfo, options: { "google.api.field_behavior": ["IMMUTABLE"] } },
            { no: 16, name: "geo_target_constant", kind: "scalar", oneof: "target", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["IMMUTABLE"], "google.api.resource_reference": { type: "googleads.googleapis.com/GeoTargetConstant" } } },
            { no: 9, name: "device", kind: "enum", oneof: "target", T: () => ["google.ads.googleads.v11.enums.FeedItemTargetDeviceEnum.FeedItemTargetDevice", FeedItemTargetDeviceEnum_FeedItemTargetDevice], options: { "google.api.field_behavior": ["IMMUTABLE"] } },
            { no: 10, name: "ad_schedule", kind: "message", oneof: "target", T: () => AdScheduleInfo, options: { "google.api.field_behavior": ["IMMUTABLE"] } }
        ], { "google.api.resource": { type: "googleads.googleapis.com/FeedItemTarget", pattern: ["customers/{customer_id}/feedItemTargets/{feed_id}~{feed_item_id}~{feed_item_target_type}~{feed_item_target_id}"] } });
    }
    create(value?: PartialMessage<FeedItemTarget>): FeedItemTarget {
        const message = { resourceName: "", feedItemTargetType: 0, status: 0, target: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<FeedItemTarget>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FeedItemTarget): FeedItemTarget {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string resource_name */ 1:
                    message.resourceName = reader.string();
                    break;
                case /* optional string feed_item */ 12:
                    message.feedItem = reader.string();
                    break;
                case /* google.ads.googleads.v11.enums.FeedItemTargetTypeEnum.FeedItemTargetType feed_item_target_type */ 3:
                    message.feedItemTargetType = reader.int32();
                    break;
                case /* optional int64 feed_item_target_id */ 13:
                    message.feedItemTargetId = reader.int64().toBigInt();
                    break;
                case /* google.ads.googleads.v11.enums.FeedItemTargetStatusEnum.FeedItemTargetStatus status */ 11:
                    message.status = reader.int32();
                    break;
                case /* string campaign */ 14:
                    message.target = {
                        oneofKind: "campaign",
                        campaign: reader.string()
                    };
                    break;
                case /* string ad_group */ 15:
                    message.target = {
                        oneofKind: "adGroup",
                        adGroup: reader.string()
                    };
                    break;
                case /* google.ads.googleads.v11.common.KeywordInfo keyword */ 7:
                    message.target = {
                        oneofKind: "keyword",
                        keyword: KeywordInfo.internalBinaryRead(reader, reader.uint32(), options, (message.target as any).keyword)
                    };
                    break;
                case /* string geo_target_constant */ 16:
                    message.target = {
                        oneofKind: "geoTargetConstant",
                        geoTargetConstant: reader.string()
                    };
                    break;
                case /* google.ads.googleads.v11.enums.FeedItemTargetDeviceEnum.FeedItemTargetDevice device */ 9:
                    message.target = {
                        oneofKind: "device",
                        device: reader.int32()
                    };
                    break;
                case /* google.ads.googleads.v11.common.AdScheduleInfo ad_schedule */ 10:
                    message.target = {
                        oneofKind: "adSchedule",
                        adSchedule: AdScheduleInfo.internalBinaryRead(reader, reader.uint32(), options, (message.target as any).adSchedule)
                    };
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
    internalBinaryWrite(message: FeedItemTarget, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string resource_name = 1; */
        if (message.resourceName !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.resourceName);
        /* optional string feed_item = 12; */
        if (message.feedItem !== undefined)
            writer.tag(12, WireType.LengthDelimited).string(message.feedItem);
        /* google.ads.googleads.v11.enums.FeedItemTargetTypeEnum.FeedItemTargetType feed_item_target_type = 3; */
        if (message.feedItemTargetType !== 0)
            writer.tag(3, WireType.Varint).int32(message.feedItemTargetType);
        /* optional int64 feed_item_target_id = 13; */
        if (message.feedItemTargetId !== undefined)
            writer.tag(13, WireType.Varint).int64(message.feedItemTargetId);
        /* google.ads.googleads.v11.enums.FeedItemTargetStatusEnum.FeedItemTargetStatus status = 11; */
        if (message.status !== 0)
            writer.tag(11, WireType.Varint).int32(message.status);
        /* string campaign = 14; */
        if (message.target.oneofKind === "campaign")
            writer.tag(14, WireType.LengthDelimited).string(message.target.campaign);
        /* string ad_group = 15; */
        if (message.target.oneofKind === "adGroup")
            writer.tag(15, WireType.LengthDelimited).string(message.target.adGroup);
        /* google.ads.googleads.v11.common.KeywordInfo keyword = 7; */
        if (message.target.oneofKind === "keyword")
            KeywordInfo.internalBinaryWrite(message.target.keyword, writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        /* string geo_target_constant = 16; */
        if (message.target.oneofKind === "geoTargetConstant")
            writer.tag(16, WireType.LengthDelimited).string(message.target.geoTargetConstant);
        /* google.ads.googleads.v11.enums.FeedItemTargetDeviceEnum.FeedItemTargetDevice device = 9; */
        if (message.target.oneofKind === "device")
            writer.tag(9, WireType.Varint).int32(message.target.device);
        /* google.ads.googleads.v11.common.AdScheduleInfo ad_schedule = 10; */
        if (message.target.oneofKind === "adSchedule")
            AdScheduleInfo.internalBinaryWrite(message.target.adSchedule, writer.tag(10, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.resources.FeedItemTarget
 */
export const FeedItemTarget = new FeedItemTarget$Type();
