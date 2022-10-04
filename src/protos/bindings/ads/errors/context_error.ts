// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/errors/context_error.proto" (package "google.ads.googleads.v11.errors", syntax proto3)
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
// Proto file describing context errors.

/**
 * Container for enum describing possible context errors.
 *
 * @generated from protobuf message google.ads.googleads.v11.errors.ContextErrorEnum
 */
export interface ContextErrorEnum {
}
/**
 * Enum describing possible context errors.
 *
 * @generated from protobuf enum google.ads.googleads.v11.errors.ContextErrorEnum.ContextError
 */
export enum ContextErrorEnum_ContextError {
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
     * The operation is not allowed for the given context.
     *
     * @generated from protobuf enum value: OPERATION_NOT_PERMITTED_FOR_CONTEXT = 2;
     */
    OPERATION_NOT_PERMITTED_FOR_CONTEXT = 2,
    /**
     * The operation is not allowed for removed resources.
     *
     * @generated from protobuf enum value: OPERATION_NOT_PERMITTED_FOR_REMOVED_RESOURCE = 3;
     */
    OPERATION_NOT_PERMITTED_FOR_REMOVED_RESOURCE = 3
}
// @generated message type with reflection information, may provide speed optimized methods
class ContextErrorEnum$Type extends MessageType<ContextErrorEnum> {
    constructor() {
        super("google.ads.googleads.v11.errors.ContextErrorEnum", []);
    }
    create(value?: PartialMessage<ContextErrorEnum>): ContextErrorEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ContextErrorEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ContextErrorEnum): ContextErrorEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: ContextErrorEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.errors.ContextErrorEnum
 */
export const ContextErrorEnum = new ContextErrorEnum$Type();
