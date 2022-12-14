// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/errors/geo_target_constant_suggestion_error.proto" (package "google.ads.googleads.v11.errors", syntax proto3)
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
 * Container for enum describing possible geo target constant suggestion errors.
 *
 * @generated from protobuf message google.ads.googleads.v11.errors.GeoTargetConstantSuggestionErrorEnum
 */
export interface GeoTargetConstantSuggestionErrorEnum {
}
/**
 * Enum describing possible geo target constant suggestion errors.
 *
 * @generated from protobuf enum google.ads.googleads.v11.errors.GeoTargetConstantSuggestionErrorEnum.GeoTargetConstantSuggestionError
 */
export enum GeoTargetConstantSuggestionErrorEnum_GeoTargetConstantSuggestionError {
    /**
     * Enum unspecified.
     *
     * @generated from protobuf enum value: UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * The received error code is not known in this version.
     *
     * @generated from protobuf enum value: UNKNOWN = 1;
     */
    UNKNOWN = 1,
    /**
     * A location name cannot be greater than 300 characters.
     *
     * @generated from protobuf enum value: LOCATION_NAME_SIZE_LIMIT = 2;
     */
    LOCATION_NAME_SIZE_LIMIT = 2,
    /**
     * At most 25 location names can be specified in a SuggestGeoTargetConstants
     * method.
     *
     * @generated from protobuf enum value: LOCATION_NAME_LIMIT = 3;
     */
    LOCATION_NAME_LIMIT = 3,
    /**
     * The country code is invalid.
     *
     * @generated from protobuf enum value: INVALID_COUNTRY_CODE = 4;
     */
    INVALID_COUNTRY_CODE = 4,
    /**
     * Geo target constant resource names or location names must be provided in
     * the request.
     *
     * @generated from protobuf enum value: REQUEST_PARAMETERS_UNSET = 5;
     */
    REQUEST_PARAMETERS_UNSET = 5
}
// @generated message type with reflection information, may provide speed optimized methods
class GeoTargetConstantSuggestionErrorEnum$Type extends MessageType<GeoTargetConstantSuggestionErrorEnum> {
    constructor() {
        super("google.ads.googleads.v11.errors.GeoTargetConstantSuggestionErrorEnum", []);
    }
    create(value?: PartialMessage<GeoTargetConstantSuggestionErrorEnum>): GeoTargetConstantSuggestionErrorEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GeoTargetConstantSuggestionErrorEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GeoTargetConstantSuggestionErrorEnum): GeoTargetConstantSuggestionErrorEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: GeoTargetConstantSuggestionErrorEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.errors.GeoTargetConstantSuggestionErrorEnum
 */
export const GeoTargetConstantSuggestionErrorEnum = new GeoTargetConstantSuggestionErrorEnum$Type();
