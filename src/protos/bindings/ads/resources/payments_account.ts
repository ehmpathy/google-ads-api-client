// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/resources/payments_account.proto" (package "google.ads.googleads.v11.resources", syntax proto3)
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
// Proto file describing the PaymentsAccount resource.

/**
 * A payments account, which can be used to set up billing for an Ads customer.
 *
 * @generated from protobuf message google.ads.googleads.v11.resources.PaymentsAccount
 */
export interface PaymentsAccount {
    /**
     * Output only. The resource name of the payments account.
     * PaymentsAccount resource names have the form:
     *
     * `customers/{customer_id}/paymentsAccounts/{payments_account_id}`
     *
     * @generated from protobuf field: string resource_name = 1;
     */
    resourceName: string;
    /**
     * Output only. A 16 digit ID used to identify a payments account.
     *
     * @generated from protobuf field: optional string payments_account_id = 8;
     */
    paymentsAccountId?: string;
    /**
     * Output only. The name of the payments account.
     *
     * @generated from protobuf field: optional string name = 9;
     */
    name?: string;
    /**
     * Output only. The currency code of the payments account.
     * A subset of the currency codes derived from the ISO 4217 standard is
     * supported.
     *
     * @generated from protobuf field: optional string currency_code = 10;
     */
    currencyCode?: string;
    /**
     * Output only. A 12 digit ID used to identify the payments profile associated with the
     * payments account.
     *
     * @generated from protobuf field: optional string payments_profile_id = 11;
     */
    paymentsProfileId?: string;
    /**
     * Output only. A secondary payments profile ID present in uncommon situations, for
     * example, when a sequential liability agreement has been arranged.
     *
     * @generated from protobuf field: optional string secondary_payments_profile_id = 12;
     */
    secondaryPaymentsProfileId?: string;
    /**
     * Output only. Paying manager of this payment account.
     *
     * @generated from protobuf field: optional string paying_manager_customer = 13;
     */
    payingManagerCustomer?: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class PaymentsAccount$Type extends MessageType<PaymentsAccount> {
    constructor() {
        super("google.ads.googleads.v11.resources.PaymentsAccount", [
            { no: 1, name: "resource_name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"], "google.api.resource_reference": { type: "googleads.googleapis.com/PaymentsAccount" } } },
            { no: 8, name: "payments_account_id", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 9, name: "name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 10, name: "currency_code", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 11, name: "payments_profile_id", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 12, name: "secondary_payments_profile_id", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 13, name: "paying_manager_customer", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"], "google.api.resource_reference": { type: "googleads.googleapis.com/Customer" } } }
        ], { "google.api.resource": { type: "googleads.googleapis.com/PaymentsAccount", pattern: ["customers/{customer_id}/paymentsAccounts/{payments_account_id}"] } });
    }
    create(value?: PartialMessage<PaymentsAccount>): PaymentsAccount {
        const message = { resourceName: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<PaymentsAccount>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PaymentsAccount): PaymentsAccount {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string resource_name */ 1:
                    message.resourceName = reader.string();
                    break;
                case /* optional string payments_account_id */ 8:
                    message.paymentsAccountId = reader.string();
                    break;
                case /* optional string name */ 9:
                    message.name = reader.string();
                    break;
                case /* optional string currency_code */ 10:
                    message.currencyCode = reader.string();
                    break;
                case /* optional string payments_profile_id */ 11:
                    message.paymentsProfileId = reader.string();
                    break;
                case /* optional string secondary_payments_profile_id */ 12:
                    message.secondaryPaymentsProfileId = reader.string();
                    break;
                case /* optional string paying_manager_customer */ 13:
                    message.payingManagerCustomer = reader.string();
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
    internalBinaryWrite(message: PaymentsAccount, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string resource_name = 1; */
        if (message.resourceName !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.resourceName);
        /* optional string payments_account_id = 8; */
        if (message.paymentsAccountId !== undefined)
            writer.tag(8, WireType.LengthDelimited).string(message.paymentsAccountId);
        /* optional string name = 9; */
        if (message.name !== undefined)
            writer.tag(9, WireType.LengthDelimited).string(message.name);
        /* optional string currency_code = 10; */
        if (message.currencyCode !== undefined)
            writer.tag(10, WireType.LengthDelimited).string(message.currencyCode);
        /* optional string payments_profile_id = 11; */
        if (message.paymentsProfileId !== undefined)
            writer.tag(11, WireType.LengthDelimited).string(message.paymentsProfileId);
        /* optional string secondary_payments_profile_id = 12; */
        if (message.secondaryPaymentsProfileId !== undefined)
            writer.tag(12, WireType.LengthDelimited).string(message.secondaryPaymentsProfileId);
        /* optional string paying_manager_customer = 13; */
        if (message.payingManagerCustomer !== undefined)
            writer.tag(13, WireType.LengthDelimited).string(message.payingManagerCustomer);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.resources.PaymentsAccount
 */
export const PaymentsAccount = new PaymentsAccount$Type();
