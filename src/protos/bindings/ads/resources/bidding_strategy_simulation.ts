// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/resources/bidding_strategy_simulation.proto" (package "google.ads.googleads.v11.resources", syntax proto3)
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
import { TargetRoasSimulationPointList } from "../common/simulation";
import { TargetCpaSimulationPointList } from "../common/simulation";
import { SimulationModificationMethodEnum_SimulationModificationMethod } from "../enums/simulation_modification_method";
import { SimulationTypeEnum_SimulationType } from "../enums/simulation_type";
// Proto file describing the bidding strategy simulation resource.

/**
 * A bidding strategy simulation. Supported combinations of simulation type
 * and simulation modification method are detailed below respectively.
 *
 * 1. TARGET_CPA - UNIFORM
 * 2. TARGET_ROAS - UNIFORM
 *
 * @generated from protobuf message google.ads.googleads.v11.resources.BiddingStrategySimulation
 */
export interface BiddingStrategySimulation {
    /**
     * Output only. The resource name of the bidding strategy simulation.
     * Bidding strategy simulation resource names have the form:
     *
     * `customers/{customer_id}/biddingStrategySimulations/{bidding_strategy_id}~{type}~{modification_method}~{start_date}~{end_date}`
     *
     * @generated from protobuf field: string resource_name = 1;
     */
    resourceName: string;
    /**
     * Output only. Bidding strategy shared set id of the simulation.
     *
     * @generated from protobuf field: int64 bidding_strategy_id = 2;
     */
    biddingStrategyId: bigint;
    /**
     * Output only. The field that the simulation modifies.
     *
     * @generated from protobuf field: google.ads.googleads.v11.enums.SimulationTypeEnum.SimulationType type = 3;
     */
    type: SimulationTypeEnum_SimulationType;
    /**
     * Output only. How the simulation modifies the field.
     *
     * @generated from protobuf field: google.ads.googleads.v11.enums.SimulationModificationMethodEnum.SimulationModificationMethod modification_method = 4;
     */
    modificationMethod: SimulationModificationMethodEnum_SimulationModificationMethod;
    /**
     * Output only. First day on which the simulation is based, in YYYY-MM-DD format.
     *
     * @generated from protobuf field: string start_date = 5;
     */
    startDate: string;
    /**
     * Output only. Last day on which the simulation is based, in YYYY-MM-DD format
     *
     * @generated from protobuf field: string end_date = 6;
     */
    endDate: string;
    /**
     * @generated from protobuf oneof: point_list
     */
    pointList: {
        oneofKind: "targetCpaPointList";
        /**
         * Output only. Simulation points if the simulation type is TARGET_CPA.
         *
         * @generated from protobuf field: google.ads.googleads.v11.common.TargetCpaSimulationPointList target_cpa_point_list = 7;
         */
        targetCpaPointList: TargetCpaSimulationPointList;
    } | {
        oneofKind: "targetRoasPointList";
        /**
         * Output only. Simulation points if the simulation type is TARGET_ROAS.
         *
         * @generated from protobuf field: google.ads.googleads.v11.common.TargetRoasSimulationPointList target_roas_point_list = 8;
         */
        targetRoasPointList: TargetRoasSimulationPointList;
    } | {
        oneofKind: undefined;
    };
}
// @generated message type with reflection information, may provide speed optimized methods
class BiddingStrategySimulation$Type extends MessageType<BiddingStrategySimulation> {
    constructor() {
        super("google.ads.googleads.v11.resources.BiddingStrategySimulation", [
            { no: 1, name: "resource_name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"], "google.api.resource_reference": { type: "googleads.googleapis.com/BiddingStrategySimulation" } } },
            { no: 2, name: "bidding_strategy_id", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 3, name: "type", kind: "enum", T: () => ["google.ads.googleads.v11.enums.SimulationTypeEnum.SimulationType", SimulationTypeEnum_SimulationType], options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 4, name: "modification_method", kind: "enum", T: () => ["google.ads.googleads.v11.enums.SimulationModificationMethodEnum.SimulationModificationMethod", SimulationModificationMethodEnum_SimulationModificationMethod], options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 5, name: "start_date", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 6, name: "end_date", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 7, name: "target_cpa_point_list", kind: "message", oneof: "pointList", T: () => TargetCpaSimulationPointList, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 8, name: "target_roas_point_list", kind: "message", oneof: "pointList", T: () => TargetRoasSimulationPointList, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } }
        ], { "google.api.resource": { type: "googleads.googleapis.com/BiddingStrategySimulation", pattern: ["customers/{customer_id}/biddingStrategySimulations/{bidding_strategy_id}~{type}~{modification_method}~{start_date}~{end_date}"] } });
    }
    create(value?: PartialMessage<BiddingStrategySimulation>): BiddingStrategySimulation {
        const message = { resourceName: "", biddingStrategyId: 0n, type: 0, modificationMethod: 0, startDate: "", endDate: "", pointList: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<BiddingStrategySimulation>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BiddingStrategySimulation): BiddingStrategySimulation {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string resource_name */ 1:
                    message.resourceName = reader.string();
                    break;
                case /* int64 bidding_strategy_id */ 2:
                    message.biddingStrategyId = reader.int64().toBigInt();
                    break;
                case /* google.ads.googleads.v11.enums.SimulationTypeEnum.SimulationType type */ 3:
                    message.type = reader.int32();
                    break;
                case /* google.ads.googleads.v11.enums.SimulationModificationMethodEnum.SimulationModificationMethod modification_method */ 4:
                    message.modificationMethod = reader.int32();
                    break;
                case /* string start_date */ 5:
                    message.startDate = reader.string();
                    break;
                case /* string end_date */ 6:
                    message.endDate = reader.string();
                    break;
                case /* google.ads.googleads.v11.common.TargetCpaSimulationPointList target_cpa_point_list */ 7:
                    message.pointList = {
                        oneofKind: "targetCpaPointList",
                        targetCpaPointList: TargetCpaSimulationPointList.internalBinaryRead(reader, reader.uint32(), options, (message.pointList as any).targetCpaPointList)
                    };
                    break;
                case /* google.ads.googleads.v11.common.TargetRoasSimulationPointList target_roas_point_list */ 8:
                    message.pointList = {
                        oneofKind: "targetRoasPointList",
                        targetRoasPointList: TargetRoasSimulationPointList.internalBinaryRead(reader, reader.uint32(), options, (message.pointList as any).targetRoasPointList)
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
    internalBinaryWrite(message: BiddingStrategySimulation, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string resource_name = 1; */
        if (message.resourceName !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.resourceName);
        /* int64 bidding_strategy_id = 2; */
        if (message.biddingStrategyId !== 0n)
            writer.tag(2, WireType.Varint).int64(message.biddingStrategyId);
        /* google.ads.googleads.v11.enums.SimulationTypeEnum.SimulationType type = 3; */
        if (message.type !== 0)
            writer.tag(3, WireType.Varint).int32(message.type);
        /* google.ads.googleads.v11.enums.SimulationModificationMethodEnum.SimulationModificationMethod modification_method = 4; */
        if (message.modificationMethod !== 0)
            writer.tag(4, WireType.Varint).int32(message.modificationMethod);
        /* string start_date = 5; */
        if (message.startDate !== "")
            writer.tag(5, WireType.LengthDelimited).string(message.startDate);
        /* string end_date = 6; */
        if (message.endDate !== "")
            writer.tag(6, WireType.LengthDelimited).string(message.endDate);
        /* google.ads.googleads.v11.common.TargetCpaSimulationPointList target_cpa_point_list = 7; */
        if (message.pointList.oneofKind === "targetCpaPointList")
            TargetCpaSimulationPointList.internalBinaryWrite(message.pointList.targetCpaPointList, writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        /* google.ads.googleads.v11.common.TargetRoasSimulationPointList target_roas_point_list = 8; */
        if (message.pointList.oneofKind === "targetRoasPointList")
            TargetRoasSimulationPointList.internalBinaryWrite(message.pointList.targetRoasPointList, writer.tag(8, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.resources.BiddingStrategySimulation
 */
export const BiddingStrategySimulation = new BiddingStrategySimulation$Type();