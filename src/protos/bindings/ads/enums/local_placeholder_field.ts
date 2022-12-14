// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/local_placeholder_field.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
// Proto file describing Local placeholder fields.

/**
 * Values for Local placeholder fields.
 * For more information about dynamic remarketing feeds, see
 * https://support.google.com/google-ads/answer/6053288.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.LocalPlaceholderFieldEnum
 */
export interface LocalPlaceholderFieldEnum {
}
/**
 * Possible values for Local placeholder fields.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.LocalPlaceholderFieldEnum.LocalPlaceholderField
 */
export enum LocalPlaceholderFieldEnum_LocalPlaceholderField {
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
     * Data Type: STRING. Required. Unique ID.
     *
     * @generated from protobuf enum value: DEAL_ID = 2;
     */
    DEAL_ID = 2,
    /**
     * Data Type: STRING. Required. Main headline with local deal title to be
     * shown in dynamic ad.
     *
     * @generated from protobuf enum value: DEAL_NAME = 3;
     */
    DEAL_NAME = 3,
    /**
     * Data Type: STRING. Local deal subtitle to be shown in dynamic ad.
     *
     * @generated from protobuf enum value: SUBTITLE = 4;
     */
    SUBTITLE = 4,
    /**
     * Data Type: STRING. Description of local deal to be shown in dynamic ad.
     *
     * @generated from protobuf enum value: DESCRIPTION = 5;
     */
    DESCRIPTION = 5,
    /**
     * Data Type: STRING. Price to be shown in the ad. Highly recommended for
     * dynamic ads. Example: "100.00 USD"
     *
     * @generated from protobuf enum value: PRICE = 6;
     */
    PRICE = 6,
    /**
     * Data Type: STRING. Formatted price to be shown in the ad.
     * Example: "Starting at $100.00 USD", "$80 - $100"
     *
     * @generated from protobuf enum value: FORMATTED_PRICE = 7;
     */
    FORMATTED_PRICE = 7,
    /**
     * Data Type: STRING. Sale price to be shown in the ad.
     * Example: "80.00 USD"
     *
     * @generated from protobuf enum value: SALE_PRICE = 8;
     */
    SALE_PRICE = 8,
    /**
     * Data Type: STRING. Formatted sale price to be shown in the ad.
     * Example: "On sale for $80.00", "$60 - $80"
     *
     * @generated from protobuf enum value: FORMATTED_SALE_PRICE = 9;
     */
    FORMATTED_SALE_PRICE = 9,
    /**
     * Data Type: URL. Image to be displayed in the ad.
     *
     * @generated from protobuf enum value: IMAGE_URL = 10;
     */
    IMAGE_URL = 10,
    /**
     * Data Type: STRING. Complete property address, including postal code.
     *
     * @generated from protobuf enum value: ADDRESS = 11;
     */
    ADDRESS = 11,
    /**
     * Data Type: STRING. Category of local deal used to group like items
     * together for recommendation engine.
     *
     * @generated from protobuf enum value: CATEGORY = 12;
     */
    CATEGORY = 12,
    /**
     * Data Type: STRING_LIST. Keywords used for product retrieval.
     *
     * @generated from protobuf enum value: CONTEXTUAL_KEYWORDS = 13;
     */
    CONTEXTUAL_KEYWORDS = 13,
    /**
     * Data Type: URL_LIST. Required. Final URLs to be used in ad when using
     * Upgraded URLs; the more specific the better (for example, the individual
     * URL of a specific local deal and its location).
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
     * Data Type: STRING. Android app link. Must be formatted as:
     * android-app://{package_id}/{scheme}/{host_path}.
     * The components are defined as follows:
     * package_id: app ID as specified in Google Play.
     * scheme: the scheme to pass to the application. Can be HTTP, or a custom
     *   scheme.
     * host_path: identifies the specific content within your application.
     *
     * @generated from protobuf enum value: ANDROID_APP_LINK = 17;
     */
    ANDROID_APP_LINK = 17,
    /**
     * Data Type: STRING_LIST. List of recommended local deal IDs to show
     * together with this item.
     *
     * @generated from protobuf enum value: SIMILAR_DEAL_IDS = 18;
     */
    SIMILAR_DEAL_IDS = 18,
    /**
     * Data Type: STRING. iOS app link.
     *
     * @generated from protobuf enum value: IOS_APP_LINK = 19;
     */
    IOS_APP_LINK = 19,
    /**
     * Data Type: INT64. iOS app store ID.
     *
     * @generated from protobuf enum value: IOS_APP_STORE_ID = 20;
     */
    IOS_APP_STORE_ID = 20
}
// @generated message type with reflection information, may provide speed optimized methods
class LocalPlaceholderFieldEnum$Type extends MessageType<LocalPlaceholderFieldEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.LocalPlaceholderFieldEnum", []);
    }
    create(value?: PartialMessage<LocalPlaceholderFieldEnum>): LocalPlaceholderFieldEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<LocalPlaceholderFieldEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LocalPlaceholderFieldEnum): LocalPlaceholderFieldEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: LocalPlaceholderFieldEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.LocalPlaceholderFieldEnum
 */
export const LocalPlaceholderFieldEnum = new LocalPlaceholderFieldEnum$Type();
