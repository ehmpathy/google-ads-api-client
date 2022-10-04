// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/errors/resource_count_limit_exceeded_error.proto" (package "google.ads.googleads.v11.errors", syntax proto3)
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
// Proto file describing resource count limit exceeded errors.

/**
 * Container for enum describing possible resource count limit exceeded errors.
 *
 * @generated from protobuf message google.ads.googleads.v11.errors.ResourceCountLimitExceededErrorEnum
 */
export interface ResourceCountLimitExceededErrorEnum {
}
/**
 * Enum describing possible resource count limit exceeded errors.
 *
 * @generated from protobuf enum google.ads.googleads.v11.errors.ResourceCountLimitExceededErrorEnum.ResourceCountLimitExceededError
 */
export enum ResourceCountLimitExceededErrorEnum_ResourceCountLimitExceededError {
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
     * Indicates that this request would exceed the number of allowed resources
     * for the Google Ads account. The exact resource type and limit being
     * checked can be inferred from accountLimitType.
     *
     * @generated from protobuf enum value: ACCOUNT_LIMIT = 2;
     */
    ACCOUNT_LIMIT = 2,
    /**
     * Indicates that this request would exceed the number of allowed resources
     * in a Campaign. The exact resource type and limit being checked can be
     * inferred from accountLimitType, and the numeric id of the
     * Campaign involved is given by enclosingId.
     *
     * @generated from protobuf enum value: CAMPAIGN_LIMIT = 3;
     */
    CAMPAIGN_LIMIT = 3,
    /**
     * Indicates that this request would exceed the number of allowed resources
     * in an ad group. The exact resource type and limit being checked can be
     * inferred from accountLimitType, and the numeric id of the
     * ad group involved is given by enclosingId.
     *
     * @generated from protobuf enum value: ADGROUP_LIMIT = 4;
     */
    ADGROUP_LIMIT = 4,
    /**
     * Indicates that this request would exceed the number of allowed resources
     * in an ad group ad. The exact resource type and limit being checked can
     * be inferred from accountLimitType, and the enclosingId
     * contains the ad group id followed by the ad id, separated by a single
     * comma (,).
     *
     * @generated from protobuf enum value: AD_GROUP_AD_LIMIT = 5;
     */
    AD_GROUP_AD_LIMIT = 5,
    /**
     * Indicates that this request would exceed the number of allowed resources
     * in an ad group criterion. The exact resource type and limit being checked
     * can be inferred from accountLimitType, and the
     * enclosingId contains the ad group id followed by the
     * criterion id, separated by a single comma (,).
     *
     * @generated from protobuf enum value: AD_GROUP_CRITERION_LIMIT = 6;
     */
    AD_GROUP_CRITERION_LIMIT = 6,
    /**
     * Indicates that this request would exceed the number of allowed resources
     * in this shared set. The exact resource type and limit being checked can
     * be inferred from accountLimitType, and the numeric id of the
     * shared set involved is given by enclosingId.
     *
     * @generated from protobuf enum value: SHARED_SET_LIMIT = 7;
     */
    SHARED_SET_LIMIT = 7,
    /**
     * Exceeds a limit related to a matching function.
     *
     * @generated from protobuf enum value: MATCHING_FUNCTION_LIMIT = 8;
     */
    MATCHING_FUNCTION_LIMIT = 8,
    /**
     * The response for this request would exceed the maximum number of rows
     * that can be returned.
     *
     * @generated from protobuf enum value: RESPONSE_ROW_LIMIT_EXCEEDED = 9;
     */
    RESPONSE_ROW_LIMIT_EXCEEDED = 9,
    /**
     * This request would exceed a limit on the number of allowed resources.
     * The details of which type of limit was exceeded will eventually be
     * returned in ErrorDetails.
     *
     * @generated from protobuf enum value: RESOURCE_LIMIT = 10;
     */
    RESOURCE_LIMIT = 10
}
// @generated message type with reflection information, may provide speed optimized methods
class ResourceCountLimitExceededErrorEnum$Type extends MessageType<ResourceCountLimitExceededErrorEnum> {
    constructor() {
        super("google.ads.googleads.v11.errors.ResourceCountLimitExceededErrorEnum", []);
    }
    create(value?: PartialMessage<ResourceCountLimitExceededErrorEnum>): ResourceCountLimitExceededErrorEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ResourceCountLimitExceededErrorEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ResourceCountLimitExceededErrorEnum): ResourceCountLimitExceededErrorEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: ResourceCountLimitExceededErrorEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.errors.ResourceCountLimitExceededErrorEnum
 */
export const ResourceCountLimitExceededErrorEnum = new ResourceCountLimitExceededErrorEnum$Type();
