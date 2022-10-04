// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/slot.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
// Proto file describing slots.

/**
 * Container for enumeration of possible positions of the Ad.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.SlotEnum
 */
export interface SlotEnum {
}
/**
 * Enumerates possible positions of the Ad.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.SlotEnum.Slot
 */
export enum SlotEnum_Slot {
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
     * Google search: Side.
     *
     * @generated from protobuf enum value: SEARCH_SIDE = 2;
     */
    SEARCH_SIDE = 2,
    /**
     * Google search: Top.
     *
     * @generated from protobuf enum value: SEARCH_TOP = 3;
     */
    SEARCH_TOP = 3,
    /**
     * Google search: Other.
     *
     * @generated from protobuf enum value: SEARCH_OTHER = 4;
     */
    SEARCH_OTHER = 4,
    /**
     * Google Display Network.
     *
     * @generated from protobuf enum value: CONTENT = 5;
     */
    CONTENT = 5,
    /**
     * Search partners: Top.
     *
     * @generated from protobuf enum value: SEARCH_PARTNER_TOP = 6;
     */
    SEARCH_PARTNER_TOP = 6,
    /**
     * Search partners: Other.
     *
     * @generated from protobuf enum value: SEARCH_PARTNER_OTHER = 7;
     */
    SEARCH_PARTNER_OTHER = 7,
    /**
     * Cross-network.
     *
     * @generated from protobuf enum value: MIXED = 8;
     */
    MIXED = 8
}
// @generated message type with reflection information, may provide speed optimized methods
class SlotEnum$Type extends MessageType<SlotEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.SlotEnum", []);
    }
    create(value?: PartialMessage<SlotEnum>): SlotEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SlotEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SlotEnum): SlotEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: SlotEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.SlotEnum
 */
export const SlotEnum = new SlotEnum$Type();
