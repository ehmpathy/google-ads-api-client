// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/services/geo_target_constant_service.proto" (package "google.ads.googleads.v11.services", syntax proto3)
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
import { ServiceType } from "@protobuf-ts/runtime-rpc";
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
import { GeoTargetConstant } from "../resources/geo_target_constant";
/**
 * Request message for
 * [GeoTargetConstantService.SuggestGeoTargetConstants][google.ads.googleads.v11.services.GeoTargetConstantService.SuggestGeoTargetConstants].
 *
 * @generated from protobuf message google.ads.googleads.v11.services.SuggestGeoTargetConstantsRequest
 */
export interface SuggestGeoTargetConstantsRequest {
    /**
     * If possible, returned geo targets are translated using this locale. If not,
     * en is used by default. This is also used as a hint for returned geo
     * targets.
     *
     * @generated from protobuf field: optional string locale = 6;
     */
    locale?: string;
    /**
     * Returned geo targets are restricted to this country code.
     *
     * @generated from protobuf field: optional string country_code = 7;
     */
    countryCode?: string;
    /**
     * @generated from protobuf oneof: query
     */
    query: {
        oneofKind: "locationNames";
        /**
         * The location names to search by. At most 25 names can be set.
         *
         * @generated from protobuf field: google.ads.googleads.v11.services.SuggestGeoTargetConstantsRequest.LocationNames location_names = 1;
         */
        locationNames: SuggestGeoTargetConstantsRequest_LocationNames;
    } | {
        oneofKind: "geoTargets";
        /**
         * The geo target constant resource names to filter by.
         *
         * @generated from protobuf field: google.ads.googleads.v11.services.SuggestGeoTargetConstantsRequest.GeoTargets geo_targets = 2;
         */
        geoTargets: SuggestGeoTargetConstantsRequest_GeoTargets;
    } | {
        oneofKind: undefined;
    };
}
/**
 * A list of location names.
 *
 * @generated from protobuf message google.ads.googleads.v11.services.SuggestGeoTargetConstantsRequest.LocationNames
 */
export interface SuggestGeoTargetConstantsRequest_LocationNames {
    /**
     * A list of location names.
     *
     * @generated from protobuf field: repeated string names = 2;
     */
    names: string[];
}
/**
 * A list of geo target constant resource names.
 *
 * @generated from protobuf message google.ads.googleads.v11.services.SuggestGeoTargetConstantsRequest.GeoTargets
 */
export interface SuggestGeoTargetConstantsRequest_GeoTargets {
    /**
     * A list of geo target constant resource names.
     *
     * @generated from protobuf field: repeated string geo_target_constants = 2;
     */
    geoTargetConstants: string[];
}
/**
 * Response message for [GeoTargetConstantService.SuggestGeoTargetConstants][google.ads.googleads.v11.services.GeoTargetConstantService.SuggestGeoTargetConstants].
 *
 * @generated from protobuf message google.ads.googleads.v11.services.SuggestGeoTargetConstantsResponse
 */
export interface SuggestGeoTargetConstantsResponse {
    /**
     * Geo target constant suggestions.
     *
     * @generated from protobuf field: repeated google.ads.googleads.v11.services.GeoTargetConstantSuggestion geo_target_constant_suggestions = 1;
     */
    geoTargetConstantSuggestions: GeoTargetConstantSuggestion[];
}
/**
 * A geo target constant suggestion.
 *
 * @generated from protobuf message google.ads.googleads.v11.services.GeoTargetConstantSuggestion
 */
export interface GeoTargetConstantSuggestion {
    /**
     * The language this GeoTargetConstantSuggestion is currently translated to.
     * It affects the name of geo target fields. For example, if locale=en, then
     * name=Spain. If locale=es, then name=España. The default locale will be
     * returned if no translation exists for the locale in the request.
     *
     * @generated from protobuf field: optional string locale = 6;
     */
    locale?: string;
    /**
     * Approximate user population that will be targeted, rounded to the
     * nearest 100.
     *
     * @generated from protobuf field: optional int64 reach = 7;
     */
    reach?: bigint;
    /**
     * If the request searched by location name, this is the location name that
     * matched the geo target.
     *
     * @generated from protobuf field: optional string search_term = 8;
     */
    searchTerm?: string;
    /**
     * The GeoTargetConstant result.
     *
     * @generated from protobuf field: google.ads.googleads.v11.resources.GeoTargetConstant geo_target_constant = 4;
     */
    geoTargetConstant?: GeoTargetConstant;
    /**
     * The list of parents of the geo target constant.
     *
     * @generated from protobuf field: repeated google.ads.googleads.v11.resources.GeoTargetConstant geo_target_constant_parents = 5;
     */
    geoTargetConstantParents: GeoTargetConstant[];
}
// @generated message type with reflection information, may provide speed optimized methods
class SuggestGeoTargetConstantsRequest$Type extends MessageType<SuggestGeoTargetConstantsRequest> {
    constructor() {
        super("google.ads.googleads.v11.services.SuggestGeoTargetConstantsRequest", [
            { no: 6, name: "locale", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "country_code", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 1, name: "location_names", kind: "message", oneof: "query", T: () => SuggestGeoTargetConstantsRequest_LocationNames },
            { no: 2, name: "geo_targets", kind: "message", oneof: "query", T: () => SuggestGeoTargetConstantsRequest_GeoTargets }
        ]);
    }
    create(value?: PartialMessage<SuggestGeoTargetConstantsRequest>): SuggestGeoTargetConstantsRequest {
        const message = { query: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SuggestGeoTargetConstantsRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SuggestGeoTargetConstantsRequest): SuggestGeoTargetConstantsRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional string locale */ 6:
                    message.locale = reader.string();
                    break;
                case /* optional string country_code */ 7:
                    message.countryCode = reader.string();
                    break;
                case /* google.ads.googleads.v11.services.SuggestGeoTargetConstantsRequest.LocationNames location_names */ 1:
                    message.query = {
                        oneofKind: "locationNames",
                        locationNames: SuggestGeoTargetConstantsRequest_LocationNames.internalBinaryRead(reader, reader.uint32(), options, (message.query as any).locationNames)
                    };
                    break;
                case /* google.ads.googleads.v11.services.SuggestGeoTargetConstantsRequest.GeoTargets geo_targets */ 2:
                    message.query = {
                        oneofKind: "geoTargets",
                        geoTargets: SuggestGeoTargetConstantsRequest_GeoTargets.internalBinaryRead(reader, reader.uint32(), options, (message.query as any).geoTargets)
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
    internalBinaryWrite(message: SuggestGeoTargetConstantsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional string locale = 6; */
        if (message.locale !== undefined)
            writer.tag(6, WireType.LengthDelimited).string(message.locale);
        /* optional string country_code = 7; */
        if (message.countryCode !== undefined)
            writer.tag(7, WireType.LengthDelimited).string(message.countryCode);
        /* google.ads.googleads.v11.services.SuggestGeoTargetConstantsRequest.LocationNames location_names = 1; */
        if (message.query.oneofKind === "locationNames")
            SuggestGeoTargetConstantsRequest_LocationNames.internalBinaryWrite(message.query.locationNames, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* google.ads.googleads.v11.services.SuggestGeoTargetConstantsRequest.GeoTargets geo_targets = 2; */
        if (message.query.oneofKind === "geoTargets")
            SuggestGeoTargetConstantsRequest_GeoTargets.internalBinaryWrite(message.query.geoTargets, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.services.SuggestGeoTargetConstantsRequest
 */
export const SuggestGeoTargetConstantsRequest = new SuggestGeoTargetConstantsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SuggestGeoTargetConstantsRequest_LocationNames$Type extends MessageType<SuggestGeoTargetConstantsRequest_LocationNames> {
    constructor() {
        super("google.ads.googleads.v11.services.SuggestGeoTargetConstantsRequest.LocationNames", [
            { no: 2, name: "names", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<SuggestGeoTargetConstantsRequest_LocationNames>): SuggestGeoTargetConstantsRequest_LocationNames {
        const message = { names: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SuggestGeoTargetConstantsRequest_LocationNames>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SuggestGeoTargetConstantsRequest_LocationNames): SuggestGeoTargetConstantsRequest_LocationNames {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated string names */ 2:
                    message.names.push(reader.string());
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
    internalBinaryWrite(message: SuggestGeoTargetConstantsRequest_LocationNames, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated string names = 2; */
        for (let i = 0; i < message.names.length; i++)
            writer.tag(2, WireType.LengthDelimited).string(message.names[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.services.SuggestGeoTargetConstantsRequest.LocationNames
 */
export const SuggestGeoTargetConstantsRequest_LocationNames = new SuggestGeoTargetConstantsRequest_LocationNames$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SuggestGeoTargetConstantsRequest_GeoTargets$Type extends MessageType<SuggestGeoTargetConstantsRequest_GeoTargets> {
    constructor() {
        super("google.ads.googleads.v11.services.SuggestGeoTargetConstantsRequest.GeoTargets", [
            { no: 2, name: "geo_target_constants", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<SuggestGeoTargetConstantsRequest_GeoTargets>): SuggestGeoTargetConstantsRequest_GeoTargets {
        const message = { geoTargetConstants: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SuggestGeoTargetConstantsRequest_GeoTargets>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SuggestGeoTargetConstantsRequest_GeoTargets): SuggestGeoTargetConstantsRequest_GeoTargets {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated string geo_target_constants */ 2:
                    message.geoTargetConstants.push(reader.string());
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
    internalBinaryWrite(message: SuggestGeoTargetConstantsRequest_GeoTargets, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated string geo_target_constants = 2; */
        for (let i = 0; i < message.geoTargetConstants.length; i++)
            writer.tag(2, WireType.LengthDelimited).string(message.geoTargetConstants[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.services.SuggestGeoTargetConstantsRequest.GeoTargets
 */
export const SuggestGeoTargetConstantsRequest_GeoTargets = new SuggestGeoTargetConstantsRequest_GeoTargets$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SuggestGeoTargetConstantsResponse$Type extends MessageType<SuggestGeoTargetConstantsResponse> {
    constructor() {
        super("google.ads.googleads.v11.services.SuggestGeoTargetConstantsResponse", [
            { no: 1, name: "geo_target_constant_suggestions", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GeoTargetConstantSuggestion }
        ]);
    }
    create(value?: PartialMessage<SuggestGeoTargetConstantsResponse>): SuggestGeoTargetConstantsResponse {
        const message = { geoTargetConstantSuggestions: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SuggestGeoTargetConstantsResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SuggestGeoTargetConstantsResponse): SuggestGeoTargetConstantsResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated google.ads.googleads.v11.services.GeoTargetConstantSuggestion geo_target_constant_suggestions */ 1:
                    message.geoTargetConstantSuggestions.push(GeoTargetConstantSuggestion.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: SuggestGeoTargetConstantsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated google.ads.googleads.v11.services.GeoTargetConstantSuggestion geo_target_constant_suggestions = 1; */
        for (let i = 0; i < message.geoTargetConstantSuggestions.length; i++)
            GeoTargetConstantSuggestion.internalBinaryWrite(message.geoTargetConstantSuggestions[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.services.SuggestGeoTargetConstantsResponse
 */
export const SuggestGeoTargetConstantsResponse = new SuggestGeoTargetConstantsResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GeoTargetConstantSuggestion$Type extends MessageType<GeoTargetConstantSuggestion> {
    constructor() {
        super("google.ads.googleads.v11.services.GeoTargetConstantSuggestion", [
            { no: 6, name: "locale", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "reach", kind: "scalar", opt: true, T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 8, name: "search_term", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "geo_target_constant", kind: "message", T: () => GeoTargetConstant },
            { no: 5, name: "geo_target_constant_parents", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GeoTargetConstant }
        ]);
    }
    create(value?: PartialMessage<GeoTargetConstantSuggestion>): GeoTargetConstantSuggestion {
        const message = { geoTargetConstantParents: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GeoTargetConstantSuggestion>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GeoTargetConstantSuggestion): GeoTargetConstantSuggestion {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional string locale */ 6:
                    message.locale = reader.string();
                    break;
                case /* optional int64 reach */ 7:
                    message.reach = reader.int64().toBigInt();
                    break;
                case /* optional string search_term */ 8:
                    message.searchTerm = reader.string();
                    break;
                case /* google.ads.googleads.v11.resources.GeoTargetConstant geo_target_constant */ 4:
                    message.geoTargetConstant = GeoTargetConstant.internalBinaryRead(reader, reader.uint32(), options, message.geoTargetConstant);
                    break;
                case /* repeated google.ads.googleads.v11.resources.GeoTargetConstant geo_target_constant_parents */ 5:
                    message.geoTargetConstantParents.push(GeoTargetConstant.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: GeoTargetConstantSuggestion, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional string locale = 6; */
        if (message.locale !== undefined)
            writer.tag(6, WireType.LengthDelimited).string(message.locale);
        /* optional int64 reach = 7; */
        if (message.reach !== undefined)
            writer.tag(7, WireType.Varint).int64(message.reach);
        /* optional string search_term = 8; */
        if (message.searchTerm !== undefined)
            writer.tag(8, WireType.LengthDelimited).string(message.searchTerm);
        /* google.ads.googleads.v11.resources.GeoTargetConstant geo_target_constant = 4; */
        if (message.geoTargetConstant)
            GeoTargetConstant.internalBinaryWrite(message.geoTargetConstant, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* repeated google.ads.googleads.v11.resources.GeoTargetConstant geo_target_constant_parents = 5; */
        for (let i = 0; i < message.geoTargetConstantParents.length; i++)
            GeoTargetConstant.internalBinaryWrite(message.geoTargetConstantParents[i], writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.services.GeoTargetConstantSuggestion
 */
export const GeoTargetConstantSuggestion = new GeoTargetConstantSuggestion$Type();
/**
 * @generated ServiceType for protobuf service google.ads.googleads.v11.services.GeoTargetConstantService
 */
export const GeoTargetConstantService = new ServiceType("google.ads.googleads.v11.services.GeoTargetConstantService", [
    { name: "SuggestGeoTargetConstants", options: { "google.api.http": { post: "/v11/geoTargetConstants:suggest", body: "*" } }, I: SuggestGeoTargetConstantsRequest, O: SuggestGeoTargetConstantsResponse }
], { "google.api.default_host": "googleads.googleapis.com", "google.api.oauth_scopes": "https://www.googleapis.com/auth/adwords" });
