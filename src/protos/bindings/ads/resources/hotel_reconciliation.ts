// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/resources/hotel_reconciliation.proto" (package "google.ads.googleads.v11.resources", syntax proto3)
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
import { HotelReconciliationStatusEnum_HotelReconciliationStatus } from "../enums/hotel_reconciliation_status";
// Proto file describing the hotel reconciliation resource.

/**
 * A hotel reconciliation. It contains conversion information from Hotel
 * bookings to reconcile with advertiser records. These rows may be updated
 * or canceled before billing through Bulk Uploads.
 *
 * @generated from protobuf message google.ads.googleads.v11.resources.HotelReconciliation
 */
export interface HotelReconciliation {
    /**
     * Immutable. The resource name of the hotel reconciliation.
     * Hotel reconciliation resource names have the form:
     *
     * `customers/{customer_id}/hotelReconciliations/{commission_id}`
     *
     * @generated from protobuf field: string resource_name = 1;
     */
    resourceName: string;
    /**
     * Required. Output only. The commission ID is Google's ID for this booking. Every booking event is
     * assigned a Commission ID to help you match it to a guest stay.
     *
     * @generated from protobuf field: string commission_id = 2;
     */
    commissionId: string;
    /**
     * Output only. The order ID is the identifier for this booking as provided in the
     * 'transaction_id' parameter of the conversion tracking tag.
     *
     * @generated from protobuf field: string order_id = 3;
     */
    orderId: string;
    /**
     * Output only. The resource name for the Campaign associated with the conversion.
     *
     * @generated from protobuf field: string campaign = 11;
     */
    campaign: string;
    /**
     * Output only. Identifier for the Hotel Center account which provides the rates for the
     * Hotel campaign.
     *
     * @generated from protobuf field: int64 hotel_center_id = 4;
     */
    hotelCenterId: bigint;
    /**
     * Output only. Unique identifier for the booked property, as provided in the Hotel Center
     * feed. The hotel ID comes from the 'ID' parameter of the conversion tracking
     * tag.
     *
     * @generated from protobuf field: string hotel_id = 5;
     */
    hotelId: string;
    /**
     * Output only. Check-in date recorded when the booking is made. If the check-in date is
     * modified at reconciliation, the revised date will then take the place of
     * the original date in this column. Format is YYYY-MM-DD.
     *
     * @generated from protobuf field: string check_in_date = 6;
     */
    checkInDate: string;
    /**
     * Output only. Check-out date recorded when the booking is made. If the check-in date is
     * modified at reconciliation, the revised date will then take the place of
     * the original date in this column. Format is YYYY-MM-DD.
     *
     * @generated from protobuf field: string check_out_date = 7;
     */
    checkOutDate: string;
    /**
     * Required. Output only. Reconciled value is the final value of a booking as paid by the guest. If
     * original booking value changes for any reason, such as itinerary changes or
     * room upsells, the reconciled value should be the full final amount
     * collected. If a booking is canceled, the reconciled value should include
     * the value of any cancellation fees or non-refundable nights charged. Value
     * is in millionths of the base unit currency. For example, $12.35 would be
     * represented as 12350000. Currency unit is in the default customer currency.
     *
     * @generated from protobuf field: int64 reconciled_value_micros = 8;
     */
    reconciledValueMicros: bigint;
    /**
     * Output only. Whether a given booking has been billed. Once billed, a booking can't be
     * modified.
     *
     * @generated from protobuf field: bool billed = 9;
     */
    billed: boolean;
    /**
     * Required. Output only. Current status of a booking with regards to reconciliation and billing.
     * Bookings should be reconciled within 45 days after the check-out date.
     * Any booking not reconciled within 45 days will be billed at its original
     * value.
     *
     * @generated from protobuf field: google.ads.googleads.v11.enums.HotelReconciliationStatusEnum.HotelReconciliationStatus status = 10;
     */
    status: HotelReconciliationStatusEnum_HotelReconciliationStatus;
}
// @generated message type with reflection information, may provide speed optimized methods
class HotelReconciliation$Type extends MessageType<HotelReconciliation> {
    constructor() {
        super("google.ads.googleads.v11.resources.HotelReconciliation", [
            { no: 1, name: "resource_name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["IMMUTABLE"], "google.api.resource_reference": { type: "googleads.googleapis.com/HotelReconciliation" } } },
            { no: 2, name: "commission_id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["REQUIRED", "OUTPUT_ONLY"] } },
            { no: 3, name: "order_id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 11, name: "campaign", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"], "google.api.resource_reference": { type: "googleads.googleapis.com/Campaign" } } },
            { no: 4, name: "hotel_center_id", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 5, name: "hotel_id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 6, name: "check_in_date", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 7, name: "check_out_date", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 8, name: "reconciled_value_micros", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/, options: { "google.api.field_behavior": ["REQUIRED", "OUTPUT_ONLY"] } },
            { no: 9, name: "billed", kind: "scalar", T: 8 /*ScalarType.BOOL*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 10, name: "status", kind: "enum", T: () => ["google.ads.googleads.v11.enums.HotelReconciliationStatusEnum.HotelReconciliationStatus", HotelReconciliationStatusEnum_HotelReconciliationStatus], options: { "google.api.field_behavior": ["REQUIRED", "OUTPUT_ONLY"] } }
        ], { "google.api.resource": { type: "googleads.googleapis.com/HotelReconciliation", pattern: ["customers/{customer_id}/hotelReconciliations/{commission_id}"] } });
    }
    create(value?: PartialMessage<HotelReconciliation>): HotelReconciliation {
        const message = { resourceName: "", commissionId: "", orderId: "", campaign: "", hotelCenterId: 0n, hotelId: "", checkInDate: "", checkOutDate: "", reconciledValueMicros: 0n, billed: false, status: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<HotelReconciliation>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HotelReconciliation): HotelReconciliation {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string resource_name */ 1:
                    message.resourceName = reader.string();
                    break;
                case /* string commission_id */ 2:
                    message.commissionId = reader.string();
                    break;
                case /* string order_id */ 3:
                    message.orderId = reader.string();
                    break;
                case /* string campaign */ 11:
                    message.campaign = reader.string();
                    break;
                case /* int64 hotel_center_id */ 4:
                    message.hotelCenterId = reader.int64().toBigInt();
                    break;
                case /* string hotel_id */ 5:
                    message.hotelId = reader.string();
                    break;
                case /* string check_in_date */ 6:
                    message.checkInDate = reader.string();
                    break;
                case /* string check_out_date */ 7:
                    message.checkOutDate = reader.string();
                    break;
                case /* int64 reconciled_value_micros */ 8:
                    message.reconciledValueMicros = reader.int64().toBigInt();
                    break;
                case /* bool billed */ 9:
                    message.billed = reader.bool();
                    break;
                case /* google.ads.googleads.v11.enums.HotelReconciliationStatusEnum.HotelReconciliationStatus status */ 10:
                    message.status = reader.int32();
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
    internalBinaryWrite(message: HotelReconciliation, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string resource_name = 1; */
        if (message.resourceName !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.resourceName);
        /* string commission_id = 2; */
        if (message.commissionId !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.commissionId);
        /* string order_id = 3; */
        if (message.orderId !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.orderId);
        /* string campaign = 11; */
        if (message.campaign !== "")
            writer.tag(11, WireType.LengthDelimited).string(message.campaign);
        /* int64 hotel_center_id = 4; */
        if (message.hotelCenterId !== 0n)
            writer.tag(4, WireType.Varint).int64(message.hotelCenterId);
        /* string hotel_id = 5; */
        if (message.hotelId !== "")
            writer.tag(5, WireType.LengthDelimited).string(message.hotelId);
        /* string check_in_date = 6; */
        if (message.checkInDate !== "")
            writer.tag(6, WireType.LengthDelimited).string(message.checkInDate);
        /* string check_out_date = 7; */
        if (message.checkOutDate !== "")
            writer.tag(7, WireType.LengthDelimited).string(message.checkOutDate);
        /* int64 reconciled_value_micros = 8; */
        if (message.reconciledValueMicros !== 0n)
            writer.tag(8, WireType.Varint).int64(message.reconciledValueMicros);
        /* bool billed = 9; */
        if (message.billed !== false)
            writer.tag(9, WireType.Varint).bool(message.billed);
        /* google.ads.googleads.v11.enums.HotelReconciliationStatusEnum.HotelReconciliationStatus status = 10; */
        if (message.status !== 0)
            writer.tag(10, WireType.Varint).int32(message.status);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.resources.HotelReconciliation
 */
export const HotelReconciliation = new HotelReconciliation$Type();
