// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/resources/campaign_label.proto" (package "google.ads.googleads.v11.resources", syntax proto3)
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
// Proto file describing the campaign label resource.

/**
 * Represents a relationship between a campaign and a label.
 *
 * @generated from protobuf message google.ads.googleads.v11.resources.CampaignLabel
 */
export interface CampaignLabel {
    /**
     * Immutable. Name of the resource.
     * Campaign label resource names have the form:
     * `customers/{customer_id}/campaignLabels/{campaign_id}~{label_id}`
     *
     * @generated from protobuf field: string resource_name = 1;
     */
    resourceName: string;
    /**
     * Immutable. The campaign to which the label is attached.
     *
     * @generated from protobuf field: optional string campaign = 4;
     */
    campaign?: string;
    /**
     * Immutable. The label assigned to the campaign.
     *
     * @generated from protobuf field: optional string label = 5;
     */
    label?: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class CampaignLabel$Type extends MessageType<CampaignLabel> {
    constructor() {
        super("google.ads.googleads.v11.resources.CampaignLabel", [
            { no: 1, name: "resource_name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["IMMUTABLE"], "google.api.resource_reference": { type: "googleads.googleapis.com/CampaignLabel" } } },
            { no: 4, name: "campaign", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["IMMUTABLE"], "google.api.resource_reference": { type: "googleads.googleapis.com/Campaign" } } },
            { no: 5, name: "label", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["IMMUTABLE"], "google.api.resource_reference": { type: "googleads.googleapis.com/Label" } } }
        ], { "google.api.resource": { type: "googleads.googleapis.com/CampaignLabel", pattern: ["customers/{customer_id}/campaignLabels/{campaign_id}~{label_id}"] } });
    }
    create(value?: PartialMessage<CampaignLabel>): CampaignLabel {
        const message = { resourceName: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CampaignLabel>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CampaignLabel): CampaignLabel {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string resource_name */ 1:
                    message.resourceName = reader.string();
                    break;
                case /* optional string campaign */ 4:
                    message.campaign = reader.string();
                    break;
                case /* optional string label */ 5:
                    message.label = reader.string();
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
    internalBinaryWrite(message: CampaignLabel, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string resource_name = 1; */
        if (message.resourceName !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.resourceName);
        /* optional string campaign = 4; */
        if (message.campaign !== undefined)
            writer.tag(4, WireType.LengthDelimited).string(message.campaign);
        /* optional string label = 5; */
        if (message.label !== undefined)
            writer.tag(5, WireType.LengthDelimited).string(message.label);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.resources.CampaignLabel
 */
export const CampaignLabel = new CampaignLabel$Type();
