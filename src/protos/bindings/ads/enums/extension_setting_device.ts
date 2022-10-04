// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/extension_setting_device.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
// Proto file describing extension setting device type.

/**
 * Container for enum describing extension setting device types.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.ExtensionSettingDeviceEnum
 */
export interface ExtensionSettingDeviceEnum {
}
/**
 * Possible device types for an extension setting.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.ExtensionSettingDeviceEnum.ExtensionSettingDevice
 */
export enum ExtensionSettingDeviceEnum_ExtensionSettingDevice {
    /**
     * Not specified.
     *
     * @generated from protobuf enum value: UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * The value is unknown in this version.
     *
     * @generated from protobuf enum value: UNKNOWN = 1;
     */
    UNKNOWN = 1,
    /**
     * Mobile. The extensions in the extension setting will only serve on
     * mobile devices.
     *
     * @generated from protobuf enum value: MOBILE = 2;
     */
    MOBILE = 2,
    /**
     * Desktop. The extensions in the extension setting will only serve on
     * desktop devices.
     *
     * @generated from protobuf enum value: DESKTOP = 3;
     */
    DESKTOP = 3
}
// @generated message type with reflection information, may provide speed optimized methods
class ExtensionSettingDeviceEnum$Type extends MessageType<ExtensionSettingDeviceEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.ExtensionSettingDeviceEnum", []);
    }
    create(value?: PartialMessage<ExtensionSettingDeviceEnum>): ExtensionSettingDeviceEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ExtensionSettingDeviceEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ExtensionSettingDeviceEnum): ExtensionSettingDeviceEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: ExtensionSettingDeviceEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.ExtensionSettingDeviceEnum
 */
export const ExtensionSettingDeviceEnum = new ExtensionSettingDeviceEnum$Type();