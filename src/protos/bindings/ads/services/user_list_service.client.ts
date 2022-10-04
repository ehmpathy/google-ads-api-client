// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/services/user_list_service.proto" (package "google.ads.googleads.v11.services", syntax proto3)
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
import { UserListService } from "./user_list_service";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { MutateUserListsResponse } from "./user_list_service";
import type { MutateUserListsRequest } from "./user_list_service";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
// Proto file describing the User List service.

/**
 * Service to manage user lists.
 *
 * @generated from protobuf service google.ads.googleads.v11.services.UserListService
 */
export interface IUserListServiceClient {
    /**
     * Creates or updates user lists. Operation statuses are returned.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [CollectionSizeError]()
     *   [DatabaseError]()
     *   [DistinctError]()
     *   [FieldError]()
     *   [FieldMaskError]()
     *   [HeaderError]()
     *   [InternalError]()
     *   [MutateError]()
     *   [NewResourceCreationError]()
     *   [NotAllowlistedError]()
     *   [NotEmptyError]()
     *   [OperationAccessDeniedError]()
     *   [QuotaError]()
     *   [RangeError]()
     *   [RequestError]()
     *   [StringFormatError]()
     *   [StringLengthError]()
     *   [UserListError]()
     *
     * @generated from protobuf rpc: MutateUserLists(google.ads.googleads.v11.services.MutateUserListsRequest) returns (google.ads.googleads.v11.services.MutateUserListsResponse);
     */
    mutateUserLists(input: MutateUserListsRequest, options?: RpcOptions): UnaryCall<MutateUserListsRequest, MutateUserListsResponse>;
}
// Proto file describing the User List service.

/**
 * Service to manage user lists.
 *
 * @generated from protobuf service google.ads.googleads.v11.services.UserListService
 */
export class UserListServiceClient implements IUserListServiceClient, ServiceInfo {
    typeName = UserListService.typeName;
    methods = UserListService.methods;
    options = UserListService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * Creates or updates user lists. Operation statuses are returned.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [CollectionSizeError]()
     *   [DatabaseError]()
     *   [DistinctError]()
     *   [FieldError]()
     *   [FieldMaskError]()
     *   [HeaderError]()
     *   [InternalError]()
     *   [MutateError]()
     *   [NewResourceCreationError]()
     *   [NotAllowlistedError]()
     *   [NotEmptyError]()
     *   [OperationAccessDeniedError]()
     *   [QuotaError]()
     *   [RangeError]()
     *   [RequestError]()
     *   [StringFormatError]()
     *   [StringLengthError]()
     *   [UserListError]()
     *
     * @generated from protobuf rpc: MutateUserLists(google.ads.googleads.v11.services.MutateUserListsRequest) returns (google.ads.googleads.v11.services.MutateUserListsResponse);
     */
    mutateUserLists(input: MutateUserListsRequest, options?: RpcOptions): UnaryCall<MutateUserListsRequest, MutateUserListsResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<MutateUserListsRequest, MutateUserListsResponse>("unary", this._transport, method, opt, input);
    }
}
