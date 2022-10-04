// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/resources/click_view.proto" (package "google.ads.googleads.v11.resources", syntax proto3)
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
import { KeywordInfo } from "../common/criteria";
import { ClickLocation } from "../common/click_location";
// Proto file describing the ClickView resource.

/**
 * A click view with metrics aggregated at each click level, including both
 * valid and invalid clicks. For non-Search campaigns, metrics.clicks
 * represents the number of valid and invalid interactions.
 * Queries including ClickView must have a filter limiting the results to one
 * day and can be requested for dates back to 90 days before the time of the
 * request.
 *
 * @generated from protobuf message google.ads.googleads.v11.resources.ClickView
 */
export interface ClickView {
    /**
     * Output only. The resource name of the click view.
     * Click view resource names have the form:
     *
     * `customers/{customer_id}/clickViews/{date (yyyy-MM-dd)}~{gclid}`
     *
     * @generated from protobuf field: string resource_name = 1;
     */
    resourceName: string;
    /**
     * Output only. The Google Click ID.
     *
     * @generated from protobuf field: optional string gclid = 8;
     */
    gclid?: string;
    /**
     * Output only. The location criteria matching the area of interest associated with the
     * impression.
     *
     * @generated from protobuf field: google.ads.googleads.v11.common.ClickLocation area_of_interest = 3;
     */
    areaOfInterest?: ClickLocation;
    /**
     * Output only. The location criteria matching the location of presence associated with the
     * impression.
     *
     * @generated from protobuf field: google.ads.googleads.v11.common.ClickLocation location_of_presence = 4;
     */
    locationOfPresence?: ClickLocation;
    /**
     * Output only. Page number in search results where the ad was shown.
     *
     * @generated from protobuf field: optional int64 page_number = 9;
     */
    pageNumber?: bigint;
    /**
     * Output only. The associated ad.
     *
     * @generated from protobuf field: optional string ad_group_ad = 10;
     */
    adGroupAd?: string;
    /**
     * Output only. The associated campaign location target, if one exists.
     *
     * @generated from protobuf field: optional string campaign_location_target = 11;
     */
    campaignLocationTarget?: string;
    /**
     * Output only. The associated user list, if one exists.
     *
     * @generated from protobuf field: optional string user_list = 12;
     */
    userList?: string;
    /**
     * Output only. The associated keyword, if one exists and the click corresponds to the
     * SEARCH channel.
     *
     * @generated from protobuf field: string keyword = 13;
     */
    keyword: string;
    /**
     * Output only. Basic information about the associated keyword, if it exists.
     *
     * @generated from protobuf field: google.ads.googleads.v11.common.KeywordInfo keyword_info = 14;
     */
    keywordInfo?: KeywordInfo;
}
// @generated message type with reflection information, may provide speed optimized methods
class ClickView$Type extends MessageType<ClickView> {
    constructor() {
        super("google.ads.googleads.v11.resources.ClickView", [
            { no: 1, name: "resource_name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"], "google.api.resource_reference": { type: "googleads.googleapis.com/ClickView" } } },
            { no: 8, name: "gclid", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 3, name: "area_of_interest", kind: "message", T: () => ClickLocation, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 4, name: "location_of_presence", kind: "message", T: () => ClickLocation, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 9, name: "page_number", kind: "scalar", opt: true, T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 10, name: "ad_group_ad", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"], "google.api.resource_reference": { type: "googleads.googleapis.com/AdGroupAd" } } },
            { no: 11, name: "campaign_location_target", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"], "google.api.resource_reference": { type: "googleads.googleapis.com/GeoTargetConstant" } } },
            { no: 12, name: "user_list", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"], "google.api.resource_reference": { type: "googleads.googleapis.com/UserList" } } },
            { no: 13, name: "keyword", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"], "google.api.resource_reference": { type: "googleads.googleapis.com/AdGroupCriterion" } } },
            { no: 14, name: "keyword_info", kind: "message", T: () => KeywordInfo, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } }
        ], { "google.api.resource": { type: "googleads.googleapis.com/ClickView", pattern: ["customers/{customer_id}/clickViews/{date}~{gclid}"] } });
    }
    create(value?: PartialMessage<ClickView>): ClickView {
        const message = { resourceName: "", keyword: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ClickView>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ClickView): ClickView {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string resource_name */ 1:
                    message.resourceName = reader.string();
                    break;
                case /* optional string gclid */ 8:
                    message.gclid = reader.string();
                    break;
                case /* google.ads.googleads.v11.common.ClickLocation area_of_interest */ 3:
                    message.areaOfInterest = ClickLocation.internalBinaryRead(reader, reader.uint32(), options, message.areaOfInterest);
                    break;
                case /* google.ads.googleads.v11.common.ClickLocation location_of_presence */ 4:
                    message.locationOfPresence = ClickLocation.internalBinaryRead(reader, reader.uint32(), options, message.locationOfPresence);
                    break;
                case /* optional int64 page_number */ 9:
                    message.pageNumber = reader.int64().toBigInt();
                    break;
                case /* optional string ad_group_ad */ 10:
                    message.adGroupAd = reader.string();
                    break;
                case /* optional string campaign_location_target */ 11:
                    message.campaignLocationTarget = reader.string();
                    break;
                case /* optional string user_list */ 12:
                    message.userList = reader.string();
                    break;
                case /* string keyword */ 13:
                    message.keyword = reader.string();
                    break;
                case /* google.ads.googleads.v11.common.KeywordInfo keyword_info */ 14:
                    message.keywordInfo = KeywordInfo.internalBinaryRead(reader, reader.uint32(), options, message.keywordInfo);
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
    internalBinaryWrite(message: ClickView, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string resource_name = 1; */
        if (message.resourceName !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.resourceName);
        /* optional string gclid = 8; */
        if (message.gclid !== undefined)
            writer.tag(8, WireType.LengthDelimited).string(message.gclid);
        /* google.ads.googleads.v11.common.ClickLocation area_of_interest = 3; */
        if (message.areaOfInterest)
            ClickLocation.internalBinaryWrite(message.areaOfInterest, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* google.ads.googleads.v11.common.ClickLocation location_of_presence = 4; */
        if (message.locationOfPresence)
            ClickLocation.internalBinaryWrite(message.locationOfPresence, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* optional int64 page_number = 9; */
        if (message.pageNumber !== undefined)
            writer.tag(9, WireType.Varint).int64(message.pageNumber);
        /* optional string ad_group_ad = 10; */
        if (message.adGroupAd !== undefined)
            writer.tag(10, WireType.LengthDelimited).string(message.adGroupAd);
        /* optional string campaign_location_target = 11; */
        if (message.campaignLocationTarget !== undefined)
            writer.tag(11, WireType.LengthDelimited).string(message.campaignLocationTarget);
        /* optional string user_list = 12; */
        if (message.userList !== undefined)
            writer.tag(12, WireType.LengthDelimited).string(message.userList);
        /* string keyword = 13; */
        if (message.keyword !== "")
            writer.tag(13, WireType.LengthDelimited).string(message.keyword);
        /* google.ads.googleads.v11.common.KeywordInfo keyword_info = 14; */
        if (message.keywordInfo)
            KeywordInfo.internalBinaryWrite(message.keywordInfo, writer.tag(14, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.resources.ClickView
 */
export const ClickView = new ClickView$Type();