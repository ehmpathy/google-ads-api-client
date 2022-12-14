// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/policy_topic_entry_type.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
// Proto file describing policy topic entry types.

/**
 * Container for enum describing possible policy topic entry types.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.PolicyTopicEntryTypeEnum
 */
export interface PolicyTopicEntryTypeEnum {
}
/**
 * The possible policy topic entry types.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.PolicyTopicEntryTypeEnum.PolicyTopicEntryType
 */
export enum PolicyTopicEntryTypeEnum_PolicyTopicEntryType {
    /**
     * No value has been specified.
     *
     * @generated from protobuf enum value: UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * The received value is not known in this version.
     *
     * This is a response-only value.
     *
     * @generated from protobuf enum value: UNKNOWN = 1;
     */
    UNKNOWN = 1,
    /**
     * The resource will not be served.
     *
     * @generated from protobuf enum value: PROHIBITED = 2;
     */
    PROHIBITED = 2,
    /**
     * The resource will not be served under some circumstances.
     *
     * @generated from protobuf enum value: LIMITED = 4;
     */
    LIMITED = 4,
    /**
     * The resource cannot serve at all because of the current targeting
     * criteria.
     *
     * @generated from protobuf enum value: FULLY_LIMITED = 8;
     */
    FULLY_LIMITED = 8,
    /**
     * May be of interest, but does not limit how the resource is served.
     *
     * @generated from protobuf enum value: DESCRIPTIVE = 5;
     */
    DESCRIPTIVE = 5,
    /**
     * Could increase coverage beyond normal.
     *
     * @generated from protobuf enum value: BROADENING = 6;
     */
    BROADENING = 6,
    /**
     * Constrained for all targeted countries, but may serve in other countries
     * through area of interest.
     *
     * @generated from protobuf enum value: AREA_OF_INTEREST_ONLY = 7;
     */
    AREA_OF_INTEREST_ONLY = 7
}
// @generated message type with reflection information, may provide speed optimized methods
class PolicyTopicEntryTypeEnum$Type extends MessageType<PolicyTopicEntryTypeEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.PolicyTopicEntryTypeEnum", []);
    }
    create(value?: PartialMessage<PolicyTopicEntryTypeEnum>): PolicyTopicEntryTypeEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<PolicyTopicEntryTypeEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PolicyTopicEntryTypeEnum): PolicyTopicEntryTypeEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: PolicyTopicEntryTypeEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.PolicyTopicEntryTypeEnum
 */
export const PolicyTopicEntryTypeEnum = new PolicyTopicEntryTypeEnum$Type();
