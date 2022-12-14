// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/resources/shared_set.proto" (package "google.ads.googleads.v11.resources", syntax proto3)
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
import { SharedSetStatusEnum_SharedSetStatus } from "../enums/shared_set_status";
import { SharedSetTypeEnum_SharedSetType } from "../enums/shared_set_type";
// Proto file describing the SharedSet resource.

/**
 * SharedSets are used for sharing criterion exclusions across multiple
 * campaigns.
 *
 * @generated from protobuf message google.ads.googleads.v11.resources.SharedSet
 */
export interface SharedSet {
    /**
     * Immutable. The resource name of the shared set.
     * Shared set resource names have the form:
     *
     * `customers/{customer_id}/sharedSets/{shared_set_id}`
     *
     * @generated from protobuf field: string resource_name = 1;
     */
    resourceName: string;
    /**
     * Output only. The ID of this shared set. Read only.
     *
     * @generated from protobuf field: optional int64 id = 8;
     */
    id?: bigint;
    /**
     * Immutable. The type of this shared set: each shared set holds only a single kind
     * of resource. Required. Immutable.
     *
     * @generated from protobuf field: google.ads.googleads.v11.enums.SharedSetTypeEnum.SharedSetType type = 3;
     */
    type: SharedSetTypeEnum_SharedSetType;
    /**
     * The name of this shared set. Required.
     * Shared Sets must have names that are unique among active shared sets of
     * the same type.
     * The length of this string should be between 1 and 255 UTF-8 bytes,
     * inclusive.
     *
     * @generated from protobuf field: optional string name = 9;
     */
    name?: string;
    /**
     * Output only. The status of this shared set. Read only.
     *
     * @generated from protobuf field: google.ads.googleads.v11.enums.SharedSetStatusEnum.SharedSetStatus status = 5;
     */
    status: SharedSetStatusEnum_SharedSetStatus;
    /**
     * Output only. The number of shared criteria within this shared set. Read only.
     *
     * @generated from protobuf field: optional int64 member_count = 10;
     */
    memberCount?: bigint;
    /**
     * Output only. The number of campaigns associated with this shared set. Read only.
     *
     * @generated from protobuf field: optional int64 reference_count = 11;
     */
    referenceCount?: bigint;
}
// @generated message type with reflection information, may provide speed optimized methods
class SharedSet$Type extends MessageType<SharedSet> {
    constructor() {
        super("google.ads.googleads.v11.resources.SharedSet", [
            { no: 1, name: "resource_name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["IMMUTABLE"], "google.api.resource_reference": { type: "googleads.googleapis.com/SharedSet" } } },
            { no: 8, name: "id", kind: "scalar", opt: true, T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 3, name: "type", kind: "enum", T: () => ["google.ads.googleads.v11.enums.SharedSetTypeEnum.SharedSetType", SharedSetTypeEnum_SharedSetType], options: { "google.api.field_behavior": ["IMMUTABLE"] } },
            { no: 9, name: "name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "status", kind: "enum", T: () => ["google.ads.googleads.v11.enums.SharedSetStatusEnum.SharedSetStatus", SharedSetStatusEnum_SharedSetStatus], options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 10, name: "member_count", kind: "scalar", opt: true, T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 11, name: "reference_count", kind: "scalar", opt: true, T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } }
        ], { "google.api.resource": { type: "googleads.googleapis.com/SharedSet", pattern: ["customers/{customer_id}/sharedSets/{shared_set_id}"] } });
    }
    create(value?: PartialMessage<SharedSet>): SharedSet {
        const message = { resourceName: "", type: 0, status: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SharedSet>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SharedSet): SharedSet {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string resource_name */ 1:
                    message.resourceName = reader.string();
                    break;
                case /* optional int64 id */ 8:
                    message.id = reader.int64().toBigInt();
                    break;
                case /* google.ads.googleads.v11.enums.SharedSetTypeEnum.SharedSetType type */ 3:
                    message.type = reader.int32();
                    break;
                case /* optional string name */ 9:
                    message.name = reader.string();
                    break;
                case /* google.ads.googleads.v11.enums.SharedSetStatusEnum.SharedSetStatus status */ 5:
                    message.status = reader.int32();
                    break;
                case /* optional int64 member_count */ 10:
                    message.memberCount = reader.int64().toBigInt();
                    break;
                case /* optional int64 reference_count */ 11:
                    message.referenceCount = reader.int64().toBigInt();
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
    internalBinaryWrite(message: SharedSet, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string resource_name = 1; */
        if (message.resourceName !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.resourceName);
        /* optional int64 id = 8; */
        if (message.id !== undefined)
            writer.tag(8, WireType.Varint).int64(message.id);
        /* google.ads.googleads.v11.enums.SharedSetTypeEnum.SharedSetType type = 3; */
        if (message.type !== 0)
            writer.tag(3, WireType.Varint).int32(message.type);
        /* optional string name = 9; */
        if (message.name !== undefined)
            writer.tag(9, WireType.LengthDelimited).string(message.name);
        /* google.ads.googleads.v11.enums.SharedSetStatusEnum.SharedSetStatus status = 5; */
        if (message.status !== 0)
            writer.tag(5, WireType.Varint).int32(message.status);
        /* optional int64 member_count = 10; */
        if (message.memberCount !== undefined)
            writer.tag(10, WireType.Varint).int64(message.memberCount);
        /* optional int64 reference_count = 11; */
        if (message.referenceCount !== undefined)
            writer.tag(11, WireType.Varint).int64(message.referenceCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.resources.SharedSet
 */
export const SharedSet = new SharedSet$Type();
