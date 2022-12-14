// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/services/campaign_shared_set_service.proto" (package "google.ads.googleads.v11.services", syntax proto3)
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
import { CampaignSharedSetService } from "./campaign_shared_set_service";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { MutateCampaignSharedSetsResponse } from "./campaign_shared_set_service";
import type { MutateCampaignSharedSetsRequest } from "./campaign_shared_set_service";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
// Proto file describing the Campaign Shared Set service.

/**
 * Service to manage campaign shared sets.
 *
 * @generated from protobuf service google.ads.googleads.v11.services.CampaignSharedSetService
 */
export interface ICampaignSharedSetServiceClient {
    /**
     * Creates or removes campaign shared sets. Operation statuses are returned.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [CampaignSharedSetError]()
     *   [ContextError]()
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
     * @generated from protobuf rpc: MutateCampaignSharedSets(google.ads.googleads.v11.services.MutateCampaignSharedSetsRequest) returns (google.ads.googleads.v11.services.MutateCampaignSharedSetsResponse);
     */
    mutateCampaignSharedSets(input: MutateCampaignSharedSetsRequest, options?: RpcOptions): UnaryCall<MutateCampaignSharedSetsRequest, MutateCampaignSharedSetsResponse>;
}
// Proto file describing the Campaign Shared Set service.

/**
 * Service to manage campaign shared sets.
 *
 * @generated from protobuf service google.ads.googleads.v11.services.CampaignSharedSetService
 */
export class CampaignSharedSetServiceClient implements ICampaignSharedSetServiceClient, ServiceInfo {
    typeName = CampaignSharedSetService.typeName;
    methods = CampaignSharedSetService.methods;
    options = CampaignSharedSetService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * Creates or removes campaign shared sets. Operation statuses are returned.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [CampaignSharedSetError]()
     *   [ContextError]()
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
     * @generated from protobuf rpc: MutateCampaignSharedSets(google.ads.googleads.v11.services.MutateCampaignSharedSetsRequest) returns (google.ads.googleads.v11.services.MutateCampaignSharedSetsResponse);
     */
    mutateCampaignSharedSets(input: MutateCampaignSharedSetsRequest, options?: RpcOptions): UnaryCall<MutateCampaignSharedSetsRequest, MutateCampaignSharedSetsResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<MutateCampaignSharedSetsRequest, MutateCampaignSharedSetsResponse>("unary", this._transport, method, opt, input);
    }
}
