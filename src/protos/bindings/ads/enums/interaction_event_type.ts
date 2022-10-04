// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/interaction_event_type.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
// Proto file describing types of payable and free interactions.

/**
 * Container for enum describing types of payable and free interactions.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.InteractionEventTypeEnum
 */
export interface InteractionEventTypeEnum {
}
/**
 * Enum describing possible types of payable and free interactions.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.InteractionEventTypeEnum.InteractionEventType
 */
export enum InteractionEventTypeEnum_InteractionEventType {
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
     * Click to site. In most cases, this interaction navigates to an external
     * location, usually the advertiser's landing page. This is also the default
     * InteractionEventType for click events.
     *
     * @generated from protobuf enum value: CLICK = 2;
     */
    CLICK = 2,
    /**
     * The user's expressed intent to engage with the ad in-place.
     *
     * @generated from protobuf enum value: ENGAGEMENT = 3;
     */
    ENGAGEMENT = 3,
    /**
     * User viewed a video ad.
     *
     * @generated from protobuf enum value: VIDEO_VIEW = 4;
     */
    VIDEO_VIEW = 4,
    /**
     * The default InteractionEventType for ad conversion events.
     * This is used when an ad conversion row does NOT indicate
     * that the free interactions (for example, the ad conversions)
     * should be 'promoted' and reported as part of the core metrics.
     * These are simply other (ad) conversions.
     *
     * @generated from protobuf enum value: NONE = 5;
     */
    NONE = 5
}
// @generated message type with reflection information, may provide speed optimized methods
class InteractionEventTypeEnum$Type extends MessageType<InteractionEventTypeEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.InteractionEventTypeEnum", []);
    }
    create(value?: PartialMessage<InteractionEventTypeEnum>): InteractionEventTypeEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<InteractionEventTypeEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: InteractionEventTypeEnum): InteractionEventTypeEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: InteractionEventTypeEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.InteractionEventTypeEnum
 */
export const InteractionEventTypeEnum = new InteractionEventTypeEnum$Type();
