// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/day_of_week.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
// Proto file describing days of week.

/**
 * Container for enumeration of days of the week, for example, "Monday".
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.DayOfWeekEnum
 */
export interface DayOfWeekEnum {
}
/**
 * Enumerates days of the week, for example, "Monday".
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.DayOfWeekEnum.DayOfWeek
 */
export enum DayOfWeekEnum_DayOfWeek {
    /**
     * Not specified.
     *
     * @generated from protobuf enum value: UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * The value is unknown in this version.
     *
     * @generated from protobuf enum value: UNKNOWN = 1;
     */
    UNKNOWN = 1,
    /**
     * Monday.
     *
     * @generated from protobuf enum value: MONDAY = 2;
     */
    MONDAY = 2,
    /**
     * Tuesday.
     *
     * @generated from protobuf enum value: TUESDAY = 3;
     */
    TUESDAY = 3,
    /**
     * Wednesday.
     *
     * @generated from protobuf enum value: WEDNESDAY = 4;
     */
    WEDNESDAY = 4,
    /**
     * Thursday.
     *
     * @generated from protobuf enum value: THURSDAY = 5;
     */
    THURSDAY = 5,
    /**
     * Friday.
     *
     * @generated from protobuf enum value: FRIDAY = 6;
     */
    FRIDAY = 6,
    /**
     * Saturday.
     *
     * @generated from protobuf enum value: SATURDAY = 7;
     */
    SATURDAY = 7,
    /**
     * Sunday.
     *
     * @generated from protobuf enum value: SUNDAY = 8;
     */
    SUNDAY = 8
}
// @generated message type with reflection information, may provide speed optimized methods
class DayOfWeekEnum$Type extends MessageType<DayOfWeekEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.DayOfWeekEnum", []);
    }
    create(value?: PartialMessage<DayOfWeekEnum>): DayOfWeekEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<DayOfWeekEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DayOfWeekEnum): DayOfWeekEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: DayOfWeekEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.DayOfWeekEnum
 */
export const DayOfWeekEnum = new DayOfWeekEnum$Type();