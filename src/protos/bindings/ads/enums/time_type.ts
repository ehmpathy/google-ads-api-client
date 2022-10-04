// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/time_type.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
// Proto file describing TimeType types.

/**
 * Message describing time types.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.TimeTypeEnum
 */
export interface TimeTypeEnum {
}
/**
 * The possible time types used by certain resources as an alternative to
 * absolute timestamps.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.TimeTypeEnum.TimeType
 */
export enum TimeTypeEnum_TimeType {
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
     * As soon as possible.
     *
     * @generated from protobuf enum value: NOW = 2;
     */
    NOW = 2,
    /**
     * An infinite point in the future.
     *
     * @generated from protobuf enum value: FOREVER = 3;
     */
    FOREVER = 3
}
// @generated message type with reflection information, may provide speed optimized methods
class TimeTypeEnum$Type extends MessageType<TimeTypeEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.TimeTypeEnum", []);
    }
    create(value?: PartialMessage<TimeTypeEnum>): TimeTypeEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<TimeTypeEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TimeTypeEnum): TimeTypeEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: TimeTypeEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.TimeTypeEnum
 */
export const TimeTypeEnum = new TimeTypeEnum$Type();
