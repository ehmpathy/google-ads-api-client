// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/ad_type.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
// Proto file describing the ad type.

/**
 * Container for enum describing possible types of an ad.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.AdTypeEnum
 */
export interface AdTypeEnum {
}
/**
 * The possible types of an ad.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.AdTypeEnum.AdType
 */
export enum AdTypeEnum_AdType {
    /**
     * No value has been specified.
     *
     * @generated from protobuf enum value: UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * The received value is not known in this version.
     *
     * This is a response-only value.
     *
     * @generated from protobuf enum value: UNKNOWN = 1;
     */
    UNKNOWN = 1,
    /**
     * The ad is a text ad.
     *
     * @generated from protobuf enum value: TEXT_AD = 2;
     */
    TEXT_AD = 2,
    /**
     * The ad is an expanded text ad.
     *
     * @generated from protobuf enum value: EXPANDED_TEXT_AD = 3;
     */
    EXPANDED_TEXT_AD = 3,
    /**
     * The ad is an expanded dynamic search ad.
     *
     * @generated from protobuf enum value: EXPANDED_DYNAMIC_SEARCH_AD = 7;
     */
    EXPANDED_DYNAMIC_SEARCH_AD = 7,
    /**
     * The ad is a hotel ad.
     *
     * @generated from protobuf enum value: HOTEL_AD = 8;
     */
    HOTEL_AD = 8,
    /**
     * The ad is a Smart Shopping ad.
     *
     * @generated from protobuf enum value: SHOPPING_SMART_AD = 9;
     */
    SHOPPING_SMART_AD = 9,
    /**
     * The ad is a standard Shopping ad.
     *
     * @generated from protobuf enum value: SHOPPING_PRODUCT_AD = 10;
     */
    SHOPPING_PRODUCT_AD = 10,
    /**
     * The ad is a video ad.
     *
     * @generated from protobuf enum value: VIDEO_AD = 12;
     */
    VIDEO_AD = 12,
    /**
     * This ad is a Gmail ad.
     *
     * @generated from protobuf enum value: GMAIL_AD = 13;
     */
    GMAIL_AD = 13,
    /**
     * This ad is an Image ad.
     *
     * @generated from protobuf enum value: IMAGE_AD = 14;
     */
    IMAGE_AD = 14,
    /**
     * The ad is a responsive search ad.
     *
     * @generated from protobuf enum value: RESPONSIVE_SEARCH_AD = 15;
     */
    RESPONSIVE_SEARCH_AD = 15,
    /**
     * The ad is a legacy responsive display ad.
     *
     * @generated from protobuf enum value: LEGACY_RESPONSIVE_DISPLAY_AD = 16;
     */
    LEGACY_RESPONSIVE_DISPLAY_AD = 16,
    /**
     * The ad is an app ad.
     *
     * @generated from protobuf enum value: APP_AD = 17;
     */
    APP_AD = 17,
    /**
     * The ad is a legacy app install ad.
     *
     * @generated from protobuf enum value: LEGACY_APP_INSTALL_AD = 18;
     */
    LEGACY_APP_INSTALL_AD = 18,
    /**
     * The ad is a responsive display ad.
     *
     * @generated from protobuf enum value: RESPONSIVE_DISPLAY_AD = 19;
     */
    RESPONSIVE_DISPLAY_AD = 19,
    /**
     * The ad is a local ad.
     *
     * @generated from protobuf enum value: LOCAL_AD = 20;
     */
    LOCAL_AD = 20,
    /**
     * The ad is a display upload ad with the HTML5_UPLOAD_AD product type.
     *
     * @generated from protobuf enum value: HTML5_UPLOAD_AD = 21;
     */
    HTML5_UPLOAD_AD = 21,
    /**
     * The ad is a display upload ad with one of the DYNAMIC_HTML5_* product
     * types.
     *
     * @generated from protobuf enum value: DYNAMIC_HTML5_AD = 22;
     */
    DYNAMIC_HTML5_AD = 22,
    /**
     * The ad is an app engagement ad.
     *
     * @generated from protobuf enum value: APP_ENGAGEMENT_AD = 23;
     */
    APP_ENGAGEMENT_AD = 23,
    /**
     * The ad is a Shopping Comparison Listing ad.
     *
     * @generated from protobuf enum value: SHOPPING_COMPARISON_LISTING_AD = 24;
     */
    SHOPPING_COMPARISON_LISTING_AD = 24,
    /**
     * Video bumper ad.
     *
     * @generated from protobuf enum value: VIDEO_BUMPER_AD = 25;
     */
    VIDEO_BUMPER_AD = 25,
    /**
     * Video non-skippable in-stream ad.
     *
     * @generated from protobuf enum value: VIDEO_NON_SKIPPABLE_IN_STREAM_AD = 26;
     */
    VIDEO_NON_SKIPPABLE_IN_STREAM_AD = 26,
    /**
     * Video outstream ad.
     *
     * @generated from protobuf enum value: VIDEO_OUTSTREAM_AD = 27;
     */
    VIDEO_OUTSTREAM_AD = 27,
    /**
     * Video TrueView in-stream ad.
     *
     * @generated from protobuf enum value: VIDEO_TRUEVIEW_IN_STREAM_AD = 29;
     */
    VIDEO_TRUEVIEW_IN_STREAM_AD = 29,
    /**
     * Video responsive ad.
     *
     * @generated from protobuf enum value: VIDEO_RESPONSIVE_AD = 30;
     */
    VIDEO_RESPONSIVE_AD = 30,
    /**
     * Smart campaign ad.
     *
     * @generated from protobuf enum value: SMART_CAMPAIGN_AD = 31;
     */
    SMART_CAMPAIGN_AD = 31,
    /**
     * Call ad.
     *
     * @generated from protobuf enum value: CALL_AD = 32;
     */
    CALL_AD = 32,
    /**
     * Universal app pre-registration ad.
     *
     * @generated from protobuf enum value: APP_PRE_REGISTRATION_AD = 33;
     */
    APP_PRE_REGISTRATION_AD = 33,
    /**
     * In-feed video ad.
     *
     * @generated from protobuf enum value: IN_FEED_VIDEO_AD = 34;
     */
    IN_FEED_VIDEO_AD = 34,
    /**
     * Discovery multi asset ad.
     *
     * @generated from protobuf enum value: DISCOVERY_MULTI_ASSET_AD = 35;
     */
    DISCOVERY_MULTI_ASSET_AD = 35,
    /**
     * Discovery carousel ad.
     *
     * @generated from protobuf enum value: DISCOVERY_CAROUSEL_AD = 36;
     */
    DISCOVERY_CAROUSEL_AD = 36
}
// @generated message type with reflection information, may provide speed optimized methods
class AdTypeEnum$Type extends MessageType<AdTypeEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.AdTypeEnum", []);
    }
    create(value?: PartialMessage<AdTypeEnum>): AdTypeEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AdTypeEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AdTypeEnum): AdTypeEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: AdTypeEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.AdTypeEnum
 */
export const AdTypeEnum = new AdTypeEnum$Type();
