// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/services/customer_extension_setting_service.proto" (package "google.ads.googleads.v11.services", syntax proto3)
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
import { Status } from "../../google/rpc/status";
import { CustomerExtensionSetting } from "../resources/customer_extension_setting";
import { FieldMask } from "../../google/protobuf/field_mask";
import { ResponseContentTypeEnum_ResponseContentType } from "../enums/response_content_type";
/**
 * Request message for
 * [CustomerExtensionSettingService.MutateCustomerExtensionSettings][google.ads.googleads.v11.services.CustomerExtensionSettingService.MutateCustomerExtensionSettings].
 *
 * @generated from protobuf message google.ads.googleads.v11.services.MutateCustomerExtensionSettingsRequest
 */
export interface MutateCustomerExtensionSettingsRequest {
    /**
     * Required. The ID of the customer whose customer extension settings are being
     * modified.
     *
     * @generated from protobuf field: string customer_id = 1;
     */
    customerId: string;
    /**
     * Required. The list of operations to perform on individual customer extension
     * settings.
     *
     * @generated from protobuf field: repeated google.ads.googleads.v11.services.CustomerExtensionSettingOperation operations = 2;
     */
    operations: CustomerExtensionSettingOperation[];
    /**
     * If true, successful operations will be carried out and invalid
     * operations will return errors. If false, all operations will be carried
     * out in one transaction if and only if they are all valid.
     * Default is false.
     *
     * @generated from protobuf field: bool partial_failure = 3;
     */
    partialFailure: boolean;
    /**
     * If true, the request is validated but not executed. Only errors are
     * returned, not results.
     *
     * @generated from protobuf field: bool validate_only = 4;
     */
    validateOnly: boolean;
    /**
     * The response content type setting. Determines whether the mutable resource
     * or just the resource name should be returned post mutation.
     *
     * @generated from protobuf field: google.ads.googleads.v11.enums.ResponseContentTypeEnum.ResponseContentType response_content_type = 5;
     */
    responseContentType: ResponseContentTypeEnum_ResponseContentType;
}
/**
 * A single operation (create, update, remove) on a customer extension setting.
 *
 * @generated from protobuf message google.ads.googleads.v11.services.CustomerExtensionSettingOperation
 */
export interface CustomerExtensionSettingOperation {
    /**
     * FieldMask that determines which resource fields are modified in an update.
     *
     * @generated from protobuf field: google.protobuf.FieldMask update_mask = 4;
     */
    updateMask?: FieldMask;
    /**
     * @generated from protobuf oneof: operation
     */
    operation: {
        oneofKind: "create";
        /**
         * Create operation: No resource name is expected for the new customer
         * extension setting.
         *
         * @generated from protobuf field: google.ads.googleads.v11.resources.CustomerExtensionSetting create = 1;
         */
        create: CustomerExtensionSetting;
    } | {
        oneofKind: "update";
        /**
         * Update operation: The customer extension setting is expected to have a
         * valid resource name.
         *
         * @generated from protobuf field: google.ads.googleads.v11.resources.CustomerExtensionSetting update = 2;
         */
        update: CustomerExtensionSetting;
    } | {
        oneofKind: "remove";
        /**
         * Remove operation: A resource name for the removed customer extension
         * setting is expected, in this format:
         *
         * `customers/{customer_id}/customerExtensionSettings/{extension_type}`
         *
         * @generated from protobuf field: string remove = 3;
         */
        remove: string;
    } | {
        oneofKind: undefined;
    };
}
/**
 * Response message for a customer extension setting mutate.
 *
 * @generated from protobuf message google.ads.googleads.v11.services.MutateCustomerExtensionSettingsResponse
 */
export interface MutateCustomerExtensionSettingsResponse {
    /**
     * Errors that pertain to operation failures in the partial failure mode.
     * Returned only when partial_failure = true and all errors occur inside the
     * operations. If any errors occur outside the operations (for example, auth
     * errors), we return an RPC level error.
     *
     * @generated from protobuf field: google.rpc.Status partial_failure_error = 3;
     */
    partialFailureError?: Status;
    /**
     * All results for the mutate.
     *
     * @generated from protobuf field: repeated google.ads.googleads.v11.services.MutateCustomerExtensionSettingResult results = 2;
     */
    results: MutateCustomerExtensionSettingResult[];
}
/**
 * The result for the customer extension setting mutate.
 *
 * @generated from protobuf message google.ads.googleads.v11.services.MutateCustomerExtensionSettingResult
 */
export interface MutateCustomerExtensionSettingResult {
    /**
     * Returned for successful operations.
     *
     * @generated from protobuf field: string resource_name = 1;
     */
    resourceName: string;
    /**
     * The mutated CustomerExtensionSetting with only mutable fields after mutate.
     * The field will only be returned when response_content_type is set to
     * "MUTABLE_RESOURCE".
     *
     * @generated from protobuf field: google.ads.googleads.v11.resources.CustomerExtensionSetting customer_extension_setting = 2;
     */
    customerExtensionSetting?: CustomerExtensionSetting;
}
// @generated message type with reflection information, may provide speed optimized methods
class MutateCustomerExtensionSettingsRequest$Type extends MessageType<MutateCustomerExtensionSettingsRequest> {
    constructor() {
        super("google.ads.googleads.v11.services.MutateCustomerExtensionSettingsRequest", [
            { no: 1, name: "customer_id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["REQUIRED"] } },
            { no: 2, name: "operations", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CustomerExtensionSettingOperation, options: { "google.api.field_behavior": ["REQUIRED"] } },
            { no: 3, name: "partial_failure", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "validate_only", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "response_content_type", kind: "enum", T: () => ["google.ads.googleads.v11.enums.ResponseContentTypeEnum.ResponseContentType", ResponseContentTypeEnum_ResponseContentType] }
        ]);
    }
    create(value?: PartialMessage<MutateCustomerExtensionSettingsRequest>): MutateCustomerExtensionSettingsRequest {
        const message = { customerId: "", operations: [], partialFailure: false, validateOnly: false, responseContentType: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MutateCustomerExtensionSettingsRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MutateCustomerExtensionSettingsRequest): MutateCustomerExtensionSettingsRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string customer_id */ 1:
                    message.customerId = reader.string();
                    break;
                case /* repeated google.ads.googleads.v11.services.CustomerExtensionSettingOperation operations */ 2:
                    message.operations.push(CustomerExtensionSettingOperation.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* bool partial_failure */ 3:
                    message.partialFailure = reader.bool();
                    break;
                case /* bool validate_only */ 4:
                    message.validateOnly = reader.bool();
                    break;
                case /* google.ads.googleads.v11.enums.ResponseContentTypeEnum.ResponseContentType response_content_type */ 5:
                    message.responseContentType = reader.int32();
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
    internalBinaryWrite(message: MutateCustomerExtensionSettingsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string customer_id = 1; */
        if (message.customerId !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.customerId);
        /* repeated google.ads.googleads.v11.services.CustomerExtensionSettingOperation operations = 2; */
        for (let i = 0; i < message.operations.length; i++)
            CustomerExtensionSettingOperation.internalBinaryWrite(message.operations[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* bool partial_failure = 3; */
        if (message.partialFailure !== false)
            writer.tag(3, WireType.Varint).bool(message.partialFailure);
        /* bool validate_only = 4; */
        if (message.validateOnly !== false)
            writer.tag(4, WireType.Varint).bool(message.validateOnly);
        /* google.ads.googleads.v11.enums.ResponseContentTypeEnum.ResponseContentType response_content_type = 5; */
        if (message.responseContentType !== 0)
            writer.tag(5, WireType.Varint).int32(message.responseContentType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.services.MutateCustomerExtensionSettingsRequest
 */
export const MutateCustomerExtensionSettingsRequest = new MutateCustomerExtensionSettingsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CustomerExtensionSettingOperation$Type extends MessageType<CustomerExtensionSettingOperation> {
    constructor() {
        super("google.ads.googleads.v11.services.CustomerExtensionSettingOperation", [
            { no: 4, name: "update_mask", kind: "message", T: () => FieldMask },
            { no: 1, name: "create", kind: "message", oneof: "operation", T: () => CustomerExtensionSetting },
            { no: 2, name: "update", kind: "message", oneof: "operation", T: () => CustomerExtensionSetting },
            { no: 3, name: "remove", kind: "scalar", oneof: "operation", T: 9 /*ScalarType.STRING*/, options: { "google.api.resource_reference": { type: "googleads.googleapis.com/CustomerExtensionSetting" } } }
        ]);
    }
    create(value?: PartialMessage<CustomerExtensionSettingOperation>): CustomerExtensionSettingOperation {
        const message = { operation: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CustomerExtensionSettingOperation>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CustomerExtensionSettingOperation): CustomerExtensionSettingOperation {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.protobuf.FieldMask update_mask */ 4:
                    message.updateMask = FieldMask.internalBinaryRead(reader, reader.uint32(), options, message.updateMask);
                    break;
                case /* google.ads.googleads.v11.resources.CustomerExtensionSetting create */ 1:
                    message.operation = {
                        oneofKind: "create",
                        create: CustomerExtensionSetting.internalBinaryRead(reader, reader.uint32(), options, (message.operation as any).create)
                    };
                    break;
                case /* google.ads.googleads.v11.resources.CustomerExtensionSetting update */ 2:
                    message.operation = {
                        oneofKind: "update",
                        update: CustomerExtensionSetting.internalBinaryRead(reader, reader.uint32(), options, (message.operation as any).update)
                    };
                    break;
                case /* string remove */ 3:
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
    internalBinaryWrite(message: CustomerExtensionSettingOperation, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* google.protobuf.FieldMask update_mask = 4; */
        if (message.updateMask)
            FieldMask.internalBinaryWrite(message.updateMask, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* google.ads.googleads.v11.resources.CustomerExtensionSetting create = 1; */
        if (message.operation.oneofKind === "create")
            CustomerExtensionSetting.internalBinaryWrite(message.operation.create, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* google.ads.googleads.v11.resources.CustomerExtensionSetting update = 2; */
        if (message.operation.oneofKind === "update")
            CustomerExtensionSetting.internalBinaryWrite(message.operation.update, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* string remove = 3; */
        if (message.operation.oneofKind === "remove")
            writer.tag(3, WireType.LengthDelimited).string(message.operation.remove);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.services.CustomerExtensionSettingOperation
 */
export const CustomerExtensionSettingOperation = new CustomerExtensionSettingOperation$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MutateCustomerExtensionSettingsResponse$Type extends MessageType<MutateCustomerExtensionSettingsResponse> {
    constructor() {
        super("google.ads.googleads.v11.services.MutateCustomerExtensionSettingsResponse", [
            { no: 3, name: "partial_failure_error", kind: "message", T: () => Status },
            { no: 2, name: "results", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => MutateCustomerExtensionSettingResult }
        ]);
    }
    create(value?: PartialMessage<MutateCustomerExtensionSettingsResponse>): MutateCustomerExtensionSettingsResponse {
        const message = { results: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MutateCustomerExtensionSettingsResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MutateCustomerExtensionSettingsResponse): MutateCustomerExtensionSettingsResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.rpc.Status partial_failure_error */ 3:
                    message.partialFailureError = Status.internalBinaryRead(reader, reader.uint32(), options, message.partialFailureError);
                    break;
                case /* repeated google.ads.googleads.v11.services.MutateCustomerExtensionSettingResult results */ 2:
                    message.results.push(MutateCustomerExtensionSettingResult.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: MutateCustomerExtensionSettingsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* google.rpc.Status partial_failure_error = 3; */
        if (message.partialFailureError)
            Status.internalBinaryWrite(message.partialFailureError, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* repeated google.ads.googleads.v11.services.MutateCustomerExtensionSettingResult results = 2; */
        for (let i = 0; i < message.results.length; i++)
            MutateCustomerExtensionSettingResult.internalBinaryWrite(message.results[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.services.MutateCustomerExtensionSettingsResponse
 */
export const MutateCustomerExtensionSettingsResponse = new MutateCustomerExtensionSettingsResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MutateCustomerExtensionSettingResult$Type extends MessageType<MutateCustomerExtensionSettingResult> {
    constructor() {
        super("google.ads.googleads.v11.services.MutateCustomerExtensionSettingResult", [
            { no: 1, name: "resource_name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.resource_reference": { type: "googleads.googleapis.com/CustomerExtensionSetting" } } },
            { no: 2, name: "customer_extension_setting", kind: "message", T: () => CustomerExtensionSetting }
        ]);
    }
    create(value?: PartialMessage<MutateCustomerExtensionSettingResult>): MutateCustomerExtensionSettingResult {
        const message = { resourceName: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MutateCustomerExtensionSettingResult>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MutateCustomerExtensionSettingResult): MutateCustomerExtensionSettingResult {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string resource_name */ 1:
                    message.resourceName = reader.string();
                    break;
                case /* google.ads.googleads.v11.resources.CustomerExtensionSetting customer_extension_setting */ 2:
                    message.customerExtensionSetting = CustomerExtensionSetting.internalBinaryRead(reader, reader.uint32(), options, message.customerExtensionSetting);
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
    internalBinaryWrite(message: MutateCustomerExtensionSettingResult, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string resource_name = 1; */
        if (message.resourceName !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.resourceName);
        /* google.ads.googleads.v11.resources.CustomerExtensionSetting customer_extension_setting = 2; */
        if (message.customerExtensionSetting)
            CustomerExtensionSetting.internalBinaryWrite(message.customerExtensionSetting, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.services.MutateCustomerExtensionSettingResult
 */
export const MutateCustomerExtensionSettingResult = new MutateCustomerExtensionSettingResult$Type();
/**
 * @generated ServiceType for protobuf service google.ads.googleads.v11.services.CustomerExtensionSettingService
 */
export const CustomerExtensionSettingService = new ServiceType("google.ads.googleads.v11.services.CustomerExtensionSettingService", [
    { name: "MutateCustomerExtensionSettings", options: { "google.api.http": { post: "/v11/customers/{customer_id=*}/customerExtensionSettings:mutate", body: "*" }, "google.api.method_signature": ["customer_id,operations"] }, I: MutateCustomerExtensionSettingsRequest, O: MutateCustomerExtensionSettingsResponse }
], { "google.api.default_host": "googleads.googleapis.com", "google.api.oauth_scopes": "https://www.googleapis.com/auth/adwords" });