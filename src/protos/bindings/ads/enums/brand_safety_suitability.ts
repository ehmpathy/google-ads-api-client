// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/brand_safety_suitability.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
// Proto file describing brand safety suitability settings.

/**
 * Container for enum with 3-Tier brand safety suitability control.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.BrandSafetySuitabilityEnum
 */
export interface BrandSafetySuitabilityEnum {
}
/**
 * 3-Tier brand safety suitability control.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.BrandSafetySuitabilityEnum.BrandSafetySuitability
 */
export enum BrandSafetySuitabilityEnum_BrandSafetySuitability {
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
     * This option lets you show ads across all inventory on YouTube and video
     * partners that meet our standards for monetization. This option may be an
     * appropriate choice for brands that want maximum access to the full
     * breadth of videos eligible for ads, including, for example, videos that
     * have strong profanity in the context of comedy or a documentary, or
     * excessive violence as featured in video games.
     *
     * @generated from protobuf enum value: EXPANDED_INVENTORY = 2;
     */
    EXPANDED_INVENTORY = 2,
    /**
     * This option lets you show ads across a wide range of content that's
     * appropriate for most brands, such as popular music videos, documentaries,
     * and movie trailers. The content you can show ads on is based on YouTube's
     * advertiser-friendly content guidelines that take into account, for
     * example, the strength or frequency of profanity, or the appropriateness
     * of subject matter like sensitive events. Ads won't show, for example, on
     * content with repeated strong profanity, strong sexual content, or graphic
     * violence.
     *
     * @generated from protobuf enum value: STANDARD_INVENTORY = 3;
     */
    STANDARD_INVENTORY = 3,
    /**
     * This option lets you show ads on a reduced range of content that's
     * appropriate for brands with particularly strict guidelines around
     * inappropriate language and sexual suggestiveness; above and beyond what
     * YouTube's advertiser-friendly content guidelines address. The videos
     * accessible in this sensitive category meet heightened requirements,
     * especially for inappropriate language and sexual suggestiveness. For
     * example, your ads will be excluded from showing on some of YouTube's most
     * popular music videos and other pop culture content across YouTube and
     * Google video partners.
     *
     * @generated from protobuf enum value: LIMITED_INVENTORY = 4;
     */
    LIMITED_INVENTORY = 4
}
// @generated message type with reflection information, may provide speed optimized methods
class BrandSafetySuitabilityEnum$Type extends MessageType<BrandSafetySuitabilityEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.BrandSafetySuitabilityEnum", []);
    }
    create(value?: PartialMessage<BrandSafetySuitabilityEnum>): BrandSafetySuitabilityEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<BrandSafetySuitabilityEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BrandSafetySuitabilityEnum): BrandSafetySuitabilityEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: BrandSafetySuitabilityEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.BrandSafetySuitabilityEnum
 */
export const BrandSafetySuitabilityEnum = new BrandSafetySuitabilityEnum$Type();
