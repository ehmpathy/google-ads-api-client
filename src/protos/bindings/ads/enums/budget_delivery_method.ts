// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/budget_delivery_method.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
// Proto file describing Budget delivery methods.

/**
 * Message describing Budget delivery methods. A delivery method determines the
 * rate at which the Budget is spent.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.BudgetDeliveryMethodEnum
 */
export interface BudgetDeliveryMethodEnum {
}
/**
 * Possible delivery methods of a Budget.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.BudgetDeliveryMethodEnum.BudgetDeliveryMethod
 */
export enum BudgetDeliveryMethodEnum_BudgetDeliveryMethod {
    /**
     * Not specified.
     *
     * @generated from protobuf enum value: UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Used for return value only. Represents value unknown in this version.
     *
     * @generated from protobuf enum value: UNKNOWN = 1;
     */
    UNKNOWN = 1,
    /**
     * The budget server will throttle serving evenly across
     * the entire time period.
     *
     * @generated from protobuf enum value: STANDARD = 2;
     */
    STANDARD = 2,
    /**
     * The budget server will not throttle serving,
     * and ads will serve as fast as possible.
     *
     * @generated from protobuf enum value: ACCELERATED = 3;
     */
    ACCELERATED = 3
}
// @generated message type with reflection information, may provide speed optimized methods
class BudgetDeliveryMethodEnum$Type extends MessageType<BudgetDeliveryMethodEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.BudgetDeliveryMethodEnum", []);
    }
    create(value?: PartialMessage<BudgetDeliveryMethodEnum>): BudgetDeliveryMethodEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<BudgetDeliveryMethodEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BudgetDeliveryMethodEnum): BudgetDeliveryMethodEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: BudgetDeliveryMethodEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.BudgetDeliveryMethodEnum
 */
export const BudgetDeliveryMethodEnum = new BudgetDeliveryMethodEnum$Type();
