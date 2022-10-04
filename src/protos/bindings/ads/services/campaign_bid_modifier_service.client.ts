// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/services/campaign_bid_modifier_service.proto" (package "google.ads.googleads.v11.services", syntax proto3)
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
import { CampaignBidModifierService } from "./campaign_bid_modifier_service";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { MutateCampaignBidModifiersResponse } from "./campaign_bid_modifier_service";
import type { MutateCampaignBidModifiersRequest } from "./campaign_bid_modifier_service";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
// Proto file describing the Campaign Bid Modifier service.

/**
 * Service to manage campaign bid modifiers.
 *
 * @generated from protobuf service google.ads.googleads.v11.services.CampaignBidModifierService
 */
export interface ICampaignBidModifierServiceClient {
    /**
     * Creates, updates, or removes campaign bid modifiers.
     * Operation statuses are returned.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [ContextError]()
     *   [CriterionError]()
     *   [DatabaseError]()
     *   [DateError]()
     *   [DistinctError]()
     *   [FieldError]()
     *   [HeaderError]()
     *   [IdError]()
     *   [InternalError]()
     *   [MutateError]()
     *   [NewResourceCreationError]()
     *   [NotEmptyError]()
     *   [NullError]()
     *   [OperatorError]()
     *   [QuotaError]()
     *   [RangeError]()
     *   [RequestError]()
     *   [SizeLimitError]()
     *   [StringFormatError]()
     *   [StringLengthError]()
     *
     * @generated from protobuf rpc: MutateCampaignBidModifiers(google.ads.googleads.v11.services.MutateCampaignBidModifiersRequest) returns (google.ads.googleads.v11.services.MutateCampaignBidModifiersResponse);
     */
    mutateCampaignBidModifiers(input: MutateCampaignBidModifiersRequest, options?: RpcOptions): UnaryCall<MutateCampaignBidModifiersRequest, MutateCampaignBidModifiersResponse>;
}
// Proto file describing the Campaign Bid Modifier service.

/**
 * Service to manage campaign bid modifiers.
 *
 * @generated from protobuf service google.ads.googleads.v11.services.CampaignBidModifierService
 */
export class CampaignBidModifierServiceClient implements ICampaignBidModifierServiceClient, ServiceInfo {
    typeName = CampaignBidModifierService.typeName;
    methods = CampaignBidModifierService.methods;
    options = CampaignBidModifierService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * Creates, updates, or removes campaign bid modifiers.
     * Operation statuses are returned.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [ContextError]()
     *   [CriterionError]()
     *   [DatabaseError]()
     *   [DateError]()
     *   [DistinctError]()
     *   [FieldError]()
     *   [HeaderError]()
     *   [IdError]()
     *   [InternalError]()
     *   [MutateError]()
     *   [NewResourceCreationError]()
     *   [NotEmptyError]()
     *   [NullError]()
     *   [OperatorError]()
     *   [QuotaError]()
     *   [RangeError]()
     *   [RequestError]()
     *   [SizeLimitError]()
     *   [StringFormatError]()
     *   [StringLengthError]()
     *
     * @generated from protobuf rpc: MutateCampaignBidModifiers(google.ads.googleads.v11.services.MutateCampaignBidModifiersRequest) returns (google.ads.googleads.v11.services.MutateCampaignBidModifiersResponse);
     */
    mutateCampaignBidModifiers(input: MutateCampaignBidModifiersRequest, options?: RpcOptions): UnaryCall<MutateCampaignBidModifiersRequest, MutateCampaignBidModifiersResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<MutateCampaignBidModifiersRequest, MutateCampaignBidModifiersResponse>("unary", this._transport, method, opt, input);
    }
}