// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/asset_performance_label.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
// Proto file describing the performance label of an asset.

/**
 * Container for enum describing the performance label of an asset.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.AssetPerformanceLabelEnum
 */
export interface AssetPerformanceLabelEnum {
}
/**
 * Enum describing the possible performance labels of an asset, usually
 * computed in the context of a linkage.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.AssetPerformanceLabelEnum.AssetPerformanceLabel
 */
export enum AssetPerformanceLabelEnum_AssetPerformanceLabel {
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
     * This asset does not yet have any performance informantion. This may be
     * because it is still under review.
     *
     * @generated from protobuf enum value: PENDING = 2;
     */
    PENDING = 2,
    /**
     * The asset has started getting impressions but the stats are not
     * statistically significant enough to get an asset performance label.
     *
     * @generated from protobuf enum value: LEARNING = 3;
     */
    LEARNING = 3,
    /**
     * Worst performing assets.
     *
     * @generated from protobuf enum value: LOW = 4;
     */
    LOW = 4,
    /**
     * Good performing assets.
     *
     * @generated from protobuf enum value: GOOD = 5;
     */
    GOOD = 5,
    /**
     * Best performing assets.
     *
     * @generated from protobuf enum value: BEST = 6;
     */
    BEST = 6
}
// @generated message type with reflection information, may provide speed optimized methods
class AssetPerformanceLabelEnum$Type extends MessageType<AssetPerformanceLabelEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.AssetPerformanceLabelEnum", []);
    }
    create(value?: PartialMessage<AssetPerformanceLabelEnum>): AssetPerformanceLabelEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AssetPerformanceLabelEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AssetPerformanceLabelEnum): AssetPerformanceLabelEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: AssetPerformanceLabelEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.AssetPerformanceLabelEnum
 */
export const AssetPerformanceLabelEnum = new AssetPerformanceLabelEnum$Type();
