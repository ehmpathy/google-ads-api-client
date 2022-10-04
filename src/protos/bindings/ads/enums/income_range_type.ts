// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/income_range_type.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
// Proto file describing income range types.

/**
 * Container for enum describing the type of demographic income ranges.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.IncomeRangeTypeEnum
 */
export interface IncomeRangeTypeEnum {
}
/**
 * The type of demographic income ranges (for example, between 0% to 50%).
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.IncomeRangeTypeEnum.IncomeRangeType
 */
export enum IncomeRangeTypeEnum_IncomeRangeType {
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
     * 0%-50%.
     *
     * @generated from protobuf enum value: INCOME_RANGE_0_50 = 510001;
     */
    INCOME_RANGE_0_50 = 510001,
    /**
     * 50% to 60%.
     *
     * @generated from protobuf enum value: INCOME_RANGE_50_60 = 510002;
     */
    INCOME_RANGE_50_60 = 510002,
    /**
     * 60% to 70%.
     *
     * @generated from protobuf enum value: INCOME_RANGE_60_70 = 510003;
     */
    INCOME_RANGE_60_70 = 510003,
    /**
     * 70% to 80%.
     *
     * @generated from protobuf enum value: INCOME_RANGE_70_80 = 510004;
     */
    INCOME_RANGE_70_80 = 510004,
    /**
     * 80% to 90%.
     *
     * @generated from protobuf enum value: INCOME_RANGE_80_90 = 510005;
     */
    INCOME_RANGE_80_90 = 510005,
    /**
     * Greater than 90%.
     *
     * @generated from protobuf enum value: INCOME_RANGE_90_UP = 510006;
     */
    INCOME_RANGE_90_UP = 510006,
    /**
     * Undetermined income range.
     *
     * @generated from protobuf enum value: INCOME_RANGE_UNDETERMINED = 510000;
     */
    INCOME_RANGE_UNDETERMINED = 510000
}
// @generated message type with reflection information, may provide speed optimized methods
class IncomeRangeTypeEnum$Type extends MessageType<IncomeRangeTypeEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.IncomeRangeTypeEnum", []);
    }
    create(value?: PartialMessage<IncomeRangeTypeEnum>): IncomeRangeTypeEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<IncomeRangeTypeEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: IncomeRangeTypeEnum): IncomeRangeTypeEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: IncomeRangeTypeEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.IncomeRangeTypeEnum
 */
export const IncomeRangeTypeEnum = new IncomeRangeTypeEnum$Type();
