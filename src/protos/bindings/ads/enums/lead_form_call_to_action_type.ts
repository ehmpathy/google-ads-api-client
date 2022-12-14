// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/lead_form_call_to_action_type.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
 * Describes the type of call-to-action phrases in a lead form.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.LeadFormCallToActionTypeEnum
 */
export interface LeadFormCallToActionTypeEnum {
}
/**
 * Enum describing the type of call-to-action phrases in a lead form.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.LeadFormCallToActionTypeEnum.LeadFormCallToActionType
 */
export enum LeadFormCallToActionTypeEnum_LeadFormCallToActionType {
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
     * Learn more.
     *
     * @generated from protobuf enum value: LEARN_MORE = 2;
     */
    LEARN_MORE = 2,
    /**
     * Get quote.
     *
     * @generated from protobuf enum value: GET_QUOTE = 3;
     */
    GET_QUOTE = 3,
    /**
     * Apply now.
     *
     * @generated from protobuf enum value: APPLY_NOW = 4;
     */
    APPLY_NOW = 4,
    /**
     * Sign Up.
     *
     * @generated from protobuf enum value: SIGN_UP = 5;
     */
    SIGN_UP = 5,
    /**
     * Contact us.
     *
     * @generated from protobuf enum value: CONTACT_US = 6;
     */
    CONTACT_US = 6,
    /**
     * Subscribe.
     *
     * @generated from protobuf enum value: SUBSCRIBE = 7;
     */
    SUBSCRIBE = 7,
    /**
     * Download.
     *
     * @generated from protobuf enum value: DOWNLOAD = 8;
     */
    DOWNLOAD = 8,
    /**
     * Book now.
     *
     * @generated from protobuf enum value: BOOK_NOW = 9;
     */
    BOOK_NOW = 9,
    /**
     * Get offer.
     *
     * @generated from protobuf enum value: GET_OFFER = 10;
     */
    GET_OFFER = 10,
    /**
     * Register.
     *
     * @generated from protobuf enum value: REGISTER = 11;
     */
    REGISTER = 11,
    /**
     * Get info.
     *
     * @generated from protobuf enum value: GET_INFO = 12;
     */
    GET_INFO = 12,
    /**
     * Request a demo.
     *
     * @generated from protobuf enum value: REQUEST_DEMO = 13;
     */
    REQUEST_DEMO = 13,
    /**
     * Join now.
     *
     * @generated from protobuf enum value: JOIN_NOW = 14;
     */
    JOIN_NOW = 14,
    /**
     * Get started.
     *
     * @generated from protobuf enum value: GET_STARTED = 15;
     */
    GET_STARTED = 15
}
// @generated message type with reflection information, may provide speed optimized methods
class LeadFormCallToActionTypeEnum$Type extends MessageType<LeadFormCallToActionTypeEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.LeadFormCallToActionTypeEnum", []);
    }
    create(value?: PartialMessage<LeadFormCallToActionTypeEnum>): LeadFormCallToActionTypeEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<LeadFormCallToActionTypeEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LeadFormCallToActionTypeEnum): LeadFormCallToActionTypeEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: LeadFormCallToActionTypeEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.LeadFormCallToActionTypeEnum
 */
export const LeadFormCallToActionTypeEnum = new LeadFormCallToActionTypeEnum$Type();
