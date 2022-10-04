// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/performance_max_upgrade_status.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
// Proto file describing advertising channel types

/**
 * Performance Max Upgrade status for campaign.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.PerformanceMaxUpgradeStatusEnum
 */
export interface PerformanceMaxUpgradeStatusEnum {
}
/**
 * Performance Max Upgrade status enum for campaign.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.PerformanceMaxUpgradeStatusEnum.PerformanceMaxUpgradeStatus
 */
export enum PerformanceMaxUpgradeStatusEnum_PerformanceMaxUpgradeStatus {
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
     * The campaign is eligible for upgrade to a Performance Max campaign.
     *
     * @generated from protobuf enum value: UPGRADE_ELIBIGLE = 2;
     */
    UPGRADE_ELIBIGLE = 2,
    /**
     * The upgrade to a Performance Max campaign is in progress.
     *
     * @generated from protobuf enum value: UPGRADE_IN_PROGRESS = 3;
     */
    UPGRADE_IN_PROGRESS = 3,
    /**
     * The upgrade to a Performance Max campaign is complete.
     *
     * @generated from protobuf enum value: UPGRADE_COMPLETE = 4;
     */
    UPGRADE_COMPLETE = 4,
    /**
     * The upgrade to a Performance Max campaign failed.
     * The campaign will still serve as it was before upgrade was attempted.
     *
     * @generated from protobuf enum value: UPGRADE_FAILED = 5;
     */
    UPGRADE_FAILED = 5
}
// @generated message type with reflection information, may provide speed optimized methods
class PerformanceMaxUpgradeStatusEnum$Type extends MessageType<PerformanceMaxUpgradeStatusEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.PerformanceMaxUpgradeStatusEnum", []);
    }
    create(value?: PartialMessage<PerformanceMaxUpgradeStatusEnum>): PerformanceMaxUpgradeStatusEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<PerformanceMaxUpgradeStatusEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PerformanceMaxUpgradeStatusEnum): PerformanceMaxUpgradeStatusEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: PerformanceMaxUpgradeStatusEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.PerformanceMaxUpgradeStatusEnum
 */
export const PerformanceMaxUpgradeStatusEnum = new PerformanceMaxUpgradeStatusEnum$Type();