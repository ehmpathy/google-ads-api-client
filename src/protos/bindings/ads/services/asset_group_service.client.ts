// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/services/asset_group_service.proto" (package "google.ads.googleads.v11.services", syntax proto3)
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
import { AssetGroupService } from "./asset_group_service";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { MutateAssetGroupsResponse } from "./asset_group_service";
import type { MutateAssetGroupsRequest } from "./asset_group_service";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
// Proto file describing the AssetGroup service.

/**
 * Service to manage asset group
 *
 * @generated from protobuf service google.ads.googleads.v11.services.AssetGroupService
 */
export interface IAssetGroupServiceClient {
    /**
     * Creates, updates or removes asset groups. Operation statuses are
     * returned.
     *
     * @generated from protobuf rpc: MutateAssetGroups(google.ads.googleads.v11.services.MutateAssetGroupsRequest) returns (google.ads.googleads.v11.services.MutateAssetGroupsResponse);
     */
    mutateAssetGroups(input: MutateAssetGroupsRequest, options?: RpcOptions): UnaryCall<MutateAssetGroupsRequest, MutateAssetGroupsResponse>;
}
// Proto file describing the AssetGroup service.

/**
 * Service to manage asset group
 *
 * @generated from protobuf service google.ads.googleads.v11.services.AssetGroupService
 */
export class AssetGroupServiceClient implements IAssetGroupServiceClient, ServiceInfo {
    typeName = AssetGroupService.typeName;
    methods = AssetGroupService.methods;
    options = AssetGroupService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * Creates, updates or removes asset groups. Operation statuses are
     * returned.
     *
     * @generated from protobuf rpc: MutateAssetGroups(google.ads.googleads.v11.services.MutateAssetGroupsRequest) returns (google.ads.googleads.v11.services.MutateAssetGroupsResponse);
     */
    mutateAssetGroups(input: MutateAssetGroupsRequest, options?: RpcOptions): UnaryCall<MutateAssetGroupsRequest, MutateAssetGroupsResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<MutateAssetGroupsRequest, MutateAssetGroupsResponse>("unary", this._transport, method, opt, input);
    }
}
