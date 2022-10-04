// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/vanity_pharma_text.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
// Proto file describing vanity pharma texts.

/**
 * The text that will be displayed in display URL of the text ad when website
 * description is the selected display mode for vanity pharma URLs.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.VanityPharmaTextEnum
 */
export interface VanityPharmaTextEnum {
}
/**
 * Enum describing possible text.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.VanityPharmaTextEnum.VanityPharmaText
 */
export enum VanityPharmaTextEnum_VanityPharmaText {
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
     * Prescription treatment website with website content in English.
     *
     * @generated from protobuf enum value: PRESCRIPTION_TREATMENT_WEBSITE_EN = 2;
     */
    PRESCRIPTION_TREATMENT_WEBSITE_EN = 2,
    /**
     * Prescription treatment website with website content in Spanish
     * (Sitio de tratamientos con receta).
     *
     * @generated from protobuf enum value: PRESCRIPTION_TREATMENT_WEBSITE_ES = 3;
     */
    PRESCRIPTION_TREATMENT_WEBSITE_ES = 3,
    /**
     * Prescription device website with website content in English.
     *
     * @generated from protobuf enum value: PRESCRIPTION_DEVICE_WEBSITE_EN = 4;
     */
    PRESCRIPTION_DEVICE_WEBSITE_EN = 4,
    /**
     * Prescription device website with website content in Spanish (Sitio de
     * dispositivos con receta).
     *
     * @generated from protobuf enum value: PRESCRIPTION_DEVICE_WEBSITE_ES = 5;
     */
    PRESCRIPTION_DEVICE_WEBSITE_ES = 5,
    /**
     * Medical device website with website content in English.
     *
     * @generated from protobuf enum value: MEDICAL_DEVICE_WEBSITE_EN = 6;
     */
    MEDICAL_DEVICE_WEBSITE_EN = 6,
    /**
     * Medical device website with website content in Spanish (Sitio de
     * dispositivos médicos).
     *
     * @generated from protobuf enum value: MEDICAL_DEVICE_WEBSITE_ES = 7;
     */
    MEDICAL_DEVICE_WEBSITE_ES = 7,
    /**
     * Preventative treatment website with website content in English.
     *
     * @generated from protobuf enum value: PREVENTATIVE_TREATMENT_WEBSITE_EN = 8;
     */
    PREVENTATIVE_TREATMENT_WEBSITE_EN = 8,
    /**
     * Preventative treatment website with website content in Spanish (Sitio de
     * tratamientos preventivos).
     *
     * @generated from protobuf enum value: PREVENTATIVE_TREATMENT_WEBSITE_ES = 9;
     */
    PREVENTATIVE_TREATMENT_WEBSITE_ES = 9,
    /**
     * Prescription contraception website with website content in English.
     *
     * @generated from protobuf enum value: PRESCRIPTION_CONTRACEPTION_WEBSITE_EN = 10;
     */
    PRESCRIPTION_CONTRACEPTION_WEBSITE_EN = 10,
    /**
     * Prescription contraception website with website content in Spanish (Sitio
     * de anticonceptivos con receta).
     *
     * @generated from protobuf enum value: PRESCRIPTION_CONTRACEPTION_WEBSITE_ES = 11;
     */
    PRESCRIPTION_CONTRACEPTION_WEBSITE_ES = 11,
    /**
     * Prescription vaccine website with website content in English.
     *
     * @generated from protobuf enum value: PRESCRIPTION_VACCINE_WEBSITE_EN = 12;
     */
    PRESCRIPTION_VACCINE_WEBSITE_EN = 12,
    /**
     * Prescription vaccine website with website content in Spanish (Sitio de
     * vacunas con receta).
     *
     * @generated from protobuf enum value: PRESCRIPTION_VACCINE_WEBSITE_ES = 13;
     */
    PRESCRIPTION_VACCINE_WEBSITE_ES = 13
}
// @generated message type with reflection information, may provide speed optimized methods
class VanityPharmaTextEnum$Type extends MessageType<VanityPharmaTextEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.VanityPharmaTextEnum", []);
    }
    create(value?: PartialMessage<VanityPharmaTextEnum>): VanityPharmaTextEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<VanityPharmaTextEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: VanityPharmaTextEnum): VanityPharmaTextEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: VanityPharmaTextEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.VanityPharmaTextEnum
 */
export const VanityPharmaTextEnum = new VanityPharmaTextEnum$Type();