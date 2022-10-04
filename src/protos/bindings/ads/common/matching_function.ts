// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/common/matching_function.proto" (package "google.ads.googleads.v11.common", syntax proto3)
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
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { MatchingFunctionContextTypeEnum_MatchingFunctionContextType } from "../enums/matching_function_context_type";
import { MatchingFunctionOperatorEnum_MatchingFunctionOperator } from "../enums/matching_function_operator";
// Proto file describing a matching function.

/**
 * Matching function associated with a
 * CustomerFeed, CampaignFeed, or AdGroupFeed. The matching function is used
 * to filter the set of feed items selected.
 *
 * @generated from protobuf message google.ads.googleads.v11.common.MatchingFunction
 */
export interface MatchingFunction {
    /**
     * String representation of the Function.
     *
     * Examples:
     *
     * 1. IDENTITY(true) or IDENTITY(false). All or no feed items served.
     * 2. EQUALS(CONTEXT.DEVICE,"Mobile")
     * 3. IN(FEED_ITEM_ID,{1000001,1000002,1000003})
     * 4. CONTAINS_ANY(FeedAttribute[12345678,0],{"Mars cruise","Venus cruise"})
     * 5. AND(IN(FEED_ITEM_ID,{10001,10002}),EQUALS(CONTEXT.DEVICE,"Mobile"))
     *
     * For more details, visit
     * https://developers.google.com/adwords/api/docs/guides/feed-matching-functions
     *
     * Note that because multiple strings may represent the same underlying
     * function (whitespace and single versus double quotation marks, for
     * example), the value returned may not be identical to the string sent in a
     * mutate request.
     *
     * @generated from protobuf field: optional string function_string = 5;
     */
    functionString?: string;
    /**
     * Operator for a function.
     *
     * @generated from protobuf field: google.ads.googleads.v11.enums.MatchingFunctionOperatorEnum.MatchingFunctionOperator operator = 4;
     */
    operator: MatchingFunctionOperatorEnum_MatchingFunctionOperator;
    /**
     * The operands on the left hand side of the equation. This is also the
     * operand to be used for single operand expressions such as NOT.
     *
     * @generated from protobuf field: repeated google.ads.googleads.v11.common.Operand left_operands = 2;
     */
    leftOperands: Operand[];
    /**
     * The operands on the right hand side of the equation.
     *
     * @generated from protobuf field: repeated google.ads.googleads.v11.common.Operand right_operands = 3;
     */
    rightOperands: Operand[];
}
/**
 * An operand in a matching function.
 *
 * @generated from protobuf message google.ads.googleads.v11.common.Operand
 */
export interface Operand {
    /**
     * @generated from protobuf oneof: function_argument_operand
     */
    functionArgumentOperand: {
        oneofKind: "constantOperand";
        /**
         * A constant operand in a matching function.
         *
         * @generated from protobuf field: google.ads.googleads.v11.common.Operand.ConstantOperand constant_operand = 1;
         */
        constantOperand: Operand_ConstantOperand;
    } | {
        oneofKind: "feedAttributeOperand";
        /**
         * This operand specifies a feed attribute in feed.
         *
         * @generated from protobuf field: google.ads.googleads.v11.common.Operand.FeedAttributeOperand feed_attribute_operand = 2;
         */
        feedAttributeOperand: Operand_FeedAttributeOperand;
    } | {
        oneofKind: "functionOperand";
        /**
         * A function operand in a matching function.
         * Used to represent nested functions.
         *
         * @generated from protobuf field: google.ads.googleads.v11.common.Operand.FunctionOperand function_operand = 3;
         */
        functionOperand: Operand_FunctionOperand;
    } | {
        oneofKind: "requestContextOperand";
        /**
         * An operand in a function referring to a value in the request context.
         *
         * @generated from protobuf field: google.ads.googleads.v11.common.Operand.RequestContextOperand request_context_operand = 4;
         */
        requestContextOperand: Operand_RequestContextOperand;
    } | {
        oneofKind: undefined;
    };
}
/**
 * A constant operand in a matching function.
 *
 * @generated from protobuf message google.ads.googleads.v11.common.Operand.ConstantOperand
 */
export interface Operand_ConstantOperand {
    /**
     * @generated from protobuf oneof: constant_operand_value
     */
    constantOperandValue: {
        oneofKind: "stringValue";
        /**
         * String value of the operand if it is a string type.
         *
         * @generated from protobuf field: string string_value = 5;
         */
        stringValue: string;
    } | {
        oneofKind: "longValue";
        /**
         * Int64 value of the operand if it is a int64 type.
         *
         * @generated from protobuf field: int64 long_value = 6;
         */
        longValue: bigint;
    } | {
        oneofKind: "booleanValue";
        /**
         * Boolean value of the operand if it is a boolean type.
         *
         * @generated from protobuf field: bool boolean_value = 7;
         */
        booleanValue: boolean;
    } | {
        oneofKind: "doubleValue";
        /**
         * Double value of the operand if it is a double type.
         *
         * @generated from protobuf field: double double_value = 8;
         */
        doubleValue: number;
    } | {
        oneofKind: undefined;
    };
}
/**
 * A feed attribute operand in a matching function.
 * Used to represent a feed attribute in feed.
 *
 * @generated from protobuf message google.ads.googleads.v11.common.Operand.FeedAttributeOperand
 */
export interface Operand_FeedAttributeOperand {
    /**
     * The associated feed. Required.
     *
     * @generated from protobuf field: optional int64 feed_id = 3;
     */
    feedId?: bigint;
    /**
     * Id of the referenced feed attribute. Required.
     *
     * @generated from protobuf field: optional int64 feed_attribute_id = 4;
     */
    feedAttributeId?: bigint;
}
/**
 * A function operand in a matching function.
 * Used to represent nested functions.
 *
 * @generated from protobuf message google.ads.googleads.v11.common.Operand.FunctionOperand
 */
export interface Operand_FunctionOperand {
    /**
     * The matching function held in this operand.
     *
     * @generated from protobuf field: google.ads.googleads.v11.common.MatchingFunction matching_function = 1;
     */
    matchingFunction?: MatchingFunction;
}
/**
 * An operand in a function referring to a value in the request context.
 *
 * @generated from protobuf message google.ads.googleads.v11.common.Operand.RequestContextOperand
 */
export interface Operand_RequestContextOperand {
    /**
     * Type of value to be referred in the request context.
     *
     * @generated from protobuf field: google.ads.googleads.v11.enums.MatchingFunctionContextTypeEnum.MatchingFunctionContextType context_type = 1;
     */
    contextType: MatchingFunctionContextTypeEnum_MatchingFunctionContextType;
}
// @generated message type with reflection information, may provide speed optimized methods
class MatchingFunction$Type extends MessageType<MatchingFunction> {
    constructor() {
        super("google.ads.googleads.v11.common.MatchingFunction", [
            { no: 5, name: "function_string", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "operator", kind: "enum", T: () => ["google.ads.googleads.v11.enums.MatchingFunctionOperatorEnum.MatchingFunctionOperator", MatchingFunctionOperatorEnum_MatchingFunctionOperator] },
            { no: 2, name: "left_operands", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Operand },
            { no: 3, name: "right_operands", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Operand }
        ]);
    }
    create(value?: PartialMessage<MatchingFunction>): MatchingFunction {
        const message = { operator: 0, leftOperands: [], rightOperands: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MatchingFunction>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MatchingFunction): MatchingFunction {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional string function_string */ 5:
                    message.functionString = reader.string();
                    break;
                case /* google.ads.googleads.v11.enums.MatchingFunctionOperatorEnum.MatchingFunctionOperator operator */ 4:
                    message.operator = reader.int32();
                    break;
                case /* repeated google.ads.googleads.v11.common.Operand left_operands */ 2:
                    message.leftOperands.push(Operand.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated google.ads.googleads.v11.common.Operand right_operands */ 3:
                    message.rightOperands.push(Operand.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: MatchingFunction, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional string function_string = 5; */
        if (message.functionString !== undefined)
            writer.tag(5, WireType.LengthDelimited).string(message.functionString);
        /* google.ads.googleads.v11.enums.MatchingFunctionOperatorEnum.MatchingFunctionOperator operator = 4; */
        if (message.operator !== 0)
            writer.tag(4, WireType.Varint).int32(message.operator);
        /* repeated google.ads.googleads.v11.common.Operand left_operands = 2; */
        for (let i = 0; i < message.leftOperands.length; i++)
            Operand.internalBinaryWrite(message.leftOperands[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* repeated google.ads.googleads.v11.common.Operand right_operands = 3; */
        for (let i = 0; i < message.rightOperands.length; i++)
            Operand.internalBinaryWrite(message.rightOperands[i], writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.common.MatchingFunction
 */
export const MatchingFunction = new MatchingFunction$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Operand$Type extends MessageType<Operand> {
    constructor() {
        super("google.ads.googleads.v11.common.Operand", [
            { no: 1, name: "constant_operand", kind: "message", oneof: "functionArgumentOperand", T: () => Operand_ConstantOperand },
            { no: 2, name: "feed_attribute_operand", kind: "message", oneof: "functionArgumentOperand", T: () => Operand_FeedAttributeOperand },
            { no: 3, name: "function_operand", kind: "message", oneof: "functionArgumentOperand", T: () => Operand_FunctionOperand },
            { no: 4, name: "request_context_operand", kind: "message", oneof: "functionArgumentOperand", T: () => Operand_RequestContextOperand }
        ]);
    }
    create(value?: PartialMessage<Operand>): Operand {
        const message = { functionArgumentOperand: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Operand>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Operand): Operand {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.ads.googleads.v11.common.Operand.ConstantOperand constant_operand */ 1:
                    message.functionArgumentOperand = {
                        oneofKind: "constantOperand",
                        constantOperand: Operand_ConstantOperand.internalBinaryRead(reader, reader.uint32(), options, (message.functionArgumentOperand as any).constantOperand)
                    };
                    break;
                case /* google.ads.googleads.v11.common.Operand.FeedAttributeOperand feed_attribute_operand */ 2:
                    message.functionArgumentOperand = {
                        oneofKind: "feedAttributeOperand",
                        feedAttributeOperand: Operand_FeedAttributeOperand.internalBinaryRead(reader, reader.uint32(), options, (message.functionArgumentOperand as any).feedAttributeOperand)
                    };
                    break;
                case /* google.ads.googleads.v11.common.Operand.FunctionOperand function_operand */ 3:
                    message.functionArgumentOperand = {
                        oneofKind: "functionOperand",
                        functionOperand: Operand_FunctionOperand.internalBinaryRead(reader, reader.uint32(), options, (message.functionArgumentOperand as any).functionOperand)
                    };
                    break;
                case /* google.ads.googleads.v11.common.Operand.RequestContextOperand request_context_operand */ 4:
                    message.functionArgumentOperand = {
                        oneofKind: "requestContextOperand",
                        requestContextOperand: Operand_RequestContextOperand.internalBinaryRead(reader, reader.uint32(), options, (message.functionArgumentOperand as any).requestContextOperand)
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
    internalBinaryWrite(message: Operand, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* google.ads.googleads.v11.common.Operand.ConstantOperand constant_operand = 1; */
        if (message.functionArgumentOperand.oneofKind === "constantOperand")
            Operand_ConstantOperand.internalBinaryWrite(message.functionArgumentOperand.constantOperand, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* google.ads.googleads.v11.common.Operand.FeedAttributeOperand feed_attribute_operand = 2; */
        if (message.functionArgumentOperand.oneofKind === "feedAttributeOperand")
            Operand_FeedAttributeOperand.internalBinaryWrite(message.functionArgumentOperand.feedAttributeOperand, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* google.ads.googleads.v11.common.Operand.FunctionOperand function_operand = 3; */
        if (message.functionArgumentOperand.oneofKind === "functionOperand")
            Operand_FunctionOperand.internalBinaryWrite(message.functionArgumentOperand.functionOperand, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* google.ads.googleads.v11.common.Operand.RequestContextOperand request_context_operand = 4; */
        if (message.functionArgumentOperand.oneofKind === "requestContextOperand")
            Operand_RequestContextOperand.internalBinaryWrite(message.functionArgumentOperand.requestContextOperand, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.common.Operand
 */
export const Operand = new Operand$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Operand_ConstantOperand$Type extends MessageType<Operand_ConstantOperand> {
    constructor() {
        super("google.ads.googleads.v11.common.Operand.ConstantOperand", [
            { no: 5, name: "string_value", kind: "scalar", oneof: "constantOperandValue", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "long_value", kind: "scalar", oneof: "constantOperandValue", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 7, name: "boolean_value", kind: "scalar", oneof: "constantOperandValue", T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "double_value", kind: "scalar", oneof: "constantOperandValue", T: 1 /*ScalarType.DOUBLE*/ }
        ]);
    }
    create(value?: PartialMessage<Operand_ConstantOperand>): Operand_ConstantOperand {
        const message = { constantOperandValue: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Operand_ConstantOperand>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Operand_ConstantOperand): Operand_ConstantOperand {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string string_value */ 5:
                    message.constantOperandValue = {
                        oneofKind: "stringValue",
                        stringValue: reader.string()
                    };
                    break;
                case /* int64 long_value */ 6:
                    message.constantOperandValue = {
                        oneofKind: "longValue",
                        longValue: reader.int64().toBigInt()
                    };
                    break;
                case /* bool boolean_value */ 7:
                    message.constantOperandValue = {
                        oneofKind: "booleanValue",
                        booleanValue: reader.bool()
                    };
                    break;
                case /* double double_value */ 8:
                    message.constantOperandValue = {
                        oneofKind: "doubleValue",
                        doubleValue: reader.double()
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
    internalBinaryWrite(message: Operand_ConstantOperand, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string string_value = 5; */
        if (message.constantOperandValue.oneofKind === "stringValue")
            writer.tag(5, WireType.LengthDelimited).string(message.constantOperandValue.stringValue);
        /* int64 long_value = 6; */
        if (message.constantOperandValue.oneofKind === "longValue")
            writer.tag(6, WireType.Varint).int64(message.constantOperandValue.longValue);
        /* bool boolean_value = 7; */
        if (message.constantOperandValue.oneofKind === "booleanValue")
            writer.tag(7, WireType.Varint).bool(message.constantOperandValue.booleanValue);
        /* double double_value = 8; */
        if (message.constantOperandValue.oneofKind === "doubleValue")
            writer.tag(8, WireType.Bit64).double(message.constantOperandValue.doubleValue);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.common.Operand.ConstantOperand
 */
export const Operand_ConstantOperand = new Operand_ConstantOperand$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Operand_FeedAttributeOperand$Type extends MessageType<Operand_FeedAttributeOperand> {
    constructor() {
        super("google.ads.googleads.v11.common.Operand.FeedAttributeOperand", [
            { no: 3, name: "feed_id", kind: "scalar", opt: true, T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 4, name: "feed_attribute_id", kind: "scalar", opt: true, T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<Operand_FeedAttributeOperand>): Operand_FeedAttributeOperand {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Operand_FeedAttributeOperand>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Operand_FeedAttributeOperand): Operand_FeedAttributeOperand {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional int64 feed_id */ 3:
                    message.feedId = reader.int64().toBigInt();
                    break;
                case /* optional int64 feed_attribute_id */ 4:
                    message.feedAttributeId = reader.int64().toBigInt();
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
    internalBinaryWrite(message: Operand_FeedAttributeOperand, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional int64 feed_id = 3; */
        if (message.feedId !== undefined)
            writer.tag(3, WireType.Varint).int64(message.feedId);
        /* optional int64 feed_attribute_id = 4; */
        if (message.feedAttributeId !== undefined)
            writer.tag(4, WireType.Varint).int64(message.feedAttributeId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.common.Operand.FeedAttributeOperand
 */
export const Operand_FeedAttributeOperand = new Operand_FeedAttributeOperand$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Operand_FunctionOperand$Type extends MessageType<Operand_FunctionOperand> {
    constructor() {
        super("google.ads.googleads.v11.common.Operand.FunctionOperand", [
            { no: 1, name: "matching_function", kind: "message", T: () => MatchingFunction }
        ]);
    }
    create(value?: PartialMessage<Operand_FunctionOperand>): Operand_FunctionOperand {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Operand_FunctionOperand>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Operand_FunctionOperand): Operand_FunctionOperand {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.ads.googleads.v11.common.MatchingFunction matching_function */ 1:
                    message.matchingFunction = MatchingFunction.internalBinaryRead(reader, reader.uint32(), options, message.matchingFunction);
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
    internalBinaryWrite(message: Operand_FunctionOperand, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* google.ads.googleads.v11.common.MatchingFunction matching_function = 1; */
        if (message.matchingFunction)
            MatchingFunction.internalBinaryWrite(message.matchingFunction, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.common.Operand.FunctionOperand
 */
export const Operand_FunctionOperand = new Operand_FunctionOperand$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Operand_RequestContextOperand$Type extends MessageType<Operand_RequestContextOperand> {
    constructor() {
        super("google.ads.googleads.v11.common.Operand.RequestContextOperand", [
            { no: 1, name: "context_type", kind: "enum", T: () => ["google.ads.googleads.v11.enums.MatchingFunctionContextTypeEnum.MatchingFunctionContextType", MatchingFunctionContextTypeEnum_MatchingFunctionContextType] }
        ]);
    }
    create(value?: PartialMessage<Operand_RequestContextOperand>): Operand_RequestContextOperand {
        const message = { contextType: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Operand_RequestContextOperand>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Operand_RequestContextOperand): Operand_RequestContextOperand {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.ads.googleads.v11.enums.MatchingFunctionContextTypeEnum.MatchingFunctionContextType context_type */ 1:
                    message.contextType = reader.int32();
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
    internalBinaryWrite(message: Operand_RequestContextOperand, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* google.ads.googleads.v11.enums.MatchingFunctionContextTypeEnum.MatchingFunctionContextType context_type = 1; */
        if (message.contextType !== 0)
            writer.tag(1, WireType.Varint).int32(message.contextType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.common.Operand.RequestContextOperand
 */
export const Operand_RequestContextOperand = new Operand_RequestContextOperand$Type();