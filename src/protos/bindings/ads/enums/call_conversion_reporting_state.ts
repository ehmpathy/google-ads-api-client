// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/call_conversion_reporting_state.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
// Proto file describing call conversion reporting state.

/**
 * Container for enum describing possible data types for call conversion
 * reporting state.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.CallConversionReportingStateEnum
 */
export interface CallConversionReportingStateEnum {
}
/**
 * Possible data types for a call conversion action state.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.CallConversionReportingStateEnum.CallConversionReportingState
 */
export enum CallConversionReportingStateEnum_CallConversionReportingState {
    /**
     * Not specified.
     *
     * @generated from protobuf enum value: UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Used for return value only. Represents value unknown in this version.
     *
     * @generated from protobuf enum value: UNKNOWN = 1;
     */
    UNKNOWN = 1,
    /**
     * Call conversion action is disabled.
     *
     * @generated from protobuf enum value: DISABLED = 2;
     */
    DISABLED = 2,
    /**
     * Call conversion action will use call conversion type set at the
     * account level.
     *
     * @generated from protobuf enum value: USE_ACCOUNT_LEVEL_CALL_CONVERSION_ACTION = 3;
     */
    USE_ACCOUNT_LEVEL_CALL_CONVERSION_ACTION = 3,
    /**
     * Call conversion action will use call conversion type set at the resource
     * (call only ads/call extensions) level.
     *
     * @generated from protobuf enum value: USE_RESOURCE_LEVEL_CALL_CONVERSION_ACTION = 4;
     */
    USE_RESOURCE_LEVEL_CALL_CONVERSION_ACTION = 4
}
// @generated message type with reflection information, may provide speed optimized methods
class CallConversionReportingStateEnum$Type extends MessageType<CallConversionReportingStateEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.CallConversionReportingStateEnum", []);
    }
    create(value?: PartialMessage<CallConversionReportingStateEnum>): CallConversionReportingStateEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CallConversionReportingStateEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CallConversionReportingStateEnum): CallConversionReportingStateEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: CallConversionReportingStateEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.CallConversionReportingStateEnum
 */
export const CallConversionReportingStateEnum = new CallConversionReportingStateEnum$Type();
