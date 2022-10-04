// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "google/logging/type/log_severity.proto" (package "google.logging.type", syntax proto3)
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
/**
 * The severity of the event described in a log entry, expressed as one of the
 * standard severity levels listed below.  For your reference, the levels are
 * assigned the listed numeric values. The effect of using numeric values other
 * than those listed is undefined.
 *
 * You can filter for log entries by severity.  For example, the following
 * filter expression will match log entries with severities `INFO`, `NOTICE`,
 * and `WARNING`:
 *
 *     severity > DEBUG AND severity <= WARNING
 *
 * If you are writing log entries, you should map other severity encodings to
 * one of these standard levels. For example, you might map all of Java's FINE,
 * FINER, and FINEST levels to `LogSeverity.DEBUG`. You can preserve the
 * original severity level in the log entry payload if you wish.
 *
 * @generated from protobuf enum google.logging.type.LogSeverity
 */
export enum LogSeverity {
    /**
     * (0) The log entry has no assigned severity level.
     *
     * @generated from protobuf enum value: DEFAULT = 0;
     */
    DEFAULT = 0,
    /**
     * (100) Debug or trace information.
     *
     * @generated from protobuf enum value: DEBUG = 100;
     */
    DEBUG = 100,
    /**
     * (200) Routine information, such as ongoing status or performance.
     *
     * @generated from protobuf enum value: INFO = 200;
     */
    INFO = 200,
    /**
     * (300) Normal but significant events, such as start up, shut down, or
     * a configuration change.
     *
     * @generated from protobuf enum value: NOTICE = 300;
     */
    NOTICE = 300,
    /**
     * (400) Warning events might cause problems.
     *
     * @generated from protobuf enum value: WARNING = 400;
     */
    WARNING = 400,
    /**
     * (500) Error events are likely to cause problems.
     *
     * @generated from protobuf enum value: ERROR = 500;
     */
    ERROR = 500,
    /**
     * (600) Critical events cause more severe problems or outages.
     *
     * @generated from protobuf enum value: CRITICAL = 600;
     */
    CRITICAL = 600,
    /**
     * (700) A person must take an action immediately.
     *
     * @generated from protobuf enum value: ALERT = 700;
     */
    ALERT = 700,
    /**
     * (800) One or more systems are unusable.
     *
     * @generated from protobuf enum value: EMERGENCY = 800;
     */
    EMERGENCY = 800
}