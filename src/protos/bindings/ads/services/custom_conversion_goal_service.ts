// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/services/custom_conversion_goal_service.proto" (package "google.ads.googleads.v11.services", syntax proto3)
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
import { CustomConversionGoal } from "../resources/custom_conversion_goal";
import { FieldMask } from "../../google/protobuf/field_mask";
import { ResponseContentTypeEnum_ResponseContentType } from "../enums/response_content_type";
/**
 * Request message for
 * [CustomConversionGoalService.MutateCustomConversionGoals][google.ads.googleads.v11.services.CustomConversionGoalService.MutateCustomConversionGoals].
 *
 * @generated from protobuf message google.ads.googleads.v11.services.MutateCustomConversionGoalsRequest
 */
export interface MutateCustomConversionGoalsRequest {
    /**
     * Required. The ID of the customer whose custom conversion goals are being modified.
     *
     * @generated from protobuf field: string customer_id = 1;
     */
    customerId: string;
    /**
     * Required. The list of operations to perform on individual custom conversion goal.
     *
     * @generated from protobuf field: repeated google.ads.googleads.v11.services.CustomConversionGoalOperation operations = 2;
     */
    operations: CustomConversionGoalOperation[];
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
 * A single operation (create, remove) on a custom conversion goal.
 *
 * @generated from protobuf message google.ads.googleads.v11.services.CustomConversionGoalOperation
 */
export interface CustomConversionGoalOperation {
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
         * Create operation: No resource name is expected for the new custom
         * conversion goal
         *
         * @generated from protobuf field: google.ads.googleads.v11.resources.CustomConversionGoal create = 1;
         */
        create: CustomConversionGoal;
    } | {
        oneofKind: "update";
        /**
         * Update operation: The custom conversion goal is expected to have a
         * valid resource name.
         *
         * @generated from protobuf field: google.ads.googleads.v11.resources.CustomConversionGoal update = 2;
         */
        update: CustomConversionGoal;
    } | {
        oneofKind: "remove";
        /**
         * Remove operation: A resource name for the removed custom conversion goal
         * is expected, in this format:
         *
         * 'customers/{customer_id}/conversionActions/{ConversionGoal.custom_goal_config.conversion_type_ids}'
         *
         * @generated from protobuf field: string remove = 3;
         */
        remove: string;
    } | {
        oneofKind: undefined;
    };
}
/**
 * Response message for a custom conversion goal mutate.
 *
 * @generated from protobuf message google.ads.googleads.v11.services.MutateCustomConversionGoalsResponse
 */
export interface MutateCustomConversionGoalsResponse {
    /**
     * All results for the mutate.
     *
     * @generated from protobuf field: repeated google.ads.googleads.v11.services.MutateCustomConversionGoalResult results = 1;
     */
    results: MutateCustomConversionGoalResult[];
}
/**
 * The result for the custom conversion goal mutate.
 *
 * @generated from protobuf message google.ads.googleads.v11.services.MutateCustomConversionGoalResult
 */
export interface MutateCustomConversionGoalResult {
    /**
     * Returned for successful operations.
     *
     * @generated from protobuf field: string resource_name = 1;
     */
    resourceName: string;
    /**
     * The mutated CustomConversionGoal with only mutable fields after mutate.
     * The field will only be returned when response_content_type is set to
     * "MUTABLE_RESOURCE".
     *
     * @generated from protobuf field: google.ads.googleads.v11.resources.CustomConversionGoal custom_conversion_goal = 2;
     */
    customConversionGoal?: CustomConversionGoal;
}
// @generated message type with reflection information, may provide speed optimized methods
class MutateCustomConversionGoalsRequest$Type extends MessageType<MutateCustomConversionGoalsRequest> {
    constructor() {
        super("google.ads.googleads.v11.services.MutateCustomConversionGoalsRequest", [
            { no: 1, name: "customer_id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["REQUIRED"] } },
            { no: 2, name: "operations", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CustomConversionGoalOperation, options: { "google.api.field_behavior": ["REQUIRED"] } },
            { no: 3, name: "validate_only", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "response_content_type", kind: "enum", T: () => ["google.ads.googleads.v11.enums.ResponseContentTypeEnum.ResponseContentType", ResponseContentTypeEnum_ResponseContentType] }
        ]);
    }
    create(value?: PartialMessage<MutateCustomConversionGoalsRequest>): MutateCustomConversionGoalsRequest {
        const message = { customerId: "", operations: [], validateOnly: false, responseContentType: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MutateCustomConversionGoalsRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MutateCustomConversionGoalsRequest): MutateCustomConversionGoalsRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string customer_id */ 1:
                    message.customerId = reader.string();
                    break;
                case /* repeated google.ads.googleads.v11.services.CustomConversionGoalOperation operations */ 2:
                    message.operations.push(CustomConversionGoalOperation.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: MutateCustomConversionGoalsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string customer_id = 1; */
        if (message.customerId !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.customerId);
        /* repeated google.ads.googleads.v11.services.CustomConversionGoalOperation operations = 2; */
        for (let i = 0; i < message.operations.length; i++)
            CustomConversionGoalOperation.internalBinaryWrite(message.operations[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
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
 * @generated MessageType for protobuf message google.ads.googleads.v11.services.MutateCustomConversionGoalsRequest
 */
export const MutateCustomConversionGoalsRequest = new MutateCustomConversionGoalsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CustomConversionGoalOperation$Type extends MessageType<CustomConversionGoalOperation> {
    constructor() {
        super("google.ads.googleads.v11.services.CustomConversionGoalOperation", [
            { no: 4, name: "update_mask", kind: "message", T: () => FieldMask },
            { no: 1, name: "create", kind: "message", oneof: "operation", T: () => CustomConversionGoal },
            { no: 2, name: "update", kind: "message", oneof: "operation", T: () => CustomConversionGoal },
            { no: 3, name: "remove", kind: "scalar", oneof: "operation", T: 9 /*ScalarType.STRING*/, options: { "google.api.resource_reference": { type: "googleads.googleapis.com/CustomConversionGoal" } } }
        ]);
    }
    create(value?: PartialMessage<CustomConversionGoalOperation>): CustomConversionGoalOperation {
        const message = { operation: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CustomConversionGoalOperation>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CustomConversionGoalOperation): CustomConversionGoalOperation {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.protobuf.FieldMask update_mask */ 4:
                    message.updateMask = FieldMask.internalBinaryRead(reader, reader.uint32(), options, message.updateMask);
                    break;
                case /* google.ads.googleads.v11.resources.CustomConversionGoal create */ 1:
                    message.operation = {
                        oneofKind: "create",
                        create: CustomConversionGoal.internalBinaryRead(reader, reader.uint32(), options, (message.operation as any).create)
                    };
                    break;
                case /* google.ads.googleads.v11.resources.CustomConversionGoal update */ 2:
                    message.operation = {
                        oneofKind: "update",
                        update: CustomConversionGoal.internalBinaryRead(reader, reader.uint32(), options, (message.operation as any).update)
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
    internalBinaryWrite(message: CustomConversionGoalOperation, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* google.protobuf.FieldMask update_mask = 4; */
        if (message.updateMask)
            FieldMask.internalBinaryWrite(message.updateMask, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* google.ads.googleads.v11.resources.CustomConversionGoal create = 1; */
        if (message.operation.oneofKind === "create")
            CustomConversionGoal.internalBinaryWrite(message.operation.create, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* google.ads.googleads.v11.resources.CustomConversionGoal update = 2; */
        if (message.operation.oneofKind === "update")
            CustomConversionGoal.internalBinaryWrite(message.operation.update, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
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
 * @generated MessageType for protobuf message google.ads.googleads.v11.services.CustomConversionGoalOperation
 */
export const CustomConversionGoalOperation = new CustomConversionGoalOperation$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MutateCustomConversionGoalsResponse$Type extends MessageType<MutateCustomConversionGoalsResponse> {
    constructor() {
        super("google.ads.googleads.v11.services.MutateCustomConversionGoalsResponse", [
            { no: 1, name: "results", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => MutateCustomConversionGoalResult }
        ]);
    }
    create(value?: PartialMessage<MutateCustomConversionGoalsResponse>): MutateCustomConversionGoalsResponse {
        const message = { results: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MutateCustomConversionGoalsResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MutateCustomConversionGoalsResponse): MutateCustomConversionGoalsResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated google.ads.googleads.v11.services.MutateCustomConversionGoalResult results */ 1:
                    message.results.push(MutateCustomConversionGoalResult.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: MutateCustomConversionGoalsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated google.ads.googleads.v11.services.MutateCustomConversionGoalResult results = 1; */
        for (let i = 0; i < message.results.length; i++)
            MutateCustomConversionGoalResult.internalBinaryWrite(message.results[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.services.MutateCustomConversionGoalsResponse
 */
export const MutateCustomConversionGoalsResponse = new MutateCustomConversionGoalsResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MutateCustomConversionGoalResult$Type extends MessageType<MutateCustomConversionGoalResult> {
    constructor() {
        super("google.ads.googleads.v11.services.MutateCustomConversionGoalResult", [
            { no: 1, name: "resource_name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.resource_reference": { type: "googleads.googleapis.com/CustomConversionGoal" } } },
            { no: 2, name: "custom_conversion_goal", kind: "message", T: () => CustomConversionGoal }
        ]);
    }
    create(value?: PartialMessage<MutateCustomConversionGoalResult>): MutateCustomConversionGoalResult {
        const message = { resourceName: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MutateCustomConversionGoalResult>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MutateCustomConversionGoalResult): MutateCustomConversionGoalResult {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string resource_name */ 1:
                    message.resourceName = reader.string();
                    break;
                case /* google.ads.googleads.v11.resources.CustomConversionGoal custom_conversion_goal */ 2:
                    message.customConversionGoal = CustomConversionGoal.internalBinaryRead(reader, reader.uint32(), options, message.customConversionGoal);
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
    internalBinaryWrite(message: MutateCustomConversionGoalResult, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string resource_name = 1; */
        if (message.resourceName !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.resourceName);
        /* google.ads.googleads.v11.resources.CustomConversionGoal custom_conversion_goal = 2; */
        if (message.customConversionGoal)
            CustomConversionGoal.internalBinaryWrite(message.customConversionGoal, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.services.MutateCustomConversionGoalResult
 */
export const MutateCustomConversionGoalResult = new MutateCustomConversionGoalResult$Type();
/**
 * @generated ServiceType for protobuf service google.ads.googleads.v11.services.CustomConversionGoalService
 */
export const CustomConversionGoalService = new ServiceType("google.ads.googleads.v11.services.CustomConversionGoalService", [
    { name: "MutateCustomConversionGoals", options: { "google.api.http": { post: "/v11/customers/{customer_id=*}/customConversionGoals:mutate", body: "*" }, "google.api.method_signature": ["customer_id,operations"] }, I: MutateCustomConversionGoalsRequest, O: MutateCustomConversionGoalsResponse }
], { "google.api.default_host": "googleads.googleapis.com", "google.api.oauth_scopes": "https://www.googleapis.com/auth/adwords" });