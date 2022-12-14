// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/resources/campaign_customizer.proto" (package "google.ads.googleads.v11.resources", syntax proto3)
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
import { CustomizerValue } from "../common/customizer_value";
import { CustomizerValueStatusEnum_CustomizerValueStatus } from "../enums/customizer_value_status";
/**
 * A customizer value for the associated CustomizerAttribute at the Campaign
 * level.
 *
 * @generated from protobuf message google.ads.googleads.v11.resources.CampaignCustomizer
 */
export interface CampaignCustomizer {
    /**
     * Immutable. The resource name of the campaign customizer.
     * Campaign customizer resource names have the form:
     *
     * `customers/{customer_id}/campaignCustomizers/{campaign_id}~{customizer_attribute_id}`
     *
     * @generated from protobuf field: string resource_name = 1;
     */
    resourceName: string;
    /**
     * Immutable. The campaign to which the customizer attribute is linked.
     *
     * @generated from protobuf field: string campaign = 2;
     */
    campaign: string;
    /**
     * Required. Immutable. The customizer attribute which is linked to the campaign.
     *
     * @generated from protobuf field: string customizer_attribute = 3;
     */
    customizerAttribute: string;
    /**
     * Output only. The status of the campaign customizer.
     *
     * @generated from protobuf field: google.ads.googleads.v11.enums.CustomizerValueStatusEnum.CustomizerValueStatus status = 4;
     */
    status: CustomizerValueStatusEnum_CustomizerValueStatus;
    /**
     * Required. The value to associate with the customizer attribute at this level. The
     * value must be of the type specified for the CustomizerAttribute.
     *
     * @generated from protobuf field: google.ads.googleads.v11.common.CustomizerValue value = 5;
     */
    value?: CustomizerValue;
}
// @generated message type with reflection information, may provide speed optimized methods
class CampaignCustomizer$Type extends MessageType<CampaignCustomizer> {
    constructor() {
        super("google.ads.googleads.v11.resources.CampaignCustomizer", [
            { no: 1, name: "resource_name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["IMMUTABLE"], "google.api.resource_reference": { type: "googleads.googleapis.com/CampaignCustomizer" } } },
            { no: 2, name: "campaign", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["IMMUTABLE"], "google.api.resource_reference": { type: "googleads.googleapis.com/Campaign" } } },
            { no: 3, name: "customizer_attribute", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["REQUIRED", "IMMUTABLE"], "google.api.resource_reference": { type: "googleads.googleapis.com/CustomizerAttribute" } } },
            { no: 4, name: "status", kind: "enum", T: () => ["google.ads.googleads.v11.enums.CustomizerValueStatusEnum.CustomizerValueStatus", CustomizerValueStatusEnum_CustomizerValueStatus], options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 5, name: "value", kind: "message", T: () => CustomizerValue, options: { "google.api.field_behavior": ["REQUIRED"] } }
        ], { "google.api.resource": { type: "googleads.googleapis.com/CampaignCustomizer", pattern: ["customers/{customer_id}/campaignCustomizers/{campaign_id}~{customizer_attribute_id}"] } });
    }
    create(value?: PartialMessage<CampaignCustomizer>): CampaignCustomizer {
        const message = { resourceName: "", campaign: "", customizerAttribute: "", status: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CampaignCustomizer>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CampaignCustomizer): CampaignCustomizer {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string resource_name */ 1:
                    message.resourceName = reader.string();
                    break;
                case /* string campaign */ 2:
                    message.campaign = reader.string();
                    break;
                case /* string customizer_attribute */ 3:
                    message.customizerAttribute = reader.string();
                    break;
                case /* google.ads.googleads.v11.enums.CustomizerValueStatusEnum.CustomizerValueStatus status */ 4:
                    message.status = reader.int32();
                    break;
                case /* google.ads.googleads.v11.common.CustomizerValue value */ 5:
                    message.value = CustomizerValue.internalBinaryRead(reader, reader.uint32(), options, message.value);
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
    internalBinaryWrite(message: CampaignCustomizer, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string resource_name = 1; */
        if (message.resourceName !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.resourceName);
        /* string campaign = 2; */
        if (message.campaign !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.campaign);
        /* string customizer_attribute = 3; */
        if (message.customizerAttribute !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.customizerAttribute);
        /* google.ads.googleads.v11.enums.CustomizerValueStatusEnum.CustomizerValueStatus status = 4; */
        if (message.status !== 0)
            writer.tag(4, WireType.Varint).int32(message.status);
        /* google.ads.googleads.v11.common.CustomizerValue value = 5; */
        if (message.value)
            CustomizerValue.internalBinaryWrite(message.value, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.resources.CampaignCustomizer
 */
export const CampaignCustomizer = new CampaignCustomizer$Type();
