// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/media_type.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
// Proto file describing media types.

/**
 * Container for enum describing the types of media.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.MediaTypeEnum
 */
export interface MediaTypeEnum {
}
/**
 * The type of media.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.MediaTypeEnum.MediaType
 */
export enum MediaTypeEnum_MediaType {
    /**
     * The media type has not been specified.
     *
     * @generated from protobuf enum value: UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * The received value is not known in this version.
     *
     * This is a response-only value.
     *
     * @generated from protobuf enum value: UNKNOWN = 1;
     */
    UNKNOWN = 1,
    /**
     * Static image, used for image ad.
     *
     * @generated from protobuf enum value: IMAGE = 2;
     */
    IMAGE = 2,
    /**
     * Small image, used for map ad.
     *
     * @generated from protobuf enum value: ICON = 3;
     */
    ICON = 3,
    /**
     * ZIP file, used in fields of template ads.
     *
     * @generated from protobuf enum value: MEDIA_BUNDLE = 4;
     */
    MEDIA_BUNDLE = 4,
    /**
     * Audio file.
     *
     * @generated from protobuf enum value: AUDIO = 5;
     */
    AUDIO = 5,
    /**
     * Video file.
     *
     * @generated from protobuf enum value: VIDEO = 6;
     */
    VIDEO = 6,
    /**
     * Animated image, such as animated GIF.
     *
     * @generated from protobuf enum value: DYNAMIC_IMAGE = 7;
     */
    DYNAMIC_IMAGE = 7
}
// @generated message type with reflection information, may provide speed optimized methods
class MediaTypeEnum$Type extends MessageType<MediaTypeEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.MediaTypeEnum", []);
    }
    create(value?: PartialMessage<MediaTypeEnum>): MediaTypeEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MediaTypeEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MediaTypeEnum): MediaTypeEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: MediaTypeEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.MediaTypeEnum
 */
export const MediaTypeEnum = new MediaTypeEnum$Type();
