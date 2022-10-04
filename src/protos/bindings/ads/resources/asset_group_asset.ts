// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/resources/asset_group_asset.proto" (package "google.ads.googleads.v11.resources", syntax proto3)
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
import { PolicySummary } from "../common/policy_summary";
import { AssetPerformanceLabelEnum_AssetPerformanceLabel } from "../enums/asset_performance_label";
import { AssetLinkStatusEnum_AssetLinkStatus } from "../enums/asset_link_status";
import { AssetFieldTypeEnum_AssetFieldType } from "../enums/asset_field_type";
/**
 * AssetGroupAsset is the link between an asset and an asset group.
 * Adding an AssetGroupAsset links an asset with an asset group.
 *
 * @generated from protobuf message google.ads.googleads.v11.resources.AssetGroupAsset
 */
export interface AssetGroupAsset {
    /**
     * Immutable. The resource name of the asset group asset.
     * Asset group asset resource name have the form:
     *
     * `customers/{customer_id}/assetGroupAssets/{asset_group_id}~{asset_id}~{field_type}`
     *
     * @generated from protobuf field: string resource_name = 1;
     */
    resourceName: string;
    /**
     * Immutable. The asset group which this asset group asset is linking.
     *
     * @generated from protobuf field: string asset_group = 2;
     */
    assetGroup: string;
    /**
     * Immutable. The asset which this asset group asset is linking.
     *
     * @generated from protobuf field: string asset = 3;
     */
    asset: string;
    /**
     * The description of the placement of the asset within the asset group. For
     * example: HEADLINE, YOUTUBE_VIDEO etc
     *
     * @generated from protobuf field: google.ads.googleads.v11.enums.AssetFieldTypeEnum.AssetFieldType field_type = 4;
     */
    fieldType: AssetFieldTypeEnum_AssetFieldType;
    /**
     * The status of the link between an asset and asset group.
     *
     * @generated from protobuf field: google.ads.googleads.v11.enums.AssetLinkStatusEnum.AssetLinkStatus status = 5;
     */
    status: AssetLinkStatusEnum_AssetLinkStatus;
    /**
     * Output only. The performance of this asset group asset.
     *
     * @generated from protobuf field: google.ads.googleads.v11.enums.AssetPerformanceLabelEnum.AssetPerformanceLabel performance_label = 6;
     */
    performanceLabel: AssetPerformanceLabelEnum_AssetPerformanceLabel;
    /**
     * Output only. The policy information for this asset group asset.
     *
     * @generated from protobuf field: google.ads.googleads.v11.common.PolicySummary policy_summary = 7;
     */
    policySummary?: PolicySummary;
}
// @generated message type with reflection information, may provide speed optimized methods
class AssetGroupAsset$Type extends MessageType<AssetGroupAsset> {
    constructor() {
        super("google.ads.googleads.v11.resources.AssetGroupAsset", [
            { no: 1, name: "resource_name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["IMMUTABLE"], "google.api.resource_reference": { type: "googleads.googleapis.com/AssetGroupAsset" } } },
            { no: 2, name: "asset_group", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["IMMUTABLE"], "google.api.resource_reference": { type: "googleads.googleapis.com/AssetGroup" } } },
            { no: 3, name: "asset", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["IMMUTABLE"], "google.api.resource_reference": { type: "googleads.googleapis.com/Asset" } } },
            { no: 4, name: "field_type", kind: "enum", T: () => ["google.ads.googleads.v11.enums.AssetFieldTypeEnum.AssetFieldType", AssetFieldTypeEnum_AssetFieldType] },
            { no: 5, name: "status", kind: "enum", T: () => ["google.ads.googleads.v11.enums.AssetLinkStatusEnum.AssetLinkStatus", AssetLinkStatusEnum_AssetLinkStatus] },
            { no: 6, name: "performance_label", kind: "enum", T: () => ["google.ads.googleads.v11.enums.AssetPerformanceLabelEnum.AssetPerformanceLabel", AssetPerformanceLabelEnum_AssetPerformanceLabel], options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 7, name: "policy_summary", kind: "message", T: () => PolicySummary, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } }
        ], { "google.api.resource": { type: "googleads.googleapis.com/AssetGroupAsset", pattern: ["customers/{customer_id}/assetGroupAssets/{asset_group_id}~{asset_id}~{field_type}"] } });
    }
    create(value?: PartialMessage<AssetGroupAsset>): AssetGroupAsset {
        const message = { resourceName: "", assetGroup: "", asset: "", fieldType: 0, status: 0, performanceLabel: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AssetGroupAsset>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AssetGroupAsset): AssetGroupAsset {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string resource_name */ 1:
                    message.resourceName = reader.string();
                    break;
                case /* string asset_group */ 2:
                    message.assetGroup = reader.string();
                    break;
                case /* string asset */ 3:
                    message.asset = reader.string();
                    break;
                case /* google.ads.googleads.v11.enums.AssetFieldTypeEnum.AssetFieldType field_type */ 4:
                    message.fieldType = reader.int32();
                    break;
                case /* google.ads.googleads.v11.enums.AssetLinkStatusEnum.AssetLinkStatus status */ 5:
                    message.status = reader.int32();
                    break;
                case /* google.ads.googleads.v11.enums.AssetPerformanceLabelEnum.AssetPerformanceLabel performance_label */ 6:
                    message.performanceLabel = reader.int32();
                    break;
                case /* google.ads.googleads.v11.common.PolicySummary policy_summary */ 7:
                    message.policySummary = PolicySummary.internalBinaryRead(reader, reader.uint32(), options, message.policySummary);
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
    internalBinaryWrite(message: AssetGroupAsset, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string resource_name = 1; */
        if (message.resourceName !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.resourceName);
        /* string asset_group = 2; */
        if (message.assetGroup !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.assetGroup);
        /* string asset = 3; */
        if (message.asset !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.asset);
        /* google.ads.googleads.v11.enums.AssetFieldTypeEnum.AssetFieldType field_type = 4; */
        if (message.fieldType !== 0)
            writer.tag(4, WireType.Varint).int32(message.fieldType);
        /* google.ads.googleads.v11.enums.AssetLinkStatusEnum.AssetLinkStatus status = 5; */
        if (message.status !== 0)
            writer.tag(5, WireType.Varint).int32(message.status);
        /* google.ads.googleads.v11.enums.AssetPerformanceLabelEnum.AssetPerformanceLabel performance_label = 6; */
        if (message.performanceLabel !== 0)
            writer.tag(6, WireType.Varint).int32(message.performanceLabel);
        /* google.ads.googleads.v11.common.PolicySummary policy_summary = 7; */
        if (message.policySummary)
            PolicySummary.internalBinaryWrite(message.policySummary, writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.resources.AssetGroupAsset
 */
export const AssetGroupAsset = new AssetGroupAsset$Type();