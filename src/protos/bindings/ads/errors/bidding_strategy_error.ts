// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/errors/bidding_strategy_error.proto" (package "google.ads.googleads.v11.errors", syntax proto3)
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
// Proto file describing bidding strategy errors.

/**
 * Container for enum describing possible bidding strategy errors.
 *
 * @generated from protobuf message google.ads.googleads.v11.errors.BiddingStrategyErrorEnum
 */
export interface BiddingStrategyErrorEnum {
}
/**
 * Enum describing possible bidding strategy errors.
 *
 * @generated from protobuf enum google.ads.googleads.v11.errors.BiddingStrategyErrorEnum.BiddingStrategyError
 */
export enum BiddingStrategyErrorEnum_BiddingStrategyError {
    /**
     * Enum unspecified.
     *
     * @generated from protobuf enum value: UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * The received error code is not known in this version.
     *
     * @generated from protobuf enum value: UNKNOWN = 1;
     */
    UNKNOWN = 1,
    /**
     * Each bidding strategy must have a unique name.
     *
     * @generated from protobuf enum value: DUPLICATE_NAME = 2;
     */
    DUPLICATE_NAME = 2,
    /**
     * Bidding strategy type is immutable.
     *
     * @generated from protobuf enum value: CANNOT_CHANGE_BIDDING_STRATEGY_TYPE = 3;
     */
    CANNOT_CHANGE_BIDDING_STRATEGY_TYPE = 3,
    /**
     * Only bidding strategies not linked to campaigns, adgroups or adgroup
     * criteria can be removed.
     *
     * @generated from protobuf enum value: CANNOT_REMOVE_ASSOCIATED_STRATEGY = 4;
     */
    CANNOT_REMOVE_ASSOCIATED_STRATEGY = 4,
    /**
     * The specified bidding strategy is not supported.
     *
     * @generated from protobuf enum value: BIDDING_STRATEGY_NOT_SUPPORTED = 5;
     */
    BIDDING_STRATEGY_NOT_SUPPORTED = 5,
    /**
     * The bidding strategy is incompatible with the campaign's bidding
     * strategy goal type.
     *
     * @generated from protobuf enum value: INCOMPATIBLE_BIDDING_STRATEGY_AND_BIDDING_STRATEGY_GOAL_TYPE = 6;
     */
    INCOMPATIBLE_BIDDING_STRATEGY_AND_BIDDING_STRATEGY_GOAL_TYPE = 6
}
// @generated message type with reflection information, may provide speed optimized methods
class BiddingStrategyErrorEnum$Type extends MessageType<BiddingStrategyErrorEnum> {
    constructor() {
        super("google.ads.googleads.v11.errors.BiddingStrategyErrorEnum", []);
    }
    create(value?: PartialMessage<BiddingStrategyErrorEnum>): BiddingStrategyErrorEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<BiddingStrategyErrorEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BiddingStrategyErrorEnum): BiddingStrategyErrorEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: BiddingStrategyErrorEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.errors.BiddingStrategyErrorEnum
 */
export const BiddingStrategyErrorEnum = new BiddingStrategyErrorEnum$Type();
