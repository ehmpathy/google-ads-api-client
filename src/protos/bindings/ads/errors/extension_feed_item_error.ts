// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/errors/extension_feed_item_error.proto" (package "google.ads.googleads.v11.errors", syntax proto3)
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
// Proto file describing extension feed item errors.

/**
 * Container for enum describing possible extension feed item error.
 *
 * @generated from protobuf message google.ads.googleads.v11.errors.ExtensionFeedItemErrorEnum
 */
export interface ExtensionFeedItemErrorEnum {
}
/**
 * Enum describing possible extension feed item errors.
 *
 * @generated from protobuf enum google.ads.googleads.v11.errors.ExtensionFeedItemErrorEnum.ExtensionFeedItemError
 */
export enum ExtensionFeedItemErrorEnum_ExtensionFeedItemError {
    /**
     * Enum unspecified.
     *
     * @generated from protobuf enum value: UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * The received error code is not known in this version.
     *
     * @generated from protobuf enum value: UNKNOWN = 1;
     */
    UNKNOWN = 1,
    /**
     * Value is not within the accepted range.
     *
     * @generated from protobuf enum value: VALUE_OUT_OF_RANGE = 2;
     */
    VALUE_OUT_OF_RANGE = 2,
    /**
     * Url list is too long.
     *
     * @generated from protobuf enum value: URL_LIST_TOO_LONG = 3;
     */
    URL_LIST_TOO_LONG = 3,
    /**
     * Cannot have a geo targeting restriction without having geo targeting.
     *
     * @generated from protobuf enum value: CANNOT_HAVE_RESTRICTION_ON_EMPTY_GEO_TARGETING = 4;
     */
    CANNOT_HAVE_RESTRICTION_ON_EMPTY_GEO_TARGETING = 4,
    /**
     * Cannot simultaneously set sitelink field with final urls.
     *
     * @generated from protobuf enum value: CANNOT_SET_WITH_FINAL_URLS = 5;
     */
    CANNOT_SET_WITH_FINAL_URLS = 5,
    /**
     * Must set field with final urls.
     *
     * @generated from protobuf enum value: CANNOT_SET_WITHOUT_FINAL_URLS = 6;
     */
    CANNOT_SET_WITHOUT_FINAL_URLS = 6,
    /**
     * Phone number for a call extension is invalid.
     *
     * @generated from protobuf enum value: INVALID_PHONE_NUMBER = 7;
     */
    INVALID_PHONE_NUMBER = 7,
    /**
     * Phone number for a call extension is not supported for the given country
     * code.
     *
     * @generated from protobuf enum value: PHONE_NUMBER_NOT_SUPPORTED_FOR_COUNTRY = 8;
     */
    PHONE_NUMBER_NOT_SUPPORTED_FOR_COUNTRY = 8,
    /**
     * A carrier specific number in short format is not allowed for call
     * extensions.
     *
     * @generated from protobuf enum value: CARRIER_SPECIFIC_SHORT_NUMBER_NOT_ALLOWED = 9;
     */
    CARRIER_SPECIFIC_SHORT_NUMBER_NOT_ALLOWED = 9,
    /**
     * Premium rate numbers are not allowed for call extensions.
     *
     * @generated from protobuf enum value: PREMIUM_RATE_NUMBER_NOT_ALLOWED = 10;
     */
    PREMIUM_RATE_NUMBER_NOT_ALLOWED = 10,
    /**
     * Phone number type for a call extension is not allowed.
     * For example, personal number is not allowed for a call extension in
     * most regions.
     *
     * @generated from protobuf enum value: DISALLOWED_NUMBER_TYPE = 11;
     */
    DISALLOWED_NUMBER_TYPE = 11,
    /**
     * Phone number for a call extension does not meet domestic format
     * requirements.
     *
     * @generated from protobuf enum value: INVALID_DOMESTIC_PHONE_NUMBER_FORMAT = 12;
     */
    INVALID_DOMESTIC_PHONE_NUMBER_FORMAT = 12,
    /**
     * Vanity phone numbers (for example, those including letters) are not
     * allowed for call extensions.
     *
     * @generated from protobuf enum value: VANITY_PHONE_NUMBER_NOT_ALLOWED = 13;
     */
    VANITY_PHONE_NUMBER_NOT_ALLOWED = 13,
    /**
     * Call conversion action provided for a call extension is invalid.
     *
     * @generated from protobuf enum value: INVALID_CALL_CONVERSION_ACTION = 14;
     */
    INVALID_CALL_CONVERSION_ACTION = 14,
    /**
     * For a call extension, the customer is not on the allow-list for call
     * tracking.
     *
     * @generated from protobuf enum value: CUSTOMER_NOT_ON_ALLOWLIST_FOR_CALLTRACKING = 47;
     */
    CUSTOMER_NOT_ON_ALLOWLIST_FOR_CALLTRACKING = 47,
    /**
     * Call tracking is not supported for the given country for a call
     * extension.
     *
     * @generated from protobuf enum value: CALLTRACKING_NOT_SUPPORTED_FOR_COUNTRY = 16;
     */
    CALLTRACKING_NOT_SUPPORTED_FOR_COUNTRY = 16,
    /**
     * Customer hasn't consented for call recording, which is required for
     * creating/updating call feed items. See
     * https://support.google.com/google-ads/answer/7412639.
     *
     * @generated from protobuf enum value: CUSTOMER_CONSENT_FOR_CALL_RECORDING_REQUIRED = 17;
     */
    CUSTOMER_CONSENT_FOR_CALL_RECORDING_REQUIRED = 17,
    /**
     * App id provided for an app extension is invalid.
     *
     * @generated from protobuf enum value: INVALID_APP_ID = 18;
     */
    INVALID_APP_ID = 18,
    /**
     * Quotation marks present in the review text for a review extension.
     *
     * @generated from protobuf enum value: QUOTES_IN_REVIEW_EXTENSION_SNIPPET = 19;
     */
    QUOTES_IN_REVIEW_EXTENSION_SNIPPET = 19,
    /**
     * Hyphen character present in the review text for a review extension.
     *
     * @generated from protobuf enum value: HYPHENS_IN_REVIEW_EXTENSION_SNIPPET = 20;
     */
    HYPHENS_IN_REVIEW_EXTENSION_SNIPPET = 20,
    /**
     * A denylisted review source name or url was provided for a review
     * extension.
     *
     * @generated from protobuf enum value: REVIEW_EXTENSION_SOURCE_INELIGIBLE = 21;
     */
    REVIEW_EXTENSION_SOURCE_INELIGIBLE = 21,
    /**
     * Review source name should not be found in the review text.
     *
     * @generated from protobuf enum value: SOURCE_NAME_IN_REVIEW_EXTENSION_TEXT = 22;
     */
    SOURCE_NAME_IN_REVIEW_EXTENSION_TEXT = 22,
    /**
     * Inconsistent currency codes.
     *
     * @generated from protobuf enum value: INCONSISTENT_CURRENCY_CODES = 23;
     */
    INCONSISTENT_CURRENCY_CODES = 23,
    /**
     * Price extension cannot have duplicated headers.
     *
     * @generated from protobuf enum value: PRICE_EXTENSION_HAS_DUPLICATED_HEADERS = 24;
     */
    PRICE_EXTENSION_HAS_DUPLICATED_HEADERS = 24,
    /**
     * Price item cannot have duplicated header and description.
     *
     * @generated from protobuf enum value: PRICE_ITEM_HAS_DUPLICATED_HEADER_AND_DESCRIPTION = 25;
     */
    PRICE_ITEM_HAS_DUPLICATED_HEADER_AND_DESCRIPTION = 25,
    /**
     * Price extension has too few items.
     *
     * @generated from protobuf enum value: PRICE_EXTENSION_HAS_TOO_FEW_ITEMS = 26;
     */
    PRICE_EXTENSION_HAS_TOO_FEW_ITEMS = 26,
    /**
     * Price extension has too many items.
     *
     * @generated from protobuf enum value: PRICE_EXTENSION_HAS_TOO_MANY_ITEMS = 27;
     */
    PRICE_EXTENSION_HAS_TOO_MANY_ITEMS = 27,
    /**
     * The input value is not currently supported.
     *
     * @generated from protobuf enum value: UNSUPPORTED_VALUE = 28;
     */
    UNSUPPORTED_VALUE = 28,
    /**
     * The input value is not currently supported in the selected language of an
     * extension.
     *
     * @generated from protobuf enum value: UNSUPPORTED_VALUE_IN_SELECTED_LANGUAGE = 29;
     */
    UNSUPPORTED_VALUE_IN_SELECTED_LANGUAGE = 29,
    /**
     * Unknown or unsupported device preference.
     *
     * @generated from protobuf enum value: INVALID_DEVICE_PREFERENCE = 30;
     */
    INVALID_DEVICE_PREFERENCE = 30,
    /**
     * Invalid feed item schedule end time (for example, endHour = 24 and
     * endMinute != 0).
     *
     * @generated from protobuf enum value: INVALID_SCHEDULE_END = 31;
     */
    INVALID_SCHEDULE_END = 31,
    /**
     * Date time zone does not match the account's time zone.
     *
     * @generated from protobuf enum value: DATE_TIME_MUST_BE_IN_ACCOUNT_TIME_ZONE = 32;
     */
    DATE_TIME_MUST_BE_IN_ACCOUNT_TIME_ZONE = 32,
    /**
     * Invalid structured snippet header.
     *
     * @generated from protobuf enum value: INVALID_SNIPPETS_HEADER = 33;
     */
    INVALID_SNIPPETS_HEADER = 33,
    /**
     * Cannot operate on removed feed item.
     *
     * @generated from protobuf enum value: CANNOT_OPERATE_ON_REMOVED_FEED_ITEM = 34;
     */
    CANNOT_OPERATE_ON_REMOVED_FEED_ITEM = 34,
    /**
     * Phone number not supported when call tracking enabled for country.
     *
     * @generated from protobuf enum value: PHONE_NUMBER_NOT_SUPPORTED_WITH_CALLTRACKING_FOR_COUNTRY = 35;
     */
    PHONE_NUMBER_NOT_SUPPORTED_WITH_CALLTRACKING_FOR_COUNTRY = 35,
    /**
     * Cannot set call_conversion_action while call_conversion_tracking_enabled
     * is set to true.
     *
     * @generated from protobuf enum value: CONFLICTING_CALL_CONVERSION_SETTINGS = 36;
     */
    CONFLICTING_CALL_CONVERSION_SETTINGS = 36,
    /**
     * The type of the input extension feed item doesn't match the existing
     * extension feed item.
     *
     * @generated from protobuf enum value: EXTENSION_TYPE_MISMATCH = 37;
     */
    EXTENSION_TYPE_MISMATCH = 37,
    /**
     * The oneof field extension for example, subtype of extension feed item is
     * required.
     *
     * @generated from protobuf enum value: EXTENSION_SUBTYPE_REQUIRED = 38;
     */
    EXTENSION_SUBTYPE_REQUIRED = 38,
    /**
     * The referenced feed item is not mapped to a supported extension type.
     *
     * @generated from protobuf enum value: EXTENSION_TYPE_UNSUPPORTED = 39;
     */
    EXTENSION_TYPE_UNSUPPORTED = 39,
    /**
     * Cannot operate on a Feed with more than one active FeedMapping.
     *
     * @generated from protobuf enum value: CANNOT_OPERATE_ON_FEED_WITH_MULTIPLE_MAPPINGS = 40;
     */
    CANNOT_OPERATE_ON_FEED_WITH_MULTIPLE_MAPPINGS = 40,
    /**
     * Cannot operate on a Feed that has key attributes.
     *
     * @generated from protobuf enum value: CANNOT_OPERATE_ON_FEED_WITH_KEY_ATTRIBUTES = 41;
     */
    CANNOT_OPERATE_ON_FEED_WITH_KEY_ATTRIBUTES = 41,
    /**
     * Input price is not in a valid format.
     *
     * @generated from protobuf enum value: INVALID_PRICE_FORMAT = 42;
     */
    INVALID_PRICE_FORMAT = 42,
    /**
     * The promotion time is invalid.
     *
     * @generated from protobuf enum value: PROMOTION_INVALID_TIME = 43;
     */
    PROMOTION_INVALID_TIME = 43,
    /**
     * This field has too many decimal places specified.
     *
     * @generated from protobuf enum value: TOO_MANY_DECIMAL_PLACES_SPECIFIED = 44;
     */
    TOO_MANY_DECIMAL_PLACES_SPECIFIED = 44,
    /**
     * Concrete sub type of ExtensionFeedItem is required for this operation.
     *
     * @generated from protobuf enum value: CONCRETE_EXTENSION_TYPE_REQUIRED = 45;
     */
    CONCRETE_EXTENSION_TYPE_REQUIRED = 45,
    /**
     * Feed item schedule end time must be after start time.
     *
     * @generated from protobuf enum value: SCHEDULE_END_NOT_AFTER_START = 46;
     */
    SCHEDULE_END_NOT_AFTER_START = 46
}
// @generated message type with reflection information, may provide speed optimized methods
class ExtensionFeedItemErrorEnum$Type extends MessageType<ExtensionFeedItemErrorEnum> {
    constructor() {
        super("google.ads.googleads.v11.errors.ExtensionFeedItemErrorEnum", []);
    }
    create(value?: PartialMessage<ExtensionFeedItemErrorEnum>): ExtensionFeedItemErrorEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ExtensionFeedItemErrorEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ExtensionFeedItemErrorEnum): ExtensionFeedItemErrorEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: ExtensionFeedItemErrorEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.errors.ExtensionFeedItemErrorEnum
 */
export const ExtensionFeedItemErrorEnum = new ExtensionFeedItemErrorEnum$Type();
