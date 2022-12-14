// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/placeholder_type.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
// Proto file describing feed placeholder types.

/**
 * Container for enum describing possible placeholder types for a feed mapping.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.PlaceholderTypeEnum
 */
export interface PlaceholderTypeEnum {
}
/**
 * Possible placeholder types for a feed mapping.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.PlaceholderTypeEnum.PlaceholderType
 */
export enum PlaceholderTypeEnum_PlaceholderType {
    /**
     * Not specified.
     *
     * @generated from protobuf enum value: UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Used for return value only. Represents value unknown in this version.
     *
     * @generated from protobuf enum value: UNKNOWN = 1;
     */
    UNKNOWN = 1,
    /**
     * Lets you show links in your ad to pages from your website, including the
     * main landing page.
     *
     * @generated from protobuf enum value: SITELINK = 2;
     */
    SITELINK = 2,
    /**
     * Lets you attach a phone number to an ad, allowing customers to call
     * directly from the ad.
     *
     * @generated from protobuf enum value: CALL = 3;
     */
    CALL = 3,
    /**
     * Lets you provide users with a link that points to a mobile app in
     * addition to a website.
     *
     * @generated from protobuf enum value: APP = 4;
     */
    APP = 4,
    /**
     * Lets you show locations of businesses from your Business Profile
     * in your ad. This helps people find your locations by showing your
     * ads with your address, a map to your location, or the distance to your
     * business. This extension type is useful to draw customers to your
     * brick-and-mortar location.
     *
     * @generated from protobuf enum value: LOCATION = 5;
     */
    LOCATION = 5,
    /**
     * If you sell your product through retail chains, affiliate location
     * extensions let you show nearby stores that carry your products.
     *
     * @generated from protobuf enum value: AFFILIATE_LOCATION = 6;
     */
    AFFILIATE_LOCATION = 6,
    /**
     * Lets you include additional text with your search ads that provide
     * detailed information about your business, including products and services
     * you offer. Callouts appear in ads at the top and bottom of Google search
     * results.
     *
     * @generated from protobuf enum value: CALLOUT = 7;
     */
    CALLOUT = 7,
    /**
     * Lets you add more info to your ad, specific to some predefined categories
     * such as types, brands, styles, etc. A minimum of 3 text (SNIPPETS) values
     * are required.
     *
     * @generated from protobuf enum value: STRUCTURED_SNIPPET = 8;
     */
    STRUCTURED_SNIPPET = 8,
    /**
     * Allows users to see your ad, click an icon, and contact you directly by
     * text message. With one tap on your ad, people can contact you to book an
     * appointment, get a quote, ask for information, or request a service.
     *
     * @generated from protobuf enum value: MESSAGE = 9;
     */
    MESSAGE = 9,
    /**
     * Lets you display prices for a list of items along with your ads. A price
     * feed is composed of three to eight price table rows.
     *
     * @generated from protobuf enum value: PRICE = 10;
     */
    PRICE = 10,
    /**
     * Lets you highlight sales and other promotions that let users see how
     * they can save by buying now.
     *
     * @generated from protobuf enum value: PROMOTION = 11;
     */
    PROMOTION = 11,
    /**
     * Lets you dynamically inject custom data into the title and description
     * of your ads.
     *
     * @generated from protobuf enum value: AD_CUSTOMIZER = 12;
     */
    AD_CUSTOMIZER = 12,
    /**
     * Indicates that this feed is for education dynamic remarketing.
     *
     * @generated from protobuf enum value: DYNAMIC_EDUCATION = 13;
     */
    DYNAMIC_EDUCATION = 13,
    /**
     * Indicates that this feed is for flight dynamic remarketing.
     *
     * @generated from protobuf enum value: DYNAMIC_FLIGHT = 14;
     */
    DYNAMIC_FLIGHT = 14,
    /**
     * Indicates that this feed is for a custom dynamic remarketing type. Use
     * this only if the other business types don't apply to your products or
     * services.
     *
     * @generated from protobuf enum value: DYNAMIC_CUSTOM = 15;
     */
    DYNAMIC_CUSTOM = 15,
    /**
     * Indicates that this feed is for hotels and rentals dynamic remarketing.
     *
     * @generated from protobuf enum value: DYNAMIC_HOTEL = 16;
     */
    DYNAMIC_HOTEL = 16,
    /**
     * Indicates that this feed is for real estate dynamic remarketing.
     *
     * @generated from protobuf enum value: DYNAMIC_REAL_ESTATE = 17;
     */
    DYNAMIC_REAL_ESTATE = 17,
    /**
     * Indicates that this feed is for travel dynamic remarketing.
     *
     * @generated from protobuf enum value: DYNAMIC_TRAVEL = 18;
     */
    DYNAMIC_TRAVEL = 18,
    /**
     * Indicates that this feed is for local deals dynamic remarketing.
     *
     * @generated from protobuf enum value: DYNAMIC_LOCAL = 19;
     */
    DYNAMIC_LOCAL = 19,
    /**
     * Indicates that this feed is for job dynamic remarketing.
     *
     * @generated from protobuf enum value: DYNAMIC_JOB = 20;
     */
    DYNAMIC_JOB = 20,
    /**
     * Lets you attach an image to an ad.
     *
     * @generated from protobuf enum value: IMAGE = 21;
     */
    IMAGE = 21
}
// @generated message type with reflection information, may provide speed optimized methods
class PlaceholderTypeEnum$Type extends MessageType<PlaceholderTypeEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.PlaceholderTypeEnum", []);
    }
    create(value?: PartialMessage<PlaceholderTypeEnum>): PlaceholderTypeEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<PlaceholderTypeEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PlaceholderTypeEnum): PlaceholderTypeEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: PlaceholderTypeEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.PlaceholderTypeEnum
 */
export const PlaceholderTypeEnum = new PlaceholderTypeEnum$Type();
