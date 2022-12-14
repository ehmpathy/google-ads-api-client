// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/services/user_data_service.proto" (package "google.ads.googleads.v11.services", syntax proto3)
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
import { ServiceType } from "@protobuf-ts/runtime-rpc";
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
import { UserData } from "../common/offline_user_data";
import { CustomerMatchUserListMetadata } from "../common/offline_user_data";
/**
 * Request message for [UserDataService.UploadUserData][google.ads.googleads.v11.services.UserDataService.UploadUserData]
 *
 * @generated from protobuf message google.ads.googleads.v11.services.UploadUserDataRequest
 */
export interface UploadUserDataRequest {
    /**
     * Required. The ID of the customer for which to update the user data.
     *
     * @generated from protobuf field: string customer_id = 1;
     */
    customerId: string;
    /**
     * Required. The list of operations to be done.
     *
     * @generated from protobuf field: repeated google.ads.googleads.v11.services.UserDataOperation operations = 3;
     */
    operations: UserDataOperation[];
    /**
     * @generated from protobuf oneof: metadata
     */
    metadata: {
        oneofKind: "customerMatchUserListMetadata";
        /**
         * Metadata for data updates to a Customer Match user list.
         *
         * @generated from protobuf field: google.ads.googleads.v11.common.CustomerMatchUserListMetadata customer_match_user_list_metadata = 2;
         */
        customerMatchUserListMetadata: CustomerMatchUserListMetadata;
    } | {
        oneofKind: undefined;
    };
}
/**
 * Operation to be made for the UploadUserDataRequest.
 *
 * @generated from protobuf message google.ads.googleads.v11.services.UserDataOperation
 */
export interface UserDataOperation {
    /**
     * @generated from protobuf oneof: operation
     */
    operation: {
        oneofKind: "create";
        /**
         * The list of user data to be appended to the user list.
         *
         * @generated from protobuf field: google.ads.googleads.v11.common.UserData create = 1;
         */
        create: UserData;
    } | {
        oneofKind: "remove";
        /**
         * The list of user data to be removed from the user list.
         *
         * @generated from protobuf field: google.ads.googleads.v11.common.UserData remove = 2;
         */
        remove: UserData;
    } | {
        oneofKind: undefined;
    };
}
/**
 * Response message for [UserDataService.UploadUserData][google.ads.googleads.v11.services.UserDataService.UploadUserData]
 * Uploads made through this service will not be visible under the 'Segment
 * members' section for the Customer Match List in the Google Ads UI.
 *
 * @generated from protobuf message google.ads.googleads.v11.services.UploadUserDataResponse
 */
export interface UploadUserDataResponse {
    /**
     * The date time at which the request was received by API, formatted as
     * "yyyy-mm-dd hh:mm:ss+|-hh:mm", for example, "2019-01-01 12:32:45-08:00".
     *
     * @generated from protobuf field: optional string upload_date_time = 3;
     */
    uploadDateTime?: string;
    /**
     * Number of upload data operations received by API.
     *
     * @generated from protobuf field: optional int32 received_operations_count = 4;
     */
    receivedOperationsCount?: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class UploadUserDataRequest$Type extends MessageType<UploadUserDataRequest> {
    constructor() {
        super("google.ads.googleads.v11.services.UploadUserDataRequest", [
            { no: 1, name: "customer_id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["REQUIRED"] } },
            { no: 3, name: "operations", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => UserDataOperation, options: { "google.api.field_behavior": ["REQUIRED"] } },
            { no: 2, name: "customer_match_user_list_metadata", kind: "message", oneof: "metadata", T: () => CustomerMatchUserListMetadata }
        ]);
    }
    create(value?: PartialMessage<UploadUserDataRequest>): UploadUserDataRequest {
        const message = { customerId: "", operations: [], metadata: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<UploadUserDataRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UploadUserDataRequest): UploadUserDataRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string customer_id */ 1:
                    message.customerId = reader.string();
                    break;
                case /* repeated google.ads.googleads.v11.services.UserDataOperation operations */ 3:
                    message.operations.push(UserDataOperation.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* google.ads.googleads.v11.common.CustomerMatchUserListMetadata customer_match_user_list_metadata */ 2:
                    message.metadata = {
                        oneofKind: "customerMatchUserListMetadata",
                        customerMatchUserListMetadata: CustomerMatchUserListMetadata.internalBinaryRead(reader, reader.uint32(), options, (message.metadata as any).customerMatchUserListMetadata)
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
    internalBinaryWrite(message: UploadUserDataRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string customer_id = 1; */
        if (message.customerId !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.customerId);
        /* repeated google.ads.googleads.v11.services.UserDataOperation operations = 3; */
        for (let i = 0; i < message.operations.length; i++)
            UserDataOperation.internalBinaryWrite(message.operations[i], writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* google.ads.googleads.v11.common.CustomerMatchUserListMetadata customer_match_user_list_metadata = 2; */
        if (message.metadata.oneofKind === "customerMatchUserListMetadata")
            CustomerMatchUserListMetadata.internalBinaryWrite(message.metadata.customerMatchUserListMetadata, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.services.UploadUserDataRequest
 */
export const UploadUserDataRequest = new UploadUserDataRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UserDataOperation$Type extends MessageType<UserDataOperation> {
    constructor() {
        super("google.ads.googleads.v11.services.UserDataOperation", [
            { no: 1, name: "create", kind: "message", oneof: "operation", T: () => UserData },
            { no: 2, name: "remove", kind: "message", oneof: "operation", T: () => UserData }
        ]);
    }
    create(value?: PartialMessage<UserDataOperation>): UserDataOperation {
        const message = { operation: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<UserDataOperation>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UserDataOperation): UserDataOperation {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.ads.googleads.v11.common.UserData create */ 1:
                    message.operation = {
                        oneofKind: "create",
                        create: UserData.internalBinaryRead(reader, reader.uint32(), options, (message.operation as any).create)
                    };
                    break;
                case /* google.ads.googleads.v11.common.UserData remove */ 2:
                    message.operation = {
                        oneofKind: "remove",
                        remove: UserData.internalBinaryRead(reader, reader.uint32(), options, (message.operation as any).remove)
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
    internalBinaryWrite(message: UserDataOperation, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* google.ads.googleads.v11.common.UserData create = 1; */
        if (message.operation.oneofKind === "create")
            UserData.internalBinaryWrite(message.operation.create, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* google.ads.googleads.v11.common.UserData remove = 2; */
        if (message.operation.oneofKind === "remove")
            UserData.internalBinaryWrite(message.operation.remove, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.services.UserDataOperation
 */
export const UserDataOperation = new UserDataOperation$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UploadUserDataResponse$Type extends MessageType<UploadUserDataResponse> {
    constructor() {
        super("google.ads.googleads.v11.services.UploadUserDataResponse", [
            { no: 3, name: "upload_date_time", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "received_operations_count", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<UploadUserDataResponse>): UploadUserDataResponse {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<UploadUserDataResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UploadUserDataResponse): UploadUserDataResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional string upload_date_time */ 3:
                    message.uploadDateTime = reader.string();
                    break;
                case /* optional int32 received_operations_count */ 4:
                    message.receivedOperationsCount = reader.int32();
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
    internalBinaryWrite(message: UploadUserDataResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional string upload_date_time = 3; */
        if (message.uploadDateTime !== undefined)
            writer.tag(3, WireType.LengthDelimited).string(message.uploadDateTime);
        /* optional int32 received_operations_count = 4; */
        if (message.receivedOperationsCount !== undefined)
            writer.tag(4, WireType.Varint).int32(message.receivedOperationsCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.services.UploadUserDataResponse
 */
export const UploadUserDataResponse = new UploadUserDataResponse$Type();
/**
 * @generated ServiceType for protobuf service google.ads.googleads.v11.services.UserDataService
 */
export const UserDataService = new ServiceType("google.ads.googleads.v11.services.UserDataService", [
    { name: "UploadUserData", options: { "google.api.http": { post: "/v11/customers/{customer_id=*}:uploadUserData", body: "*" } }, I: UploadUserDataRequest, O: UploadUserDataResponse }
], { "google.api.default_host": "googleads.googleapis.com", "google.api.oauth_scopes": "https://www.googleapis.com/auth/adwords" });
