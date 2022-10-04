// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/conversion_action_category.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
 * Container for enum describing the category of conversions that are associated
 * with a ConversionAction.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.ConversionActionCategoryEnum
 */
export interface ConversionActionCategoryEnum {
}
/**
 * The category of conversions that are associated with a ConversionAction.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.ConversionActionCategoryEnum.ConversionActionCategory
 */
export enum ConversionActionCategoryEnum_ConversionActionCategory {
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
     * Default category.
     *
     * @generated from protobuf enum value: DEFAULT = 2;
     */
    DEFAULT = 2,
    /**
     * User visiting a page.
     *
     * @generated from protobuf enum value: PAGE_VIEW = 3;
     */
    PAGE_VIEW = 3,
    /**
     * Purchase, sales, or "order placed" event.
     *
     * @generated from protobuf enum value: PURCHASE = 4;
     */
    PURCHASE = 4,
    /**
     * Signup user action.
     *
     * @generated from protobuf enum value: SIGNUP = 5;
     */
    SIGNUP = 5,
    /**
     * Software download action (as for an app).
     *
     * @generated from protobuf enum value: DOWNLOAD = 7;
     */
    DOWNLOAD = 7,
    /**
     * The addition of items to a shopping cart or bag on an advertiser site.
     *
     * @generated from protobuf enum value: ADD_TO_CART = 8;
     */
    ADD_TO_CART = 8,
    /**
     * When someone enters the checkout flow on an advertiser site.
     *
     * @generated from protobuf enum value: BEGIN_CHECKOUT = 9;
     */
    BEGIN_CHECKOUT = 9,
    /**
     * The start of a paid subscription for a product or service.
     *
     * @generated from protobuf enum value: SUBSCRIBE_PAID = 10;
     */
    SUBSCRIBE_PAID = 10,
    /**
     * A call to indicate interest in an advertiser's offering.
     *
     * @generated from protobuf enum value: PHONE_CALL_LEAD = 11;
     */
    PHONE_CALL_LEAD = 11,
    /**
     * A lead conversion imported from an external source into Google Ads.
     *
     * @generated from protobuf enum value: IMPORTED_LEAD = 12;
     */
    IMPORTED_LEAD = 12,
    /**
     * A submission of a form on an advertiser site indicating business
     * interest.
     *
     * @generated from protobuf enum value: SUBMIT_LEAD_FORM = 13;
     */
    SUBMIT_LEAD_FORM = 13,
    /**
     * A booking of an appointment with an advertiser's business.
     *
     * @generated from protobuf enum value: BOOK_APPOINTMENT = 14;
     */
    BOOK_APPOINTMENT = 14,
    /**
     * A quote or price estimate request.
     *
     * @generated from protobuf enum value: REQUEST_QUOTE = 15;
     */
    REQUEST_QUOTE = 15,
    /**
     * A search for an advertiser's business location with intention to visit.
     *
     * @generated from protobuf enum value: GET_DIRECTIONS = 16;
     */
    GET_DIRECTIONS = 16,
    /**
     * A click to an advertiser's partner's site.
     *
     * @generated from protobuf enum value: OUTBOUND_CLICK = 17;
     */
    OUTBOUND_CLICK = 17,
    /**
     * A call, SMS, email, chat or other type of contact to an advertiser.
     *
     * @generated from protobuf enum value: CONTACT = 18;
     */
    CONTACT = 18,
    /**
     * A website engagement event such as long site time or a Google Analytics
     * (GA) Smart Goal. Intended to be used for GA, Firebase, GA Gold goal
     * imports.
     *
     * @generated from protobuf enum value: ENGAGEMENT = 19;
     */
    ENGAGEMENT = 19,
    /**
     * A visit to a physical store location.
     *
     * @generated from protobuf enum value: STORE_VISIT = 20;
     */
    STORE_VISIT = 20,
    /**
     * A sale occurring in a physical store.
     *
     * @generated from protobuf enum value: STORE_SALE = 21;
     */
    STORE_SALE = 21,
    /**
     * A lead conversion imported from an external source into Google Ads,
     * that has been further qualified by the advertiser (marketing/sales team).
     * In the lead-to-sale journey, advertisers get leads, then act on them
     * by reaching out to the consumer. If the consumer is interested and
     * may end up buying their product, the advertiser marks such leads as
     * "qualified leads".
     *
     * @generated from protobuf enum value: QUALIFIED_LEAD = 22;
     */
    QUALIFIED_LEAD = 22,
    /**
     * A lead conversion imported from an external source into Google Ads, that
     * has further completed a chosen stage as defined by the lead gen
     * advertiser.
     *
     * @generated from protobuf enum value: CONVERTED_LEAD = 23;
     */
    CONVERTED_LEAD = 23
}
// @generated message type with reflection information, may provide speed optimized methods
class ConversionActionCategoryEnum$Type extends MessageType<ConversionActionCategoryEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.ConversionActionCategoryEnum", []);
    }
    create(value?: PartialMessage<ConversionActionCategoryEnum>): ConversionActionCategoryEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ConversionActionCategoryEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ConversionActionCategoryEnum): ConversionActionCategoryEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: ConversionActionCategoryEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.ConversionActionCategoryEnum
 */
export const ConversionActionCategoryEnum = new ConversionActionCategoryEnum$Type();
