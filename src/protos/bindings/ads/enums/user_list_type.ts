// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/user_list_type.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
// Proto file describing user list type.

/**
 * The user list types.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.UserListTypeEnum
 */
export interface UserListTypeEnum {
}
/**
 * Enum containing possible user list types.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.UserListTypeEnum.UserListType
 */
export enum UserListTypeEnum_UserListType {
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
     * UserList represented as a collection of conversion types.
     *
     * @generated from protobuf enum value: REMARKETING = 2;
     */
    REMARKETING = 2,
    /**
     * UserList represented as a combination of other user lists/interests.
     *
     * @generated from protobuf enum value: LOGICAL = 3;
     */
    LOGICAL = 3,
    /**
     * UserList created in the Google Ad Manager platform.
     *
     * @generated from protobuf enum value: EXTERNAL_REMARKETING = 4;
     */
    EXTERNAL_REMARKETING = 4,
    /**
     * UserList associated with a rule.
     *
     * @generated from protobuf enum value: RULE_BASED = 5;
     */
    RULE_BASED = 5,
    /**
     * UserList with users similar to users of another UserList.
     *
     * @generated from protobuf enum value: SIMILAR = 6;
     */
    SIMILAR = 6,
    /**
     * UserList of first-party CRM data provided by advertiser in the form of
     * emails or other formats.
     *
     * @generated from protobuf enum value: CRM_BASED = 7;
     */
    CRM_BASED = 7
}
// @generated message type with reflection information, may provide speed optimized methods
class UserListTypeEnum$Type extends MessageType<UserListTypeEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.UserListTypeEnum", []);
    }
    create(value?: PartialMessage<UserListTypeEnum>): UserListTypeEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<UserListTypeEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UserListTypeEnum): UserListTypeEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: UserListTypeEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.UserListTypeEnum
 */
export const UserListTypeEnum = new UserListTypeEnum$Type();