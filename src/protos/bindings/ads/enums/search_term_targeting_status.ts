// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/search_term_targeting_status.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
// Proto file describing search term targeting statuses.

/**
 * Container for enum indicating whether a search term is one of your targeted
 * or excluded keywords.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.SearchTermTargetingStatusEnum
 */
export interface SearchTermTargetingStatusEnum {
}
/**
 * Indicates whether the search term is one of your targeted or excluded
 * keywords.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.SearchTermTargetingStatusEnum.SearchTermTargetingStatus
 */
export enum SearchTermTargetingStatusEnum_SearchTermTargetingStatus {
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
     * Search term is added to targeted keywords.
     *
     * @generated from protobuf enum value: ADDED = 2;
     */
    ADDED = 2,
    /**
     * Search term matches a negative keyword.
     *
     * @generated from protobuf enum value: EXCLUDED = 3;
     */
    EXCLUDED = 3,
    /**
     * Search term has been both added and excluded.
     *
     * @generated from protobuf enum value: ADDED_EXCLUDED = 4;
     */
    ADDED_EXCLUDED = 4,
    /**
     * Search term is neither targeted nor excluded.
     *
     * @generated from protobuf enum value: NONE = 5;
     */
    NONE = 5
}
// @generated message type with reflection information, may provide speed optimized methods
class SearchTermTargetingStatusEnum$Type extends MessageType<SearchTermTargetingStatusEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.SearchTermTargetingStatusEnum", []);
    }
    create(value?: PartialMessage<SearchTermTargetingStatusEnum>): SearchTermTargetingStatusEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SearchTermTargetingStatusEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SearchTermTargetingStatusEnum): SearchTermTargetingStatusEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: SearchTermTargetingStatusEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.SearchTermTargetingStatusEnum
 */
export const SearchTermTargetingStatusEnum = new SearchTermTargetingStatusEnum$Type();
