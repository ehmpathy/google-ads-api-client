// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/errors/custom_audience_error.proto" (package "google.ads.googleads.v11.errors", syntax proto3)
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
// Proto file describing custom audience errors.

/**
 * Container for enum describing possible custom audience errors.
 *
 * @generated from protobuf message google.ads.googleads.v11.errors.CustomAudienceErrorEnum
 */
export interface CustomAudienceErrorEnum {
}
/**
 * Enum describing possible custom audience errors.
 *
 * @generated from protobuf enum google.ads.googleads.v11.errors.CustomAudienceErrorEnum.CustomAudienceError
 */
export enum CustomAudienceErrorEnum_CustomAudienceError {
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
     * New name in the custom audience is duplicated ignoring cases.
     *
     * @generated from protobuf enum value: NAME_ALREADY_USED = 2;
     */
    NAME_ALREADY_USED = 2,
    /**
     * Cannot remove a custom audience while it's still being used as targeting.
     *
     * @generated from protobuf enum value: CANNOT_REMOVE_WHILE_IN_USE = 3;
     */
    CANNOT_REMOVE_WHILE_IN_USE = 3,
    /**
     * Cannot update or remove a custom audience that is already removed.
     *
     * @generated from protobuf enum value: RESOURCE_ALREADY_REMOVED = 4;
     */
    RESOURCE_ALREADY_REMOVED = 4,
    /**
     * The pair of [type, value] already exists in members.
     *
     * @generated from protobuf enum value: MEMBER_TYPE_AND_PARAMETER_ALREADY_EXISTED = 5;
     */
    MEMBER_TYPE_AND_PARAMETER_ALREADY_EXISTED = 5,
    /**
     * Member type is invalid.
     *
     * @generated from protobuf enum value: INVALID_MEMBER_TYPE = 6;
     */
    INVALID_MEMBER_TYPE = 6,
    /**
     * Member type does not have associated value.
     *
     * @generated from protobuf enum value: MEMBER_TYPE_AND_VALUE_DOES_NOT_MATCH = 7;
     */
    MEMBER_TYPE_AND_VALUE_DOES_NOT_MATCH = 7,
    /**
     * Custom audience contains a member that violates policy.
     *
     * @generated from protobuf enum value: POLICY_VIOLATION = 8;
     */
    POLICY_VIOLATION = 8,
    /**
     * Change in custom audience type is not allowed.
     *
     * @generated from protobuf enum value: INVALID_TYPE_CHANGE = 9;
     */
    INVALID_TYPE_CHANGE = 9
}
// @generated message type with reflection information, may provide speed optimized methods
class CustomAudienceErrorEnum$Type extends MessageType<CustomAudienceErrorEnum> {
    constructor() {
        super("google.ads.googleads.v11.errors.CustomAudienceErrorEnum", []);
    }
    create(value?: PartialMessage<CustomAudienceErrorEnum>): CustomAudienceErrorEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CustomAudienceErrorEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CustomAudienceErrorEnum): CustomAudienceErrorEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: CustomAudienceErrorEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.errors.CustomAudienceErrorEnum
 */
export const CustomAudienceErrorEnum = new CustomAudienceErrorEnum$Type();
