// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/services/campaign_asset_service.proto" (package "google.ads.googleads.v11.services", syntax proto3)
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
import { CampaignAssetService } from "./campaign_asset_service";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { MutateCampaignAssetsResponse } from "./campaign_asset_service";
import type { MutateCampaignAssetsRequest } from "./campaign_asset_service";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
// Proto file describing the CampaignAsset service.

/**
 * Service to manage campaign assets.
 *
 * @generated from protobuf service google.ads.googleads.v11.services.CampaignAssetService
 */
export interface ICampaignAssetServiceClient {
    /**
     * Creates, updates, or removes campaign assets. Operation statuses are
     * returned.
     *
     * List of thrown errors:
     *   [AssetLinkError]()
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [ContextError]()
     *   [DatabaseError]()
     *   [FieldError]()
     *   [HeaderError]()
     *   [InternalError]()
     *   [MutateError]()
     *   [NotAllowlistedError]()
     *   [QuotaError]()
     *   [RequestError]()
     *
     * @generated from protobuf rpc: MutateCampaignAssets(google.ads.googleads.v11.services.MutateCampaignAssetsRequest) returns (google.ads.googleads.v11.services.MutateCampaignAssetsResponse);
     */
    mutateCampaignAssets(input: MutateCampaignAssetsRequest, options?: RpcOptions): UnaryCall<MutateCampaignAssetsRequest, MutateCampaignAssetsResponse>;
}
// Proto file describing the CampaignAsset service.

/**
 * Service to manage campaign assets.
 *
 * @generated from protobuf service google.ads.googleads.v11.services.CampaignAssetService
 */
export class CampaignAssetServiceClient implements ICampaignAssetServiceClient, ServiceInfo {
    typeName = CampaignAssetService.typeName;
    methods = CampaignAssetService.methods;
    options = CampaignAssetService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * Creates, updates, or removes campaign assets. Operation statuses are
     * returned.
     *
     * List of thrown errors:
     *   [AssetLinkError]()
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [ContextError]()
     *   [DatabaseError]()
     *   [FieldError]()
     *   [HeaderError]()
     *   [InternalError]()
     *   [MutateError]()
     *   [NotAllowlistedError]()
     *   [QuotaError]()
     *   [RequestError]()
     *
     * @generated from protobuf rpc: MutateCampaignAssets(google.ads.googleads.v11.services.MutateCampaignAssetsRequest) returns (google.ads.googleads.v11.services.MutateCampaignAssetsResponse);
     */
    mutateCampaignAssets(input: MutateCampaignAssetsRequest, options?: RpcOptions): UnaryCall<MutateCampaignAssetsRequest, MutateCampaignAssetsResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<MutateCampaignAssetsRequest, MutateCampaignAssetsResponse>("unary", this._transport, method, opt, input);
    }
}