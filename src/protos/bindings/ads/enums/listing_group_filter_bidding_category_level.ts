// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/listing_group_filter_bidding_category_level.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
// Proto file describing listing groups.

/**
 * Container for enum describing the levels of bidding category used in
 * ListingGroupFilterDimension.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.ListingGroupFilterBiddingCategoryLevelEnum
 */
export interface ListingGroupFilterBiddingCategoryLevelEnum {
}
/**
 * The level of the listing group filter bidding category.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.ListingGroupFilterBiddingCategoryLevelEnum.ListingGroupFilterBiddingCategoryLevel
 */
export enum ListingGroupFilterBiddingCategoryLevelEnum_ListingGroupFilterBiddingCategoryLevel {
    /**
     * Not specified.
     *
     * @generated from protobuf enum value: UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Used for return value only. Represents value unknown in this version.
     *
     * @generated from protobuf enum value: UNKNOWN = 1;
     */
    UNKNOWN = 1,
    /**
     * Level 1.
     *
     * @generated from protobuf enum value: LEVEL1 = 2;
     */
    LEVEL1 = 2,
    /**
     * Level 2.
     *
     * @generated from protobuf enum value: LEVEL2 = 3;
     */
    LEVEL2 = 3,
    /**
     * Level 3.
     *
     * @generated from protobuf enum value: LEVEL3 = 4;
     */
    LEVEL3 = 4,
    /**
     * Level 4.
     *
     * @generated from protobuf enum value: LEVEL4 = 5;
     */
    LEVEL4 = 5,
    /**
     * Level 5.
     *
     * @generated from protobuf enum value: LEVEL5 = 6;
     */
    LEVEL5 = 6
}
// @generated message type with reflection information, may provide speed optimized methods
class ListingGroupFilterBiddingCategoryLevelEnum$Type extends MessageType<ListingGroupFilterBiddingCategoryLevelEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.ListingGroupFilterBiddingCategoryLevelEnum", []);
    }
    create(value?: PartialMessage<ListingGroupFilterBiddingCategoryLevelEnum>): ListingGroupFilterBiddingCategoryLevelEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ListingGroupFilterBiddingCategoryLevelEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListingGroupFilterBiddingCategoryLevelEnum): ListingGroupFilterBiddingCategoryLevelEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: ListingGroupFilterBiddingCategoryLevelEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.ListingGroupFilterBiddingCategoryLevelEnum
 */
export const ListingGroupFilterBiddingCategoryLevelEnum = new ListingGroupFilterBiddingCategoryLevelEnum$Type();
