// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/errors/campaign_budget_error.proto" (package "google.ads.googleads.v11.errors", syntax proto3)
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
// Proto file describing campaign budget errors.

/**
 * Container for enum describing possible campaign budget errors.
 *
 * @generated from protobuf message google.ads.googleads.v11.errors.CampaignBudgetErrorEnum
 */
export interface CampaignBudgetErrorEnum {
}
/**
 * Enum describing possible campaign budget errors.
 *
 * @generated from protobuf enum google.ads.googleads.v11.errors.CampaignBudgetErrorEnum.CampaignBudgetError
 */
export enum CampaignBudgetErrorEnum_CampaignBudgetError {
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
     * The campaign budget cannot be shared.
     *
     * @generated from protobuf enum value: CAMPAIGN_BUDGET_CANNOT_BE_SHARED = 17;
     */
    CAMPAIGN_BUDGET_CANNOT_BE_SHARED = 17,
    /**
     * The requested campaign budget no longer exists.
     *
     * @generated from protobuf enum value: CAMPAIGN_BUDGET_REMOVED = 2;
     */
    CAMPAIGN_BUDGET_REMOVED = 2,
    /**
     * The campaign budget is associated with at least one campaign, and so the
     * campaign budget cannot be removed.
     *
     * @generated from protobuf enum value: CAMPAIGN_BUDGET_IN_USE = 3;
     */
    CAMPAIGN_BUDGET_IN_USE = 3,
    /**
     * Customer is not on the allow-list for this campaign budget period.
     *
     * @generated from protobuf enum value: CAMPAIGN_BUDGET_PERIOD_NOT_AVAILABLE = 4;
     */
    CAMPAIGN_BUDGET_PERIOD_NOT_AVAILABLE = 4,
    /**
     * This field is not mutable on implicitly shared campaign budgets
     *
     * @generated from protobuf enum value: CANNOT_MODIFY_FIELD_OF_IMPLICITLY_SHARED_CAMPAIGN_BUDGET = 6;
     */
    CANNOT_MODIFY_FIELD_OF_IMPLICITLY_SHARED_CAMPAIGN_BUDGET = 6,
    /**
     * Cannot change explicitly shared campaign budgets back to implicitly
     * shared ones.
     *
     * @generated from protobuf enum value: CANNOT_UPDATE_CAMPAIGN_BUDGET_TO_IMPLICITLY_SHARED = 7;
     */
    CANNOT_UPDATE_CAMPAIGN_BUDGET_TO_IMPLICITLY_SHARED = 7,
    /**
     * An implicit campaign budget without a name cannot be changed to
     * explicitly shared campaign budget.
     *
     * @generated from protobuf enum value: CANNOT_UPDATE_CAMPAIGN_BUDGET_TO_EXPLICITLY_SHARED_WITHOUT_NAME = 8;
     */
    CANNOT_UPDATE_CAMPAIGN_BUDGET_TO_EXPLICITLY_SHARED_WITHOUT_NAME = 8,
    /**
     * Cannot change an implicitly shared campaign budget to an explicitly
     * shared one.
     *
     * @generated from protobuf enum value: CANNOT_UPDATE_CAMPAIGN_BUDGET_TO_EXPLICITLY_SHARED = 9;
     */
    CANNOT_UPDATE_CAMPAIGN_BUDGET_TO_EXPLICITLY_SHARED = 9,
    /**
     * Only explicitly shared campaign budgets can be used with multiple
     * campaigns.
     *
     * @generated from protobuf enum value: CANNOT_USE_IMPLICITLY_SHARED_CAMPAIGN_BUDGET_WITH_MULTIPLE_CAMPAIGNS = 10;
     */
    CANNOT_USE_IMPLICITLY_SHARED_CAMPAIGN_BUDGET_WITH_MULTIPLE_CAMPAIGNS = 10,
    /**
     * A campaign budget with this name already exists.
     *
     * @generated from protobuf enum value: DUPLICATE_NAME = 11;
     */
    DUPLICATE_NAME = 11,
    /**
     * A money amount was not in the expected currency.
     *
     * @generated from protobuf enum value: MONEY_AMOUNT_IN_WRONG_CURRENCY = 12;
     */
    MONEY_AMOUNT_IN_WRONG_CURRENCY = 12,
    /**
     * A money amount was less than the minimum CPC for currency.
     *
     * @generated from protobuf enum value: MONEY_AMOUNT_LESS_THAN_CURRENCY_MINIMUM_CPC = 13;
     */
    MONEY_AMOUNT_LESS_THAN_CURRENCY_MINIMUM_CPC = 13,
    /**
     * A money amount was greater than the maximum allowed.
     *
     * @generated from protobuf enum value: MONEY_AMOUNT_TOO_LARGE = 14;
     */
    MONEY_AMOUNT_TOO_LARGE = 14,
    /**
     * A money amount was negative.
     *
     * @generated from protobuf enum value: NEGATIVE_MONEY_AMOUNT = 15;
     */
    NEGATIVE_MONEY_AMOUNT = 15,
    /**
     * A money amount was not a multiple of a minimum unit.
     *
     * @generated from protobuf enum value: NON_MULTIPLE_OF_MINIMUM_CURRENCY_UNIT = 16;
     */
    NON_MULTIPLE_OF_MINIMUM_CURRENCY_UNIT = 16,
    /**
     * Total budget amount must be unset when BudgetPeriod is DAILY.
     *
     * @generated from protobuf enum value: TOTAL_BUDGET_AMOUNT_MUST_BE_UNSET_FOR_BUDGET_PERIOD_DAILY = 18;
     */
    TOTAL_BUDGET_AMOUNT_MUST_BE_UNSET_FOR_BUDGET_PERIOD_DAILY = 18,
    /**
     * The period of the budget is not allowed.
     *
     * @generated from protobuf enum value: INVALID_PERIOD = 19;
     */
    INVALID_PERIOD = 19
}
// @generated message type with reflection information, may provide speed optimized methods
class CampaignBudgetErrorEnum$Type extends MessageType<CampaignBudgetErrorEnum> {
    constructor() {
        super("google.ads.googleads.v11.errors.CampaignBudgetErrorEnum", []);
    }
    create(value?: PartialMessage<CampaignBudgetErrorEnum>): CampaignBudgetErrorEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CampaignBudgetErrorEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CampaignBudgetErrorEnum): CampaignBudgetErrorEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: CampaignBudgetErrorEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.errors.CampaignBudgetErrorEnum
 */
export const CampaignBudgetErrorEnum = new CampaignBudgetErrorEnum$Type();
