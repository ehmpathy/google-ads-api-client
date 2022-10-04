// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/conversion_action_type.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
// Proto file describing conversion action type.

/**
 * Container for enum describing possible types of a conversion action.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.ConversionActionTypeEnum
 */
export interface ConversionActionTypeEnum {
}
/**
 * Possible types of a conversion action.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.ConversionActionTypeEnum.ConversionActionType
 */
export enum ConversionActionTypeEnum_ConversionActionType {
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
     * Conversions that occur when a user clicks on an ad's call extension.
     *
     * @generated from protobuf enum value: AD_CALL = 2;
     */
    AD_CALL = 2,
    /**
     * Conversions that occur when a user on a mobile device clicks a phone
     * number.
     *
     * @generated from protobuf enum value: CLICK_TO_CALL = 3;
     */
    CLICK_TO_CALL = 3,
    /**
     * Conversions that occur when a user downloads a mobile app from the Google
     * Play Store.
     *
     * @generated from protobuf enum value: GOOGLE_PLAY_DOWNLOAD = 4;
     */
    GOOGLE_PLAY_DOWNLOAD = 4,
    /**
     * Conversions that occur when a user makes a purchase in an app through
     * Android billing.
     *
     * @generated from protobuf enum value: GOOGLE_PLAY_IN_APP_PURCHASE = 5;
     */
    GOOGLE_PLAY_IN_APP_PURCHASE = 5,
    /**
     * Call conversions that are tracked by the advertiser and uploaded.
     *
     * @generated from protobuf enum value: UPLOAD_CALLS = 6;
     */
    UPLOAD_CALLS = 6,
    /**
     * Conversions that are tracked by the advertiser and uploaded with
     * attributed clicks.
     *
     * @generated from protobuf enum value: UPLOAD_CLICKS = 7;
     */
    UPLOAD_CLICKS = 7,
    /**
     * Conversions that occur on a webpage.
     *
     * @generated from protobuf enum value: WEBPAGE = 8;
     */
    WEBPAGE = 8,
    /**
     * Conversions that occur when a user calls a dynamically-generated phone
     * number from an advertiser's website.
     *
     * @generated from protobuf enum value: WEBSITE_CALL = 9;
     */
    WEBSITE_CALL = 9,
    /**
     * Store Sales conversion based on first-party or third-party merchant
     * data uploads.
     * Only customers on the allowlist can use store sales direct upload types.
     *
     * @generated from protobuf enum value: STORE_SALES_DIRECT_UPLOAD = 10;
     */
    STORE_SALES_DIRECT_UPLOAD = 10,
    /**
     * Store Sales conversion based on first-party or third-party merchant
     * data uploads and/or from in-store purchases using cards from payment
     * networks.
     * Only customers on the allowlist can use store sales types.
     * Read only.
     *
     * @generated from protobuf enum value: STORE_SALES = 11;
     */
    STORE_SALES = 11,
    /**
     * Android app first open conversions tracked through Firebase.
     *
     * @generated from protobuf enum value: FIREBASE_ANDROID_FIRST_OPEN = 12;
     */
    FIREBASE_ANDROID_FIRST_OPEN = 12,
    /**
     * Android app in app purchase conversions tracked through Firebase.
     *
     * @generated from protobuf enum value: FIREBASE_ANDROID_IN_APP_PURCHASE = 13;
     */
    FIREBASE_ANDROID_IN_APP_PURCHASE = 13,
    /**
     * Android app custom conversions tracked through Firebase.
     *
     * @generated from protobuf enum value: FIREBASE_ANDROID_CUSTOM = 14;
     */
    FIREBASE_ANDROID_CUSTOM = 14,
    /**
     * iOS app first open conversions tracked through Firebase.
     *
     * @generated from protobuf enum value: FIREBASE_IOS_FIRST_OPEN = 15;
     */
    FIREBASE_IOS_FIRST_OPEN = 15,
    /**
     * iOS app in app purchase conversions tracked through Firebase.
     *
     * @generated from protobuf enum value: FIREBASE_IOS_IN_APP_PURCHASE = 16;
     */
    FIREBASE_IOS_IN_APP_PURCHASE = 16,
    /**
     * iOS app custom conversions tracked through Firebase.
     *
     * @generated from protobuf enum value: FIREBASE_IOS_CUSTOM = 17;
     */
    FIREBASE_IOS_CUSTOM = 17,
    /**
     * Android app first open conversions tracked through Third Party App
     * Analytics.
     *
     * @generated from protobuf enum value: THIRD_PARTY_APP_ANALYTICS_ANDROID_FIRST_OPEN = 18;
     */
    THIRD_PARTY_APP_ANALYTICS_ANDROID_FIRST_OPEN = 18,
    /**
     * Android app in app purchase conversions tracked through Third Party App
     * Analytics.
     *
     * @generated from protobuf enum value: THIRD_PARTY_APP_ANALYTICS_ANDROID_IN_APP_PURCHASE = 19;
     */
    THIRD_PARTY_APP_ANALYTICS_ANDROID_IN_APP_PURCHASE = 19,
    /**
     * Android app custom conversions tracked through Third Party App Analytics.
     *
     * @generated from protobuf enum value: THIRD_PARTY_APP_ANALYTICS_ANDROID_CUSTOM = 20;
     */
    THIRD_PARTY_APP_ANALYTICS_ANDROID_CUSTOM = 20,
    /**
     * iOS app first open conversions tracked through Third Party App Analytics.
     *
     * @generated from protobuf enum value: THIRD_PARTY_APP_ANALYTICS_IOS_FIRST_OPEN = 21;
     */
    THIRD_PARTY_APP_ANALYTICS_IOS_FIRST_OPEN = 21,
    /**
     * iOS app in app purchase conversions tracked through Third Party App
     * Analytics.
     *
     * @generated from protobuf enum value: THIRD_PARTY_APP_ANALYTICS_IOS_IN_APP_PURCHASE = 22;
     */
    THIRD_PARTY_APP_ANALYTICS_IOS_IN_APP_PURCHASE = 22,
    /**
     * iOS app custom conversions tracked through Third Party App Analytics.
     *
     * @generated from protobuf enum value: THIRD_PARTY_APP_ANALYTICS_IOS_CUSTOM = 23;
     */
    THIRD_PARTY_APP_ANALYTICS_IOS_CUSTOM = 23,
    /**
     * Conversions that occur when a user pre-registers a mobile app from the
     * Google Play Store. Read only.
     *
     * @generated from protobuf enum value: ANDROID_APP_PRE_REGISTRATION = 24;
     */
    ANDROID_APP_PRE_REGISTRATION = 24,
    /**
     * Conversions that track all Google Play downloads which aren't tracked
     * by an app-specific type. Read only.
     *
     * @generated from protobuf enum value: ANDROID_INSTALLS_ALL_OTHER_APPS = 25;
     */
    ANDROID_INSTALLS_ALL_OTHER_APPS = 25,
    /**
     * Floodlight activity that counts the number of times that users have
     * visited a particular webpage after seeing or clicking on one of
     * an advertiser's ads. Read only.
     *
     * @generated from protobuf enum value: FLOODLIGHT_ACTION = 26;
     */
    FLOODLIGHT_ACTION = 26,
    /**
     * Floodlight activity that tracks the number of sales made or the number
     * of items purchased. Can also capture the total value of each sale.
     * Read only.
     *
     * @generated from protobuf enum value: FLOODLIGHT_TRANSACTION = 27;
     */
    FLOODLIGHT_TRANSACTION = 27,
    /**
     * Conversions that track local actions from Google's products and
     * services after interacting with an ad. Read only.
     *
     * @generated from protobuf enum value: GOOGLE_HOSTED = 28;
     */
    GOOGLE_HOSTED = 28,
    /**
     * Conversions reported when a user submits a lead form. Read only.
     *
     * @generated from protobuf enum value: LEAD_FORM_SUBMIT = 29;
     */
    LEAD_FORM_SUBMIT = 29,
    /**
     * Conversions that come from Salesforce. Read only.
     *
     * @generated from protobuf enum value: SALESFORCE = 30;
     */
    SALESFORCE = 30,
    /**
     * Conversions imported from Search Ads 360 Floodlight data. Read only.
     *
     * @generated from protobuf enum value: SEARCH_ADS_360 = 31;
     */
    SEARCH_ADS_360 = 31,
    /**
     * Call conversions that occur on Smart campaign Ads without call tracking
     * setup, using Smart campaign custom criteria. Read only.
     *
     * @generated from protobuf enum value: SMART_CAMPAIGN_AD_CLICKS_TO_CALL = 32;
     */
    SMART_CAMPAIGN_AD_CLICKS_TO_CALL = 32,
    /**
     * The user clicks on a call element within Google Maps. Smart campaign
     * only. Read only.
     *
     * @generated from protobuf enum value: SMART_CAMPAIGN_MAP_CLICKS_TO_CALL = 33;
     */
    SMART_CAMPAIGN_MAP_CLICKS_TO_CALL = 33,
    /**
     * The user requests directions to a business location within Google Maps.
     * Smart campaign only. Read only.
     *
     * @generated from protobuf enum value: SMART_CAMPAIGN_MAP_DIRECTIONS = 34;
     */
    SMART_CAMPAIGN_MAP_DIRECTIONS = 34,
    /**
     * Call conversions that occur on Smart campaign Ads with call tracking
     * setup, using Smart campaign custom criteria. Read only.
     *
     * @generated from protobuf enum value: SMART_CAMPAIGN_TRACKED_CALLS = 35;
     */
    SMART_CAMPAIGN_TRACKED_CALLS = 35,
    /**
     * Conversions that occur when a user visits an advertiser's retail store.
     * Read only.
     *
     * @generated from protobuf enum value: STORE_VISITS = 36;
     */
    STORE_VISITS = 36
}
// @generated message type with reflection information, may provide speed optimized methods
class ConversionActionTypeEnum$Type extends MessageType<ConversionActionTypeEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.ConversionActionTypeEnum", []);
    }
    create(value?: PartialMessage<ConversionActionTypeEnum>): ConversionActionTypeEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ConversionActionTypeEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ConversionActionTypeEnum): ConversionActionTypeEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: ConversionActionTypeEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.ConversionActionTypeEnum
 */
export const ConversionActionTypeEnum = new ConversionActionTypeEnum$Type();
