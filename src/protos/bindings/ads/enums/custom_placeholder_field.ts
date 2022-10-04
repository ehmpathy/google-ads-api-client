// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/custom_placeholder_field.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
// Proto file describing Custom placeholder fields.

/**
 * Values for Custom placeholder fields.
 * For more information about dynamic remarketing feeds, see
 * https://support.google.com/google-ads/answer/6053288.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.CustomPlaceholderFieldEnum
 */
export interface CustomPlaceholderFieldEnum {
}
/**
 * Possible values for Custom placeholder fields.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.CustomPlaceholderFieldEnum.CustomPlaceholderField
 */
export enum CustomPlaceholderFieldEnum_CustomPlaceholderField {
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
     * Data Type: STRING. Required. Combination ID and ID2 must be unique per
     * offer.
     *
     * @generated from protobuf enum value: ID = 2;
     */
    ID = 2,
    /**
     * Data Type: STRING. Combination ID and ID2 must be unique per offer.
     *
     * @generated from protobuf enum value: ID2 = 3;
     */
    ID2 = 3,
    /**
     * Data Type: STRING. Required. Main headline with product name to be shown
     * in dynamic ad.
     *
     * @generated from protobuf enum value: ITEM_TITLE = 4;
     */
    ITEM_TITLE = 4,
    /**
     * Data Type: STRING. Optional text to be shown in the image ad.
     *
     * @generated from protobuf enum value: ITEM_SUBTITLE = 5;
     */
    ITEM_SUBTITLE = 5,
    /**
     * Data Type: STRING. Optional description of the product to be shown in the
     * ad.
     *
     * @generated from protobuf enum value: ITEM_DESCRIPTION = 6;
     */
    ITEM_DESCRIPTION = 6,
    /**
     * Data Type: STRING. Full address of your offer or service, including
     * postal code. This will be used to identify the closest product to the
     * user when there are multiple offers in the feed that are relevant to the
     * user.
     *
     * @generated from protobuf enum value: ITEM_ADDRESS = 7;
     */
    ITEM_ADDRESS = 7,
    /**
     * Data Type: STRING. Price to be shown in the ad.
     * Example: "100.00 USD"
     *
     * @generated from protobuf enum value: PRICE = 8;
     */
    PRICE = 8,
    /**
     * Data Type: STRING. Formatted price to be shown in the ad.
     * Example: "Starting at $100.00 USD", "$80 - $100"
     *
     * @generated from protobuf enum value: FORMATTED_PRICE = 9;
     */
    FORMATTED_PRICE = 9,
    /**
     * Data Type: STRING. Sale price to be shown in the ad.
     * Example: "80.00 USD"
     *
     * @generated from protobuf enum value: SALE_PRICE = 10;
     */
    SALE_PRICE = 10,
    /**
     * Data Type: STRING. Formatted sale price to be shown in the ad.
     * Example: "On sale for $80.00", "$60 - $80"
     *
     * @generated from protobuf enum value: FORMATTED_SALE_PRICE = 11;
     */
    FORMATTED_SALE_PRICE = 11,
    /**
     * Data Type: URL. Image to be displayed in the ad. Highly recommended for
     * image ads.
     *
     * @generated from protobuf enum value: IMAGE_URL = 12;
     */
    IMAGE_URL = 12,
    /**
     * Data Type: STRING. Used as a recommendation engine signal to serve items
     * in the same category.
     *
     * @generated from protobuf enum value: ITEM_CATEGORY = 13;
     */
    ITEM_CATEGORY = 13,
    /**
     * Data Type: URL_LIST. Final URLs for the ad when using Upgraded
     * URLs. User will be redirected to these URLs when they click on an ad, or
     * when they click on a specific product for ads that have multiple
     * products.
     *
     * @generated from protobuf enum value: FINAL_URLS = 14;
     */
    FINAL_URLS = 14,
    /**
     * Data Type: URL_LIST. Final mobile URLs for the ad when using Upgraded
     * URLs.
     *
     * @generated from protobuf enum value: FINAL_MOBILE_URLS = 15;
     */
    FINAL_MOBILE_URLS = 15,
    /**
     * Data Type: URL. Tracking template for the ad when using Upgraded URLs.
     *
     * @generated from protobuf enum value: TRACKING_URL = 16;
     */
    TRACKING_URL = 16,
    /**
     * Data Type: STRING_LIST. Keywords used for product retrieval.
     *
     * @generated from protobuf enum value: CONTEXTUAL_KEYWORDS = 17;
     */
    CONTEXTUAL_KEYWORDS = 17,
    /**
     * Data Type: STRING. Android app link. Must be formatted as:
     * android-app://{package_id}/{scheme}/{host_path}.
     * The components are defined as follows:
     * package_id: app ID as specified in Google Play.
     * scheme: the scheme to pass to the application. Can be HTTP, or a custom
     *   scheme.
     * host_path: identifies the specific content within your application.
     *
     * @generated from protobuf enum value: ANDROID_APP_LINK = 18;
     */
    ANDROID_APP_LINK = 18,
    /**
     * Data Type: STRING_LIST. List of recommended IDs to show together with
     * this item.
     *
     * @generated from protobuf enum value: SIMILAR_IDS = 19;
     */
    SIMILAR_IDS = 19,
    /**
     * Data Type: STRING. iOS app link.
     *
     * @generated from protobuf enum value: IOS_APP_LINK = 20;
     */
    IOS_APP_LINK = 20,
    /**
     * Data Type: INT64. iOS app store ID.
     *
     * @generated from protobuf enum value: IOS_APP_STORE_ID = 21;
     */
    IOS_APP_STORE_ID = 21
}
// @generated message type with reflection information, may provide speed optimized methods
class CustomPlaceholderFieldEnum$Type extends MessageType<CustomPlaceholderFieldEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.CustomPlaceholderFieldEnum", []);
    }
    create(value?: PartialMessage<CustomPlaceholderFieldEnum>): CustomPlaceholderFieldEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CustomPlaceholderFieldEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CustomPlaceholderFieldEnum): CustomPlaceholderFieldEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: CustomPlaceholderFieldEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.CustomPlaceholderFieldEnum
 */
export const CustomPlaceholderFieldEnum = new CustomPlaceholderFieldEnum$Type();
