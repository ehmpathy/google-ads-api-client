// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/services/ad_group_extension_setting_service.proto" (package "google.ads.googleads.v11.services", syntax proto3)
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
import { AdGroupExtensionSettingService } from "./ad_group_extension_setting_service";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { MutateAdGroupExtensionSettingsResponse } from "./ad_group_extension_setting_service";
import type { MutateAdGroupExtensionSettingsRequest } from "./ad_group_extension_setting_service";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
// Proto file describing the AdGroupExtensionSetting service.

/**
 * Service to manage ad group extension settings.
 *
 * @generated from protobuf service google.ads.googleads.v11.services.AdGroupExtensionSettingService
 */
export interface IAdGroupExtensionSettingServiceClient {
    /**
     * Creates, updates, or removes ad group extension settings. Operation
     * statuses are returned.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [CollectionSizeError]()
     *   [CriterionError]()
     *   [DatabaseError]()
     *   [DateError]()
     *   [DistinctError]()
     *   [ExtensionSettingError]()
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
     *   [OperationAccessDeniedError]()
     *   [OperatorError]()
     *   [QuotaError]()
     *   [RangeError]()
     *   [RequestError]()
     *   [ResourceCountLimitExceededError]()
     *   [SizeLimitError]()
     *   [StringFormatError]()
     *   [StringLengthError]()
     *   [UrlFieldError]()
     *
     * @generated from protobuf rpc: MutateAdGroupExtensionSettings(google.ads.googleads.v11.services.MutateAdGroupExtensionSettingsRequest) returns (google.ads.googleads.v11.services.MutateAdGroupExtensionSettingsResponse);
     */
    mutateAdGroupExtensionSettings(input: MutateAdGroupExtensionSettingsRequest, options?: RpcOptions): UnaryCall<MutateAdGroupExtensionSettingsRequest, MutateAdGroupExtensionSettingsResponse>;
}
// Proto file describing the AdGroupExtensionSetting service.

/**
 * Service to manage ad group extension settings.
 *
 * @generated from protobuf service google.ads.googleads.v11.services.AdGroupExtensionSettingService
 */
export class AdGroupExtensionSettingServiceClient implements IAdGroupExtensionSettingServiceClient, ServiceInfo {
    typeName = AdGroupExtensionSettingService.typeName;
    methods = AdGroupExtensionSettingService.methods;
    options = AdGroupExtensionSettingService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * Creates, updates, or removes ad group extension settings. Operation
     * statuses are returned.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [CollectionSizeError]()
     *   [CriterionError]()
     *   [DatabaseError]()
     *   [DateError]()
     *   [DistinctError]()
     *   [ExtensionSettingError]()
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
     *   [OperationAccessDeniedError]()
     *   [OperatorError]()
     *   [QuotaError]()
     *   [RangeError]()
     *   [RequestError]()
     *   [ResourceCountLimitExceededError]()
     *   [SizeLimitError]()
     *   [StringFormatError]()
     *   [StringLengthError]()
     *   [UrlFieldError]()
     *
     * @generated from protobuf rpc: MutateAdGroupExtensionSettings(google.ads.googleads.v11.services.MutateAdGroupExtensionSettingsRequest) returns (google.ads.googleads.v11.services.MutateAdGroupExtensionSettingsResponse);
     */
    mutateAdGroupExtensionSettings(input: MutateAdGroupExtensionSettingsRequest, options?: RpcOptions): UnaryCall<MutateAdGroupExtensionSettingsRequest, MutateAdGroupExtensionSettingsResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<MutateAdGroupExtensionSettingsRequest, MutateAdGroupExtensionSettingsResponse>("unary", this._transport, method, opt, input);
    }
}
