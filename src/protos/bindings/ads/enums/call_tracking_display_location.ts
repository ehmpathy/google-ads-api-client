// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/call_tracking_display_location.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
// Proto file describing call tracking display location.

/**
 * Container for enum describing possible call tracking display locations.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.CallTrackingDisplayLocationEnum
 */
export interface CallTrackingDisplayLocationEnum {
}
/**
 * Possible call tracking display locations.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.CallTrackingDisplayLocationEnum.CallTrackingDisplayLocation
 */
export enum CallTrackingDisplayLocationEnum_CallTrackingDisplayLocation {
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
     * The phone call placed from the ad.
     *
     * @generated from protobuf enum value: AD = 2;
     */
    AD = 2,
    /**
     * The phone call placed from the landing page ad points to.
     *
     * @generated from protobuf enum value: LANDING_PAGE = 3;
     */
    LANDING_PAGE = 3
}
// @generated message type with reflection information, may provide speed optimized methods
class CallTrackingDisplayLocationEnum$Type extends MessageType<CallTrackingDisplayLocationEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.CallTrackingDisplayLocationEnum", []);
    }
    create(value?: PartialMessage<CallTrackingDisplayLocationEnum>): CallTrackingDisplayLocationEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CallTrackingDisplayLocationEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CallTrackingDisplayLocationEnum): CallTrackingDisplayLocationEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: CallTrackingDisplayLocationEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.CallTrackingDisplayLocationEnum
 */
export const CallTrackingDisplayLocationEnum = new CallTrackingDisplayLocationEnum$Type();
