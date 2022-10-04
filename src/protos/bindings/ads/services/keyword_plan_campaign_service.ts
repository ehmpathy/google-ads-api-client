// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/services/keyword_plan_campaign_service.proto" (package "google.ads.googleads.v11.services", syntax proto3)
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
import { KeywordPlanCampaign } from "../resources/keyword_plan_campaign";
import { FieldMask } from "../../google/protobuf/field_mask";
/**
 * Request message for
 * [KeywordPlanCampaignService.MutateKeywordPlanCampaigns][google.ads.googleads.v11.services.KeywordPlanCampaignService.MutateKeywordPlanCampaigns].
 *
 * @generated from protobuf message google.ads.googleads.v11.services.MutateKeywordPlanCampaignsRequest
 */
export interface MutateKeywordPlanCampaignsRequest {
    /**
     * Required. The ID of the customer whose Keyword Plan campaigns are being modified.
     *
     * @generated from protobuf field: string customer_id = 1;
     */
    customerId: string;
    /**
     * Required. The list of operations to perform on individual Keyword Plan campaigns.
     *
     * @generated from protobuf field: repeated google.ads.googleads.v11.services.KeywordPlanCampaignOperation operations = 2;
     */
    operations: KeywordPlanCampaignOperation[];
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
 * A single operation (create, update, remove) on a Keyword Plan campaign.
 *
 * @generated from protobuf message google.ads.googleads.v11.services.KeywordPlanCampaignOperation
 */
export interface KeywordPlanCampaignOperation {
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
         * campaign.
         *
         * @generated from protobuf field: google.ads.googleads.v11.resources.KeywordPlanCampaign create = 1;
         */
        create: KeywordPlanCampaign;
    } | {
        oneofKind: "update";
        /**
         * Update operation: The Keyword Plan campaign is expected to have a valid
         * resource name.
         *
         * @generated from protobuf field: google.ads.googleads.v11.resources.KeywordPlanCampaign update = 2;
         */
        update: KeywordPlanCampaign;
    } | {
        oneofKind: "remove";
        /**
         * Remove operation: A resource name for the removed Keyword Plan campaign
         * is expected, in this format:
         *
         * `customers/{customer_id}/keywordPlanCampaigns/{keywordPlan_campaign_id}`
         *
         * @generated from protobuf field: string remove = 3;
         */
        remove: string;
    } | {
        oneofKind: undefined;
    };
}
/**
 * Response message for a Keyword Plan campaign mutate.
 *
 * @generated from protobuf message google.ads.googleads.v11.services.MutateKeywordPlanCampaignsResponse
 */
export interface MutateKeywordPlanCampaignsResponse {
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
     * @generated from protobuf field: repeated google.ads.googleads.v11.services.MutateKeywordPlanCampaignResult results = 2;
     */
    results: MutateKeywordPlanCampaignResult[];
}
/**
 * The result for the Keyword Plan campaign mutate.
 *
 * @generated from protobuf message google.ads.googleads.v11.services.MutateKeywordPlanCampaignResult
 */
export interface MutateKeywordPlanCampaignResult {
    /**
     * Returned for successful operations.
     *
     * @generated from protobuf field: string resource_name = 1;
     */
    resourceName: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class MutateKeywordPlanCampaignsRequest$Type extends MessageType<MutateKeywordPlanCampaignsRequest> {
    constructor() {
        super("google.ads.googleads.v11.services.MutateKeywordPlanCampaignsRequest", [
            { no: 1, name: "customer_id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["REQUIRED"] } },
            { no: 2, name: "operations", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => KeywordPlanCampaignOperation, options: { "google.api.field_behavior": ["REQUIRED"] } },
            { no: 3, name: "partial_failure", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "validate_only", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<MutateKeywordPlanCampaignsRequest>): MutateKeywordPlanCampaignsRequest {
        const message = { customerId: "", operations: [], partialFailure: false, validateOnly: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MutateKeywordPlanCampaignsRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MutateKeywordPlanCampaignsRequest): MutateKeywordPlanCampaignsRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string customer_id */ 1:
                    message.customerId = reader.string();
                    break;
                case /* repeated google.ads.googleads.v11.services.KeywordPlanCampaignOperation operations */ 2:
                    message.operations.push(KeywordPlanCampaignOperation.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: MutateKeywordPlanCampaignsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string customer_id = 1; */
        if (message.customerId !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.customerId);
        /* repeated google.ads.googleads.v11.services.KeywordPlanCampaignOperation operations = 2; */
        for (let i = 0; i < message.operations.length; i++)
            KeywordPlanCampaignOperation.internalBinaryWrite(message.operations[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
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
 * @generated MessageType for protobuf message google.ads.googleads.v11.services.MutateKeywordPlanCampaignsRequest
 */
export const MutateKeywordPlanCampaignsRequest = new MutateKeywordPlanCampaignsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class KeywordPlanCampaignOperation$Type extends MessageType<KeywordPlanCampaignOperation> {
    constructor() {
        super("google.ads.googleads.v11.services.KeywordPlanCampaignOperation", [
            { no: 4, name: "update_mask", kind: "message", T: () => FieldMask },
            { no: 1, name: "create", kind: "message", oneof: "operation", T: () => KeywordPlanCampaign },
            { no: 2, name: "update", kind: "message", oneof: "operation", T: () => KeywordPlanCampaign },
            { no: 3, name: "remove", kind: "scalar", oneof: "operation", T: 9 /*ScalarType.STRING*/, options: { "google.api.resource_reference": { type: "googleads.googleapis.com/KeywordPlanCampaign" } } }
        ]);
    }
    create(value?: PartialMessage<KeywordPlanCampaignOperation>): KeywordPlanCampaignOperation {
        const message = { operation: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<KeywordPlanCampaignOperation>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: KeywordPlanCampaignOperation): KeywordPlanCampaignOperation {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.protobuf.FieldMask update_mask */ 4:
                    message.updateMask = FieldMask.internalBinaryRead(reader, reader.uint32(), options, message.updateMask);
                    break;
                case /* google.ads.googleads.v11.resources.KeywordPlanCampaign create */ 1:
                    message.operation = {
                        oneofKind: "create",
                        create: KeywordPlanCampaign.internalBinaryRead(reader, reader.uint32(), options, (message.operation as any).create)
                    };
                    break;
                case /* google.ads.googleads.v11.resources.KeywordPlanCampaign update */ 2:
                    message.operation = {
                        oneofKind: "update",
                        update: KeywordPlanCampaign.internalBinaryRead(reader, reader.uint32(), options, (message.operation as any).update)
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
    internalBinaryWrite(message: KeywordPlanCampaignOperation, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* google.protobuf.FieldMask update_mask = 4; */
        if (message.updateMask)
            FieldMask.internalBinaryWrite(message.updateMask, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* google.ads.googleads.v11.resources.KeywordPlanCampaign create = 1; */
        if (message.operation.oneofKind === "create")
            KeywordPlanCampaign.internalBinaryWrite(message.operation.create, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* google.ads.googleads.v11.resources.KeywordPlanCampaign update = 2; */
        if (message.operation.oneofKind === "update")
            KeywordPlanCampaign.internalBinaryWrite(message.operation.update, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
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
 * @generated MessageType for protobuf message google.ads.googleads.v11.services.KeywordPlanCampaignOperation
 */
export const KeywordPlanCampaignOperation = new KeywordPlanCampaignOperation$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MutateKeywordPlanCampaignsResponse$Type extends MessageType<MutateKeywordPlanCampaignsResponse> {
    constructor() {
        super("google.ads.googleads.v11.services.MutateKeywordPlanCampaignsResponse", [
            { no: 3, name: "partial_failure_error", kind: "message", T: () => Status },
            { no: 2, name: "results", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => MutateKeywordPlanCampaignResult }
        ]);
    }
    create(value?: PartialMessage<MutateKeywordPlanCampaignsResponse>): MutateKeywordPlanCampaignsResponse {
        const message = { results: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MutateKeywordPlanCampaignsResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MutateKeywordPlanCampaignsResponse): MutateKeywordPlanCampaignsResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.rpc.Status partial_failure_error */ 3:
                    message.partialFailureError = Status.internalBinaryRead(reader, reader.uint32(), options, message.partialFailureError);
                    break;
                case /* repeated google.ads.googleads.v11.services.MutateKeywordPlanCampaignResult results */ 2:
                    message.results.push(MutateKeywordPlanCampaignResult.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: MutateKeywordPlanCampaignsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* google.rpc.Status partial_failure_error = 3; */
        if (message.partialFailureError)
            Status.internalBinaryWrite(message.partialFailureError, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* repeated google.ads.googleads.v11.services.MutateKeywordPlanCampaignResult results = 2; */
        for (let i = 0; i < message.results.length; i++)
            MutateKeywordPlanCampaignResult.internalBinaryWrite(message.results[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.services.MutateKeywordPlanCampaignsResponse
 */
export const MutateKeywordPlanCampaignsResponse = new MutateKeywordPlanCampaignsResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MutateKeywordPlanCampaignResult$Type extends MessageType<MutateKeywordPlanCampaignResult> {
    constructor() {
        super("google.ads.googleads.v11.services.MutateKeywordPlanCampaignResult", [
            { no: 1, name: "resource_name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.resource_reference": { type: "googleads.googleapis.com/KeywordPlanCampaign" } } }
        ]);
    }
    create(value?: PartialMessage<MutateKeywordPlanCampaignResult>): MutateKeywordPlanCampaignResult {
        const message = { resourceName: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MutateKeywordPlanCampaignResult>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MutateKeywordPlanCampaignResult): MutateKeywordPlanCampaignResult {
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
    internalBinaryWrite(message: MutateKeywordPlanCampaignResult, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
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
 * @generated MessageType for protobuf message google.ads.googleads.v11.services.MutateKeywordPlanCampaignResult
 */
export const MutateKeywordPlanCampaignResult = new MutateKeywordPlanCampaignResult$Type();
/**
 * @generated ServiceType for protobuf service google.ads.googleads.v11.services.KeywordPlanCampaignService
 */
export const KeywordPlanCampaignService = new ServiceType("google.ads.googleads.v11.services.KeywordPlanCampaignService", [
    { name: "MutateKeywordPlanCampaigns", options: { "google.api.http": { post: "/v11/customers/{customer_id=*}/keywordPlanCampaigns:mutate", body: "*" }, "google.api.method_signature": ["customer_id,operations"] }, I: MutateKeywordPlanCampaignsRequest, O: MutateKeywordPlanCampaignsResponse }
], { "google.api.default_host": "googleads.googleapis.com", "google.api.oauth_scopes": "https://www.googleapis.com/auth/adwords" });
