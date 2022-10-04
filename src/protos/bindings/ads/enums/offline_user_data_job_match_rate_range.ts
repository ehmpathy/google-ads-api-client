// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/offline_user_data_job_match_rate_range.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
/**
 * Container for enum describing reasons match rate ranges for a customer match
 * list upload.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.OfflineUserDataJobMatchRateRangeEnum
 */
export interface OfflineUserDataJobMatchRateRangeEnum {
}
/**
 * The match rate range of an offline user data job.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.OfflineUserDataJobMatchRateRangeEnum.OfflineUserDataJobMatchRateRange
 */
export enum OfflineUserDataJobMatchRateRangeEnum_OfflineUserDataJobMatchRateRange {
    /**
     * Not specified.
     *
     * @generated from protobuf enum value: UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Default value for match rate range.
     *
     * @generated from protobuf enum value: UNKNOWN = 1;
     */
    UNKNOWN = 1,
    /**
     * Match rate range for offline data upload entity is between 0% and 19%.
     *
     * @generated from protobuf enum value: MATCH_RANGE_LESS_THAN_20 = 2;
     */
    MATCH_RANGE_LESS_THAN_20 = 2,
    /**
     * Match rate range for offline data upload entity is between 20% and 30%.
     *
     * @generated from protobuf enum value: MATCH_RANGE_20_TO_30 = 3;
     */
    MATCH_RANGE_20_TO_30 = 3,
    /**
     * Match rate range for offline data upload entity is between 31% and 40%.
     *
     * @generated from protobuf enum value: MATCH_RANGE_31_TO_40 = 4;
     */
    MATCH_RANGE_31_TO_40 = 4,
    /**
     * Match rate range for offline data upload entity is between 41% and 50%.
     *
     * @generated from protobuf enum value: MATCH_RANGE_41_TO_50 = 5;
     */
    MATCH_RANGE_41_TO_50 = 5,
    /**
     * Match rate range for offline data upload entity is between 51% and 60%.
     *
     * @generated from protobuf enum value: MATCH_RANGE_51_TO_60 = 6;
     */
    MATCH_RANGE_51_TO_60 = 6,
    /**
     * Match rate range for offline data upload entity is between 61% and 70%.
     *
     * @generated from protobuf enum value: MATCH_RANGE_61_TO_70 = 7;
     */
    MATCH_RANGE_61_TO_70 = 7,
    /**
     * Match rate range for offline data upload entity is between 71% and 80%.
     *
     * @generated from protobuf enum value: MATCH_RANGE_71_TO_80 = 8;
     */
    MATCH_RANGE_71_TO_80 = 8,
    /**
     * Match rate range for offline data upload entity is between 81% and 90%.
     *
     * @generated from protobuf enum value: MATCH_RANGE_81_TO_90 = 9;
     */
    MATCH_RANGE_81_TO_90 = 9,
    /**
     * Match rate range for offline data upload entity more than or equal to
     * 91%.
     *
     * @generated from protobuf enum value: MATCH_RANGE_91_TO_100 = 10;
     */
    MATCH_RANGE_91_TO_100 = 10
}
// @generated message type with reflection information, may provide speed optimized methods
class OfflineUserDataJobMatchRateRangeEnum$Type extends MessageType<OfflineUserDataJobMatchRateRangeEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.OfflineUserDataJobMatchRateRangeEnum", []);
    }
    create(value?: PartialMessage<OfflineUserDataJobMatchRateRangeEnum>): OfflineUserDataJobMatchRateRangeEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<OfflineUserDataJobMatchRateRangeEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: OfflineUserDataJobMatchRateRangeEnum): OfflineUserDataJobMatchRateRangeEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: OfflineUserDataJobMatchRateRangeEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.OfflineUserDataJobMatchRateRangeEnum
 */
export const OfflineUserDataJobMatchRateRangeEnum = new OfflineUserDataJobMatchRateRangeEnum$Type();