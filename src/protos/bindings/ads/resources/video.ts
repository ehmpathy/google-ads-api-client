// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/resources/video.proto" (package "google.ads.googleads.v11.resources", syntax proto3)
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
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
// Proto file describing the video resource.

/**
 * A video.
 *
 * @generated from protobuf message google.ads.googleads.v11.resources.Video
 */
export interface Video {
    /**
     * Output only. The resource name of the video.
     * Video resource names have the form:
     *
     * `customers/{customer_id}/videos/{video_id}`
     *
     * @generated from protobuf field: string resource_name = 1;
     */
    resourceName: string;
    /**
     * Output only. The ID of the video.
     *
     * @generated from protobuf field: optional string id = 6;
     */
    id?: string;
    /**
     * Output only. The owner channel id of the video.
     *
     * @generated from protobuf field: optional string channel_id = 7;
     */
    channelId?: string;
    /**
     * Output only. The duration of the video in milliseconds.
     *
     * @generated from protobuf field: optional int64 duration_millis = 8;
     */
    durationMillis?: bigint;
    /**
     * Output only. The title of the video.
     *
     * @generated from protobuf field: optional string title = 9;
     */
    title?: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class Video$Type extends MessageType<Video> {
    constructor() {
        super("google.ads.googleads.v11.resources.Video", [
            { no: 1, name: "resource_name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"], "google.api.resource_reference": { type: "googleads.googleapis.com/Video" } } },
            { no: 6, name: "id", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 7, name: "channel_id", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 8, name: "duration_millis", kind: "scalar", opt: true, T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 9, name: "title", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } }
        ], { "google.api.resource": { type: "googleads.googleapis.com/Video", pattern: ["customers/{customer_id}/videos/{video_id}"] } });
    }
    create(value?: PartialMessage<Video>): Video {
        const message = { resourceName: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Video>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Video): Video {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string resource_name */ 1:
                    message.resourceName = reader.string();
                    break;
                case /* optional string id */ 6:
                    message.id = reader.string();
                    break;
                case /* optional string channel_id */ 7:
                    message.channelId = reader.string();
                    break;
                case /* optional int64 duration_millis */ 8:
                    message.durationMillis = reader.int64().toBigInt();
                    break;
                case /* optional string title */ 9:
                    message.title = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Video, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string resource_name = 1; */
        if (message.resourceName !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.resourceName);
        /* optional string id = 6; */
        if (message.id !== undefined)
            writer.tag(6, WireType.LengthDelimited).string(message.id);
        /* optional string channel_id = 7; */
        if (message.channelId !== undefined)
            writer.tag(7, WireType.LengthDelimited).string(message.channelId);
        /* optional int64 duration_millis = 8; */
        if (message.durationMillis !== undefined)
            writer.tag(8, WireType.Varint).int64(message.durationMillis);
        /* optional string title = 9; */
        if (message.title !== undefined)
            writer.tag(9, WireType.LengthDelimited).string(message.title);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.resources.Video
 */
export const Video = new Video$Type();