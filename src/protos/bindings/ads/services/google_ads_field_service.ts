// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/services/google_ads_field_service.proto" (package "google.ads.googleads.v11.services", syntax proto3)
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
import { GoogleAdsField } from "../resources/google_ads_field";
/**
 * Request message for [GoogleAdsFieldService.GetGoogleAdsField][google.ads.googleads.v11.services.GoogleAdsFieldService.GetGoogleAdsField].
 *
 * @generated from protobuf message google.ads.googleads.v11.services.GetGoogleAdsFieldRequest
 */
export interface GetGoogleAdsFieldRequest {
    /**
     * Required. The resource name of the field to get.
     *
     * @generated from protobuf field: string resource_name = 1;
     */
    resourceName: string;
}
/**
 * Request message for [GoogleAdsFieldService.SearchGoogleAdsFields][google.ads.googleads.v11.services.GoogleAdsFieldService.SearchGoogleAdsFields].
 *
 * @generated from protobuf message google.ads.googleads.v11.services.SearchGoogleAdsFieldsRequest
 */
export interface SearchGoogleAdsFieldsRequest {
    /**
     * Required. The query string.
     *
     * @generated from protobuf field: string query = 1;
     */
    query: string;
    /**
     * Token of the page to retrieve. If not specified, the first page of
     * results will be returned. Use the value obtained from `next_page_token`
     * in the previous response in order to request the next page of results.
     *
     * @generated from protobuf field: string page_token = 2;
     */
    pageToken: string;
    /**
     * Number of elements to retrieve in a single page.
     * When too large a page is requested, the server may decide to further
     * limit the number of returned resources.
     *
     * @generated from protobuf field: int32 page_size = 3;
     */
    pageSize: number;
}
/**
 * Response message for [GoogleAdsFieldService.SearchGoogleAdsFields][google.ads.googleads.v11.services.GoogleAdsFieldService.SearchGoogleAdsFields].
 *
 * @generated from protobuf message google.ads.googleads.v11.services.SearchGoogleAdsFieldsResponse
 */
export interface SearchGoogleAdsFieldsResponse {
    /**
     * The list of fields that matched the query.
     *
     * @generated from protobuf field: repeated google.ads.googleads.v11.resources.GoogleAdsField results = 1;
     */
    results: GoogleAdsField[];
    /**
     * Pagination token used to retrieve the next page of results. Pass the
     * content of this string as the `page_token` attribute of the next request.
     * `next_page_token` is not returned for the last page.
     *
     * @generated from protobuf field: string next_page_token = 2;
     */
    nextPageToken: string;
    /**
     * Total number of results that match the query ignoring the LIMIT clause.
     *
     * @generated from protobuf field: int64 total_results_count = 3;
     */
    totalResultsCount: bigint;
}
// @generated message type with reflection information, may provide speed optimized methods
class GetGoogleAdsFieldRequest$Type extends MessageType<GetGoogleAdsFieldRequest> {
    constructor() {
        super("google.ads.googleads.v11.services.GetGoogleAdsFieldRequest", [
            { no: 1, name: "resource_name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["REQUIRED"], "google.api.resource_reference": { type: "googleads.googleapis.com/GoogleAdsField" } } }
        ]);
    }
    create(value?: PartialMessage<GetGoogleAdsFieldRequest>): GetGoogleAdsFieldRequest {
        const message = { resourceName: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetGoogleAdsFieldRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetGoogleAdsFieldRequest): GetGoogleAdsFieldRequest {
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
    internalBinaryWrite(message: GetGoogleAdsFieldRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
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
 * @generated MessageType for protobuf message google.ads.googleads.v11.services.GetGoogleAdsFieldRequest
 */
export const GetGoogleAdsFieldRequest = new GetGoogleAdsFieldRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchGoogleAdsFieldsRequest$Type extends MessageType<SearchGoogleAdsFieldsRequest> {
    constructor() {
        super("google.ads.googleads.v11.services.SearchGoogleAdsFieldsRequest", [
            { no: 1, name: "query", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["REQUIRED"] } },
            { no: 2, name: "page_token", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "page_size", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<SearchGoogleAdsFieldsRequest>): SearchGoogleAdsFieldsRequest {
        const message = { query: "", pageToken: "", pageSize: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SearchGoogleAdsFieldsRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SearchGoogleAdsFieldsRequest): SearchGoogleAdsFieldsRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string query */ 1:
                    message.query = reader.string();
                    break;
                case /* string page_token */ 2:
                    message.pageToken = reader.string();
                    break;
                case /* int32 page_size */ 3:
                    message.pageSize = reader.int32();
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
    internalBinaryWrite(message: SearchGoogleAdsFieldsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string query = 1; */
        if (message.query !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.query);
        /* string page_token = 2; */
        if (message.pageToken !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.pageToken);
        /* int32 page_size = 3; */
        if (message.pageSize !== 0)
            writer.tag(3, WireType.Varint).int32(message.pageSize);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.services.SearchGoogleAdsFieldsRequest
 */
export const SearchGoogleAdsFieldsRequest = new SearchGoogleAdsFieldsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchGoogleAdsFieldsResponse$Type extends MessageType<SearchGoogleAdsFieldsResponse> {
    constructor() {
        super("google.ads.googleads.v11.services.SearchGoogleAdsFieldsResponse", [
            { no: 1, name: "results", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GoogleAdsField },
            { no: 2, name: "next_page_token", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "total_results_count", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<SearchGoogleAdsFieldsResponse>): SearchGoogleAdsFieldsResponse {
        const message = { results: [], nextPageToken: "", totalResultsCount: 0n };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SearchGoogleAdsFieldsResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SearchGoogleAdsFieldsResponse): SearchGoogleAdsFieldsResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated google.ads.googleads.v11.resources.GoogleAdsField results */ 1:
                    message.results.push(GoogleAdsField.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* string next_page_token */ 2:
                    message.nextPageToken = reader.string();
                    break;
                case /* int64 total_results_count */ 3:
                    message.totalResultsCount = reader.int64().toBigInt();
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
    internalBinaryWrite(message: SearchGoogleAdsFieldsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated google.ads.googleads.v11.resources.GoogleAdsField results = 1; */
        for (let i = 0; i < message.results.length; i++)
            GoogleAdsField.internalBinaryWrite(message.results[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* string next_page_token = 2; */
        if (message.nextPageToken !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.nextPageToken);
        /* int64 total_results_count = 3; */
        if (message.totalResultsCount !== 0n)
            writer.tag(3, WireType.Varint).int64(message.totalResultsCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.services.SearchGoogleAdsFieldsResponse
 */
export const SearchGoogleAdsFieldsResponse = new SearchGoogleAdsFieldsResponse$Type();
/**
 * @generated ServiceType for protobuf service google.ads.googleads.v11.services.GoogleAdsFieldService
 */
export const GoogleAdsFieldService = new ServiceType("google.ads.googleads.v11.services.GoogleAdsFieldService", [
    { name: "GetGoogleAdsField", options: { "google.api.http": { get: "/v11/{resource_name=googleAdsFields/*}" }, "google.api.method_signature": ["resource_name"] }, I: GetGoogleAdsFieldRequest, O: GoogleAdsField },
    { name: "SearchGoogleAdsFields", options: { "google.api.http": { post: "/v11/googleAdsFields:search", body: "*" }, "google.api.method_signature": ["query"] }, I: SearchGoogleAdsFieldsRequest, O: SearchGoogleAdsFieldsResponse }
], { "google.api.default_host": "googleads.googleapis.com", "google.api.oauth_scopes": "https://www.googleapis.com/auth/adwords" });
