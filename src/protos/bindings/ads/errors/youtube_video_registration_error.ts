// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/errors/youtube_video_registration_error.proto" (package "google.ads.googleads.v11.errors", syntax proto3)
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
// Proto file describing YouTube video registration errors.

/**
 * Container for enum describing YouTube video registration errors.
 *
 * @generated from protobuf message google.ads.googleads.v11.errors.YoutubeVideoRegistrationErrorEnum
 */
export interface YoutubeVideoRegistrationErrorEnum {
}
/**
 * Enum describing YouTube video registration errors.
 *
 * @generated from protobuf enum google.ads.googleads.v11.errors.YoutubeVideoRegistrationErrorEnum.YoutubeVideoRegistrationError
 */
export enum YoutubeVideoRegistrationErrorEnum_YoutubeVideoRegistrationError {
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
     * Video to be registered wasn't found.
     *
     * @generated from protobuf enum value: VIDEO_NOT_FOUND = 2;
     */
    VIDEO_NOT_FOUND = 2,
    /**
     * Video to be registered is not accessible (for example, private).
     *
     * @generated from protobuf enum value: VIDEO_NOT_ACCESSIBLE = 3;
     */
    VIDEO_NOT_ACCESSIBLE = 3,
    /**
     * Video to be registered is not eligible (for example, mature content).
     *
     * @generated from protobuf enum value: VIDEO_NOT_ELIGIBLE = 4;
     */
    VIDEO_NOT_ELIGIBLE = 4
}
// @generated message type with reflection information, may provide speed optimized methods
class YoutubeVideoRegistrationErrorEnum$Type extends MessageType<YoutubeVideoRegistrationErrorEnum> {
    constructor() {
        super("google.ads.googleads.v11.errors.YoutubeVideoRegistrationErrorEnum", []);
    }
    create(value?: PartialMessage<YoutubeVideoRegistrationErrorEnum>): YoutubeVideoRegistrationErrorEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<YoutubeVideoRegistrationErrorEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: YoutubeVideoRegistrationErrorEnum): YoutubeVideoRegistrationErrorEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: YoutubeVideoRegistrationErrorEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.errors.YoutubeVideoRegistrationErrorEnum
 */
export const YoutubeVideoRegistrationErrorEnum = new YoutubeVideoRegistrationErrorEnum$Type();