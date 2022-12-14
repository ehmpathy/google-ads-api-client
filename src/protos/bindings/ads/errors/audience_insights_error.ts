// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/errors/audience_insights_error.proto" (package "google.ads.googleads.v11.errors", syntax proto3)
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
// Proto file describing errors generated from AudienceInsightsService.

/**
 * Container for enum describing possible errors returned from
 * the AudienceInsightsService.
 *
 * @generated from protobuf message google.ads.googleads.v11.errors.AudienceInsightsErrorEnum
 */
export interface AudienceInsightsErrorEnum {
}
/**
 * Enum describing possible errors from AudienceInsightsService.
 *
 * @generated from protobuf enum google.ads.googleads.v11.errors.AudienceInsightsErrorEnum.AudienceInsightsError
 */
export enum AudienceInsightsErrorEnum_AudienceInsightsError {
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
     * The dimensions cannot be used with topic audience combinations.
     *
     * @generated from protobuf enum value: DIMENSION_INCOMPATIBLE_WITH_TOPIC_AUDIENCE_COMBINATIONS = 2;
     */
    DIMENSION_INCOMPATIBLE_WITH_TOPIC_AUDIENCE_COMBINATIONS = 2
}
// @generated message type with reflection information, may provide speed optimized methods
class AudienceInsightsErrorEnum$Type extends MessageType<AudienceInsightsErrorEnum> {
    constructor() {
        super("google.ads.googleads.v11.errors.AudienceInsightsErrorEnum", []);
    }
    create(value?: PartialMessage<AudienceInsightsErrorEnum>): AudienceInsightsErrorEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AudienceInsightsErrorEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AudienceInsightsErrorEnum): AudienceInsightsErrorEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: AudienceInsightsErrorEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.errors.AudienceInsightsErrorEnum
 */
export const AudienceInsightsErrorEnum = new AudienceInsightsErrorEnum$Type();
