// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/common/feed_item_set_filter_type_infos.proto" (package "google.ads.googleads.v11.common", syntax proto3)
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
import { FeedItemSetStringFilterTypeEnum_FeedItemSetStringFilterType } from "../enums/feed_item_set_string_filter_type";
/**
 * Represents a filter on locations in a feed item set.
 * Only applicable if the parent Feed of the FeedItemSet is a LOCATION feed.
 *
 * @generated from protobuf message google.ads.googleads.v11.common.DynamicLocationSetFilter
 */
export interface DynamicLocationSetFilter {
    /**
     * If multiple labels are set, then only feeditems marked with all the labels
     * will be added to the FeedItemSet.
     *
     * @generated from protobuf field: repeated string labels = 1;
     */
    labels: string[];
    /**
     * Business name filter.
     *
     * @generated from protobuf field: google.ads.googleads.v11.common.BusinessNameFilter business_name_filter = 2;
     */
    businessNameFilter?: BusinessNameFilter;
}
/**
 * Represents a business name filter on locations in a FeedItemSet.
 *
 * @generated from protobuf message google.ads.googleads.v11.common.BusinessNameFilter
 */
export interface BusinessNameFilter {
    /**
     * Business name string to use for filtering.
     *
     * @generated from protobuf field: string business_name = 1;
     */
    businessName: string;
    /**
     * The type of string matching to use when filtering with business_name.
     *
     * @generated from protobuf field: google.ads.googleads.v11.enums.FeedItemSetStringFilterTypeEnum.FeedItemSetStringFilterType filter_type = 2;
     */
    filterType: FeedItemSetStringFilterTypeEnum_FeedItemSetStringFilterType;
}
/**
 * Represents a filter on affiliate locations in a FeedItemSet.
 * Only applicable if the parent Feed of the FeedItemSet is an
 * AFFILIATE_LOCATION feed.
 *
 * @generated from protobuf message google.ads.googleads.v11.common.DynamicAffiliateLocationSetFilter
 */
export interface DynamicAffiliateLocationSetFilter {
    /**
     * Used to filter affiliate locations by chain ids. Only affiliate locations
     * that belong to the specified chain(s) will be added to the FeedItemSet.
     *
     * @generated from protobuf field: repeated int64 chain_ids = 1;
     */
    chainIds: bigint[];
}
// @generated message type with reflection information, may provide speed optimized methods
class DynamicLocationSetFilter$Type extends MessageType<DynamicLocationSetFilter> {
    constructor() {
        super("google.ads.googleads.v11.common.DynamicLocationSetFilter", [
            { no: 1, name: "labels", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "business_name_filter", kind: "message", T: () => BusinessNameFilter }
        ]);
    }
    create(value?: PartialMessage<DynamicLocationSetFilter>): DynamicLocationSetFilter {
        const message = { labels: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<DynamicLocationSetFilter>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DynamicLocationSetFilter): DynamicLocationSetFilter {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated string labels */ 1:
                    message.labels.push(reader.string());
                    break;
                case /* google.ads.googleads.v11.common.BusinessNameFilter business_name_filter */ 2:
                    message.businessNameFilter = BusinessNameFilter.internalBinaryRead(reader, reader.uint32(), options, message.businessNameFilter);
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
    internalBinaryWrite(message: DynamicLocationSetFilter, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated string labels = 1; */
        for (let i = 0; i < message.labels.length; i++)
            writer.tag(1, WireType.LengthDelimited).string(message.labels[i]);
        /* google.ads.googleads.v11.common.BusinessNameFilter business_name_filter = 2; */
        if (message.businessNameFilter)
            BusinessNameFilter.internalBinaryWrite(message.businessNameFilter, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.common.DynamicLocationSetFilter
 */
export const DynamicLocationSetFilter = new DynamicLocationSetFilter$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BusinessNameFilter$Type extends MessageType<BusinessNameFilter> {
    constructor() {
        super("google.ads.googleads.v11.common.BusinessNameFilter", [
            { no: 1, name: "business_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "filter_type", kind: "enum", T: () => ["google.ads.googleads.v11.enums.FeedItemSetStringFilterTypeEnum.FeedItemSetStringFilterType", FeedItemSetStringFilterTypeEnum_FeedItemSetStringFilterType] }
        ]);
    }
    create(value?: PartialMessage<BusinessNameFilter>): BusinessNameFilter {
        const message = { businessName: "", filterType: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<BusinessNameFilter>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BusinessNameFilter): BusinessNameFilter {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string business_name */ 1:
                    message.businessName = reader.string();
                    break;
                case /* google.ads.googleads.v11.enums.FeedItemSetStringFilterTypeEnum.FeedItemSetStringFilterType filter_type */ 2:
                    message.filterType = reader.int32();
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
    internalBinaryWrite(message: BusinessNameFilter, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string business_name = 1; */
        if (message.businessName !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.businessName);
        /* google.ads.googleads.v11.enums.FeedItemSetStringFilterTypeEnum.FeedItemSetStringFilterType filter_type = 2; */
        if (message.filterType !== 0)
            writer.tag(2, WireType.Varint).int32(message.filterType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.common.BusinessNameFilter
 */
export const BusinessNameFilter = new BusinessNameFilter$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DynamicAffiliateLocationSetFilter$Type extends MessageType<DynamicAffiliateLocationSetFilter> {
    constructor() {
        super("google.ads.googleads.v11.common.DynamicAffiliateLocationSetFilter", [
            { no: 1, name: "chain_ids", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<DynamicAffiliateLocationSetFilter>): DynamicAffiliateLocationSetFilter {
        const message = { chainIds: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<DynamicAffiliateLocationSetFilter>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DynamicAffiliateLocationSetFilter): DynamicAffiliateLocationSetFilter {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated int64 chain_ids */ 1:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.chainIds.push(reader.int64().toBigInt());
                    else
                        message.chainIds.push(reader.int64().toBigInt());
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
    internalBinaryWrite(message: DynamicAffiliateLocationSetFilter, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated int64 chain_ids = 1; */
        if (message.chainIds.length) {
            writer.tag(1, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.chainIds.length; i++)
                writer.int64(message.chainIds[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.common.DynamicAffiliateLocationSetFilter
 */
export const DynamicAffiliateLocationSetFilter = new DynamicAffiliateLocationSetFilter$Type();
