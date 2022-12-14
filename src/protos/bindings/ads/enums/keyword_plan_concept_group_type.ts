// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/keyword_plan_concept_group_type.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
// Proto file describing Keyword Planner Concept Group types.

/**
 * Container for enumeration of keyword plan concept group types.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.KeywordPlanConceptGroupTypeEnum
 */
export interface KeywordPlanConceptGroupTypeEnum {
}
/**
 * Enumerates keyword plan concept group types.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.KeywordPlanConceptGroupTypeEnum.KeywordPlanConceptGroupType
 */
export enum KeywordPlanConceptGroupTypeEnum_KeywordPlanConceptGroupType {
    /**
     * The concept group classification different from brand/non-brand.
     * This is a catch all bucket for all classifications that are none of the
     * below.
     *
     * @generated from protobuf enum value: UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * The value is unknown in this version.
     *
     * @generated from protobuf enum value: UNKNOWN = 1;
     */
    UNKNOWN = 1,
    /**
     * The concept group classification is based on BRAND.
     *
     * @generated from protobuf enum value: BRAND = 2;
     */
    BRAND = 2,
    /**
     * The concept group classification based on BRAND, that didn't fit well
     * with the BRAND classifications. These are generally outliers and can have
     * very few keywords in this type of classification.
     *
     * @generated from protobuf enum value: OTHER_BRANDS = 3;
     */
    OTHER_BRANDS = 3,
    /**
     * These concept group classification is not based on BRAND. This is
     * returned for generic keywords that don't have a brand association.
     *
     * @generated from protobuf enum value: NON_BRAND = 4;
     */
    NON_BRAND = 4
}
// @generated message type with reflection information, may provide speed optimized methods
class KeywordPlanConceptGroupTypeEnum$Type extends MessageType<KeywordPlanConceptGroupTypeEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.KeywordPlanConceptGroupTypeEnum", []);
    }
    create(value?: PartialMessage<KeywordPlanConceptGroupTypeEnum>): KeywordPlanConceptGroupTypeEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<KeywordPlanConceptGroupTypeEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: KeywordPlanConceptGroupTypeEnum): KeywordPlanConceptGroupTypeEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: KeywordPlanConceptGroupTypeEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.KeywordPlanConceptGroupTypeEnum
 */
export const KeywordPlanConceptGroupTypeEnum = new KeywordPlanConceptGroupTypeEnum$Type();
