// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/resources/shared_criterion.proto" (package "google.ads.googleads.v11.resources", syntax proto3)
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
import { MobileApplicationInfo } from "../common/criteria";
import { MobileAppCategoryInfo } from "../common/criteria";
import { PlacementInfo } from "../common/criteria";
import { YouTubeChannelInfo } from "../common/criteria";
import { YouTubeVideoInfo } from "../common/criteria";
import { KeywordInfo } from "../common/criteria";
import { CriterionTypeEnum_CriterionType } from "../enums/criterion_type";
// Proto file describing the SharedCriterion resource.

/**
 * A criterion belonging to a shared set.
 *
 * @generated from protobuf message google.ads.googleads.v11.resources.SharedCriterion
 */
export interface SharedCriterion {
    /**
     * Immutable. The resource name of the shared criterion.
     * Shared set resource names have the form:
     *
     * `customers/{customer_id}/sharedCriteria/{shared_set_id}~{criterion_id}`
     *
     * @generated from protobuf field: string resource_name = 1;
     */
    resourceName: string;
    /**
     * Immutable. The shared set to which the shared criterion belongs.
     *
     * @generated from protobuf field: optional string shared_set = 10;
     */
    sharedSet?: string;
    /**
     * Output only. The ID of the criterion.
     *
     * This field is ignored for mutates.
     *
     * @generated from protobuf field: optional int64 criterion_id = 11;
     */
    criterionId?: bigint;
    /**
     * Output only. The type of the criterion.
     *
     * @generated from protobuf field: google.ads.googleads.v11.enums.CriterionTypeEnum.CriterionType type = 4;
     */
    type: CriterionTypeEnum_CriterionType;
    /**
     * @generated from protobuf oneof: criterion
     */
    criterion: {
        oneofKind: "keyword";
        /**
         * Immutable. Keyword.
         *
         * @generated from protobuf field: google.ads.googleads.v11.common.KeywordInfo keyword = 3;
         */
        keyword: KeywordInfo;
    } | {
        oneofKind: "youtubeVideo";
        /**
         * Immutable. YouTube Video.
         *
         * @generated from protobuf field: google.ads.googleads.v11.common.YouTubeVideoInfo youtube_video = 5;
         */
        youtubeVideo: YouTubeVideoInfo;
    } | {
        oneofKind: "youtubeChannel";
        /**
         * Immutable. YouTube Channel.
         *
         * @generated from protobuf field: google.ads.googleads.v11.common.YouTubeChannelInfo youtube_channel = 6;
         */
        youtubeChannel: YouTubeChannelInfo;
    } | {
        oneofKind: "placement";
        /**
         * Immutable. Placement.
         *
         * @generated from protobuf field: google.ads.googleads.v11.common.PlacementInfo placement = 7;
         */
        placement: PlacementInfo;
    } | {
        oneofKind: "mobileAppCategory";
        /**
         * Immutable. Mobile App Category.
         *
         * @generated from protobuf field: google.ads.googleads.v11.common.MobileAppCategoryInfo mobile_app_category = 8;
         */
        mobileAppCategory: MobileAppCategoryInfo;
    } | {
        oneofKind: "mobileApplication";
        /**
         * Immutable. Mobile application.
         *
         * @generated from protobuf field: google.ads.googleads.v11.common.MobileApplicationInfo mobile_application = 9;
         */
        mobileApplication: MobileApplicationInfo;
    } | {
        oneofKind: undefined;
    };
}
// @generated message type with reflection information, may provide speed optimized methods
class SharedCriterion$Type extends MessageType<SharedCriterion> {
    constructor() {
        super("google.ads.googleads.v11.resources.SharedCriterion", [
            { no: 1, name: "resource_name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["IMMUTABLE"], "google.api.resource_reference": { type: "googleads.googleapis.com/SharedCriterion" } } },
            { no: 10, name: "shared_set", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["IMMUTABLE"], "google.api.resource_reference": { type: "googleads.googleapis.com/SharedSet" } } },
            { no: 11, name: "criterion_id", kind: "scalar", opt: true, T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 4, name: "type", kind: "enum", T: () => ["google.ads.googleads.v11.enums.CriterionTypeEnum.CriterionType", CriterionTypeEnum_CriterionType], options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 3, name: "keyword", kind: "message", oneof: "criterion", T: () => KeywordInfo, options: { "google.api.field_behavior": ["IMMUTABLE"] } },
            { no: 5, name: "youtube_video", kind: "message", oneof: "criterion", T: () => YouTubeVideoInfo, options: { "google.api.field_behavior": ["IMMUTABLE"] } },
            { no: 6, name: "youtube_channel", kind: "message", oneof: "criterion", T: () => YouTubeChannelInfo, options: { "google.api.field_behavior": ["IMMUTABLE"] } },
            { no: 7, name: "placement", kind: "message", oneof: "criterion", T: () => PlacementInfo, options: { "google.api.field_behavior": ["IMMUTABLE"] } },
            { no: 8, name: "mobile_app_category", kind: "message", oneof: "criterion", T: () => MobileAppCategoryInfo, options: { "google.api.field_behavior": ["IMMUTABLE"] } },
            { no: 9, name: "mobile_application", kind: "message", oneof: "criterion", T: () => MobileApplicationInfo, options: { "google.api.field_behavior": ["IMMUTABLE"] } }
        ], { "google.api.resource": { type: "googleads.googleapis.com/SharedCriterion", pattern: ["customers/{customer_id}/sharedCriteria/{shared_set_id}~{criterion_id}"] } });
    }
    create(value?: PartialMessage<SharedCriterion>): SharedCriterion {
        const message = { resourceName: "", type: 0, criterion: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SharedCriterion>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SharedCriterion): SharedCriterion {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string resource_name */ 1:
                    message.resourceName = reader.string();
                    break;
                case /* optional string shared_set */ 10:
                    message.sharedSet = reader.string();
                    break;
                case /* optional int64 criterion_id */ 11:
                    message.criterionId = reader.int64().toBigInt();
                    break;
                case /* google.ads.googleads.v11.enums.CriterionTypeEnum.CriterionType type */ 4:
                    message.type = reader.int32();
                    break;
                case /* google.ads.googleads.v11.common.KeywordInfo keyword */ 3:
                    message.criterion = {
                        oneofKind: "keyword",
                        keyword: KeywordInfo.internalBinaryRead(reader, reader.uint32(), options, (message.criterion as any).keyword)
                    };
                    break;
                case /* google.ads.googleads.v11.common.YouTubeVideoInfo youtube_video */ 5:
                    message.criterion = {
                        oneofKind: "youtubeVideo",
                        youtubeVideo: YouTubeVideoInfo.internalBinaryRead(reader, reader.uint32(), options, (message.criterion as any).youtubeVideo)
                    };
                    break;
                case /* google.ads.googleads.v11.common.YouTubeChannelInfo youtube_channel */ 6:
                    message.criterion = {
                        oneofKind: "youtubeChannel",
                        youtubeChannel: YouTubeChannelInfo.internalBinaryRead(reader, reader.uint32(), options, (message.criterion as any).youtubeChannel)
                    };
                    break;
                case /* google.ads.googleads.v11.common.PlacementInfo placement */ 7:
                    message.criterion = {
                        oneofKind: "placement",
                        placement: PlacementInfo.internalBinaryRead(reader, reader.uint32(), options, (message.criterion as any).placement)
                    };
                    break;
                case /* google.ads.googleads.v11.common.MobileAppCategoryInfo mobile_app_category */ 8:
                    message.criterion = {
                        oneofKind: "mobileAppCategory",
                        mobileAppCategory: MobileAppCategoryInfo.internalBinaryRead(reader, reader.uint32(), options, (message.criterion as any).mobileAppCategory)
                    };
                    break;
                case /* google.ads.googleads.v11.common.MobileApplicationInfo mobile_application */ 9:
                    message.criterion = {
                        oneofKind: "mobileApplication",
                        mobileApplication: MobileApplicationInfo.internalBinaryRead(reader, reader.uint32(), options, (message.criterion as any).mobileApplication)
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
    internalBinaryWrite(message: SharedCriterion, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string resource_name = 1; */
        if (message.resourceName !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.resourceName);
        /* optional string shared_set = 10; */
        if (message.sharedSet !== undefined)
            writer.tag(10, WireType.LengthDelimited).string(message.sharedSet);
        /* optional int64 criterion_id = 11; */
        if (message.criterionId !== undefined)
            writer.tag(11, WireType.Varint).int64(message.criterionId);
        /* google.ads.googleads.v11.enums.CriterionTypeEnum.CriterionType type = 4; */
        if (message.type !== 0)
            writer.tag(4, WireType.Varint).int32(message.type);
        /* google.ads.googleads.v11.common.KeywordInfo keyword = 3; */
        if (message.criterion.oneofKind === "keyword")
            KeywordInfo.internalBinaryWrite(message.criterion.keyword, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* google.ads.googleads.v11.common.YouTubeVideoInfo youtube_video = 5; */
        if (message.criterion.oneofKind === "youtubeVideo")
            YouTubeVideoInfo.internalBinaryWrite(message.criterion.youtubeVideo, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* google.ads.googleads.v11.common.YouTubeChannelInfo youtube_channel = 6; */
        if (message.criterion.oneofKind === "youtubeChannel")
            YouTubeChannelInfo.internalBinaryWrite(message.criterion.youtubeChannel, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* google.ads.googleads.v11.common.PlacementInfo placement = 7; */
        if (message.criterion.oneofKind === "placement")
            PlacementInfo.internalBinaryWrite(message.criterion.placement, writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        /* google.ads.googleads.v11.common.MobileAppCategoryInfo mobile_app_category = 8; */
        if (message.criterion.oneofKind === "mobileAppCategory")
            MobileAppCategoryInfo.internalBinaryWrite(message.criterion.mobileAppCategory, writer.tag(8, WireType.LengthDelimited).fork(), options).join();
        /* google.ads.googleads.v11.common.MobileApplicationInfo mobile_application = 9; */
        if (message.criterion.oneofKind === "mobileApplication")
            MobileApplicationInfo.internalBinaryWrite(message.criterion.mobileApplication, writer.tag(9, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.resources.SharedCriterion
 */
export const SharedCriterion = new SharedCriterion$Type();
