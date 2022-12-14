// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/response_content_type.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
// Proto file describing the response content types used in mutate operations.

/**
 * Container for possible response content types.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.ResponseContentTypeEnum
 */
export interface ResponseContentTypeEnum {
}
/**
 * Possible response content types.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.ResponseContentTypeEnum.ResponseContentType
 */
export enum ResponseContentTypeEnum_ResponseContentType {
    /**
     * Not specified. Will return the resource name only in the response.
     *
     * @generated from protobuf enum value: UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * The mutate response will be the resource name.
     *
     * @generated from protobuf enum value: RESOURCE_NAME_ONLY = 1;
     */
    RESOURCE_NAME_ONLY = 1,
    /**
     * The mutate response will be the resource name and the resource with
     * all mutable fields.
     *
     * @generated from protobuf enum value: MUTABLE_RESOURCE = 2;
     */
    MUTABLE_RESOURCE = 2
}
// @generated message type with reflection information, may provide speed optimized methods
class ResponseContentTypeEnum$Type extends MessageType<ResponseContentTypeEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.ResponseContentTypeEnum", []);
    }
    create(value?: PartialMessage<ResponseContentTypeEnum>): ResponseContentTypeEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ResponseContentTypeEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ResponseContentTypeEnum): ResponseContentTypeEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: ResponseContentTypeEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.ResponseContentTypeEnum
 */
export const ResponseContentTypeEnum = new ResponseContentTypeEnum$Type();
