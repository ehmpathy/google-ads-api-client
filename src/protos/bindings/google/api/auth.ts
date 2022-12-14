// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "google/api/auth.proto" (package "google.api", syntax proto3)
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
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * `Authentication` defines the authentication configuration for API methods
 * provided by an API service.
 *
 * Example:
 *
 *     name: calendar.googleapis.com
 *     authentication:
 *       providers:
 *       - id: google_calendar_auth
 *         jwks_uri: https://www.googleapis.com/oauth2/v1/certs
 *         issuer: https://securetoken.google.com
 *       rules:
 *       - selector: "*"
 *         requirements:
 *           provider_id: google_calendar_auth
 *       - selector: google.calendar.Delegate
 *         oauth:
 *           canonical_scopes: https://www.googleapis.com/auth/calendar.read
 *
 * @generated from protobuf message google.api.Authentication
 */
export interface Authentication {
    /**
     * A list of authentication rules that apply to individual API methods.
     *
     * **NOTE:** All service configuration rules follow "last one wins" order.
     *
     * @generated from protobuf field: repeated google.api.AuthenticationRule rules = 3;
     */
    rules: AuthenticationRule[];
    /**
     * Defines a set of authentication providers that a service supports.
     *
     * @generated from protobuf field: repeated google.api.AuthProvider providers = 4;
     */
    providers: AuthProvider[];
}
/**
 * Authentication rules for the service.
 *
 * By default, if a method has any authentication requirements, every request
 * must include a valid credential matching one of the requirements.
 * It's an error to include more than one kind of credential in a single
 * request.
 *
 * If a method doesn't have any auth requirements, request credentials will be
 * ignored.
 *
 * @generated from protobuf message google.api.AuthenticationRule
 */
export interface AuthenticationRule {
    /**
     * Selects the methods to which this rule applies.
     *
     * Refer to [selector][google.api.DocumentationRule.selector] for syntax details.
     *
     * @generated from protobuf field: string selector = 1;
     */
    selector: string;
    /**
     * The requirements for OAuth credentials.
     *
     * @generated from protobuf field: google.api.OAuthRequirements oauth = 2;
     */
    oauth?: OAuthRequirements;
    /**
     * If true, the service accepts API keys without any other credential.
     * This flag only applies to HTTP and gRPC requests.
     *
     * @generated from protobuf field: bool allow_without_credential = 5;
     */
    allowWithoutCredential: boolean;
    /**
     * Requirements for additional authentication providers.
     *
     * @generated from protobuf field: repeated google.api.AuthRequirement requirements = 7;
     */
    requirements: AuthRequirement[];
}
/**
 * Specifies a location to extract JWT from an API request.
 *
 * @generated from protobuf message google.api.JwtLocation
 */
export interface JwtLocation {
    /**
     * @generated from protobuf oneof: in
     */
    in: {
        oneofKind: "header";
        /**
         * Specifies HTTP header name to extract JWT token.
         *
         * @generated from protobuf field: string header = 1;
         */
        header: string;
    } | {
        oneofKind: "query";
        /**
         * Specifies URL query parameter name to extract JWT token.
         *
         * @generated from protobuf field: string query = 2;
         */
        query: string;
    } | {
        oneofKind: undefined;
    };
    /**
     * The value prefix. The value format is "value_prefix{token}"
     * Only applies to "in" header type. Must be empty for "in" query type.
     * If not empty, the header value has to match (case sensitive) this prefix.
     * If not matched, JWT will not be extracted. If matched, JWT will be
     * extracted after the prefix is removed.
     *
     * For example, for "Authorization: Bearer {JWT}",
     * value_prefix="Bearer " with a space at the end.
     *
     * @generated from protobuf field: string value_prefix = 3;
     */
    valuePrefix: string;
}
/**
 * Configuration for an authentication provider, including support for
 * [JSON Web Token
 * (JWT)](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32).
 *
 * @generated from protobuf message google.api.AuthProvider
 */
export interface AuthProvider {
    /**
     * The unique identifier of the auth provider. It will be referred to by
     * `AuthRequirement.provider_id`.
     *
     * Example: "bookstore_auth".
     *
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * Identifies the principal that issued the JWT. See
     * https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.1
     * Usually a URL or an email address.
     *
     * Example: https://securetoken.google.com
     * Example: 1234567-compute@developer.gserviceaccount.com
     *
     * @generated from protobuf field: string issuer = 2;
     */
    issuer: string;
    /**
     * URL of the provider's public key set to validate signature of the JWT. See
     * [OpenID
     * Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata).
     * Optional if the key set document:
     *  - can be retrieved from
     *    [OpenID
     *    Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html)
     *    of the issuer.
     *  - can be inferred from the email domain of the issuer (e.g. a Google
     *  service account).
     *
     * Example: https://www.googleapis.com/oauth2/v1/certs
     *
     * @generated from protobuf field: string jwks_uri = 3;
     */
    jwksUri: string;
    /**
     * The list of JWT
     * [audiences](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.3).
     * that are allowed to access. A JWT containing any of these audiences will
     * be accepted. When this setting is absent, JWTs with audiences:
     *   - "https://[service.name]/[google.protobuf.Api.name]"
     *   - "https://[service.name]/"
     * will be accepted.
     * For example, if no audiences are in the setting, LibraryService API will
     * accept JWTs with the following audiences:
     *   -
     *   https://library-example.googleapis.com/google.example.library.v1.LibraryService
     *   - https://library-example.googleapis.com/
     *
     * Example:
     *
     *     audiences: bookstore_android.apps.googleusercontent.com,
     *                bookstore_web.apps.googleusercontent.com
     *
     * @generated from protobuf field: string audiences = 4;
     */
    audiences: string;
    /**
     * Redirect URL if JWT token is required but not present or is expired.
     * Implement authorizationUrl of securityDefinitions in OpenAPI spec.
     *
     * @generated from protobuf field: string authorization_url = 5;
     */
    authorizationUrl: string;
    /**
     * Defines the locations to extract the JWT.
     *
     * JWT locations can be either from HTTP headers or URL query parameters.
     * The rule is that the first match wins. The checking order is: checking
     * all headers first, then URL query parameters.
     *
     * If not specified,  default to use following 3 locations:
     *    1) Authorization: Bearer
     *    2) x-goog-iap-jwt-assertion
     *    3) access_token query parameter
     *
     * Default locations can be specified as followings:
     *    jwt_locations:
     *    - header: Authorization
     *      value_prefix: "Bearer "
     *    - header: x-goog-iap-jwt-assertion
     *    - query: access_token
     *
     * @generated from protobuf field: repeated google.api.JwtLocation jwt_locations = 6;
     */
    jwtLocations: JwtLocation[];
}
/**
 * OAuth scopes are a way to define data and permissions on data. For example,
 * there are scopes defined for "Read-only access to Google Calendar" and
 * "Access to Cloud Platform". Users can consent to a scope for an application,
 * giving it permission to access that data on their behalf.
 *
 * OAuth scope specifications should be fairly coarse grained; a user will need
 * to see and understand the text description of what your scope means.
 *
 * In most cases: use one or at most two OAuth scopes for an entire family of
 * products. If your product has multiple APIs, you should probably be sharing
 * the OAuth scope across all of those APIs.
 *
 * When you need finer grained OAuth consent screens: talk with your product
 * management about how developers will use them in practice.
 *
 * Please note that even though each of the canonical scopes is enough for a
 * request to be accepted and passed to the backend, a request can still fail
 * due to the backend requiring additional scopes or permissions.
 *
 * @generated from protobuf message google.api.OAuthRequirements
 */
export interface OAuthRequirements {
    /**
     * The list of publicly documented OAuth scopes that are allowed access. An
     * OAuth token containing any of these scopes will be accepted.
     *
     * Example:
     *
     *      canonical_scopes: https://www.googleapis.com/auth/calendar,
     *                        https://www.googleapis.com/auth/calendar.read
     *
     * @generated from protobuf field: string canonical_scopes = 1;
     */
    canonicalScopes: string;
}
/**
 * User-defined authentication requirements, including support for
 * [JSON Web Token
 * (JWT)](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32).
 *
 * @generated from protobuf message google.api.AuthRequirement
 */
export interface AuthRequirement {
    /**
     * [id][google.api.AuthProvider.id] from authentication provider.
     *
     * Example:
     *
     *     provider_id: bookstore_auth
     *
     * @generated from protobuf field: string provider_id = 1;
     */
    providerId: string;
    /**
     * NOTE: This will be deprecated soon, once AuthProvider.audiences is
     * implemented and accepted in all the runtime components.
     *
     * The list of JWT
     * [audiences](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.3).
     * that are allowed to access. A JWT containing any of these audiences will
     * be accepted. When this setting is absent, only JWTs with audience
     * "https://[Service_name][google.api.Service.name]/[API_name][google.protobuf.Api.name]"
     * will be accepted. For example, if no audiences are in the setting,
     * LibraryService API will only accept JWTs with the following audience
     * "https://library-example.googleapis.com/google.example.library.v1.LibraryService".
     *
     * Example:
     *
     *     audiences: bookstore_android.apps.googleusercontent.com,
     *                bookstore_web.apps.googleusercontent.com
     *
     * @generated from protobuf field: string audiences = 2;
     */
    audiences: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class Authentication$Type extends MessageType<Authentication> {
    constructor() {
        super("google.api.Authentication", [
            { no: 3, name: "rules", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => AuthenticationRule },
            { no: 4, name: "providers", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => AuthProvider }
        ]);
    }
    create(value?: PartialMessage<Authentication>): Authentication {
        const message = { rules: [], providers: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Authentication>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Authentication): Authentication {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated google.api.AuthenticationRule rules */ 3:
                    message.rules.push(AuthenticationRule.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated google.api.AuthProvider providers */ 4:
                    message.providers.push(AuthProvider.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: Authentication, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated google.api.AuthenticationRule rules = 3; */
        for (let i = 0; i < message.rules.length; i++)
            AuthenticationRule.internalBinaryWrite(message.rules[i], writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* repeated google.api.AuthProvider providers = 4; */
        for (let i = 0; i < message.providers.length; i++)
            AuthProvider.internalBinaryWrite(message.providers[i], writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.api.Authentication
 */
export const Authentication = new Authentication$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AuthenticationRule$Type extends MessageType<AuthenticationRule> {
    constructor() {
        super("google.api.AuthenticationRule", [
            { no: 1, name: "selector", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "oauth", kind: "message", T: () => OAuthRequirements },
            { no: 5, name: "allow_without_credential", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "requirements", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => AuthRequirement }
        ]);
    }
    create(value?: PartialMessage<AuthenticationRule>): AuthenticationRule {
        const message = { selector: "", allowWithoutCredential: false, requirements: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AuthenticationRule>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AuthenticationRule): AuthenticationRule {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string selector */ 1:
                    message.selector = reader.string();
                    break;
                case /* google.api.OAuthRequirements oauth */ 2:
                    message.oauth = OAuthRequirements.internalBinaryRead(reader, reader.uint32(), options, message.oauth);
                    break;
                case /* bool allow_without_credential */ 5:
                    message.allowWithoutCredential = reader.bool();
                    break;
                case /* repeated google.api.AuthRequirement requirements */ 7:
                    message.requirements.push(AuthRequirement.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: AuthenticationRule, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string selector = 1; */
        if (message.selector !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.selector);
        /* google.api.OAuthRequirements oauth = 2; */
        if (message.oauth)
            OAuthRequirements.internalBinaryWrite(message.oauth, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* bool allow_without_credential = 5; */
        if (message.allowWithoutCredential !== false)
            writer.tag(5, WireType.Varint).bool(message.allowWithoutCredential);
        /* repeated google.api.AuthRequirement requirements = 7; */
        for (let i = 0; i < message.requirements.length; i++)
            AuthRequirement.internalBinaryWrite(message.requirements[i], writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.api.AuthenticationRule
 */
export const AuthenticationRule = new AuthenticationRule$Type();
// @generated message type with reflection information, may provide speed optimized methods
class JwtLocation$Type extends MessageType<JwtLocation> {
    constructor() {
        super("google.api.JwtLocation", [
            { no: 1, name: "header", kind: "scalar", oneof: "in", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "query", kind: "scalar", oneof: "in", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "value_prefix", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<JwtLocation>): JwtLocation {
        const message = { in: { oneofKind: undefined }, valuePrefix: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<JwtLocation>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: JwtLocation): JwtLocation {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string header */ 1:
                    message.in = {
                        oneofKind: "header",
                        header: reader.string()
                    };
                    break;
                case /* string query */ 2:
                    message.in = {
                        oneofKind: "query",
                        query: reader.string()
                    };
                    break;
                case /* string value_prefix */ 3:
                    message.valuePrefix = reader.string();
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
    internalBinaryWrite(message: JwtLocation, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string header = 1; */
        if (message.in.oneofKind === "header")
            writer.tag(1, WireType.LengthDelimited).string(message.in.header);
        /* string query = 2; */
        if (message.in.oneofKind === "query")
            writer.tag(2, WireType.LengthDelimited).string(message.in.query);
        /* string value_prefix = 3; */
        if (message.valuePrefix !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.valuePrefix);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.api.JwtLocation
 */
export const JwtLocation = new JwtLocation$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AuthProvider$Type extends MessageType<AuthProvider> {
    constructor() {
        super("google.api.AuthProvider", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "issuer", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "jwks_uri", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "audiences", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "authorization_url", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "jwt_locations", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => JwtLocation }
        ]);
    }
    create(value?: PartialMessage<AuthProvider>): AuthProvider {
        const message = { id: "", issuer: "", jwksUri: "", audiences: "", authorizationUrl: "", jwtLocations: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AuthProvider>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AuthProvider): AuthProvider {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string id */ 1:
                    message.id = reader.string();
                    break;
                case /* string issuer */ 2:
                    message.issuer = reader.string();
                    break;
                case /* string jwks_uri */ 3:
                    message.jwksUri = reader.string();
                    break;
                case /* string audiences */ 4:
                    message.audiences = reader.string();
                    break;
                case /* string authorization_url */ 5:
                    message.authorizationUrl = reader.string();
                    break;
                case /* repeated google.api.JwtLocation jwt_locations */ 6:
                    message.jwtLocations.push(JwtLocation.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: AuthProvider, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string id = 1; */
        if (message.id !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.id);
        /* string issuer = 2; */
        if (message.issuer !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.issuer);
        /* string jwks_uri = 3; */
        if (message.jwksUri !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.jwksUri);
        /* string audiences = 4; */
        if (message.audiences !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.audiences);
        /* string authorization_url = 5; */
        if (message.authorizationUrl !== "")
            writer.tag(5, WireType.LengthDelimited).string(message.authorizationUrl);
        /* repeated google.api.JwtLocation jwt_locations = 6; */
        for (let i = 0; i < message.jwtLocations.length; i++)
            JwtLocation.internalBinaryWrite(message.jwtLocations[i], writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.api.AuthProvider
 */
export const AuthProvider = new AuthProvider$Type();
// @generated message type with reflection information, may provide speed optimized methods
class OAuthRequirements$Type extends MessageType<OAuthRequirements> {
    constructor() {
        super("google.api.OAuthRequirements", [
            { no: 1, name: "canonical_scopes", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<OAuthRequirements>): OAuthRequirements {
        const message = { canonicalScopes: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<OAuthRequirements>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: OAuthRequirements): OAuthRequirements {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string canonical_scopes */ 1:
                    message.canonicalScopes = reader.string();
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
    internalBinaryWrite(message: OAuthRequirements, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string canonical_scopes = 1; */
        if (message.canonicalScopes !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.canonicalScopes);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.api.OAuthRequirements
 */
export const OAuthRequirements = new OAuthRequirements$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AuthRequirement$Type extends MessageType<AuthRequirement> {
    constructor() {
        super("google.api.AuthRequirement", [
            { no: 1, name: "provider_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "audiences", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<AuthRequirement>): AuthRequirement {
        const message = { providerId: "", audiences: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AuthRequirement>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AuthRequirement): AuthRequirement {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string provider_id */ 1:
                    message.providerId = reader.string();
                    break;
                case /* string audiences */ 2:
                    message.audiences = reader.string();
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
    internalBinaryWrite(message: AuthRequirement, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string provider_id = 1; */
        if (message.providerId !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.providerId);
        /* string audiences = 2; */
        if (message.audiences !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.audiences);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.api.AuthRequirement
 */
export const AuthRequirement = new AuthRequirement$Type();
