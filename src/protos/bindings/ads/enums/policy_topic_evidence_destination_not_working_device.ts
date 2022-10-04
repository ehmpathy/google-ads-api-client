// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/policy_topic_evidence_destination_not_working_device.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
// Proto file describing device of destination not working policy topic
// evidence.

/**
 * Container for enum describing possible policy topic evidence destination not
 * working devices.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.PolicyTopicEvidenceDestinationNotWorkingDeviceEnum
 */
export interface PolicyTopicEvidenceDestinationNotWorkingDeviceEnum {
}
/**
 * The possible policy topic evidence destination not working devices.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.PolicyTopicEvidenceDestinationNotWorkingDeviceEnum.PolicyTopicEvidenceDestinationNotWorkingDevice
 */
export enum PolicyTopicEvidenceDestinationNotWorkingDeviceEnum_PolicyTopicEvidenceDestinationNotWorkingDevice {
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
     * Landing page doesn't work on desktop device.
     *
     * @generated from protobuf enum value: DESKTOP = 2;
     */
    DESKTOP = 2,
    /**
     * Landing page doesn't work on Android device.
     *
     * @generated from protobuf enum value: ANDROID = 3;
     */
    ANDROID = 3,
    /**
     * Landing page doesn't work on iOS device.
     *
     * @generated from protobuf enum value: IOS = 4;
     */
    IOS = 4
}
// @generated message type with reflection information, may provide speed optimized methods
class PolicyTopicEvidenceDestinationNotWorkingDeviceEnum$Type extends MessageType<PolicyTopicEvidenceDestinationNotWorkingDeviceEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.PolicyTopicEvidenceDestinationNotWorkingDeviceEnum", []);
    }
    create(value?: PartialMessage<PolicyTopicEvidenceDestinationNotWorkingDeviceEnum>): PolicyTopicEvidenceDestinationNotWorkingDeviceEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<PolicyTopicEvidenceDestinationNotWorkingDeviceEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PolicyTopicEvidenceDestinationNotWorkingDeviceEnum): PolicyTopicEvidenceDestinationNotWorkingDeviceEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: PolicyTopicEvidenceDestinationNotWorkingDeviceEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.PolicyTopicEvidenceDestinationNotWorkingDeviceEnum
 */
export const PolicyTopicEvidenceDestinationNotWorkingDeviceEnum = new PolicyTopicEvidenceDestinationNotWorkingDeviceEnum$Type();