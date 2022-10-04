// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/value_rule_set_dimension.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
// Proto file describing conversion value rule set dimension.

/**
 * Container for enum describing possible dimensions of a conversion value rule
 * set.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.ValueRuleSetDimensionEnum
 */
export interface ValueRuleSetDimensionEnum {
}
/**
 * Possible dimensions of a conversion value rule set.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.ValueRuleSetDimensionEnum.ValueRuleSetDimension
 */
export enum ValueRuleSetDimensionEnum_ValueRuleSetDimension {
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
     * Dimension for geo location.
     *
     * @generated from protobuf enum value: GEO_LOCATION = 2;
     */
    GEO_LOCATION = 2,
    /**
     * Dimension for device type.
     *
     * @generated from protobuf enum value: DEVICE = 3;
     */
    DEVICE = 3,
    /**
     * Dimension for audience.
     *
     * @generated from protobuf enum value: AUDIENCE = 4;
     */
    AUDIENCE = 4,
    /**
     * This dimension implies the rule will always apply.
     *
     * @generated from protobuf enum value: NO_CONDITION = 5;
     */
    NO_CONDITION = 5
}
// @generated message type with reflection information, may provide speed optimized methods
class ValueRuleSetDimensionEnum$Type extends MessageType<ValueRuleSetDimensionEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.ValueRuleSetDimensionEnum", []);
    }
    create(value?: PartialMessage<ValueRuleSetDimensionEnum>): ValueRuleSetDimensionEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ValueRuleSetDimensionEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ValueRuleSetDimensionEnum): ValueRuleSetDimensionEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: ValueRuleSetDimensionEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.ValueRuleSetDimensionEnum
 */
export const ValueRuleSetDimensionEnum = new ValueRuleSetDimensionEnum$Type();