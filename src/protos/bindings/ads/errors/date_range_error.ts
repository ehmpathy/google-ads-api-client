// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/errors/date_range_error.proto" (package "google.ads.googleads.v11.errors", syntax proto3)
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
// Proto file describing date range errors.

/**
 * Container for enum describing possible date range errors.
 *
 * @generated from protobuf message google.ads.googleads.v11.errors.DateRangeErrorEnum
 */
export interface DateRangeErrorEnum {
}
/**
 * Enum describing possible date range errors.
 *
 * @generated from protobuf enum google.ads.googleads.v11.errors.DateRangeErrorEnum.DateRangeError
 */
export enum DateRangeErrorEnum_DateRangeError {
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
     * Invalid date.
     *
     * @generated from protobuf enum value: INVALID_DATE = 2;
     */
    INVALID_DATE = 2,
    /**
     * The start date was after the end date.
     *
     * @generated from protobuf enum value: START_DATE_AFTER_END_DATE = 3;
     */
    START_DATE_AFTER_END_DATE = 3,
    /**
     * Cannot set date to past time
     *
     * @generated from protobuf enum value: CANNOT_SET_DATE_TO_PAST = 4;
     */
    CANNOT_SET_DATE_TO_PAST = 4,
    /**
     * A date was used that is past the system "last" date.
     *
     * @generated from protobuf enum value: AFTER_MAXIMUM_ALLOWABLE_DATE = 5;
     */
    AFTER_MAXIMUM_ALLOWABLE_DATE = 5,
    /**
     * Trying to change start date on a resource that has started.
     *
     * @generated from protobuf enum value: CANNOT_MODIFY_START_DATE_IF_ALREADY_STARTED = 6;
     */
    CANNOT_MODIFY_START_DATE_IF_ALREADY_STARTED = 6
}
// @generated message type with reflection information, may provide speed optimized methods
class DateRangeErrorEnum$Type extends MessageType<DateRangeErrorEnum> {
    constructor() {
        super("google.ads.googleads.v11.errors.DateRangeErrorEnum", []);
    }
    create(value?: PartialMessage<DateRangeErrorEnum>): DateRangeErrorEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<DateRangeErrorEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DateRangeErrorEnum): DateRangeErrorEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: DateRangeErrorEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.errors.DateRangeErrorEnum
 */
export const DateRangeErrorEnum = new DateRangeErrorEnum$Type();