// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/account_budget_proposal_type.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
// Proto file describing AccountBudgetProposal types.

/**
 * Message describing AccountBudgetProposal types.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.AccountBudgetProposalTypeEnum
 */
export interface AccountBudgetProposalTypeEnum {
}
/**
 * The possible types of an AccountBudgetProposal.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.AccountBudgetProposalTypeEnum.AccountBudgetProposalType
 */
export enum AccountBudgetProposalTypeEnum_AccountBudgetProposalType {
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
     * Identifies a request to create a new budget.
     *
     * @generated from protobuf enum value: CREATE = 2;
     */
    CREATE = 2,
    /**
     * Identifies a request to edit an existing budget.
     *
     * @generated from protobuf enum value: UPDATE = 3;
     */
    UPDATE = 3,
    /**
     * Identifies a request to end a budget that has already started.
     *
     * @generated from protobuf enum value: END = 4;
     */
    END = 4,
    /**
     * Identifies a request to remove a budget that hasn't started yet.
     *
     * @generated from protobuf enum value: REMOVE = 5;
     */
    REMOVE = 5
}
// @generated message type with reflection information, may provide speed optimized methods
class AccountBudgetProposalTypeEnum$Type extends MessageType<AccountBudgetProposalTypeEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.AccountBudgetProposalTypeEnum", []);
    }
    create(value?: PartialMessage<AccountBudgetProposalTypeEnum>): AccountBudgetProposalTypeEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AccountBudgetProposalTypeEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AccountBudgetProposalTypeEnum): AccountBudgetProposalTypeEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: AccountBudgetProposalTypeEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.AccountBudgetProposalTypeEnum
 */
export const AccountBudgetProposalTypeEnum = new AccountBudgetProposalTypeEnum$Type();
