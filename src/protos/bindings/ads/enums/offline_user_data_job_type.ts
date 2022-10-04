// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/offline_user_data_job_type.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
// Proto file describing offline user data job types.

/**
 * Container for enum describing types of an offline user data job.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.OfflineUserDataJobTypeEnum
 */
export interface OfflineUserDataJobTypeEnum {
}
/**
 * The type of an offline user data job.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.OfflineUserDataJobTypeEnum.OfflineUserDataJobType
 */
export enum OfflineUserDataJobTypeEnum_OfflineUserDataJobType {
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
     * Store Sales Direct data for self service.
     *
     * @generated from protobuf enum value: STORE_SALES_UPLOAD_FIRST_PARTY = 2;
     */
    STORE_SALES_UPLOAD_FIRST_PARTY = 2,
    /**
     * Store Sales Direct data for third party.
     *
     * @generated from protobuf enum value: STORE_SALES_UPLOAD_THIRD_PARTY = 3;
     */
    STORE_SALES_UPLOAD_THIRD_PARTY = 3,
    /**
     * Customer Match user list data.
     *
     * @generated from protobuf enum value: CUSTOMER_MATCH_USER_LIST = 4;
     */
    CUSTOMER_MATCH_USER_LIST = 4,
    /**
     * Customer Match with attribute data.
     *
     * @generated from protobuf enum value: CUSTOMER_MATCH_WITH_ATTRIBUTES = 5;
     */
    CUSTOMER_MATCH_WITH_ATTRIBUTES = 5
}
// @generated message type with reflection information, may provide speed optimized methods
class OfflineUserDataJobTypeEnum$Type extends MessageType<OfflineUserDataJobTypeEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.OfflineUserDataJobTypeEnum", []);
    }
    create(value?: PartialMessage<OfflineUserDataJobTypeEnum>): OfflineUserDataJobTypeEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<OfflineUserDataJobTypeEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: OfflineUserDataJobTypeEnum): OfflineUserDataJobTypeEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: OfflineUserDataJobTypeEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.OfflineUserDataJobTypeEnum
 */
export const OfflineUserDataJobTypeEnum = new OfflineUserDataJobTypeEnum$Type();
