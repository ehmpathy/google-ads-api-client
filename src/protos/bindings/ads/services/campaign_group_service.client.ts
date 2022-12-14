// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/services/campaign_group_service.proto" (package "google.ads.googleads.v11.services", syntax proto3)
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
import { CampaignGroupService } from "./campaign_group_service";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { MutateCampaignGroupsResponse } from "./campaign_group_service";
import type { MutateCampaignGroupsRequest } from "./campaign_group_service";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
// Proto file describing the Campaign group service.

/**
 * Service to manage campaign groups.
 *
 * @generated from protobuf service google.ads.googleads.v11.services.CampaignGroupService
 */
export interface ICampaignGroupServiceClient {
    /**
     * Creates, updates, or removes campaign groups. Operation statuses are
     * returned.
     *
     * @generated from protobuf rpc: MutateCampaignGroups(google.ads.googleads.v11.services.MutateCampaignGroupsRequest) returns (google.ads.googleads.v11.services.MutateCampaignGroupsResponse);
     */
    mutateCampaignGroups(input: MutateCampaignGroupsRequest, options?: RpcOptions): UnaryCall<MutateCampaignGroupsRequest, MutateCampaignGroupsResponse>;
}
// Proto file describing the Campaign group service.

/**
 * Service to manage campaign groups.
 *
 * @generated from protobuf service google.ads.googleads.v11.services.CampaignGroupService
 */
export class CampaignGroupServiceClient implements ICampaignGroupServiceClient, ServiceInfo {
    typeName = CampaignGroupService.typeName;
    methods = CampaignGroupService.methods;
    options = CampaignGroupService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * Creates, updates, or removes campaign groups. Operation statuses are
     * returned.
     *
     * @generated from protobuf rpc: MutateCampaignGroups(google.ads.googleads.v11.services.MutateCampaignGroupsRequest) returns (google.ads.googleads.v11.services.MutateCampaignGroupsResponse);
     */
    mutateCampaignGroups(input: MutateCampaignGroupsRequest, options?: RpcOptions): UnaryCall<MutateCampaignGroupsRequest, MutateCampaignGroupsResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<MutateCampaignGroupsRequest, MutateCampaignGroupsResponse>("unary", this._transport, method, opt, input);
    }
}
