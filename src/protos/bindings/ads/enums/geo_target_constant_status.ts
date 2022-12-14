// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/geo_target_constant_status.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
// Proto file describing geo target constant statuses.

/**
 * Container for describing the status of a geo target constant.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.GeoTargetConstantStatusEnum
 */
export interface GeoTargetConstantStatusEnum {
}
/**
 * The possible statuses of a geo target constant.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.GeoTargetConstantStatusEnum.GeoTargetConstantStatus
 */
export enum GeoTargetConstantStatusEnum_GeoTargetConstantStatus {
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
     * The geo target constant is valid.
     *
     * @generated from protobuf enum value: ENABLED = 2;
     */
    ENABLED = 2,
    /**
     * The geo target constant is obsolete and will be removed.
     *
     * @generated from protobuf enum value: REMOVAL_PLANNED = 3;
     */
    REMOVAL_PLANNED = 3
}
// @generated message type with reflection information, may provide speed optimized methods
class GeoTargetConstantStatusEnum$Type extends MessageType<GeoTargetConstantStatusEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.GeoTargetConstantStatusEnum", []);
    }
    create(value?: PartialMessage<GeoTargetConstantStatusEnum>): GeoTargetConstantStatusEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GeoTargetConstantStatusEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GeoTargetConstantStatusEnum): GeoTargetConstantStatusEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: GeoTargetConstantStatusEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.GeoTargetConstantStatusEnum
 */
export const GeoTargetConstantStatusEnum = new GeoTargetConstantStatusEnum$Type();
