// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "google/logging/v2/log_entry.proto" (package "google.logging.v2", syntax proto3)
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
import { HttpRequest } from "../type/http_request";
import { LogSeverity } from "../type/log_severity";
import { Timestamp } from "../../protobuf/timestamp";
import { Struct } from "../../protobuf/struct";
import { Any } from "../../protobuf/any";
import { MonitoredResource } from "../../api/monitored_resource";
/**
 * An individual entry in a log.
 *
 * @generated from protobuf message google.logging.v2.LogEntry
 */
export interface LogEntry {
    /**
     * Required. The resource name of the log to which this log entry belongs:
     *
     *     "projects/[PROJECT_ID]/logs/[LOG_ID]"
     *     "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]"
     *     "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]"
     *     "folders/[FOLDER_ID]/logs/[LOG_ID]"
     *
     * A project number may be used in place of PROJECT_ID. The project number is
     * translated to its corresponding PROJECT_ID internally and the `log_name`
     * field will contain PROJECT_ID in queries and exports.
     *
     * `[LOG_ID]` must be URL-encoded within `log_name`. Example:
     * `"organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity"`.
     *
     * `[LOG_ID]` must be less than 512 characters long and can only include the
     * following characters: upper and lower case alphanumeric characters,
     * forward-slash, underscore, hyphen, and period.
     *
     * For backward compatibility, if `log_name` begins with a forward-slash, such
     * as `/projects/...`, then the log entry is ingested as usual, but the
     * forward-slash is removed. Listing the log entry will not show the leading
     * slash and filtering for a log name with a leading slash will never return
     * any results.
     *
     * @generated from protobuf field: string log_name = 12;
     */
    logName: string;
    /**
     * Required. The monitored resource that produced this log entry.
     *
     * Example: a log entry that reports a database error would be associated with
     * the monitored resource designating the particular database that reported
     * the error.
     *
     * @generated from protobuf field: google.api.MonitoredResource resource = 8;
     */
    resource?: MonitoredResource;
    /**
     * @generated from protobuf oneof: payload
     */
    payload: {
        oneofKind: "protoPayload";
        /**
         * The log entry payload, represented as a protocol buffer. Some Google
         * Cloud Platform services use this field for their log entry payloads.
         *
         * The following protocol buffer types are supported; user-defined types
         * are not supported:
         *
         *   "type.googleapis.com/google.cloud.audit.AuditLog"
         *   "type.googleapis.com/google.appengine.logging.v1.RequestLog"
         *
         * @generated from protobuf field: google.protobuf.Any proto_payload = 2;
         */
        protoPayload: Any;
    } | {
        oneofKind: "textPayload";
        /**
         * The log entry payload, represented as a Unicode string (UTF-8).
         *
         * @generated from protobuf field: string text_payload = 3;
         */
        textPayload: string;
    } | {
        oneofKind: "jsonPayload";
        /**
         * The log entry payload, represented as a structure that is
         * expressed as a JSON object.
         *
         * @generated from protobuf field: google.protobuf.Struct json_payload = 6;
         */
        jsonPayload: Struct;
    } | {
        oneofKind: undefined;
    };
    /**
     * Optional. The time the event described by the log entry occurred. This time is used
     * to compute the log entry's age and to enforce the logs retention period.
     * If this field is omitted in a new log entry, then Logging assigns it the
     * current time. Timestamps have nanosecond accuracy, but trailing zeros in
     * the fractional seconds might be omitted when the timestamp is displayed.
     *
     * Incoming log entries must have timestamps that don't exceed the
     * [logs retention
     * period](https://cloud.google.com/logging/quotas#logs_retention_periods) in
     * the past, and that don't exceed 24 hours in the future. Log entries outside
     * those time boundaries aren't ingested by Logging.
     *
     * @generated from protobuf field: google.protobuf.Timestamp timestamp = 9;
     */
    timestamp?: Timestamp;
    /**
     * Output only. The time the log entry was received by Logging.
     *
     * @generated from protobuf field: google.protobuf.Timestamp receive_timestamp = 24;
     */
    receiveTimestamp?: Timestamp;
    /**
     * Optional. The severity of the log entry. The default value is `LogSeverity.DEFAULT`.
     *
     * @generated from protobuf field: google.logging.type.LogSeverity severity = 10;
     */
    severity: LogSeverity;
    /**
     * Optional. A unique identifier for the log entry. If you provide a value, then
     * Logging considers other log entries in the same project, with the same
     * `timestamp`, and with the same `insert_id` to be duplicates which are
     * removed in a single query result. However, there are no guarantees of
     * de-duplication in the export of logs.
     *
     * If the `insert_id` is omitted when writing a log entry, the Logging API
     * assigns its own unique identifier in this field.
     *
     * In queries, the `insert_id` is also used to order log entries that have
     * the same `log_name` and `timestamp` values.
     *
     * @generated from protobuf field: string insert_id = 4;
     */
    insertId: string;
    /**
     * Optional. Information about the HTTP request associated with this log entry, if
     * applicable.
     *
     * @generated from protobuf field: google.logging.type.HttpRequest http_request = 7;
     */
    httpRequest?: HttpRequest;
    /**
     * Optional. A map of key, value pairs that provides additional information about the
     * log entry. The labels can be user-defined or system-defined.
     *
     * User-defined labels are arbitrary key, value pairs that you can use to
     * classify logs.
     *
     * System-defined labels are defined by GCP services for platform logs.
     * They have two components - a service namespace component and the
     * attribute name. For example: `compute.googleapis.com/resource_name`.
     *
     * Cloud Logging truncates label keys that exceed 512 B and label
     * values that exceed 64 KB upon their associated log entry being
     * written. The truncation is indicated by an ellipsis at the
     * end of the character string.
     *
     * @generated from protobuf field: map<string, string> labels = 11;
     */
    labels: {
        [key: string]: string;
    };
    /**
     * Optional. Information about an operation associated with the log entry, if
     * applicable.
     *
     * @generated from protobuf field: google.logging.v2.LogEntryOperation operation = 15;
     */
    operation?: LogEntryOperation;
    /**
     * Optional. Resource name of the trace associated with the log entry, if any. If it
     * contains a relative resource name, the name is assumed to be relative to
     * `//tracing.googleapis.com`. Example:
     * `projects/my-projectid/traces/06796866738c859f2f19b7cfb3214824`
     *
     * @generated from protobuf field: string trace = 22;
     */
    trace: string;
    /**
     * Optional. The span ID within the trace associated with the log entry.
     *
     * For Trace spans, this is the same format that the Trace API v2 uses: a
     * 16-character hexadecimal encoding of an 8-byte array, such as
     * `000000000000004a`.
     *
     * @generated from protobuf field: string span_id = 27;
     */
    spanId: string;
    /**
     * Optional. The sampling decision of the trace associated with the log entry.
     *
     * True means that the trace resource name in the `trace` field was sampled
     * for storage in a trace backend. False means that the trace was not sampled
     * for storage when this log entry was written, or the sampling decision was
     * unknown at the time. A non-sampled `trace` value is still useful as a
     * request correlation identifier. The default is False.
     *
     * @generated from protobuf field: bool trace_sampled = 30;
     */
    traceSampled: boolean;
    /**
     * Optional. Source code location information associated with the log entry, if any.
     *
     * @generated from protobuf field: google.logging.v2.LogEntrySourceLocation source_location = 23;
     */
    sourceLocation?: LogEntrySourceLocation;
    /**
     * Optional. Information indicating this LogEntry is part of a sequence of multiple log
     * entries split from a single LogEntry.
     *
     * @generated from protobuf field: google.logging.v2.LogSplit split = 35;
     */
    split?: LogSplit;
}
/**
 * Additional information about a potentially long-running operation with which
 * a log entry is associated.
 *
 * @generated from protobuf message google.logging.v2.LogEntryOperation
 */
export interface LogEntryOperation {
    /**
     * Optional. An arbitrary operation identifier. Log entries with the same
     * identifier are assumed to be part of the same operation.
     *
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * Optional. An arbitrary producer identifier. The combination of `id` and
     * `producer` must be globally unique. Examples for `producer`:
     * `"MyDivision.MyBigCompany.com"`, `"github.com/MyProject/MyApplication"`.
     *
     * @generated from protobuf field: string producer = 2;
     */
    producer: string;
    /**
     * Optional. Set this to True if this is the first log entry in the operation.
     *
     * @generated from protobuf field: bool first = 3;
     */
    first: boolean;
    /**
     * Optional. Set this to True if this is the last log entry in the operation.
     *
     * @generated from protobuf field: bool last = 4;
     */
    last: boolean;
}
/**
 * Additional information about the source code location that produced the log
 * entry.
 *
 * @generated from protobuf message google.logging.v2.LogEntrySourceLocation
 */
export interface LogEntrySourceLocation {
    /**
     * Optional. Source file name. Depending on the runtime environment, this
     * might be a simple name or a fully-qualified name.
     *
     * @generated from protobuf field: string file = 1;
     */
    file: string;
    /**
     * Optional. Line within the source file. 1-based; 0 indicates no line number
     * available.
     *
     * @generated from protobuf field: int64 line = 2;
     */
    line: bigint;
    /**
     * Optional. Human-readable name of the function or method being invoked, with
     * optional context such as the class or package name. This information may be
     * used in contexts such as the logs viewer, where a file and line number are
     * less meaningful. The format can vary by language. For example:
     * `qual.if.ied.Class.method` (Java), `dir/package.func` (Go), `function`
     * (Python).
     *
     * @generated from protobuf field: string function = 3;
     */
    function: string;
}
/**
 * Additional information used to correlate multiple log entries. Used when a
 * single LogEntry would exceed the Google Cloud Logging size limit and is
 * split across multiple log entries.
 *
 * @generated from protobuf message google.logging.v2.LogSplit
 */
export interface LogSplit {
    /**
     * A globally unique identifier for all log entries in a sequence of split log
     * entries. All log entries with the same |LogSplit.uid| are assumed to be
     * part of the same sequence of split log entries.
     *
     * @generated from protobuf field: string uid = 1;
     */
    uid: string;
    /**
     * The index of this LogEntry in the sequence of split log entries. Log
     * entries are given |index| values 0, 1, ..., n-1 for a sequence of n log
     * entries.
     *
     * @generated from protobuf field: int32 index = 2;
     */
    index: number;
    /**
     * The total number of log entries that the original LogEntry was split into.
     *
     * @generated from protobuf field: int32 total_splits = 3;
     */
    totalSplits: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class LogEntry$Type extends MessageType<LogEntry> {
    constructor() {
        super("google.logging.v2.LogEntry", [
            { no: 12, name: "log_name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["REQUIRED"] } },
            { no: 8, name: "resource", kind: "message", T: () => MonitoredResource, options: { "google.api.field_behavior": ["REQUIRED"] } },
            { no: 2, name: "proto_payload", kind: "message", oneof: "payload", T: () => Any },
            { no: 3, name: "text_payload", kind: "scalar", oneof: "payload", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "json_payload", kind: "message", oneof: "payload", T: () => Struct },
            { no: 9, name: "timestamp", kind: "message", T: () => Timestamp, options: { "google.api.field_behavior": ["OPTIONAL"] } },
            { no: 24, name: "receive_timestamp", kind: "message", T: () => Timestamp, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 10, name: "severity", kind: "enum", T: () => ["google.logging.type.LogSeverity", LogSeverity], options: { "google.api.field_behavior": ["OPTIONAL"] } },
            { no: 4, name: "insert_id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OPTIONAL"] } },
            { no: 7, name: "http_request", kind: "message", T: () => HttpRequest, options: { "google.api.field_behavior": ["OPTIONAL"] } },
            { no: 11, name: "labels", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "scalar", T: 9 /*ScalarType.STRING*/ }, options: { "google.api.field_behavior": ["OPTIONAL"] } },
            { no: 15, name: "operation", kind: "message", T: () => LogEntryOperation, options: { "google.api.field_behavior": ["OPTIONAL"] } },
            { no: 22, name: "trace", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OPTIONAL"] } },
            { no: 27, name: "span_id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OPTIONAL"] } },
            { no: 30, name: "trace_sampled", kind: "scalar", T: 8 /*ScalarType.BOOL*/, options: { "google.api.field_behavior": ["OPTIONAL"] } },
            { no: 23, name: "source_location", kind: "message", T: () => LogEntrySourceLocation, options: { "google.api.field_behavior": ["OPTIONAL"] } },
            { no: 35, name: "split", kind: "message", T: () => LogSplit, options: { "google.api.field_behavior": ["OPTIONAL"] } }
        ], { "google.api.resource": { type: "logging.googleapis.com/Log", pattern: ["projects/{project}/logs/{log}", "organizations/{organization}/logs/{log}", "folders/{folder}/logs/{log}", "billingAccounts/{billing_account}/logs/{log}"], nameField: "log_name" } });
    }
    create(value?: PartialMessage<LogEntry>): LogEntry {
        const message = { logName: "", payload: { oneofKind: undefined }, severity: 0, insertId: "", labels: {}, trace: "", spanId: "", traceSampled: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<LogEntry>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LogEntry): LogEntry {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string log_name */ 12:
                    message.logName = reader.string();
                    break;
                case /* google.api.MonitoredResource resource */ 8:
                    message.resource = MonitoredResource.internalBinaryRead(reader, reader.uint32(), options, message.resource);
                    break;
                case /* google.protobuf.Any proto_payload */ 2:
                    message.payload = {
                        oneofKind: "protoPayload",
                        protoPayload: Any.internalBinaryRead(reader, reader.uint32(), options, (message.payload as any).protoPayload)
                    };
                    break;
                case /* string text_payload */ 3:
                    message.payload = {
                        oneofKind: "textPayload",
                        textPayload: reader.string()
                    };
                    break;
                case /* google.protobuf.Struct json_payload */ 6:
                    message.payload = {
                        oneofKind: "jsonPayload",
                        jsonPayload: Struct.internalBinaryRead(reader, reader.uint32(), options, (message.payload as any).jsonPayload)
                    };
                    break;
                case /* google.protobuf.Timestamp timestamp */ 9:
                    message.timestamp = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.timestamp);
                    break;
                case /* google.protobuf.Timestamp receive_timestamp */ 24:
                    message.receiveTimestamp = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.receiveTimestamp);
                    break;
                case /* google.logging.type.LogSeverity severity */ 10:
                    message.severity = reader.int32();
                    break;
                case /* string insert_id */ 4:
                    message.insertId = reader.string();
                    break;
                case /* google.logging.type.HttpRequest http_request */ 7:
                    message.httpRequest = HttpRequest.internalBinaryRead(reader, reader.uint32(), options, message.httpRequest);
                    break;
                case /* map<string, string> labels */ 11:
                    this.binaryReadMap11(message.labels, reader, options);
                    break;
                case /* google.logging.v2.LogEntryOperation operation */ 15:
                    message.operation = LogEntryOperation.internalBinaryRead(reader, reader.uint32(), options, message.operation);
                    break;
                case /* string trace */ 22:
                    message.trace = reader.string();
                    break;
                case /* string span_id */ 27:
                    message.spanId = reader.string();
                    break;
                case /* bool trace_sampled */ 30:
                    message.traceSampled = reader.bool();
                    break;
                case /* google.logging.v2.LogEntrySourceLocation source_location */ 23:
                    message.sourceLocation = LogEntrySourceLocation.internalBinaryRead(reader, reader.uint32(), options, message.sourceLocation);
                    break;
                case /* google.logging.v2.LogSplit split */ 35:
                    message.split = LogSplit.internalBinaryRead(reader, reader.uint32(), options, message.split);
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
    private binaryReadMap11(map: LogEntry["labels"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof LogEntry["labels"] | undefined, val: LogEntry["labels"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.string();
                    break;
                case 2:
                    val = reader.string();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field google.logging.v2.LogEntry.labels");
            }
        }
        map[key ?? ""] = val ?? "";
    }
    internalBinaryWrite(message: LogEntry, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string log_name = 12; */
        if (message.logName !== "")
            writer.tag(12, WireType.LengthDelimited).string(message.logName);
        /* google.api.MonitoredResource resource = 8; */
        if (message.resource)
            MonitoredResource.internalBinaryWrite(message.resource, writer.tag(8, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Any proto_payload = 2; */
        if (message.payload.oneofKind === "protoPayload")
            Any.internalBinaryWrite(message.payload.protoPayload, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* string text_payload = 3; */
        if (message.payload.oneofKind === "textPayload")
            writer.tag(3, WireType.LengthDelimited).string(message.payload.textPayload);
        /* google.protobuf.Struct json_payload = 6; */
        if (message.payload.oneofKind === "jsonPayload")
            Struct.internalBinaryWrite(message.payload.jsonPayload, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Timestamp timestamp = 9; */
        if (message.timestamp)
            Timestamp.internalBinaryWrite(message.timestamp, writer.tag(9, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Timestamp receive_timestamp = 24; */
        if (message.receiveTimestamp)
            Timestamp.internalBinaryWrite(message.receiveTimestamp, writer.tag(24, WireType.LengthDelimited).fork(), options).join();
        /* google.logging.type.LogSeverity severity = 10; */
        if (message.severity !== 0)
            writer.tag(10, WireType.Varint).int32(message.severity);
        /* string insert_id = 4; */
        if (message.insertId !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.insertId);
        /* google.logging.type.HttpRequest http_request = 7; */
        if (message.httpRequest)
            HttpRequest.internalBinaryWrite(message.httpRequest, writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        /* map<string, string> labels = 11; */
        for (let k of Object.keys(message.labels))
            writer.tag(11, WireType.LengthDelimited).fork().tag(1, WireType.LengthDelimited).string(k).tag(2, WireType.LengthDelimited).string(message.labels[k]).join();
        /* google.logging.v2.LogEntryOperation operation = 15; */
        if (message.operation)
            LogEntryOperation.internalBinaryWrite(message.operation, writer.tag(15, WireType.LengthDelimited).fork(), options).join();
        /* string trace = 22; */
        if (message.trace !== "")
            writer.tag(22, WireType.LengthDelimited).string(message.trace);
        /* string span_id = 27; */
        if (message.spanId !== "")
            writer.tag(27, WireType.LengthDelimited).string(message.spanId);
        /* bool trace_sampled = 30; */
        if (message.traceSampled !== false)
            writer.tag(30, WireType.Varint).bool(message.traceSampled);
        /* google.logging.v2.LogEntrySourceLocation source_location = 23; */
        if (message.sourceLocation)
            LogEntrySourceLocation.internalBinaryWrite(message.sourceLocation, writer.tag(23, WireType.LengthDelimited).fork(), options).join();
        /* google.logging.v2.LogSplit split = 35; */
        if (message.split)
            LogSplit.internalBinaryWrite(message.split, writer.tag(35, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.logging.v2.LogEntry
 */
export const LogEntry = new LogEntry$Type();
// @generated message type with reflection information, may provide speed optimized methods
class LogEntryOperation$Type extends MessageType<LogEntryOperation> {
    constructor() {
        super("google.logging.v2.LogEntryOperation", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OPTIONAL"] } },
            { no: 2, name: "producer", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OPTIONAL"] } },
            { no: 3, name: "first", kind: "scalar", T: 8 /*ScalarType.BOOL*/, options: { "google.api.field_behavior": ["OPTIONAL"] } },
            { no: 4, name: "last", kind: "scalar", T: 8 /*ScalarType.BOOL*/, options: { "google.api.field_behavior": ["OPTIONAL"] } }
        ]);
    }
    create(value?: PartialMessage<LogEntryOperation>): LogEntryOperation {
        const message = { id: "", producer: "", first: false, last: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<LogEntryOperation>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LogEntryOperation): LogEntryOperation {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string id */ 1:
                    message.id = reader.string();
                    break;
                case /* string producer */ 2:
                    message.producer = reader.string();
                    break;
                case /* bool first */ 3:
                    message.first = reader.bool();
                    break;
                case /* bool last */ 4:
                    message.last = reader.bool();
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
    internalBinaryWrite(message: LogEntryOperation, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string id = 1; */
        if (message.id !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.id);
        /* string producer = 2; */
        if (message.producer !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.producer);
        /* bool first = 3; */
        if (message.first !== false)
            writer.tag(3, WireType.Varint).bool(message.first);
        /* bool last = 4; */
        if (message.last !== false)
            writer.tag(4, WireType.Varint).bool(message.last);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.logging.v2.LogEntryOperation
 */
export const LogEntryOperation = new LogEntryOperation$Type();
// @generated message type with reflection information, may provide speed optimized methods
class LogEntrySourceLocation$Type extends MessageType<LogEntrySourceLocation> {
    constructor() {
        super("google.logging.v2.LogEntrySourceLocation", [
            { no: 1, name: "file", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OPTIONAL"] } },
            { no: 2, name: "line", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/, options: { "google.api.field_behavior": ["OPTIONAL"] } },
            { no: 3, name: "function", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OPTIONAL"] } }
        ]);
    }
    create(value?: PartialMessage<LogEntrySourceLocation>): LogEntrySourceLocation {
        const message = { file: "", line: 0n, function: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<LogEntrySourceLocation>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LogEntrySourceLocation): LogEntrySourceLocation {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string file */ 1:
                    message.file = reader.string();
                    break;
                case /* int64 line */ 2:
                    message.line = reader.int64().toBigInt();
                    break;
                case /* string function */ 3:
                    message.function = reader.string();
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
    internalBinaryWrite(message: LogEntrySourceLocation, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string file = 1; */
        if (message.file !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.file);
        /* int64 line = 2; */
        if (message.line !== 0n)
            writer.tag(2, WireType.Varint).int64(message.line);
        /* string function = 3; */
        if (message.function !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.function);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.logging.v2.LogEntrySourceLocation
 */
export const LogEntrySourceLocation = new LogEntrySourceLocation$Type();
// @generated message type with reflection information, may provide speed optimized methods
class LogSplit$Type extends MessageType<LogSplit> {
    constructor() {
        super("google.logging.v2.LogSplit", [
            { no: 1, name: "uid", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "index", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "total_splits", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<LogSplit>): LogSplit {
        const message = { uid: "", index: 0, totalSplits: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<LogSplit>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LogSplit): LogSplit {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string uid */ 1:
                    message.uid = reader.string();
                    break;
                case /* int32 index */ 2:
                    message.index = reader.int32();
                    break;
                case /* int32 total_splits */ 3:
                    message.totalSplits = reader.int32();
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
    internalBinaryWrite(message: LogSplit, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string uid = 1; */
        if (message.uid !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.uid);
        /* int32 index = 2; */
        if (message.index !== 0)
            writer.tag(2, WireType.Varint).int32(message.index);
        /* int32 total_splits = 3; */
        if (message.totalSplits !== 0)
            writer.tag(3, WireType.Varint).int32(message.totalSplits);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.logging.v2.LogSplit
 */
export const LogSplit = new LogSplit$Type();
