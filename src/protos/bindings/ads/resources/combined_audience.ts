// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/resources/combined_audience.proto" (package "google.ads.googleads.v11.resources", syntax proto3)
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
import { CombinedAudienceStatusEnum_CombinedAudienceStatus } from "../enums/combined_audience_status";
// Proto file describing the Combined Audience resource.

/**
 * Describe a resource for combined audiences which includes different
 * audiences.
 *
 * @generated from protobuf message google.ads.googleads.v11.resources.CombinedAudience
 */
export interface CombinedAudience {
    /**
     * Immutable. The resource name of the combined audience.
     * Combined audience names have the form:
     *
     * `customers/{customer_id}/combinedAudience/{combined_audience_id}`
     *
     * @generated from protobuf field: string resource_name = 1;
     */
    resourceName: string;
    /**
     * Output only. ID of the combined audience.
     *
     * @generated from protobuf field: int64 id = 2;
     */
    id: bigint;
    /**
     * Output only. Status of this combined audience. Indicates whether the combined audience
     * is enabled or removed.
     *
     * @generated from protobuf field: google.ads.googleads.v11.enums.CombinedAudienceStatusEnum.CombinedAudienceStatus status = 3;
     */
    status: CombinedAudienceStatusEnum_CombinedAudienceStatus;
    /**
     * Output only. Name of the combined audience. It should be unique across all combined
     * audiences.
     *
     * @generated from protobuf field: string name = 4;
     */
    name: string;
    /**
     * Output only. Description of this combined audience.
     *
     * @generated from protobuf field: string description = 5;
     */
    description: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class CombinedAudience$Type extends MessageType<CombinedAudience> {
    constructor() {
        super("google.ads.googleads.v11.resources.CombinedAudience", [
            { no: 1, name: "resource_name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["IMMUTABLE"], "google.api.resource_reference": { type: "googleads.googleapis.com/CombinedAudience" } } },
            { no: 2, name: "id", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 3, name: "status", kind: "enum", T: () => ["google.ads.googleads.v11.enums.CombinedAudienceStatusEnum.CombinedAudienceStatus", CombinedAudienceStatusEnum_CombinedAudienceStatus], options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 4, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 5, name: "description", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } }
        ], { "google.api.resource": { type: "googleads.googleapis.com/CombinedAudience", pattern: ["customers/{customer_id}/combinedAudiences/{combined_audience_id}"] } });
    }
    create(value?: PartialMessage<CombinedAudience>): CombinedAudience {
        const message = { resourceName: "", id: 0n, status: 0, name: "", description: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CombinedAudience>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CombinedAudience): CombinedAudience {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string resource_name */ 1:
                    message.resourceName = reader.string();
                    break;
                case /* int64 id */ 2:
                    message.id = reader.int64().toBigInt();
                    break;
                case /* google.ads.googleads.v11.enums.CombinedAudienceStatusEnum.CombinedAudienceStatus status */ 3:
                    message.status = reader.int32();
                    break;
                case /* string name */ 4:
                    message.name = reader.string();
                    break;
                case /* string description */ 5:
                    message.description = reader.string();
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
    internalBinaryWrite(message: CombinedAudience, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string resource_name = 1; */
        if (message.resourceName !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.resourceName);
        /* int64 id = 2; */
        if (message.id !== 0n)
            writer.tag(2, WireType.Varint).int64(message.id);
        /* google.ads.googleads.v11.enums.CombinedAudienceStatusEnum.CombinedAudienceStatus status = 3; */
        if (message.status !== 0)
            writer.tag(3, WireType.Varint).int32(message.status);
        /* string name = 4; */
        if (message.name !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.name);
        /* string description = 5; */
        if (message.description !== "")
            writer.tag(5, WireType.LengthDelimited).string(message.description);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.resources.CombinedAudience
 */
export const CombinedAudience = new CombinedAudience$Type();
