// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/bidding_strategy_system_status.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
 * Message describing BiddingStrategy system statuses.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.BiddingStrategySystemStatusEnum
 */
export interface BiddingStrategySystemStatusEnum {
}
/**
 * The possible system statuses of a BiddingStrategy.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.BiddingStrategySystemStatusEnum.BiddingStrategySystemStatus
 */
export enum BiddingStrategySystemStatusEnum_BiddingStrategySystemStatus {
    /**
     * Signals that an unexpected error occurred, for example, no bidding
     * strategy type was found, or no status information was found.
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
     * The bid strategy is active, and AdWords cannot find any specific issues
     * with the strategy.
     *
     * @generated from protobuf enum value: ENABLED = 2;
     */
    ENABLED = 2,
    /**
     * The bid strategy is learning because it has been recently created or
     * recently reactivated.
     *
     * @generated from protobuf enum value: LEARNING_NEW = 3;
     */
    LEARNING_NEW = 3,
    /**
     * The bid strategy is learning because of a recent setting change.
     *
     * @generated from protobuf enum value: LEARNING_SETTING_CHANGE = 4;
     */
    LEARNING_SETTING_CHANGE = 4,
    /**
     * The bid strategy is learning because of a recent budget change.
     *
     * @generated from protobuf enum value: LEARNING_BUDGET_CHANGE = 5;
     */
    LEARNING_BUDGET_CHANGE = 5,
    /**
     * The bid strategy is learning because of recent change in number of
     * campaigns, ad groups or keywords attached to it.
     *
     * @generated from protobuf enum value: LEARNING_COMPOSITION_CHANGE = 6;
     */
    LEARNING_COMPOSITION_CHANGE = 6,
    /**
     * The bid strategy depends on conversion reporting and the customer
     * recently modified conversion types that were relevant to the
     * bid strategy.
     *
     * @generated from protobuf enum value: LEARNING_CONVERSION_TYPE_CHANGE = 7;
     */
    LEARNING_CONVERSION_TYPE_CHANGE = 7,
    /**
     * The bid strategy depends on conversion reporting and the customer
     * recently changed their conversion settings.
     *
     * @generated from protobuf enum value: LEARNING_CONVERSION_SETTING_CHANGE = 8;
     */
    LEARNING_CONVERSION_SETTING_CHANGE = 8,
    /**
     * The bid strategy is limited by its bid ceiling.
     *
     * @generated from protobuf enum value: LIMITED_BY_CPC_BID_CEILING = 9;
     */
    LIMITED_BY_CPC_BID_CEILING = 9,
    /**
     * The bid strategy is limited by its bid floor.
     *
     * @generated from protobuf enum value: LIMITED_BY_CPC_BID_FLOOR = 10;
     */
    LIMITED_BY_CPC_BID_FLOOR = 10,
    /**
     * The bid strategy is limited because there was not enough conversion
     * traffic over the past weeks.
     *
     * @generated from protobuf enum value: LIMITED_BY_DATA = 11;
     */
    LIMITED_BY_DATA = 11,
    /**
     * A significant fraction of keywords in this bid strategy are limited by
     * budget.
     *
     * @generated from protobuf enum value: LIMITED_BY_BUDGET = 12;
     */
    LIMITED_BY_BUDGET = 12,
    /**
     * The bid strategy cannot reach its target spend because its spend has
     * been de-prioritized.
     *
     * @generated from protobuf enum value: LIMITED_BY_LOW_PRIORITY_SPEND = 13;
     */
    LIMITED_BY_LOW_PRIORITY_SPEND = 13,
    /**
     * A significant fraction of keywords in this bid strategy have a low
     * Quality Score.
     *
     * @generated from protobuf enum value: LIMITED_BY_LOW_QUALITY = 14;
     */
    LIMITED_BY_LOW_QUALITY = 14,
    /**
     * The bid strategy cannot fully spend its budget because of narrow
     * targeting.
     *
     * @generated from protobuf enum value: LIMITED_BY_INVENTORY = 15;
     */
    LIMITED_BY_INVENTORY = 15,
    /**
     * Missing conversion tracking (no pings present) and/or remarketing lists
     * for SSC.
     *
     * @generated from protobuf enum value: MISCONFIGURED_ZERO_ELIGIBILITY = 16;
     */
    MISCONFIGURED_ZERO_ELIGIBILITY = 16,
    /**
     * The bid strategy depends on conversion reporting and the customer is
     * lacking conversion types that might be reported against this strategy.
     *
     * @generated from protobuf enum value: MISCONFIGURED_CONVERSION_TYPES = 17;
     */
    MISCONFIGURED_CONVERSION_TYPES = 17,
    /**
     * The bid strategy depends on conversion reporting and the customer's
     * conversion settings are misconfigured.
     *
     * @generated from protobuf enum value: MISCONFIGURED_CONVERSION_SETTINGS = 18;
     */
    MISCONFIGURED_CONVERSION_SETTINGS = 18,
    /**
     * There are campaigns outside the bid strategy that share budgets with
     * campaigns included in the strategy.
     *
     * @generated from protobuf enum value: MISCONFIGURED_SHARED_BUDGET = 19;
     */
    MISCONFIGURED_SHARED_BUDGET = 19,
    /**
     * The campaign has an invalid strategy type and is not serving.
     *
     * @generated from protobuf enum value: MISCONFIGURED_STRATEGY_TYPE = 20;
     */
    MISCONFIGURED_STRATEGY_TYPE = 20,
    /**
     * The bid strategy is not active. Either there are no active campaigns,
     * ad groups or keywords attached to the bid strategy. Or there are no
     * active budgets connected to the bid strategy.
     *
     * @generated from protobuf enum value: PAUSED = 21;
     */
    PAUSED = 21,
    /**
     * This bid strategy currently does not support status reporting.
     *
     * @generated from protobuf enum value: UNAVAILABLE = 22;
     */
    UNAVAILABLE = 22,
    /**
     * There were multiple LEARNING_* system statuses for this bid strategy
     * during the time in question.
     *
     * @generated from protobuf enum value: MULTIPLE_LEARNING = 23;
     */
    MULTIPLE_LEARNING = 23,
    /**
     * There were multiple LIMITED_* system statuses for this bid strategy
     * during the time in question.
     *
     * @generated from protobuf enum value: MULTIPLE_LIMITED = 24;
     */
    MULTIPLE_LIMITED = 24,
    /**
     * There were multiple MISCONFIGURED_* system statuses for this bid strategy
     * during the time in question.
     *
     * @generated from protobuf enum value: MULTIPLE_MISCONFIGURED = 25;
     */
    MULTIPLE_MISCONFIGURED = 25,
    /**
     * There were multiple system statuses for this bid strategy during the
     * time in question.
     *
     * @generated from protobuf enum value: MULTIPLE = 26;
     */
    MULTIPLE = 26
}
// @generated message type with reflection information, may provide speed optimized methods
class BiddingStrategySystemStatusEnum$Type extends MessageType<BiddingStrategySystemStatusEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.BiddingStrategySystemStatusEnum", []);
    }
    create(value?: PartialMessage<BiddingStrategySystemStatusEnum>): BiddingStrategySystemStatusEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<BiddingStrategySystemStatusEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BiddingStrategySystemStatusEnum): BiddingStrategySystemStatusEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: BiddingStrategySystemStatusEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.BiddingStrategySystemStatusEnum
 */
export const BiddingStrategySystemStatusEnum = new BiddingStrategySystemStatusEnum$Type();