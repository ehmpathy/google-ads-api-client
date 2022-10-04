// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "google/api/servicecontrol/v1/operation.proto" (package "google.api.servicecontrol.v1", syntax proto3)
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
import { Any } from "../../../protobuf/any";
import { LogEntry } from "./log_entry";
import { MetricValueSet } from "./metric_value";
import { Timestamp } from "../../../protobuf/timestamp";
/**
 * Represents information regarding an operation.
 *
 * @generated from protobuf message google.api.servicecontrol.v1.Operation
 */
export interface Operation {
    /**
     * Identity of the operation. This must be unique within the scope of the
     * service that generated the operation. If the service calls
     * Check() and Report() on the same operation, the two calls should carry
     * the same id.
     *
     * UUID version 4 is recommended, though not required.
     * In scenarios where an operation is computed from existing information
     * and an idempotent id is desirable for deduplication purpose, UUID version 5
     * is recommended. See RFC 4122 for details.
     *
     * @generated from protobuf field: string operation_id = 1;
     */
    operationId: string;
    /**
     * Fully qualified name of the operation. Reserved for future use.
     *
     * @generated from protobuf field: string operation_name = 2;
     */
    operationName: string;
    /**
     * Identity of the consumer who is using the service.
     * This field should be filled in for the operations initiated by a
     * consumer, but not for service-initiated operations that are
     * not related to a specific consumer.
     *
     * - This can be in one of the following formats:
     *     - project:PROJECT_ID,
     *     - project`_`number:PROJECT_NUMBER,
     *     - projects/PROJECT_ID or PROJECT_NUMBER,
     *     - folders/FOLDER_NUMBER,
     *     - organizations/ORGANIZATION_NUMBER,
     *     - api`_`key:API_KEY.
     *
     * @generated from protobuf field: string consumer_id = 3;
     */
    consumerId: string;
    /**
     * Required. Start time of the operation.
     *
     * @generated from protobuf field: google.protobuf.Timestamp start_time = 4;
     */
    startTime?: Timestamp;
    /**
     * End time of the operation.
     * Required when the operation is used in
     * [ServiceController.Report][google.api.servicecontrol.v1.ServiceController.Report],
     * but optional when the operation is used in
     * [ServiceController.Check][google.api.servicecontrol.v1.ServiceController.Check].
     *
     * @generated from protobuf field: google.protobuf.Timestamp end_time = 5;
     */
    endTime?: Timestamp;
    /**
     * Labels describing the operation. Only the following labels are allowed:
     *
     * - Labels describing monitored resources as defined in
     *   the service configuration.
     * - Default labels of metric values. When specified, labels defined in the
     *   metric value override these default.
     * - The following labels defined by Google Cloud Platform:
     *     - `cloud.googleapis.com/location` describing the location where the
     *        operation happened,
     *     - `servicecontrol.googleapis.com/user_agent` describing the user agent
     *        of the API request,
     *     - `servicecontrol.googleapis.com/service_agent` describing the service
     *        used to handle the API request (e.g. ESP),
     *     - `servicecontrol.googleapis.com/platform` describing the platform
     *        where the API is served, such as App Engine, Compute Engine, or
     *        Kubernetes Engine.
     *
     * @generated from protobuf field: map<string, string> labels = 6;
     */
    labels: {
        [key: string]: string;
    };
    /**
     * Represents information about this operation. Each MetricValueSet
     * corresponds to a metric defined in the service configuration.
     * The data type used in the MetricValueSet must agree with
     * the data type specified in the metric definition.
     *
     * Within a single operation, it is not allowed to have more than one
     * MetricValue instances that have the same metric names and identical
     * label value combinations. If a request has such duplicated MetricValue
     * instances, the entire request is rejected with
     * an invalid argument error.
     *
     * @generated from protobuf field: repeated google.api.servicecontrol.v1.MetricValueSet metric_value_sets = 7;
     */
    metricValueSets: MetricValueSet[];
    /**
     * Represents information to be logged.
     *
     * @generated from protobuf field: repeated google.api.servicecontrol.v1.LogEntry log_entries = 8;
     */
    logEntries: LogEntry[];
    /**
     * DO NOT USE. This is an experimental field.
     *
     * @generated from protobuf field: google.api.servicecontrol.v1.Operation.Importance importance = 11;
     */
    importance: Operation_Importance;
    /**
     * Unimplemented.
     *
     * @generated from protobuf field: repeated google.protobuf.Any extensions = 16;
     */
    extensions: Any[];
}
/**
 * Defines the importance of the data contained in the operation.
 *
 * @generated from protobuf enum google.api.servicecontrol.v1.Operation.Importance
 */
export enum Operation_Importance {
    /**
     * Allows data caching, batching, and aggregation. It provides
     * higher performance with higher data loss risk.
     *
     * @generated from protobuf enum value: LOW = 0;
     */
    LOW = 0,
    /**
     * Disables data aggregation to minimize data loss. It is for operations
     * that contains significant monetary value or audit trail. This feature
     * only applies to the client libraries.
     *
     * @generated from protobuf enum value: HIGH = 1;
     */
    HIGH = 1
}
// @generated message type with reflection information, may provide speed optimized methods
class Operation$Type extends MessageType<Operation> {
    constructor() {
        super("google.api.servicecontrol.v1.Operation", [
            { no: 1, name: "operation_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "operation_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "consumer_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "start_time", kind: "message", T: () => Timestamp },
            { no: 5, name: "end_time", kind: "message", T: () => Timestamp },
            { no: 6, name: "labels", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "scalar", T: 9 /*ScalarType.STRING*/ } },
            { no: 7, name: "metric_value_sets", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => MetricValueSet },
            { no: 8, name: "log_entries", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => LogEntry },
            { no: 11, name: "importance", kind: "enum", T: () => ["google.api.servicecontrol.v1.Operation.Importance", Operation_Importance] },
            { no: 16, name: "extensions", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Any }
        ]);
    }
    create(value?: PartialMessage<Operation>): Operation {
        const message = { operationId: "", operationName: "", consumerId: "", labels: {}, metricValueSets: [], logEntries: [], importance: 0, extensions: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Operation>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Operation): Operation {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string operation_id */ 1:
                    message.operationId = reader.string();
                    break;
                case /* string operation_name */ 2:
                    message.operationName = reader.string();
                    break;
                case /* string consumer_id */ 3:
                    message.consumerId = reader.string();
                    break;
                case /* google.protobuf.Timestamp start_time */ 4:
                    message.startTime = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.startTime);
                    break;
                case /* google.protobuf.Timestamp end_time */ 5:
                    message.endTime = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.endTime);
                    break;
                case /* map<string, string> labels */ 6:
                    this.binaryReadMap6(message.labels, reader, options);
                    break;
                case /* repeated google.api.servicecontrol.v1.MetricValueSet metric_value_sets */ 7:
                    message.metricValueSets.push(MetricValueSet.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated google.api.servicecontrol.v1.LogEntry log_entries */ 8:
                    message.logEntries.push(LogEntry.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* google.api.servicecontrol.v1.Operation.Importance importance */ 11:
                    message.importance = reader.int32();
                    break;
                case /* repeated google.protobuf.Any extensions */ 16:
                    message.extensions.push(Any.internalBinaryRead(reader, reader.uint32(), options));
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
    private binaryReadMap6(map: Operation["labels"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof Operation["labels"] | undefined, val: Operation["labels"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.string();
                    break;
                case 2:
                    val = reader.string();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field google.api.servicecontrol.v1.Operation.labels");
            }
        }
        map[key ?? ""] = val ?? "";
    }
    internalBinaryWrite(message: Operation, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string operation_id = 1; */
        if (message.operationId !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.operationId);
        /* string operation_name = 2; */
        if (message.operationName !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.operationName);
        /* string consumer_id = 3; */
        if (message.consumerId !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.consumerId);
        /* google.protobuf.Timestamp start_time = 4; */
        if (message.startTime)
            Timestamp.internalBinaryWrite(message.startTime, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Timestamp end_time = 5; */
        if (message.endTime)
            Timestamp.internalBinaryWrite(message.endTime, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* map<string, string> labels = 6; */
        for (let k of Object.keys(message.labels))
            writer.tag(6, WireType.LengthDelimited).fork().tag(1, WireType.LengthDelimited).string(k).tag(2, WireType.LengthDelimited).string(message.labels[k]).join();
        /* repeated google.api.servicecontrol.v1.MetricValueSet metric_value_sets = 7; */
        for (let i = 0; i < message.metricValueSets.length; i++)
            MetricValueSet.internalBinaryWrite(message.metricValueSets[i], writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        /* repeated google.api.servicecontrol.v1.LogEntry log_entries = 8; */
        for (let i = 0; i < message.logEntries.length; i++)
            LogEntry.internalBinaryWrite(message.logEntries[i], writer.tag(8, WireType.LengthDelimited).fork(), options).join();
        /* google.api.servicecontrol.v1.Operation.Importance importance = 11; */
        if (message.importance !== 0)
            writer.tag(11, WireType.Varint).int32(message.importance);
        /* repeated google.protobuf.Any extensions = 16; */
        for (let i = 0; i < message.extensions.length; i++)
            Any.internalBinaryWrite(message.extensions[i], writer.tag(16, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.api.servicecontrol.v1.Operation
 */
export const Operation = new Operation$Type();