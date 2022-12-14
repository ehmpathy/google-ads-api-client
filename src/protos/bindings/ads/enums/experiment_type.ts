// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/experiment_type.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
// Proto file describing experiment type.

/**
 * Container for enum describing the type of experiment.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.ExperimentTypeEnum
 */
export interface ExperimentTypeEnum {
}
/**
 * The type of the experiment.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.ExperimentTypeEnum.ExperimentType
 */
export enum ExperimentTypeEnum_ExperimentType {
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
     * This is a DISPLAY_AND_VIDEO_360 experiment.
     *
     * @generated from protobuf enum value: DISPLAY_AND_VIDEO_360 = 2;
     */
    DISPLAY_AND_VIDEO_360 = 2,
    /**
     * This is an ad variation experiment.
     *
     * @generated from protobuf enum value: AD_VARIATION = 3;
     */
    AD_VARIATION = 3,
    /**
     * A custom experiment consisting of Video campaigns.
     *
     * @generated from protobuf enum value: YOUTUBE_CUSTOM = 5;
     */
    YOUTUBE_CUSTOM = 5,
    /**
     * A custom experiment consisting of display campaigns.
     *
     * @generated from protobuf enum value: DISPLAY_CUSTOM = 6;
     */
    DISPLAY_CUSTOM = 6,
    /**
     * A custom experiment consisting of search campaigns.
     *
     * @generated from protobuf enum value: SEARCH_CUSTOM = 7;
     */
    SEARCH_CUSTOM = 7,
    /**
     * An experiment that compares bidding strategies for display campaigns.
     *
     * @generated from protobuf enum value: DISPLAY_AUTOMATED_BIDDING_STRATEGY = 8;
     */
    DISPLAY_AUTOMATED_BIDDING_STRATEGY = 8,
    /**
     * An experiment that compares bidding strategies for search campaigns."
     *
     * @generated from protobuf enum value: SEARCH_AUTOMATED_BIDDING_STRATEGY = 9;
     */
    SEARCH_AUTOMATED_BIDDING_STRATEGY = 9,
    /**
     * An experiment that compares bidding strategies for shopping campaigns.
     *
     * @generated from protobuf enum value: SHOPPING_AUTOMATED_BIDDING_STRATEGY = 10;
     */
    SHOPPING_AUTOMATED_BIDDING_STRATEGY = 10,
    /**
     * DEPRECATED. A smart matching experiment with search campaigns.
     *
     * @generated from protobuf enum value: SMART_MATCHING = 11;
     */
    SMART_MATCHING = 11,
    /**
     * A custom experiment consisting of hotel campaigns.
     *
     * @generated from protobuf enum value: HOTEL_CUSTOM = 12;
     */
    HOTEL_CUSTOM = 12
}
// @generated message type with reflection information, may provide speed optimized methods
class ExperimentTypeEnum$Type extends MessageType<ExperimentTypeEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.ExperimentTypeEnum", []);
    }
    create(value?: PartialMessage<ExperimentTypeEnum>): ExperimentTypeEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ExperimentTypeEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ExperimentTypeEnum): ExperimentTypeEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: ExperimentTypeEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.ExperimentTypeEnum
 */
export const ExperimentTypeEnum = new ExperimentTypeEnum$Type();
