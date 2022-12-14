// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/services/custom_conversion_goal_service.proto" (package "google.ads.googleads.v11.services", syntax proto3)
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
import { CustomConversionGoalService } from "./custom_conversion_goal_service";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { MutateCustomConversionGoalsResponse } from "./custom_conversion_goal_service";
import type { MutateCustomConversionGoalsRequest } from "./custom_conversion_goal_service";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
// Proto file describing the CustomConversionGoal service.

/**
 * Service to manage custom conversion goal.
 *
 * @generated from protobuf service google.ads.googleads.v11.services.CustomConversionGoalService
 */
export interface ICustomConversionGoalServiceClient {
    /**
     * Creates, updates or removes custom conversion goals. Operation statuses
     * are returned.
     *
     * @generated from protobuf rpc: MutateCustomConversionGoals(google.ads.googleads.v11.services.MutateCustomConversionGoalsRequest) returns (google.ads.googleads.v11.services.MutateCustomConversionGoalsResponse);
     */
    mutateCustomConversionGoals(input: MutateCustomConversionGoalsRequest, options?: RpcOptions): UnaryCall<MutateCustomConversionGoalsRequest, MutateCustomConversionGoalsResponse>;
}
// Proto file describing the CustomConversionGoal service.

/**
 * Service to manage custom conversion goal.
 *
 * @generated from protobuf service google.ads.googleads.v11.services.CustomConversionGoalService
 */
export class CustomConversionGoalServiceClient implements ICustomConversionGoalServiceClient, ServiceInfo {
    typeName = CustomConversionGoalService.typeName;
    methods = CustomConversionGoalService.methods;
    options = CustomConversionGoalService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * Creates, updates or removes custom conversion goals. Operation statuses
     * are returned.
     *
     * @generated from protobuf rpc: MutateCustomConversionGoals(google.ads.googleads.v11.services.MutateCustomConversionGoalsRequest) returns (google.ads.googleads.v11.services.MutateCustomConversionGoalsResponse);
     */
    mutateCustomConversionGoals(input: MutateCustomConversionGoalsRequest, options?: RpcOptions): UnaryCall<MutateCustomConversionGoalsRequest, MutateCustomConversionGoalsResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<MutateCustomConversionGoalsRequest, MutateCustomConversionGoalsResponse>("unary", this._transport, method, opt, input);
    }
}
