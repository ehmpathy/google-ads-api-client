// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/services/asset_group_asset_service.proto" (package "google.ads.googleads.v11.services", syntax proto3)
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
import { AssetGroupAssetService } from "./asset_group_asset_service";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { MutateAssetGroupAssetsResponse } from "./asset_group_asset_service";
import type { MutateAssetGroupAssetsRequest } from "./asset_group_asset_service";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
// Proto file describing the AssetGroupAsset service.

/**
 * Service to manage asset group asset.
 *
 * @generated from protobuf service google.ads.googleads.v11.services.AssetGroupAssetService
 */
export interface IAssetGroupAssetServiceClient {
    /**
     * Creates, updates or removes asset group assets. Operation statuses are
     * returned.
     *
     * @generated from protobuf rpc: MutateAssetGroupAssets(google.ads.googleads.v11.services.MutateAssetGroupAssetsRequest) returns (google.ads.googleads.v11.services.MutateAssetGroupAssetsResponse);
     */
    mutateAssetGroupAssets(input: MutateAssetGroupAssetsRequest, options?: RpcOptions): UnaryCall<MutateAssetGroupAssetsRequest, MutateAssetGroupAssetsResponse>;
}
// Proto file describing the AssetGroupAsset service.

/**
 * Service to manage asset group asset.
 *
 * @generated from protobuf service google.ads.googleads.v11.services.AssetGroupAssetService
 */
export class AssetGroupAssetServiceClient implements IAssetGroupAssetServiceClient, ServiceInfo {
    typeName = AssetGroupAssetService.typeName;
    methods = AssetGroupAssetService.methods;
    options = AssetGroupAssetService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * Creates, updates or removes asset group assets. Operation statuses are
     * returned.
     *
     * @generated from protobuf rpc: MutateAssetGroupAssets(google.ads.googleads.v11.services.MutateAssetGroupAssetsRequest) returns (google.ads.googleads.v11.services.MutateAssetGroupAssetsResponse);
     */
    mutateAssetGroupAssets(input: MutateAssetGroupAssetsRequest, options?: RpcOptions): UnaryCall<MutateAssetGroupAssetsRequest, MutateAssetGroupAssetsResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<MutateAssetGroupAssetsRequest, MutateAssetGroupAssetsResponse>("unary", this._transport, method, opt, input);
    }
}
