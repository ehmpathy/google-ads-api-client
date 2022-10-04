// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/services/feed_service.proto" (package "google.ads.googleads.v11.services", syntax proto3)
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
import { FeedService } from "./feed_service";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { MutateFeedsResponse } from "./feed_service";
import type { MutateFeedsRequest } from "./feed_service";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
// Proto file describing the Feed service.

/**
 * Service to manage feeds.
 *
 * @generated from protobuf service google.ads.googleads.v11.services.FeedService
 */
export interface IFeedServiceClient {
    /**
     * Creates, updates, or removes feeds. Operation statuses are
     * returned.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [CollectionSizeError]()
     *   [DatabaseError]()
     *   [DistinctError]()
     *   [FeedError]()
     *   [FieldError]()
     *   [FieldMaskError]()
     *   [HeaderError]()
     *   [IdError]()
     *   [InternalError]()
     *   [ListOperationError]()
     *   [MutateError]()
     *   [NewResourceCreationError]()
     *   [NotEmptyError]()
     *   [NullError]()
     *   [OperatorError]()
     *   [QuotaError]()
     *   [RangeError]()
     *   [RequestError]()
     *   [ResourceCountLimitExceededError]()
     *   [SizeLimitError]()
     *   [StringFormatError]()
     *   [StringLengthError]()
     *
     * @generated from protobuf rpc: MutateFeeds(google.ads.googleads.v11.services.MutateFeedsRequest) returns (google.ads.googleads.v11.services.MutateFeedsResponse);
     */
    mutateFeeds(input: MutateFeedsRequest, options?: RpcOptions): UnaryCall<MutateFeedsRequest, MutateFeedsResponse>;
}
// Proto file describing the Feed service.

/**
 * Service to manage feeds.
 *
 * @generated from protobuf service google.ads.googleads.v11.services.FeedService
 */
export class FeedServiceClient implements IFeedServiceClient, ServiceInfo {
    typeName = FeedService.typeName;
    methods = FeedService.methods;
    options = FeedService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * Creates, updates, or removes feeds. Operation statuses are
     * returned.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [CollectionSizeError]()
     *   [DatabaseError]()
     *   [DistinctError]()
     *   [FeedError]()
     *   [FieldError]()
     *   [FieldMaskError]()
     *   [HeaderError]()
     *   [IdError]()
     *   [InternalError]()
     *   [ListOperationError]()
     *   [MutateError]()
     *   [NewResourceCreationError]()
     *   [NotEmptyError]()
     *   [NullError]()
     *   [OperatorError]()
     *   [QuotaError]()
     *   [RangeError]()
     *   [RequestError]()
     *   [ResourceCountLimitExceededError]()
     *   [SizeLimitError]()
     *   [StringFormatError]()
     *   [StringLengthError]()
     *
     * @generated from protobuf rpc: MutateFeeds(google.ads.googleads.v11.services.MutateFeedsRequest) returns (google.ads.googleads.v11.services.MutateFeedsResponse);
     */
    mutateFeeds(input: MutateFeedsRequest, options?: RpcOptions): UnaryCall<MutateFeedsRequest, MutateFeedsResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<MutateFeedsRequest, MutateFeedsResponse>("unary", this._transport, method, opt, input);
    }
}
