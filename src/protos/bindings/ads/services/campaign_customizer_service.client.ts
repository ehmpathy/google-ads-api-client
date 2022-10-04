// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/services/campaign_customizer_service.proto" (package "google.ads.googleads.v11.services", syntax proto3)
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
import { CampaignCustomizerService } from "./campaign_customizer_service";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { MutateCampaignCustomizersResponse } from "./campaign_customizer_service";
import type { MutateCampaignCustomizersRequest } from "./campaign_customizer_service";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
// Proto file describing the CampaignCustomizer service.

/**
 * Service to manage campaign customizer
 *
 * @generated from protobuf service google.ads.googleads.v11.services.CampaignCustomizerService
 */
export interface ICampaignCustomizerServiceClient {
    /**
     * Creates, updates or removes campaign customizers. Operation statuses are
     * returned.
     *
     * @generated from protobuf rpc: MutateCampaignCustomizers(google.ads.googleads.v11.services.MutateCampaignCustomizersRequest) returns (google.ads.googleads.v11.services.MutateCampaignCustomizersResponse);
     */
    mutateCampaignCustomizers(input: MutateCampaignCustomizersRequest, options?: RpcOptions): UnaryCall<MutateCampaignCustomizersRequest, MutateCampaignCustomizersResponse>;
}
// Proto file describing the CampaignCustomizer service.

/**
 * Service to manage campaign customizer
 *
 * @generated from protobuf service google.ads.googleads.v11.services.CampaignCustomizerService
 */
export class CampaignCustomizerServiceClient implements ICampaignCustomizerServiceClient, ServiceInfo {
    typeName = CampaignCustomizerService.typeName;
    methods = CampaignCustomizerService.methods;
    options = CampaignCustomizerService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * Creates, updates or removes campaign customizers. Operation statuses are
     * returned.
     *
     * @generated from protobuf rpc: MutateCampaignCustomizers(google.ads.googleads.v11.services.MutateCampaignCustomizersRequest) returns (google.ads.googleads.v11.services.MutateCampaignCustomizersResponse);
     */
    mutateCampaignCustomizers(input: MutateCampaignCustomizersRequest, options?: RpcOptions): UnaryCall<MutateCampaignCustomizersRequest, MutateCampaignCustomizersResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<MutateCampaignCustomizersRequest, MutateCampaignCustomizersResponse>("unary", this._transport, method, opt, input);
    }
}