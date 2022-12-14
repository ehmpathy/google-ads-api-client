// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "google/api/distribution.proto" (package "google.api", syntax proto3)
// tslint:disable
//
// Copyright 2015 Google LLC
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
import { Any } from "../protobuf/any";
import { Timestamp } from "../protobuf/timestamp";
/**
 * `Distribution` contains summary statistics for a population of values. It
 * optionally contains a histogram representing the distribution of those values
 * across a set of buckets.
 *
 * The summary statistics are the count, mean, sum of the squared deviation from
 * the mean, the minimum, and the maximum of the set of population of values.
 * The histogram is based on a sequence of buckets and gives a count of values
 * that fall into each bucket. The boundaries of the buckets are given either
 * explicitly or by formulas for buckets of fixed or exponentially increasing
 * widths.
 *
 * Although it is not forbidden, it is generally a bad idea to include
 * non-finite values (infinities or NaNs) in the population of values, as this
 * will render the `mean` and `sum_of_squared_deviation` fields meaningless.
 *
 * @generated from protobuf message google.api.Distribution
 */
export interface Distribution {
    /**
     * The number of values in the population. Must be non-negative. This value
     * must equal the sum of the values in `bucket_counts` if a histogram is
     * provided.
     *
     * @generated from protobuf field: int64 count = 1;
     */
    count: bigint;
    /**
     * The arithmetic mean of the values in the population. If `count` is zero
     * then this field must be zero.
     *
     * @generated from protobuf field: double mean = 2;
     */
    mean: number;
    /**
     * The sum of squared deviations from the mean of the values in the
     * population. For values x_i this is:
     *
     *     Sum[i=1..n]((x_i - mean)^2)
     *
     * Knuth, "The Art of Computer Programming", Vol. 2, page 232, 3rd edition
     * describes Welford's method for accumulating this sum in one pass.
     *
     * If `count` is zero then this field must be zero.
     *
     * @generated from protobuf field: double sum_of_squared_deviation = 3;
     */
    sumOfSquaredDeviation: number;
    /**
     * If specified, contains the range of the population values. The field
     * must not be present if the `count` is zero.
     *
     * @generated from protobuf field: google.api.Distribution.Range range = 4;
     */
    range?: Distribution_Range;
    /**
     * Defines the histogram bucket boundaries. If the distribution does not
     * contain a histogram, then omit this field.
     *
     * @generated from protobuf field: google.api.Distribution.BucketOptions bucket_options = 6;
     */
    bucketOptions?: Distribution_BucketOptions;
    /**
     * The number of values in each bucket of the histogram, as described in
     * `bucket_options`. If the distribution does not have a histogram, then omit
     * this field. If there is a histogram, then the sum of the values in
     * `bucket_counts` must equal the value in the `count` field of the
     * distribution.
     *
     * If present, `bucket_counts` should contain N values, where N is the number
     * of buckets specified in `bucket_options`. If you supply fewer than N
     * values, the remaining values are assumed to be 0.
     *
     * The order of the values in `bucket_counts` follows the bucket numbering
     * schemes described for the three bucket types. The first value must be the
     * count for the underflow bucket (number 0). The next N-2 values are the
     * counts for the finite buckets (number 1 through N-2). The N'th value in
     * `bucket_counts` is the count for the overflow bucket (number N-1).
     *
     * @generated from protobuf field: repeated int64 bucket_counts = 7;
     */
    bucketCounts: bigint[];
    /**
     * Must be in increasing order of `value` field.
     *
     * @generated from protobuf field: repeated google.api.Distribution.Exemplar exemplars = 10;
     */
    exemplars: Distribution_Exemplar[];
}
/**
 * The range of the population values.
 *
 * @generated from protobuf message google.api.Distribution.Range
 */
export interface Distribution_Range {
    /**
     * The minimum of the population values.
     *
     * @generated from protobuf field: double min = 1;
     */
    min: number;
    /**
     * The maximum of the population values.
     *
     * @generated from protobuf field: double max = 2;
     */
    max: number;
}
/**
 * `BucketOptions` describes the bucket boundaries used to create a histogram
 * for the distribution. The buckets can be in a linear sequence, an
 * exponential sequence, or each bucket can be specified explicitly.
 * `BucketOptions` does not include the number of values in each bucket.
 *
 * A bucket has an inclusive lower bound and exclusive upper bound for the
 * values that are counted for that bucket. The upper bound of a bucket must
 * be strictly greater than the lower bound. The sequence of N buckets for a
 * distribution consists of an underflow bucket (number 0), zero or more
 * finite buckets (number 1 through N - 2) and an overflow bucket (number N -
 * 1). The buckets are contiguous: the lower bound of bucket i (i > 0) is the
 * same as the upper bound of bucket i - 1. The buckets span the whole range
 * of finite values: lower bound of the underflow bucket is -infinity and the
 * upper bound of the overflow bucket is +infinity. The finite buckets are
 * so-called because both bounds are finite.
 *
 * @generated from protobuf message google.api.Distribution.BucketOptions
 */
export interface Distribution_BucketOptions {
    /**
     * @generated from protobuf oneof: options
     */
    options: {
        oneofKind: "linearBuckets";
        /**
         * The linear bucket.
         *
         * @generated from protobuf field: google.api.Distribution.BucketOptions.Linear linear_buckets = 1;
         */
        linearBuckets: Distribution_BucketOptions_Linear;
    } | {
        oneofKind: "exponentialBuckets";
        /**
         * The exponential buckets.
         *
         * @generated from protobuf field: google.api.Distribution.BucketOptions.Exponential exponential_buckets = 2;
         */
        exponentialBuckets: Distribution_BucketOptions_Exponential;
    } | {
        oneofKind: "explicitBuckets";
        /**
         * The explicit buckets.
         *
         * @generated from protobuf field: google.api.Distribution.BucketOptions.Explicit explicit_buckets = 3;
         */
        explicitBuckets: Distribution_BucketOptions_Explicit;
    } | {
        oneofKind: undefined;
    };
}
/**
 * Specifies a linear sequence of buckets that all have the same width
 * (except overflow and underflow). Each bucket represents a constant
 * absolute uncertainty on the specific value in the bucket.
 *
 * There are `num_finite_buckets + 2` (= N) buckets. Bucket `i` has the
 * following boundaries:
 *
 *    Upper bound (0 <= i < N-1):     offset + (width * i).
 *    Lower bound (1 <= i < N):       offset + (width * (i - 1)).
 *
 * @generated from protobuf message google.api.Distribution.BucketOptions.Linear
 */
export interface Distribution_BucketOptions_Linear {
    /**
     * Must be greater than 0.
     *
     * @generated from protobuf field: int32 num_finite_buckets = 1;
     */
    numFiniteBuckets: number;
    /**
     * Must be greater than 0.
     *
     * @generated from protobuf field: double width = 2;
     */
    width: number;
    /**
     * Lower bound of the first bucket.
     *
     * @generated from protobuf field: double offset = 3;
     */
    offset: number;
}
/**
 * Specifies an exponential sequence of buckets that have a width that is
 * proportional to the value of the lower bound. Each bucket represents a
 * constant relative uncertainty on a specific value in the bucket.
 *
 * There are `num_finite_buckets + 2` (= N) buckets. Bucket `i` has the
 * following boundaries:
 *
 *    Upper bound (0 <= i < N-1):     scale * (growth_factor ^ i).
 *    Lower bound (1 <= i < N):       scale * (growth_factor ^ (i - 1)).
 *
 * @generated from protobuf message google.api.Distribution.BucketOptions.Exponential
 */
export interface Distribution_BucketOptions_Exponential {
    /**
     * Must be greater than 0.
     *
     * @generated from protobuf field: int32 num_finite_buckets = 1;
     */
    numFiniteBuckets: number;
    /**
     * Must be greater than 1.
     *
     * @generated from protobuf field: double growth_factor = 2;
     */
    growthFactor: number;
    /**
     * Must be greater than 0.
     *
     * @generated from protobuf field: double scale = 3;
     */
    scale: number;
}
/**
 * Specifies a set of buckets with arbitrary widths.
 *
 * There are `size(bounds) + 1` (= N) buckets. Bucket `i` has the following
 * boundaries:
 *
 *    Upper bound (0 <= i < N-1):     bounds[i]
 *    Lower bound (1 <= i < N);       bounds[i - 1]
 *
 * The `bounds` field must contain at least one element. If `bounds` has
 * only one element, then there are no finite buckets, and that single
 * element is the common boundary of the overflow and underflow buckets.
 *
 * @generated from protobuf message google.api.Distribution.BucketOptions.Explicit
 */
export interface Distribution_BucketOptions_Explicit {
    /**
     * The values must be monotonically increasing.
     *
     * @generated from protobuf field: repeated double bounds = 1;
     */
    bounds: number[];
}
/**
 * Exemplars are example points that may be used to annotate aggregated
 * distribution values. They are metadata that gives information about a
 * particular value added to a Distribution bucket, such as a trace ID that
 * was active when a value was added. They may contain further information,
 * such as a example values and timestamps, origin, etc.
 *
 * @generated from protobuf message google.api.Distribution.Exemplar
 */
export interface Distribution_Exemplar {
    /**
     * Value of the exemplar point. This value determines to which bucket the
     * exemplar belongs.
     *
     * @generated from protobuf field: double value = 1;
     */
    value: number;
    /**
     * The observation (sampling) time of the above value.
     *
     * @generated from protobuf field: google.protobuf.Timestamp timestamp = 2;
     */
    timestamp?: Timestamp;
    /**
     * Contextual information about the example value. Examples are:
     *
     *   Trace: type.googleapis.com/google.monitoring.v3.SpanContext
     *
     *   Literal string: type.googleapis.com/google.protobuf.StringValue
     *
     *   Labels dropped during aggregation:
     *     type.googleapis.com/google.monitoring.v3.DroppedLabels
     *
     * There may be only a single attachment of any given message type in a
     * single exemplar, and this is enforced by the system.
     *
     * @generated from protobuf field: repeated google.protobuf.Any attachments = 3;
     */
    attachments: Any[];
}
// @generated message type with reflection information, may provide speed optimized methods
class Distribution$Type extends MessageType<Distribution> {
    constructor() {
        super("google.api.Distribution", [
            { no: 1, name: "count", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "mean", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ },
            { no: 3, name: "sum_of_squared_deviation", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ },
            { no: 4, name: "range", kind: "message", T: () => Distribution_Range },
            { no: 6, name: "bucket_options", kind: "message", T: () => Distribution_BucketOptions },
            { no: 7, name: "bucket_counts", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 10, name: "exemplars", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Distribution_Exemplar }
        ]);
    }
    create(value?: PartialMessage<Distribution>): Distribution {
        const message = { count: 0n, mean: 0, sumOfSquaredDeviation: 0, bucketCounts: [], exemplars: [] };
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
                case /* double sum_of_squared_deviation */ 3:
                    message.sumOfSquaredDeviation = reader.double();
                    break;
                case /* google.api.Distribution.Range range */ 4:
                    message.range = Distribution_Range.internalBinaryRead(reader, reader.uint32(), options, message.range);
                    break;
                case /* google.api.Distribution.BucketOptions bucket_options */ 6:
                    message.bucketOptions = Distribution_BucketOptions.internalBinaryRead(reader, reader.uint32(), options, message.bucketOptions);
                    break;
                case /* repeated int64 bucket_counts */ 7:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.bucketCounts.push(reader.int64().toBigInt());
                    else
                        message.bucketCounts.push(reader.int64().toBigInt());
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
        /* double sum_of_squared_deviation = 3; */
        if (message.sumOfSquaredDeviation !== 0)
            writer.tag(3, WireType.Bit64).double(message.sumOfSquaredDeviation);
        /* google.api.Distribution.Range range = 4; */
        if (message.range)
            Distribution_Range.internalBinaryWrite(message.range, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* google.api.Distribution.BucketOptions bucket_options = 6; */
        if (message.bucketOptions)
            Distribution_BucketOptions.internalBinaryWrite(message.bucketOptions, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* repeated int64 bucket_counts = 7; */
        if (message.bucketCounts.length) {
            writer.tag(7, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.bucketCounts.length; i++)
                writer.int64(message.bucketCounts[i]);
            writer.join();
        }
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
 * @generated MessageType for protobuf message google.api.Distribution
 */
export const Distribution = new Distribution$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Distribution_Range$Type extends MessageType<Distribution_Range> {
    constructor() {
        super("google.api.Distribution.Range", [
            { no: 1, name: "min", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ },
            { no: 2, name: "max", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ }
        ]);
    }
    create(value?: PartialMessage<Distribution_Range>): Distribution_Range {
        const message = { min: 0, max: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Distribution_Range>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Distribution_Range): Distribution_Range {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* double min */ 1:
                    message.min = reader.double();
                    break;
                case /* double max */ 2:
                    message.max = reader.double();
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
    internalBinaryWrite(message: Distribution_Range, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* double min = 1; */
        if (message.min !== 0)
            writer.tag(1, WireType.Bit64).double(message.min);
        /* double max = 2; */
        if (message.max !== 0)
            writer.tag(2, WireType.Bit64).double(message.max);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.api.Distribution.Range
 */
export const Distribution_Range = new Distribution_Range$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Distribution_BucketOptions$Type extends MessageType<Distribution_BucketOptions> {
    constructor() {
        super("google.api.Distribution.BucketOptions", [
            { no: 1, name: "linear_buckets", kind: "message", oneof: "options", T: () => Distribution_BucketOptions_Linear },
            { no: 2, name: "exponential_buckets", kind: "message", oneof: "options", T: () => Distribution_BucketOptions_Exponential },
            { no: 3, name: "explicit_buckets", kind: "message", oneof: "options", T: () => Distribution_BucketOptions_Explicit }
        ]);
    }
    create(value?: PartialMessage<Distribution_BucketOptions>): Distribution_BucketOptions {
        const message = { options: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Distribution_BucketOptions>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Distribution_BucketOptions): Distribution_BucketOptions {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.api.Distribution.BucketOptions.Linear linear_buckets */ 1:
                    message.options = {
                        oneofKind: "linearBuckets",
                        linearBuckets: Distribution_BucketOptions_Linear.internalBinaryRead(reader, reader.uint32(), options, (message.options as any).linearBuckets)
                    };
                    break;
                case /* google.api.Distribution.BucketOptions.Exponential exponential_buckets */ 2:
                    message.options = {
                        oneofKind: "exponentialBuckets",
                        exponentialBuckets: Distribution_BucketOptions_Exponential.internalBinaryRead(reader, reader.uint32(), options, (message.options as any).exponentialBuckets)
                    };
                    break;
                case /* google.api.Distribution.BucketOptions.Explicit explicit_buckets */ 3:
                    message.options = {
                        oneofKind: "explicitBuckets",
                        explicitBuckets: Distribution_BucketOptions_Explicit.internalBinaryRead(reader, reader.uint32(), options, (message.options as any).explicitBuckets)
                    };
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
    internalBinaryWrite(message: Distribution_BucketOptions, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* google.api.Distribution.BucketOptions.Linear linear_buckets = 1; */
        if (message.options.oneofKind === "linearBuckets")
            Distribution_BucketOptions_Linear.internalBinaryWrite(message.options.linearBuckets, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* google.api.Distribution.BucketOptions.Exponential exponential_buckets = 2; */
        if (message.options.oneofKind === "exponentialBuckets")
            Distribution_BucketOptions_Exponential.internalBinaryWrite(message.options.exponentialBuckets, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* google.api.Distribution.BucketOptions.Explicit explicit_buckets = 3; */
        if (message.options.oneofKind === "explicitBuckets")
            Distribution_BucketOptions_Explicit.internalBinaryWrite(message.options.explicitBuckets, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.api.Distribution.BucketOptions
 */
export const Distribution_BucketOptions = new Distribution_BucketOptions$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Distribution_BucketOptions_Linear$Type extends MessageType<Distribution_BucketOptions_Linear> {
    constructor() {
        super("google.api.Distribution.BucketOptions.Linear", [
            { no: 1, name: "num_finite_buckets", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "width", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ },
            { no: 3, name: "offset", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ }
        ]);
    }
    create(value?: PartialMessage<Distribution_BucketOptions_Linear>): Distribution_BucketOptions_Linear {
        const message = { numFiniteBuckets: 0, width: 0, offset: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Distribution_BucketOptions_Linear>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Distribution_BucketOptions_Linear): Distribution_BucketOptions_Linear {
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
    internalBinaryWrite(message: Distribution_BucketOptions_Linear, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
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
 * @generated MessageType for protobuf message google.api.Distribution.BucketOptions.Linear
 */
export const Distribution_BucketOptions_Linear = new Distribution_BucketOptions_Linear$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Distribution_BucketOptions_Exponential$Type extends MessageType<Distribution_BucketOptions_Exponential> {
    constructor() {
        super("google.api.Distribution.BucketOptions.Exponential", [
            { no: 1, name: "num_finite_buckets", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "growth_factor", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ },
            { no: 3, name: "scale", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ }
        ]);
    }
    create(value?: PartialMessage<Distribution_BucketOptions_Exponential>): Distribution_BucketOptions_Exponential {
        const message = { numFiniteBuckets: 0, growthFactor: 0, scale: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Distribution_BucketOptions_Exponential>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Distribution_BucketOptions_Exponential): Distribution_BucketOptions_Exponential {
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
    internalBinaryWrite(message: Distribution_BucketOptions_Exponential, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
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
 * @generated MessageType for protobuf message google.api.Distribution.BucketOptions.Exponential
 */
export const Distribution_BucketOptions_Exponential = new Distribution_BucketOptions_Exponential$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Distribution_BucketOptions_Explicit$Type extends MessageType<Distribution_BucketOptions_Explicit> {
    constructor() {
        super("google.api.Distribution.BucketOptions.Explicit", [
            { no: 1, name: "bounds", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 1 /*ScalarType.DOUBLE*/ }
        ]);
    }
    create(value?: PartialMessage<Distribution_BucketOptions_Explicit>): Distribution_BucketOptions_Explicit {
        const message = { bounds: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Distribution_BucketOptions_Explicit>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Distribution_BucketOptions_Explicit): Distribution_BucketOptions_Explicit {
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
    internalBinaryWrite(message: Distribution_BucketOptions_Explicit, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
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
 * @generated MessageType for protobuf message google.api.Distribution.BucketOptions.Explicit
 */
export const Distribution_BucketOptions_Explicit = new Distribution_BucketOptions_Explicit$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Distribution_Exemplar$Type extends MessageType<Distribution_Exemplar> {
    constructor() {
        super("google.api.Distribution.Exemplar", [
            { no: 1, name: "value", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ },
            { no: 2, name: "timestamp", kind: "message", T: () => Timestamp },
            { no: 3, name: "attachments", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Any }
        ]);
    }
    create(value?: PartialMessage<Distribution_Exemplar>): Distribution_Exemplar {
        const message = { value: 0, attachments: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Distribution_Exemplar>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Distribution_Exemplar): Distribution_Exemplar {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* double value */ 1:
                    message.value = reader.double();
                    break;
                case /* google.protobuf.Timestamp timestamp */ 2:
                    message.timestamp = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.timestamp);
                    break;
                case /* repeated google.protobuf.Any attachments */ 3:
                    message.attachments.push(Any.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: Distribution_Exemplar, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* double value = 1; */
        if (message.value !== 0)
            writer.tag(1, WireType.Bit64).double(message.value);
        /* google.protobuf.Timestamp timestamp = 2; */
        if (message.timestamp)
            Timestamp.internalBinaryWrite(message.timestamp, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* repeated google.protobuf.Any attachments = 3; */
        for (let i = 0; i < message.attachments.length; i++)
            Any.internalBinaryWrite(message.attachments[i], writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.api.Distribution.Exemplar
 */
export const Distribution_Exemplar = new Distribution_Exemplar$Type();
