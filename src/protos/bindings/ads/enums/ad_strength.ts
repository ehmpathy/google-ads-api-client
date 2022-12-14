// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/ad_strength.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
// Proto file describing ad strengths.

/**
 * Container for enum describing possible ad strengths.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.AdStrengthEnum
 */
export interface AdStrengthEnum {
}
/**
 * Enum listing the possible ad strengths.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.AdStrengthEnum.AdStrength
 */
export enum AdStrengthEnum_AdStrength {
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
     * The ad strength is currently pending.
     *
     * @generated from protobuf enum value: PENDING = 2;
     */
    PENDING = 2,
    /**
     * No ads could be generated.
     *
     * @generated from protobuf enum value: NO_ADS = 3;
     */
    NO_ADS = 3,
    /**
     * Poor strength.
     *
     * @generated from protobuf enum value: POOR = 4;
     */
    POOR = 4,
    /**
     * Average strength.
     *
     * @generated from protobuf enum value: AVERAGE = 5;
     */
    AVERAGE = 5,
    /**
     * Good strength.
     *
     * @generated from protobuf enum value: GOOD = 6;
     */
    GOOD = 6,
    /**
     * Excellent strength.
     *
     * @generated from protobuf enum value: EXCELLENT = 7;
     */
    EXCELLENT = 7
}
// @generated message type with reflection information, may provide speed optimized methods
class AdStrengthEnum$Type extends MessageType<AdStrengthEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.AdStrengthEnum", []);
    }
    create(value?: PartialMessage<AdStrengthEnum>): AdStrengthEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AdStrengthEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AdStrengthEnum): AdStrengthEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: AdStrengthEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.AdStrengthEnum
 */
export const AdStrengthEnum = new AdStrengthEnum$Type();
