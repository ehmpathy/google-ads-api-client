// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/linked_account_type.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
 * Container for enum describing different types of Linked accounts.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.LinkedAccountTypeEnum
 */
export interface LinkedAccountTypeEnum {
}
/**
 * Describes the possible link types between a Google Ads customer
 * and another account.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.LinkedAccountTypeEnum.LinkedAccountType
 */
export enum LinkedAccountTypeEnum_LinkedAccountType {
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
     * A link to provide third party app analytics data.
     *
     * @generated from protobuf enum value: THIRD_PARTY_APP_ANALYTICS = 2;
     */
    THIRD_PARTY_APP_ANALYTICS = 2,
    /**
     * A link to Data partner.
     *
     * @generated from protobuf enum value: DATA_PARTNER = 3;
     */
    DATA_PARTNER = 3,
    /**
     * A link to Google Ads.
     *
     * @generated from protobuf enum value: GOOGLE_ADS = 4;
     */
    GOOGLE_ADS = 4,
    /**
     * A link to Hotel Center.
     *
     * @generated from protobuf enum value: HOTEL_CENTER = 5;
     */
    HOTEL_CENTER = 5
}
// @generated message type with reflection information, may provide speed optimized methods
class LinkedAccountTypeEnum$Type extends MessageType<LinkedAccountTypeEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.LinkedAccountTypeEnum", []);
    }
    create(value?: PartialMessage<LinkedAccountTypeEnum>): LinkedAccountTypeEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<LinkedAccountTypeEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LinkedAccountTypeEnum): LinkedAccountTypeEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: LinkedAccountTypeEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.LinkedAccountTypeEnum
 */
export const LinkedAccountTypeEnum = new LinkedAccountTypeEnum$Type();