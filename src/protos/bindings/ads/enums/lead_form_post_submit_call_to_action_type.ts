// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/lead_form_post_submit_call_to_action_type.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
 * Describes the type of post-submit call-to-action phrases for a lead form.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.LeadFormPostSubmitCallToActionTypeEnum
 */
export interface LeadFormPostSubmitCallToActionTypeEnum {
}
/**
 * Enum describing the type of post-submit call-to-action phrases for a lead
 * form.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.LeadFormPostSubmitCallToActionTypeEnum.LeadFormPostSubmitCallToActionType
 */
export enum LeadFormPostSubmitCallToActionTypeEnum_LeadFormPostSubmitCallToActionType {
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
     * Visit site.
     *
     * @generated from protobuf enum value: VISIT_SITE = 2;
     */
    VISIT_SITE = 2,
    /**
     * Download.
     *
     * @generated from protobuf enum value: DOWNLOAD = 3;
     */
    DOWNLOAD = 3,
    /**
     * Learn more.
     *
     * @generated from protobuf enum value: LEARN_MORE = 4;
     */
    LEARN_MORE = 4,
    /**
     * Shop now.
     *
     * @generated from protobuf enum value: SHOP_NOW = 5;
     */
    SHOP_NOW = 5
}
// @generated message type with reflection information, may provide speed optimized methods
class LeadFormPostSubmitCallToActionTypeEnum$Type extends MessageType<LeadFormPostSubmitCallToActionTypeEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.LeadFormPostSubmitCallToActionTypeEnum", []);
    }
    create(value?: PartialMessage<LeadFormPostSubmitCallToActionTypeEnum>): LeadFormPostSubmitCallToActionTypeEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<LeadFormPostSubmitCallToActionTypeEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LeadFormPostSubmitCallToActionTypeEnum): LeadFormPostSubmitCallToActionTypeEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: LeadFormPostSubmitCallToActionTypeEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.LeadFormPostSubmitCallToActionTypeEnum
 */
export const LeadFormPostSubmitCallToActionTypeEnum = new LeadFormPostSubmitCallToActionTypeEnum$Type();
