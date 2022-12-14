// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/services/ad_group_criterion_customizer_service.proto" (package "google.ads.googleads.v11.services", syntax proto3)
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
import { AdGroupCriterionCustomizer } from "../resources/ad_group_criterion_customizer";
import { ResponseContentTypeEnum_ResponseContentType } from "../enums/response_content_type";
/**
 * Request message for
 * [AdGroupCriterionCustomizerService.MutateAdGroupCriterionCustomizers][google.ads.googleads.v11.services.AdGroupCriterionCustomizerService.MutateAdGroupCriterionCustomizers].
 *
 * @generated from protobuf message google.ads.googleads.v11.services.MutateAdGroupCriterionCustomizersRequest
 */
export interface MutateAdGroupCriterionCustomizersRequest {
    /**
     * Required. The ID of the customer whose ad group criterion customizers are being
     * modified.
     *
     * @generated from protobuf field: string customer_id = 1;
     */
    customerId: string;
    /**
     * Required. The list of operations to perform on individual ad group criterion
     * customizers.
     *
     * @generated from protobuf field: repeated google.ads.googleads.v11.services.AdGroupCriterionCustomizerOperation operations = 2;
     */
    operations: AdGroupCriterionCustomizerOperation[];
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
 * @generated from protobuf message google.ads.googleads.v11.services.AdGroupCriterionCustomizerOperation
 */
export interface AdGroupCriterionCustomizerOperation {
    /**
     * @generated from protobuf oneof: operation
     */
    operation: {
        oneofKind: "create";
        /**
         * Create operation: No resource name is expected for the new ad group
         * criterion customizer.
         *
         * @generated from protobuf field: google.ads.googleads.v11.resources.AdGroupCriterionCustomizer create = 1;
         */
        create: AdGroupCriterionCustomizer;
    } | {
        oneofKind: "remove";
        /**
         * Remove operation: A resource name for the removed ad group criterion
         * customizer is expected, in this format:
         *
         * `customers/{customer_id}/adGroupCriterionCustomizers/{ad_group_id}~{criterion_id}~{customizer_attribute_id}`
         *
         * @generated from protobuf field: string remove = 2;
         */
        remove: string;
    } | {
        oneofKind: undefined;
    };
}
/**
 * Response message for an ad group criterion customizer mutate.
 *
 * @generated from protobuf message google.ads.googleads.v11.services.MutateAdGroupCriterionCustomizersResponse
 */
export interface MutateAdGroupCriterionCustomizersResponse {
    /**
     * All results for the mutate.
     *
     * @generated from protobuf field: repeated google.ads.googleads.v11.services.MutateAdGroupCriterionCustomizerResult results = 1;
     */
    results: MutateAdGroupCriterionCustomizerResult[];
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
 * The result for the ad group criterion customizer mutate.
 *
 * @generated from protobuf message google.ads.googleads.v11.services.MutateAdGroupCriterionCustomizerResult
 */
export interface MutateAdGroupCriterionCustomizerResult {
    /**
     * Returned for successful operations.
     *
     * @generated from protobuf field: string resource_name = 1;
     */
    resourceName: string;
    /**
     * The mutated AdGroupCriterionCustomizer with only mutable fields after
     * mutate. The field will only be returned when response_content_type is set
     * to "MUTABLE_RESOURCE".
     *
     * @generated from protobuf field: google.ads.googleads.v11.resources.AdGroupCriterionCustomizer ad_group_criterion_customizer = 2;
     */
    adGroupCriterionCustomizer?: AdGroupCriterionCustomizer;
}
// @generated message type with reflection information, may provide speed optimized methods
class MutateAdGroupCriterionCustomizersRequest$Type extends MessageType<MutateAdGroupCriterionCustomizersRequest> {
    constructor() {
        super("google.ads.googleads.v11.services.MutateAdGroupCriterionCustomizersRequest", [
            { no: 1, name: "customer_id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["REQUIRED"] } },
            { no: 2, name: "operations", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => AdGroupCriterionCustomizerOperation, options: { "google.api.field_behavior": ["REQUIRED"] } },
            { no: 3, name: "partial_failure", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "validate_only", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "response_content_type", kind: "enum", T: () => ["google.ads.googleads.v11.enums.ResponseContentTypeEnum.ResponseContentType", ResponseContentTypeEnum_ResponseContentType] }
        ]);
    }
    create(value?: PartialMessage<MutateAdGroupCriterionCustomizersRequest>): MutateAdGroupCriterionCustomizersRequest {
        const message = { customerId: "", operations: [], partialFailure: false, validateOnly: false, responseContentType: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MutateAdGroupCriterionCustomizersRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MutateAdGroupCriterionCustomizersRequest): MutateAdGroupCriterionCustomizersRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string customer_id */ 1:
                    message.customerId = reader.string();
                    break;
                case /* repeated google.ads.googleads.v11.services.AdGroupCriterionCustomizerOperation operations */ 2:
                    message.operations.push(AdGroupCriterionCustomizerOperation.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: MutateAdGroupCriterionCustomizersRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string customer_id = 1; */
        if (message.customerId !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.customerId);
        /* repeated google.ads.googleads.v11.services.AdGroupCriterionCustomizerOperation operations = 2; */
        for (let i = 0; i < message.operations.length; i++)
            AdGroupCriterionCustomizerOperation.internalBinaryWrite(message.operations[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
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
 * @generated MessageType for protobuf message google.ads.googleads.v11.services.MutateAdGroupCriterionCustomizersRequest
 */
export const MutateAdGroupCriterionCustomizersRequest = new MutateAdGroupCriterionCustomizersRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AdGroupCriterionCustomizerOperation$Type extends MessageType<AdGroupCriterionCustomizerOperation> {
    constructor() {
        super("google.ads.googleads.v11.services.AdGroupCriterionCustomizerOperation", [
            { no: 1, name: "create", kind: "message", oneof: "operation", T: () => AdGroupCriterionCustomizer },
            { no: 2, name: "remove", kind: "scalar", oneof: "operation", T: 9 /*ScalarType.STRING*/, options: { "google.api.resource_reference": { type: "googleads.googleapis.com/AdGroupCriterionCustomizer" } } }
        ]);
    }
    create(value?: PartialMessage<AdGroupCriterionCustomizerOperation>): AdGroupCriterionCustomizerOperation {
        const message = { operation: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AdGroupCriterionCustomizerOperation>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AdGroupCriterionCustomizerOperation): AdGroupCriterionCustomizerOperation {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.ads.googleads.v11.resources.AdGroupCriterionCustomizer create */ 1:
                    message.operation = {
                        oneofKind: "create",
                        create: AdGroupCriterionCustomizer.internalBinaryRead(reader, reader.uint32(), options, (message.operation as any).create)
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
    internalBinaryWrite(message: AdGroupCriterionCustomizerOperation, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* google.ads.googleads.v11.resources.AdGroupCriterionCustomizer create = 1; */
        if (message.operation.oneofKind === "create")
            AdGroupCriterionCustomizer.internalBinaryWrite(message.operation.create, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
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
 * @generated MessageType for protobuf message google.ads.googleads.v11.services.AdGroupCriterionCustomizerOperation
 */
export const AdGroupCriterionCustomizerOperation = new AdGroupCriterionCustomizerOperation$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MutateAdGroupCriterionCustomizersResponse$Type extends MessageType<MutateAdGroupCriterionCustomizersResponse> {
    constructor() {
        super("google.ads.googleads.v11.services.MutateAdGroupCriterionCustomizersResponse", [
            { no: 1, name: "results", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => MutateAdGroupCriterionCustomizerResult },
            { no: 2, name: "partial_failure_error", kind: "message", T: () => Status }
        ]);
    }
    create(value?: PartialMessage<MutateAdGroupCriterionCustomizersResponse>): MutateAdGroupCriterionCustomizersResponse {
        const message = { results: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MutateAdGroupCriterionCustomizersResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MutateAdGroupCriterionCustomizersResponse): MutateAdGroupCriterionCustomizersResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated google.ads.googleads.v11.services.MutateAdGroupCriterionCustomizerResult results */ 1:
                    message.results.push(MutateAdGroupCriterionCustomizerResult.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: MutateAdGroupCriterionCustomizersResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated google.ads.googleads.v11.services.MutateAdGroupCriterionCustomizerResult results = 1; */
        for (let i = 0; i < message.results.length; i++)
            MutateAdGroupCriterionCustomizerResult.internalBinaryWrite(message.results[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
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
 * @generated MessageType for protobuf message google.ads.googleads.v11.services.MutateAdGroupCriterionCustomizersResponse
 */
export const MutateAdGroupCriterionCustomizersResponse = new MutateAdGroupCriterionCustomizersResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MutateAdGroupCriterionCustomizerResult$Type extends MessageType<MutateAdGroupCriterionCustomizerResult> {
    constructor() {
        super("google.ads.googleads.v11.services.MutateAdGroupCriterionCustomizerResult", [
            { no: 1, name: "resource_name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.resource_reference": { type: "googleads.googleapis.com/AdGroupCriterionCustomizer" } } },
            { no: 2, name: "ad_group_criterion_customizer", kind: "message", T: () => AdGroupCriterionCustomizer }
        ]);
    }
    create(value?: PartialMessage<MutateAdGroupCriterionCustomizerResult>): MutateAdGroupCriterionCustomizerResult {
        const message = { resourceName: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MutateAdGroupCriterionCustomizerResult>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MutateAdGroupCriterionCustomizerResult): MutateAdGroupCriterionCustomizerResult {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string resource_name */ 1:
                    message.resourceName = reader.string();
                    break;
                case /* google.ads.googleads.v11.resources.AdGroupCriterionCustomizer ad_group_criterion_customizer */ 2:
                    message.adGroupCriterionCustomizer = AdGroupCriterionCustomizer.internalBinaryRead(reader, reader.uint32(), options, message.adGroupCriterionCustomizer);
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
    internalBinaryWrite(message: MutateAdGroupCriterionCustomizerResult, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string resource_name = 1; */
        if (message.resourceName !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.resourceName);
        /* google.ads.googleads.v11.resources.AdGroupCriterionCustomizer ad_group_criterion_customizer = 2; */
        if (message.adGroupCriterionCustomizer)
            AdGroupCriterionCustomizer.internalBinaryWrite(message.adGroupCriterionCustomizer, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.services.MutateAdGroupCriterionCustomizerResult
 */
export const MutateAdGroupCriterionCustomizerResult = new MutateAdGroupCriterionCustomizerResult$Type();
/**
 * @generated ServiceType for protobuf service google.ads.googleads.v11.services.AdGroupCriterionCustomizerService
 */
export const AdGroupCriterionCustomizerService = new ServiceType("google.ads.googleads.v11.services.AdGroupCriterionCustomizerService", [
    { name: "MutateAdGroupCriterionCustomizers", options: { "google.api.http": { post: "/v11/customers/{customer_id=*}/AdGroupCriterionCustomizers:mutate", body: "*" }, "google.api.method_signature": ["customer_id,operations"] }, I: MutateAdGroupCriterionCustomizersRequest, O: MutateAdGroupCriterionCustomizersResponse }
], { "google.api.default_host": "googleads.googleapis.com", "google.api.oauth_scopes": "https://www.googleapis.com/auth/adwords" });
