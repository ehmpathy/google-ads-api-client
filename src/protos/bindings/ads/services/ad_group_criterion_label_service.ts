// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/services/ad_group_criterion_label_service.proto" (package "google.ads.googleads.v11.services", syntax proto3)
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
import { AdGroupCriterionLabel } from "../resources/ad_group_criterion_label";
/**
 * Request message for
 * [AdGroupCriterionLabelService.MutateAdGroupCriterionLabels][google.ads.googleads.v11.services.AdGroupCriterionLabelService.MutateAdGroupCriterionLabels].
 *
 * @generated from protobuf message google.ads.googleads.v11.services.MutateAdGroupCriterionLabelsRequest
 */
export interface MutateAdGroupCriterionLabelsRequest {
    /**
     * Required. ID of the customer whose ad group criterion labels are being modified.
     *
     * @generated from protobuf field: string customer_id = 1;
     */
    customerId: string;
    /**
     * Required. The list of operations to perform on ad group criterion labels.
     *
     * @generated from protobuf field: repeated google.ads.googleads.v11.services.AdGroupCriterionLabelOperation operations = 2;
     */
    operations: AdGroupCriterionLabelOperation[];
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
 * A single operation (create, remove) on an ad group criterion label.
 *
 * @generated from protobuf message google.ads.googleads.v11.services.AdGroupCriterionLabelOperation
 */
export interface AdGroupCriterionLabelOperation {
    /**
     * @generated from protobuf oneof: operation
     */
    operation: {
        oneofKind: "create";
        /**
         * Create operation: No resource name is expected for the new ad group
         * label.
         *
         * @generated from protobuf field: google.ads.googleads.v11.resources.AdGroupCriterionLabel create = 1;
         */
        create: AdGroupCriterionLabel;
    } | {
        oneofKind: "remove";
        /**
         * Remove operation: A resource name for the ad group criterion label
         * being removed, in this format:
         *
         * `customers/{customer_id}/adGroupCriterionLabels/{ad_group_id}~{criterion_id}~{label_id}`
         *
         * @generated from protobuf field: string remove = 2;
         */
        remove: string;
    } | {
        oneofKind: undefined;
    };
}
/**
 * Response message for an ad group criterion labels mutate.
 *
 * @generated from protobuf message google.ads.googleads.v11.services.MutateAdGroupCriterionLabelsResponse
 */
export interface MutateAdGroupCriterionLabelsResponse {
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
     * @generated from protobuf field: repeated google.ads.googleads.v11.services.MutateAdGroupCriterionLabelResult results = 2;
     */
    results: MutateAdGroupCriterionLabelResult[];
}
/**
 * The result for an ad group criterion label mutate.
 *
 * @generated from protobuf message google.ads.googleads.v11.services.MutateAdGroupCriterionLabelResult
 */
export interface MutateAdGroupCriterionLabelResult {
    /**
     * Returned for successful operations.
     *
     * @generated from protobuf field: string resource_name = 1;
     */
    resourceName: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class MutateAdGroupCriterionLabelsRequest$Type extends MessageType<MutateAdGroupCriterionLabelsRequest> {
    constructor() {
        super("google.ads.googleads.v11.services.MutateAdGroupCriterionLabelsRequest", [
            { no: 1, name: "customer_id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["REQUIRED"] } },
            { no: 2, name: "operations", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => AdGroupCriterionLabelOperation, options: { "google.api.field_behavior": ["REQUIRED"] } },
            { no: 3, name: "partial_failure", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "validate_only", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<MutateAdGroupCriterionLabelsRequest>): MutateAdGroupCriterionLabelsRequest {
        const message = { customerId: "", operations: [], partialFailure: false, validateOnly: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MutateAdGroupCriterionLabelsRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MutateAdGroupCriterionLabelsRequest): MutateAdGroupCriterionLabelsRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string customer_id */ 1:
                    message.customerId = reader.string();
                    break;
                case /* repeated google.ads.googleads.v11.services.AdGroupCriterionLabelOperation operations */ 2:
                    message.operations.push(AdGroupCriterionLabelOperation.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: MutateAdGroupCriterionLabelsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string customer_id = 1; */
        if (message.customerId !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.customerId);
        /* repeated google.ads.googleads.v11.services.AdGroupCriterionLabelOperation operations = 2; */
        for (let i = 0; i < message.operations.length; i++)
            AdGroupCriterionLabelOperation.internalBinaryWrite(message.operations[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
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
 * @generated MessageType for protobuf message google.ads.googleads.v11.services.MutateAdGroupCriterionLabelsRequest
 */
export const MutateAdGroupCriterionLabelsRequest = new MutateAdGroupCriterionLabelsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AdGroupCriterionLabelOperation$Type extends MessageType<AdGroupCriterionLabelOperation> {
    constructor() {
        super("google.ads.googleads.v11.services.AdGroupCriterionLabelOperation", [
            { no: 1, name: "create", kind: "message", oneof: "operation", T: () => AdGroupCriterionLabel },
            { no: 2, name: "remove", kind: "scalar", oneof: "operation", T: 9 /*ScalarType.STRING*/, options: { "google.api.resource_reference": { type: "googleads.googleapis.com/AdGroupCriterionLabel" } } }
        ]);
    }
    create(value?: PartialMessage<AdGroupCriterionLabelOperation>): AdGroupCriterionLabelOperation {
        const message = { operation: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AdGroupCriterionLabelOperation>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AdGroupCriterionLabelOperation): AdGroupCriterionLabelOperation {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.ads.googleads.v11.resources.AdGroupCriterionLabel create */ 1:
                    message.operation = {
                        oneofKind: "create",
                        create: AdGroupCriterionLabel.internalBinaryRead(reader, reader.uint32(), options, (message.operation as any).create)
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
    internalBinaryWrite(message: AdGroupCriterionLabelOperation, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* google.ads.googleads.v11.resources.AdGroupCriterionLabel create = 1; */
        if (message.operation.oneofKind === "create")
            AdGroupCriterionLabel.internalBinaryWrite(message.operation.create, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
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
 * @generated MessageType for protobuf message google.ads.googleads.v11.services.AdGroupCriterionLabelOperation
 */
export const AdGroupCriterionLabelOperation = new AdGroupCriterionLabelOperation$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MutateAdGroupCriterionLabelsResponse$Type extends MessageType<MutateAdGroupCriterionLabelsResponse> {
    constructor() {
        super("google.ads.googleads.v11.services.MutateAdGroupCriterionLabelsResponse", [
            { no: 3, name: "partial_failure_error", kind: "message", T: () => Status },
            { no: 2, name: "results", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => MutateAdGroupCriterionLabelResult }
        ]);
    }
    create(value?: PartialMessage<MutateAdGroupCriterionLabelsResponse>): MutateAdGroupCriterionLabelsResponse {
        const message = { results: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MutateAdGroupCriterionLabelsResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MutateAdGroupCriterionLabelsResponse): MutateAdGroupCriterionLabelsResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.rpc.Status partial_failure_error */ 3:
                    message.partialFailureError = Status.internalBinaryRead(reader, reader.uint32(), options, message.partialFailureError);
                    break;
                case /* repeated google.ads.googleads.v11.services.MutateAdGroupCriterionLabelResult results */ 2:
                    message.results.push(MutateAdGroupCriterionLabelResult.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: MutateAdGroupCriterionLabelsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* google.rpc.Status partial_failure_error = 3; */
        if (message.partialFailureError)
            Status.internalBinaryWrite(message.partialFailureError, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* repeated google.ads.googleads.v11.services.MutateAdGroupCriterionLabelResult results = 2; */
        for (let i = 0; i < message.results.length; i++)
            MutateAdGroupCriterionLabelResult.internalBinaryWrite(message.results[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.services.MutateAdGroupCriterionLabelsResponse
 */
export const MutateAdGroupCriterionLabelsResponse = new MutateAdGroupCriterionLabelsResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MutateAdGroupCriterionLabelResult$Type extends MessageType<MutateAdGroupCriterionLabelResult> {
    constructor() {
        super("google.ads.googleads.v11.services.MutateAdGroupCriterionLabelResult", [
            { no: 1, name: "resource_name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.resource_reference": { type: "googleads.googleapis.com/AdGroupCriterionLabel" } } }
        ]);
    }
    create(value?: PartialMessage<MutateAdGroupCriterionLabelResult>): MutateAdGroupCriterionLabelResult {
        const message = { resourceName: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MutateAdGroupCriterionLabelResult>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MutateAdGroupCriterionLabelResult): MutateAdGroupCriterionLabelResult {
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
    internalBinaryWrite(message: MutateAdGroupCriterionLabelResult, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
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
 * @generated MessageType for protobuf message google.ads.googleads.v11.services.MutateAdGroupCriterionLabelResult
 */
export const MutateAdGroupCriterionLabelResult = new MutateAdGroupCriterionLabelResult$Type();
/**
 * @generated ServiceType for protobuf service google.ads.googleads.v11.services.AdGroupCriterionLabelService
 */
export const AdGroupCriterionLabelService = new ServiceType("google.ads.googleads.v11.services.AdGroupCriterionLabelService", [
    { name: "MutateAdGroupCriterionLabels", options: { "google.api.http": { post: "/v11/customers/{customer_id=*}/adGroupCriterionLabels:mutate", body: "*" }, "google.api.method_signature": ["customer_id,operations"] }, I: MutateAdGroupCriterionLabelsRequest, O: MutateAdGroupCriterionLabelsResponse }
], { "google.api.default_host": "googleads.googleapis.com", "google.api.oauth_scopes": "https://www.googleapis.com/auth/adwords" });
