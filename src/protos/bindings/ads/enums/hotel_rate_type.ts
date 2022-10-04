// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/hotel_rate_type.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
// Proto file describing hotel rate types.

/**
 * Container for enum describing possible hotel rate types.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.HotelRateTypeEnum
 */
export interface HotelRateTypeEnum {
}
/**
 * Enum describing possible hotel rate types.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.HotelRateTypeEnum.HotelRateType
 */
export enum HotelRateTypeEnum_HotelRateType {
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
     * Rate type information is unavailable.
     *
     * @generated from protobuf enum value: UNAVAILABLE = 2;
     */
    UNAVAILABLE = 2,
    /**
     * Rates available to everyone.
     *
     * @generated from protobuf enum value: PUBLIC_RATE = 3;
     */
    PUBLIC_RATE = 3,
    /**
     * A membership program rate is available and satisfies basic requirements
     * like having a public rate available. UI treatment will strikethrough the
     * public rate and indicate that a discount is available to the user. For
     * more on Qualified Rates, visit
     * https://developers.google.com/hotels/hotel-ads/dev-guide/qualified-rates
     *
     * @generated from protobuf enum value: QUALIFIED_RATE = 4;
     */
    QUALIFIED_RATE = 4,
    /**
     * Rates available to users that satisfy some eligibility criteria, for
     * example, all signed-in users, 20% of mobile users, all mobile users in
     * Canada, etc.
     *
     * @generated from protobuf enum value: PRIVATE_RATE = 5;
     */
    PRIVATE_RATE = 5
}
// @generated message type with reflection information, may provide speed optimized methods
class HotelRateTypeEnum$Type extends MessageType<HotelRateTypeEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.HotelRateTypeEnum", []);
    }
    create(value?: PartialMessage<HotelRateTypeEnum>): HotelRateTypeEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<HotelRateTypeEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HotelRateTypeEnum): HotelRateTypeEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: HotelRateTypeEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.HotelRateTypeEnum
 */
export const HotelRateTypeEnum = new HotelRateTypeEnum$Type();