// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/errors/header_error.proto" (package "google.ads.googleads.v11.errors", syntax proto3)
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
// Proto file describing header errors.

/**
 * Container for enum describing possible header errors.
 *
 * @generated from protobuf message google.ads.googleads.v11.errors.HeaderErrorEnum
 */
export interface HeaderErrorEnum {
}
/**
 * Enum describing possible header errors.
 *
 * @generated from protobuf enum google.ads.googleads.v11.errors.HeaderErrorEnum.HeaderError
 */
export enum HeaderErrorEnum_HeaderError {
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
     * The login customer ID could not be validated.
     *
     * @generated from protobuf enum value: INVALID_LOGIN_CUSTOMER_ID = 3;
     */
    INVALID_LOGIN_CUSTOMER_ID = 3,
    /**
     * The linked customer ID could not be validated.
     *
     * @generated from protobuf enum value: INVALID_LINKED_CUSTOMER_ID = 7;
     */
    INVALID_LINKED_CUSTOMER_ID = 7
}
// @generated message type with reflection information, may provide speed optimized methods
class HeaderErrorEnum$Type extends MessageType<HeaderErrorEnum> {
    constructor() {
        super("google.ads.googleads.v11.errors.HeaderErrorEnum", []);
    }
    create(value?: PartialMessage<HeaderErrorEnum>): HeaderErrorEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<HeaderErrorEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HeaderErrorEnum): HeaderErrorEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: HeaderErrorEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.errors.HeaderErrorEnum
 */
export const HeaderErrorEnum = new HeaderErrorEnum$Type();
