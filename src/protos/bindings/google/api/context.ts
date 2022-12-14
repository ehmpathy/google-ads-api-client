// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "google/api/context.proto" (package "google.api", syntax proto3)
// tslint:disable
//
// Copyright 2015 Google LLC
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
/**
 * `Context` defines which contexts an API requests.
 *
 * Example:
 *
 *     context:
 *       rules:
 *       - selector: "*"
 *         requested:
 *         - google.rpc.context.ProjectContext
 *         - google.rpc.context.OriginContext
 *
 * The above specifies that all methods in the API request
 * `google.rpc.context.ProjectContext` and
 * `google.rpc.context.OriginContext`.
 *
 * Available context types are defined in package
 * `google.rpc.context`.
 *
 * This also provides mechanism to allowlist any protobuf message extension that
 * can be sent in grpc metadata using “x-goog-ext-<extension_id>-bin” and
 * “x-goog-ext-<extension_id>-jspb” format. For example, list any service
 * specific protobuf types that can appear in grpc metadata as follows in your
 * yaml file:
 *
 * Example:
 *
 *     context:
 *       rules:
 *        - selector: "google.example.library.v1.LibraryService.CreateBook"
 *          allowed_request_extensions:
 *          - google.foo.v1.NewExtension
 *          allowed_response_extensions:
 *          - google.foo.v1.NewExtension
 *
 * You can also specify extension ID instead of fully qualified extension name
 * here.
 *
 * @generated from protobuf message google.api.Context
 */
export interface Context {
    /**
     * A list of RPC context rules that apply to individual API methods.
     *
     * **NOTE:** All service configuration rules follow "last one wins" order.
     *
     * @generated from protobuf field: repeated google.api.ContextRule rules = 1;
     */
    rules: ContextRule[];
}
/**
 * A context rule provides information about the context for an individual API
 * element.
 *
 * @generated from protobuf message google.api.ContextRule
 */
export interface ContextRule {
    /**
     * Selects the methods to which this rule applies.
     *
     * Refer to [selector][google.api.DocumentationRule.selector] for syntax details.
     *
     * @generated from protobuf field: string selector = 1;
     */
    selector: string;
    /**
     * A list of full type names of requested contexts.
     *
     * @generated from protobuf field: repeated string requested = 2;
     */
    requested: string[];
    /**
     * A list of full type names of provided contexts.
     *
     * @generated from protobuf field: repeated string provided = 3;
     */
    provided: string[];
    /**
     * A list of full type names or extension IDs of extensions allowed in grpc
     * side channel from client to backend.
     *
     * @generated from protobuf field: repeated string allowed_request_extensions = 4;
     */
    allowedRequestExtensions: string[];
    /**
     * A list of full type names or extension IDs of extensions allowed in grpc
     * side channel from backend to client.
     *
     * @generated from protobuf field: repeated string allowed_response_extensions = 5;
     */
    allowedResponseExtensions: string[];
}
// @generated message type with reflection information, may provide speed optimized methods
class Context$Type extends MessageType<Context> {
    constructor() {
        super("google.api.Context", [
            { no: 1, name: "rules", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ContextRule }
        ]);
    }
    create(value?: PartialMessage<Context>): Context {
        const message = { rules: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Context>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Context): Context {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated google.api.ContextRule rules */ 1:
                    message.rules.push(ContextRule.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: Context, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated google.api.ContextRule rules = 1; */
        for (let i = 0; i < message.rules.length; i++)
            ContextRule.internalBinaryWrite(message.rules[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.api.Context
 */
export const Context = new Context$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ContextRule$Type extends MessageType<ContextRule> {
    constructor() {
        super("google.api.ContextRule", [
            { no: 1, name: "selector", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "requested", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "provided", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "allowed_request_extensions", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "allowed_response_extensions", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<ContextRule>): ContextRule {
        const message = { selector: "", requested: [], provided: [], allowedRequestExtensions: [], allowedResponseExtensions: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ContextRule>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ContextRule): ContextRule {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string selector */ 1:
                    message.selector = reader.string();
                    break;
                case /* repeated string requested */ 2:
                    message.requested.push(reader.string());
                    break;
                case /* repeated string provided */ 3:
                    message.provided.push(reader.string());
                    break;
                case /* repeated string allowed_request_extensions */ 4:
                    message.allowedRequestExtensions.push(reader.string());
                    break;
                case /* repeated string allowed_response_extensions */ 5:
                    message.allowedResponseExtensions.push(reader.string());
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
    internalBinaryWrite(message: ContextRule, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string selector = 1; */
        if (message.selector !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.selector);
        /* repeated string requested = 2; */
        for (let i = 0; i < message.requested.length; i++)
            writer.tag(2, WireType.LengthDelimited).string(message.requested[i]);
        /* repeated string provided = 3; */
        for (let i = 0; i < message.provided.length; i++)
            writer.tag(3, WireType.LengthDelimited).string(message.provided[i]);
        /* repeated string allowed_request_extensions = 4; */
        for (let i = 0; i < message.allowedRequestExtensions.length; i++)
            writer.tag(4, WireType.LengthDelimited).string(message.allowedRequestExtensions[i]);
        /* repeated string allowed_response_extensions = 5; */
        for (let i = 0; i < message.allowedResponseExtensions.length; i++)
            writer.tag(5, WireType.LengthDelimited).string(message.allowedResponseExtensions[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.api.ContextRule
 */
export const ContextRule = new ContextRule$Type();
