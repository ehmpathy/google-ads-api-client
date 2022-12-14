// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/experiment_metric_direction.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
// Proto file describing experiment metric direction.

/**
 * Container for enum describing the type of experiment metric direction.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.ExperimentMetricDirectionEnum
 */
export interface ExperimentMetricDirectionEnum {
}
/**
 * The type of experiment metric direction.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.ExperimentMetricDirectionEnum.ExperimentMetricDirection
 */
export enum ExperimentMetricDirectionEnum_ExperimentMetricDirection {
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
     * The goal of the experiment is to not change the metric.
     *
     * @generated from protobuf enum value: NO_CHANGE = 2;
     */
    NO_CHANGE = 2,
    /**
     * The goal of the experiment is to increate the metric.
     *
     * @generated from protobuf enum value: INCREASE = 3;
     */
    INCREASE = 3,
    /**
     * The goal of the experiment is to decrease the metric.
     *
     * @generated from protobuf enum value: DECREASE = 4;
     */
    DECREASE = 4,
    /**
     * The goal of the experiment is to either not change or increase the
     * metric.
     *
     * @generated from protobuf enum value: NO_CHANGE_OR_INCREASE = 5;
     */
    NO_CHANGE_OR_INCREASE = 5,
    /**
     * The goal of the experiment is to either not change or decrease the
     * metric.
     *
     * @generated from protobuf enum value: NO_CHANGE_OR_DECREASE = 6;
     */
    NO_CHANGE_OR_DECREASE = 6
}
// @generated message type with reflection information, may provide speed optimized methods
class ExperimentMetricDirectionEnum$Type extends MessageType<ExperimentMetricDirectionEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.ExperimentMetricDirectionEnum", []);
    }
    create(value?: PartialMessage<ExperimentMetricDirectionEnum>): ExperimentMetricDirectionEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ExperimentMetricDirectionEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ExperimentMetricDirectionEnum): ExperimentMetricDirectionEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: ExperimentMetricDirectionEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.ExperimentMetricDirectionEnum
 */
export const ExperimentMetricDirectionEnum = new ExperimentMetricDirectionEnum$Type();
