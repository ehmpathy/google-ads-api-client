// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "google/api/endpoint.proto" (package "google.api", syntax proto3)
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
 * `Endpoint` describes a network endpoint of a service that serves a set of
 * APIs. It is commonly known as a service endpoint. A service may expose
 * any number of service endpoints, and all service endpoints share the same
 * service definition, such as quota limits and monitoring metrics.
 *
 * Example service configuration:
 *
 *     name: library-example.googleapis.com
 *     endpoints:
 *       # Below entry makes 'google.example.library.v1.Library'
 *       # API be served from endpoint address library-example.googleapis.com.
 *       # It also allows HTTP OPTIONS calls to be passed to the backend, for
 *       # it to decide whether the subsequent cross-origin request is
 *       # allowed to proceed.
 *     - name: library-example.googleapis.com
 *       allow_cors: true
 *
 * @generated from protobuf message google.api.Endpoint
 */
export interface Endpoint {
    /**
     * The canonical name of this endpoint.
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * Unimplemented. Dot not use.
     *
     * DEPRECATED: This field is no longer supported. Instead of using aliases,
     * please specify multiple [google.api.Endpoint][google.api.Endpoint] for each of the intended
     * aliases.
     *
     * Additional names that this endpoint will be hosted on.
     *
     * @deprecated
     * @generated from protobuf field: repeated string aliases = 2 [deprecated = true];
     */
    aliases: string[];
    /**
     * The specification of an Internet routable address of API frontend that will
     * handle requests to this [API
     * Endpoint](https://cloud.google.com/apis/design/glossary). It should be
     * either a valid IPv4 address or a fully-qualified domain name. For example,
     * "8.8.8.8" or "myservice.appspot.com".
     *
     * @generated from protobuf field: string target = 101;
     */
    target: string;
    /**
     * Allowing
     * [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing), aka
     * cross-domain traffic, would allow the backends served from this endpoint to
     * receive and respond to HTTP OPTIONS requests. The response will be used by
     * the browser to determine whether the subsequent cross-origin request is
     * allowed to proceed.
     *
     * @generated from protobuf field: bool allow_cors = 5;
     */
    allowCors: boolean;
}
// @generated message type with reflection information, may provide speed optimized methods
class Endpoint$Type extends MessageType<Endpoint> {
    constructor() {
        super("google.api.Endpoint", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "aliases", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 101, name: "target", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "allow_cors", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<Endpoint>): Endpoint {
        const message = { name: "", aliases: [], target: "", allowCors: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Endpoint>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Endpoint): Endpoint {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string name */ 1:
                    message.name = reader.string();
                    break;
                case /* repeated string aliases = 2 [deprecated = true];*/ 2:
                    message.aliases.push(reader.string());
                    break;
                case /* string target */ 101:
                    message.target = reader.string();
                    break;
                case /* bool allow_cors */ 5:
                    message.allowCors = reader.bool();
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
    internalBinaryWrite(message: Endpoint, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string name = 1; */
        if (message.name !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.name);
        /* repeated string aliases = 2 [deprecated = true]; */
        for (let i = 0; i < message.aliases.length; i++)
            writer.tag(2, WireType.LengthDelimited).string(message.aliases[i]);
        /* string target = 101; */
        if (message.target !== "")
            writer.tag(101, WireType.LengthDelimited).string(message.target);
        /* bool allow_cors = 5; */
        if (message.allowCors !== false)
            writer.tag(5, WireType.Varint).bool(message.allowCors);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.api.Endpoint
 */
export const Endpoint = new Endpoint$Type();
