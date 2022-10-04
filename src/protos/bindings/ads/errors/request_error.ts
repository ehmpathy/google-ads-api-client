// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/errors/request_error.proto" (package "google.ads.googleads.v11.errors", syntax proto3)
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
// Proto file describing request errors.

/**
 * Container for enum describing possible request errors.
 *
 * @generated from protobuf message google.ads.googleads.v11.errors.RequestErrorEnum
 */
export interface RequestErrorEnum {
}
/**
 * Enum describing possible request errors.
 *
 * @generated from protobuf enum google.ads.googleads.v11.errors.RequestErrorEnum.RequestError
 */
export enum RequestErrorEnum_RequestError {
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
     * Resource name is required for this request.
     *
     * @generated from protobuf enum value: RESOURCE_NAME_MISSING = 3;
     */
    RESOURCE_NAME_MISSING = 3,
    /**
     * Resource name provided is malformed.
     *
     * @generated from protobuf enum value: RESOURCE_NAME_MALFORMED = 4;
     */
    RESOURCE_NAME_MALFORMED = 4,
    /**
     * Resource name provided is malformed.
     *
     * @generated from protobuf enum value: BAD_RESOURCE_ID = 17;
     */
    BAD_RESOURCE_ID = 17,
    /**
     * Customer ID is invalid.
     *
     * @generated from protobuf enum value: INVALID_CUSTOMER_ID = 16;
     */
    INVALID_CUSTOMER_ID = 16,
    /**
     * Mutate operation should have either create, update, or remove specified.
     *
     * @generated from protobuf enum value: OPERATION_REQUIRED = 5;
     */
    OPERATION_REQUIRED = 5,
    /**
     * Requested resource not found.
     *
     * @generated from protobuf enum value: RESOURCE_NOT_FOUND = 6;
     */
    RESOURCE_NOT_FOUND = 6,
    /**
     * Next page token specified in user request is invalid.
     *
     * @generated from protobuf enum value: INVALID_PAGE_TOKEN = 7;
     */
    INVALID_PAGE_TOKEN = 7,
    /**
     * Next page token specified in user request has expired.
     *
     * @generated from protobuf enum value: EXPIRED_PAGE_TOKEN = 8;
     */
    EXPIRED_PAGE_TOKEN = 8,
    /**
     * Page size specified in user request is invalid.
     *
     * @generated from protobuf enum value: INVALID_PAGE_SIZE = 22;
     */
    INVALID_PAGE_SIZE = 22,
    /**
     * Required field is missing.
     *
     * @generated from protobuf enum value: REQUIRED_FIELD_MISSING = 9;
     */
    REQUIRED_FIELD_MISSING = 9,
    /**
     * The field cannot be modified because it's immutable. It's also possible
     * that the field can be modified using 'create' operation but not 'update'.
     *
     * @generated from protobuf enum value: IMMUTABLE_FIELD = 11;
     */
    IMMUTABLE_FIELD = 11,
    /**
     * Received too many entries in request.
     *
     * @generated from protobuf enum value: TOO_MANY_MUTATE_OPERATIONS = 13;
     */
    TOO_MANY_MUTATE_OPERATIONS = 13,
    /**
     * Request cannot be executed by a manager account.
     *
     * @generated from protobuf enum value: CANNOT_BE_EXECUTED_BY_MANAGER_ACCOUNT = 14;
     */
    CANNOT_BE_EXECUTED_BY_MANAGER_ACCOUNT = 14,
    /**
     * Mutate request was attempting to modify a readonly field.
     * For instance, Budget fields can be requested for Ad Group,
     * but are read-only for adGroups:mutate.
     *
     * @generated from protobuf enum value: CANNOT_MODIFY_FOREIGN_FIELD = 15;
     */
    CANNOT_MODIFY_FOREIGN_FIELD = 15,
    /**
     * Enum value is not permitted.
     *
     * @generated from protobuf enum value: INVALID_ENUM_VALUE = 18;
     */
    INVALID_ENUM_VALUE = 18,
    /**
     * The developer-token parameter is required for all requests.
     *
     * @generated from protobuf enum value: DEVELOPER_TOKEN_PARAMETER_MISSING = 19;
     */
    DEVELOPER_TOKEN_PARAMETER_MISSING = 19,
    /**
     * The login-customer-id parameter is required for this request.
     *
     * @generated from protobuf enum value: LOGIN_CUSTOMER_ID_PARAMETER_MISSING = 20;
     */
    LOGIN_CUSTOMER_ID_PARAMETER_MISSING = 20,
    /**
     * page_token is set in the validate only request
     *
     * @generated from protobuf enum value: VALIDATE_ONLY_REQUEST_HAS_PAGE_TOKEN = 21;
     */
    VALIDATE_ONLY_REQUEST_HAS_PAGE_TOKEN = 21,
    /**
     * return_summary_row cannot be enabled if request did not select any
     * metrics field.
     *
     * @generated from protobuf enum value: CANNOT_RETURN_SUMMARY_ROW_FOR_REQUEST_WITHOUT_METRICS = 29;
     */
    CANNOT_RETURN_SUMMARY_ROW_FOR_REQUEST_WITHOUT_METRICS = 29,
    /**
     * return_summary_row should not be enabled for validate only requests.
     *
     * @generated from protobuf enum value: CANNOT_RETURN_SUMMARY_ROW_FOR_VALIDATE_ONLY_REQUESTS = 30;
     */
    CANNOT_RETURN_SUMMARY_ROW_FOR_VALIDATE_ONLY_REQUESTS = 30,
    /**
     * return_summary_row parameter value should be the same between requests
     * with page_token field set and their original request.
     *
     * @generated from protobuf enum value: INCONSISTENT_RETURN_SUMMARY_ROW_VALUE = 31;
     */
    INCONSISTENT_RETURN_SUMMARY_ROW_VALUE = 31,
    /**
     * The total results count cannot be returned if it was not requested in the
     * original request.
     *
     * @generated from protobuf enum value: TOTAL_RESULTS_COUNT_NOT_ORIGINALLY_REQUESTED = 32;
     */
    TOTAL_RESULTS_COUNT_NOT_ORIGINALLY_REQUESTED = 32,
    /**
     * Deadline specified by the client was too short.
     *
     * @generated from protobuf enum value: RPC_DEADLINE_TOO_SHORT = 33;
     */
    RPC_DEADLINE_TOO_SHORT = 33
}
// @generated message type with reflection information, may provide speed optimized methods
class RequestErrorEnum$Type extends MessageType<RequestErrorEnum> {
    constructor() {
        super("google.ads.googleads.v11.errors.RequestErrorEnum", []);
    }
    create(value?: PartialMessage<RequestErrorEnum>): RequestErrorEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<RequestErrorEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RequestErrorEnum): RequestErrorEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: RequestErrorEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.errors.RequestErrorEnum
 */
export const RequestErrorEnum = new RequestErrorEnum$Type();