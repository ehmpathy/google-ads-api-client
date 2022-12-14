// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "google/api/apikeys/v2/resources.proto" (package "google.api.apikeys.v2", syntax proto3)
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
import { Timestamp } from "../../../protobuf/timestamp";
/**
 * The representation of a key managed by the API Keys API.
 *
 * @generated from protobuf message google.api.apikeys.v2.Key
 */
export interface Key {
    /**
     * Output only. The resource name of the key.
     * The `name` has the form:
     * `projects/<PROJECT_NUMBER>/locations/global/keys/<KEY_ID>`.
     * For example:
     * `projects/123456867718/locations/global/keys/b7ff1f9f-8275-410a-94dd-3855ee9b5dd2`
     *
     * NOTE: Key is a global resource; hence the only supported value for
     * location is `global`.
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * Output only. Unique id in UUID4 format.
     *
     * @generated from protobuf field: string uid = 5;
     */
    uid: string;
    /**
     * Human-readable display name of this key that you can modify.
     * The maximum length is 63 characters.
     *
     * @generated from protobuf field: string display_name = 2;
     */
    displayName: string;
    /**
     * Output only. An encrypted and signed value held by this key.
     * This field can be accessed only through the `GetKeyString` method.
     *
     * @generated from protobuf field: string key_string = 3;
     */
    keyString: string;
    /**
     * Output only. A timestamp identifying the time this key was originally
     * created.
     *
     * @generated from protobuf field: google.protobuf.Timestamp create_time = 4;
     */
    createTime?: Timestamp;
    /**
     * Output only. A timestamp identifying the time this key was last
     * updated.
     *
     * @generated from protobuf field: google.protobuf.Timestamp update_time = 6;
     */
    updateTime?: Timestamp;
    /**
     * Output only. A timestamp when this key was deleted. If the resource is not deleted,
     * this must be empty.
     *
     * @generated from protobuf field: google.protobuf.Timestamp delete_time = 7;
     */
    deleteTime?: Timestamp;
    /**
     * Annotations is an unstructured key-value map stored with a policy that
     * may be set by external tools to store and retrieve arbitrary metadata.
     * They are not queryable and should be preserved when modifying objects.
     *
     * @generated from protobuf field: map<string, string> annotations = 8;
     */
    annotations: {
        [key: string]: string;
    };
    /**
     * Key restrictions.
     *
     * @generated from protobuf field: google.api.apikeys.v2.Restrictions restrictions = 9;
     */
    restrictions?: Restrictions;
    /**
     * Output only. A checksum computed by the server based on the current value of the Key
     * resource. This may be sent on update and delete requests to ensure the
     * client has an up-to-date value before proceeding.
     * See https://google.aip.dev/154.
     *
     * @generated from protobuf field: string etag = 11;
     */
    etag: string;
}
/**
 * Describes the restrictions on the key.
 *
 * @generated from protobuf message google.api.apikeys.v2.Restrictions
 */
export interface Restrictions {
    /**
     * @generated from protobuf oneof: client_restrictions
     */
    clientRestrictions: {
        oneofKind: "browserKeyRestrictions";
        /**
         * The HTTP referrers (websites) that are allowed to use the key.
         *
         * @generated from protobuf field: google.api.apikeys.v2.BrowserKeyRestrictions browser_key_restrictions = 1;
         */
        browserKeyRestrictions: BrowserKeyRestrictions;
    } | {
        oneofKind: "serverKeyRestrictions";
        /**
         * The IP addresses of callers that are allowed to use the key.
         *
         * @generated from protobuf field: google.api.apikeys.v2.ServerKeyRestrictions server_key_restrictions = 2;
         */
        serverKeyRestrictions: ServerKeyRestrictions;
    } | {
        oneofKind: "androidKeyRestrictions";
        /**
         * The Android apps that are allowed to use the key.
         *
         * @generated from protobuf field: google.api.apikeys.v2.AndroidKeyRestrictions android_key_restrictions = 3;
         */
        androidKeyRestrictions: AndroidKeyRestrictions;
    } | {
        oneofKind: "iosKeyRestrictions";
        /**
         * The iOS apps that are allowed to use the key.
         *
         * @generated from protobuf field: google.api.apikeys.v2.IosKeyRestrictions ios_key_restrictions = 4;
         */
        iosKeyRestrictions: IosKeyRestrictions;
    } | {
        oneofKind: undefined;
    };
    /**
     * A restriction for a specific service and optionally one or
     * more specific methods. Requests are allowed if they
     * match any of these restrictions. If no restrictions are
     * specified, all targets are allowed.
     *
     * @generated from protobuf field: repeated google.api.apikeys.v2.ApiTarget api_targets = 5;
     */
    apiTargets: ApiTarget[];
}
/**
 * The HTTP referrers (websites) that are allowed to use the key.
 *
 * @generated from protobuf message google.api.apikeys.v2.BrowserKeyRestrictions
 */
export interface BrowserKeyRestrictions {
    /**
     * A list of regular expressions for the referrer URLs that are allowed
     * to make API calls with this key.
     *
     * @generated from protobuf field: repeated string allowed_referrers = 1;
     */
    allowedReferrers: string[];
}
/**
 * The IP addresses of callers that are allowed to use the key.
 *
 * @generated from protobuf message google.api.apikeys.v2.ServerKeyRestrictions
 */
export interface ServerKeyRestrictions {
    /**
     * A list of the caller IP addresses that are allowed to make API calls
     * with this key.
     *
     * @generated from protobuf field: repeated string allowed_ips = 1;
     */
    allowedIps: string[];
}
/**
 * The Android apps that are allowed to use the key.
 *
 * @generated from protobuf message google.api.apikeys.v2.AndroidKeyRestrictions
 */
export interface AndroidKeyRestrictions {
    /**
     * A list of Android applications that are allowed to make API calls with
     * this key.
     *
     * @generated from protobuf field: repeated google.api.apikeys.v2.AndroidApplication allowed_applications = 1;
     */
    allowedApplications: AndroidApplication[];
}
/**
 * Identifier of an Android application for key use.
 *
 * @generated from protobuf message google.api.apikeys.v2.AndroidApplication
 */
export interface AndroidApplication {
    /**
     * The SHA1 fingerprint of the application. For example, both sha1 formats are
     * acceptable : DA:39:A3:EE:5E:6B:4B:0D:32:55:BF:EF:95:60:18:90:AF:D8:07:09 or
     * DA39A3EE5E6B4B0D3255BFEF95601890AFD80709.
     * Output format is the latter.
     *
     * @generated from protobuf field: string sha1_fingerprint = 1;
     */
    sha1Fingerprint: string;
    /**
     * The package name of the application.
     *
     * @generated from protobuf field: string package_name = 2;
     */
    packageName: string;
}
/**
 * The iOS apps that are allowed to use the key.
 *
 * @generated from protobuf message google.api.apikeys.v2.IosKeyRestrictions
 */
export interface IosKeyRestrictions {
    /**
     * A list of bundle IDs that are allowed when making API calls with this key.
     *
     * @generated from protobuf field: repeated string allowed_bundle_ids = 1;
     */
    allowedBundleIds: string[];
}
/**
 * A restriction for a specific service and optionally one or multiple
 * specific methods. Both fields are case insensitive.
 *
 * @generated from protobuf message google.api.apikeys.v2.ApiTarget
 */
export interface ApiTarget {
    /**
     * The service for this restriction. It should be the canonical
     * service name, for example: `translate.googleapis.com`.
     * You can use [`gcloud services list`](/sdk/gcloud/reference/services/list)
     * to get a list of services that are enabled in the project.
     *
     * @generated from protobuf field: string service = 1;
     */
    service: string;
    /**
     * Optional. List of one or more methods that can be called.
     * If empty, all methods for the service are allowed. A wildcard
     * (*) can be used as the last symbol.
     * Valid examples:
     *   `google.cloud.translate.v2.TranslateService.GetSupportedLanguage`
     *   `TranslateText`
     *   `Get*`
     *   `translate.googleapis.com.Get*`
     *
     * @generated from protobuf field: repeated string methods = 2;
     */
    methods: string[];
}
// @generated message type with reflection information, may provide speed optimized methods
class Key$Type extends MessageType<Key> {
    constructor() {
        super("google.api.apikeys.v2.Key", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 5, name: "uid", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 2, name: "display_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "key_string", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 4, name: "create_time", kind: "message", T: () => Timestamp, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 6, name: "update_time", kind: "message", T: () => Timestamp, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 7, name: "delete_time", kind: "message", T: () => Timestamp, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 8, name: "annotations", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "scalar", T: 9 /*ScalarType.STRING*/ } },
            { no: 9, name: "restrictions", kind: "message", T: () => Restrictions },
            { no: 11, name: "etag", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } }
        ], { "google.api.resource": { type: "apikeys.googleapis.com/Key", pattern: ["projects/{project}/locations/{location}/keys/{key}"], plural: "keys", singular: "key", style: ["DECLARATIVE_FRIENDLY"] } });
    }
    create(value?: PartialMessage<Key>): Key {
        const message = { name: "", uid: "", displayName: "", keyString: "", annotations: {}, etag: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Key>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Key): Key {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string name */ 1:
                    message.name = reader.string();
                    break;
                case /* string uid */ 5:
                    message.uid = reader.string();
                    break;
                case /* string display_name */ 2:
                    message.displayName = reader.string();
                    break;
                case /* string key_string */ 3:
                    message.keyString = reader.string();
                    break;
                case /* google.protobuf.Timestamp create_time */ 4:
                    message.createTime = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.createTime);
                    break;
                case /* google.protobuf.Timestamp update_time */ 6:
                    message.updateTime = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.updateTime);
                    break;
                case /* google.protobuf.Timestamp delete_time */ 7:
                    message.deleteTime = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.deleteTime);
                    break;
                case /* map<string, string> annotations */ 8:
                    this.binaryReadMap8(message.annotations, reader, options);
                    break;
                case /* google.api.apikeys.v2.Restrictions restrictions */ 9:
                    message.restrictions = Restrictions.internalBinaryRead(reader, reader.uint32(), options, message.restrictions);
                    break;
                case /* string etag */ 11:
                    message.etag = reader.string();
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
    private binaryReadMap8(map: Key["annotations"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof Key["annotations"] | undefined, val: Key["annotations"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.string();
                    break;
                case 2:
                    val = reader.string();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field google.api.apikeys.v2.Key.annotations");
            }
        }
        map[key ?? ""] = val ?? "";
    }
    internalBinaryWrite(message: Key, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string name = 1; */
        if (message.name !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.name);
        /* string uid = 5; */
        if (message.uid !== "")
            writer.tag(5, WireType.LengthDelimited).string(message.uid);
        /* string display_name = 2; */
        if (message.displayName !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.displayName);
        /* string key_string = 3; */
        if (message.keyString !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.keyString);
        /* google.protobuf.Timestamp create_time = 4; */
        if (message.createTime)
            Timestamp.internalBinaryWrite(message.createTime, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Timestamp update_time = 6; */
        if (message.updateTime)
            Timestamp.internalBinaryWrite(message.updateTime, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Timestamp delete_time = 7; */
        if (message.deleteTime)
            Timestamp.internalBinaryWrite(message.deleteTime, writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        /* map<string, string> annotations = 8; */
        for (let k of Object.keys(message.annotations))
            writer.tag(8, WireType.LengthDelimited).fork().tag(1, WireType.LengthDelimited).string(k).tag(2, WireType.LengthDelimited).string(message.annotations[k]).join();
        /* google.api.apikeys.v2.Restrictions restrictions = 9; */
        if (message.restrictions)
            Restrictions.internalBinaryWrite(message.restrictions, writer.tag(9, WireType.LengthDelimited).fork(), options).join();
        /* string etag = 11; */
        if (message.etag !== "")
            writer.tag(11, WireType.LengthDelimited).string(message.etag);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.api.apikeys.v2.Key
 */
export const Key = new Key$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Restrictions$Type extends MessageType<Restrictions> {
    constructor() {
        super("google.api.apikeys.v2.Restrictions", [
            { no: 1, name: "browser_key_restrictions", kind: "message", oneof: "clientRestrictions", T: () => BrowserKeyRestrictions },
            { no: 2, name: "server_key_restrictions", kind: "message", oneof: "clientRestrictions", T: () => ServerKeyRestrictions },
            { no: 3, name: "android_key_restrictions", kind: "message", oneof: "clientRestrictions", T: () => AndroidKeyRestrictions },
            { no: 4, name: "ios_key_restrictions", kind: "message", oneof: "clientRestrictions", T: () => IosKeyRestrictions },
            { no: 5, name: "api_targets", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ApiTarget }
        ]);
    }
    create(value?: PartialMessage<Restrictions>): Restrictions {
        const message = { clientRestrictions: { oneofKind: undefined }, apiTargets: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Restrictions>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Restrictions): Restrictions {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.api.apikeys.v2.BrowserKeyRestrictions browser_key_restrictions */ 1:
                    message.clientRestrictions = {
                        oneofKind: "browserKeyRestrictions",
                        browserKeyRestrictions: BrowserKeyRestrictions.internalBinaryRead(reader, reader.uint32(), options, (message.clientRestrictions as any).browserKeyRestrictions)
                    };
                    break;
                case /* google.api.apikeys.v2.ServerKeyRestrictions server_key_restrictions */ 2:
                    message.clientRestrictions = {
                        oneofKind: "serverKeyRestrictions",
                        serverKeyRestrictions: ServerKeyRestrictions.internalBinaryRead(reader, reader.uint32(), options, (message.clientRestrictions as any).serverKeyRestrictions)
                    };
                    break;
                case /* google.api.apikeys.v2.AndroidKeyRestrictions android_key_restrictions */ 3:
                    message.clientRestrictions = {
                        oneofKind: "androidKeyRestrictions",
                        androidKeyRestrictions: AndroidKeyRestrictions.internalBinaryRead(reader, reader.uint32(), options, (message.clientRestrictions as any).androidKeyRestrictions)
                    };
                    break;
                case /* google.api.apikeys.v2.IosKeyRestrictions ios_key_restrictions */ 4:
                    message.clientRestrictions = {
                        oneofKind: "iosKeyRestrictions",
                        iosKeyRestrictions: IosKeyRestrictions.internalBinaryRead(reader, reader.uint32(), options, (message.clientRestrictions as any).iosKeyRestrictions)
                    };
                    break;
                case /* repeated google.api.apikeys.v2.ApiTarget api_targets */ 5:
                    message.apiTargets.push(ApiTarget.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: Restrictions, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* google.api.apikeys.v2.BrowserKeyRestrictions browser_key_restrictions = 1; */
        if (message.clientRestrictions.oneofKind === "browserKeyRestrictions")
            BrowserKeyRestrictions.internalBinaryWrite(message.clientRestrictions.browserKeyRestrictions, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* google.api.apikeys.v2.ServerKeyRestrictions server_key_restrictions = 2; */
        if (message.clientRestrictions.oneofKind === "serverKeyRestrictions")
            ServerKeyRestrictions.internalBinaryWrite(message.clientRestrictions.serverKeyRestrictions, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* google.api.apikeys.v2.AndroidKeyRestrictions android_key_restrictions = 3; */
        if (message.clientRestrictions.oneofKind === "androidKeyRestrictions")
            AndroidKeyRestrictions.internalBinaryWrite(message.clientRestrictions.androidKeyRestrictions, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* google.api.apikeys.v2.IosKeyRestrictions ios_key_restrictions = 4; */
        if (message.clientRestrictions.oneofKind === "iosKeyRestrictions")
            IosKeyRestrictions.internalBinaryWrite(message.clientRestrictions.iosKeyRestrictions, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* repeated google.api.apikeys.v2.ApiTarget api_targets = 5; */
        for (let i = 0; i < message.apiTargets.length; i++)
            ApiTarget.internalBinaryWrite(message.apiTargets[i], writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.api.apikeys.v2.Restrictions
 */
export const Restrictions = new Restrictions$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BrowserKeyRestrictions$Type extends MessageType<BrowserKeyRestrictions> {
    constructor() {
        super("google.api.apikeys.v2.BrowserKeyRestrictions", [
            { no: 1, name: "allowed_referrers", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<BrowserKeyRestrictions>): BrowserKeyRestrictions {
        const message = { allowedReferrers: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<BrowserKeyRestrictions>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BrowserKeyRestrictions): BrowserKeyRestrictions {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated string allowed_referrers */ 1:
                    message.allowedReferrers.push(reader.string());
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
    internalBinaryWrite(message: BrowserKeyRestrictions, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated string allowed_referrers = 1; */
        for (let i = 0; i < message.allowedReferrers.length; i++)
            writer.tag(1, WireType.LengthDelimited).string(message.allowedReferrers[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.api.apikeys.v2.BrowserKeyRestrictions
 */
export const BrowserKeyRestrictions = new BrowserKeyRestrictions$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ServerKeyRestrictions$Type extends MessageType<ServerKeyRestrictions> {
    constructor() {
        super("google.api.apikeys.v2.ServerKeyRestrictions", [
            { no: 1, name: "allowed_ips", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<ServerKeyRestrictions>): ServerKeyRestrictions {
        const message = { allowedIps: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ServerKeyRestrictions>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ServerKeyRestrictions): ServerKeyRestrictions {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated string allowed_ips */ 1:
                    message.allowedIps.push(reader.string());
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
    internalBinaryWrite(message: ServerKeyRestrictions, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated string allowed_ips = 1; */
        for (let i = 0; i < message.allowedIps.length; i++)
            writer.tag(1, WireType.LengthDelimited).string(message.allowedIps[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.api.apikeys.v2.ServerKeyRestrictions
 */
export const ServerKeyRestrictions = new ServerKeyRestrictions$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AndroidKeyRestrictions$Type extends MessageType<AndroidKeyRestrictions> {
    constructor() {
        super("google.api.apikeys.v2.AndroidKeyRestrictions", [
            { no: 1, name: "allowed_applications", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => AndroidApplication }
        ]);
    }
    create(value?: PartialMessage<AndroidKeyRestrictions>): AndroidKeyRestrictions {
        const message = { allowedApplications: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AndroidKeyRestrictions>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AndroidKeyRestrictions): AndroidKeyRestrictions {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated google.api.apikeys.v2.AndroidApplication allowed_applications */ 1:
                    message.allowedApplications.push(AndroidApplication.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: AndroidKeyRestrictions, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated google.api.apikeys.v2.AndroidApplication allowed_applications = 1; */
        for (let i = 0; i < message.allowedApplications.length; i++)
            AndroidApplication.internalBinaryWrite(message.allowedApplications[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.api.apikeys.v2.AndroidKeyRestrictions
 */
export const AndroidKeyRestrictions = new AndroidKeyRestrictions$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AndroidApplication$Type extends MessageType<AndroidApplication> {
    constructor() {
        super("google.api.apikeys.v2.AndroidApplication", [
            { no: 1, name: "sha1_fingerprint", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "package_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<AndroidApplication>): AndroidApplication {
        const message = { sha1Fingerprint: "", packageName: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AndroidApplication>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AndroidApplication): AndroidApplication {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string sha1_fingerprint */ 1:
                    message.sha1Fingerprint = reader.string();
                    break;
                case /* string package_name */ 2:
                    message.packageName = reader.string();
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
    internalBinaryWrite(message: AndroidApplication, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string sha1_fingerprint = 1; */
        if (message.sha1Fingerprint !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.sha1Fingerprint);
        /* string package_name = 2; */
        if (message.packageName !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.packageName);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.api.apikeys.v2.AndroidApplication
 */
export const AndroidApplication = new AndroidApplication$Type();
// @generated message type with reflection information, may provide speed optimized methods
class IosKeyRestrictions$Type extends MessageType<IosKeyRestrictions> {
    constructor() {
        super("google.api.apikeys.v2.IosKeyRestrictions", [
            { no: 1, name: "allowed_bundle_ids", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<IosKeyRestrictions>): IosKeyRestrictions {
        const message = { allowedBundleIds: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<IosKeyRestrictions>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: IosKeyRestrictions): IosKeyRestrictions {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated string allowed_bundle_ids */ 1:
                    message.allowedBundleIds.push(reader.string());
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
    internalBinaryWrite(message: IosKeyRestrictions, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated string allowed_bundle_ids = 1; */
        for (let i = 0; i < message.allowedBundleIds.length; i++)
            writer.tag(1, WireType.LengthDelimited).string(message.allowedBundleIds[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.api.apikeys.v2.IosKeyRestrictions
 */
export const IosKeyRestrictions = new IosKeyRestrictions$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ApiTarget$Type extends MessageType<ApiTarget> {
    constructor() {
        super("google.api.apikeys.v2.ApiTarget", [
            { no: 1, name: "service", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "methods", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OPTIONAL"] } }
        ]);
    }
    create(value?: PartialMessage<ApiTarget>): ApiTarget {
        const message = { service: "", methods: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ApiTarget>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ApiTarget): ApiTarget {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string service */ 1:
                    message.service = reader.string();
                    break;
                case /* repeated string methods */ 2:
                    message.methods.push(reader.string());
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
    internalBinaryWrite(message: ApiTarget, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string service = 1; */
        if (message.service !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.service);
        /* repeated string methods = 2; */
        for (let i = 0; i < message.methods.length; i++)
            writer.tag(2, WireType.LengthDelimited).string(message.methods[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.api.apikeys.v2.ApiTarget
 */
export const ApiTarget = new ApiTarget$Type();
