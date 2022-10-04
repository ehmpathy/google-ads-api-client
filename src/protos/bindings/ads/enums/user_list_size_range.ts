// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/user_list_size_range.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
// Proto file describing user list size range.

/**
 * Size range in terms of number of users of a UserList.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.UserListSizeRangeEnum
 */
export interface UserListSizeRangeEnum {
}
/**
 * Enum containing possible user list size ranges.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.UserListSizeRangeEnum.UserListSizeRange
 */
export enum UserListSizeRangeEnum_UserListSizeRange {
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
     * User list has less than 500 users.
     *
     * @generated from protobuf enum value: LESS_THAN_FIVE_HUNDRED = 2;
     */
    LESS_THAN_FIVE_HUNDRED = 2,
    /**
     * User list has number of users in range of 500 to 1000.
     *
     * @generated from protobuf enum value: LESS_THAN_ONE_THOUSAND = 3;
     */
    LESS_THAN_ONE_THOUSAND = 3,
    /**
     * User list has number of users in range of 1000 to 10000.
     *
     * @generated from protobuf enum value: ONE_THOUSAND_TO_TEN_THOUSAND = 4;
     */
    ONE_THOUSAND_TO_TEN_THOUSAND = 4,
    /**
     * User list has number of users in range of 10000 to 50000.
     *
     * @generated from protobuf enum value: TEN_THOUSAND_TO_FIFTY_THOUSAND = 5;
     */
    TEN_THOUSAND_TO_FIFTY_THOUSAND = 5,
    /**
     * User list has number of users in range of 50000 to 100000.
     *
     * @generated from protobuf enum value: FIFTY_THOUSAND_TO_ONE_HUNDRED_THOUSAND = 6;
     */
    FIFTY_THOUSAND_TO_ONE_HUNDRED_THOUSAND = 6,
    /**
     * User list has number of users in range of 100000 to 300000.
     *
     * @generated from protobuf enum value: ONE_HUNDRED_THOUSAND_TO_THREE_HUNDRED_THOUSAND = 7;
     */
    ONE_HUNDRED_THOUSAND_TO_THREE_HUNDRED_THOUSAND = 7,
    /**
     * User list has number of users in range of 300000 to 500000.
     *
     * @generated from protobuf enum value: THREE_HUNDRED_THOUSAND_TO_FIVE_HUNDRED_THOUSAND = 8;
     */
    THREE_HUNDRED_THOUSAND_TO_FIVE_HUNDRED_THOUSAND = 8,
    /**
     * User list has number of users in range of 500000 to 1 million.
     *
     * @generated from protobuf enum value: FIVE_HUNDRED_THOUSAND_TO_ONE_MILLION = 9;
     */
    FIVE_HUNDRED_THOUSAND_TO_ONE_MILLION = 9,
    /**
     * User list has number of users in range of 1 to 2 millions.
     *
     * @generated from protobuf enum value: ONE_MILLION_TO_TWO_MILLION = 10;
     */
    ONE_MILLION_TO_TWO_MILLION = 10,
    /**
     * User list has number of users in range of 2 to 3 millions.
     *
     * @generated from protobuf enum value: TWO_MILLION_TO_THREE_MILLION = 11;
     */
    TWO_MILLION_TO_THREE_MILLION = 11,
    /**
     * User list has number of users in range of 3 to 5 millions.
     *
     * @generated from protobuf enum value: THREE_MILLION_TO_FIVE_MILLION = 12;
     */
    THREE_MILLION_TO_FIVE_MILLION = 12,
    /**
     * User list has number of users in range of 5 to 10 millions.
     *
     * @generated from protobuf enum value: FIVE_MILLION_TO_TEN_MILLION = 13;
     */
    FIVE_MILLION_TO_TEN_MILLION = 13,
    /**
     * User list has number of users in range of 10 to 20 millions.
     *
     * @generated from protobuf enum value: TEN_MILLION_TO_TWENTY_MILLION = 14;
     */
    TEN_MILLION_TO_TWENTY_MILLION = 14,
    /**
     * User list has number of users in range of 20 to 30 millions.
     *
     * @generated from protobuf enum value: TWENTY_MILLION_TO_THIRTY_MILLION = 15;
     */
    TWENTY_MILLION_TO_THIRTY_MILLION = 15,
    /**
     * User list has number of users in range of 30 to 50 millions.
     *
     * @generated from protobuf enum value: THIRTY_MILLION_TO_FIFTY_MILLION = 16;
     */
    THIRTY_MILLION_TO_FIFTY_MILLION = 16,
    /**
     * User list has over 50 million users.
     *
     * @generated from protobuf enum value: OVER_FIFTY_MILLION = 17;
     */
    OVER_FIFTY_MILLION = 17
}
// @generated message type with reflection information, may provide speed optimized methods
class UserListSizeRangeEnum$Type extends MessageType<UserListSizeRangeEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.UserListSizeRangeEnum", []);
    }
    create(value?: PartialMessage<UserListSizeRangeEnum>): UserListSizeRangeEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<UserListSizeRangeEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UserListSizeRangeEnum): UserListSizeRangeEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: UserListSizeRangeEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.UserListSizeRangeEnum
 */
export const UserListSizeRangeEnum = new UserListSizeRangeEnum$Type();
