// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/resources/campaign_draft.proto" (package "google.ads.googleads.v11.resources", syntax proto3)
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
import { CampaignDraftStatusEnum_CampaignDraftStatus } from "../enums/campaign_draft_status";
// Proto file describing the Campaign Draft resource.

/**
 * A campaign draft.
 *
 * @generated from protobuf message google.ads.googleads.v11.resources.CampaignDraft
 */
export interface CampaignDraft {
    /**
     * Immutable. The resource name of the campaign draft.
     * Campaign draft resource names have the form:
     *
     * `customers/{customer_id}/campaignDrafts/{base_campaign_id}~{draft_id}`
     *
     * @generated from protobuf field: string resource_name = 1;
     */
    resourceName: string;
    /**
     * Output only. The ID of the draft.
     *
     * This field is read-only.
     *
     * @generated from protobuf field: optional int64 draft_id = 9;
     */
    draftId?: bigint;
    /**
     * Immutable. The base campaign to which the draft belongs.
     *
     * @generated from protobuf field: optional string base_campaign = 10;
     */
    baseCampaign?: string;
    /**
     * The name of the campaign draft.
     *
     * This field is required and should not be empty when creating new
     * campaign drafts.
     *
     * It must not contain any null (code point 0x0), NL line feed
     * (code point 0xA) or carriage return (code point 0xD) characters.
     *
     * @generated from protobuf field: optional string name = 11;
     */
    name?: string;
    /**
     * Output only. Resource name of the Campaign that results from overlaying the draft
     * changes onto the base campaign.
     *
     * This field is read-only.
     *
     * @generated from protobuf field: optional string draft_campaign = 12;
     */
    draftCampaign?: string;
    /**
     * Output only. The status of the campaign draft. This field is read-only.
     *
     * When a new campaign draft is added, the status defaults to PROPOSED.
     *
     * @generated from protobuf field: google.ads.googleads.v11.enums.CampaignDraftStatusEnum.CampaignDraftStatus status = 6;
     */
    status: CampaignDraftStatusEnum_CampaignDraftStatus;
    /**
     * Output only. Whether there is an experiment based on this draft currently serving.
     *
     * @generated from protobuf field: optional bool has_experiment_running = 13;
     */
    hasExperimentRunning?: boolean;
    /**
     * Output only. The resource name of the long-running operation that can be used to poll
     * for completion of draft promotion. This is only set if the draft promotion
     * is in progress or finished.
     *
     * @generated from protobuf field: optional string long_running_operation = 14;
     */
    longRunningOperation?: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class CampaignDraft$Type extends MessageType<CampaignDraft> {
    constructor() {
        super("google.ads.googleads.v11.resources.CampaignDraft", [
            { no: 1, name: "resource_name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["IMMUTABLE"], "google.api.resource_reference": { type: "googleads.googleapis.com/CampaignDraft" } } },
            { no: 9, name: "draft_id", kind: "scalar", opt: true, T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 10, name: "base_campaign", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["IMMUTABLE"], "google.api.resource_reference": { type: "googleads.googleapis.com/Campaign" } } },
            { no: 11, name: "name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 12, name: "draft_campaign", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"], "google.api.resource_reference": { type: "googleads.googleapis.com/Campaign" } } },
            { no: 6, name: "status", kind: "enum", T: () => ["google.ads.googleads.v11.enums.CampaignDraftStatusEnum.CampaignDraftStatus", CampaignDraftStatusEnum_CampaignDraftStatus], options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 13, name: "has_experiment_running", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 14, name: "long_running_operation", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } }
        ], { "google.api.resource": { type: "googleads.googleapis.com/CampaignDraft", pattern: ["customers/{customer_id}/campaignDrafts/{base_campaign_id}~{draft_id}"] } });
    }
    create(value?: PartialMessage<CampaignDraft>): CampaignDraft {
        const message = { resourceName: "", status: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CampaignDraft>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CampaignDraft): CampaignDraft {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string resource_name */ 1:
                    message.resourceName = reader.string();
                    break;
                case /* optional int64 draft_id */ 9:
                    message.draftId = reader.int64().toBigInt();
                    break;
                case /* optional string base_campaign */ 10:
                    message.baseCampaign = reader.string();
                    break;
                case /* optional string name */ 11:
                    message.name = reader.string();
                    break;
                case /* optional string draft_campaign */ 12:
                    message.draftCampaign = reader.string();
                    break;
                case /* google.ads.googleads.v11.enums.CampaignDraftStatusEnum.CampaignDraftStatus status */ 6:
                    message.status = reader.int32();
                    break;
                case /* optional bool has_experiment_running */ 13:
                    message.hasExperimentRunning = reader.bool();
                    break;
                case /* optional string long_running_operation */ 14:
                    message.longRunningOperation = reader.string();
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
    internalBinaryWrite(message: CampaignDraft, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string resource_name = 1; */
        if (message.resourceName !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.resourceName);
        /* optional int64 draft_id = 9; */
        if (message.draftId !== undefined)
            writer.tag(9, WireType.Varint).int64(message.draftId);
        /* optional string base_campaign = 10; */
        if (message.baseCampaign !== undefined)
            writer.tag(10, WireType.LengthDelimited).string(message.baseCampaign);
        /* optional string name = 11; */
        if (message.name !== undefined)
            writer.tag(11, WireType.LengthDelimited).string(message.name);
        /* optional string draft_campaign = 12; */
        if (message.draftCampaign !== undefined)
            writer.tag(12, WireType.LengthDelimited).string(message.draftCampaign);
        /* google.ads.googleads.v11.enums.CampaignDraftStatusEnum.CampaignDraftStatus status = 6; */
        if (message.status !== 0)
            writer.tag(6, WireType.Varint).int32(message.status);
        /* optional bool has_experiment_running = 13; */
        if (message.hasExperimentRunning !== undefined)
            writer.tag(13, WireType.Varint).bool(message.hasExperimentRunning);
        /* optional string long_running_operation = 14; */
        if (message.longRunningOperation !== undefined)
            writer.tag(14, WireType.LengthDelimited).string(message.longRunningOperation);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.resources.CampaignDraft
 */
export const CampaignDraft = new CampaignDraft$Type();
