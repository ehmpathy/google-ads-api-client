// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/services/customizer_attribute_service.proto" (package "google.ads.googleads.v11.services", syntax proto3)
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
import { CustomizerAttribute } from "../resources/customizer_attribute";
import { FieldMask } from "../../google/protobuf/field_mask";
import { ResponseContentTypeEnum_ResponseContentType } from "../enums/response_content_type";
/**
 * Request message for
 * [CustomizerAttributeService.MutateCustomizerAttributes][google.ads.googleads.v11.services.CustomizerAttributeService.MutateCustomizerAttributes].
 *
 * @generated from protobuf message google.ads.googleads.v11.services.MutateCustomizerAttributesRequest
 */
export interface MutateCustomizerAttributesRequest {
    /**
     * Required. The ID of the customer whose customizer attributes are being modified.
     *
     * @generated from protobuf field: string customer_id = 1;
     */
    customerId: string;
    /**
     * Required. The list of operations to perform on individual customizer attributes.
     *
     * @generated from protobuf field: repeated google.ads.googleads.v11.services.CustomizerAttributeOperation operations = 2;
     */
    operations: CustomizerAttributeOperation[];
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
 * A single operation (create, remove) on an customizer attribute.
 *
 * @generated from protobuf message google.ads.googleads.v11.services.CustomizerAttributeOperation
 */
export interface CustomizerAttributeOperation {
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
         * Create operation: No resource name is expected for the new customizer
         * attribute
         *
         * @generated from protobuf field: google.ads.googleads.v11.resources.CustomizerAttribute create = 1;
         */
        create: CustomizerAttribute;
    } | {
        oneofKind: "remove";
        /**
         * Remove operation: A resource name for the removed customizer attribute is
         * expected, in this format:
         * `customers/{customer_id}/customizerAttributes/{customizer_attribute_id}`
         *
         * @generated from protobuf field: string remove = 2;
         */
        remove: string;
    } | {
        oneofKind: undefined;
    };
}
/**
 * Response message for an customizer attribute mutate.
 *
 * @generated from protobuf message google.ads.googleads.v11.services.MutateCustomizerAttributesResponse
 */
export interface MutateCustomizerAttributesResponse {
    /**
     * All results for the mutate.
     *
     * @generated from protobuf field: repeated google.ads.googleads.v11.services.MutateCustomizerAttributeResult results = 1;
     */
    results: MutateCustomizerAttributeResult[];
    /**
     * Errors that pertain to operation failures in the partial failure mode.
     * Returned only when partial_failure = true and all errors occur inside the
     * operations. If any errors occur outside the operations (for example, auth
     * errors), we return an RPC level error.
     *
     * @generated from protobuf field: google.rpc.Status partial_failure_error = 2;
     */
    partialFailureError?: Status;
}
/**
 * The result for the customizer attribute mutate.
 *
 * @generated from protobuf message google.ads.googleads.v11.services.MutateCustomizerAttributeResult
 */
export interface MutateCustomizerAttributeResult {
    /**
     * Returned for successful operations.
     *
     * @generated from protobuf field: string resource_name = 1;
     */
    resourceName: string;
    /**
     * The mutated CustomizerAttribute with only mutable fields after mutate.
     * The field will only be returned when response_content_type is set to
     * "MUTABLE_RESOURCE".
     *
     * @generated from protobuf field: google.ads.googleads.v11.resources.CustomizerAttribute customizer_attribute = 2;
     */
    customizerAttribute?: CustomizerAttribute;
}
// @generated message type with reflection information, may provide speed optimized methods
class MutateCustomizerAttributesRequest$Type extends MessageType<MutateCustomizerAttributesRequest> {
    constructor() {
        super("google.ads.googleads.v11.services.MutateCustomizerAttributesRequest", [
            { no: 1, name: "customer_id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["REQUIRED"] } },
            { no: 2, name: "operations", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CustomizerAttributeOperation, options: { "google.api.field_behavior": ["REQUIRED"] } },
            { no: 3, name: "partial_failure", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "validate_only", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "response_content_type", kind: "enum", T: () => ["google.ads.googleads.v11.enums.ResponseContentTypeEnum.ResponseContentType", ResponseContentTypeEnum_ResponseContentType] }
        ]);
    }
    create(value?: PartialMessage<MutateCustomizerAttributesRequest>): MutateCustomizerAttributesRequest {
        const message = { customerId: "", operations: [], partialFailure: false, validateOnly: false, responseContentType: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MutateCustomizerAttributesRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MutateCustomizerAttributesRequest): MutateCustomizerAttributesRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string customer_id */ 1:
                    message.customerId = reader.string();
                    break;
                case /* repeated google.ads.googleads.v11.services.CustomizerAttributeOperation operations */ 2:
                    message.operations.push(CustomizerAttributeOperation.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: MutateCustomizerAttributesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string customer_id = 1; */
        if (message.customerId !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.customerId);
        /* repeated google.ads.googleads.v11.services.CustomizerAttributeOperation operations = 2; */
        for (let i = 0; i < message.operations.length; i++)
            CustomizerAttributeOperation.internalBinaryWrite(message.operations[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
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
 * @generated MessageType for protobuf message google.ads.googleads.v11.services.MutateCustomizerAttributesRequest
 */
export const MutateCustomizerAttributesRequest = new MutateCustomizerAttributesRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CustomizerAttributeOperation$Type extends MessageType<CustomizerAttributeOperation> {
    constructor() {
        super("google.ads.googleads.v11.services.CustomizerAttributeOperation", [
            { no: 4, name: "update_mask", kind: "message", T: () => FieldMask },
            { no: 1, name: "create", kind: "message", oneof: "operation", T: () => CustomizerAttribute },
            { no: 2, name: "remove", kind: "scalar", oneof: "operation", T: 9 /*ScalarType.STRING*/, options: { "google.api.resource_reference": { type: "googleads.googleapis.com/CustomizerAttribute" } } }
        ]);
    }
    create(value?: PartialMessage<CustomizerAttributeOperation>): CustomizerAttributeOperation {
        const message = { operation: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CustomizerAttributeOperation>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CustomizerAttributeOperation): CustomizerAttributeOperation {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.protobuf.FieldMask update_mask */ 4:
                    message.updateMask = FieldMask.internalBinaryRead(reader, reader.uint32(), options, message.updateMask);
                    break;
                case /* google.ads.googleads.v11.resources.CustomizerAttribute create */ 1:
                    message.operation = {
                        oneofKind: "create",
                        create: CustomizerAttribute.internalBinaryRead(reader, reader.uint32(), options, (message.operation as any).create)
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
    internalBinaryWrite(message: CustomizerAttributeOperation, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* google.protobuf.FieldMask update_mask = 4; */
        if (message.updateMask)
            FieldMask.internalBinaryWrite(message.updateMask, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* google.ads.googleads.v11.resources.CustomizerAttribute create = 1; */
        if (message.operation.oneofKind === "create")
            CustomizerAttribute.internalBinaryWrite(message.operation.create, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
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
 * @generated MessageType for protobuf message google.ads.googleads.v11.services.CustomizerAttributeOperation
 */
export const CustomizerAttributeOperation = new CustomizerAttributeOperation$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MutateCustomizerAttributesResponse$Type extends MessageType<MutateCustomizerAttributesResponse> {
    constructor() {
        super("google.ads.googleads.v11.services.MutateCustomizerAttributesResponse", [
            { no: 1, name: "results", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => MutateCustomizerAttributeResult },
            { no: 2, name: "partial_failure_error", kind: "message", T: () => Status }
        ]);
    }
    create(value?: PartialMessage<MutateCustomizerAttributesResponse>): MutateCustomizerAttributesResponse {
        const message = { results: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MutateCustomizerAttributesResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MutateCustomizerAttributesResponse): MutateCustomizerAttributesResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated google.ads.googleads.v11.services.MutateCustomizerAttributeResult results */ 1:
                    message.results.push(MutateCustomizerAttributeResult.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* google.rpc.Status partial_failure_error */ 2:
                    message.partialFailureError = Status.internalBinaryRead(reader, reader.uint32(), options, message.partialFailureError);
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
    internalBinaryWrite(message: MutateCustomizerAttributesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated google.ads.googleads.v11.services.MutateCustomizerAttributeResult results = 1; */
        for (let i = 0; i < message.results.length; i++)
            MutateCustomizerAttributeResult.internalBinaryWrite(message.results[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* google.rpc.Status partial_failure_error = 2; */
        if (message.partialFailureError)
            Status.internalBinaryWrite(message.partialFailureError, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.services.MutateCustomizerAttributesResponse
 */
export const MutateCustomizerAttributesResponse = new MutateCustomizerAttributesResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MutateCustomizerAttributeResult$Type extends MessageType<MutateCustomizerAttributeResult> {
    constructor() {
        super("google.ads.googleads.v11.services.MutateCustomizerAttributeResult", [
            { no: 1, name: "resource_name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.resource_reference": { type: "googleads.googleapis.com/CustomizerAttribute" } } },
            { no: 2, name: "customizer_attribute", kind: "message", T: () => CustomizerAttribute }
        ]);
    }
    create(value?: PartialMessage<MutateCustomizerAttributeResult>): MutateCustomizerAttributeResult {
        const message = { resourceName: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MutateCustomizerAttributeResult>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MutateCustomizerAttributeResult): MutateCustomizerAttributeResult {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string resource_name */ 1:
                    message.resourceName = reader.string();
                    break;
                case /* google.ads.googleads.v11.resources.CustomizerAttribute customizer_attribute */ 2:
                    message.customizerAttribute = CustomizerAttribute.internalBinaryRead(reader, reader.uint32(), options, message.customizerAttribute);
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
    internalBinaryWrite(message: MutateCustomizerAttributeResult, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string resource_name = 1; */
        if (message.resourceName !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.resourceName);
        /* google.ads.googleads.v11.resources.CustomizerAttribute customizer_attribute = 2; */
        if (message.customizerAttribute)
            CustomizerAttribute.internalBinaryWrite(message.customizerAttribute, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.services.MutateCustomizerAttributeResult
 */
export const MutateCustomizerAttributeResult = new MutateCustomizerAttributeResult$Type();
/**
 * @generated ServiceType for protobuf service google.ads.googleads.v11.services.CustomizerAttributeService
 */
export const CustomizerAttributeService = new ServiceType("google.ads.googleads.v11.services.CustomizerAttributeService", [
    { name: "MutateCustomizerAttributes", options: { "google.api.http": { post: "/v11/customers/{customer_id=*}/customizerAttributes:mutate", body: "*" }, "google.api.method_signature": ["customer_id,operations"] }, I: MutateCustomizerAttributesRequest, O: MutateCustomizerAttributesResponse }
], { "google.api.default_host": "googleads.googleapis.com", "google.api.oauth_scopes": "https://www.googleapis.com/auth/adwords" });
