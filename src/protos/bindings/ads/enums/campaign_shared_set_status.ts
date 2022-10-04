// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/campaign_shared_set_status.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
// Proto file describing campaign shared set statuses.

/**
 * Container for enum describing types of campaign shared set statuses.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.CampaignSharedSetStatusEnum
 */
export interface CampaignSharedSetStatusEnum {
}
/**
 * Enum listing the possible campaign shared set statuses.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.CampaignSharedSetStatusEnum.CampaignSharedSetStatus
 */
export enum CampaignSharedSetStatusEnum_CampaignSharedSetStatus {
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
     * The campaign shared set is enabled.
     *
     * @generated from protobuf enum value: ENABLED = 2;
     */
    ENABLED = 2,
    /**
     * The campaign shared set is removed and can no longer be used.
     *
     * @generated from protobuf enum value: REMOVED = 3;
     */
    REMOVED = 3
}
// @generated message type with reflection information, may provide speed optimized methods
class CampaignSharedSetStatusEnum$Type extends MessageType<CampaignSharedSetStatusEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.CampaignSharedSetStatusEnum", []);
    }
    create(value?: PartialMessage<CampaignSharedSetStatusEnum>): CampaignSharedSetStatusEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CampaignSharedSetStatusEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CampaignSharedSetStatusEnum): CampaignSharedSetStatusEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: CampaignSharedSetStatusEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.CampaignSharedSetStatusEnum
 */
export const CampaignSharedSetStatusEnum = new CampaignSharedSetStatusEnum$Type();
