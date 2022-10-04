// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/resources/lead_form_submission_data.proto" (package "google.ads.googleads.v11.resources", syntax proto3)
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
import { LeadFormFieldUserInputTypeEnum_LeadFormFieldUserInputType } from "../enums/lead_form_field_user_input_type";
// Proto file describing the lead form submission data resource.

/**
 * Data from lead form submissions.
 *
 * @generated from protobuf message google.ads.googleads.v11.resources.LeadFormSubmissionData
 */
export interface LeadFormSubmissionData {
    /**
     * Output only. The resource name of the lead form submission data.
     * Lead form submission data resource names have the form:
     *
     * `customers/{customer_id}/leadFormSubmissionData/{lead_form_submission_data_id}`
     *
     * @generated from protobuf field: string resource_name = 1;
     */
    resourceName: string;
    /**
     * Output only. ID of this lead form submission.
     *
     * @generated from protobuf field: string id = 2;
     */
    id: string;
    /**
     * Output only. Asset associated with the submitted lead form.
     *
     * @generated from protobuf field: string asset = 3;
     */
    asset: string;
    /**
     * Output only. Campaign associated with the submitted lead form.
     *
     * @generated from protobuf field: string campaign = 4;
     */
    campaign: string;
    /**
     * Output only. Submission data associated with a lead form.
     *
     * @generated from protobuf field: repeated google.ads.googleads.v11.resources.LeadFormSubmissionField lead_form_submission_fields = 5;
     */
    leadFormSubmissionFields: LeadFormSubmissionField[];
    /**
     * Output only. AdGroup associated with the submitted lead form.
     *
     * @generated from protobuf field: string ad_group = 6;
     */
    adGroup: string;
    /**
     * Output only. AdGroupAd associated with the submitted lead form.
     *
     * @generated from protobuf field: string ad_group_ad = 7;
     */
    adGroupAd: string;
    /**
     * Output only. Google Click Id associated with the submissed lead form.
     *
     * @generated from protobuf field: string gclid = 8;
     */
    gclid: string;
    /**
     * Output only. The date and time at which the lead form was submitted. The format is
     * "yyyy-mm-dd hh:mm:ss+|-hh:mm", for example, "2019-01-01 12:32:45-08:00".
     *
     * @generated from protobuf field: string submission_date_time = 9;
     */
    submissionDateTime: string;
}
/**
 * Fields in the submitted lead form.
 *
 * @generated from protobuf message google.ads.googleads.v11.resources.LeadFormSubmissionField
 */
export interface LeadFormSubmissionField {
    /**
     * Output only. Field type for lead form fields.
     *
     * @generated from protobuf field: google.ads.googleads.v11.enums.LeadFormFieldUserInputTypeEnum.LeadFormFieldUserInputType field_type = 1;
     */
    fieldType: LeadFormFieldUserInputTypeEnum_LeadFormFieldUserInputType;
    /**
     * Output only. Field value for lead form fields.
     *
     * @generated from protobuf field: string field_value = 2;
     */
    fieldValue: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class LeadFormSubmissionData$Type extends MessageType<LeadFormSubmissionData> {
    constructor() {
        super("google.ads.googleads.v11.resources.LeadFormSubmissionData", [
            { no: 1, name: "resource_name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"], "google.api.resource_reference": { type: "googleads.googleapis.com/LeadFormSubmissionData" } } },
            { no: 2, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 3, name: "asset", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"], "google.api.resource_reference": { type: "googleads.googleapis.com/Asset" } } },
            { no: 4, name: "campaign", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"], "google.api.resource_reference": { type: "googleads.googleapis.com/Campaign" } } },
            { no: 5, name: "lead_form_submission_fields", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => LeadFormSubmissionField, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 6, name: "ad_group", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"], "google.api.resource_reference": { type: "googleads.googleapis.com/AdGroup" } } },
            { no: 7, name: "ad_group_ad", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"], "google.api.resource_reference": { type: "googleads.googleapis.com/AdGroupAd" } } },
            { no: 8, name: "gclid", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 9, name: "submission_date_time", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } }
        ], { "google.api.resource": { type: "googleads.googleapis.com/LeadFormSubmissionData", pattern: ["customers/{customer_id}/leadFormSubmissionData/{lead_form_user_submission_id}"] } });
    }
    create(value?: PartialMessage<LeadFormSubmissionData>): LeadFormSubmissionData {
        const message = { resourceName: "", id: "", asset: "", campaign: "", leadFormSubmissionFields: [], adGroup: "", adGroupAd: "", gclid: "", submissionDateTime: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<LeadFormSubmissionData>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LeadFormSubmissionData): LeadFormSubmissionData {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string resource_name */ 1:
                    message.resourceName = reader.string();
                    break;
                case /* string id */ 2:
                    message.id = reader.string();
                    break;
                case /* string asset */ 3:
                    message.asset = reader.string();
                    break;
                case /* string campaign */ 4:
                    message.campaign = reader.string();
                    break;
                case /* repeated google.ads.googleads.v11.resources.LeadFormSubmissionField lead_form_submission_fields */ 5:
                    message.leadFormSubmissionFields.push(LeadFormSubmissionField.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* string ad_group */ 6:
                    message.adGroup = reader.string();
                    break;
                case /* string ad_group_ad */ 7:
                    message.adGroupAd = reader.string();
                    break;
                case /* string gclid */ 8:
                    message.gclid = reader.string();
                    break;
                case /* string submission_date_time */ 9:
                    message.submissionDateTime = reader.string();
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
    internalBinaryWrite(message: LeadFormSubmissionData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string resource_name = 1; */
        if (message.resourceName !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.resourceName);
        /* string id = 2; */
        if (message.id !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.id);
        /* string asset = 3; */
        if (message.asset !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.asset);
        /* string campaign = 4; */
        if (message.campaign !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.campaign);
        /* repeated google.ads.googleads.v11.resources.LeadFormSubmissionField lead_form_submission_fields = 5; */
        for (let i = 0; i < message.leadFormSubmissionFields.length; i++)
            LeadFormSubmissionField.internalBinaryWrite(message.leadFormSubmissionFields[i], writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* string ad_group = 6; */
        if (message.adGroup !== "")
            writer.tag(6, WireType.LengthDelimited).string(message.adGroup);
        /* string ad_group_ad = 7; */
        if (message.adGroupAd !== "")
            writer.tag(7, WireType.LengthDelimited).string(message.adGroupAd);
        /* string gclid = 8; */
        if (message.gclid !== "")
            writer.tag(8, WireType.LengthDelimited).string(message.gclid);
        /* string submission_date_time = 9; */
        if (message.submissionDateTime !== "")
            writer.tag(9, WireType.LengthDelimited).string(message.submissionDateTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.resources.LeadFormSubmissionData
 */
export const LeadFormSubmissionData = new LeadFormSubmissionData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class LeadFormSubmissionField$Type extends MessageType<LeadFormSubmissionField> {
    constructor() {
        super("google.ads.googleads.v11.resources.LeadFormSubmissionField", [
            { no: 1, name: "field_type", kind: "enum", T: () => ["google.ads.googleads.v11.enums.LeadFormFieldUserInputTypeEnum.LeadFormFieldUserInputType", LeadFormFieldUserInputTypeEnum_LeadFormFieldUserInputType], options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 2, name: "field_value", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } }
        ]);
    }
    create(value?: PartialMessage<LeadFormSubmissionField>): LeadFormSubmissionField {
        const message = { fieldType: 0, fieldValue: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<LeadFormSubmissionField>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LeadFormSubmissionField): LeadFormSubmissionField {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.ads.googleads.v11.enums.LeadFormFieldUserInputTypeEnum.LeadFormFieldUserInputType field_type */ 1:
                    message.fieldType = reader.int32();
                    break;
                case /* string field_value */ 2:
                    message.fieldValue = reader.string();
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
    internalBinaryWrite(message: LeadFormSubmissionField, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* google.ads.googleads.v11.enums.LeadFormFieldUserInputTypeEnum.LeadFormFieldUserInputType field_type = 1; */
        if (message.fieldType !== 0)
            writer.tag(1, WireType.Varint).int32(message.fieldType);
        /* string field_value = 2; */
        if (message.fieldValue !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.fieldValue);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.resources.LeadFormSubmissionField
 */
export const LeadFormSubmissionField = new LeadFormSubmissionField$Type();