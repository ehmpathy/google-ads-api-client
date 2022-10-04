// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "google/api/serviceusage/v1/serviceusage.proto" (package "google.api.serviceusage.v1", syntax proto3)
// tslint:disable
//
// Copyright 2021 Google LLC
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
import { ServiceUsage } from "./serviceusage";
import type { BatchGetServicesResponse } from "./serviceusage";
import type { BatchGetServicesRequest } from "./serviceusage";
import type { BatchEnableServicesRequest } from "./serviceusage";
import type { ListServicesResponse } from "./serviceusage";
import type { ListServicesRequest } from "./serviceusage";
import type { Service } from "./resources";
import type { GetServiceRequest } from "./serviceusage";
import type { DisableServiceRequest } from "./serviceusage";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { Operation } from "../../../longrunning/operations";
import type { EnableServiceRequest } from "./serviceusage";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Enables services that service consumers want to use on Google Cloud Platform,
 * lists the available or enabled services, or disables services that service
 * consumers no longer use.
 *
 * See [Service Usage API](https://cloud.google.com/service-usage/docs/overview)
 *
 * @generated from protobuf service google.api.serviceusage.v1.ServiceUsage
 */
export interface IServiceUsageClient {
    /**
     * Enable a service so that it can be used with a project.
     *
     * @generated from protobuf rpc: EnableService(google.api.serviceusage.v1.EnableServiceRequest) returns (google.longrunning.Operation);
     */
    enableService(input: EnableServiceRequest, options?: RpcOptions): UnaryCall<EnableServiceRequest, Operation>;
    /**
     * Disable a service so that it can no longer be used with a project.
     * This prevents unintended usage that may cause unexpected billing
     * charges or security leaks.
     *
     * It is not valid to call the disable method on a service that is not
     * currently enabled. Callers will receive a `FAILED_PRECONDITION` status if
     * the target service is not currently enabled.
     *
     * @generated from protobuf rpc: DisableService(google.api.serviceusage.v1.DisableServiceRequest) returns (google.longrunning.Operation);
     */
    disableService(input: DisableServiceRequest, options?: RpcOptions): UnaryCall<DisableServiceRequest, Operation>;
    /**
     * Returns the service configuration and enabled state for a given service.
     *
     * @generated from protobuf rpc: GetService(google.api.serviceusage.v1.GetServiceRequest) returns (google.api.serviceusage.v1.Service);
     */
    getService(input: GetServiceRequest, options?: RpcOptions): UnaryCall<GetServiceRequest, Service>;
    /**
     * List all services available to the specified project, and the current
     * state of those services with respect to the project. The list includes
     * all public services, all services for which the calling user has the
     * `servicemanagement.services.bind` permission, and all services that have
     * already been enabled on the project. The list can be filtered to
     * only include services in a specific state, for example to only include
     * services enabled on the project.
     *
     * WARNING: If you need to query enabled services frequently or across
     * an organization, you should use
     * [Cloud Asset Inventory
     * API](https://cloud.google.com/asset-inventory/docs/apis), which provides
     * higher throughput and richer filtering capability.
     *
     * @generated from protobuf rpc: ListServices(google.api.serviceusage.v1.ListServicesRequest) returns (google.api.serviceusage.v1.ListServicesResponse);
     */
    listServices(input: ListServicesRequest, options?: RpcOptions): UnaryCall<ListServicesRequest, ListServicesResponse>;
    /**
     * Enable multiple services on a project. The operation is atomic: if enabling
     * any service fails, then the entire batch fails, and no state changes occur.
     * To enable a single service, use the `EnableService` method instead.
     *
     * @generated from protobuf rpc: BatchEnableServices(google.api.serviceusage.v1.BatchEnableServicesRequest) returns (google.longrunning.Operation);
     */
    batchEnableServices(input: BatchEnableServicesRequest, options?: RpcOptions): UnaryCall<BatchEnableServicesRequest, Operation>;
    /**
     * Returns the service configurations and enabled states for a given list of
     * services.
     *
     * @generated from protobuf rpc: BatchGetServices(google.api.serviceusage.v1.BatchGetServicesRequest) returns (google.api.serviceusage.v1.BatchGetServicesResponse);
     */
    batchGetServices(input: BatchGetServicesRequest, options?: RpcOptions): UnaryCall<BatchGetServicesRequest, BatchGetServicesResponse>;
}
/**
 * Enables services that service consumers want to use on Google Cloud Platform,
 * lists the available or enabled services, or disables services that service
 * consumers no longer use.
 *
 * See [Service Usage API](https://cloud.google.com/service-usage/docs/overview)
 *
 * @generated from protobuf service google.api.serviceusage.v1.ServiceUsage
 */
export class ServiceUsageClient implements IServiceUsageClient, ServiceInfo {
    typeName = ServiceUsage.typeName;
    methods = ServiceUsage.methods;
    options = ServiceUsage.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * Enable a service so that it can be used with a project.
     *
     * @generated from protobuf rpc: EnableService(google.api.serviceusage.v1.EnableServiceRequest) returns (google.longrunning.Operation);
     */
    enableService(input: EnableServiceRequest, options?: RpcOptions): UnaryCall<EnableServiceRequest, Operation> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<EnableServiceRequest, Operation>("unary", this._transport, method, opt, input);
    }
    /**
     * Disable a service so that it can no longer be used with a project.
     * This prevents unintended usage that may cause unexpected billing
     * charges or security leaks.
     *
     * It is not valid to call the disable method on a service that is not
     * currently enabled. Callers will receive a `FAILED_PRECONDITION` status if
     * the target service is not currently enabled.
     *
     * @generated from protobuf rpc: DisableService(google.api.serviceusage.v1.DisableServiceRequest) returns (google.longrunning.Operation);
     */
    disableService(input: DisableServiceRequest, options?: RpcOptions): UnaryCall<DisableServiceRequest, Operation> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<DisableServiceRequest, Operation>("unary", this._transport, method, opt, input);
    }
    /**
     * Returns the service configuration and enabled state for a given service.
     *
     * @generated from protobuf rpc: GetService(google.api.serviceusage.v1.GetServiceRequest) returns (google.api.serviceusage.v1.Service);
     */
    getService(input: GetServiceRequest, options?: RpcOptions): UnaryCall<GetServiceRequest, Service> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetServiceRequest, Service>("unary", this._transport, method, opt, input);
    }
    /**
     * List all services available to the specified project, and the current
     * state of those services with respect to the project. The list includes
     * all public services, all services for which the calling user has the
     * `servicemanagement.services.bind` permission, and all services that have
     * already been enabled on the project. The list can be filtered to
     * only include services in a specific state, for example to only include
     * services enabled on the project.
     *
     * WARNING: If you need to query enabled services frequently or across
     * an organization, you should use
     * [Cloud Asset Inventory
     * API](https://cloud.google.com/asset-inventory/docs/apis), which provides
     * higher throughput and richer filtering capability.
     *
     * @generated from protobuf rpc: ListServices(google.api.serviceusage.v1.ListServicesRequest) returns (google.api.serviceusage.v1.ListServicesResponse);
     */
    listServices(input: ListServicesRequest, options?: RpcOptions): UnaryCall<ListServicesRequest, ListServicesResponse> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<ListServicesRequest, ListServicesResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Enable multiple services on a project. The operation is atomic: if enabling
     * any service fails, then the entire batch fails, and no state changes occur.
     * To enable a single service, use the `EnableService` method instead.
     *
     * @generated from protobuf rpc: BatchEnableServices(google.api.serviceusage.v1.BatchEnableServicesRequest) returns (google.longrunning.Operation);
     */
    batchEnableServices(input: BatchEnableServicesRequest, options?: RpcOptions): UnaryCall<BatchEnableServicesRequest, Operation> {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept<BatchEnableServicesRequest, Operation>("unary", this._transport, method, opt, input);
    }
    /**
     * Returns the service configurations and enabled states for a given list of
     * services.
     *
     * @generated from protobuf rpc: BatchGetServices(google.api.serviceusage.v1.BatchGetServicesRequest) returns (google.api.serviceusage.v1.BatchGetServicesResponse);
     */
    batchGetServices(input: BatchGetServicesRequest, options?: RpcOptions): UnaryCall<BatchGetServicesRequest, BatchGetServicesResponse> {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return stackIntercept<BatchGetServicesRequest, BatchGetServicesResponse>("unary", this._transport, method, opt, input);
    }
}
