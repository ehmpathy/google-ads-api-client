// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/services/audience_insights_service.proto" (package "google.ads.googleads.v11.services", syntax proto3)
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
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { AudienceInsightsService } from "./audience_insights_service";
import type { GenerateAudienceCompositionInsightsResponse } from "./audience_insights_service";
import type { GenerateAudienceCompositionInsightsRequest } from "./audience_insights_service";
import type { ListAudienceInsightsAttributesResponse } from "./audience_insights_service";
import type { ListAudienceInsightsAttributesRequest } from "./audience_insights_service";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { GenerateInsightsFinderReportResponse } from "./audience_insights_service";
import type { GenerateInsightsFinderReportRequest } from "./audience_insights_service";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
// Proto file describing the audience insights service.

/**
 * Audience Insights Service helps users find information about groups of
 * people and how they can be reached with Google Ads.
 *
 * @generated from protobuf service google.ads.googleads.v11.services.AudienceInsightsService
 */
export interface IAudienceInsightsServiceClient {
    /**
     * Creates a saved report that can be viewed in the Insights Finder tool.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [FieldError]()
     *   [HeaderError]()
     *   [InternalError]()
     *   [QuotaError]()
     *   [RangeError]()
     *   [RequestError]()
     *
     * @generated from protobuf rpc: GenerateInsightsFinderReport(google.ads.googleads.v11.services.GenerateInsightsFinderReportRequest) returns (google.ads.googleads.v11.services.GenerateInsightsFinderReportResponse);
     */
    generateInsightsFinderReport(input: GenerateInsightsFinderReportRequest, options?: RpcOptions): UnaryCall<GenerateInsightsFinderReportRequest, GenerateInsightsFinderReportResponse>;
    /**
     * Searches for audience attributes that can be used to generate insights.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [FieldError]()
     *   [HeaderError]()
     *   [InternalError]()
     *   [QuotaError]()
     *   [RangeError]()
     *   [RequestError]()
     *
     * @generated from protobuf rpc: ListAudienceInsightsAttributes(google.ads.googleads.v11.services.ListAudienceInsightsAttributesRequest) returns (google.ads.googleads.v11.services.ListAudienceInsightsAttributesResponse);
     */
    listAudienceInsightsAttributes(input: ListAudienceInsightsAttributesRequest, options?: RpcOptions): UnaryCall<ListAudienceInsightsAttributesRequest, ListAudienceInsightsAttributesResponse>;
    /**
     * Returns a collection of attributes that are represented in an audience of
     * interest, with metrics that compare each attribute's share of the audience
     * with its share of a baseline audience.
     *
     * List of thrown errors:
     *   [AudienceInsightsError]()
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [FieldError]()
     *   [HeaderError]()
     *   [InternalError]()
     *   [QuotaError]()
     *   [RangeError]()
     *   [RequestError]()
     *
     * @generated from protobuf rpc: GenerateAudienceCompositionInsights(google.ads.googleads.v11.services.GenerateAudienceCompositionInsightsRequest) returns (google.ads.googleads.v11.services.GenerateAudienceCompositionInsightsResponse);
     */
    generateAudienceCompositionInsights(input: GenerateAudienceCompositionInsightsRequest, options?: RpcOptions): UnaryCall<GenerateAudienceCompositionInsightsRequest, GenerateAudienceCompositionInsightsResponse>;
}
// Proto file describing the audience insights service.

/**
 * Audience Insights Service helps users find information about groups of
 * people and how they can be reached with Google Ads.
 *
 * @generated from protobuf service google.ads.googleads.v11.services.AudienceInsightsService
 */
export class AudienceInsightsServiceClient implements IAudienceInsightsServiceClient, ServiceInfo {
    typeName = AudienceInsightsService.typeName;
    methods = AudienceInsightsService.methods;
    options = AudienceInsightsService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * Creates a saved report that can be viewed in the Insights Finder tool.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [FieldError]()
     *   [HeaderError]()
     *   [InternalError]()
     *   [QuotaError]()
     *   [RangeError]()
     *   [RequestError]()
     *
     * @generated from protobuf rpc: GenerateInsightsFinderReport(google.ads.googleads.v11.services.GenerateInsightsFinderReportRequest) returns (google.ads.googleads.v11.services.GenerateInsightsFinderReportResponse);
     */
    generateInsightsFinderReport(input: GenerateInsightsFinderReportRequest, options?: RpcOptions): UnaryCall<GenerateInsightsFinderReportRequest, GenerateInsightsFinderReportResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<GenerateInsightsFinderReportRequest, GenerateInsightsFinderReportResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Searches for audience attributes that can be used to generate insights.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [FieldError]()
     *   [HeaderError]()
     *   [InternalError]()
     *   [QuotaError]()
     *   [RangeError]()
     *   [RequestError]()
     *
     * @generated from protobuf rpc: ListAudienceInsightsAttributes(google.ads.googleads.v11.services.ListAudienceInsightsAttributesRequest) returns (google.ads.googleads.v11.services.ListAudienceInsightsAttributesResponse);
     */
    listAudienceInsightsAttributes(input: ListAudienceInsightsAttributesRequest, options?: RpcOptions): UnaryCall<ListAudienceInsightsAttributesRequest, ListAudienceInsightsAttributesResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<ListAudienceInsightsAttributesRequest, ListAudienceInsightsAttributesResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Returns a collection of attributes that are represented in an audience of
     * interest, with metrics that compare each attribute's share of the audience
     * with its share of a baseline audience.
     *
     * List of thrown errors:
     *   [AudienceInsightsError]()
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [FieldError]()
     *   [HeaderError]()
     *   [InternalError]()
     *   [QuotaError]()
     *   [RangeError]()
     *   [RequestError]()
     *
     * @generated from protobuf rpc: GenerateAudienceCompositionInsights(google.ads.googleads.v11.services.GenerateAudienceCompositionInsightsRequest) returns (google.ads.googleads.v11.services.GenerateAudienceCompositionInsightsResponse);
     */
    generateAudienceCompositionInsights(input: GenerateAudienceCompositionInsightsRequest, options?: RpcOptions): UnaryCall<GenerateAudienceCompositionInsightsRequest, GenerateAudienceCompositionInsightsResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<GenerateAudienceCompositionInsightsRequest, GenerateAudienceCompositionInsightsResponse>("unary", this._transport, method, opt, input);
    }
}
