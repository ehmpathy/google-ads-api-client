// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/lead_form_desired_intent.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
/**
 * Describes the chosen level of intent of generated leads.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.LeadFormDesiredIntentEnum
 */
export interface LeadFormDesiredIntentEnum {
}
/**
 * Enum describing the chosen level of intent of generated leads.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.LeadFormDesiredIntentEnum.LeadFormDesiredIntent
 */
export enum LeadFormDesiredIntentEnum_LeadFormDesiredIntent {
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
     * Deliver more leads at a potentially lower quality.
     *
     * @generated from protobuf enum value: LOW_INTENT = 2;
     */
    LOW_INTENT = 2,
    /**
     * Deliver leads that are more qualified.
     *
     * @generated from protobuf enum value: HIGH_INTENT = 3;
     */
    HIGH_INTENT = 3
}
// @generated message type with reflection information, may provide speed optimized methods
class LeadFormDesiredIntentEnum$Type extends MessageType<LeadFormDesiredIntentEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.LeadFormDesiredIntentEnum", []);
    }
    create(value?: PartialMessage<LeadFormDesiredIntentEnum>): LeadFormDesiredIntentEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<LeadFormDesiredIntentEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LeadFormDesiredIntentEnum): LeadFormDesiredIntentEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: LeadFormDesiredIntentEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.LeadFormDesiredIntentEnum
 */
export const LeadFormDesiredIntentEnum = new LeadFormDesiredIntentEnum$Type();
