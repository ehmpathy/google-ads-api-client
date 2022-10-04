// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/user_list_rule_type.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
 * Rule based user list rule type.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.UserListRuleTypeEnum
 */
export interface UserListRuleTypeEnum {
}
/**
 * Enum describing possible user list rule types.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.UserListRuleTypeEnum.UserListRuleType
 */
export enum UserListRuleTypeEnum_UserListRuleType {
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
     * Conjunctive normal form.
     *
     * @generated from protobuf enum value: AND_OF_ORS = 2;
     */
    AND_OF_ORS = 2,
    /**
     * Disjunctive normal form.
     *
     * @generated from protobuf enum value: OR_OF_ANDS = 3;
     */
    OR_OF_ANDS = 3
}
// @generated message type with reflection information, may provide speed optimized methods
class UserListRuleTypeEnum$Type extends MessageType<UserListRuleTypeEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.UserListRuleTypeEnum", []);
    }
    create(value?: PartialMessage<UserListRuleTypeEnum>): UserListRuleTypeEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<UserListRuleTypeEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UserListRuleTypeEnum): UserListRuleTypeEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: UserListRuleTypeEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.UserListRuleTypeEnum
 */
export const UserListRuleTypeEnum = new UserListRuleTypeEnum$Type();
