// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/errors/customer_manager_link_error.proto" (package "google.ads.googleads.v11.errors", syntax proto3)
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
// Proto file describing CustomerManagerLink errors.

/**
 * Container for enum describing possible CustomerManagerLink errors.
 *
 * @generated from protobuf message google.ads.googleads.v11.errors.CustomerManagerLinkErrorEnum
 */
export interface CustomerManagerLinkErrorEnum {
}
/**
 * Enum describing possible CustomerManagerLink errors.
 *
 * @generated from protobuf enum google.ads.googleads.v11.errors.CustomerManagerLinkErrorEnum.CustomerManagerLinkError
 */
export enum CustomerManagerLinkErrorEnum_CustomerManagerLinkError {
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
     * No pending invitation.
     *
     * @generated from protobuf enum value: NO_PENDING_INVITE = 2;
     */
    NO_PENDING_INVITE = 2,
    /**
     * Attempt to operate on the same client more than once in the same call.
     *
     * @generated from protobuf enum value: SAME_CLIENT_MORE_THAN_ONCE_PER_CALL = 3;
     */
    SAME_CLIENT_MORE_THAN_ONCE_PER_CALL = 3,
    /**
     * Manager account has the maximum number of linked accounts.
     *
     * @generated from protobuf enum value: MANAGER_HAS_MAX_NUMBER_OF_LINKED_ACCOUNTS = 4;
     */
    MANAGER_HAS_MAX_NUMBER_OF_LINKED_ACCOUNTS = 4,
    /**
     * If no active user on account it cannot be unlinked from its manager.
     *
     * @generated from protobuf enum value: CANNOT_UNLINK_ACCOUNT_WITHOUT_ACTIVE_USER = 5;
     */
    CANNOT_UNLINK_ACCOUNT_WITHOUT_ACTIVE_USER = 5,
    /**
     * Account should have at least one active owner on it before being
     * unlinked.
     *
     * @generated from protobuf enum value: CANNOT_REMOVE_LAST_CLIENT_ACCOUNT_OWNER = 6;
     */
    CANNOT_REMOVE_LAST_CLIENT_ACCOUNT_OWNER = 6,
    /**
     * Only account owners may change their permission role.
     *
     * @generated from protobuf enum value: CANNOT_CHANGE_ROLE_BY_NON_ACCOUNT_OWNER = 7;
     */
    CANNOT_CHANGE_ROLE_BY_NON_ACCOUNT_OWNER = 7,
    /**
     * When a client's link to its manager is not active, the link role cannot
     * be changed.
     *
     * @generated from protobuf enum value: CANNOT_CHANGE_ROLE_FOR_NON_ACTIVE_LINK_ACCOUNT = 8;
     */
    CANNOT_CHANGE_ROLE_FOR_NON_ACTIVE_LINK_ACCOUNT = 8,
    /**
     * Attempt to link a child to a parent that contains or will contain
     * duplicate children.
     *
     * @generated from protobuf enum value: DUPLICATE_CHILD_FOUND = 9;
     */
    DUPLICATE_CHILD_FOUND = 9,
    /**
     * The authorized customer is a test account. It can add no more than the
     * allowed number of accounts
     *
     * @generated from protobuf enum value: TEST_ACCOUNT_LINKS_TOO_MANY_CHILD_ACCOUNTS = 10;
     */
    TEST_ACCOUNT_LINKS_TOO_MANY_CHILD_ACCOUNTS = 10
}
// @generated message type with reflection information, may provide speed optimized methods
class CustomerManagerLinkErrorEnum$Type extends MessageType<CustomerManagerLinkErrorEnum> {
    constructor() {
        super("google.ads.googleads.v11.errors.CustomerManagerLinkErrorEnum", []);
    }
    create(value?: PartialMessage<CustomerManagerLinkErrorEnum>): CustomerManagerLinkErrorEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CustomerManagerLinkErrorEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CustomerManagerLinkErrorEnum): CustomerManagerLinkErrorEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: CustomerManagerLinkErrorEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.errors.CustomerManagerLinkErrorEnum
 */
export const CustomerManagerLinkErrorEnum = new CustomerManagerLinkErrorEnum$Type();