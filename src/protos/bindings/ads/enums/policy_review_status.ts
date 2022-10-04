// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/policy_review_status.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
// Proto file describing policy review statuses.

/**
 * Container for enum describing possible policy review statuses.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.PolicyReviewStatusEnum
 */
export interface PolicyReviewStatusEnum {
}
/**
 * The possible policy review statuses.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.PolicyReviewStatusEnum.PolicyReviewStatus
 */
export enum PolicyReviewStatusEnum_PolicyReviewStatus {
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
     * Currently under review.
     *
     * @generated from protobuf enum value: REVIEW_IN_PROGRESS = 2;
     */
    REVIEW_IN_PROGRESS = 2,
    /**
     * Primary review complete. Other reviews may be continuing.
     *
     * @generated from protobuf enum value: REVIEWED = 3;
     */
    REVIEWED = 3,
    /**
     * The resource has been resubmitted for approval or its policy decision has
     * been appealed.
     *
     * @generated from protobuf enum value: UNDER_APPEAL = 4;
     */
    UNDER_APPEAL = 4,
    /**
     * The resource is eligible and may be serving but could still undergo
     * further review.
     *
     * @generated from protobuf enum value: ELIGIBLE_MAY_SERVE = 5;
     */
    ELIGIBLE_MAY_SERVE = 5
}
// @generated message type with reflection information, may provide speed optimized methods
class PolicyReviewStatusEnum$Type extends MessageType<PolicyReviewStatusEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.PolicyReviewStatusEnum", []);
    }
    create(value?: PartialMessage<PolicyReviewStatusEnum>): PolicyReviewStatusEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<PolicyReviewStatusEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PolicyReviewStatusEnum): PolicyReviewStatusEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: PolicyReviewStatusEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.PolicyReviewStatusEnum
 */
export const PolicyReviewStatusEnum = new PolicyReviewStatusEnum$Type();
