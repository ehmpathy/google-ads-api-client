// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/feed_origin.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
// Proto file describing feed origin.

/**
 * Container for enum describing possible values for a feed origin.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.FeedOriginEnum
 */
export interface FeedOriginEnum {
}
/**
 * Possible values for a feed origin.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.FeedOriginEnum.FeedOrigin
 */
export enum FeedOriginEnum_FeedOrigin {
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
     * The FeedAttributes for this Feed are managed by the
     * user. Users can add FeedAttributes to this Feed.
     *
     * @generated from protobuf enum value: USER = 2;
     */
    USER = 2,
    /**
     * The FeedAttributes for an GOOGLE Feed are created by Google. A feed of
     * this type is maintained by Google and will have the correct attributes
     * for the placeholder type of the feed.
     *
     * @generated from protobuf enum value: GOOGLE = 3;
     */
    GOOGLE = 3
}
// @generated message type with reflection information, may provide speed optimized methods
class FeedOriginEnum$Type extends MessageType<FeedOriginEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.FeedOriginEnum", []);
    }
    create(value?: PartialMessage<FeedOriginEnum>): FeedOriginEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<FeedOriginEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FeedOriginEnum): FeedOriginEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: FeedOriginEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.FeedOriginEnum
 */
export const FeedOriginEnum = new FeedOriginEnum$Type();
