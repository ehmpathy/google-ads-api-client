// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/resource_change_operation.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
// Proto file describing the resource change operations in change event.

/**
 * Container for enum describing resource change operations
 * in the ChangeEvent resource.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.ResourceChangeOperationEnum
 */
export interface ResourceChangeOperationEnum {
}
/**
 * The operation on the changed resource in change_event resource.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.ResourceChangeOperationEnum.ResourceChangeOperation
 */
export enum ResourceChangeOperationEnum_ResourceChangeOperation {
    /**
     * No value has been specified.
     *
     * @generated from protobuf enum value: UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Used for return value only. Represents an unclassified operation unknown
     * in this version.
     *
     * @generated from protobuf enum value: UNKNOWN = 1;
     */
    UNKNOWN = 1,
    /**
     * The resource was created.
     *
     * @generated from protobuf enum value: CREATE = 2;
     */
    CREATE = 2,
    /**
     * The resource was modified.
     *
     * @generated from protobuf enum value: UPDATE = 3;
     */
    UPDATE = 3,
    /**
     * The resource was removed.
     *
     * @generated from protobuf enum value: REMOVE = 4;
     */
    REMOVE = 4
}
// @generated message type with reflection information, may provide speed optimized methods
class ResourceChangeOperationEnum$Type extends MessageType<ResourceChangeOperationEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.ResourceChangeOperationEnum", []);
    }
    create(value?: PartialMessage<ResourceChangeOperationEnum>): ResourceChangeOperationEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ResourceChangeOperationEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ResourceChangeOperationEnum): ResourceChangeOperationEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: ResourceChangeOperationEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.ResourceChangeOperationEnum
 */
export const ResourceChangeOperationEnum = new ResourceChangeOperationEnum$Type();
