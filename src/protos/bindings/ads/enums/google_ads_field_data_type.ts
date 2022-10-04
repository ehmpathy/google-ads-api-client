// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/google_ads_field_data_type.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
// Proto file describing GoogleAdsField data types.

/**
 * Container holding the various data types.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.GoogleAdsFieldDataTypeEnum
 */
export interface GoogleAdsFieldDataTypeEnum {
}
/**
 * These are the various types a GoogleAdsService artifact may take on.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.GoogleAdsFieldDataTypeEnum.GoogleAdsFieldDataType
 */
export enum GoogleAdsFieldDataTypeEnum_GoogleAdsFieldDataType {
    /**
     * Unspecified
     *
     * @generated from protobuf enum value: UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Unknown
     *
     * @generated from protobuf enum value: UNKNOWN = 1;
     */
    UNKNOWN = 1,
    /**
     * Maps to google.protobuf.BoolValue
     *
     * Applicable operators:  =, !=
     *
     * @generated from protobuf enum value: BOOLEAN = 2;
     */
    BOOLEAN = 2,
    /**
     * Maps to google.protobuf.StringValue. It can be compared using the set of
     * operators specific to dates however.
     *
     * Applicable operators:  =, <, >, <=, >=, BETWEEN, DURING, and IN
     *
     * @generated from protobuf enum value: DATE = 3;
     */
    DATE = 3,
    /**
     * Maps to google.protobuf.DoubleValue
     *
     * Applicable operators:  =, !=, <, >, IN, NOT IN
     *
     * @generated from protobuf enum value: DOUBLE = 4;
     */
    DOUBLE = 4,
    /**
     * Maps to an enum. It's specific definition can be found at type_url.
     *
     * Applicable operators:  =, !=, IN, NOT IN
     *
     * @generated from protobuf enum value: ENUM = 5;
     */
    ENUM = 5,
    /**
     * Maps to google.protobuf.FloatValue
     *
     * Applicable operators:  =, !=, <, >, IN, NOT IN
     *
     * @generated from protobuf enum value: FLOAT = 6;
     */
    FLOAT = 6,
    /**
     * Maps to google.protobuf.Int32Value
     *
     * Applicable operators:  =, !=, <, >, <=, >=, BETWEEN, IN, NOT IN
     *
     * @generated from protobuf enum value: INT32 = 7;
     */
    INT32 = 7,
    /**
     * Maps to google.protobuf.Int64Value
     *
     * Applicable operators:  =, !=, <, >, <=, >=, BETWEEN, IN, NOT IN
     *
     * @generated from protobuf enum value: INT64 = 8;
     */
    INT64 = 8,
    /**
     * Maps to a protocol buffer message type. The data type's details can be
     * found in type_url.
     *
     * No operators work with MESSAGE fields.
     *
     * @generated from protobuf enum value: MESSAGE = 9;
     */
    MESSAGE = 9,
    /**
     * Maps to google.protobuf.StringValue. Represents the resource name
     * (unique id) of a resource or one of its foreign keys.
     *
     * No operators work with RESOURCE_NAME fields.
     *
     * @generated from protobuf enum value: RESOURCE_NAME = 10;
     */
    RESOURCE_NAME = 10,
    /**
     * Maps to google.protobuf.StringValue.
     *
     * Applicable operators:  =, !=, LIKE, NOT LIKE, IN, NOT IN
     *
     * @generated from protobuf enum value: STRING = 11;
     */
    STRING = 11,
    /**
     * Maps to google.protobuf.UInt64Value
     *
     * Applicable operators:  =, !=, <, >, <=, >=, BETWEEN, IN, NOT IN
     *
     * @generated from protobuf enum value: UINT64 = 12;
     */
    UINT64 = 12
}
// @generated message type with reflection information, may provide speed optimized methods
class GoogleAdsFieldDataTypeEnum$Type extends MessageType<GoogleAdsFieldDataTypeEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.GoogleAdsFieldDataTypeEnum", []);
    }
    create(value?: PartialMessage<GoogleAdsFieldDataTypeEnum>): GoogleAdsFieldDataTypeEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GoogleAdsFieldDataTypeEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GoogleAdsFieldDataTypeEnum): GoogleAdsFieldDataTypeEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: GoogleAdsFieldDataTypeEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.GoogleAdsFieldDataTypeEnum
 */
export const GoogleAdsFieldDataTypeEnum = new GoogleAdsFieldDataTypeEnum$Type();
