// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/services/experiment_service.proto" (package "google.ads.googleads.v11.services", syntax proto3)
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
import { ExperimentService } from "./experiment_service";
import type { PromoteExperimentRequest } from "./experiment_service";
import type { Operation } from "../../google/longrunning/operations";
import type { ScheduleExperimentRequest } from "./experiment_service";
import type { GraduateExperimentRequest } from "./experiment_service";
import type { ListExperimentAsyncErrorsResponse } from "./experiment_service";
import type { ListExperimentAsyncErrorsRequest } from "./experiment_service";
import type { Empty } from "../../google/protobuf/empty";
import type { EndExperimentRequest } from "./experiment_service";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { MutateExperimentsResponse } from "./experiment_service";
import type { MutateExperimentsRequest } from "./experiment_service";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
// Proto file describing the Experiment service.

/**
 * Service to manage experiments.
 *
 * @generated from protobuf service google.ads.googleads.v11.services.ExperimentService
 */
export interface IExperimentServiceClient {
    /**
     * Creates, updates, or removes experiments. Operation statuses are returned.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [ExperimentError]()
     *   [HeaderError]()
     *   [InternalError]()
     *   [QuotaError]()
     *   [RequestError]()
     *
     * @generated from protobuf rpc: MutateExperiments(google.ads.googleads.v11.services.MutateExperimentsRequest) returns (google.ads.googleads.v11.services.MutateExperimentsResponse);
     */
    mutateExperiments(input: MutateExperimentsRequest, options?: RpcOptions): UnaryCall<MutateExperimentsRequest, MutateExperimentsResponse>;
    /**
     * Immediately ends an experiment, changing the experiment's scheduled
     * end date and without waiting for end of day. End date is updated to be the
     * time of the request.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [ExperimentError]()
     *   [HeaderError]()
     *   [InternalError]()
     *   [QuotaError]()
     *   [RequestError]()
     *
     * @generated from protobuf rpc: EndExperiment(google.ads.googleads.v11.services.EndExperimentRequest) returns (google.protobuf.Empty);
     */
    endExperiment(input: EndExperimentRequest, options?: RpcOptions): UnaryCall<EndExperimentRequest, Empty>;
    /**
     * Returns all errors that occurred during the last Experiment update (either
     * scheduling or promotion).
     * Supports standard list paging.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [HeaderError]()
     *   [InternalError]()
     *   [QuotaError]()
     *   [RequestError]()
     *
     * @generated from protobuf rpc: ListExperimentAsyncErrors(google.ads.googleads.v11.services.ListExperimentAsyncErrorsRequest) returns (google.ads.googleads.v11.services.ListExperimentAsyncErrorsResponse);
     */
    listExperimentAsyncErrors(input: ListExperimentAsyncErrorsRequest, options?: RpcOptions): UnaryCall<ListExperimentAsyncErrorsRequest, ListExperimentAsyncErrorsResponse>;
    /**
     * Graduates an experiment to a full campaign.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [ExperimentError]()
     *   [HeaderError]()
     *   [InternalError]()
     *   [MutateError]()
     *   [QuotaError]()
     *   [RequestError]()
     *
     * @generated from protobuf rpc: GraduateExperiment(google.ads.googleads.v11.services.GraduateExperimentRequest) returns (google.protobuf.Empty);
     */
    graduateExperiment(input: GraduateExperimentRequest, options?: RpcOptions): UnaryCall<GraduateExperimentRequest, Empty>;
    /**
     * Schedule an experiment. The in design campaign
     * will be converted into a real campaign (called the experiment campaign)
     * that will begin serving ads if successfully created.
     *
     * The experiment is scheduled immediately with status INITIALIZING.
     * This method returns a long running operation that tracks the forking of the
     * in design campaign. If the forking fails, a list of errors can be retrieved
     * using the ListExperimentAsyncErrors method. The operation's
     * metadata will be a string containing the resource name of the created
     * experiment.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [ExperimentError]()
     *   [DatabaseError]()
     *   [DateError]()
     *   [DateRangeError]()
     *   [FieldError]()
     *   [HeaderError]()
     *   [InternalError]()
     *   [QuotaError]()
     *   [RangeError]()
     *   [RequestError]()
     *
     * @generated from protobuf rpc: ScheduleExperiment(google.ads.googleads.v11.services.ScheduleExperimentRequest) returns (google.longrunning.Operation);
     */
    scheduleExperiment(input: ScheduleExperimentRequest, options?: RpcOptions): UnaryCall<ScheduleExperimentRequest, Operation>;
    /**
     * Promotes the trial campaign thus applying changes in the trial campaign
     * to the base campaign.
     * This method returns a long running operation that tracks the promotion of
     * the experiment campaign. If it fails, a list of errors can be retrieved
     * using the ListExperimentAsyncErrors method. The operation's
     * metadata will be a string containing the resource name of the created
     * experiment.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [ExperimentError]()
     *   [HeaderError]()
     *   [InternalError]()
     *   [QuotaError]()
     *   [RequestError]()
     *
     * @generated from protobuf rpc: PromoteExperiment(google.ads.googleads.v11.services.PromoteExperimentRequest) returns (google.longrunning.Operation);
     */
    promoteExperiment(input: PromoteExperimentRequest, options?: RpcOptions): UnaryCall<PromoteExperimentRequest, Operation>;
}
// Proto file describing the Experiment service.

/**
 * Service to manage experiments.
 *
 * @generated from protobuf service google.ads.googleads.v11.services.ExperimentService
 */
export class ExperimentServiceClient implements IExperimentServiceClient, ServiceInfo {
    typeName = ExperimentService.typeName;
    methods = ExperimentService.methods;
    options = ExperimentService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * Creates, updates, or removes experiments. Operation statuses are returned.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [ExperimentError]()
     *   [HeaderError]()
     *   [InternalError]()
     *   [QuotaError]()
     *   [RequestError]()
     *
     * @generated from protobuf rpc: MutateExperiments(google.ads.googleads.v11.services.MutateExperimentsRequest) returns (google.ads.googleads.v11.services.MutateExperimentsResponse);
     */
    mutateExperiments(input: MutateExperimentsRequest, options?: RpcOptions): UnaryCall<MutateExperimentsRequest, MutateExperimentsResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<MutateExperimentsRequest, MutateExperimentsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Immediately ends an experiment, changing the experiment's scheduled
     * end date and without waiting for end of day. End date is updated to be the
     * time of the request.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [ExperimentError]()
     *   [HeaderError]()
     *   [InternalError]()
     *   [QuotaError]()
     *   [RequestError]()
     *
     * @generated from protobuf rpc: EndExperiment(google.ads.googleads.v11.services.EndExperimentRequest) returns (google.protobuf.Empty);
     */
    endExperiment(input: EndExperimentRequest, options?: RpcOptions): UnaryCall<EndExperimentRequest, Empty> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<EndExperimentRequest, Empty>("unary", this._transport, method, opt, input);
    }
    /**
     * Returns all errors that occurred during the last Experiment update (either
     * scheduling or promotion).
     * Supports standard list paging.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [HeaderError]()
     *   [InternalError]()
     *   [QuotaError]()
     *   [RequestError]()
     *
     * @generated from protobuf rpc: ListExperimentAsyncErrors(google.ads.googleads.v11.services.ListExperimentAsyncErrorsRequest) returns (google.ads.googleads.v11.services.ListExperimentAsyncErrorsResponse);
     */
    listExperimentAsyncErrors(input: ListExperimentAsyncErrorsRequest, options?: RpcOptions): UnaryCall<ListExperimentAsyncErrorsRequest, ListExperimentAsyncErrorsResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<ListExperimentAsyncErrorsRequest, ListExperimentAsyncErrorsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Graduates an experiment to a full campaign.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [ExperimentError]()
     *   [HeaderError]()
     *   [InternalError]()
     *   [MutateError]()
     *   [QuotaError]()
     *   [RequestError]()
     *
     * @generated from protobuf rpc: GraduateExperiment(google.ads.googleads.v11.services.GraduateExperimentRequest) returns (google.protobuf.Empty);
     */
    graduateExperiment(input: GraduateExperimentRequest, options?: RpcOptions): UnaryCall<GraduateExperimentRequest, Empty> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<GraduateExperimentRequest, Empty>("unary", this._transport, method, opt, input);
    }
    /**
     * Schedule an experiment. The in design campaign
     * will be converted into a real campaign (called the experiment campaign)
     * that will begin serving ads if successfully created.
     *
     * The experiment is scheduled immediately with status INITIALIZING.
     * This method returns a long running operation that tracks the forking of the
     * in design campaign. If the forking fails, a list of errors can be retrieved
     * using the ListExperimentAsyncErrors method. The operation's
     * metadata will be a string containing the resource name of the created
     * experiment.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [ExperimentError]()
     *   [DatabaseError]()
     *   [DateError]()
     *   [DateRangeError]()
     *   [FieldError]()
     *   [HeaderError]()
     *   [InternalError]()
     *   [QuotaError]()
     *   [RangeError]()
     *   [RequestError]()
     *
     * @generated from protobuf rpc: ScheduleExperiment(google.ads.googleads.v11.services.ScheduleExperimentRequest) returns (google.longrunning.Operation);
     */
    scheduleExperiment(input: ScheduleExperimentRequest, options?: RpcOptions): UnaryCall<ScheduleExperimentRequest, Operation> {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept<ScheduleExperimentRequest, Operation>("unary", this._transport, method, opt, input);
    }
    /**
     * Promotes the trial campaign thus applying changes in the trial campaign
     * to the base campaign.
     * This method returns a long running operation that tracks the promotion of
     * the experiment campaign. If it fails, a list of errors can be retrieved
     * using the ListExperimentAsyncErrors method. The operation's
     * metadata will be a string containing the resource name of the created
     * experiment.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [ExperimentError]()
     *   [HeaderError]()
     *   [InternalError]()
     *   [QuotaError]()
     *   [RequestError]()
     *
     * @generated from protobuf rpc: PromoteExperiment(google.ads.googleads.v11.services.PromoteExperimentRequest) returns (google.longrunning.Operation);
     */
    promoteExperiment(input: PromoteExperimentRequest, options?: RpcOptions): UnaryCall<PromoteExperimentRequest, Operation> {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return stackIntercept<PromoteExperimentRequest, Operation>("unary", this._transport, method, opt, input);
    }
}
