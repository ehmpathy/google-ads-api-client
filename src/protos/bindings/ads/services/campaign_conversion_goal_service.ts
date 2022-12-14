// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/services/campaign_conversion_goal_service.proto" (package "google.ads.googleads.v11.services", syntax proto3)
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
import { CampaignConversionGoal } from "../resources/campaign_conversion_goal";
import { FieldMask } from "../../google/protobuf/field_mask";
/**
 * Request message for
 * [CampaignConversionGoalService.MutateCampaignConversionGoals][google.ads.googleads.v11.services.CampaignConversionGoalService.MutateCampaignConversionGoals].
 *
 * @generated from protobuf message google.ads.googleads.v11.services.MutateCampaignConversionGoalsRequest
 */
export interface MutateCampaignConversionGoalsRequest {
    /**
     * Required. The ID of the customer whose campaign conversion goals are being modified.
     *
     * @generated from protobuf field: string customer_id = 1;
     */
    customerId: string;
    /**
     * Required. The list of operations to perform on individual campaign conversion goal.
     *
     * @generated from protobuf field: repeated google.ads.googleads.v11.services.CampaignConversionGoalOperation operations = 2;
     */
    operations: CampaignConversionGoalOperation[];
    /**
     * If true, the request is validated but not executed. Only errors are
     * returned, not results.
     *
     * @generated from protobuf field: bool validate_only = 3;
     */
    validateOnly: boolean;
}
/**
 * A single operation (update) on a campaign conversion goal.
 *
 * @generated from protobuf message google.ads.googleads.v11.services.CampaignConversionGoalOperation
 */
export interface CampaignConversionGoalOperation {
    /**
     * FieldMask that determines which resource fields are modified in an update.
     *
     * @generated from protobuf field: google.protobuf.FieldMask update_mask = 2;
     */
    updateMask?: FieldMask;
    /**
     * @generated from protobuf oneof: operation
     */
    operation: {
        oneofKind: "update";
        /**
         * Update operation: The customer conversion goal is expected to have a
         * valid resource name.
         *
         * @generated from protobuf field: google.ads.googleads.v11.resources.CampaignConversionGoal update = 1;
         */
        update: CampaignConversionGoal;
    } | {
        oneofKind: undefined;
    };
}
/**
 * Response message for a campaign conversion goal mutate.
 *
 * @generated from protobuf message google.ads.googleads.v11.services.MutateCampaignConversionGoalsResponse
 */
export interface MutateCampaignConversionGoalsResponse {
    /**
     * All results for the mutate.
     *
     * @generated from protobuf field: repeated google.ads.googleads.v11.services.MutateCampaignConversionGoalResult results = 1;
     */
    results: MutateCampaignConversionGoalResult[];
}
/**
 * The result for the campaign conversion goal mutate.
 *
 * @generated from protobuf message google.ads.googleads.v11.services.MutateCampaignConversionGoalResult
 */
export interface MutateCampaignConversionGoalResult {
    /**
     * Returned for successful operations.
     *
     * @generated from protobuf field: string resource_name = 1;
     */
    resourceName: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class MutateCampaignConversionGoalsRequest$Type extends MessageType<MutateCampaignConversionGoalsRequest> {
    constructor() {
        super("google.ads.googleads.v11.services.MutateCampaignConversionGoalsRequest", [
            { no: 1, name: "customer_id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["REQUIRED"] } },
            { no: 2, name: "operations", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CampaignConversionGoalOperation, options: { "google.api.field_behavior": ["REQUIRED"] } },
            { no: 3, name: "validate_only", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<MutateCampaignConversionGoalsRequest>): MutateCampaignConversionGoalsRequest {
        const message = { customerId: "", operations: [], validateOnly: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MutateCampaignConversionGoalsRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MutateCampaignConversionGoalsRequest): MutateCampaignConversionGoalsRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string customer_id */ 1:
                    message.customerId = reader.string();
                    break;
                case /* repeated google.ads.googleads.v11.services.CampaignConversionGoalOperation operations */ 2:
                    message.operations.push(CampaignConversionGoalOperation.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* bool validate_only */ 3:
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
    internalBinaryWrite(message: MutateCampaignConversionGoalsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string customer_id = 1; */
        if (message.customerId !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.customerId);
        /* repeated google.ads.googleads.v11.services.CampaignConversionGoalOperation operations = 2; */
        for (let i = 0; i < message.operations.length; i++)
            CampaignConversionGoalOperation.internalBinaryWrite(message.operations[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* bool validate_only = 3; */
        if (message.validateOnly !== false)
            writer.tag(3, WireType.Varint).bool(message.validateOnly);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.services.MutateCampaignConversionGoalsRequest
 */
export const MutateCampaignConversionGoalsRequest = new MutateCampaignConversionGoalsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CampaignConversionGoalOperation$Type extends MessageType<CampaignConversionGoalOperation> {
    constructor() {
        super("google.ads.googleads.v11.services.CampaignConversionGoalOperation", [
            { no: 2, name: "update_mask", kind: "message", T: () => FieldMask },
            { no: 1, name: "update", kind: "message", oneof: "operation", T: () => CampaignConversionGoal }
        ]);
    }
    create(value?: PartialMessage<CampaignConversionGoalOperation>): CampaignConversionGoalOperation {
        const message = { operation: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CampaignConversionGoalOperation>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CampaignConversionGoalOperation): CampaignConversionGoalOperation {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.protobuf.FieldMask update_mask */ 2:
                    message.updateMask = FieldMask.internalBinaryRead(reader, reader.uint32(), options, message.updateMask);
                    break;
                case /* google.ads.googleads.v11.resources.CampaignConversionGoal update */ 1:
                    message.operation = {
                        oneofKind: "update",
                        update: CampaignConversionGoal.internalBinaryRead(reader, reader.uint32(), options, (message.operation as any).update)
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
    internalBinaryWrite(message: CampaignConversionGoalOperation, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* google.protobuf.FieldMask update_mask = 2; */
        if (message.updateMask)
            FieldMask.internalBinaryWrite(message.updateMask, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* google.ads.googleads.v11.resources.CampaignConversionGoal update = 1; */
        if (message.operation.oneofKind === "update")
            CampaignConversionGoal.internalBinaryWrite(message.operation.update, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.services.CampaignConversionGoalOperation
 */
export const CampaignConversionGoalOperation = new CampaignConversionGoalOperation$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MutateCampaignConversionGoalsResponse$Type extends MessageType<MutateCampaignConversionGoalsResponse> {
    constructor() {
        super("google.ads.googleads.v11.services.MutateCampaignConversionGoalsResponse", [
            { no: 1, name: "results", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => MutateCampaignConversionGoalResult }
        ]);
    }
    create(value?: PartialMessage<MutateCampaignConversionGoalsResponse>): MutateCampaignConversionGoalsResponse {
        const message = { results: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MutateCampaignConversionGoalsResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MutateCampaignConversionGoalsResponse): MutateCampaignConversionGoalsResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated google.ads.googleads.v11.services.MutateCampaignConversionGoalResult results */ 1:
                    message.results.push(MutateCampaignConversionGoalResult.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: MutateCampaignConversionGoalsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated google.ads.googleads.v11.services.MutateCampaignConversionGoalResult results = 1; */
        for (let i = 0; i < message.results.length; i++)
            MutateCampaignConversionGoalResult.internalBinaryWrite(message.results[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.services.MutateCampaignConversionGoalsResponse
 */
export const MutateCampaignConversionGoalsResponse = new MutateCampaignConversionGoalsResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MutateCampaignConversionGoalResult$Type extends MessageType<MutateCampaignConversionGoalResult> {
    constructor() {
        super("google.ads.googleads.v11.services.MutateCampaignConversionGoalResult", [
            { no: 1, name: "resource_name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.resource_reference": { type: "googleads.googleapis.com/CampaignConversionGoal" } } }
        ]);
    }
    create(value?: PartialMessage<MutateCampaignConversionGoalResult>): MutateCampaignConversionGoalResult {
        const message = { resourceName: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MutateCampaignConversionGoalResult>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MutateCampaignConversionGoalResult): MutateCampaignConversionGoalResult {
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
    internalBinaryWrite(message: MutateCampaignConversionGoalResult, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
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
 * @generated MessageType for protobuf message google.ads.googleads.v11.services.MutateCampaignConversionGoalResult
 */
export const MutateCampaignConversionGoalResult = new MutateCampaignConversionGoalResult$Type();
/**
 * @generated ServiceType for protobuf service google.ads.googleads.v11.services.CampaignConversionGoalService
 */
export const CampaignConversionGoalService = new ServiceType("google.ads.googleads.v11.services.CampaignConversionGoalService", [
    { name: "MutateCampaignConversionGoals", options: { "google.api.http": { post: "/v11/customers/{customer_id=*}/campaignConversionGoals:mutate", body: "*" }, "google.api.method_signature": ["customer_id,operations"] }, I: MutateCampaignConversionGoalsRequest, O: MutateCampaignConversionGoalsResponse }
], { "google.api.default_host": "googleads.googleapis.com", "google.api.oauth_scopes": "https://www.googleapis.com/auth/adwords" });
