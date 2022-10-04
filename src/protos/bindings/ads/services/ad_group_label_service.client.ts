// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/services/ad_group_label_service.proto" (package "google.ads.googleads.v11.services", syntax proto3)
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
import { AdGroupLabelService } from "./ad_group_label_service";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { MutateAdGroupLabelsResponse } from "./ad_group_label_service";
import type { MutateAdGroupLabelsRequest } from "./ad_group_label_service";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
// Proto file describing the Ad Group Label service.

/**
 * Service to manage labels on ad groups.
 *
 * @generated from protobuf service google.ads.googleads.v11.services.AdGroupLabelService
 */
export interface IAdGroupLabelServiceClient {
    /**
     * Creates and removes ad group labels.
     * Operation statuses are returned.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [DatabaseError]()
     *   [FieldError]()
     *   [HeaderError]()
     *   [InternalError]()
     *   [LabelError]()
     *   [MutateError]()
     *   [NewResourceCreationError]()
     *   [QuotaError]()
     *   [RequestError]()
     *
     * @generated from protobuf rpc: MutateAdGroupLabels(google.ads.googleads.v11.services.MutateAdGroupLabelsRequest) returns (google.ads.googleads.v11.services.MutateAdGroupLabelsResponse);
     */
    mutateAdGroupLabels(input: MutateAdGroupLabelsRequest, options?: RpcOptions): UnaryCall<MutateAdGroupLabelsRequest, MutateAdGroupLabelsResponse>;
}
// Proto file describing the Ad Group Label service.

/**
 * Service to manage labels on ad groups.
 *
 * @generated from protobuf service google.ads.googleads.v11.services.AdGroupLabelService
 */
export class AdGroupLabelServiceClient implements IAdGroupLabelServiceClient, ServiceInfo {
    typeName = AdGroupLabelService.typeName;
    methods = AdGroupLabelService.methods;
    options = AdGroupLabelService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * Creates and removes ad group labels.
     * Operation statuses are returned.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [DatabaseError]()
     *   [FieldError]()
     *   [HeaderError]()
     *   [InternalError]()
     *   [LabelError]()
     *   [MutateError]()
     *   [NewResourceCreationError]()
     *   [QuotaError]()
     *   [RequestError]()
     *
     * @generated from protobuf rpc: MutateAdGroupLabels(google.ads.googleads.v11.services.MutateAdGroupLabelsRequest) returns (google.ads.googleads.v11.services.MutateAdGroupLabelsResponse);
     */
    mutateAdGroupLabels(input: MutateAdGroupLabelsRequest, options?: RpcOptions): UnaryCall<MutateAdGroupLabelsRequest, MutateAdGroupLabelsResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<MutateAdGroupLabelsRequest, MutateAdGroupLabelsResponse>("unary", this._transport, method, opt, input);
    }
}
