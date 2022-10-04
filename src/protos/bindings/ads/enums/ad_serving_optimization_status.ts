// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/ad_serving_optimization_status.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
// Proto file describing ad serving statuses.

/**
 * Possible ad serving statuses of a campaign.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.AdServingOptimizationStatusEnum
 */
export interface AdServingOptimizationStatusEnum {
}
/**
 * Enum describing possible serving statuses.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.AdServingOptimizationStatusEnum.AdServingOptimizationStatus
 */
export enum AdServingOptimizationStatusEnum_AdServingOptimizationStatus {
    /**
     * No value has been specified.
     *
     * @generated from protobuf enum value: UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * The received value is not known in this version.
     *
     * This is a response-only value.
     *
     * @generated from protobuf enum value: UNKNOWN = 1;
     */
    UNKNOWN = 1,
    /**
     * Ad serving is optimized based on CTR for the campaign.
     *
     * @generated from protobuf enum value: OPTIMIZE = 2;
     */
    OPTIMIZE = 2,
    /**
     * Ad serving is optimized based on CTR * Conversion for the campaign. If
     * the campaign is not in the conversion optimizer bidding strategy, it will
     * default to OPTIMIZED.
     *
     * @generated from protobuf enum value: CONVERSION_OPTIMIZE = 3;
     */
    CONVERSION_OPTIMIZE = 3,
    /**
     * Ads are rotated evenly for 90 days, then optimized for clicks.
     *
     * @generated from protobuf enum value: ROTATE = 4;
     */
    ROTATE = 4,
    /**
     * Show lower performing ads more evenly with higher performing ads, and do
     * not optimize.
     *
     * @generated from protobuf enum value: ROTATE_INDEFINITELY = 5;
     */
    ROTATE_INDEFINITELY = 5,
    /**
     * Ad serving optimization status is not available.
     *
     * @generated from protobuf enum value: UNAVAILABLE = 6;
     */
    UNAVAILABLE = 6
}
// @generated message type with reflection information, may provide speed optimized methods
class AdServingOptimizationStatusEnum$Type extends MessageType<AdServingOptimizationStatusEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.AdServingOptimizationStatusEnum", []);
    }
    create(value?: PartialMessage<AdServingOptimizationStatusEnum>): AdServingOptimizationStatusEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AdServingOptimizationStatusEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AdServingOptimizationStatusEnum): AdServingOptimizationStatusEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: AdServingOptimizationStatusEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.AdServingOptimizationStatusEnum
 */
export const AdServingOptimizationStatusEnum = new AdServingOptimizationStatusEnum$Type();
