// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/resources/shopping_performance_view.proto" (package "google.ads.googleads.v11.resources", syntax proto3)
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
// Proto file describing the ShoppingPerformanceView resource.

/**
 * Shopping performance view.
 * Provides Shopping campaign statistics aggregated at several product dimension
 * levels. Product dimension values from Merchant Center such as brand,
 * category, custom attributes, product condition and product type will reflect
 * the state of each dimension as of the date and time when the corresponding
 * event was recorded.
 *
 * @generated from protobuf message google.ads.googleads.v11.resources.ShoppingPerformanceView
 */
export interface ShoppingPerformanceView {
    /**
     * Output only. The resource name of the Shopping performance view.
     * Shopping performance view resource names have the form:
     * `customers/{customer_id}/shoppingPerformanceView`
     *
     * @generated from protobuf field: string resource_name = 1;
     */
    resourceName: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class ShoppingPerformanceView$Type extends MessageType<ShoppingPerformanceView> {
    constructor() {
        super("google.ads.googleads.v11.resources.ShoppingPerformanceView", [
            { no: 1, name: "resource_name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"], "google.api.resource_reference": { type: "googleads.googleapis.com/ShoppingPerformanceView" } } }
        ], { "google.api.resource": { type: "googleads.googleapis.com/ShoppingPerformanceView", pattern: ["customers/{customer_id}/shoppingPerformanceView"] } });
    }
    create(value?: PartialMessage<ShoppingPerformanceView>): ShoppingPerformanceView {
        const message = { resourceName: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ShoppingPerformanceView>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ShoppingPerformanceView): ShoppingPerformanceView {
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
    internalBinaryWrite(message: ShoppingPerformanceView, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
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
 * @generated MessageType for protobuf message google.ads.googleads.v11.resources.ShoppingPerformanceView
 */
export const ShoppingPerformanceView = new ShoppingPerformanceView$Type();
