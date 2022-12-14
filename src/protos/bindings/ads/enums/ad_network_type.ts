// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/ad_network_type.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
// Proto file describing ad network types.

/**
 * Container for enumeration of Google Ads network types.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.AdNetworkTypeEnum
 */
export interface AdNetworkTypeEnum {
}
/**
 * Enumerates Google Ads network types.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.AdNetworkTypeEnum.AdNetworkType
 */
export enum AdNetworkTypeEnum_AdNetworkType {
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
     * Google search.
     *
     * @generated from protobuf enum value: SEARCH = 2;
     */
    SEARCH = 2,
    /**
     * Search partners.
     *
     * @generated from protobuf enum value: SEARCH_PARTNERS = 3;
     */
    SEARCH_PARTNERS = 3,
    /**
     * Display Network.
     *
     * @generated from protobuf enum value: CONTENT = 4;
     */
    CONTENT = 4,
    /**
     * YouTube Search.
     *
     * @generated from protobuf enum value: YOUTUBE_SEARCH = 5;
     */
    YOUTUBE_SEARCH = 5,
    /**
     * YouTube Videos
     *
     * @generated from protobuf enum value: YOUTUBE_WATCH = 6;
     */
    YOUTUBE_WATCH = 6,
    /**
     * Cross-network.
     *
     * @generated from protobuf enum value: MIXED = 7;
     */
    MIXED = 7
}
// @generated message type with reflection information, may provide speed optimized methods
class AdNetworkTypeEnum$Type extends MessageType<AdNetworkTypeEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.AdNetworkTypeEnum", []);
    }
    create(value?: PartialMessage<AdNetworkTypeEnum>): AdNetworkTypeEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AdNetworkTypeEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AdNetworkTypeEnum): AdNetworkTypeEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: AdNetworkTypeEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.AdNetworkTypeEnum
 */
export const AdNetworkTypeEnum = new AdNetworkTypeEnum$Type();
