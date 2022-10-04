// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/services/customer_client_link_service.proto" (package "google.ads.googleads.v11.services", syntax proto3)
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
import { CustomerClientLinkService } from "./customer_client_link_service";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { MutateCustomerClientLinkResponse } from "./customer_client_link_service";
import type { MutateCustomerClientLinkRequest } from "./customer_client_link_service";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Service to manage customer client links.
 *
 * @generated from protobuf service google.ads.googleads.v11.services.CustomerClientLinkService
 */
export interface ICustomerClientLinkServiceClient {
    /**
     * Creates or updates a customer client link. Operation statuses are returned.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [DatabaseError]()
     *   [FieldError]()
     *   [FieldMaskError]()
     *   [HeaderError]()
     *   [InternalError]()
     *   [ManagerLinkError]()
     *   [MutateError]()
     *   [NewResourceCreationError]()
     *   [QuotaError]()
     *   [RequestError]()
     *
     * @generated from protobuf rpc: MutateCustomerClientLink(google.ads.googleads.v11.services.MutateCustomerClientLinkRequest) returns (google.ads.googleads.v11.services.MutateCustomerClientLinkResponse);
     */
    mutateCustomerClientLink(input: MutateCustomerClientLinkRequest, options?: RpcOptions): UnaryCall<MutateCustomerClientLinkRequest, MutateCustomerClientLinkResponse>;
}
/**
 * Service to manage customer client links.
 *
 * @generated from protobuf service google.ads.googleads.v11.services.CustomerClientLinkService
 */
export class CustomerClientLinkServiceClient implements ICustomerClientLinkServiceClient, ServiceInfo {
    typeName = CustomerClientLinkService.typeName;
    methods = CustomerClientLinkService.methods;
    options = CustomerClientLinkService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * Creates or updates a customer client link. Operation statuses are returned.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [DatabaseError]()
     *   [FieldError]()
     *   [FieldMaskError]()
     *   [HeaderError]()
     *   [InternalError]()
     *   [ManagerLinkError]()
     *   [MutateError]()
     *   [NewResourceCreationError]()
     *   [QuotaError]()
     *   [RequestError]()
     *
     * @generated from protobuf rpc: MutateCustomerClientLink(google.ads.googleads.v11.services.MutateCustomerClientLinkRequest) returns (google.ads.googleads.v11.services.MutateCustomerClientLinkResponse);
     */
    mutateCustomerClientLink(input: MutateCustomerClientLinkRequest, options?: RpcOptions): UnaryCall<MutateCustomerClientLinkRequest, MutateCustomerClientLinkResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<MutateCustomerClientLinkRequest, MutateCustomerClientLinkResponse>("unary", this._transport, method, opt, input);
    }
}
