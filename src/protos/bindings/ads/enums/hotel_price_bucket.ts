// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/hotel_price_bucket.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
// Proto file describing hotel price buckets.

/**
 * Container for enum describing hotel price bucket for a hotel itinerary.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.HotelPriceBucketEnum
 */
export interface HotelPriceBucketEnum {
}
/**
 * Enum describing possible hotel price buckets.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.HotelPriceBucketEnum.HotelPriceBucket
 */
export enum HotelPriceBucketEnum_HotelPriceBucket {
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
     * Uniquely lowest price. Partner has the lowest price, and no other
     * partners are within a small variance of that price.
     *
     * @generated from protobuf enum value: LOWEST_UNIQUE = 2;
     */
    LOWEST_UNIQUE = 2,
    /**
     * Tied for lowest price. Partner is within a small variance of the lowest
     * price.
     *
     * @generated from protobuf enum value: LOWEST_TIED = 3;
     */
    LOWEST_TIED = 3,
    /**
     * Not lowest price. Partner is not within a small variance of the lowest
     * price.
     *
     * @generated from protobuf enum value: NOT_LOWEST = 4;
     */
    NOT_LOWEST = 4,
    /**
     * Partner was the only one shown.
     *
     * @generated from protobuf enum value: ONLY_PARTNER_SHOWN = 5;
     */
    ONLY_PARTNER_SHOWN = 5
}
// @generated message type with reflection information, may provide speed optimized methods
class HotelPriceBucketEnum$Type extends MessageType<HotelPriceBucketEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.HotelPriceBucketEnum", []);
    }
    create(value?: PartialMessage<HotelPriceBucketEnum>): HotelPriceBucketEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<HotelPriceBucketEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HotelPriceBucketEnum): HotelPriceBucketEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: HotelPriceBucketEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.HotelPriceBucketEnum
 */
export const HotelPriceBucketEnum = new HotelPriceBucketEnum$Type();