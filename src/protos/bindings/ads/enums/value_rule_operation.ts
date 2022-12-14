// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/value_rule_operation.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
// Proto file describing conversion value rule operation.

/**
 * Container for enum describing possible operations for value rules which are
 * executed when rules are triggered.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.ValueRuleOperationEnum
 */
export interface ValueRuleOperationEnum {
}
/**
 * Possible operations of the action of a conversion value rule.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.ValueRuleOperationEnum.ValueRuleOperation
 */
export enum ValueRuleOperationEnum_ValueRuleOperation {
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
     * Add provided value to conversion value.
     *
     * @generated from protobuf enum value: ADD = 2;
     */
    ADD = 2,
    /**
     * Multiply conversion value by provided value.
     *
     * @generated from protobuf enum value: MULTIPLY = 3;
     */
    MULTIPLY = 3,
    /**
     * Set conversion value to provided value.
     *
     * @generated from protobuf enum value: SET = 4;
     */
    SET = 4
}
// @generated message type with reflection information, may provide speed optimized methods
class ValueRuleOperationEnum$Type extends MessageType<ValueRuleOperationEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.ValueRuleOperationEnum", []);
    }
    create(value?: PartialMessage<ValueRuleOperationEnum>): ValueRuleOperationEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ValueRuleOperationEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ValueRuleOperationEnum): ValueRuleOperationEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: ValueRuleOperationEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.ValueRuleOperationEnum
 */
export const ValueRuleOperationEnum = new ValueRuleOperationEnum$Type();
