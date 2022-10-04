// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/errors/feed_error.proto" (package "google.ads.googleads.v11.errors", syntax proto3)
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
// Proto file describing feed errors.

/**
 * Container for enum describing possible feed errors.
 *
 * @generated from protobuf message google.ads.googleads.v11.errors.FeedErrorEnum
 */
export interface FeedErrorEnum {
}
/**
 * Enum describing possible feed errors.
 *
 * @generated from protobuf enum google.ads.googleads.v11.errors.FeedErrorEnum.FeedError
 */
export enum FeedErrorEnum_FeedError {
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
     * The names of the FeedAttributes must be unique.
     *
     * @generated from protobuf enum value: ATTRIBUTE_NAMES_NOT_UNIQUE = 2;
     */
    ATTRIBUTE_NAMES_NOT_UNIQUE = 2,
    /**
     * The attribute list must be an exact copy of the existing list if the
     * attribute ID's are present.
     *
     * @generated from protobuf enum value: ATTRIBUTES_DO_NOT_MATCH_EXISTING_ATTRIBUTES = 3;
     */
    ATTRIBUTES_DO_NOT_MATCH_EXISTING_ATTRIBUTES = 3,
    /**
     * Cannot specify USER origin for a system generated feed.
     *
     * @generated from protobuf enum value: CANNOT_SPECIFY_USER_ORIGIN_FOR_SYSTEM_FEED = 4;
     */
    CANNOT_SPECIFY_USER_ORIGIN_FOR_SYSTEM_FEED = 4,
    /**
     * Cannot specify GOOGLE origin for a non-system generated feed.
     *
     * @generated from protobuf enum value: CANNOT_SPECIFY_GOOGLE_ORIGIN_FOR_NON_SYSTEM_FEED = 5;
     */
    CANNOT_SPECIFY_GOOGLE_ORIGIN_FOR_NON_SYSTEM_FEED = 5,
    /**
     * Cannot specify feed attributes for system feed.
     *
     * @generated from protobuf enum value: CANNOT_SPECIFY_FEED_ATTRIBUTES_FOR_SYSTEM_FEED = 6;
     */
    CANNOT_SPECIFY_FEED_ATTRIBUTES_FOR_SYSTEM_FEED = 6,
    /**
     * Cannot update FeedAttributes on feed with origin GOOGLE.
     *
     * @generated from protobuf enum value: CANNOT_UPDATE_FEED_ATTRIBUTES_WITH_ORIGIN_GOOGLE = 7;
     */
    CANNOT_UPDATE_FEED_ATTRIBUTES_WITH_ORIGIN_GOOGLE = 7,
    /**
     * The given ID refers to a removed Feed. Removed Feeds are immutable.
     *
     * @generated from protobuf enum value: FEED_REMOVED = 8;
     */
    FEED_REMOVED = 8,
    /**
     * The origin of the feed is not valid for the client.
     *
     * @generated from protobuf enum value: INVALID_ORIGIN_VALUE = 9;
     */
    INVALID_ORIGIN_VALUE = 9,
    /**
     * A user can only create and modify feeds with USER origin.
     *
     * @generated from protobuf enum value: FEED_ORIGIN_IS_NOT_USER = 10;
     */
    FEED_ORIGIN_IS_NOT_USER = 10,
    /**
     * Invalid auth token for the given email.
     *
     * @generated from protobuf enum value: INVALID_AUTH_TOKEN_FOR_EMAIL = 11;
     */
    INVALID_AUTH_TOKEN_FOR_EMAIL = 11,
    /**
     * Invalid email specified.
     *
     * @generated from protobuf enum value: INVALID_EMAIL = 12;
     */
    INVALID_EMAIL = 12,
    /**
     * Feed name matches that of another active Feed.
     *
     * @generated from protobuf enum value: DUPLICATE_FEED_NAME = 13;
     */
    DUPLICATE_FEED_NAME = 13,
    /**
     * Name of feed is not allowed.
     *
     * @generated from protobuf enum value: INVALID_FEED_NAME = 14;
     */
    INVALID_FEED_NAME = 14,
    /**
     * Missing OAuthInfo.
     *
     * @generated from protobuf enum value: MISSING_OAUTH_INFO = 15;
     */
    MISSING_OAUTH_INFO = 15,
    /**
     * New FeedAttributes must not affect the unique key.
     *
     * @generated from protobuf enum value: NEW_ATTRIBUTE_CANNOT_BE_PART_OF_UNIQUE_KEY = 16;
     */
    NEW_ATTRIBUTE_CANNOT_BE_PART_OF_UNIQUE_KEY = 16,
    /**
     * Too many FeedAttributes for a Feed.
     *
     * @generated from protobuf enum value: TOO_MANY_ATTRIBUTES = 17;
     */
    TOO_MANY_ATTRIBUTES = 17,
    /**
     * The business account is not valid.
     *
     * @generated from protobuf enum value: INVALID_BUSINESS_ACCOUNT = 18;
     */
    INVALID_BUSINESS_ACCOUNT = 18,
    /**
     * Business account cannot access Business Profile.
     *
     * @generated from protobuf enum value: BUSINESS_ACCOUNT_CANNOT_ACCESS_LOCATION_ACCOUNT = 19;
     */
    BUSINESS_ACCOUNT_CANNOT_ACCESS_LOCATION_ACCOUNT = 19,
    /**
     * Invalid chain ID provided for affiliate location feed.
     *
     * @generated from protobuf enum value: INVALID_AFFILIATE_CHAIN_ID = 20;
     */
    INVALID_AFFILIATE_CHAIN_ID = 20,
    /**
     * There is already a feed with the given system feed generation data.
     *
     * @generated from protobuf enum value: DUPLICATE_SYSTEM_FEED = 21;
     */
    DUPLICATE_SYSTEM_FEED = 21,
    /**
     * An error occurred accessing Business Profile.
     *
     * @generated from protobuf enum value: GMB_ACCESS_ERROR = 22;
     */
    GMB_ACCESS_ERROR = 22,
    /**
     * A customer cannot have both LOCATION and AFFILIATE_LOCATION feeds.
     *
     * @generated from protobuf enum value: CANNOT_HAVE_LOCATION_AND_AFFILIATE_LOCATION_FEEDS = 23;
     */
    CANNOT_HAVE_LOCATION_AND_AFFILIATE_LOCATION_FEEDS = 23,
    /**
     * Feed-based extension is read-only for this extension type.
     *
     * @generated from protobuf enum value: LEGACY_EXTENSION_TYPE_READ_ONLY = 24;
     */
    LEGACY_EXTENSION_TYPE_READ_ONLY = 24
}
// @generated message type with reflection information, may provide speed optimized methods
class FeedErrorEnum$Type extends MessageType<FeedErrorEnum> {
    constructor() {
        super("google.ads.googleads.v11.errors.FeedErrorEnum", []);
    }
    create(value?: PartialMessage<FeedErrorEnum>): FeedErrorEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<FeedErrorEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FeedErrorEnum): FeedErrorEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: FeedErrorEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.errors.FeedErrorEnum
 */
export const FeedErrorEnum = new FeedErrorEnum$Type();