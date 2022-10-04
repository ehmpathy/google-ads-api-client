// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/video_thumbnail.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
// Proto file describing video thumbnails.

/**
 * Defines the thumbnail to use for In-Display video ads. Note that
 * DEFAULT_THUMBNAIL may have been uploaded by the user while thumbnails 1-3 are
 * auto-generated from the video.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.VideoThumbnailEnum
 */
export interface VideoThumbnailEnum {
}
/**
 * Enum listing the possible types of a video thumbnail.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.VideoThumbnailEnum.VideoThumbnail
 */
export enum VideoThumbnailEnum_VideoThumbnail {
    /**
     * The type has not been specified.
     *
     * @generated from protobuf enum value: UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * The received value is not known in this version.
     * This is a response-only value.
     *
     * @generated from protobuf enum value: UNKNOWN = 1;
     */
    UNKNOWN = 1,
    /**
     * The default thumbnail. Can be auto-generated or user-uploaded.
     *
     * @generated from protobuf enum value: DEFAULT_THUMBNAIL = 2;
     */
    DEFAULT_THUMBNAIL = 2,
    /**
     * Thumbnail 1, generated from the video.
     *
     * @generated from protobuf enum value: THUMBNAIL_1 = 3;
     */
    THUMBNAIL_1 = 3,
    /**
     * Thumbnail 2, generated from the video.
     *
     * @generated from protobuf enum value: THUMBNAIL_2 = 4;
     */
    THUMBNAIL_2 = 4,
    /**
     * Thumbnail 3, generated from the video.
     *
     * @generated from protobuf enum value: THUMBNAIL_3 = 5;
     */
    THUMBNAIL_3 = 5
}
// @generated message type with reflection information, may provide speed optimized methods
class VideoThumbnailEnum$Type extends MessageType<VideoThumbnailEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.VideoThumbnailEnum", []);
    }
    create(value?: PartialMessage<VideoThumbnailEnum>): VideoThumbnailEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<VideoThumbnailEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: VideoThumbnailEnum): VideoThumbnailEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: VideoThumbnailEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.VideoThumbnailEnum
 */
export const VideoThumbnailEnum = new VideoThumbnailEnum$Type();
