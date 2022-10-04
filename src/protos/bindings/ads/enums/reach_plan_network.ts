// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/reach_plan_network.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
// Proto file describing a plannable network.

/**
 * Container for enum describing plannable networks.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.ReachPlanNetworkEnum
 */
export interface ReachPlanNetworkEnum {
}
/**
 * Possible plannable network values.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.ReachPlanNetworkEnum.ReachPlanNetwork
 */
export enum ReachPlanNetworkEnum_ReachPlanNetwork {
    /**
     * Not specified.
     *
     * @generated from protobuf enum value: UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Used as a return value only. Represents value unknown in this version.
     *
     * @generated from protobuf enum value: UNKNOWN = 1;
     */
    UNKNOWN = 1,
    /**
     * YouTube network.
     *
     * @generated from protobuf enum value: YOUTUBE = 2;
     */
    YOUTUBE = 2,
    /**
     * Google Video Partners (GVP) network.
     *
     * @generated from protobuf enum value: GOOGLE_VIDEO_PARTNERS = 3;
     */
    GOOGLE_VIDEO_PARTNERS = 3,
    /**
     * A combination of the YouTube network and the Google Video Partners
     * network.
     *
     * @generated from protobuf enum value: YOUTUBE_AND_GOOGLE_VIDEO_PARTNERS = 4;
     */
    YOUTUBE_AND_GOOGLE_VIDEO_PARTNERS = 4
}
// @generated message type with reflection information, may provide speed optimized methods
class ReachPlanNetworkEnum$Type extends MessageType<ReachPlanNetworkEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.ReachPlanNetworkEnum", []);
    }
    create(value?: PartialMessage<ReachPlanNetworkEnum>): ReachPlanNetworkEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ReachPlanNetworkEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ReachPlanNetworkEnum): ReachPlanNetworkEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: ReachPlanNetworkEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.ReachPlanNetworkEnum
 */
export const ReachPlanNetworkEnum = new ReachPlanNetworkEnum$Type();