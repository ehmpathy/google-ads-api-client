// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/targeting_dimension.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
// Proto file describing criteria types.

/**
 * The dimensions that can be targeted.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.TargetingDimensionEnum
 */
export interface TargetingDimensionEnum {
}
/**
 * Enum describing possible targeting dimensions.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.TargetingDimensionEnum.TargetingDimension
 */
export enum TargetingDimensionEnum_TargetingDimension {
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
     * Keyword criteria, for example, 'mars cruise'. KEYWORD may be used as a
     * custom bid dimension. Keywords are always a targeting dimension, so may
     * not be set as a target "ALL" dimension with TargetRestriction.
     *
     * @generated from protobuf enum value: KEYWORD = 2;
     */
    KEYWORD = 2,
    /**
     * Audience criteria, which include user list, user interest, custom
     * affinity,  and custom in market.
     *
     * @generated from protobuf enum value: AUDIENCE = 3;
     */
    AUDIENCE = 3,
    /**
     * Topic criteria for targeting categories of content, for example,
     * 'category::Animals>Pets' Used for Display and Video targeting.
     *
     * @generated from protobuf enum value: TOPIC = 4;
     */
    TOPIC = 4,
    /**
     * Criteria for targeting gender.
     *
     * @generated from protobuf enum value: GENDER = 5;
     */
    GENDER = 5,
    /**
     * Criteria for targeting age ranges.
     *
     * @generated from protobuf enum value: AGE_RANGE = 6;
     */
    AGE_RANGE = 6,
    /**
     * Placement criteria, which include websites like 'www.flowers4sale.com',
     * as well as mobile applications, mobile app categories, YouTube videos,
     * and YouTube channels.
     *
     * @generated from protobuf enum value: PLACEMENT = 7;
     */
    PLACEMENT = 7,
    /**
     * Criteria for parental status targeting.
     *
     * @generated from protobuf enum value: PARENTAL_STATUS = 8;
     */
    PARENTAL_STATUS = 8,
    /**
     * Criteria for income range targeting.
     *
     * @generated from protobuf enum value: INCOME_RANGE = 9;
     */
    INCOME_RANGE = 9
}
// @generated message type with reflection information, may provide speed optimized methods
class TargetingDimensionEnum$Type extends MessageType<TargetingDimensionEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.TargetingDimensionEnum", []);
    }
    create(value?: PartialMessage<TargetingDimensionEnum>): TargetingDimensionEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<TargetingDimensionEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TargetingDimensionEnum): TargetingDimensionEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: TargetingDimensionEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.TargetingDimensionEnum
 */
export const TargetingDimensionEnum = new TargetingDimensionEnum$Type();
