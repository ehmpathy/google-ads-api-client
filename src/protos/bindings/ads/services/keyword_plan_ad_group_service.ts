// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/services/keyword_plan_ad_group_service.proto" (package "google.ads.googleads.v11.services", syntax proto3)
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
import { KeywordPlanAdGroup } from "../resources/keyword_plan_ad_group";
import { FieldMask } from "../../google/protobuf/field_mask";
/**
 * Request message for [KeywordPlanAdGroupService.MutateKeywordPlanAdGroups][google.ads.googleads.v11.services.KeywordPlanAdGroupService.MutateKeywordPlanAdGroups].
 *
 * @generated from protobuf message google.ads.googleads.v11.services.MutateKeywordPlanAdGroupsRequest
 */
export interface MutateKeywordPlanAdGroupsRequest {
    /**
     * Required. The ID of the customer whose Keyword Plan ad groups are being modified.
     *
     * @generated from protobuf field: string customer_id = 1;
     */
    customerId: string;
    /**
     * Required. The list of operations to perform on individual Keyword Plan ad groups.
     *
     * @generated from protobuf field: repeated google.ads.googleads.v11.services.KeywordPlanAdGroupOperation operations = 2;
     */
    operations: KeywordPlanAdGroupOperation[];
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
}
/**
 * A single operation (create, update, remove) on a Keyword Plan ad group.
 *
 * @generated from protobuf message google.ads.googleads.v11.services.KeywordPlanAdGroupOperation
 */
export interface KeywordPlanAdGroupOperation {
    /**
     * The FieldMask that determines which resource fields are modified in an
     * update.
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
         * Create operation: No resource name is expected for the new Keyword Plan
         * ad group.
         *
         * @generated from protobuf field: google.ads.googleads.v11.resources.KeywordPlanAdGroup create = 1;
         */
        create: KeywordPlanAdGroup;
    } | {
        oneofKind: "update";
        /**
         * Update operation: The Keyword Plan ad group is expected to have a valid
         * resource name.
         *
         * @generated from protobuf field: google.ads.googleads.v11.resources.KeywordPlanAdGroup update = 2;
         */
        update: KeywordPlanAdGroup;
    } | {
        oneofKind: "remove";
        /**
         * Remove operation: A resource name for the removed Keyword Plan ad group
         * is expected, in this format:
         *
         * `customers/{customer_id}/keywordPlanAdGroups/{kp_ad_group_id}`
         *
         * @generated from protobuf field: string remove = 3;
         */
        remove: string;
    } | {
        oneofKind: undefined;
    };
}
/**
 * Response message for a Keyword Plan ad group mutate.
 *
 * @generated from protobuf message google.ads.googleads.v11.services.MutateKeywordPlanAdGroupsResponse
 */
export interface MutateKeywordPlanAdGroupsResponse {
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
     * All results for the mutate. The order of the results is determined by the
     * order of the keywords in the original request.
     *
     * @generated from protobuf field: repeated google.ads.googleads.v11.services.MutateKeywordPlanAdGroupResult results = 2;
     */
    results: MutateKeywordPlanAdGroupResult[];
}
/**
 * The result for the Keyword Plan ad group mutate.
 *
 * @generated from protobuf message google.ads.googleads.v11.services.MutateKeywordPlanAdGroupResult
 */
export interface MutateKeywordPlanAdGroupResult {
    /**
     * Returned for successful operations.
     *
     * @generated from protobuf field: string resource_name = 1;
     */
    resourceName: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class MutateKeywordPlanAdGroupsRequest$Type extends MessageType<MutateKeywordPlanAdGroupsRequest> {
    constructor() {
        super("google.ads.googleads.v11.services.MutateKeywordPlanAdGroupsRequest", [
            { no: 1, name: "customer_id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["REQUIRED"] } },
            { no: 2, name: "operations", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => KeywordPlanAdGroupOperation, options: { "google.api.field_behavior": ["REQUIRED"] } },
            { no: 3, name: "partial_failure", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "validate_only", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<MutateKeywordPlanAdGroupsRequest>): MutateKeywordPlanAdGroupsRequest {
        const message = { customerId: "", operations: [], partialFailure: false, validateOnly: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MutateKeywordPlanAdGroupsRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MutateKeywordPlanAdGroupsRequest): MutateKeywordPlanAdGroupsRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string customer_id */ 1:
                    message.customerId = reader.string();
                    break;
                case /* repeated google.ads.googleads.v11.services.KeywordPlanAdGroupOperation operations */ 2:
                    message.operations.push(KeywordPlanAdGroupOperation.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* bool partial_failure */ 3:
                    message.partialFailure = reader.bool();
                    break;
                case /* bool validate_only */ 4:
                    message.validateOnly = reader.bool();
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
    internalBinaryWrite(message: MutateKeywordPlanAdGroupsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string customer_id = 1; */
        if (message.customerId !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.customerId);
        /* repeated google.ads.googleads.v11.services.KeywordPlanAdGroupOperation operations = 2; */
        for (let i = 0; i < message.operations.length; i++)
            KeywordPlanAdGroupOperation.internalBinaryWrite(message.operations[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* bool partial_failure = 3; */
        if (message.partialFailure !== false)
            writer.tag(3, WireType.Varint).bool(message.partialFailure);
        /* bool validate_only = 4; */
        if (message.validateOnly !== false)
            writer.tag(4, WireType.Varint).bool(message.validateOnly);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.services.MutateKeywordPlanAdGroupsRequest
 */
export const MutateKeywordPlanAdGroupsRequest = new MutateKeywordPlanAdGroupsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class KeywordPlanAdGroupOperation$Type extends MessageType<KeywordPlanAdGroupOperation> {
    constructor() {
        super("google.ads.googleads.v11.services.KeywordPlanAdGroupOperation", [
            { no: 4, name: "update_mask", kind: "message", T: () => FieldMask },
            { no: 1, name: "create", kind: "message", oneof: "operation", T: () => KeywordPlanAdGroup },
            { no: 2, name: "update", kind: "message", oneof: "operation", T: () => KeywordPlanAdGroup },
            { no: 3, name: "remove", kind: "scalar", oneof: "operation", T: 9 /*ScalarType.STRING*/, options: { "google.api.resource_reference": { type: "googleads.googleapis.com/KeywordPlanAdGroup" } } }
        ]);
    }
    create(value?: PartialMessage<KeywordPlanAdGroupOperation>): KeywordPlanAdGroupOperation {
        const message = { operation: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<KeywordPlanAdGroupOperation>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: KeywordPlanAdGroupOperation): KeywordPlanAdGroupOperation {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.protobuf.FieldMask update_mask */ 4:
                    message.updateMask = FieldMask.internalBinaryRead(reader, reader.uint32(), options, message.updateMask);
                    break;
                case /* google.ads.googleads.v11.resources.KeywordPlanAdGroup create */ 1:
                    message.operation = {
                        oneofKind: "create",
                        create: KeywordPlanAdGroup.internalBinaryRead(reader, reader.uint32(), options, (message.operation as any).create)
                    };
                    break;
                case /* google.ads.googleads.v11.resources.KeywordPlanAdGroup update */ 2:
                    message.operation = {
                        oneofKind: "update",
                        update: KeywordPlanAdGroup.internalBinaryRead(reader, reader.uint32(), options, (message.operation as any).update)
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
    internalBinaryWrite(message: KeywordPlanAdGroupOperation, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* google.protobuf.FieldMask update_mask = 4; */
        if (message.updateMask)
            FieldMask.internalBinaryWrite(message.updateMask, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* google.ads.googleads.v11.resources.KeywordPlanAdGroup create = 1; */
        if (message.operation.oneofKind === "create")
            KeywordPlanAdGroup.internalBinaryWrite(message.operation.create, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* google.ads.googleads.v11.resources.KeywordPlanAdGroup update = 2; */
        if (message.operation.oneofKind === "update")
            KeywordPlanAdGroup.internalBinaryWrite(message.operation.update, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
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
 * @generated MessageType for protobuf message google.ads.googleads.v11.services.KeywordPlanAdGroupOperation
 */
export const KeywordPlanAdGroupOperation = new KeywordPlanAdGroupOperation$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MutateKeywordPlanAdGroupsResponse$Type extends MessageType<MutateKeywordPlanAdGroupsResponse> {
    constructor() {
        super("google.ads.googleads.v11.services.MutateKeywordPlanAdGroupsResponse", [
            { no: 3, name: "partial_failure_error", kind: "message", T: () => Status },
            { no: 2, name: "results", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => MutateKeywordPlanAdGroupResult }
        ]);
    }
    create(value?: PartialMessage<MutateKeywordPlanAdGroupsResponse>): MutateKeywordPlanAdGroupsResponse {
        const message = { results: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MutateKeywordPlanAdGroupsResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MutateKeywordPlanAdGroupsResponse): MutateKeywordPlanAdGroupsResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.rpc.Status partial_failure_error */ 3:
                    message.partialFailureError = Status.internalBinaryRead(reader, reader.uint32(), options, message.partialFailureError);
                    break;
                case /* repeated google.ads.googleads.v11.services.MutateKeywordPlanAdGroupResult results */ 2:
                    message.results.push(MutateKeywordPlanAdGroupResult.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: MutateKeywordPlanAdGroupsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* google.rpc.Status partial_failure_error = 3; */
        if (message.partialFailureError)
            Status.internalBinaryWrite(message.partialFailureError, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* repeated google.ads.googleads.v11.services.MutateKeywordPlanAdGroupResult results = 2; */
        for (let i = 0; i < message.results.length; i++)
            MutateKeywordPlanAdGroupResult.internalBinaryWrite(message.results[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.services.MutateKeywordPlanAdGroupsResponse
 */
export const MutateKeywordPlanAdGroupsResponse = new MutateKeywordPlanAdGroupsResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MutateKeywordPlanAdGroupResult$Type extends MessageType<MutateKeywordPlanAdGroupResult> {
    constructor() {
        super("google.ads.googleads.v11.services.MutateKeywordPlanAdGroupResult", [
            { no: 1, name: "resource_name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.resource_reference": { type: "googleads.googleapis.com/KeywordPlanAdGroup" } } }
        ]);
    }
    create(value?: PartialMessage<MutateKeywordPlanAdGroupResult>): MutateKeywordPlanAdGroupResult {
        const message = { resourceName: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MutateKeywordPlanAdGroupResult>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MutateKeywordPlanAdGroupResult): MutateKeywordPlanAdGroupResult {
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
    internalBinaryWrite(message: MutateKeywordPlanAdGroupResult, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
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
 * @generated MessageType for protobuf message google.ads.googleads.v11.services.MutateKeywordPlanAdGroupResult
 */
export const MutateKeywordPlanAdGroupResult = new MutateKeywordPlanAdGroupResult$Type();
/**
 * @generated ServiceType for protobuf service google.ads.googleads.v11.services.KeywordPlanAdGroupService
 */
export const KeywordPlanAdGroupService = new ServiceType("google.ads.googleads.v11.services.KeywordPlanAdGroupService", [
    { name: "MutateKeywordPlanAdGroups", options: { "google.api.http": { post: "/v11/customers/{customer_id=*}/keywordPlanAdGroups:mutate", body: "*" }, "google.api.method_signature": ["customer_id,operations"] }, I: MutateKeywordPlanAdGroupsRequest, O: MutateKeywordPlanAdGroupsResponse }
], { "google.api.default_host": "googleads.googleapis.com", "google.api.oauth_scopes": "https://www.googleapis.com/auth/adwords" });