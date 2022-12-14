// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/common/custom_parameter.proto" (package "google.ads.googleads.v11.common", syntax proto3)
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
// Proto file describing CustomParameter and operation

/**
 * A mapping that can be used by custom parameter tags in a
 * `tracking_url_template`, `final_urls`, or `mobile_final_urls`.
 *
 * @generated from protobuf message google.ads.googleads.v11.common.CustomParameter
 */
export interface CustomParameter {
    /**
     * The key matching the parameter tag name.
     *
     * @generated from protobuf field: optional string key = 3;
     */
    key?: string;
    /**
     * The value to be substituted.
     *
     * @generated from protobuf field: optional string value = 4;
     */
    value?: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class CustomParameter$Type extends MessageType<CustomParameter> {
    constructor() {
        super("google.ads.googleads.v11.common.CustomParameter", [
            { no: 3, name: "key", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "value", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<CustomParameter>): CustomParameter {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CustomParameter>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CustomParameter): CustomParameter {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional string key */ 3:
                    message.key = reader.string();
                    break;
                case /* optional string value */ 4:
                    message.value = reader.string();
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
    internalBinaryWrite(message: CustomParameter, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional string key = 3; */
        if (message.key !== undefined)
            writer.tag(3, WireType.LengthDelimited).string(message.key);
        /* optional string value = 4; */
        if (message.value !== undefined)
            writer.tag(4, WireType.LengthDelimited).string(message.value);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.common.CustomParameter
 */
export const CustomParameter = new CustomParameter$Type();
