// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "google/api/servicecontrol/v1/distribution.proto" (package "google.api.servicecontrol.v1", syntax proto3)
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
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Distribution_Exemplar } from "../../distribution";
/**
 * Distribution represents a frequency distribution of double-valued sample
 * points. It contains the size of the population of sample points plus
 * additional optional information:
 *
 * * the arithmetic mean of the samples
 * * the minimum and maximum of the samples
 * * the sum-squared-deviation of the samples, used to compute variance
 * * a histogram of the values of the sample points
 *
 * @generated from protobuf message google.api.servicecontrol.v1.Distribution
 */
export interface Distribution {
    /**
     * The total number of samples in the distribution. Must be >= 0.
     *
     * @generated from protobuf field: int64 count = 1;
     */
    count: bigint;
    /**
     * The arithmetic mean of the samples in the distribution. If `count` is
     * zero then this field must be zero.
     *
     * @generated from protobuf field: double mean = 2;
     */
    mean: number;
    /**
     * The minimum of the population of values. Ignored if `count` is zero.
     *
     * @generated from protobuf field: double minimum = 3;
     */
    minimum: number;
    /**
     * The maximum of the population of values. Ignored if `count` is zero.
     *
     * @generated from protobuf field: double maximum = 4;
     */
    maximum: number;
    /**
     * The sum of squared deviations from the mean:
     *   Sum[i=1..count]((x_i - mean)^2)
     * where each x_i is a sample values. If `count` is zero then this field
     * must be zero, otherwise validation of the request fails.
     *
     * @generated from protobuf field: double sum_of_squared_deviation = 5;
     */
    sumOfSquaredDeviation: number;
    /**
     * The number of samples in each histogram bucket. `bucket_counts` are
     * optional. If present, they must sum to the `count` value.
     *
     * The buckets are defined below in `bucket_option`. There are N buckets.
     * `bucket_counts[0]` is the number of samples in the underflow bucket.
     * `bucket_counts[1]` to `bucket_counts[N-1]` are the numbers of samples
     * in each of the finite buckets. And `bucket_counts[N] is the number
     * of samples in the overflow bucket. See the comments of `bucket_option`
     * below for more details.
     *
     * Any suffix of trailing zeros may be omitted.
     *
     * @generated from protobuf field: repeated int64 bucket_counts = 6;
     */
    bucketCounts: bigint[];
    /**
     * @generated from protobuf oneof: bucket_option
     */
    bucketOption: {
        oneofKind: "linearBuckets";
        /**
         * Buckets with constant width.
         *
         * @generated from protobuf field: google.api.servicecontrol.v1.Distribution.LinearBuckets linear_buckets = 7;
         */
        linearBuckets: Distribution_LinearBuckets;
    } | {
        oneofKind: "exponentialBuckets";
        /**
         * Buckets with exponentially growing width.
         *
         * @generated from protobuf field: google.api.servicecontrol.v1.Distribution.ExponentialBuckets exponential_buckets = 8;
         */
        exponentialBuckets: Distribution_ExponentialBuckets;
    } | {
        oneofKind: "explicitBuckets";
        /**
         * Buckets with arbitrary user-provided width.
         *
         * @generated from protobuf field: google.api.servicecontrol.v1.Distribution.ExplicitBuckets explicit_buckets = 9;
         */
        explicitBuckets: Distribution_ExplicitBuckets;
    } | {
        oneofKind: undefined;
    };
    /**
     * Example points. Must be in increasing order of `value` field.
     *
     * @generated from protobuf field: repeated google.api.Distribution.Exemplar exemplars = 10;
     */
    exemplars: Distribution_Exemplar[];
}
/**
 * Describing buckets with constant width.
 *
 * @generated from protobuf message google.api.servicecontrol.v1.Distribution.LinearBuckets
 */
export interface Distribution_LinearBuckets {
    /**
     * The number of finite buckets. With the underflow and overflow buckets,
     * the total number of buckets is `num_finite_buckets` + 2.
     * See comments on `bucket_options` for details.
     *
     * @generated from protobuf field: int32 num_finite_buckets = 1;
     */
    numFiniteBuckets: number;
    /**
     * The i'th linear bucket covers the interval
     *   [offset + (i-1) * width, offset + i * width)
     * where i ranges from 1 to num_finite_buckets, inclusive.
     * Must be strictly positive.
     *
     * @generated from protobuf field: double width = 2;
     */
    width: number;
    /**
     * The i'th linear bucket covers the interval
     *   [offset + (i-1) * width, offset + i * width)
     * where i ranges from 1 to num_finite_buckets, inclusive.
     *
     * @generated from protobuf field: double offset = 3;
     */
    offset: number;
}
/**
 * Describing buckets with exponentially growing width.
 *
 * @generated from protobuf message google.api.servicecontrol.v1.Distribution.ExponentialBuckets
 */
export interface Distribution_ExponentialBuckets {
    /**
     * The number of finite buckets. With the underflow and overflow buckets,
     * the total number of buckets is `num_finite_buckets` + 2.
     * See comments on `bucket_options` for details.
     *
     * @generated from protobuf field: int32 num_finite_buckets = 1;
     */
    numFiniteBuckets: number;
    /**
     * The i'th exponential bucket covers the interval
     *   [scale * growth_factor^(i-1), scale * growth_factor^i)
     * where i ranges from 1 to num_finite_buckets inclusive.
     * Must be larger than 1.0.
     *
     * @generated from protobuf field: double growth_factor = 2;
     */
    growthFactor: number;
    /**
     * The i'th exponential bucket covers the interval
     *   [scale * growth_factor^(i-1), scale * growth_factor^i)
     * where i ranges from 1 to num_finite_buckets inclusive.
     * Must be > 0.
     *
     * @generated from protobuf field: double scale = 3;
     */
    scale: number;
}
/**
 * Describing buckets with arbitrary user-provided width.
 *
 * @generated from protobuf message google.api.servicecontrol.v1.Distribution.ExplicitBuckets
 */
export interface Distribution_ExplicitBuckets {
    /**
     * 'bound' is a list of strictly increasing boundaries between
     * buckets. Note that a list of length N-1 defines N buckets because
     * of fenceposting. See comments on `bucket_options` for details.
     *
     * The i'th finite bucket covers the interval
     *   [bound[i-1], bound[i])
     * where i ranges from 1 to bound_size() - 1. Note that there are no
     * finite buckets at all if 'bound' only contains a single element; in
     * that special case the single bound defines the boundary between the
     * underflow and overflow buckets.
     *
     * bucket number                   lower bound    upper bound
     *  i == 0 (underflow)              -inf           bound[i]
     *  0 < i < bound_size()            bound[i-1]     bound[i]
     *  i == bound_size() (overflow)    bound[i-1]     +inf
     *
     * @generated from protobuf field: repeated double bounds = 1;
     */
    bounds: number[];
}
// @generated message type with reflection information, may provide speed optimized methods
class Distribution$Type extends MessageType<Distribution> {
    constructor() {
        super("google.api.servicecontrol.v1.Distribution", [
            { no: 1, name: "count", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "mean", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ },
            { no: 3, name: "minimum", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ },
            { no: 4, name: "maximum", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ },
            { no: 5, name: "sum_of_squared_deviation", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ },
            { no: 6, name: "bucket_counts", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 7, name: "linear_buckets", kind: "message", oneof: "bucketOption", T: () => Distribution_LinearBuckets },
            { no: 8, name: "exponential_buckets", kind: "message", oneof: "bucketOption", T: () => Distribution_ExponentialBuckets },
            { no: 9, name: "explicit_buckets", kind: "message", oneof: "bucketOption", T: () => Distribution_ExplicitBuckets },
            { no: 10, name: "exemplars", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Distribution_Exemplar }
        ]);
    }
    create(value?: PartialMessage<Distribution>): Distribution {
        const message = { count: 0n, mean: 0, minimum: 0, maximum: 0, sumOfSquaredDeviation: 0, bucketCounts: [], bucketOption: { oneofKind: undefined }, exemplars: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Distribution>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Distribution): Distribution {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int64 count */ 1:
                    message.count = reader.int64().toBigInt();
                    break;
                case /* double mean */ 2:
                    message.mean = reader.double();
                    break;
                case /* double minimum */ 3:
                    message.minimum = reader.double();
                    break;
                case /* double maximum */ 4:
                    message.maximum = reader.double();
                    break;
                case /* double sum_of_squared_deviation */ 5:
                    message.sumOfSquaredDeviation = reader.double();
                    break;
                case /* repeated int64 bucket_counts */ 6:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.bucketCounts.push(reader.int64().toBigInt());
                    else
                        message.bucketCounts.push(reader.int64().toBigInt());
                    break;
                case /* google.api.servicecontrol.v1.Distribution.LinearBuckets linear_buckets */ 7:
                    message.bucketOption = {
                        oneofKind: "linearBuckets",
                        linearBuckets: Distribution_LinearBuckets.internalBinaryRead(reader, reader.uint32(), options, (message.bucketOption as any).linearBuckets)
                    };
                    break;
                case /* google.api.servicecontrol.v1.Distribution.ExponentialBuckets exponential_buckets */ 8:
                    message.bucketOption = {
                        oneofKind: "exponentialBuckets",
                        exponentialBuckets: Distribution_ExponentialBuckets.internalBinaryRead(reader, reader.uint32(), options, (message.bucketOption as any).exponentialBuckets)
                    };
                    break;
                case /* google.api.servicecontrol.v1.Distribution.ExplicitBuckets explicit_buckets */ 9:
                    message.bucketOption = {
                        oneofKind: "explicitBuckets",
                        explicitBuckets: Distribution_ExplicitBuckets.internalBinaryRead(reader, reader.uint32(), options, (message.bucketOption as any).explicitBuckets)
                    };
                    break;
                case /* repeated google.api.Distribution.Exemplar exemplars */ 10:
                    message.exemplars.push(Distribution_Exemplar.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Distribution, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int64 count = 1; */
        if (message.count !== 0n)
            writer.tag(1, WireType.Varint).int64(message.count);
        /* double mean = 2; */
        if (message.mean !== 0)
            writer.tag(2, WireType.Bit64).double(message.mean);
        /* double minimum = 3; */
        if (message.minimum !== 0)
            writer.tag(3, WireType.Bit64).double(message.minimum);
        /* double maximum = 4; */
        if (message.maximum !== 0)
            writer.tag(4, WireType.Bit64).double(message.maximum);
        /* double sum_of_squared_deviation = 5; */
        if (message.sumOfSquaredDeviation !== 0)
            writer.tag(5, WireType.Bit64).double(message.sumOfSquaredDeviation);
        /* repeated int64 bucket_counts = 6; */
        if (message.bucketCounts.length) {
            writer.tag(6, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.bucketCounts.length; i++)
                writer.int64(message.bucketCounts[i]);
            writer.join();
        }
        /* google.api.servicecontrol.v1.Distribution.LinearBuckets linear_buckets = 7; */
        if (message.bucketOption.oneofKind === "linearBuckets")
            Distribution_LinearBuckets.internalBinaryWrite(message.bucketOption.linearBuckets, writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        /* google.api.servicecontrol.v1.Distribution.ExponentialBuckets exponential_buckets = 8; */
        if (message.bucketOption.oneofKind === "exponentialBuckets")
            Distribution_ExponentialBuckets.internalBinaryWrite(message.bucketOption.exponentialBuckets, writer.tag(8, WireType.LengthDelimited).fork(), options).join();
        /* google.api.servicecontrol.v1.Distribution.ExplicitBuckets explicit_buckets = 9; */
        if (message.bucketOption.oneofKind === "explicitBuckets")
            Distribution_ExplicitBuckets.internalBinaryWrite(message.bucketOption.explicitBuckets, writer.tag(9, WireType.LengthDelimited).fork(), options).join();
        /* repeated google.api.Distribution.Exemplar exemplars = 10; */
        for (let i = 0; i < message.exemplars.length; i++)
            Distribution_Exemplar.internalBinaryWrite(message.exemplars[i], writer.tag(10, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.api.servicecontrol.v1.Distribution
 */
export const Distribution = new Distribution$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Distribution_LinearBuckets$Type extends MessageType<Distribution_LinearBuckets> {
    constructor() {
        super("google.api.servicecontrol.v1.Distribution.LinearBuckets", [
            { no: 1, name: "num_finite_buckets", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "width", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ },
            { no: 3, name: "offset", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ }
        ]);
    }
    create(value?: PartialMessage<Distribution_LinearBuckets>): Distribution_LinearBuckets {
        const message = { numFiniteBuckets: 0, width: 0, offset: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Distribution_LinearBuckets>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Distribution_LinearBuckets): Distribution_LinearBuckets {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 num_finite_buckets */ 1:
                    message.numFiniteBuckets = reader.int32();
                    break;
                case /* double width */ 2:
                    message.width = reader.double();
                    break;
                case /* double offset */ 3:
                    message.offset = reader.double();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Distribution_LinearBuckets, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 num_finite_buckets = 1; */
        if (message.numFiniteBuckets !== 0)
            writer.tag(1, WireType.Varint).int32(message.numFiniteBuckets);
        /* double width = 2; */
        if (message.width !== 0)
            writer.tag(2, WireType.Bit64).double(message.width);
        /* double offset = 3; */
        if (message.offset !== 0)
            writer.tag(3, WireType.Bit64).double(message.offset);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.api.servicecontrol.v1.Distribution.LinearBuckets
 */
export const Distribution_LinearBuckets = new Distribution_LinearBuckets$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Distribution_ExponentialBuckets$Type extends MessageType<Distribution_ExponentialBuckets> {
    constructor() {
        super("google.api.servicecontrol.v1.Distribution.ExponentialBuckets", [
            { no: 1, name: "num_finite_buckets", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "growth_factor", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ },
            { no: 3, name: "scale", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ }
        ]);
    }
    create(value?: PartialMessage<Distribution_ExponentialBuckets>): Distribution_ExponentialBuckets {
        const message = { numFiniteBuckets: 0, growthFactor: 0, scale: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Distribution_ExponentialBuckets>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Distribution_ExponentialBuckets): Distribution_ExponentialBuckets {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 num_finite_buckets */ 1:
                    message.numFiniteBuckets = reader.int32();
                    break;
                case /* double growth_factor */ 2:
                    message.growthFactor = reader.double();
                    break;
                case /* double scale */ 3:
                    message.scale = reader.double();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Distribution_ExponentialBuckets, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 num_finite_buckets = 1; */
        if (message.numFiniteBuckets !== 0)
            writer.tag(1, WireType.Varint).int32(message.numFiniteBuckets);
        /* double growth_factor = 2; */
        if (message.growthFactor !== 0)
            writer.tag(2, WireType.Bit64).double(message.growthFactor);
        /* double scale = 3; */
        if (message.scale !== 0)
            writer.tag(3, WireType.Bit64).double(message.scale);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.api.servicecontrol.v1.Distribution.ExponentialBuckets
 */
export const Distribution_ExponentialBuckets = new Distribution_ExponentialBuckets$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Distribution_ExplicitBuckets$Type extends MessageType<Distribution_ExplicitBuckets> {
    constructor() {
        super("google.api.servicecontrol.v1.Distribution.ExplicitBuckets", [
            { no: 1, name: "bounds", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 1 /*ScalarType.DOUBLE*/ }
        ]);
    }
    create(value?: PartialMessage<Distribution_ExplicitBuckets>): Distribution_ExplicitBuckets {
        const message = { bounds: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Distribution_ExplicitBuckets>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Distribution_ExplicitBuckets): Distribution_ExplicitBuckets {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated double bounds */ 1:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.bounds.push(reader.double());
                    else
                        message.bounds.push(reader.double());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Distribution_ExplicitBuckets, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated double bounds = 1; */
        if (message.bounds.length) {
            writer.tag(1, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.bounds.length; i++)
                writer.double(message.bounds[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.api.servicecontrol.v1.Distribution.ExplicitBuckets
 */
export const Distribution_ExplicitBuckets = new Distribution_ExplicitBuckets$Type();