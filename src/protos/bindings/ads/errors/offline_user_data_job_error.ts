// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/errors/offline_user_data_job_error.proto" (package "google.ads.googleads.v11.errors", syntax proto3)
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
// Proto file describing offline user data job errors.

/**
 * Container for enum describing possible offline user data job errors.
 *
 * @generated from protobuf message google.ads.googleads.v11.errors.OfflineUserDataJobErrorEnum
 */
export interface OfflineUserDataJobErrorEnum {
}
/**
 * Enum describing possible request errors.
 *
 * @generated from protobuf enum google.ads.googleads.v11.errors.OfflineUserDataJobErrorEnum.OfflineUserDataJobError
 */
export enum OfflineUserDataJobErrorEnum_OfflineUserDataJobError {
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
     * The user list ID provided for the job is invalid.
     *
     * @generated from protobuf enum value: INVALID_USER_LIST_ID = 3;
     */
    INVALID_USER_LIST_ID = 3,
    /**
     * Type of the user list is not applicable for the job.
     *
     * @generated from protobuf enum value: INVALID_USER_LIST_TYPE = 4;
     */
    INVALID_USER_LIST_TYPE = 4,
    /**
     * Customer is not allowisted for using user ID in upload data.
     *
     * @generated from protobuf enum value: NOT_ON_ALLOWLIST_FOR_USER_ID = 33;
     */
    NOT_ON_ALLOWLIST_FOR_USER_ID = 33,
    /**
     * Upload data is not compatible with the upload key type of the associated
     * user list.
     *
     * @generated from protobuf enum value: INCOMPATIBLE_UPLOAD_KEY_TYPE = 6;
     */
    INCOMPATIBLE_UPLOAD_KEY_TYPE = 6,
    /**
     * The user identifier is missing valid data.
     *
     * @generated from protobuf enum value: MISSING_USER_IDENTIFIER = 7;
     */
    MISSING_USER_IDENTIFIER = 7,
    /**
     * The mobile ID is malformed.
     *
     * @generated from protobuf enum value: INVALID_MOBILE_ID_FORMAT = 8;
     */
    INVALID_MOBILE_ID_FORMAT = 8,
    /**
     * Maximum number of user identifiers allowed per request is 100,000 and per
     * operation is 20.
     *
     * @generated from protobuf enum value: TOO_MANY_USER_IDENTIFIERS = 9;
     */
    TOO_MANY_USER_IDENTIFIERS = 9,
    /**
     * Customer is not on the allow-list for store sales direct data.
     *
     * @generated from protobuf enum value: NOT_ON_ALLOWLIST_FOR_STORE_SALES_DIRECT = 31;
     */
    NOT_ON_ALLOWLIST_FOR_STORE_SALES_DIRECT = 31,
    /**
     * Customer is not on the allow-list for unified store sales data.
     *
     * @generated from protobuf enum value: NOT_ON_ALLOWLIST_FOR_UNIFIED_STORE_SALES = 32;
     */
    NOT_ON_ALLOWLIST_FOR_UNIFIED_STORE_SALES = 32,
    /**
     * The partner ID in store sales direct metadata is invalid.
     *
     * @generated from protobuf enum value: INVALID_PARTNER_ID = 11;
     */
    INVALID_PARTNER_ID = 11,
    /**
     * The data in user identifier should not be encoded.
     *
     * @generated from protobuf enum value: INVALID_ENCODING = 12;
     */
    INVALID_ENCODING = 12,
    /**
     * The country code is invalid.
     *
     * @generated from protobuf enum value: INVALID_COUNTRY_CODE = 13;
     */
    INVALID_COUNTRY_CODE = 13,
    /**
     * Incompatible user identifier when using third_party_user_id for store
     * sales direct first party data or not using third_party_user_id for store
     * sales third party data.
     *
     * @generated from protobuf enum value: INCOMPATIBLE_USER_IDENTIFIER = 14;
     */
    INCOMPATIBLE_USER_IDENTIFIER = 14,
    /**
     * A transaction time in the future is not allowed.
     *
     * @generated from protobuf enum value: FUTURE_TRANSACTION_TIME = 15;
     */
    FUTURE_TRANSACTION_TIME = 15,
    /**
     * The conversion_action specified in transaction_attributes is used to
     * report conversions to a conversion action configured in Google Ads. This
     * error indicates there is no such conversion action in the account.
     *
     * @generated from protobuf enum value: INVALID_CONVERSION_ACTION = 16;
     */
    INVALID_CONVERSION_ACTION = 16,
    /**
     * Mobile ID is not supported for store sales direct data.
     *
     * @generated from protobuf enum value: MOBILE_ID_NOT_SUPPORTED = 17;
     */
    MOBILE_ID_NOT_SUPPORTED = 17,
    /**
     * When a remove-all operation is provided, it has to be the first operation
     * of the operation list.
     *
     * @generated from protobuf enum value: INVALID_OPERATION_ORDER = 18;
     */
    INVALID_OPERATION_ORDER = 18,
    /**
     * Mixing creation and removal of offline data in the same job is not
     * allowed.
     *
     * @generated from protobuf enum value: CONFLICTING_OPERATION = 19;
     */
    CONFLICTING_OPERATION = 19,
    /**
     * The external update ID already exists.
     *
     * @generated from protobuf enum value: EXTERNAL_UPDATE_ID_ALREADY_EXISTS = 21;
     */
    EXTERNAL_UPDATE_ID_ALREADY_EXISTS = 21,
    /**
     * Once the upload job is started, new operations cannot be added.
     *
     * @generated from protobuf enum value: JOB_ALREADY_STARTED = 22;
     */
    JOB_ALREADY_STARTED = 22,
    /**
     * Remove operation is not allowed for store sales direct updates.
     *
     * @generated from protobuf enum value: REMOVE_NOT_SUPPORTED = 23;
     */
    REMOVE_NOT_SUPPORTED = 23,
    /**
     * Remove-all is not supported for certain offline user data job types.
     *
     * @generated from protobuf enum value: REMOVE_ALL_NOT_SUPPORTED = 24;
     */
    REMOVE_ALL_NOT_SUPPORTED = 24,
    /**
     * The SHA256 encoded value is malformed.
     *
     * @generated from protobuf enum value: INVALID_SHA256_FORMAT = 25;
     */
    INVALID_SHA256_FORMAT = 25,
    /**
     * The custom key specified is not enabled for the unified store sales
     * upload.
     *
     * @generated from protobuf enum value: CUSTOM_KEY_DISABLED = 26;
     */
    CUSTOM_KEY_DISABLED = 26,
    /**
     * The custom key specified is not predefined through the Google Ads UI.
     *
     * @generated from protobuf enum value: CUSTOM_KEY_NOT_PREDEFINED = 27;
     */
    CUSTOM_KEY_NOT_PREDEFINED = 27,
    /**
     * The custom key specified is not set in the upload.
     *
     * @generated from protobuf enum value: CUSTOM_KEY_NOT_SET = 29;
     */
    CUSTOM_KEY_NOT_SET = 29,
    /**
     * The customer has not accepted the customer data terms in the conversion
     * settings page.
     *
     * @generated from protobuf enum value: CUSTOMER_NOT_ACCEPTED_CUSTOMER_DATA_TERMS = 30;
     */
    CUSTOMER_NOT_ACCEPTED_CUSTOMER_DATA_TERMS = 30,
    /**
     * User attributes cannot be uploaded into a user list.
     *
     * @generated from protobuf enum value: ATTRIBUTES_NOT_APPLICABLE_FOR_CUSTOMER_MATCH_USER_LIST = 34;
     */
    ATTRIBUTES_NOT_APPLICABLE_FOR_CUSTOMER_MATCH_USER_LIST = 34,
    /**
     * Lifetime bucket value must be a number from 0 to 10; 0 is only accepted
     * for remove operations
     *
     * @generated from protobuf enum value: LIFETIME_VALUE_BUCKET_NOT_IN_RANGE = 35;
     */
    LIFETIME_VALUE_BUCKET_NOT_IN_RANGE = 35,
    /**
     * Identifiers not supported for Customer Match attributes. User attributes
     * can only be provided with contact info (email, phone, address) user
     * identifiers.
     *
     * @generated from protobuf enum value: INCOMPATIBLE_USER_IDENTIFIER_FOR_ATTRIBUTES = 36;
     */
    INCOMPATIBLE_USER_IDENTIFIER_FOR_ATTRIBUTES = 36,
    /**
     * A time in the future is not allowed.
     *
     * @generated from protobuf enum value: FUTURE_TIME_NOT_ALLOWED = 37;
     */
    FUTURE_TIME_NOT_ALLOWED = 37,
    /**
     * Last purchase date time cannot be less than acquisition date time.
     *
     * @generated from protobuf enum value: LAST_PURCHASE_TIME_LESS_THAN_ACQUISITION_TIME = 38;
     */
    LAST_PURCHASE_TIME_LESS_THAN_ACQUISITION_TIME = 38,
    /**
     * Only emails are accepted as user identifiers for shopping loyalty match.
     * {-- api.dev/not-precedent: The identifier is not limited to ids, but
     * also include other user info eg. phone numbers.}
     *
     * @generated from protobuf enum value: CUSTOMER_IDENTIFIER_NOT_ALLOWED = 39;
     */
    CUSTOMER_IDENTIFIER_NOT_ALLOWED = 39,
    /**
     * Provided item ID is invalid.
     *
     * @generated from protobuf enum value: INVALID_ITEM_ID = 40;
     */
    INVALID_ITEM_ID = 40,
    /**
     * First purchase date time cannot be greater than the last purchase date
     * time.
     *
     * @generated from protobuf enum value: FIRST_PURCHASE_TIME_GREATER_THAN_LAST_PURCHASE_TIME = 42;
     */
    FIRST_PURCHASE_TIME_GREATER_THAN_LAST_PURCHASE_TIME = 42,
    /**
     * Provided lifecycle stage is invalid.
     *
     * @generated from protobuf enum value: INVALID_LIFECYCLE_STAGE = 43;
     */
    INVALID_LIFECYCLE_STAGE = 43,
    /**
     * The event value of the Customer Match user attribute is invalid.
     *
     * @generated from protobuf enum value: INVALID_EVENT_VALUE = 44;
     */
    INVALID_EVENT_VALUE = 44,
    /**
     * All the fields are not present in the EventAttribute of the Customer
     * Match.
     *
     * @generated from protobuf enum value: EVENT_ATTRIBUTE_ALL_FIELDS_ARE_REQUIRED = 45;
     */
    EVENT_ATTRIBUTE_ALL_FIELDS_ARE_REQUIRED = 45
}
// @generated message type with reflection information, may provide speed optimized methods
class OfflineUserDataJobErrorEnum$Type extends MessageType<OfflineUserDataJobErrorEnum> {
    constructor() {
        super("google.ads.googleads.v11.errors.OfflineUserDataJobErrorEnum", []);
    }
    create(value?: PartialMessage<OfflineUserDataJobErrorEnum>): OfflineUserDataJobErrorEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<OfflineUserDataJobErrorEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: OfflineUserDataJobErrorEnum): OfflineUserDataJobErrorEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: OfflineUserDataJobErrorEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.errors.OfflineUserDataJobErrorEnum
 */
export const OfflineUserDataJobErrorEnum = new OfflineUserDataJobErrorEnum$Type();
