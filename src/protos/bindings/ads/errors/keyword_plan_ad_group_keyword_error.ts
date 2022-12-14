// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/errors/keyword_plan_ad_group_keyword_error.proto" (package "google.ads.googleads.v11.errors", syntax proto3)
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
// Proto file describing errors from applying a keyword plan ad group keyword or
// keyword plan campaign keyword.

/**
 * Container for enum describing possible errors from applying an ad group
 * keyword or a campaign keyword from a keyword plan.
 *
 * @generated from protobuf message google.ads.googleads.v11.errors.KeywordPlanAdGroupKeywordErrorEnum
 */
export interface KeywordPlanAdGroupKeywordErrorEnum {
}
/**
 * Enum describing possible errors from applying a keyword plan ad group
 * keyword or keyword plan campaign keyword.
 *
 * @generated from protobuf enum google.ads.googleads.v11.errors.KeywordPlanAdGroupKeywordErrorEnum.KeywordPlanAdGroupKeywordError
 */
export enum KeywordPlanAdGroupKeywordErrorEnum_KeywordPlanAdGroupKeywordError {
    /**
     * Enum unspecified.
     *
     * @generated from protobuf enum value: UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * The received error code is not known in this version.
     *
     * @generated from protobuf enum value: UNKNOWN = 1;
     */
    UNKNOWN = 1,
    /**
     * A keyword or negative keyword has invalid match type.
     *
     * @generated from protobuf enum value: INVALID_KEYWORD_MATCH_TYPE = 2;
     */
    INVALID_KEYWORD_MATCH_TYPE = 2,
    /**
     * A keyword or negative keyword with same text and match type already
     * exists.
     *
     * @generated from protobuf enum value: DUPLICATE_KEYWORD = 3;
     */
    DUPLICATE_KEYWORD = 3,
    /**
     * Keyword or negative keyword text exceeds the allowed limit.
     *
     * @generated from protobuf enum value: KEYWORD_TEXT_TOO_LONG = 4;
     */
    KEYWORD_TEXT_TOO_LONG = 4,
    /**
     * Keyword or negative keyword text has invalid characters or symbols.
     *
     * @generated from protobuf enum value: KEYWORD_HAS_INVALID_CHARS = 5;
     */
    KEYWORD_HAS_INVALID_CHARS = 5,
    /**
     * Keyword or negative keyword text has too many words.
     *
     * @generated from protobuf enum value: KEYWORD_HAS_TOO_MANY_WORDS = 6;
     */
    KEYWORD_HAS_TOO_MANY_WORDS = 6,
    /**
     * Keyword or negative keyword has invalid text.
     *
     * @generated from protobuf enum value: INVALID_KEYWORD_TEXT = 7;
     */
    INVALID_KEYWORD_TEXT = 7,
    /**
     * Cpc Bid set for negative keyword.
     *
     * @generated from protobuf enum value: NEGATIVE_KEYWORD_HAS_CPC_BID = 8;
     */
    NEGATIVE_KEYWORD_HAS_CPC_BID = 8,
    /**
     * New broad match modifier (BMM) KpAdGroupKeywords are not allowed.
     *
     * @generated from protobuf enum value: NEW_BMM_KEYWORDS_NOT_ALLOWED = 9;
     */
    NEW_BMM_KEYWORDS_NOT_ALLOWED = 9
}
// @generated message type with reflection information, may provide speed optimized methods
class KeywordPlanAdGroupKeywordErrorEnum$Type extends MessageType<KeywordPlanAdGroupKeywordErrorEnum> {
    constructor() {
        super("google.ads.googleads.v11.errors.KeywordPlanAdGroupKeywordErrorEnum", []);
    }
    create(value?: PartialMessage<KeywordPlanAdGroupKeywordErrorEnum>): KeywordPlanAdGroupKeywordErrorEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<KeywordPlanAdGroupKeywordErrorEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: KeywordPlanAdGroupKeywordErrorEnum): KeywordPlanAdGroupKeywordErrorEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: KeywordPlanAdGroupKeywordErrorEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.errors.KeywordPlanAdGroupKeywordErrorEnum
 */
export const KeywordPlanAdGroupKeywordErrorEnum = new KeywordPlanAdGroupKeywordErrorEnum$Type();
