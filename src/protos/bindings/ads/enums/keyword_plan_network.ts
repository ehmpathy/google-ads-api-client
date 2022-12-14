// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/keyword_plan_network.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
// Proto file describing Keyword Planner forecastable network types.

/**
 * Container for enumeration of keyword plan forecastable network types.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.KeywordPlanNetworkEnum
 */
export interface KeywordPlanNetworkEnum {
}
/**
 * Enumerates keyword plan forecastable network types.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.KeywordPlanNetworkEnum.KeywordPlanNetwork
 */
export enum KeywordPlanNetworkEnum_KeywordPlanNetwork {
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
     * Google Search.
     *
     * @generated from protobuf enum value: GOOGLE_SEARCH = 2;
     */
    GOOGLE_SEARCH = 2,
    /**
     * Google Search + Search partners.
     *
     * @generated from protobuf enum value: GOOGLE_SEARCH_AND_PARTNERS = 3;
     */
    GOOGLE_SEARCH_AND_PARTNERS = 3
}
// @generated message type with reflection information, may provide speed optimized methods
class KeywordPlanNetworkEnum$Type extends MessageType<KeywordPlanNetworkEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.KeywordPlanNetworkEnum", []);
    }
    create(value?: PartialMessage<KeywordPlanNetworkEnum>): KeywordPlanNetworkEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<KeywordPlanNetworkEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: KeywordPlanNetworkEnum): KeywordPlanNetworkEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: KeywordPlanNetworkEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.KeywordPlanNetworkEnum
 */
export const KeywordPlanNetworkEnum = new KeywordPlanNetworkEnum$Type();
