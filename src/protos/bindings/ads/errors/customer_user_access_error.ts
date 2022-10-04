// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/errors/customer_user_access_error.proto" (package "google.ads.googleads.v11.errors", syntax proto3)
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
// Proto file describing CustomerUserAccess errors.

/**
 * Container for enum describing possible CustomerUserAccess errors.
 *
 * @generated from protobuf message google.ads.googleads.v11.errors.CustomerUserAccessErrorEnum
 */
export interface CustomerUserAccessErrorEnum {
}
/**
 * Enum describing possible customer user access errors.
 *
 * @generated from protobuf enum google.ads.googleads.v11.errors.CustomerUserAccessErrorEnum.CustomerUserAccessError
 */
export enum CustomerUserAccessErrorEnum_CustomerUserAccessError {
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
     * There is no user associated with the user id specified.
     *
     * @generated from protobuf enum value: INVALID_USER_ID = 2;
     */
    INVALID_USER_ID = 2,
    /**
     * Unable to remove the access between the user and customer.
     *
     * @generated from protobuf enum value: REMOVAL_DISALLOWED = 3;
     */
    REMOVAL_DISALLOWED = 3,
    /**
     * Unable to add or update the access role as specified.
     *
     * @generated from protobuf enum value: DISALLOWED_ACCESS_ROLE = 4;
     */
    DISALLOWED_ACCESS_ROLE = 4,
    /**
     * The user can't remove itself from an active serving customer if it's the
     * last admin user and the customer doesn't have any owner manager
     *
     * @generated from protobuf enum value: LAST_ADMIN_USER_OF_SERVING_CUSTOMER = 5;
     */
    LAST_ADMIN_USER_OF_SERVING_CUSTOMER = 5,
    /**
     * Last admin user cannot be removed from a manager.
     *
     * @generated from protobuf enum value: LAST_ADMIN_USER_OF_MANAGER = 6;
     */
    LAST_ADMIN_USER_OF_MANAGER = 6
}
// @generated message type with reflection information, may provide speed optimized methods
class CustomerUserAccessErrorEnum$Type extends MessageType<CustomerUserAccessErrorEnum> {
    constructor() {
        super("google.ads.googleads.v11.errors.CustomerUserAccessErrorEnum", []);
    }
    create(value?: PartialMessage<CustomerUserAccessErrorEnum>): CustomerUserAccessErrorEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CustomerUserAccessErrorEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CustomerUserAccessErrorEnum): CustomerUserAccessErrorEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: CustomerUserAccessErrorEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.errors.CustomerUserAccessErrorEnum
 */
export const CustomerUserAccessErrorEnum = new CustomerUserAccessErrorEnum$Type();
