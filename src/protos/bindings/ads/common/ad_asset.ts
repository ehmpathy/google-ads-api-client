// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/common/ad_asset.proto" (package "google.ads.googleads.v11.common", syntax proto3)
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
import { AdAssetPolicySummary } from "./asset_policy";
import { AssetPerformanceLabelEnum_AssetPerformanceLabel } from "../enums/asset_performance_label";
import { ServedAssetFieldTypeEnum_ServedAssetFieldType } from "../enums/served_asset_field_type";
// Proto file describing assets used inside an ad.

/**
 * A text asset used inside an ad.
 *
 * @generated from protobuf message google.ads.googleads.v11.common.AdTextAsset
 */
export interface AdTextAsset {
    /**
     * Asset text.
     *
     * @generated from protobuf field: optional string text = 4;
     */
    text?: string;
    /**
     * The pinned field of the asset. This restricts the asset to only serve
     * within this field. Multiple assets can be pinned to the same field. An
     * asset that is unpinned or pinned to a different field will not serve in a
     * field where some other asset has been pinned.
     *
     * @generated from protobuf field: google.ads.googleads.v11.enums.ServedAssetFieldTypeEnum.ServedAssetFieldType pinned_field = 2;
     */
    pinnedField: ServedAssetFieldTypeEnum_ServedAssetFieldType;
    /**
     * The performance label of this text asset.
     *
     * @generated from protobuf field: google.ads.googleads.v11.enums.AssetPerformanceLabelEnum.AssetPerformanceLabel asset_performance_label = 5;
     */
    assetPerformanceLabel: AssetPerformanceLabelEnum_AssetPerformanceLabel;
    /**
     * The policy summary of this text asset.
     *
     * @generated from protobuf field: google.ads.googleads.v11.common.AdAssetPolicySummary policy_summary_info = 6;
     */
    policySummaryInfo?: AdAssetPolicySummary;
}
/**
 * An image asset used inside an ad.
 *
 * @generated from protobuf message google.ads.googleads.v11.common.AdImageAsset
 */
export interface AdImageAsset {
    /**
     * The Asset resource name of this image.
     *
     * @generated from protobuf field: optional string asset = 2;
     */
    asset?: string;
}
/**
 * A video asset used inside an ad.
 *
 * @generated from protobuf message google.ads.googleads.v11.common.AdVideoAsset
 */
export interface AdVideoAsset {
    /**
     * The Asset resource name of this video.
     *
     * @generated from protobuf field: optional string asset = 2;
     */
    asset?: string;
}
/**
 * A media bundle asset used inside an ad.
 *
 * @generated from protobuf message google.ads.googleads.v11.common.AdMediaBundleAsset
 */
export interface AdMediaBundleAsset {
    /**
     * The Asset resource name of this media bundle.
     *
     * @generated from protobuf field: optional string asset = 2;
     */
    asset?: string;
}
/**
 * A discovery carousel card asset used inside an ad.
 *
 * @generated from protobuf message google.ads.googleads.v11.common.AdDiscoveryCarouselCardAsset
 */
export interface AdDiscoveryCarouselCardAsset {
    /**
     * The Asset resource name of this discovery carousel card.
     *
     * @generated from protobuf field: optional string asset = 1;
     */
    asset?: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class AdTextAsset$Type extends MessageType<AdTextAsset> {
    constructor() {
        super("google.ads.googleads.v11.common.AdTextAsset", [
            { no: 4, name: "text", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "pinned_field", kind: "enum", T: () => ["google.ads.googleads.v11.enums.ServedAssetFieldTypeEnum.ServedAssetFieldType", ServedAssetFieldTypeEnum_ServedAssetFieldType] },
            { no: 5, name: "asset_performance_label", kind: "enum", T: () => ["google.ads.googleads.v11.enums.AssetPerformanceLabelEnum.AssetPerformanceLabel", AssetPerformanceLabelEnum_AssetPerformanceLabel] },
            { no: 6, name: "policy_summary_info", kind: "message", T: () => AdAssetPolicySummary }
        ]);
    }
    create(value?: PartialMessage<AdTextAsset>): AdTextAsset {
        const message = { pinnedField: 0, assetPerformanceLabel: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AdTextAsset>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AdTextAsset): AdTextAsset {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional string text */ 4:
                    message.text = reader.string();
                    break;
                case /* google.ads.googleads.v11.enums.ServedAssetFieldTypeEnum.ServedAssetFieldType pinned_field */ 2:
                    message.pinnedField = reader.int32();
                    break;
                case /* google.ads.googleads.v11.enums.AssetPerformanceLabelEnum.AssetPerformanceLabel asset_performance_label */ 5:
                    message.assetPerformanceLabel = reader.int32();
                    break;
                case /* google.ads.googleads.v11.common.AdAssetPolicySummary policy_summary_info */ 6:
                    message.policySummaryInfo = AdAssetPolicySummary.internalBinaryRead(reader, reader.uint32(), options, message.policySummaryInfo);
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
    internalBinaryWrite(message: AdTextAsset, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional string text = 4; */
        if (message.text !== undefined)
            writer.tag(4, WireType.LengthDelimited).string(message.text);
        /* google.ads.googleads.v11.enums.ServedAssetFieldTypeEnum.ServedAssetFieldType pinned_field = 2; */
        if (message.pinnedField !== 0)
            writer.tag(2, WireType.Varint).int32(message.pinnedField);
        /* google.ads.googleads.v11.enums.AssetPerformanceLabelEnum.AssetPerformanceLabel asset_performance_label = 5; */
        if (message.assetPerformanceLabel !== 0)
            writer.tag(5, WireType.Varint).int32(message.assetPerformanceLabel);
        /* google.ads.googleads.v11.common.AdAssetPolicySummary policy_summary_info = 6; */
        if (message.policySummaryInfo)
            AdAssetPolicySummary.internalBinaryWrite(message.policySummaryInfo, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.common.AdTextAsset
 */
export const AdTextAsset = new AdTextAsset$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AdImageAsset$Type extends MessageType<AdImageAsset> {
    constructor() {
        super("google.ads.googleads.v11.common.AdImageAsset", [
            { no: 2, name: "asset", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<AdImageAsset>): AdImageAsset {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AdImageAsset>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AdImageAsset): AdImageAsset {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional string asset */ 2:
                    message.asset = reader.string();
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
    internalBinaryWrite(message: AdImageAsset, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional string asset = 2; */
        if (message.asset !== undefined)
            writer.tag(2, WireType.LengthDelimited).string(message.asset);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.common.AdImageAsset
 */
export const AdImageAsset = new AdImageAsset$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AdVideoAsset$Type extends MessageType<AdVideoAsset> {
    constructor() {
        super("google.ads.googleads.v11.common.AdVideoAsset", [
            { no: 2, name: "asset", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<AdVideoAsset>): AdVideoAsset {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AdVideoAsset>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AdVideoAsset): AdVideoAsset {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional string asset */ 2:
                    message.asset = reader.string();
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
    internalBinaryWrite(message: AdVideoAsset, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional string asset = 2; */
        if (message.asset !== undefined)
            writer.tag(2, WireType.LengthDelimited).string(message.asset);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.common.AdVideoAsset
 */
export const AdVideoAsset = new AdVideoAsset$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AdMediaBundleAsset$Type extends MessageType<AdMediaBundleAsset> {
    constructor() {
        super("google.ads.googleads.v11.common.AdMediaBundleAsset", [
            { no: 2, name: "asset", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<AdMediaBundleAsset>): AdMediaBundleAsset {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AdMediaBundleAsset>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AdMediaBundleAsset): AdMediaBundleAsset {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional string asset */ 2:
                    message.asset = reader.string();
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
    internalBinaryWrite(message: AdMediaBundleAsset, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional string asset = 2; */
        if (message.asset !== undefined)
            writer.tag(2, WireType.LengthDelimited).string(message.asset);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.common.AdMediaBundleAsset
 */
export const AdMediaBundleAsset = new AdMediaBundleAsset$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AdDiscoveryCarouselCardAsset$Type extends MessageType<AdDiscoveryCarouselCardAsset> {
    constructor() {
        super("google.ads.googleads.v11.common.AdDiscoveryCarouselCardAsset", [
            { no: 1, name: "asset", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<AdDiscoveryCarouselCardAsset>): AdDiscoveryCarouselCardAsset {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AdDiscoveryCarouselCardAsset>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AdDiscoveryCarouselCardAsset): AdDiscoveryCarouselCardAsset {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional string asset */ 1:
                    message.asset = reader.string();
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
    internalBinaryWrite(message: AdDiscoveryCarouselCardAsset, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional string asset = 1; */
        if (message.asset !== undefined)
            writer.tag(1, WireType.LengthDelimited).string(message.asset);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.common.AdDiscoveryCarouselCardAsset
 */
export const AdDiscoveryCarouselCardAsset = new AdDiscoveryCarouselCardAsset$Type();
