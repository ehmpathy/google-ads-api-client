// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/resources/ad_group_ad.proto" (package "google.ads.googleads.v11.resources", syntax proto3)
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
import { PolicyApprovalStatusEnum_PolicyApprovalStatus } from "../enums/policy_approval_status";
import { PolicyReviewStatusEnum_PolicyReviewStatus } from "../enums/policy_review_status";
import { PolicyTopicEntry } from "../common/policy";
import { AdStrengthEnum_AdStrength } from "../enums/ad_strength";
import { Ad } from "./ad";
import { AdGroupAdStatusEnum_AdGroupAdStatus } from "../enums/ad_group_ad_status";
// Proto file describing the ad group ad resource.

/**
 * An ad group ad.
 *
 * @generated from protobuf message google.ads.googleads.v11.resources.AdGroupAd
 */
export interface AdGroupAd {
    /**
     * Immutable. The resource name of the ad.
     * Ad group ad resource names have the form:
     *
     * `customers/{customer_id}/adGroupAds/{ad_group_id}~{ad_id}`
     *
     * @generated from protobuf field: string resource_name = 1;
     */
    resourceName: string;
    /**
     * The status of the ad.
     *
     * @generated from protobuf field: google.ads.googleads.v11.enums.AdGroupAdStatusEnum.AdGroupAdStatus status = 3;
     */
    status: AdGroupAdStatusEnum_AdGroupAdStatus;
    /**
     * Immutable. The ad group to which the ad belongs.
     *
     * @generated from protobuf field: optional string ad_group = 9;
     */
    adGroup?: string;
    /**
     * Immutable. The ad.
     *
     * @generated from protobuf field: google.ads.googleads.v11.resources.Ad ad = 5;
     */
    ad?: Ad;
    /**
     * Output only. Policy information for the ad.
     *
     * @generated from protobuf field: google.ads.googleads.v11.resources.AdGroupAdPolicySummary policy_summary = 6;
     */
    policySummary?: AdGroupAdPolicySummary;
    /**
     * Output only. Overall ad strength for this ad group ad.
     *
     * @generated from protobuf field: google.ads.googleads.v11.enums.AdStrengthEnum.AdStrength ad_strength = 7;
     */
    adStrength: AdStrengthEnum_AdStrength;
    /**
     * Output only. A list of recommendations to improve the ad strength. For example, a
     * recommendation could be "Your headlines are a little too similar.
     * Try adding more distinct headlines.".
     *
     * @generated from protobuf field: repeated string action_items = 13;
     */
    actionItems: string[];
    /**
     * Output only. The resource names of labels attached to this ad group ad.
     *
     * @generated from protobuf field: repeated string labels = 10;
     */
    labels: string[];
}
/**
 * Contains policy information for an ad.
 *
 * @generated from protobuf message google.ads.googleads.v11.resources.AdGroupAdPolicySummary
 */
export interface AdGroupAdPolicySummary {
    /**
     * Output only. The list of policy findings for this ad.
     *
     * @generated from protobuf field: repeated google.ads.googleads.v11.common.PolicyTopicEntry policy_topic_entries = 1;
     */
    policyTopicEntries: PolicyTopicEntry[];
    /**
     * Output only. Where in the review process this ad is.
     *
     * @generated from protobuf field: google.ads.googleads.v11.enums.PolicyReviewStatusEnum.PolicyReviewStatus review_status = 2;
     */
    reviewStatus: PolicyReviewStatusEnum_PolicyReviewStatus;
    /**
     * Output only. The overall approval status of this ad, calculated based on the status of
     * its individual policy topic entries.
     *
     * @generated from protobuf field: google.ads.googleads.v11.enums.PolicyApprovalStatusEnum.PolicyApprovalStatus approval_status = 3;
     */
    approvalStatus: PolicyApprovalStatusEnum_PolicyApprovalStatus;
}
// @generated message type with reflection information, may provide speed optimized methods
class AdGroupAd$Type extends MessageType<AdGroupAd> {
    constructor() {
        super("google.ads.googleads.v11.resources.AdGroupAd", [
            { no: 1, name: "resource_name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["IMMUTABLE"], "google.api.resource_reference": { type: "googleads.googleapis.com/AdGroupAd" } } },
            { no: 3, name: "status", kind: "enum", T: () => ["google.ads.googleads.v11.enums.AdGroupAdStatusEnum.AdGroupAdStatus", AdGroupAdStatusEnum_AdGroupAdStatus] },
            { no: 9, name: "ad_group", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["IMMUTABLE"], "google.api.resource_reference": { type: "googleads.googleapis.com/AdGroup" } } },
            { no: 5, name: "ad", kind: "message", T: () => Ad, options: { "google.api.field_behavior": ["IMMUTABLE"] } },
            { no: 6, name: "policy_summary", kind: "message", T: () => AdGroupAdPolicySummary, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 7, name: "ad_strength", kind: "enum", T: () => ["google.ads.googleads.v11.enums.AdStrengthEnum.AdStrength", AdStrengthEnum_AdStrength], options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 13, name: "action_items", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 10, name: "labels", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"], "google.api.resource_reference": { type: "googleads.googleapis.com/AdGroupAdLabel" } } }
        ], { "google.api.resource": { type: "googleads.googleapis.com/AdGroupAd", pattern: ["customers/{customer_id}/adGroupAds/{ad_group_id}~{ad_id}"] } });
    }
    create(value?: PartialMessage<AdGroupAd>): AdGroupAd {
        const message = { resourceName: "", status: 0, adStrength: 0, actionItems: [], labels: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AdGroupAd>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AdGroupAd): AdGroupAd {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string resource_name */ 1:
                    message.resourceName = reader.string();
                    break;
                case /* google.ads.googleads.v11.enums.AdGroupAdStatusEnum.AdGroupAdStatus status */ 3:
                    message.status = reader.int32();
                    break;
                case /* optional string ad_group */ 9:
                    message.adGroup = reader.string();
                    break;
                case /* google.ads.googleads.v11.resources.Ad ad */ 5:
                    message.ad = Ad.internalBinaryRead(reader, reader.uint32(), options, message.ad);
                    break;
                case /* google.ads.googleads.v11.resources.AdGroupAdPolicySummary policy_summary */ 6:
                    message.policySummary = AdGroupAdPolicySummary.internalBinaryRead(reader, reader.uint32(), options, message.policySummary);
                    break;
                case /* google.ads.googleads.v11.enums.AdStrengthEnum.AdStrength ad_strength */ 7:
                    message.adStrength = reader.int32();
                    break;
                case /* repeated string action_items */ 13:
                    message.actionItems.push(reader.string());
                    break;
                case /* repeated string labels */ 10:
                    message.labels.push(reader.string());
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
    internalBinaryWrite(message: AdGroupAd, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string resource_name = 1; */
        if (message.resourceName !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.resourceName);
        /* google.ads.googleads.v11.enums.AdGroupAdStatusEnum.AdGroupAdStatus status = 3; */
        if (message.status !== 0)
            writer.tag(3, WireType.Varint).int32(message.status);
        /* optional string ad_group = 9; */
        if (message.adGroup !== undefined)
            writer.tag(9, WireType.LengthDelimited).string(message.adGroup);
        /* google.ads.googleads.v11.resources.Ad ad = 5; */
        if (message.ad)
            Ad.internalBinaryWrite(message.ad, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* google.ads.googleads.v11.resources.AdGroupAdPolicySummary policy_summary = 6; */
        if (message.policySummary)
            AdGroupAdPolicySummary.internalBinaryWrite(message.policySummary, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* google.ads.googleads.v11.enums.AdStrengthEnum.AdStrength ad_strength = 7; */
        if (message.adStrength !== 0)
            writer.tag(7, WireType.Varint).int32(message.adStrength);
        /* repeated string action_items = 13; */
        for (let i = 0; i < message.actionItems.length; i++)
            writer.tag(13, WireType.LengthDelimited).string(message.actionItems[i]);
        /* repeated string labels = 10; */
        for (let i = 0; i < message.labels.length; i++)
            writer.tag(10, WireType.LengthDelimited).string(message.labels[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.resources.AdGroupAd
 */
export const AdGroupAd = new AdGroupAd$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AdGroupAdPolicySummary$Type extends MessageType<AdGroupAdPolicySummary> {
    constructor() {
        super("google.ads.googleads.v11.resources.AdGroupAdPolicySummary", [
            { no: 1, name: "policy_topic_entries", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => PolicyTopicEntry, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 2, name: "review_status", kind: "enum", T: () => ["google.ads.googleads.v11.enums.PolicyReviewStatusEnum.PolicyReviewStatus", PolicyReviewStatusEnum_PolicyReviewStatus], options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 3, name: "approval_status", kind: "enum", T: () => ["google.ads.googleads.v11.enums.PolicyApprovalStatusEnum.PolicyApprovalStatus", PolicyApprovalStatusEnum_PolicyApprovalStatus], options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } }
        ]);
    }
    create(value?: PartialMessage<AdGroupAdPolicySummary>): AdGroupAdPolicySummary {
        const message = { policyTopicEntries: [], reviewStatus: 0, approvalStatus: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AdGroupAdPolicySummary>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AdGroupAdPolicySummary): AdGroupAdPolicySummary {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated google.ads.googleads.v11.common.PolicyTopicEntry policy_topic_entries */ 1:
                    message.policyTopicEntries.push(PolicyTopicEntry.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* google.ads.googleads.v11.enums.PolicyReviewStatusEnum.PolicyReviewStatus review_status */ 2:
                    message.reviewStatus = reader.int32();
                    break;
                case /* google.ads.googleads.v11.enums.PolicyApprovalStatusEnum.PolicyApprovalStatus approval_status */ 3:
                    message.approvalStatus = reader.int32();
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
    internalBinaryWrite(message: AdGroupAdPolicySummary, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated google.ads.googleads.v11.common.PolicyTopicEntry policy_topic_entries = 1; */
        for (let i = 0; i < message.policyTopicEntries.length; i++)
            PolicyTopicEntry.internalBinaryWrite(message.policyTopicEntries[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* google.ads.googleads.v11.enums.PolicyReviewStatusEnum.PolicyReviewStatus review_status = 2; */
        if (message.reviewStatus !== 0)
            writer.tag(2, WireType.Varint).int32(message.reviewStatus);
        /* google.ads.googleads.v11.enums.PolicyApprovalStatusEnum.PolicyApprovalStatus approval_status = 3; */
        if (message.approvalStatus !== 0)
            writer.tag(3, WireType.Varint).int32(message.approvalStatus);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.resources.AdGroupAdPolicySummary
 */
export const AdGroupAdPolicySummary = new AdGroupAdPolicySummary$Type();
