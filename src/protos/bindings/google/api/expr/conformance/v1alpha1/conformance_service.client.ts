// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "google/api/expr/conformance/v1alpha1/conformance_service.proto" (package "google.api.expr.conformance.v1alpha1", syntax proto3)
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
import { ConformanceService } from "./conformance_service";
import type { EvalResponse } from "./conformance_service";
import type { EvalRequest } from "./conformance_service";
import type { CheckResponse } from "./conformance_service";
import type { CheckRequest } from "./conformance_service";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { ParseResponse } from "./conformance_service";
import type { ParseRequest } from "./conformance_service";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Access a CEL implementation from another process or machine.
 * A CEL implementation is decomposed as a parser, a static checker,
 * and an evaluator.  Every CEL implementation is expected to provide
 * a server for this API.  The API will be used for conformance testing
 * and other utilities.
 *
 * @generated from protobuf service google.api.expr.conformance.v1alpha1.ConformanceService
 */
export interface IConformanceServiceClient {
    /**
     * Transforms CEL source text into a parsed representation.
     *
     * @generated from protobuf rpc: Parse(google.api.expr.conformance.v1alpha1.ParseRequest) returns (google.api.expr.conformance.v1alpha1.ParseResponse);
     */
    parse(input: ParseRequest, options?: RpcOptions): UnaryCall<ParseRequest, ParseResponse>;
    /**
     * Runs static checks on a parsed CEL representation and return
     * an annotated representation, or a set of issues.
     *
     * @generated from protobuf rpc: Check(google.api.expr.conformance.v1alpha1.CheckRequest) returns (google.api.expr.conformance.v1alpha1.CheckResponse);
     */
    check(input: CheckRequest, options?: RpcOptions): UnaryCall<CheckRequest, CheckResponse>;
    /**
     * Evaluates a parsed or annotation CEL representation given
     * values of external bindings.
     *
     * @generated from protobuf rpc: Eval(google.api.expr.conformance.v1alpha1.EvalRequest) returns (google.api.expr.conformance.v1alpha1.EvalResponse);
     */
    eval(input: EvalRequest, options?: RpcOptions): UnaryCall<EvalRequest, EvalResponse>;
}
/**
 * Access a CEL implementation from another process or machine.
 * A CEL implementation is decomposed as a parser, a static checker,
 * and an evaluator.  Every CEL implementation is expected to provide
 * a server for this API.  The API will be used for conformance testing
 * and other utilities.
 *
 * @generated from protobuf service google.api.expr.conformance.v1alpha1.ConformanceService
 */
export class ConformanceServiceClient implements IConformanceServiceClient, ServiceInfo {
    typeName = ConformanceService.typeName;
    methods = ConformanceService.methods;
    options = ConformanceService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * Transforms CEL source text into a parsed representation.
     *
     * @generated from protobuf rpc: Parse(google.api.expr.conformance.v1alpha1.ParseRequest) returns (google.api.expr.conformance.v1alpha1.ParseResponse);
     */
    parse(input: ParseRequest, options?: RpcOptions): UnaryCall<ParseRequest, ParseResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<ParseRequest, ParseResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Runs static checks on a parsed CEL representation and return
     * an annotated representation, or a set of issues.
     *
     * @generated from protobuf rpc: Check(google.api.expr.conformance.v1alpha1.CheckRequest) returns (google.api.expr.conformance.v1alpha1.CheckResponse);
     */
    check(input: CheckRequest, options?: RpcOptions): UnaryCall<CheckRequest, CheckResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<CheckRequest, CheckResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Evaluates a parsed or annotation CEL representation given
     * values of external bindings.
     *
     * @generated from protobuf rpc: Eval(google.api.expr.conformance.v1alpha1.EvalRequest) returns (google.api.expr.conformance.v1alpha1.EvalResponse);
     */
    eval(input: EvalRequest, options?: RpcOptions): UnaryCall<EvalRequest, EvalResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<EvalRequest, EvalResponse>("unary", this._transport, method, opt, input);
    }
}
