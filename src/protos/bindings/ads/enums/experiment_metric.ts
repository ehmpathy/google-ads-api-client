// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/experiment_metric.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
// Proto file describing experiment metric.

/**
 * Container for enum describing the type of experiment metric.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.ExperimentMetricEnum
 */
export interface ExperimentMetricEnum {
}
/**
 * The type of experiment metric.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.ExperimentMetricEnum.ExperimentMetric
 */
export enum ExperimentMetricEnum_ExperimentMetric {
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
     * The goal of the experiment is clicks.
     *
     * @generated from protobuf enum value: CLICKS = 2;
     */
    CLICKS = 2,
    /**
     * The goal of the experiment is impressions.
     *
     * @generated from protobuf enum value: IMPRESSIONS = 3;
     */
    IMPRESSIONS = 3,
    /**
     * The goal of the experiment is cost.
     *
     * @generated from protobuf enum value: COST = 4;
     */
    COST = 4,
    /**
     * The goal of the experiment is conversion rate.
     *
     * @generated from protobuf enum value: CONVERSIONS_PER_INTERACTION_RATE = 5;
     */
    CONVERSIONS_PER_INTERACTION_RATE = 5,
    /**
     * The goal of the experiment is cost per conversion.
     *
     * @generated from protobuf enum value: COST_PER_CONVERSION = 6;
     */
    COST_PER_CONVERSION = 6,
    /**
     * The goal of the experiment is conversion value per cost.
     *
     * @generated from protobuf enum value: CONVERSIONS_VALUE_PER_COST = 7;
     */
    CONVERSIONS_VALUE_PER_COST = 7,
    /**
     * The goal of the experiment is avg cpc.
     *
     * @generated from protobuf enum value: AVERAGE_CPC = 8;
     */
    AVERAGE_CPC = 8,
    /**
     * The goal of the experiment is ctr.
     *
     * @generated from protobuf enum value: CTR = 9;
     */
    CTR = 9,
    /**
     * The goal of the experiment is incremental conversions.
     *
     * @generated from protobuf enum value: INCREMENTAL_CONVERSIONS = 10;
     */
    INCREMENTAL_CONVERSIONS = 10,
    /**
     * The goal of the experiment is completed video views.
     *
     * @generated from protobuf enum value: COMPLETED_VIDEO_VIEWS = 11;
     */
    COMPLETED_VIDEO_VIEWS = 11,
    /**
     * The goal of the experiment is custom algorithms.
     *
     * @generated from protobuf enum value: CUSTOM_ALGORITHMS = 12;
     */
    CUSTOM_ALGORITHMS = 12,
    /**
     * The goal of the experiment is conversions.
     *
     * @generated from protobuf enum value: CONVERSIONS = 13;
     */
    CONVERSIONS = 13,
    /**
     * The goal of the experiment is conversion value.
     *
     * @generated from protobuf enum value: CONVERSION_VALUE = 14;
     */
    CONVERSION_VALUE = 14
}
// @generated message type with reflection information, may provide speed optimized methods
class ExperimentMetricEnum$Type extends MessageType<ExperimentMetricEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.ExperimentMetricEnum", []);
    }
    create(value?: PartialMessage<ExperimentMetricEnum>): ExperimentMetricEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ExperimentMetricEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ExperimentMetricEnum): ExperimentMetricEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: ExperimentMetricEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.ExperimentMetricEnum
 */
export const ExperimentMetricEnum = new ExperimentMetricEnum$Type();
