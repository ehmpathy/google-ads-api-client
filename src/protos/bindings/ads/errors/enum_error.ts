// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/errors/enum_error.proto" (package "google.ads.googleads.v11.errors", syntax proto3)
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
// Proto file describing enum errors.

/**
 * Container for enum describing possible enum errors.
 *
 * @generated from protobuf message google.ads.googleads.v11.errors.EnumErrorEnum
 */
export interface EnumErrorEnum {
}
/**
 * Enum describing possible enum errors.
 *
 * @generated from protobuf enum google.ads.googleads.v11.errors.EnumErrorEnum.EnumError
 */
export enum EnumErrorEnum_EnumError {
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
     * The enum value is not permitted.
     *
     * @generated from protobuf enum value: ENUM_VALUE_NOT_PERMITTED = 3;
     */
    ENUM_VALUE_NOT_PERMITTED = 3
}
// @generated message type with reflection information, may provide speed optimized methods
class EnumErrorEnum$Type extends MessageType<EnumErrorEnum> {
    constructor() {
        super("google.ads.googleads.v11.errors.EnumErrorEnum", []);
    }
    create(value?: PartialMessage<EnumErrorEnum>): EnumErrorEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<EnumErrorEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EnumErrorEnum): EnumErrorEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: EnumErrorEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.errors.EnumErrorEnum
 */
export const EnumErrorEnum = new EnumErrorEnum$Type();
