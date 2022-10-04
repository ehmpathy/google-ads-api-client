// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/errors/feed_mapping_error.proto" (package "google.ads.googleads.v11.errors", syntax proto3)
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
// Proto file describing feed item errors.

/**
 * Container for enum describing possible feed item errors.
 *
 * @generated from protobuf message google.ads.googleads.v11.errors.FeedMappingErrorEnum
 */
export interface FeedMappingErrorEnum {
}
/**
 * Enum describing possible feed item errors.
 *
 * @generated from protobuf enum google.ads.googleads.v11.errors.FeedMappingErrorEnum.FeedMappingError
 */
export enum FeedMappingErrorEnum_FeedMappingError {
    /**
     * Enum unspecified.
     *
     * @generated from protobuf enum value: UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * The received error code is not known in this version.
     *
     * @generated from protobuf enum value: UNKNOWN = 1;
     */
    UNKNOWN = 1,
    /**
     * The given placeholder field does not exist.
     *
     * @generated from protobuf enum value: INVALID_PLACEHOLDER_FIELD = 2;
     */
    INVALID_PLACEHOLDER_FIELD = 2,
    /**
     * The given criterion field does not exist.
     *
     * @generated from protobuf enum value: INVALID_CRITERION_FIELD = 3;
     */
    INVALID_CRITERION_FIELD = 3,
    /**
     * The given placeholder type does not exist.
     *
     * @generated from protobuf enum value: INVALID_PLACEHOLDER_TYPE = 4;
     */
    INVALID_PLACEHOLDER_TYPE = 4,
    /**
     * The given criterion type does not exist.
     *
     * @generated from protobuf enum value: INVALID_CRITERION_TYPE = 5;
     */
    INVALID_CRITERION_TYPE = 5,
    /**
     * A feed mapping must contain at least one attribute field mapping.
     *
     * @generated from protobuf enum value: NO_ATTRIBUTE_FIELD_MAPPINGS = 7;
     */
    NO_ATTRIBUTE_FIELD_MAPPINGS = 7,
    /**
     * The type of the feed attribute referenced in the attribute field mapping
     * must match the type of the placeholder field.
     *
     * @generated from protobuf enum value: FEED_ATTRIBUTE_TYPE_MISMATCH = 8;
     */
    FEED_ATTRIBUTE_TYPE_MISMATCH = 8,
    /**
     * A feed mapping for a system generated feed cannot be operated on.
     *
     * @generated from protobuf enum value: CANNOT_OPERATE_ON_MAPPINGS_FOR_SYSTEM_GENERATED_FEED = 9;
     */
    CANNOT_OPERATE_ON_MAPPINGS_FOR_SYSTEM_GENERATED_FEED = 9,
    /**
     * Only one feed mapping for a placeholder type is allowed per feed or
     * customer (depending on the placeholder type).
     *
     * @generated from protobuf enum value: MULTIPLE_MAPPINGS_FOR_PLACEHOLDER_TYPE = 10;
     */
    MULTIPLE_MAPPINGS_FOR_PLACEHOLDER_TYPE = 10,
    /**
     * Only one feed mapping for a criterion type is allowed per customer.
     *
     * @generated from protobuf enum value: MULTIPLE_MAPPINGS_FOR_CRITERION_TYPE = 11;
     */
    MULTIPLE_MAPPINGS_FOR_CRITERION_TYPE = 11,
    /**
     * Only one feed attribute mapping for a placeholder field is allowed
     * (depending on the placeholder type).
     *
     * @generated from protobuf enum value: MULTIPLE_MAPPINGS_FOR_PLACEHOLDER_FIELD = 12;
     */
    MULTIPLE_MAPPINGS_FOR_PLACEHOLDER_FIELD = 12,
    /**
     * Only one feed attribute mapping for a criterion field is allowed
     * (depending on the criterion type).
     *
     * @generated from protobuf enum value: MULTIPLE_MAPPINGS_FOR_CRITERION_FIELD = 13;
     */
    MULTIPLE_MAPPINGS_FOR_CRITERION_FIELD = 13,
    /**
     * This feed mapping may not contain any explicit attribute field mappings.
     *
     * @generated from protobuf enum value: UNEXPECTED_ATTRIBUTE_FIELD_MAPPINGS = 14;
     */
    UNEXPECTED_ATTRIBUTE_FIELD_MAPPINGS = 14,
    /**
     * Location placeholder feed mappings can only be created for Places feeds.
     *
     * @generated from protobuf enum value: LOCATION_PLACEHOLDER_ONLY_FOR_PLACES_FEEDS = 15;
     */
    LOCATION_PLACEHOLDER_ONLY_FOR_PLACES_FEEDS = 15,
    /**
     * Mappings for typed feeds cannot be modified.
     *
     * @generated from protobuf enum value: CANNOT_MODIFY_MAPPINGS_FOR_TYPED_FEED = 16;
     */
    CANNOT_MODIFY_MAPPINGS_FOR_TYPED_FEED = 16,
    /**
     * The given placeholder type can only be mapped to system generated feeds.
     *
     * @generated from protobuf enum value: INVALID_PLACEHOLDER_TYPE_FOR_NON_SYSTEM_GENERATED_FEED = 17;
     */
    INVALID_PLACEHOLDER_TYPE_FOR_NON_SYSTEM_GENERATED_FEED = 17,
    /**
     * The given placeholder type cannot be mapped to a system generated feed
     * with the given type.
     *
     * @generated from protobuf enum value: INVALID_PLACEHOLDER_TYPE_FOR_SYSTEM_GENERATED_FEED_TYPE = 18;
     */
    INVALID_PLACEHOLDER_TYPE_FOR_SYSTEM_GENERATED_FEED_TYPE = 18,
    /**
     * The "field" oneof was not set in an AttributeFieldMapping.
     *
     * @generated from protobuf enum value: ATTRIBUTE_FIELD_MAPPING_MISSING_FIELD = 19;
     */
    ATTRIBUTE_FIELD_MAPPING_MISSING_FIELD = 19
}
// @generated message type with reflection information, may provide speed optimized methods
class FeedMappingErrorEnum$Type extends MessageType<FeedMappingErrorEnum> {
    constructor() {
        super("google.ads.googleads.v11.errors.FeedMappingErrorEnum", []);
    }
    create(value?: PartialMessage<FeedMappingErrorEnum>): FeedMappingErrorEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<FeedMappingErrorEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FeedMappingErrorEnum): FeedMappingErrorEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: FeedMappingErrorEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.errors.FeedMappingErrorEnum
 */
export const FeedMappingErrorEnum = new FeedMappingErrorEnum$Type();