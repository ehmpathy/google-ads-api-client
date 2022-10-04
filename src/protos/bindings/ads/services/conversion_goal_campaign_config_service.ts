// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/services/conversion_goal_campaign_config_service.proto" (package "google.ads.googleads.v11.services", syntax proto3)
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
import { ConversionGoalCampaignConfig } from "../resources/conversion_goal_campaign_config";
import { FieldMask } from "../../google/protobuf/field_mask";
import { ResponseContentTypeEnum_ResponseContentType } from "../enums/response_content_type";
/**
 * Request message for
 * [ConversionGoalCampaignConfigService.MutateConversionGoalCampaignConfig][].
 *
 * @generated from protobuf message google.ads.googleads.v11.services.MutateConversionGoalCampaignConfigsRequest
 */
export interface MutateConversionGoalCampaignConfigsRequest {
    /**
     * Required. The ID of the customer whose custom conversion goals are being modified.
     *
     * @generated from protobuf field: string customer_id = 1;
     */
    customerId: string;
    /**
     * Required. The list of operations to perform on individual conversion goal campaign
     * config.
     *
     * @generated from protobuf field: repeated google.ads.googleads.v11.services.ConversionGoalCampaignConfigOperation operations = 2;
     */
    operations: ConversionGoalCampaignConfigOperation[];
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
 * A single operation (update) on a conversion goal campaign config.
 *
 * @generated from protobuf message google.ads.googleads.v11.services.ConversionGoalCampaignConfigOperation
 */
export interface ConversionGoalCampaignConfigOperation {
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
         * Update operation: The conversion goal campaign config is expected to have
         * a valid resource name.
         *
         * @generated from protobuf field: google.ads.googleads.v11.resources.ConversionGoalCampaignConfig update = 1;
         */
        update: ConversionGoalCampaignConfig;
    } | {
        oneofKind: undefined;
    };
}
/**
 * Response message for a conversion goal campaign config mutate.
 *
 * @generated from protobuf message google.ads.googleads.v11.services.MutateConversionGoalCampaignConfigsResponse
 */
export interface MutateConversionGoalCampaignConfigsResponse {
    /**
     * All results for the mutate.
     *
     * @generated from protobuf field: repeated google.ads.googleads.v11.services.MutateConversionGoalCampaignConfigResult results = 1;
     */
    results: MutateConversionGoalCampaignConfigResult[];
}
/**
 * The result for the conversion goal campaign config mutate.
 *
 * @generated from protobuf message google.ads.googleads.v11.services.MutateConversionGoalCampaignConfigResult
 */
export interface MutateConversionGoalCampaignConfigResult {
    /**
     * Returned for successful operations.
     *
     * @generated from protobuf field: string resource_name = 1;
     */
    resourceName: string;
    /**
     * The mutated ConversionGoalCampaignConfig with only mutable fields after
     * mutate. The field will only be returned when response_content_type is set
     * to "MUTABLE_RESOURCE".
     *
     * @generated from protobuf field: google.ads.googleads.v11.resources.ConversionGoalCampaignConfig conversion_goal_campaign_config = 2;
     */
    conversionGoalCampaignConfig?: ConversionGoalCampaignConfig;
}
// @generated message type with reflection information, may provide speed optimized methods
class MutateConversionGoalCampaignConfigsRequest$Type extends MessageType<MutateConversionGoalCampaignConfigsRequest> {
    constructor() {
        super("google.ads.googleads.v11.services.MutateConversionGoalCampaignConfigsRequest", [
            { no: 1, name: "customer_id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["REQUIRED"] } },
            { no: 2, name: "operations", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ConversionGoalCampaignConfigOperation, options: { "google.api.field_behavior": ["REQUIRED"] } },
            { no: 3, name: "validate_only", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "response_content_type", kind: "enum", T: () => ["google.ads.googleads.v11.enums.ResponseContentTypeEnum.ResponseContentType", ResponseContentTypeEnum_ResponseContentType] }
        ]);
    }
    create(value?: PartialMessage<MutateConversionGoalCampaignConfigsRequest>): MutateConversionGoalCampaignConfigsRequest {
        const message = { customerId: "", operations: [], validateOnly: false, responseContentType: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MutateConversionGoalCampaignConfigsRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MutateConversionGoalCampaignConfigsRequest): MutateConversionGoalCampaignConfigsRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string customer_id */ 1:
                    message.customerId = reader.string();
                    break;
                case /* repeated google.ads.googleads.v11.services.ConversionGoalCampaignConfigOperation operations */ 2:
                    message.operations.push(ConversionGoalCampaignConfigOperation.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: MutateConversionGoalCampaignConfigsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string customer_id = 1; */
        if (message.customerId !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.customerId);
        /* repeated google.ads.googleads.v11.services.ConversionGoalCampaignConfigOperation operations = 2; */
        for (let i = 0; i < message.operations.length; i++)
            ConversionGoalCampaignConfigOperation.internalBinaryWrite(message.operations[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
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
 * @generated MessageType for protobuf message google.ads.googleads.v11.services.MutateConversionGoalCampaignConfigsRequest
 */
export const MutateConversionGoalCampaignConfigsRequest = new MutateConversionGoalCampaignConfigsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ConversionGoalCampaignConfigOperation$Type extends MessageType<ConversionGoalCampaignConfigOperation> {
    constructor() {
        super("google.ads.googleads.v11.services.ConversionGoalCampaignConfigOperation", [
            { no: 2, name: "update_mask", kind: "message", T: () => FieldMask },
            { no: 1, name: "update", kind: "message", oneof: "operation", T: () => ConversionGoalCampaignConfig }
        ]);
    }
    create(value?: PartialMessage<ConversionGoalCampaignConfigOperation>): ConversionGoalCampaignConfigOperation {
        const message = { operation: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ConversionGoalCampaignConfigOperation>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ConversionGoalCampaignConfigOperation): ConversionGoalCampaignConfigOperation {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.protobuf.FieldMask update_mask */ 2:
                    message.updateMask = FieldMask.internalBinaryRead(reader, reader.uint32(), options, message.updateMask);
                    break;
                case /* google.ads.googleads.v11.resources.ConversionGoalCampaignConfig update */ 1:
                    message.operation = {
                        oneofKind: "update",
                        update: ConversionGoalCampaignConfig.internalBinaryRead(reader, reader.uint32(), options, (message.operation as any).update)
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
    internalBinaryWrite(message: ConversionGoalCampaignConfigOperation, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* google.protobuf.FieldMask update_mask = 2; */
        if (message.updateMask)
            FieldMask.internalBinaryWrite(message.updateMask, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* google.ads.googleads.v11.resources.ConversionGoalCampaignConfig update = 1; */
        if (message.operation.oneofKind === "update")
            ConversionGoalCampaignConfig.internalBinaryWrite(message.operation.update, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.services.ConversionGoalCampaignConfigOperation
 */
export const ConversionGoalCampaignConfigOperation = new ConversionGoalCampaignConfigOperation$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MutateConversionGoalCampaignConfigsResponse$Type extends MessageType<MutateConversionGoalCampaignConfigsResponse> {
    constructor() {
        super("google.ads.googleads.v11.services.MutateConversionGoalCampaignConfigsResponse", [
            { no: 1, name: "results", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => MutateConversionGoalCampaignConfigResult }
        ]);
    }
    create(value?: PartialMessage<MutateConversionGoalCampaignConfigsResponse>): MutateConversionGoalCampaignConfigsResponse {
        const message = { results: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MutateConversionGoalCampaignConfigsResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MutateConversionGoalCampaignConfigsResponse): MutateConversionGoalCampaignConfigsResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated google.ads.googleads.v11.services.MutateConversionGoalCampaignConfigResult results */ 1:
                    message.results.push(MutateConversionGoalCampaignConfigResult.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: MutateConversionGoalCampaignConfigsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated google.ads.googleads.v11.services.MutateConversionGoalCampaignConfigResult results = 1; */
        for (let i = 0; i < message.results.length; i++)
            MutateConversionGoalCampaignConfigResult.internalBinaryWrite(message.results[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.services.MutateConversionGoalCampaignConfigsResponse
 */
export const MutateConversionGoalCampaignConfigsResponse = new MutateConversionGoalCampaignConfigsResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MutateConversionGoalCampaignConfigResult$Type extends MessageType<MutateConversionGoalCampaignConfigResult> {
    constructor() {
        super("google.ads.googleads.v11.services.MutateConversionGoalCampaignConfigResult", [
            { no: 1, name: "resource_name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.resource_reference": { type: "googleads.googleapis.com/ConversionGoalCampaignConfig" } } },
            { no: 2, name: "conversion_goal_campaign_config", kind: "message", T: () => ConversionGoalCampaignConfig }
        ]);
    }
    create(value?: PartialMessage<MutateConversionGoalCampaignConfigResult>): MutateConversionGoalCampaignConfigResult {
        const message = { resourceName: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MutateConversionGoalCampaignConfigResult>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MutateConversionGoalCampaignConfigResult): MutateConversionGoalCampaignConfigResult {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string resource_name */ 1:
                    message.resourceName = reader.string();
                    break;
                case /* google.ads.googleads.v11.resources.ConversionGoalCampaignConfig conversion_goal_campaign_config */ 2:
                    message.conversionGoalCampaignConfig = ConversionGoalCampaignConfig.internalBinaryRead(reader, reader.uint32(), options, message.conversionGoalCampaignConfig);
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
    internalBinaryWrite(message: MutateConversionGoalCampaignConfigResult, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string resource_name = 1; */
        if (message.resourceName !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.resourceName);
        /* google.ads.googleads.v11.resources.ConversionGoalCampaignConfig conversion_goal_campaign_config = 2; */
        if (message.conversionGoalCampaignConfig)
            ConversionGoalCampaignConfig.internalBinaryWrite(message.conversionGoalCampaignConfig, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.services.MutateConversionGoalCampaignConfigResult
 */
export const MutateConversionGoalCampaignConfigResult = new MutateConversionGoalCampaignConfigResult$Type();
/**
 * @generated ServiceType for protobuf service google.ads.googleads.v11.services.ConversionGoalCampaignConfigService
 */
export const ConversionGoalCampaignConfigService = new ServiceType("google.ads.googleads.v11.services.ConversionGoalCampaignConfigService", [
    { name: "MutateConversionGoalCampaignConfigs", options: { "google.api.http": { post: "/v11/customers/{customer_id=*}/conversionGoalCampaignConfigs:mutate", body: "*" }, "google.api.method_signature": ["customer_id,operations"] }, I: MutateConversionGoalCampaignConfigsRequest, O: MutateConversionGoalCampaignConfigsResponse }
], { "google.api.default_host": "googleads.googleapis.com", "google.api.oauth_scopes": "https://www.googleapis.com/auth/adwords" });
