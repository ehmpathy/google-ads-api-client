// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "google/api/servicecontrol/v1/service_controller.proto" (package "google.api.servicecontrol.v1", syntax proto3)
// tslint:disable
//
// Copyright 2021 Google LLC
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
import { Status } from "../../../rpc/status";
import { CheckError } from "./check_error";
import { Operation } from "./operation";
/**
 * Request message for the Check method.
 *
 * @generated from protobuf message google.api.servicecontrol.v1.CheckRequest
 */
export interface CheckRequest {
    /**
     * The service name as specified in its service configuration. For example,
     * `"pubsub.googleapis.com"`.
     *
     * See
     * [google.api.Service](https://cloud.google.com/service-management/reference/rpc/google.api#google.api.Service)
     * for the definition of a service name.
     *
     * @generated from protobuf field: string service_name = 1;
     */
    serviceName: string;
    /**
     * The operation to be checked.
     *
     * @generated from protobuf field: google.api.servicecontrol.v1.Operation operation = 2;
     */
    operation?: Operation;
    /**
     * Specifies which version of service configuration should be used to process
     * the request.
     *
     * If unspecified or no matching version can be found, the
     * latest one will be used.
     *
     * @generated from protobuf field: string service_config_id = 4;
     */
    serviceConfigId: string;
}
/**
 * Response message for the Check method.
 *
 * @generated from protobuf message google.api.servicecontrol.v1.CheckResponse
 */
export interface CheckResponse {
    /**
     * The same operation_id value used in the
     * [CheckRequest][google.api.servicecontrol.v1.CheckRequest]. Used for logging
     * and diagnostics purposes.
     *
     * @generated from protobuf field: string operation_id = 1;
     */
    operationId: string;
    /**
     * Indicate the decision of the check.
     *
     * If no check errors are present, the service should process the operation.
     * Otherwise the service should use the list of errors to determine the
     * appropriate action.
     *
     * @generated from protobuf field: repeated google.api.servicecontrol.v1.CheckError check_errors = 2;
     */
    checkErrors: CheckError[];
    /**
     * The actual config id used to process the request.
     *
     * @generated from protobuf field: string service_config_id = 5;
     */
    serviceConfigId: string;
    /**
     * The current service rollout id used to process the request.
     *
     * @generated from protobuf field: string service_rollout_id = 11;
     */
    serviceRolloutId: string;
    /**
     * Feedback data returned from the server during processing a Check request.
     *
     * @generated from protobuf field: google.api.servicecontrol.v1.CheckResponse.CheckInfo check_info = 6;
     */
    checkInfo?: CheckResponse_CheckInfo;
}
/**
 * Contains additional information about the check operation.
 *
 * @generated from protobuf message google.api.servicecontrol.v1.CheckResponse.CheckInfo
 */
export interface CheckResponse_CheckInfo {
    /**
     * A list of fields and label keys that are ignored by the server.
     * The client doesn't need to send them for following requests to improve
     * performance and allow better aggregation.
     *
     * @generated from protobuf field: repeated string unused_arguments = 1;
     */
    unusedArguments: string[];
    /**
     * Consumer info of this check.
     *
     * @generated from protobuf field: google.api.servicecontrol.v1.CheckResponse.ConsumerInfo consumer_info = 2;
     */
    consumerInfo?: CheckResponse_ConsumerInfo;
}
/**
 * `ConsumerInfo` provides information about the consumer.
 *
 * @generated from protobuf message google.api.servicecontrol.v1.CheckResponse.ConsumerInfo
 */
export interface CheckResponse_ConsumerInfo {
    /**
     * The Google cloud project number, e.g. 1234567890. A value of 0 indicates
     * no project number is found.
     *
     * NOTE: This field is deprecated after we support flexible consumer
     * id. New code should not depend on this field anymore.
     *
     * @generated from protobuf field: int64 project_number = 1;
     */
    projectNumber: bigint;
    /**
     * The type of the consumer which should have been defined in
     * [Google Resource Manager](https://cloud.google.com/resource-manager/).
     *
     * @generated from protobuf field: google.api.servicecontrol.v1.CheckResponse.ConsumerInfo.ConsumerType type = 2;
     */
    type: CheckResponse_ConsumerInfo_ConsumerType;
    /**
     * The consumer identity number, can be Google cloud project number, folder
     * number or organization number e.g. 1234567890. A value of 0 indicates no
     * consumer number is found.
     *
     * @generated from protobuf field: int64 consumer_number = 3;
     */
    consumerNumber: bigint;
}
/**
 * The type of the consumer as defined in
 * [Google Resource Manager](https://cloud.google.com/resource-manager/).
 *
 * @generated from protobuf enum google.api.servicecontrol.v1.CheckResponse.ConsumerInfo.ConsumerType
 */
export enum CheckResponse_ConsumerInfo_ConsumerType {
    /**
     * This is never used.
     *
     * @generated from protobuf enum value: CONSUMER_TYPE_UNSPECIFIED = 0;
     */
    CONSUMER_TYPE_UNSPECIFIED = 0,
    /**
     * The consumer is a Google Cloud Project.
     *
     * @generated from protobuf enum value: PROJECT = 1;
     */
    PROJECT = 1,
    /**
     * The consumer is a Google Cloud Folder.
     *
     * @generated from protobuf enum value: FOLDER = 2;
     */
    FOLDER = 2,
    /**
     * The consumer is a Google Cloud Organization.
     *
     * @generated from protobuf enum value: ORGANIZATION = 3;
     */
    ORGANIZATION = 3,
    /**
     * Service-specific resource container which is defined by the service
     * producer to offer their users the ability to manage service control
     * functionalities at a finer level of granularity than the PROJECT.
     *
     * @generated from protobuf enum value: SERVICE_SPECIFIC = 4;
     */
    SERVICE_SPECIFIC = 4
}
/**
 * Request message for the Report method.
 *
 * @generated from protobuf message google.api.servicecontrol.v1.ReportRequest
 */
export interface ReportRequest {
    /**
     * The service name as specified in its service configuration. For example,
     * `"pubsub.googleapis.com"`.
     *
     * See
     * [google.api.Service](https://cloud.google.com/service-management/reference/rpc/google.api#google.api.Service)
     * for the definition of a service name.
     *
     * @generated from protobuf field: string service_name = 1;
     */
    serviceName: string;
    /**
     * Operations to be reported.
     *
     * Typically the service should report one operation per request.
     * Putting multiple operations into a single request is allowed, but should
     * be used only when multiple operations are natually available at the time
     * of the report.
     *
     * There is no limit on the number of operations in the same ReportRequest,
     * however the ReportRequest size should be no larger than 1MB. See
     * [ReportResponse.report_errors][google.api.servicecontrol.v1.ReportResponse.report_errors]
     * for partial failure behavior.
     *
     * @generated from protobuf field: repeated google.api.servicecontrol.v1.Operation operations = 2;
     */
    operations: Operation[];
    /**
     * Specifies which version of service config should be used to process the
     * request.
     *
     * If unspecified or no matching version can be found, the
     * latest one will be used.
     *
     * @generated from protobuf field: string service_config_id = 3;
     */
    serviceConfigId: string;
}
/**
 * Response message for the Report method.
 *
 * @generated from protobuf message google.api.servicecontrol.v1.ReportResponse
 */
export interface ReportResponse {
    /**
     * Partial failures, one for each `Operation` in the request that failed
     * processing. There are three possible combinations of the RPC status:
     *
     * 1. The combination of a successful RPC status and an empty `report_errors`
     *    list indicates a complete success where all `Operations` in the
     *    request are processed successfully.
     * 2. The combination of a successful RPC status and a non-empty
     *    `report_errors` list indicates a partial success where some
     *    `Operations` in the request succeeded. Each
     *    `Operation` that failed processing has a corresponding item
     *    in this list.
     * 3. A failed RPC status indicates a general non-deterministic failure.
     *    When this happens, it's impossible to know which of the
     *    'Operations' in the request succeeded or failed.
     *
     * @generated from protobuf field: repeated google.api.servicecontrol.v1.ReportResponse.ReportError report_errors = 1;
     */
    reportErrors: ReportResponse_ReportError[];
    /**
     * The actual config id used to process the request.
     *
     * @generated from protobuf field: string service_config_id = 2;
     */
    serviceConfigId: string;
    /**
     * The current service rollout id used to process the request.
     *
     * @generated from protobuf field: string service_rollout_id = 4;
     */
    serviceRolloutId: string;
}
/**
 * Represents the processing error of one
 * [Operation][google.api.servicecontrol.v1.Operation] in the request.
 *
 * @generated from protobuf message google.api.servicecontrol.v1.ReportResponse.ReportError
 */
export interface ReportResponse_ReportError {
    /**
     * The
     * [Operation.operation_id][google.api.servicecontrol.v1.Operation.operation_id]
     * value from the request.
     *
     * @generated from protobuf field: string operation_id = 1;
     */
    operationId: string;
    /**
     * Details of the error when processing the
     * [Operation][google.api.servicecontrol.v1.Operation].
     *
     * @generated from protobuf field: google.rpc.Status status = 2;
     */
    status?: Status;
}
// @generated message type with reflection information, may provide speed optimized methods
class CheckRequest$Type extends MessageType<CheckRequest> {
    constructor() {
        super("google.api.servicecontrol.v1.CheckRequest", [
            { no: 1, name: "service_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "operation", kind: "message", T: () => Operation },
            { no: 4, name: "service_config_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<CheckRequest>): CheckRequest {
        const message = { serviceName: "", serviceConfigId: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CheckRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CheckRequest): CheckRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string service_name */ 1:
                    message.serviceName = reader.string();
                    break;
                case /* google.api.servicecontrol.v1.Operation operation */ 2:
                    message.operation = Operation.internalBinaryRead(reader, reader.uint32(), options, message.operation);
                    break;
                case /* string service_config_id */ 4:
                    message.serviceConfigId = reader.string();
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
    internalBinaryWrite(message: CheckRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string service_name = 1; */
        if (message.serviceName !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.serviceName);
        /* google.api.servicecontrol.v1.Operation operation = 2; */
        if (message.operation)
            Operation.internalBinaryWrite(message.operation, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* string service_config_id = 4; */
        if (message.serviceConfigId !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.serviceConfigId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.api.servicecontrol.v1.CheckRequest
 */
export const CheckRequest = new CheckRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CheckResponse$Type extends MessageType<CheckResponse> {
    constructor() {
        super("google.api.servicecontrol.v1.CheckResponse", [
            { no: 1, name: "operation_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "check_errors", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CheckError },
            { no: 5, name: "service_config_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 11, name: "service_rollout_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "check_info", kind: "message", T: () => CheckResponse_CheckInfo }
        ]);
    }
    create(value?: PartialMessage<CheckResponse>): CheckResponse {
        const message = { operationId: "", checkErrors: [], serviceConfigId: "", serviceRolloutId: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CheckResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CheckResponse): CheckResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string operation_id */ 1:
                    message.operationId = reader.string();
                    break;
                case /* repeated google.api.servicecontrol.v1.CheckError check_errors */ 2:
                    message.checkErrors.push(CheckError.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* string service_config_id */ 5:
                    message.serviceConfigId = reader.string();
                    break;
                case /* string service_rollout_id */ 11:
                    message.serviceRolloutId = reader.string();
                    break;
                case /* google.api.servicecontrol.v1.CheckResponse.CheckInfo check_info */ 6:
                    message.checkInfo = CheckResponse_CheckInfo.internalBinaryRead(reader, reader.uint32(), options, message.checkInfo);
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
    internalBinaryWrite(message: CheckResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string operation_id = 1; */
        if (message.operationId !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.operationId);
        /* repeated google.api.servicecontrol.v1.CheckError check_errors = 2; */
        for (let i = 0; i < message.checkErrors.length; i++)
            CheckError.internalBinaryWrite(message.checkErrors[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* string service_config_id = 5; */
        if (message.serviceConfigId !== "")
            writer.tag(5, WireType.LengthDelimited).string(message.serviceConfigId);
        /* string service_rollout_id = 11; */
        if (message.serviceRolloutId !== "")
            writer.tag(11, WireType.LengthDelimited).string(message.serviceRolloutId);
        /* google.api.servicecontrol.v1.CheckResponse.CheckInfo check_info = 6; */
        if (message.checkInfo)
            CheckResponse_CheckInfo.internalBinaryWrite(message.checkInfo, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.api.servicecontrol.v1.CheckResponse
 */
export const CheckResponse = new CheckResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CheckResponse_CheckInfo$Type extends MessageType<CheckResponse_CheckInfo> {
    constructor() {
        super("google.api.servicecontrol.v1.CheckResponse.CheckInfo", [
            { no: 1, name: "unused_arguments", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "consumer_info", kind: "message", T: () => CheckResponse_ConsumerInfo }
        ]);
    }
    create(value?: PartialMessage<CheckResponse_CheckInfo>): CheckResponse_CheckInfo {
        const message = { unusedArguments: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CheckResponse_CheckInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CheckResponse_CheckInfo): CheckResponse_CheckInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated string unused_arguments */ 1:
                    message.unusedArguments.push(reader.string());
                    break;
                case /* google.api.servicecontrol.v1.CheckResponse.ConsumerInfo consumer_info */ 2:
                    message.consumerInfo = CheckResponse_ConsumerInfo.internalBinaryRead(reader, reader.uint32(), options, message.consumerInfo);
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
    internalBinaryWrite(message: CheckResponse_CheckInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated string unused_arguments = 1; */
        for (let i = 0; i < message.unusedArguments.length; i++)
            writer.tag(1, WireType.LengthDelimited).string(message.unusedArguments[i]);
        /* google.api.servicecontrol.v1.CheckResponse.ConsumerInfo consumer_info = 2; */
        if (message.consumerInfo)
            CheckResponse_ConsumerInfo.internalBinaryWrite(message.consumerInfo, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.api.servicecontrol.v1.CheckResponse.CheckInfo
 */
export const CheckResponse_CheckInfo = new CheckResponse_CheckInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CheckResponse_ConsumerInfo$Type extends MessageType<CheckResponse_ConsumerInfo> {
    constructor() {
        super("google.api.servicecontrol.v1.CheckResponse.ConsumerInfo", [
            { no: 1, name: "project_number", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "type", kind: "enum", T: () => ["google.api.servicecontrol.v1.CheckResponse.ConsumerInfo.ConsumerType", CheckResponse_ConsumerInfo_ConsumerType] },
            { no: 3, name: "consumer_number", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<CheckResponse_ConsumerInfo>): CheckResponse_ConsumerInfo {
        const message = { projectNumber: 0n, type: 0, consumerNumber: 0n };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CheckResponse_ConsumerInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CheckResponse_ConsumerInfo): CheckResponse_ConsumerInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int64 project_number */ 1:
                    message.projectNumber = reader.int64().toBigInt();
                    break;
                case /* google.api.servicecontrol.v1.CheckResponse.ConsumerInfo.ConsumerType type */ 2:
                    message.type = reader.int32();
                    break;
                case /* int64 consumer_number */ 3:
                    message.consumerNumber = reader.int64().toBigInt();
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
    internalBinaryWrite(message: CheckResponse_ConsumerInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int64 project_number = 1; */
        if (message.projectNumber !== 0n)
            writer.tag(1, WireType.Varint).int64(message.projectNumber);
        /* google.api.servicecontrol.v1.CheckResponse.ConsumerInfo.ConsumerType type = 2; */
        if (message.type !== 0)
            writer.tag(2, WireType.Varint).int32(message.type);
        /* int64 consumer_number = 3; */
        if (message.consumerNumber !== 0n)
            writer.tag(3, WireType.Varint).int64(message.consumerNumber);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.api.servicecontrol.v1.CheckResponse.ConsumerInfo
 */
export const CheckResponse_ConsumerInfo = new CheckResponse_ConsumerInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ReportRequest$Type extends MessageType<ReportRequest> {
    constructor() {
        super("google.api.servicecontrol.v1.ReportRequest", [
            { no: 1, name: "service_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "operations", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Operation },
            { no: 3, name: "service_config_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<ReportRequest>): ReportRequest {
        const message = { serviceName: "", operations: [], serviceConfigId: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ReportRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ReportRequest): ReportRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string service_name */ 1:
                    message.serviceName = reader.string();
                    break;
                case /* repeated google.api.servicecontrol.v1.Operation operations */ 2:
                    message.operations.push(Operation.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* string service_config_id */ 3:
                    message.serviceConfigId = reader.string();
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
    internalBinaryWrite(message: ReportRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string service_name = 1; */
        if (message.serviceName !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.serviceName);
        /* repeated google.api.servicecontrol.v1.Operation operations = 2; */
        for (let i = 0; i < message.operations.length; i++)
            Operation.internalBinaryWrite(message.operations[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* string service_config_id = 3; */
        if (message.serviceConfigId !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.serviceConfigId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.api.servicecontrol.v1.ReportRequest
 */
export const ReportRequest = new ReportRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ReportResponse$Type extends MessageType<ReportResponse> {
    constructor() {
        super("google.api.servicecontrol.v1.ReportResponse", [
            { no: 1, name: "report_errors", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ReportResponse_ReportError },
            { no: 2, name: "service_config_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "service_rollout_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<ReportResponse>): ReportResponse {
        const message = { reportErrors: [], serviceConfigId: "", serviceRolloutId: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ReportResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ReportResponse): ReportResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated google.api.servicecontrol.v1.ReportResponse.ReportError report_errors */ 1:
                    message.reportErrors.push(ReportResponse_ReportError.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* string service_config_id */ 2:
                    message.serviceConfigId = reader.string();
                    break;
                case /* string service_rollout_id */ 4:
                    message.serviceRolloutId = reader.string();
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
    internalBinaryWrite(message: ReportResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated google.api.servicecontrol.v1.ReportResponse.ReportError report_errors = 1; */
        for (let i = 0; i < message.reportErrors.length; i++)
            ReportResponse_ReportError.internalBinaryWrite(message.reportErrors[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* string service_config_id = 2; */
        if (message.serviceConfigId !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.serviceConfigId);
        /* string service_rollout_id = 4; */
        if (message.serviceRolloutId !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.serviceRolloutId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.api.servicecontrol.v1.ReportResponse
 */
export const ReportResponse = new ReportResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ReportResponse_ReportError$Type extends MessageType<ReportResponse_ReportError> {
    constructor() {
        super("google.api.servicecontrol.v1.ReportResponse.ReportError", [
            { no: 1, name: "operation_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "status", kind: "message", T: () => Status }
        ]);
    }
    create(value?: PartialMessage<ReportResponse_ReportError>): ReportResponse_ReportError {
        const message = { operationId: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ReportResponse_ReportError>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ReportResponse_ReportError): ReportResponse_ReportError {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string operation_id */ 1:
                    message.operationId = reader.string();
                    break;
                case /* google.rpc.Status status */ 2:
                    message.status = Status.internalBinaryRead(reader, reader.uint32(), options, message.status);
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
    internalBinaryWrite(message: ReportResponse_ReportError, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string operation_id = 1; */
        if (message.operationId !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.operationId);
        /* google.rpc.Status status = 2; */
        if (message.status)
            Status.internalBinaryWrite(message.status, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.api.servicecontrol.v1.ReportResponse.ReportError
 */
export const ReportResponse_ReportError = new ReportResponse_ReportError$Type();
/**
 * @generated ServiceType for protobuf service google.api.servicecontrol.v1.ServiceController
 */
export const ServiceController = new ServiceType("google.api.servicecontrol.v1.ServiceController", [
    { name: "Check", options: { "google.api.http": { post: "/v1/services/{service_name}:check", body: "*" } }, I: CheckRequest, O: CheckResponse },
    { name: "Report", options: { "google.api.http": { post: "/v1/services/{service_name}:report", body: "*" } }, I: ReportRequest, O: ReportResponse }
], { "google.api.default_host": "servicecontrol.googleapis.com", "google.api.oauth_scopes": "https://www.googleapis.com/auth/cloud-platform,https://www.googleapis.com/auth/servicecontrol" });
