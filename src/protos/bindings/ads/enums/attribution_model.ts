// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/attribution_model.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
 * Container for enum representing the attribution model that describes how to
 * distribute credit for a particular conversion across potentially many prior
 * interactions.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.AttributionModelEnum
 */
export interface AttributionModelEnum {
}
/**
 * The attribution model that describes how to distribute credit for a
 * particular conversion across potentially many prior interactions.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.AttributionModelEnum.AttributionModel
 */
export enum AttributionModelEnum_AttributionModel {
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
     * Uses external attribution.
     *
     * @generated from protobuf enum value: EXTERNAL = 100;
     */
    EXTERNAL = 100,
    /**
     * Attributes all credit for a conversion to its last click.
     *
     * @generated from protobuf enum value: GOOGLE_ADS_LAST_CLICK = 101;
     */
    GOOGLE_ADS_LAST_CLICK = 101,
    /**
     * Attributes all credit for a conversion to its first click using Google
     * Search attribution.
     *
     * @generated from protobuf enum value: GOOGLE_SEARCH_ATTRIBUTION_FIRST_CLICK = 102;
     */
    GOOGLE_SEARCH_ATTRIBUTION_FIRST_CLICK = 102,
    /**
     * Attributes credit for a conversion equally across all of its clicks using
     * Google Search attribution.
     *
     * @generated from protobuf enum value: GOOGLE_SEARCH_ATTRIBUTION_LINEAR = 103;
     */
    GOOGLE_SEARCH_ATTRIBUTION_LINEAR = 103,
    /**
     * Attributes exponentially more credit for a conversion to its more recent
     * clicks using Google Search attribution (half-life is 1 week).
     *
     * @generated from protobuf enum value: GOOGLE_SEARCH_ATTRIBUTION_TIME_DECAY = 104;
     */
    GOOGLE_SEARCH_ATTRIBUTION_TIME_DECAY = 104,
    /**
     * Attributes 40% of the credit for a conversion to its first and last
     * clicks. Remaining 20% is evenly distributed across all other clicks. This
     * uses Google Search attribution.
     *
     * @generated from protobuf enum value: GOOGLE_SEARCH_ATTRIBUTION_POSITION_BASED = 105;
     */
    GOOGLE_SEARCH_ATTRIBUTION_POSITION_BASED = 105,
    /**
     * Flexible model that uses machine learning to determine the appropriate
     * distribution of credit among clicks using Google Search attribution.
     *
     * @generated from protobuf enum value: GOOGLE_SEARCH_ATTRIBUTION_DATA_DRIVEN = 106;
     */
    GOOGLE_SEARCH_ATTRIBUTION_DATA_DRIVEN = 106
}
// @generated message type with reflection information, may provide speed optimized methods
class AttributionModelEnum$Type extends MessageType<AttributionModelEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.AttributionModelEnum", []);
    }
    create(value?: PartialMessage<AttributionModelEnum>): AttributionModelEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AttributionModelEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AttributionModelEnum): AttributionModelEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: AttributionModelEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.AttributionModelEnum
 */
export const AttributionModelEnum = new AttributionModelEnum$Type();
