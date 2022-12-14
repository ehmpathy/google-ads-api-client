// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/bidding_strategy_status.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
// Proto file describing BiddingStrategy statuses.

/**
 * Message describing BiddingStrategy statuses.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.BiddingStrategyStatusEnum
 */
export interface BiddingStrategyStatusEnum {
}
/**
 * The possible statuses of a BiddingStrategy.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.BiddingStrategyStatusEnum.BiddingStrategyStatus
 */
export enum BiddingStrategyStatusEnum_BiddingStrategyStatus {
    /**
     * No value has been specified.
     *
     * @generated from protobuf enum value: UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * The received value is not known in this version.
     *
     * This is a response-only value.
     *
     * @generated from protobuf enum value: UNKNOWN = 1;
     */
    UNKNOWN = 1,
    /**
     * The bidding strategy is enabled.
     *
     * @generated from protobuf enum value: ENABLED = 2;
     */
    ENABLED = 2,
    /**
     * The bidding strategy is removed.
     *
     * @generated from protobuf enum value: REMOVED = 4;
     */
    REMOVED = 4
}
// @generated message type with reflection information, may provide speed optimized methods
class BiddingStrategyStatusEnum$Type extends MessageType<BiddingStrategyStatusEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.BiddingStrategyStatusEnum", []);
    }
    create(value?: PartialMessage<BiddingStrategyStatusEnum>): BiddingStrategyStatusEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<BiddingStrategyStatusEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BiddingStrategyStatusEnum): BiddingStrategyStatusEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: BiddingStrategyStatusEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.BiddingStrategyStatusEnum
 */
export const BiddingStrategyStatusEnum = new BiddingStrategyStatusEnum$Type();
