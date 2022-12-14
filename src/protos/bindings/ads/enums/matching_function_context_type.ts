// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/matching_function_context_type.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
// Proto file describing matching function context types.

/**
 * Container for context types for an operand in a matching function.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.MatchingFunctionContextTypeEnum
 */
export interface MatchingFunctionContextTypeEnum {
}
/**
 * Possible context types for an operand in a matching function.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.MatchingFunctionContextTypeEnum.MatchingFunctionContextType
 */
export enum MatchingFunctionContextTypeEnum_MatchingFunctionContextType {
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
     * Feed item id in the request context.
     *
     * @generated from protobuf enum value: FEED_ITEM_ID = 2;
     */
    FEED_ITEM_ID = 2,
    /**
     * The device being used (possible values are 'Desktop' or 'Mobile').
     *
     * @generated from protobuf enum value: DEVICE_NAME = 3;
     */
    DEVICE_NAME = 3,
    /**
     * Feed item set id in the request context.
     *
     * @generated from protobuf enum value: FEED_ITEM_SET_ID = 4;
     */
    FEED_ITEM_SET_ID = 4
}
// @generated message type with reflection information, may provide speed optimized methods
class MatchingFunctionContextTypeEnum$Type extends MessageType<MatchingFunctionContextTypeEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.MatchingFunctionContextTypeEnum", []);
    }
    create(value?: PartialMessage<MatchingFunctionContextTypeEnum>): MatchingFunctionContextTypeEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MatchingFunctionContextTypeEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MatchingFunctionContextTypeEnum): MatchingFunctionContextTypeEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: MatchingFunctionContextTypeEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.MatchingFunctionContextTypeEnum
 */
export const MatchingFunctionContextTypeEnum = new MatchingFunctionContextTypeEnum$Type();
