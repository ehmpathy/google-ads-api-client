// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/services/extension_feed_item_service.proto" (package "google.ads.googleads.v11.services", syntax proto3)
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
import { ExtensionFeedItemService } from "./extension_feed_item_service";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { MutateExtensionFeedItemsResponse } from "./extension_feed_item_service";
import type { MutateExtensionFeedItemsRequest } from "./extension_feed_item_service";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
// Proto file describing the ExtensionFeedItem service.

/**
 * Service to manage extension feed items.
 *
 * @generated from protobuf service google.ads.googleads.v11.services.ExtensionFeedItemService
 */
export interface IExtensionFeedItemServiceClient {
    /**
     * Creates, updates, or removes extension feed items. Operation
     * statuses are returned.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [CollectionSizeError]()
     *   [CountryCodeError]()
     *   [DatabaseError]()
     *   [DateError]()
     *   [DistinctError]()
     *   [ExtensionFeedItemError]()
     *   [FieldError]()
     *   [FieldMaskError]()
     *   [HeaderError]()
     *   [ImageError]()
     *   [InternalError]()
     *   [LanguageCodeError]()
     *   [MutateError]()
     *   [NewResourceCreationError]()
     *   [OperationAccessDeniedError]()
     *   [QuotaError]()
     *   [RangeError]()
     *   [RequestError]()
     *   [SizeLimitError]()
     *   [StringLengthError]()
     *   [UrlFieldError]()
     *
     * @generated from protobuf rpc: MutateExtensionFeedItems(google.ads.googleads.v11.services.MutateExtensionFeedItemsRequest) returns (google.ads.googleads.v11.services.MutateExtensionFeedItemsResponse);
     */
    mutateExtensionFeedItems(input: MutateExtensionFeedItemsRequest, options?: RpcOptions): UnaryCall<MutateExtensionFeedItemsRequest, MutateExtensionFeedItemsResponse>;
}
// Proto file describing the ExtensionFeedItem service.

/**
 * Service to manage extension feed items.
 *
 * @generated from protobuf service google.ads.googleads.v11.services.ExtensionFeedItemService
 */
export class ExtensionFeedItemServiceClient implements IExtensionFeedItemServiceClient, ServiceInfo {
    typeName = ExtensionFeedItemService.typeName;
    methods = ExtensionFeedItemService.methods;
    options = ExtensionFeedItemService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * Creates, updates, or removes extension feed items. Operation
     * statuses are returned.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [CollectionSizeError]()
     *   [CountryCodeError]()
     *   [DatabaseError]()
     *   [DateError]()
     *   [DistinctError]()
     *   [ExtensionFeedItemError]()
     *   [FieldError]()
     *   [FieldMaskError]()
     *   [HeaderError]()
     *   [ImageError]()
     *   [InternalError]()
     *   [LanguageCodeError]()
     *   [MutateError]()
     *   [NewResourceCreationError]()
     *   [OperationAccessDeniedError]()
     *   [QuotaError]()
     *   [RangeError]()
     *   [RequestError]()
     *   [SizeLimitError]()
     *   [StringLengthError]()
     *   [UrlFieldError]()
     *
     * @generated from protobuf rpc: MutateExtensionFeedItems(google.ads.googleads.v11.services.MutateExtensionFeedItemsRequest) returns (google.ads.googleads.v11.services.MutateExtensionFeedItemsResponse);
     */
    mutateExtensionFeedItems(input: MutateExtensionFeedItemsRequest, options?: RpcOptions): UnaryCall<MutateExtensionFeedItemsRequest, MutateExtensionFeedItemsResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<MutateExtensionFeedItemsRequest, MutateExtensionFeedItemsResponse>("unary", this._transport, method, opt, input);
    }
}