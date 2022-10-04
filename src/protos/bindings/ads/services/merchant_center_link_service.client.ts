// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/services/merchant_center_link_service.proto" (package "google.ads.googleads.v11.services", syntax proto3)
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
import { MerchantCenterLinkService } from "./merchant_center_link_service";
import type { MutateMerchantCenterLinkResponse } from "./merchant_center_link_service";
import type { MutateMerchantCenterLinkRequest } from "./merchant_center_link_service";
import type { MerchantCenterLink } from "../resources/merchant_center_link";
import type { GetMerchantCenterLinkRequest } from "./merchant_center_link_service";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { ListMerchantCenterLinksResponse } from "./merchant_center_link_service";
import type { ListMerchantCenterLinksRequest } from "./merchant_center_link_service";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
// Proto file describing the MerchantCenterLink service.

/**
 * This service allows management of links between Google Ads and Google
 * Merchant Center.
 *
 * @generated from protobuf service google.ads.googleads.v11.services.MerchantCenterLinkService
 */
export interface IMerchantCenterLinkServiceClient {
    /**
     * Returns Merchant Center links available for this customer.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [HeaderError]()
     *   [InternalError]()
     *   [QuotaError]()
     *   [RequestError]()
     *
     * @generated from protobuf rpc: ListMerchantCenterLinks(google.ads.googleads.v11.services.ListMerchantCenterLinksRequest) returns (google.ads.googleads.v11.services.ListMerchantCenterLinksResponse);
     */
    listMerchantCenterLinks(input: ListMerchantCenterLinksRequest, options?: RpcOptions): UnaryCall<ListMerchantCenterLinksRequest, ListMerchantCenterLinksResponse>;
    /**
     * Returns the Merchant Center link in full detail.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [HeaderError]()
     *   [InternalError]()
     *   [QuotaError]()
     *   [RequestError]()
     *
     * @generated from protobuf rpc: GetMerchantCenterLink(google.ads.googleads.v11.services.GetMerchantCenterLinkRequest) returns (google.ads.googleads.v11.resources.MerchantCenterLink);
     */
    getMerchantCenterLink(input: GetMerchantCenterLinkRequest, options?: RpcOptions): UnaryCall<GetMerchantCenterLinkRequest, MerchantCenterLink>;
    /**
     * Updates status or removes a Merchant Center link.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [FieldMaskError]()
     *   [HeaderError]()
     *   [InternalError]()
     *   [QuotaError]()
     *   [RequestError]()
     *
     * @generated from protobuf rpc: MutateMerchantCenterLink(google.ads.googleads.v11.services.MutateMerchantCenterLinkRequest) returns (google.ads.googleads.v11.services.MutateMerchantCenterLinkResponse);
     */
    mutateMerchantCenterLink(input: MutateMerchantCenterLinkRequest, options?: RpcOptions): UnaryCall<MutateMerchantCenterLinkRequest, MutateMerchantCenterLinkResponse>;
}
// Proto file describing the MerchantCenterLink service.

/**
 * This service allows management of links between Google Ads and Google
 * Merchant Center.
 *
 * @generated from protobuf service google.ads.googleads.v11.services.MerchantCenterLinkService
 */
export class MerchantCenterLinkServiceClient implements IMerchantCenterLinkServiceClient, ServiceInfo {
    typeName = MerchantCenterLinkService.typeName;
    methods = MerchantCenterLinkService.methods;
    options = MerchantCenterLinkService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * Returns Merchant Center links available for this customer.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [HeaderError]()
     *   [InternalError]()
     *   [QuotaError]()
     *   [RequestError]()
     *
     * @generated from protobuf rpc: ListMerchantCenterLinks(google.ads.googleads.v11.services.ListMerchantCenterLinksRequest) returns (google.ads.googleads.v11.services.ListMerchantCenterLinksResponse);
     */
    listMerchantCenterLinks(input: ListMerchantCenterLinksRequest, options?: RpcOptions): UnaryCall<ListMerchantCenterLinksRequest, ListMerchantCenterLinksResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<ListMerchantCenterLinksRequest, ListMerchantCenterLinksResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Returns the Merchant Center link in full detail.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [HeaderError]()
     *   [InternalError]()
     *   [QuotaError]()
     *   [RequestError]()
     *
     * @generated from protobuf rpc: GetMerchantCenterLink(google.ads.googleads.v11.services.GetMerchantCenterLinkRequest) returns (google.ads.googleads.v11.resources.MerchantCenterLink);
     */
    getMerchantCenterLink(input: GetMerchantCenterLinkRequest, options?: RpcOptions): UnaryCall<GetMerchantCenterLinkRequest, MerchantCenterLink> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetMerchantCenterLinkRequest, MerchantCenterLink>("unary", this._transport, method, opt, input);
    }
    /**
     * Updates status or removes a Merchant Center link.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [FieldMaskError]()
     *   [HeaderError]()
     *   [InternalError]()
     *   [QuotaError]()
     *   [RequestError]()
     *
     * @generated from protobuf rpc: MutateMerchantCenterLink(google.ads.googleads.v11.services.MutateMerchantCenterLinkRequest) returns (google.ads.googleads.v11.services.MutateMerchantCenterLinkResponse);
     */
    mutateMerchantCenterLink(input: MutateMerchantCenterLinkRequest, options?: RpcOptions): UnaryCall<MutateMerchantCenterLinkRequest, MutateMerchantCenterLinkResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<MutateMerchantCenterLinkRequest, MutateMerchantCenterLinkResponse>("unary", this._transport, method, opt, input);
    }
}
