// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/services/keyword_plan_campaign_service.proto" (package "google.ads.googleads.v11.services", syntax proto3)
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
import { KeywordPlanCampaignService } from "./keyword_plan_campaign_service";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { MutateKeywordPlanCampaignsResponse } from "./keyword_plan_campaign_service";
import type { MutateKeywordPlanCampaignsRequest } from "./keyword_plan_campaign_service";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
// Proto file describing the keyword plan campaign service.

/**
 * Service to manage Keyword Plan campaigns.
 *
 * @generated from protobuf service google.ads.googleads.v11.services.KeywordPlanCampaignService
 */
export interface IKeywordPlanCampaignServiceClient {
    /**
     * Creates, updates, or removes Keyword Plan campaigns. Operation statuses are
     * returned.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [DatabaseError]()
     *   [FieldError]()
     *   [FieldMaskError]()
     *   [HeaderError]()
     *   [InternalError]()
     *   [KeywordPlanCampaignError]()
     *   [KeywordPlanError]()
     *   [ListOperationError]()
     *   [MutateError]()
     *   [QuotaError]()
     *   [RangeError]()
     *   [RequestError]()
     *   [ResourceCountLimitExceededError]()
     *
     * @generated from protobuf rpc: MutateKeywordPlanCampaigns(google.ads.googleads.v11.services.MutateKeywordPlanCampaignsRequest) returns (google.ads.googleads.v11.services.MutateKeywordPlanCampaignsResponse);
     */
    mutateKeywordPlanCampaigns(input: MutateKeywordPlanCampaignsRequest, options?: RpcOptions): UnaryCall<MutateKeywordPlanCampaignsRequest, MutateKeywordPlanCampaignsResponse>;
}
// Proto file describing the keyword plan campaign service.

/**
 * Service to manage Keyword Plan campaigns.
 *
 * @generated from protobuf service google.ads.googleads.v11.services.KeywordPlanCampaignService
 */
export class KeywordPlanCampaignServiceClient implements IKeywordPlanCampaignServiceClient, ServiceInfo {
    typeName = KeywordPlanCampaignService.typeName;
    methods = KeywordPlanCampaignService.methods;
    options = KeywordPlanCampaignService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * Creates, updates, or removes Keyword Plan campaigns. Operation statuses are
     * returned.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [DatabaseError]()
     *   [FieldError]()
     *   [FieldMaskError]()
     *   [HeaderError]()
     *   [InternalError]()
     *   [KeywordPlanCampaignError]()
     *   [KeywordPlanError]()
     *   [ListOperationError]()
     *   [MutateError]()
     *   [QuotaError]()
     *   [RangeError]()
     *   [RequestError]()
     *   [ResourceCountLimitExceededError]()
     *
     * @generated from protobuf rpc: MutateKeywordPlanCampaigns(google.ads.googleads.v11.services.MutateKeywordPlanCampaignsRequest) returns (google.ads.googleads.v11.services.MutateKeywordPlanCampaignsResponse);
     */
    mutateKeywordPlanCampaigns(input: MutateKeywordPlanCampaignsRequest, options?: RpcOptions): UnaryCall<MutateKeywordPlanCampaignsRequest, MutateKeywordPlanCampaignsResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<MutateKeywordPlanCampaignsRequest, MutateKeywordPlanCampaignsResponse>("unary", this._transport, method, opt, input);
    }
}