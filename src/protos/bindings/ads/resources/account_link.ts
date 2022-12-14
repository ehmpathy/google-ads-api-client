// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/resources/account_link.proto" (package "google.ads.googleads.v11.resources", syntax proto3)
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
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { MobileAppVendorEnum_MobileAppVendor } from "../enums/mobile_app_vendor";
import { LinkedAccountTypeEnum_LinkedAccountType } from "../enums/linked_account_type";
import { AccountLinkStatusEnum_AccountLinkStatus } from "../enums/account_link_status";
/**
 * Represents the data sharing connection between a Google Ads account and
 * another account
 *
 * @generated from protobuf message google.ads.googleads.v11.resources.AccountLink
 */
export interface AccountLink {
    /**
     * Immutable. Resource name of the account link.
     * AccountLink resource names have the form:
     * `customers/{customer_id}/accountLinks/{account_link_id}`
     *
     * @generated from protobuf field: string resource_name = 1;
     */
    resourceName: string;
    /**
     * Output only. The ID of the link.
     * This field is read only.
     *
     * @generated from protobuf field: optional int64 account_link_id = 8;
     */
    accountLinkId?: bigint;
    /**
     * The status of the link.
     *
     * @generated from protobuf field: google.ads.googleads.v11.enums.AccountLinkStatusEnum.AccountLinkStatus status = 3;
     */
    status: AccountLinkStatusEnum_AccountLinkStatus;
    /**
     * Output only. The type of the linked account.
     *
     * @generated from protobuf field: google.ads.googleads.v11.enums.LinkedAccountTypeEnum.LinkedAccountType type = 4;
     */
    type: LinkedAccountTypeEnum_LinkedAccountType;
    /**
     * @generated from protobuf oneof: linked_account
     */
    linkedAccount: {
        oneofKind: "thirdPartyAppAnalytics";
        /**
         * Immutable. A third party app analytics link.
         *
         * @generated from protobuf field: google.ads.googleads.v11.resources.ThirdPartyAppAnalyticsLinkIdentifier third_party_app_analytics = 5;
         */
        thirdPartyAppAnalytics: ThirdPartyAppAnalyticsLinkIdentifier;
    } | {
        oneofKind: "dataPartner";
        /**
         * Output only. Data partner link.
         *
         * @generated from protobuf field: google.ads.googleads.v11.resources.DataPartnerLinkIdentifier data_partner = 6;
         */
        dataPartner: DataPartnerLinkIdentifier;
    } | {
        oneofKind: "googleAds";
        /**
         * Output only. Google Ads link.
         *
         * @generated from protobuf field: google.ads.googleads.v11.resources.GoogleAdsLinkIdentifier google_ads = 7;
         */
        googleAds: GoogleAdsLinkIdentifier;
    } | {
        oneofKind: "hotelCenter";
        /**
         * Output only. Hotel link
         *
         * @generated from protobuf field: google.ads.googleads.v11.resources.HotelCenterLinkIdentifier hotel_center = 9;
         */
        hotelCenter: HotelCenterLinkIdentifier;
    } | {
        oneofKind: undefined;
    };
}
/**
 * The identifiers of a Third Party App Analytics Link.
 *
 * @generated from protobuf message google.ads.googleads.v11.resources.ThirdPartyAppAnalyticsLinkIdentifier
 */
export interface ThirdPartyAppAnalyticsLinkIdentifier {
    /**
     * Immutable. The ID of the app analytics provider.
     * This field should not be empty when creating a new third
     * party app analytics link. It is unable to be modified after the creation of
     * the link.
     *
     * @generated from protobuf field: optional int64 app_analytics_provider_id = 4;
     */
    appAnalyticsProviderId?: bigint;
    /**
     * Immutable. A string that uniquely identifies a mobile application from which the data
     * was collected to the Google Ads API. For iOS, the ID string is the 9 digit
     * string that appears at the end of an App Store URL (for example,
     * "422689480" for "Gmail" whose App Store link is
     * https://apps.apple.com/us/app/gmail-email-by-google/id422689480). For
     * Android, the ID string is the application's package name (for example,
     * "com.google.android.gm" for "Gmail" given Google Play link
     * https://play.google.com/store/apps/details?id=com.google.android.gm)
     * This field should not be empty when creating a new third
     * party app analytics link. It is unable to be modified after the creation of
     * the link.
     *
     * @generated from protobuf field: optional string app_id = 5;
     */
    appId?: string;
    /**
     * Immutable. The vendor of the app.
     * This field should not be empty when creating a new third
     * party app analytics link. It is unable to be modified after the creation of
     * the link.
     *
     * @generated from protobuf field: google.ads.googleads.v11.enums.MobileAppVendorEnum.MobileAppVendor app_vendor = 3;
     */
    appVendor: MobileAppVendorEnum_MobileAppVendor;
}
/**
 * The identifier for Data Partner account.
 *
 * @generated from protobuf message google.ads.googleads.v11.resources.DataPartnerLinkIdentifier
 */
export interface DataPartnerLinkIdentifier {
    /**
     * Immutable. The customer ID of the Data partner account.
     * This field is required and should not be empty when creating a new
     * data partner link. It is unable to be modified after the creation of
     * the link.
     *
     * @generated from protobuf field: optional int64 data_partner_id = 1;
     */
    dataPartnerId?: bigint;
}
/**
 * The identifier for Hotel account.
 *
 * @generated from protobuf message google.ads.googleads.v11.resources.HotelCenterLinkIdentifier
 */
export interface HotelCenterLinkIdentifier {
    /**
     * Output only. The hotel center id of the hotel account.
     *
     * @generated from protobuf field: int64 hotel_center_id = 1;
     */
    hotelCenterId: bigint;
}
/**
 * The identifier for Google Ads account.
 *
 * @generated from protobuf message google.ads.googleads.v11.resources.GoogleAdsLinkIdentifier
 */
export interface GoogleAdsLinkIdentifier {
    /**
     * Immutable. The resource name of the Google Ads account.
     * This field is required and should not be empty when creating a new
     * Google Ads link. It is unable to be modified after the creation of
     * the link.
     *
     * @generated from protobuf field: optional string customer = 3;
     */
    customer?: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class AccountLink$Type extends MessageType<AccountLink> {
    constructor() {
        super("google.ads.googleads.v11.resources.AccountLink", [
            { no: 1, name: "resource_name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["IMMUTABLE"], "google.api.resource_reference": { type: "googleads.googleapis.com/AccountLink" } } },
            { no: 8, name: "account_link_id", kind: "scalar", opt: true, T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 3, name: "status", kind: "enum", T: () => ["google.ads.googleads.v11.enums.AccountLinkStatusEnum.AccountLinkStatus", AccountLinkStatusEnum_AccountLinkStatus] },
            { no: 4, name: "type", kind: "enum", T: () => ["google.ads.googleads.v11.enums.LinkedAccountTypeEnum.LinkedAccountType", LinkedAccountTypeEnum_LinkedAccountType], options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 5, name: "third_party_app_analytics", kind: "message", oneof: "linkedAccount", T: () => ThirdPartyAppAnalyticsLinkIdentifier, options: { "google.api.field_behavior": ["IMMUTABLE"] } },
            { no: 6, name: "data_partner", kind: "message", oneof: "linkedAccount", T: () => DataPartnerLinkIdentifier, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 7, name: "google_ads", kind: "message", oneof: "linkedAccount", T: () => GoogleAdsLinkIdentifier, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 9, name: "hotel_center", kind: "message", oneof: "linkedAccount", T: () => HotelCenterLinkIdentifier, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } }
        ], { "google.api.resource": { type: "googleads.googleapis.com/AccountLink", pattern: ["customers/{customer_id}/accountLinks/{account_link_id}"] } });
    }
    create(value?: PartialMessage<AccountLink>): AccountLink {
        const message = { resourceName: "", status: 0, type: 0, linkedAccount: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AccountLink>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AccountLink): AccountLink {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string resource_name */ 1:
                    message.resourceName = reader.string();
                    break;
                case /* optional int64 account_link_id */ 8:
                    message.accountLinkId = reader.int64().toBigInt();
                    break;
                case /* google.ads.googleads.v11.enums.AccountLinkStatusEnum.AccountLinkStatus status */ 3:
                    message.status = reader.int32();
                    break;
                case /* google.ads.googleads.v11.enums.LinkedAccountTypeEnum.LinkedAccountType type */ 4:
                    message.type = reader.int32();
                    break;
                case /* google.ads.googleads.v11.resources.ThirdPartyAppAnalyticsLinkIdentifier third_party_app_analytics */ 5:
                    message.linkedAccount = {
                        oneofKind: "thirdPartyAppAnalytics",
                        thirdPartyAppAnalytics: ThirdPartyAppAnalyticsLinkIdentifier.internalBinaryRead(reader, reader.uint32(), options, (message.linkedAccount as any).thirdPartyAppAnalytics)
                    };
                    break;
                case /* google.ads.googleads.v11.resources.DataPartnerLinkIdentifier data_partner */ 6:
                    message.linkedAccount = {
                        oneofKind: "dataPartner",
                        dataPartner: DataPartnerLinkIdentifier.internalBinaryRead(reader, reader.uint32(), options, (message.linkedAccount as any).dataPartner)
                    };
                    break;
                case /* google.ads.googleads.v11.resources.GoogleAdsLinkIdentifier google_ads */ 7:
                    message.linkedAccount = {
                        oneofKind: "googleAds",
                        googleAds: GoogleAdsLinkIdentifier.internalBinaryRead(reader, reader.uint32(), options, (message.linkedAccount as any).googleAds)
                    };
                    break;
                case /* google.ads.googleads.v11.resources.HotelCenterLinkIdentifier hotel_center */ 9:
                    message.linkedAccount = {
                        oneofKind: "hotelCenter",
                        hotelCenter: HotelCenterLinkIdentifier.internalBinaryRead(reader, reader.uint32(), options, (message.linkedAccount as any).hotelCenter)
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: AccountLink, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string resource_name = 1; */
        if (message.resourceName !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.resourceName);
        /* optional int64 account_link_id = 8; */
        if (message.accountLinkId !== undefined)
            writer.tag(8, WireType.Varint).int64(message.accountLinkId);
        /* google.ads.googleads.v11.enums.AccountLinkStatusEnum.AccountLinkStatus status = 3; */
        if (message.status !== 0)
            writer.tag(3, WireType.Varint).int32(message.status);
        /* google.ads.googleads.v11.enums.LinkedAccountTypeEnum.LinkedAccountType type = 4; */
        if (message.type !== 0)
            writer.tag(4, WireType.Varint).int32(message.type);
        /* google.ads.googleads.v11.resources.ThirdPartyAppAnalyticsLinkIdentifier third_party_app_analytics = 5; */
        if (message.linkedAccount.oneofKind === "thirdPartyAppAnalytics")
            ThirdPartyAppAnalyticsLinkIdentifier.internalBinaryWrite(message.linkedAccount.thirdPartyAppAnalytics, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* google.ads.googleads.v11.resources.DataPartnerLinkIdentifier data_partner = 6; */
        if (message.linkedAccount.oneofKind === "dataPartner")
            DataPartnerLinkIdentifier.internalBinaryWrite(message.linkedAccount.dataPartner, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* google.ads.googleads.v11.resources.GoogleAdsLinkIdentifier google_ads = 7; */
        if (message.linkedAccount.oneofKind === "googleAds")
            GoogleAdsLinkIdentifier.internalBinaryWrite(message.linkedAccount.googleAds, writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        /* google.ads.googleads.v11.resources.HotelCenterLinkIdentifier hotel_center = 9; */
        if (message.linkedAccount.oneofKind === "hotelCenter")
            HotelCenterLinkIdentifier.internalBinaryWrite(message.linkedAccount.hotelCenter, writer.tag(9, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.resources.AccountLink
 */
export const AccountLink = new AccountLink$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ThirdPartyAppAnalyticsLinkIdentifier$Type extends MessageType<ThirdPartyAppAnalyticsLinkIdentifier> {
    constructor() {
        super("google.ads.googleads.v11.resources.ThirdPartyAppAnalyticsLinkIdentifier", [
            { no: 4, name: "app_analytics_provider_id", kind: "scalar", opt: true, T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/, options: { "google.api.field_behavior": ["IMMUTABLE"] } },
            { no: 5, name: "app_id", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["IMMUTABLE"] } },
            { no: 3, name: "app_vendor", kind: "enum", T: () => ["google.ads.googleads.v11.enums.MobileAppVendorEnum.MobileAppVendor", MobileAppVendorEnum_MobileAppVendor], options: { "google.api.field_behavior": ["IMMUTABLE"] } }
        ]);
    }
    create(value?: PartialMessage<ThirdPartyAppAnalyticsLinkIdentifier>): ThirdPartyAppAnalyticsLinkIdentifier {
        const message = { appVendor: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ThirdPartyAppAnalyticsLinkIdentifier>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ThirdPartyAppAnalyticsLinkIdentifier): ThirdPartyAppAnalyticsLinkIdentifier {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional int64 app_analytics_provider_id */ 4:
                    message.appAnalyticsProviderId = reader.int64().toBigInt();
                    break;
                case /* optional string app_id */ 5:
                    message.appId = reader.string();
                    break;
                case /* google.ads.googleads.v11.enums.MobileAppVendorEnum.MobileAppVendor app_vendor */ 3:
                    message.appVendor = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ThirdPartyAppAnalyticsLinkIdentifier, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional int64 app_analytics_provider_id = 4; */
        if (message.appAnalyticsProviderId !== undefined)
            writer.tag(4, WireType.Varint).int64(message.appAnalyticsProviderId);
        /* optional string app_id = 5; */
        if (message.appId !== undefined)
            writer.tag(5, WireType.LengthDelimited).string(message.appId);
        /* google.ads.googleads.v11.enums.MobileAppVendorEnum.MobileAppVendor app_vendor = 3; */
        if (message.appVendor !== 0)
            writer.tag(3, WireType.Varint).int32(message.appVendor);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.resources.ThirdPartyAppAnalyticsLinkIdentifier
 */
export const ThirdPartyAppAnalyticsLinkIdentifier = new ThirdPartyAppAnalyticsLinkIdentifier$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DataPartnerLinkIdentifier$Type extends MessageType<DataPartnerLinkIdentifier> {
    constructor() {
        super("google.ads.googleads.v11.resources.DataPartnerLinkIdentifier", [
            { no: 1, name: "data_partner_id", kind: "scalar", opt: true, T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/, options: { "google.api.field_behavior": ["IMMUTABLE"] } }
        ]);
    }
    create(value?: PartialMessage<DataPartnerLinkIdentifier>): DataPartnerLinkIdentifier {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<DataPartnerLinkIdentifier>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DataPartnerLinkIdentifier): DataPartnerLinkIdentifier {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional int64 data_partner_id */ 1:
                    message.dataPartnerId = reader.int64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: DataPartnerLinkIdentifier, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional int64 data_partner_id = 1; */
        if (message.dataPartnerId !== undefined)
            writer.tag(1, WireType.Varint).int64(message.dataPartnerId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.resources.DataPartnerLinkIdentifier
 */
export const DataPartnerLinkIdentifier = new DataPartnerLinkIdentifier$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HotelCenterLinkIdentifier$Type extends MessageType<HotelCenterLinkIdentifier> {
    constructor() {
        super("google.ads.googleads.v11.resources.HotelCenterLinkIdentifier", [
            { no: 1, name: "hotel_center_id", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } }
        ]);
    }
    create(value?: PartialMessage<HotelCenterLinkIdentifier>): HotelCenterLinkIdentifier {
        const message = { hotelCenterId: 0n };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<HotelCenterLinkIdentifier>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HotelCenterLinkIdentifier): HotelCenterLinkIdentifier {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int64 hotel_center_id */ 1:
                    message.hotelCenterId = reader.int64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: HotelCenterLinkIdentifier, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int64 hotel_center_id = 1; */
        if (message.hotelCenterId !== 0n)
            writer.tag(1, WireType.Varint).int64(message.hotelCenterId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.resources.HotelCenterLinkIdentifier
 */
export const HotelCenterLinkIdentifier = new HotelCenterLinkIdentifier$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GoogleAdsLinkIdentifier$Type extends MessageType<GoogleAdsLinkIdentifier> {
    constructor() {
        super("google.ads.googleads.v11.resources.GoogleAdsLinkIdentifier", [
            { no: 3, name: "customer", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["IMMUTABLE"], "google.api.resource_reference": { type: "googleads.googleapis.com/Customer" } } }
        ]);
    }
    create(value?: PartialMessage<GoogleAdsLinkIdentifier>): GoogleAdsLinkIdentifier {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GoogleAdsLinkIdentifier>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GoogleAdsLinkIdentifier): GoogleAdsLinkIdentifier {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional string customer */ 3:
                    message.customer = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GoogleAdsLinkIdentifier, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional string customer = 3; */
        if (message.customer !== undefined)
            writer.tag(3, WireType.LengthDelimited).string(message.customer);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.resources.GoogleAdsLinkIdentifier
 */
export const GoogleAdsLinkIdentifier = new GoogleAdsLinkIdentifier$Type();
