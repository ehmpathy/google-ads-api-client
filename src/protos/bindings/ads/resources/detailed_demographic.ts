// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/resources/detailed_demographic.proto" (package "google.ads.googleads.v11.resources", syntax proto3)
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
import { CriterionCategoryAvailability } from "../common/criterion_category_availability";
// Proto file describing the Detailed Demographic resource.

/**
 * A detailed demographic: a particular interest-based vertical to be targeted
 * to reach users based on long-term life facts.
 *
 * @generated from protobuf message google.ads.googleads.v11.resources.DetailedDemographic
 */
export interface DetailedDemographic {
    /**
     * Output only. The resource name of the detailed demographic.
     * Detailed demographic resource names have the form:
     *
     * `customers/{customer_id}/detailedDemographics/{detailed_demographic_id}`
     *
     * @generated from protobuf field: string resource_name = 1;
     */
    resourceName: string;
    /**
     * Output only. The ID of the detailed demographic.
     *
     * @generated from protobuf field: int64 id = 2;
     */
    id: bigint;
    /**
     * Output only. The name of the detailed demographic. For example,"Highest Level of
     * Educational Attainment"
     *
     * @generated from protobuf field: string name = 3;
     */
    name: string;
    /**
     * Output only. The parent of the detailed_demographic.
     *
     * @generated from protobuf field: string parent = 4;
     */
    parent: string;
    /**
     * Output only. True if the detailed demographic is launched to all channels and locales.
     *
     * @generated from protobuf field: bool launched_to_all = 5;
     */
    launchedToAll: boolean;
    /**
     * Output only. Availability information of the detailed demographic.
     *
     * @generated from protobuf field: repeated google.ads.googleads.v11.common.CriterionCategoryAvailability availabilities = 6;
     */
    availabilities: CriterionCategoryAvailability[];
}
// @generated message type with reflection information, may provide speed optimized methods
class DetailedDemographic$Type extends MessageType<DetailedDemographic> {
    constructor() {
        super("google.ads.googleads.v11.resources.DetailedDemographic", [
            { no: 1, name: "resource_name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"], "google.api.resource_reference": { type: "googleads.googleapis.com/DetailedDemographic" } } },
            { no: 2, name: "id", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 3, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 4, name: "parent", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"], "google.api.resource_reference": { type: "googleads.googleapis.com/DetailedDemographic" } } },
            { no: 5, name: "launched_to_all", kind: "scalar", T: 8 /*ScalarType.BOOL*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 6, name: "availabilities", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CriterionCategoryAvailability, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } }
        ], { "google.api.resource": { type: "googleads.googleapis.com/DetailedDemographic", pattern: ["customers/{customer_id}/detailedDemographics/{detailed_demographic_id}"] } });
    }
    create(value?: PartialMessage<DetailedDemographic>): DetailedDemographic {
        const message = { resourceName: "", id: 0n, name: "", parent: "", launchedToAll: false, availabilities: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<DetailedDemographic>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DetailedDemographic): DetailedDemographic {
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
                case /* string name */ 3:
                    message.name = reader.string();
                    break;
                case /* string parent */ 4:
                    message.parent = reader.string();
                    break;
                case /* bool launched_to_all */ 5:
                    message.launchedToAll = reader.bool();
                    break;
                case /* repeated google.ads.googleads.v11.common.CriterionCategoryAvailability availabilities */ 6:
                    message.availabilities.push(CriterionCategoryAvailability.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: DetailedDemographic, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string resource_name = 1; */
        if (message.resourceName !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.resourceName);
        /* int64 id = 2; */
        if (message.id !== 0n)
            writer.tag(2, WireType.Varint).int64(message.id);
        /* string name = 3; */
        if (message.name !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.name);
        /* string parent = 4; */
        if (message.parent !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.parent);
        /* bool launched_to_all = 5; */
        if (message.launchedToAll !== false)
            writer.tag(5, WireType.Varint).bool(message.launchedToAll);
        /* repeated google.ads.googleads.v11.common.CriterionCategoryAvailability availabilities = 6; */
        for (let i = 0; i < message.availabilities.length; i++)
            CriterionCategoryAvailability.internalBinaryWrite(message.availabilities[i], writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.resources.DetailedDemographic
 */
export const DetailedDemographic = new DetailedDemographic$Type();
