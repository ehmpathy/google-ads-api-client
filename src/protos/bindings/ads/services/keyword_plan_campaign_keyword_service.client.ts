// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/services/keyword_plan_campaign_keyword_service.proto" (package "google.ads.googleads.v11.services", syntax proto3)
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
import { KeywordPlanCampaignKeywordService } from "./keyword_plan_campaign_keyword_service";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { MutateKeywordPlanCampaignKeywordsResponse } from "./keyword_plan_campaign_keyword_service";
import type { MutateKeywordPlanCampaignKeywordsRequest } from "./keyword_plan_campaign_keyword_service";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
// Proto file describing the keyword plan campaign keyword service.

/**
 * Service to manage Keyword Plan campaign keywords. KeywordPlanCampaign is
 * required to add the campaign keywords. Only negative keywords are supported.
 * A maximum of 1000 negative keywords are allowed per plan. This includes both
 * campaign negative keywords and ad group negative keywords.
 *
 * @generated from protobuf service google.ads.googleads.v11.services.KeywordPlanCampaignKeywordService
 */
export interface IKeywordPlanCampaignKeywordServiceClient {
    /**
     * Creates, updates, or removes Keyword Plan campaign keywords. Operation
     * statuses are returned.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [DatabaseError]()
     *   [FieldError]()
     *   [HeaderError]()
     *   [InternalError]()
     *   [KeywordPlanAdGroupKeywordError]()
     *   [KeywordPlanCampaignKeywordError]()
     *   [QuotaError]()
     *   [RequestError]()
     *   [ResourceCountLimitExceededError]()
     *
     * @generated from protobuf rpc: MutateKeywordPlanCampaignKeywords(google.ads.googleads.v11.services.MutateKeywordPlanCampaignKeywordsRequest) returns (google.ads.googleads.v11.services.MutateKeywordPlanCampaignKeywordsResponse);
     */
    mutateKeywordPlanCampaignKeywords(input: MutateKeywordPlanCampaignKeywordsRequest, options?: RpcOptions): UnaryCall<MutateKeywordPlanCampaignKeywordsRequest, MutateKeywordPlanCampaignKeywordsResponse>;
}
// Proto file describing the keyword plan campaign keyword service.

/**
 * Service to manage Keyword Plan campaign keywords. KeywordPlanCampaign is
 * required to add the campaign keywords. Only negative keywords are supported.
 * A maximum of 1000 negative keywords are allowed per plan. This includes both
 * campaign negative keywords and ad group negative keywords.
 *
 * @generated from protobuf service google.ads.googleads.v11.services.KeywordPlanCampaignKeywordService
 */
export class KeywordPlanCampaignKeywordServiceClient implements IKeywordPlanCampaignKeywordServiceClient, ServiceInfo {
    typeName = KeywordPlanCampaignKeywordService.typeName;
    methods = KeywordPlanCampaignKeywordService.methods;
    options = KeywordPlanCampaignKeywordService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * Creates, updates, or removes Keyword Plan campaign keywords. Operation
     * statuses are returned.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [DatabaseError]()
     *   [FieldError]()
     *   [HeaderError]()
     *   [InternalError]()
     *   [KeywordPlanAdGroupKeywordError]()
     *   [KeywordPlanCampaignKeywordError]()
     *   [QuotaError]()
     *   [RequestError]()
     *   [ResourceCountLimitExceededError]()
     *
     * @generated from protobuf rpc: MutateKeywordPlanCampaignKeywords(google.ads.googleads.v11.services.MutateKeywordPlanCampaignKeywordsRequest) returns (google.ads.googleads.v11.services.MutateKeywordPlanCampaignKeywordsResponse);
     */
    mutateKeywordPlanCampaignKeywords(input: MutateKeywordPlanCampaignKeywordsRequest, options?: RpcOptions): UnaryCall<MutateKeywordPlanCampaignKeywordsRequest, MutateKeywordPlanCampaignKeywordsResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<MutateKeywordPlanCampaignKeywordsRequest, MutateKeywordPlanCampaignKeywordsResponse>("unary", this._transport, method, opt, input);
    }
}
