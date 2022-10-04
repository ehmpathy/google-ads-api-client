// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/access_role.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
/**
 * Container for enum describing possible access role for user.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.AccessRoleEnum
 */
export interface AccessRoleEnum {
}
/**
 * Possible access role of a user.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.AccessRoleEnum.AccessRole
 */
export enum AccessRoleEnum_AccessRole {
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
     * Owns its account and can control the addition of other users.
     *
     * @generated from protobuf enum value: ADMIN = 2;
     */
    ADMIN = 2,
    /**
     * Can modify campaigns, but can't affect other users.
     *
     * @generated from protobuf enum value: STANDARD = 3;
     */
    STANDARD = 3,
    /**
     * Can view campaigns and account changes, but cannot make edits.
     *
     * @generated from protobuf enum value: READ_ONLY = 4;
     */
    READ_ONLY = 4,
    /**
     * Role for \"email only\" access. Represents an email recipient rather than
     * a true User entity.
     *
     * @generated from protobuf enum value: EMAIL_ONLY = 5;
     */
    EMAIL_ONLY = 5
}
// @generated message type with reflection information, may provide speed optimized methods
class AccessRoleEnum$Type extends MessageType<AccessRoleEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.AccessRoleEnum", []);
    }
    create(value?: PartialMessage<AccessRoleEnum>): AccessRoleEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AccessRoleEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AccessRoleEnum): AccessRoleEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: AccessRoleEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.AccessRoleEnum
 */
export const AccessRoleEnum = new AccessRoleEnum$Type();