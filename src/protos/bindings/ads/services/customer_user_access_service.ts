// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/services/customer_user_access_service.proto" (package "google.ads.googleads.v11.services", syntax proto3)
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
import { ServiceType } from "@protobuf-ts/runtime-rpc";
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
import { CustomerUserAccess } from "../resources/customer_user_access";
import { FieldMask } from "../../google/protobuf/field_mask";
/**
 * Mutate Request for
 * [CustomerUserAccessService.MutateCustomerUserAccess][google.ads.googleads.v11.services.CustomerUserAccessService.MutateCustomerUserAccess].
 *
 * @generated from protobuf message google.ads.googleads.v11.services.MutateCustomerUserAccessRequest
 */
export interface MutateCustomerUserAccessRequest {
    /**
     * Required. The ID of the customer being modified.
     *
     * @generated from protobuf field: string customer_id = 1;
     */
    customerId: string;
    /**
     * Required. The operation to perform on the customer
     *
     * @generated from protobuf field: google.ads.googleads.v11.services.CustomerUserAccessOperation operation = 2;
     */
    operation?: CustomerUserAccessOperation;
}
/**
 * A single operation (update, remove) on customer user access.
 *
 * @generated from protobuf message google.ads.googleads.v11.services.CustomerUserAccessOperation
 */
export interface CustomerUserAccessOperation {
    /**
     * FieldMask that determines which resource fields are modified in an update.
     *
     * @generated from protobuf field: google.protobuf.FieldMask update_mask = 3;
     */
    updateMask?: FieldMask;
    /**
     * @generated from protobuf oneof: operation
     */
    operation: {
        oneofKind: "update";
        /**
         * Update operation: The customer user access is expected to have a valid
         * resource name.
         *
         * @generated from protobuf field: google.ads.googleads.v11.resources.CustomerUserAccess update = 1;
         */
        update: CustomerUserAccess;
    } | {
        oneofKind: "remove";
        /**
         * Remove operation: A resource name for the removed access is
         * expected, in this format:
         *
         * `customers/{customer_id}/customerUserAccesses/{CustomerUserAccess.user_id}`
         *
         * @generated from protobuf field: string remove = 2;
         */
        remove: string;
    } | {
        oneofKind: undefined;
    };
}
/**
 * Response message for customer user access mutate.
 *
 * @generated from protobuf message google.ads.googleads.v11.services.MutateCustomerUserAccessResponse
 */
export interface MutateCustomerUserAccessResponse {
    /**
     * Result for the mutate.
     *
     * @generated from protobuf field: google.ads.googleads.v11.services.MutateCustomerUserAccessResult result = 1;
     */
    result?: MutateCustomerUserAccessResult;
}
/**
 * The result for the customer user access mutate.
 *
 * @generated from protobuf message google.ads.googleads.v11.services.MutateCustomerUserAccessResult
 */
export interface MutateCustomerUserAccessResult {
    /**
     * Returned for successful operations.
     *
     * @generated from protobuf field: string resource_name = 1;
     */
    resourceName: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class MutateCustomerUserAccessRequest$Type extends MessageType<MutateCustomerUserAccessRequest> {
    constructor() {
        super("google.ads.googleads.v11.services.MutateCustomerUserAccessRequest", [
            { no: 1, name: "customer_id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["REQUIRED"] } },
            { no: 2, name: "operation", kind: "message", T: () => CustomerUserAccessOperation, options: { "google.api.field_behavior": ["REQUIRED"] } }
        ]);
    }
    create(value?: PartialMessage<MutateCustomerUserAccessRequest>): MutateCustomerUserAccessRequest {
        const message = { customerId: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MutateCustomerUserAccessRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MutateCustomerUserAccessRequest): MutateCustomerUserAccessRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string customer_id */ 1:
                    message.customerId = reader.string();
                    break;
                case /* google.ads.googleads.v11.services.CustomerUserAccessOperation operation */ 2:
                    message.operation = CustomerUserAccessOperation.internalBinaryRead(reader, reader.uint32(), options, message.operation);
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
    internalBinaryWrite(message: MutateCustomerUserAccessRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string customer_id = 1; */
        if (message.customerId !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.customerId);
        /* google.ads.googleads.v11.services.CustomerUserAccessOperation operation = 2; */
        if (message.operation)
            CustomerUserAccessOperation.internalBinaryWrite(message.operation, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.services.MutateCustomerUserAccessRequest
 */
export const MutateCustomerUserAccessRequest = new MutateCustomerUserAccessRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CustomerUserAccessOperation$Type extends MessageType<CustomerUserAccessOperation> {
    constructor() {
        super("google.ads.googleads.v11.services.CustomerUserAccessOperation", [
            { no: 3, name: "update_mask", kind: "message", T: () => FieldMask },
            { no: 1, name: "update", kind: "message", oneof: "operation", T: () => CustomerUserAccess },
            { no: 2, name: "remove", kind: "scalar", oneof: "operation", T: 9 /*ScalarType.STRING*/, options: { "google.api.resource_reference": { type: "googleads.googleapis.com/CustomerUserAccess" } } }
        ]);
    }
    create(value?: PartialMessage<CustomerUserAccessOperation>): CustomerUserAccessOperation {
        const message = { operation: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CustomerUserAccessOperation>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CustomerUserAccessOperation): CustomerUserAccessOperation {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.protobuf.FieldMask update_mask */ 3:
                    message.updateMask = FieldMask.internalBinaryRead(reader, reader.uint32(), options, message.updateMask);
                    break;
                case /* google.ads.googleads.v11.resources.CustomerUserAccess update */ 1:
                    message.operation = {
                        oneofKind: "update",
                        update: CustomerUserAccess.internalBinaryRead(reader, reader.uint32(), options, (message.operation as any).update)
                    };
                    break;
                case /* string remove */ 2:
                    message.operation = {
                        oneofKind: "remove",
                        remove: reader.string()
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
    internalBinaryWrite(message: CustomerUserAccessOperation, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* google.protobuf.FieldMask update_mask = 3; */
        if (message.updateMask)
            FieldMask.internalBinaryWrite(message.updateMask, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* google.ads.googleads.v11.resources.CustomerUserAccess update = 1; */
        if (message.operation.oneofKind === "update")
            CustomerUserAccess.internalBinaryWrite(message.operation.update, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* string remove = 2; */
        if (message.operation.oneofKind === "remove")
            writer.tag(2, WireType.LengthDelimited).string(message.operation.remove);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.services.CustomerUserAccessOperation
 */
export const CustomerUserAccessOperation = new CustomerUserAccessOperation$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MutateCustomerUserAccessResponse$Type extends MessageType<MutateCustomerUserAccessResponse> {
    constructor() {
        super("google.ads.googleads.v11.services.MutateCustomerUserAccessResponse", [
            { no: 1, name: "result", kind: "message", T: () => MutateCustomerUserAccessResult }
        ]);
    }
    create(value?: PartialMessage<MutateCustomerUserAccessResponse>): MutateCustomerUserAccessResponse {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MutateCustomerUserAccessResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MutateCustomerUserAccessResponse): MutateCustomerUserAccessResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.ads.googleads.v11.services.MutateCustomerUserAccessResult result */ 1:
                    message.result = MutateCustomerUserAccessResult.internalBinaryRead(reader, reader.uint32(), options, message.result);
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
    internalBinaryWrite(message: MutateCustomerUserAccessResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* google.ads.googleads.v11.services.MutateCustomerUserAccessResult result = 1; */
        if (message.result)
            MutateCustomerUserAccessResult.internalBinaryWrite(message.result, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.services.MutateCustomerUserAccessResponse
 */
export const MutateCustomerUserAccessResponse = new MutateCustomerUserAccessResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MutateCustomerUserAccessResult$Type extends MessageType<MutateCustomerUserAccessResult> {
    constructor() {
        super("google.ads.googleads.v11.services.MutateCustomerUserAccessResult", [
            { no: 1, name: "resource_name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.resource_reference": { type: "googleads.googleapis.com/CustomerUserAccess" } } }
        ]);
    }
    create(value?: PartialMessage<MutateCustomerUserAccessResult>): MutateCustomerUserAccessResult {
        const message = { resourceName: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MutateCustomerUserAccessResult>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MutateCustomerUserAccessResult): MutateCustomerUserAccessResult {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string resource_name */ 1:
                    message.resourceName = reader.string();
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
    internalBinaryWrite(message: MutateCustomerUserAccessResult, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string resource_name = 1; */
        if (message.resourceName !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.resourceName);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.services.MutateCustomerUserAccessResult
 */
export const MutateCustomerUserAccessResult = new MutateCustomerUserAccessResult$Type();
/**
 * @generated ServiceType for protobuf service google.ads.googleads.v11.services.CustomerUserAccessService
 */
export const CustomerUserAccessService = new ServiceType("google.ads.googleads.v11.services.CustomerUserAccessService", [
    { name: "MutateCustomerUserAccess", options: { "google.api.http": { post: "/v11/customers/{customer_id=*}/customerUserAccesses:mutate", body: "*" }, "google.api.method_signature": ["customer_id,operation"] }, I: MutateCustomerUserAccessRequest, O: MutateCustomerUserAccessResponse }
], { "google.api.default_host": "googleads.googleapis.com", "google.api.oauth_scopes": "https://www.googleapis.com/auth/adwords" });
