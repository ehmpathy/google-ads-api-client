// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/services/conversion_value_rule_service.proto" (package "google.ads.googleads.v11.services", syntax proto3)
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
import { ConversionValueRule } from "../resources/conversion_value_rule";
import { FieldMask } from "../../google/protobuf/field_mask";
import { ResponseContentTypeEnum_ResponseContentType } from "../enums/response_content_type";
/**
 * Request message for
 * [ConversionValueRuleService.MutateConversionValueRules][google.ads.googleads.v11.services.ConversionValueRuleService.MutateConversionValueRules].
 *
 * @generated from protobuf message google.ads.googleads.v11.services.MutateConversionValueRulesRequest
 */
export interface MutateConversionValueRulesRequest {
    /**
     * Required. The ID of the customer whose conversion value rules are being modified.
     *
     * @generated from protobuf field: string customer_id = 1;
     */
    customerId: string;
    /**
     * Required. The list of operations to perform on individual conversion value rules.
     *
     * @generated from protobuf field: repeated google.ads.googleads.v11.services.ConversionValueRuleOperation operations = 2;
     */
    operations: ConversionValueRuleOperation[];
    /**
     * If true, successful operations will be carried out and invalid
     * operations will return errors. If false, all operations will be carried
     * out in one transaction if and only if they are all valid.
     * Default is false.
     *
     * @generated from protobuf field: bool partial_failure = 5;
     */
    partialFailure: boolean;
    /**
     * If true, the request is validated but not executed. Only errors are
     * returned, not results.
     *
     * @generated from protobuf field: bool validate_only = 3;
     */
    validateOnly: boolean;
    /**
     * The response content type setting. Determines whether the mutable resource
     * or just the resource name should be returned post mutation.
     *
     * @generated from protobuf field: google.ads.googleads.v11.enums.ResponseContentTypeEnum.ResponseContentType response_content_type = 4;
     */
    responseContentType: ResponseContentTypeEnum_ResponseContentType;
}
/**
 * A single operation (create, update, remove) on a conversion value rule.
 *
 * @generated from protobuf message google.ads.googleads.v11.services.ConversionValueRuleOperation
 */
export interface ConversionValueRuleOperation {
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
         * Create operation: No resource name is expected for the new conversion
         * value rule.
         *
         * @generated from protobuf field: google.ads.googleads.v11.resources.ConversionValueRule create = 1;
         */
        create: ConversionValueRule;
    } | {
        oneofKind: "update";
        /**
         * Update operation: The conversion value rule is expected to have a valid
         * resource name.
         *
         * @generated from protobuf field: google.ads.googleads.v11.resources.ConversionValueRule update = 2;
         */
        update: ConversionValueRule;
    } | {
        oneofKind: "remove";
        /**
         * Remove operation: A resource name for the removed conversion value rule
         * is expected, in this format:
         *
         * `customers/{customer_id}/conversionValueRules/{conversion_value_rule_id}`
         *
         * @generated from protobuf field: string remove = 3;
         */
        remove: string;
    } | {
        oneofKind: undefined;
    };
}
/**
 * Response message for
 * [ConversionValueRuleService.MutateConversionValueRules][google.ads.googleads.v11.services.ConversionValueRuleService.MutateConversionValueRules].
 *
 * @generated from protobuf message google.ads.googleads.v11.services.MutateConversionValueRulesResponse
 */
export interface MutateConversionValueRulesResponse {
    /**
     * All results for the mutate.
     *
     * @generated from protobuf field: repeated google.ads.googleads.v11.services.MutateConversionValueRuleResult results = 2;
     */
    results: MutateConversionValueRuleResult[];
    /**
     * Errors that pertain to operation failures in the partial failure mode.
     * Returned only when partial_failure = true and all errors occur inside the
     * operations. If any errors occur outside the operations (for example, auth
     * errors), we return an RPC level error.
     *
     * @generated from protobuf field: google.rpc.Status partial_failure_error = 3;
     */
    partialFailureError?: Status;
}
/**
 * The result for the conversion value rule mutate.
 *
 * @generated from protobuf message google.ads.googleads.v11.services.MutateConversionValueRuleResult
 */
export interface MutateConversionValueRuleResult {
    /**
     * Returned for successful operations.
     *
     * @generated from protobuf field: string resource_name = 1;
     */
    resourceName: string;
    /**
     * The mutated conversion value rule with only mutable fields after
     * mutate. The field will only be returned when response_content_type is set
     * to "MUTABLE_RESOURCE".
     *
     * @generated from protobuf field: google.ads.googleads.v11.resources.ConversionValueRule conversion_value_rule = 2;
     */
    conversionValueRule?: ConversionValueRule;
}
// @generated message type with reflection information, may provide speed optimized methods
class MutateConversionValueRulesRequest$Type extends MessageType<MutateConversionValueRulesRequest> {
    constructor() {
        super("google.ads.googleads.v11.services.MutateConversionValueRulesRequest", [
            { no: 1, name: "customer_id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["REQUIRED"] } },
            { no: 2, name: "operations", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ConversionValueRuleOperation, options: { "google.api.field_behavior": ["REQUIRED"] } },
            { no: 5, name: "partial_failure", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "validate_only", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "response_content_type", kind: "enum", T: () => ["google.ads.googleads.v11.enums.ResponseContentTypeEnum.ResponseContentType", ResponseContentTypeEnum_ResponseContentType] }
        ]);
    }
    create(value?: PartialMessage<MutateConversionValueRulesRequest>): MutateConversionValueRulesRequest {
        const message = { customerId: "", operations: [], partialFailure: false, validateOnly: false, responseContentType: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MutateConversionValueRulesRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MutateConversionValueRulesRequest): MutateConversionValueRulesRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string customer_id */ 1:
                    message.customerId = reader.string();
                    break;
                case /* repeated google.ads.googleads.v11.services.ConversionValueRuleOperation operations */ 2:
                    message.operations.push(ConversionValueRuleOperation.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* bool partial_failure */ 5:
                    message.partialFailure = reader.bool();
                    break;
                case /* bool validate_only */ 3:
                    message.validateOnly = reader.bool();
                    break;
                case /* google.ads.googleads.v11.enums.ResponseContentTypeEnum.ResponseContentType response_content_type */ 4:
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
    internalBinaryWrite(message: MutateConversionValueRulesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string customer_id = 1; */
        if (message.customerId !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.customerId);
        /* repeated google.ads.googleads.v11.services.ConversionValueRuleOperation operations = 2; */
        for (let i = 0; i < message.operations.length; i++)
            ConversionValueRuleOperation.internalBinaryWrite(message.operations[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* bool partial_failure = 5; */
        if (message.partialFailure !== false)
            writer.tag(5, WireType.Varint).bool(message.partialFailure);
        /* bool validate_only = 3; */
        if (message.validateOnly !== false)
            writer.tag(3, WireType.Varint).bool(message.validateOnly);
        /* google.ads.googleads.v11.enums.ResponseContentTypeEnum.ResponseContentType response_content_type = 4; */
        if (message.responseContentType !== 0)
            writer.tag(4, WireType.Varint).int32(message.responseContentType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.services.MutateConversionValueRulesRequest
 */
export const MutateConversionValueRulesRequest = new MutateConversionValueRulesRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ConversionValueRuleOperation$Type extends MessageType<ConversionValueRuleOperation> {
    constructor() {
        super("google.ads.googleads.v11.services.ConversionValueRuleOperation", [
            { no: 4, name: "update_mask", kind: "message", T: () => FieldMask },
            { no: 1, name: "create", kind: "message", oneof: "operation", T: () => ConversionValueRule },
            { no: 2, name: "update", kind: "message", oneof: "operation", T: () => ConversionValueRule },
            { no: 3, name: "remove", kind: "scalar", oneof: "operation", T: 9 /*ScalarType.STRING*/, options: { "google.api.resource_reference": { type: "googleads.googleapis.com/ConversionValueRule" } } }
        ]);
    }
    create(value?: PartialMessage<ConversionValueRuleOperation>): ConversionValueRuleOperation {
        const message = { operation: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ConversionValueRuleOperation>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ConversionValueRuleOperation): ConversionValueRuleOperation {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.protobuf.FieldMask update_mask */ 4:
                    message.updateMask = FieldMask.internalBinaryRead(reader, reader.uint32(), options, message.updateMask);
                    break;
                case /* google.ads.googleads.v11.resources.ConversionValueRule create */ 1:
                    message.operation = {
                        oneofKind: "create",
                        create: ConversionValueRule.internalBinaryRead(reader, reader.uint32(), options, (message.operation as any).create)
                    };
                    break;
                case /* google.ads.googleads.v11.resources.ConversionValueRule update */ 2:
                    message.operation = {
                        oneofKind: "update",
                        update: ConversionValueRule.internalBinaryRead(reader, reader.uint32(), options, (message.operation as any).update)
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
    internalBinaryWrite(message: ConversionValueRuleOperation, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* google.protobuf.FieldMask update_mask = 4; */
        if (message.updateMask)
            FieldMask.internalBinaryWrite(message.updateMask, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* google.ads.googleads.v11.resources.ConversionValueRule create = 1; */
        if (message.operation.oneofKind === "create")
            ConversionValueRule.internalBinaryWrite(message.operation.create, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* google.ads.googleads.v11.resources.ConversionValueRule update = 2; */
        if (message.operation.oneofKind === "update")
            ConversionValueRule.internalBinaryWrite(message.operation.update, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
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
 * @generated MessageType for protobuf message google.ads.googleads.v11.services.ConversionValueRuleOperation
 */
export const ConversionValueRuleOperation = new ConversionValueRuleOperation$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MutateConversionValueRulesResponse$Type extends MessageType<MutateConversionValueRulesResponse> {
    constructor() {
        super("google.ads.googleads.v11.services.MutateConversionValueRulesResponse", [
            { no: 2, name: "results", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => MutateConversionValueRuleResult },
            { no: 3, name: "partial_failure_error", kind: "message", T: () => Status }
        ]);
    }
    create(value?: PartialMessage<MutateConversionValueRulesResponse>): MutateConversionValueRulesResponse {
        const message = { results: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MutateConversionValueRulesResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MutateConversionValueRulesResponse): MutateConversionValueRulesResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated google.ads.googleads.v11.services.MutateConversionValueRuleResult results */ 2:
                    message.results.push(MutateConversionValueRuleResult.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* google.rpc.Status partial_failure_error */ 3:
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
    internalBinaryWrite(message: MutateConversionValueRulesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated google.ads.googleads.v11.services.MutateConversionValueRuleResult results = 2; */
        for (let i = 0; i < message.results.length; i++)
            MutateConversionValueRuleResult.internalBinaryWrite(message.results[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* google.rpc.Status partial_failure_error = 3; */
        if (message.partialFailureError)
            Status.internalBinaryWrite(message.partialFailureError, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.services.MutateConversionValueRulesResponse
 */
export const MutateConversionValueRulesResponse = new MutateConversionValueRulesResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MutateConversionValueRuleResult$Type extends MessageType<MutateConversionValueRuleResult> {
    constructor() {
        super("google.ads.googleads.v11.services.MutateConversionValueRuleResult", [
            { no: 1, name: "resource_name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.resource_reference": { type: "googleads.googleapis.com/ConversionValueRule" } } },
            { no: 2, name: "conversion_value_rule", kind: "message", T: () => ConversionValueRule }
        ]);
    }
    create(value?: PartialMessage<MutateConversionValueRuleResult>): MutateConversionValueRuleResult {
        const message = { resourceName: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MutateConversionValueRuleResult>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MutateConversionValueRuleResult): MutateConversionValueRuleResult {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string resource_name */ 1:
                    message.resourceName = reader.string();
                    break;
                case /* google.ads.googleads.v11.resources.ConversionValueRule conversion_value_rule */ 2:
                    message.conversionValueRule = ConversionValueRule.internalBinaryRead(reader, reader.uint32(), options, message.conversionValueRule);
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
    internalBinaryWrite(message: MutateConversionValueRuleResult, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string resource_name = 1; */
        if (message.resourceName !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.resourceName);
        /* google.ads.googleads.v11.resources.ConversionValueRule conversion_value_rule = 2; */
        if (message.conversionValueRule)
            ConversionValueRule.internalBinaryWrite(message.conversionValueRule, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.services.MutateConversionValueRuleResult
 */
export const MutateConversionValueRuleResult = new MutateConversionValueRuleResult$Type();
/**
 * @generated ServiceType for protobuf service google.ads.googleads.v11.services.ConversionValueRuleService
 */
export const ConversionValueRuleService = new ServiceType("google.ads.googleads.v11.services.ConversionValueRuleService", [
    { name: "MutateConversionValueRules", options: { "google.api.http": { post: "/v11/customers/{customer_id=*}/conversionValueRules:mutate", body: "*" }, "google.api.method_signature": ["customer_id,operations"] }, I: MutateConversionValueRulesRequest, O: MutateConversionValueRulesResponse }
], { "google.api.default_host": "googleads.googleapis.com", "google.api.oauth_scopes": "https://www.googleapis.com/auth/adwords" });