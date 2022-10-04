// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/errors/conversion_value_rule_set_error.proto" (package "google.ads.googleads.v11.errors", syntax proto3)
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
// Proto file describing conversion value rule set errors.

/**
 * Container for enum describing possible conversion value rule set errors.
 *
 * @generated from protobuf message google.ads.googleads.v11.errors.ConversionValueRuleSetErrorEnum
 */
export interface ConversionValueRuleSetErrorEnum {
}
/**
 * Enum describing possible conversion value rule set errors.
 *
 * @generated from protobuf enum google.ads.googleads.v11.errors.ConversionValueRuleSetErrorEnum.ConversionValueRuleSetError
 */
export enum ConversionValueRuleSetErrorEnum_ConversionValueRuleSetError {
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
     * Two value rules in this value rule set contain conflicting conditions.
     *
     * @generated from protobuf enum value: CONFLICTING_VALUE_RULE_CONDITIONS = 2;
     */
    CONFLICTING_VALUE_RULE_CONDITIONS = 2,
    /**
     * This value rule set includes a value rule that cannot be found, has been
     * permanently removed or belongs to a different customer.
     *
     * @generated from protobuf enum value: INVALID_VALUE_RULE = 3;
     */
    INVALID_VALUE_RULE = 3,
    /**
     * An error that's thrown when a mutate operation is trying to
     * replace/remove some existing elements in the dimensions field. In other
     * words, ADD op is always fine and UPDATE op is fine if it's only appending
     * new elements into dimensions list.
     *
     * @generated from protobuf enum value: DIMENSIONS_UPDATE_ONLY_ALLOW_APPEND = 4;
     */
    DIMENSIONS_UPDATE_ONLY_ALLOW_APPEND = 4,
    /**
     * An error that's thrown when a mutate is adding new value rule(s) into a
     * value rule set and the added value rule(s) include conditions that are
     * not specified in the dimensions of the value rule set.
     *
     * @generated from protobuf enum value: CONDITION_TYPE_NOT_ALLOWED = 5;
     */
    CONDITION_TYPE_NOT_ALLOWED = 5,
    /**
     * The dimensions field contains duplicate elements.
     *
     * @generated from protobuf enum value: DUPLICATE_DIMENSIONS = 6;
     */
    DUPLICATE_DIMENSIONS = 6,
    /**
     * This value rule set is attached to an invalid campaign id. Either a
     * campaign with this campaign id doesn't exist or it belongs to a different
     * customer.
     *
     * @generated from protobuf enum value: INVALID_CAMPAIGN_ID = 7;
     */
    INVALID_CAMPAIGN_ID = 7,
    /**
     * When a mutate request tries to pause a value rule set, the enabled
     * value rules in this set must be paused in the same command, or this error
     * will be thrown.
     *
     * @generated from protobuf enum value: CANNOT_PAUSE_UNLESS_ALL_VALUE_RULES_ARE_PAUSED = 8;
     */
    CANNOT_PAUSE_UNLESS_ALL_VALUE_RULES_ARE_PAUSED = 8,
    /**
     * When a mutate request tries to pause all the value rules in a value rule
     * set, the value rule set must be paused, or this error will be thrown.
     *
     * @generated from protobuf enum value: SHOULD_PAUSE_WHEN_ALL_VALUE_RULES_ARE_PAUSED = 9;
     */
    SHOULD_PAUSE_WHEN_ALL_VALUE_RULES_ARE_PAUSED = 9,
    /**
     * This value rule set is attached to a campaign that does not support value
     * rules. Currently, campaign level value rule sets can only be created on
     * Search, or Display campaigns.
     *
     * @generated from protobuf enum value: VALUE_RULES_NOT_SUPPORTED_FOR_CAMPAIGN_TYPE = 10;
     */
    VALUE_RULES_NOT_SUPPORTED_FOR_CAMPAIGN_TYPE = 10,
    /**
     * To add a value rule set that applies on Store Visits/Store Sales
     * conversion action categories, the customer must have valid Store Visits/
     * Store Sales conversion actions.
     *
     * @generated from protobuf enum value: INELIGIBLE_CONVERSION_ACTION_CATEGORIES = 11;
     */
    INELIGIBLE_CONVERSION_ACTION_CATEGORIES = 11,
    /**
     * If NO_CONDITION is used as a dimension of a value rule set, it must be
     * the only dimension.
     *
     * @generated from protobuf enum value: DIMENSION_NO_CONDITION_USED_WITH_OTHER_DIMENSIONS = 12;
     */
    DIMENSION_NO_CONDITION_USED_WITH_OTHER_DIMENSIONS = 12,
    /**
     * Dimension NO_CONDITION can only be used by Store Visits/Store Sales value
     * rule set.
     *
     * @generated from protobuf enum value: DIMENSION_NO_CONDITION_NOT_ALLOWED = 13;
     */
    DIMENSION_NO_CONDITION_NOT_ALLOWED = 13,
    /**
     * Value rule sets defined on the specified conversion action categories are
     * not supported. The list of conversion action categories must be an empty
     * list, only STORE_VISIT, or only STORE_SALE.
     *
     * @generated from protobuf enum value: UNSUPPORTED_CONVERSION_ACTION_CATEGORIES = 14;
     */
    UNSUPPORTED_CONVERSION_ACTION_CATEGORIES = 14
}
// @generated message type with reflection information, may provide speed optimized methods
class ConversionValueRuleSetErrorEnum$Type extends MessageType<ConversionValueRuleSetErrorEnum> {
    constructor() {
        super("google.ads.googleads.v11.errors.ConversionValueRuleSetErrorEnum", []);
    }
    create(value?: PartialMessage<ConversionValueRuleSetErrorEnum>): ConversionValueRuleSetErrorEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ConversionValueRuleSetErrorEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ConversionValueRuleSetErrorEnum): ConversionValueRuleSetErrorEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: ConversionValueRuleSetErrorEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.errors.ConversionValueRuleSetErrorEnum
 */
export const ConversionValueRuleSetErrorEnum = new ConversionValueRuleSetErrorEnum$Type();