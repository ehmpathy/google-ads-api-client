// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/resources/keyword_plan.proto" (package "google.ads.googleads.v11.resources", syntax proto3)
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
import { DateRange } from "../common/dates";
import { KeywordPlanForecastIntervalEnum_KeywordPlanForecastInterval } from "../enums/keyword_plan_forecast_interval";
// Proto file describing the keyword plan resource.

/**
 * A Keyword Planner plan.
 * Max number of saved keyword plans: 10000.
 * It's possible to remove plans if limit is reached.
 *
 * @generated from protobuf message google.ads.googleads.v11.resources.KeywordPlan
 */
export interface KeywordPlan {
    /**
     * Immutable. The resource name of the Keyword Planner plan.
     * KeywordPlan resource names have the form:
     *
     * `customers/{customer_id}/keywordPlans/{kp_plan_id}`
     *
     * @generated from protobuf field: string resource_name = 1;
     */
    resourceName: string;
    /**
     * Output only. The ID of the keyword plan.
     *
     * @generated from protobuf field: optional int64 id = 5;
     */
    id?: bigint;
    /**
     * The name of the keyword plan.
     *
     * This field is required and should not be empty when creating new keyword
     * plans.
     *
     * @generated from protobuf field: optional string name = 6;
     */
    name?: string;
    /**
     * The date period used for forecasting the plan.
     *
     * @generated from protobuf field: google.ads.googleads.v11.resources.KeywordPlanForecastPeriod forecast_period = 4;
     */
    forecastPeriod?: KeywordPlanForecastPeriod;
}
/**
 * The forecasting period associated with the keyword plan.
 *
 * @generated from protobuf message google.ads.googleads.v11.resources.KeywordPlanForecastPeriod
 */
export interface KeywordPlanForecastPeriod {
    /**
     * @generated from protobuf oneof: interval
     */
    interval: {
        oneofKind: "dateInterval";
        /**
         * A future date range relative to the current date used for forecasting.
         *
         * @generated from protobuf field: google.ads.googleads.v11.enums.KeywordPlanForecastIntervalEnum.KeywordPlanForecastInterval date_interval = 1;
         */
        dateInterval: KeywordPlanForecastIntervalEnum_KeywordPlanForecastInterval;
    } | {
        oneofKind: "dateRange";
        /**
         * The custom date range used for forecasting. It cannot be greater than
         * a year.
         * The start and end dates must be in the future. Otherwise, an error will
         * be returned when the forecasting action is performed.
         * The start and end dates are inclusive.
         *
         * @generated from protobuf field: google.ads.googleads.v11.common.DateRange date_range = 2;
         */
        dateRange: DateRange;
    } | {
        oneofKind: undefined;
    };
}
// @generated message type with reflection information, may provide speed optimized methods
class KeywordPlan$Type extends MessageType<KeywordPlan> {
    constructor() {
        super("google.ads.googleads.v11.resources.KeywordPlan", [
            { no: 1, name: "resource_name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["IMMUTABLE"], "google.api.resource_reference": { type: "googleads.googleapis.com/KeywordPlan" } } },
            { no: 5, name: "id", kind: "scalar", opt: true, T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 6, name: "name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "forecast_period", kind: "message", T: () => KeywordPlanForecastPeriod }
        ], { "google.api.resource": { type: "googleads.googleapis.com/KeywordPlan", pattern: ["customers/{customer_id}/keywordPlans/{keyword_plan_id}"] } });
    }
    create(value?: PartialMessage<KeywordPlan>): KeywordPlan {
        const message = { resourceName: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<KeywordPlan>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: KeywordPlan): KeywordPlan {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string resource_name */ 1:
                    message.resourceName = reader.string();
                    break;
                case /* optional int64 id */ 5:
                    message.id = reader.int64().toBigInt();
                    break;
                case /* optional string name */ 6:
                    message.name = reader.string();
                    break;
                case /* google.ads.googleads.v11.resources.KeywordPlanForecastPeriod forecast_period */ 4:
                    message.forecastPeriod = KeywordPlanForecastPeriod.internalBinaryRead(reader, reader.uint32(), options, message.forecastPeriod);
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
    internalBinaryWrite(message: KeywordPlan, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string resource_name = 1; */
        if (message.resourceName !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.resourceName);
        /* optional int64 id = 5; */
        if (message.id !== undefined)
            writer.tag(5, WireType.Varint).int64(message.id);
        /* optional string name = 6; */
        if (message.name !== undefined)
            writer.tag(6, WireType.LengthDelimited).string(message.name);
        /* google.ads.googleads.v11.resources.KeywordPlanForecastPeriod forecast_period = 4; */
        if (message.forecastPeriod)
            KeywordPlanForecastPeriod.internalBinaryWrite(message.forecastPeriod, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.resources.KeywordPlan
 */
export const KeywordPlan = new KeywordPlan$Type();
// @generated message type with reflection information, may provide speed optimized methods
class KeywordPlanForecastPeriod$Type extends MessageType<KeywordPlanForecastPeriod> {
    constructor() {
        super("google.ads.googleads.v11.resources.KeywordPlanForecastPeriod", [
            { no: 1, name: "date_interval", kind: "enum", oneof: "interval", T: () => ["google.ads.googleads.v11.enums.KeywordPlanForecastIntervalEnum.KeywordPlanForecastInterval", KeywordPlanForecastIntervalEnum_KeywordPlanForecastInterval] },
            { no: 2, name: "date_range", kind: "message", oneof: "interval", T: () => DateRange }
        ]);
    }
    create(value?: PartialMessage<KeywordPlanForecastPeriod>): KeywordPlanForecastPeriod {
        const message = { interval: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<KeywordPlanForecastPeriod>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: KeywordPlanForecastPeriod): KeywordPlanForecastPeriod {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.ads.googleads.v11.enums.KeywordPlanForecastIntervalEnum.KeywordPlanForecastInterval date_interval */ 1:
                    message.interval = {
                        oneofKind: "dateInterval",
                        dateInterval: reader.int32()
                    };
                    break;
                case /* google.ads.googleads.v11.common.DateRange date_range */ 2:
                    message.interval = {
                        oneofKind: "dateRange",
                        dateRange: DateRange.internalBinaryRead(reader, reader.uint32(), options, (message.interval as any).dateRange)
                    };
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
    internalBinaryWrite(message: KeywordPlanForecastPeriod, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* google.ads.googleads.v11.enums.KeywordPlanForecastIntervalEnum.KeywordPlanForecastInterval date_interval = 1; */
        if (message.interval.oneofKind === "dateInterval")
            writer.tag(1, WireType.Varint).int32(message.interval.dateInterval);
        /* google.ads.googleads.v11.common.DateRange date_range = 2; */
        if (message.interval.oneofKind === "dateRange")
            DateRange.internalBinaryWrite(message.interval.dateRange, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.resources.KeywordPlanForecastPeriod
 */
export const KeywordPlanForecastPeriod = new KeywordPlanForecastPeriod$Type();
