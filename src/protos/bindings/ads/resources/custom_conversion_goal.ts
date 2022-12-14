// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/resources/custom_conversion_goal.proto" (package "google.ads.googleads.v11.resources", syntax proto3)
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
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { CustomConversionGoalStatusEnum_CustomConversionGoalStatus } from "../enums/custom_conversion_goal_status";
/**
 * Custom conversion goal that can make arbitrary conversion actions biddable.
 *
 * @generated from protobuf message google.ads.googleads.v11.resources.CustomConversionGoal
 */
export interface CustomConversionGoal {
    /**
     * Immutable. The resource name of the custom conversion goal.
     * Custom conversion goal resource names have the form:
     *
     * `customers/{customer_id}/customConversionGoals/{goal_id}`
     *
     * @generated from protobuf field: string resource_name = 1;
     */
    resourceName: string;
    /**
     * Immutable. The ID for this custom conversion goal.
     *
     * @generated from protobuf field: int64 id = 2;
     */
    id: bigint;
    /**
     * The name for this custom conversion goal.
     *
     * @generated from protobuf field: string name = 3;
     */
    name: string;
    /**
     * Conversion actions that the custom conversion goal makes biddable.
     *
     * @generated from protobuf field: repeated string conversion_actions = 4;
     */
    conversionActions: string[];
    /**
     * The status of the custom conversion goal.
     *
     * @generated from protobuf field: google.ads.googleads.v11.enums.CustomConversionGoalStatusEnum.CustomConversionGoalStatus status = 5;
     */
    status: CustomConversionGoalStatusEnum_CustomConversionGoalStatus;
}
// @generated message type with reflection information, may provide speed optimized methods
class CustomConversionGoal$Type extends MessageType<CustomConversionGoal> {
    constructor() {
        super("google.ads.googleads.v11.resources.CustomConversionGoal", [
            { no: 1, name: "resource_name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["IMMUTABLE"], "google.api.resource_reference": { type: "googleads.googleapis.com/CustomConversionGoal" } } },
            { no: 2, name: "id", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/, options: { "google.api.field_behavior": ["IMMUTABLE"] } },
            { no: 3, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "conversion_actions", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/, options: { "google.api.resource_reference": { type: "googleads.googleapis.com/ConversionAction" } } },
            { no: 5, name: "status", kind: "enum", T: () => ["google.ads.googleads.v11.enums.CustomConversionGoalStatusEnum.CustomConversionGoalStatus", CustomConversionGoalStatusEnum_CustomConversionGoalStatus] }
        ], { "google.api.resource": { type: "googleads.googleapis.com/CustomConversionGoal", pattern: ["customers/{customer_id}/customConversionGoals/{goal_id}"] } });
    }
    create(value?: PartialMessage<CustomConversionGoal>): CustomConversionGoal {
        const message = { resourceName: "", id: 0n, name: "", conversionActions: [], status: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CustomConversionGoal>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CustomConversionGoal): CustomConversionGoal {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string resource_name */ 1:
                    message.resourceName = reader.string();
                    break;
                case /* int64 id */ 2:
                    message.id = reader.int64().toBigInt();
                    break;
                case /* string name */ 3:
                    message.name = reader.string();
                    break;
                case /* repeated string conversion_actions */ 4:
                    message.conversionActions.push(reader.string());
                    break;
                case /* google.ads.googleads.v11.enums.CustomConversionGoalStatusEnum.CustomConversionGoalStatus status */ 5:
                    message.status = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: CustomConversionGoal, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string resource_name = 1; */
        if (message.resourceName !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.resourceName);
        /* int64 id = 2; */
        if (message.id !== 0n)
            writer.tag(2, WireType.Varint).int64(message.id);
        /* string name = 3; */
        if (message.name !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.name);
        /* repeated string conversion_actions = 4; */
        for (let i = 0; i < message.conversionActions.length; i++)
            writer.tag(4, WireType.LengthDelimited).string(message.conversionActions[i]);
        /* google.ads.googleads.v11.enums.CustomConversionGoalStatusEnum.CustomConversionGoalStatus status = 5; */
        if (message.status !== 0)
            writer.tag(5, WireType.Varint).int32(message.status);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.resources.CustomConversionGoal
 */
export const CustomConversionGoal = new CustomConversionGoal$Type();
