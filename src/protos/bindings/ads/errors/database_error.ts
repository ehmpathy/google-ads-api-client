// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/errors/database_error.proto" (package "google.ads.googleads.v11.errors", syntax proto3)
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
// Proto file describing database errors.

/**
 * Container for enum describing possible database errors.
 *
 * @generated from protobuf message google.ads.googleads.v11.errors.DatabaseErrorEnum
 */
export interface DatabaseErrorEnum {
}
/**
 * Enum describing possible database errors.
 *
 * @generated from protobuf enum google.ads.googleads.v11.errors.DatabaseErrorEnum.DatabaseError
 */
export enum DatabaseErrorEnum_DatabaseError {
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
     * Multiple requests were attempting to modify the same resource at once.
     * Retry the request.
     *
     * @generated from protobuf enum value: CONCURRENT_MODIFICATION = 2;
     */
    CONCURRENT_MODIFICATION = 2,
    /**
     * The request conflicted with existing data. This error will usually be
     * replaced with a more specific error if the request is retried.
     *
     * @generated from protobuf enum value: DATA_CONSTRAINT_VIOLATION = 3;
     */
    DATA_CONSTRAINT_VIOLATION = 3,
    /**
     * The data written is too large. Split the request into smaller
     * requests.
     *
     * @generated from protobuf enum value: REQUEST_TOO_LARGE = 4;
     */
    REQUEST_TOO_LARGE = 4
}
// @generated message type with reflection information, may provide speed optimized methods
class DatabaseErrorEnum$Type extends MessageType<DatabaseErrorEnum> {
    constructor() {
        super("google.ads.googleads.v11.errors.DatabaseErrorEnum", []);
    }
    create(value?: PartialMessage<DatabaseErrorEnum>): DatabaseErrorEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<DatabaseErrorEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DatabaseErrorEnum): DatabaseErrorEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: DatabaseErrorEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.errors.DatabaseErrorEnum
 */
export const DatabaseErrorEnum = new DatabaseErrorEnum$Type();
