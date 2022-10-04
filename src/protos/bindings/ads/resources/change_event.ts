// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/resources/change_event.proto" (package "google.ads.googleads.v11.resources", syntax proto3)
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
import { CampaignAssetSet } from "./campaign_asset_set";
import { AssetSetAsset } from "./asset_set_asset";
import { AssetSet } from "./asset_set";
import { AdGroupAsset } from "./ad_group_asset";
import { CampaignAsset } from "./campaign_asset";
import { CustomerAsset } from "./customer_asset";
import { Asset } from "./asset";
import { AdGroupAd } from "./ad_group_ad";
import { AdGroupFeed } from "./ad_group_feed";
import { CampaignFeed } from "./campaign_feed";
import { FeedItem } from "./feed_item";
import { Feed } from "./feed";
import { CampaignCriterion } from "./campaign_criterion";
import { AdGroupBidModifier } from "./ad_group_bid_modifier";
import { CampaignBudget } from "./campaign_budget";
import { Campaign } from "./campaign";
import { AdGroupCriterion } from "./ad_group_criterion";
import { AdGroup } from "./ad_group";
import { Ad } from "./ad";
import { FieldMask } from "../../google/protobuf/field_mask";
import { ResourceChangeOperationEnum_ResourceChangeOperation } from "../enums/resource_change_operation";
import { ChangeClientTypeEnum_ChangeClientType } from "../enums/change_client_type";
import { ChangeEventResourceTypeEnum_ChangeEventResourceType } from "../enums/change_event_resource_type";
// Proto file describing the Change Event resource.

/**
 * Describes the granular change of returned resource of certain resource types.
 * Changes made through UI, API and new versions of Editor
 * by external users (including external users, and internal users that can be
 * shown externally) in the past 30 days will be shown. The change shows the old
 * values of the changed fields before the change and the new values right after
 * the change. ChangeEvent could have up to 3 minutes delay to reflect a new
 * change.
 *
 * @generated from protobuf message google.ads.googleads.v11.resources.ChangeEvent
 */
export interface ChangeEvent {
    /**
     * Output only. The resource name of the change event.
     * Change event resource names have the form:
     *
     * `customers/{customer_id}/changeEvents/{timestamp_micros}~{command_index}~{mutate_index}`
     *
     * @generated from protobuf field: string resource_name = 1;
     */
    resourceName: string;
    /**
     * Output only. Time at which the change was committed on this resource.
     *
     * @generated from protobuf field: string change_date_time = 2;
     */
    changeDateTime: string;
    /**
     * Output only. The type of the changed resource. This dictates what resource
     * will be set in old_resource and new_resource.
     *
     * @generated from protobuf field: google.ads.googleads.v11.enums.ChangeEventResourceTypeEnum.ChangeEventResourceType change_resource_type = 3;
     */
    changeResourceType: ChangeEventResourceTypeEnum_ChangeEventResourceType;
    /**
     * Output only. The Simply resource this change occurred on.
     *
     * @generated from protobuf field: string change_resource_name = 4;
     */
    changeResourceName: string;
    /**
     * Output only. Where the change was made through.
     *
     * @generated from protobuf field: google.ads.googleads.v11.enums.ChangeClientTypeEnum.ChangeClientType client_type = 5;
     */
    clientType: ChangeClientTypeEnum_ChangeClientType;
    /**
     * Output only. The email of the user who made this change.
     *
     * @generated from protobuf field: string user_email = 6;
     */
    userEmail: string;
    /**
     * Output only. The old resource before the change. Only changed fields will be populated.
     *
     * @generated from protobuf field: google.ads.googleads.v11.resources.ChangeEvent.ChangedResource old_resource = 7;
     */
    oldResource?: ChangeEvent_ChangedResource;
    /**
     * Output only. The new resource after the change. Only changed fields will be populated.
     *
     * @generated from protobuf field: google.ads.googleads.v11.resources.ChangeEvent.ChangedResource new_resource = 8;
     */
    newResource?: ChangeEvent_ChangedResource;
    /**
     * Output only. The operation on the changed resource.
     *
     * @generated from protobuf field: google.ads.googleads.v11.enums.ResourceChangeOperationEnum.ResourceChangeOperation resource_change_operation = 9;
     */
    resourceChangeOperation: ResourceChangeOperationEnum_ResourceChangeOperation;
    /**
     * Output only. A list of fields that are changed in the returned resource.
     *
     * @generated from protobuf field: google.protobuf.FieldMask changed_fields = 10;
     */
    changedFields?: FieldMask;
    /**
     * Output only. The Campaign affected by this change.
     *
     * @generated from protobuf field: string campaign = 11;
     */
    campaign: string;
    /**
     * Output only. The AdGroup affected by this change.
     *
     * @generated from protobuf field: string ad_group = 12;
     */
    adGroup: string;
    /**
     * Output only. The Feed affected by this change.
     *
     * @generated from protobuf field: string feed = 13;
     */
    feed: string;
    /**
     * Output only. The FeedItem affected by this change.
     *
     * @generated from protobuf field: string feed_item = 14;
     */
    feedItem: string;
    /**
     * Output only. The Asset affected by this change.
     *
     * @generated from protobuf field: string asset = 20;
     */
    asset: string;
}
/**
 * A wrapper proto presenting all supported resources.
 * Only the resource of the change_resource_type will be set.
 *
 * @generated from protobuf message google.ads.googleads.v11.resources.ChangeEvent.ChangedResource
 */
export interface ChangeEvent_ChangedResource {
    /**
     * Output only. Set if change_resource_type == AD.
     *
     * @generated from protobuf field: google.ads.googleads.v11.resources.Ad ad = 1;
     */
    ad?: Ad;
    /**
     * Output only. Set if change_resource_type == AD_GROUP.
     *
     * @generated from protobuf field: google.ads.googleads.v11.resources.AdGroup ad_group = 2;
     */
    adGroup?: AdGroup;
    /**
     * Output only. Set if change_resource_type == AD_GROUP_CRITERION.
     *
     * @generated from protobuf field: google.ads.googleads.v11.resources.AdGroupCriterion ad_group_criterion = 3;
     */
    adGroupCriterion?: AdGroupCriterion;
    /**
     * Output only. Set if change_resource_type == CAMPAIGN.
     *
     * @generated from protobuf field: google.ads.googleads.v11.resources.Campaign campaign = 4;
     */
    campaign?: Campaign;
    /**
     * Output only. Set if change_resource_type == CAMPAIGN_BUDGET.
     *
     * @generated from protobuf field: google.ads.googleads.v11.resources.CampaignBudget campaign_budget = 5;
     */
    campaignBudget?: CampaignBudget;
    /**
     * Output only. Set if change_resource_type == AD_GROUP_BID_MODIFIER.
     *
     * @generated from protobuf field: google.ads.googleads.v11.resources.AdGroupBidModifier ad_group_bid_modifier = 6;
     */
    adGroupBidModifier?: AdGroupBidModifier;
    /**
     * Output only. Set if change_resource_type == CAMPAIGN_CRITERION.
     *
     * @generated from protobuf field: google.ads.googleads.v11.resources.CampaignCriterion campaign_criterion = 7;
     */
    campaignCriterion?: CampaignCriterion;
    /**
     * Output only. Set if change_resource_type == FEED.
     *
     * @generated from protobuf field: google.ads.googleads.v11.resources.Feed feed = 8;
     */
    feed?: Feed;
    /**
     * Output only. Set if change_resource_type == FEED_ITEM.
     *
     * @generated from protobuf field: google.ads.googleads.v11.resources.FeedItem feed_item = 9;
     */
    feedItem?: FeedItem;
    /**
     * Output only. Set if change_resource_type == CAMPAIGN_FEED.
     *
     * @generated from protobuf field: google.ads.googleads.v11.resources.CampaignFeed campaign_feed = 10;
     */
    campaignFeed?: CampaignFeed;
    /**
     * Output only. Set if change_resource_type == AD_GROUP_FEED.
     *
     * @generated from protobuf field: google.ads.googleads.v11.resources.AdGroupFeed ad_group_feed = 11;
     */
    adGroupFeed?: AdGroupFeed;
    /**
     * Output only. Set if change_resource_type == AD_GROUP_AD.
     *
     * @generated from protobuf field: google.ads.googleads.v11.resources.AdGroupAd ad_group_ad = 12;
     */
    adGroupAd?: AdGroupAd;
    /**
     * Output only. Set if change_resource_type == ASSET.
     *
     * @generated from protobuf field: google.ads.googleads.v11.resources.Asset asset = 13;
     */
    asset?: Asset;
    /**
     * Output only. Set if change_resource_type == CUSTOMER_ASSET.
     *
     * @generated from protobuf field: google.ads.googleads.v11.resources.CustomerAsset customer_asset = 14;
     */
    customerAsset?: CustomerAsset;
    /**
     * Output only. Set if change_resource_type == CAMPAIGN_ASSET.
     *
     * @generated from protobuf field: google.ads.googleads.v11.resources.CampaignAsset campaign_asset = 15;
     */
    campaignAsset?: CampaignAsset;
    /**
     * Output only. Set if change_resource_type == AD_GROUP_ASSET.
     *
     * @generated from protobuf field: google.ads.googleads.v11.resources.AdGroupAsset ad_group_asset = 16;
     */
    adGroupAsset?: AdGroupAsset;
    /**
     * Output only. Set if change_resource_type == ASSET_SET.
     *
     * @generated from protobuf field: google.ads.googleads.v11.resources.AssetSet asset_set = 17;
     */
    assetSet?: AssetSet;
    /**
     * Output only. Set if change_resource_type == ASSET_SET_ASSET.
     *
     * @generated from protobuf field: google.ads.googleads.v11.resources.AssetSetAsset asset_set_asset = 18;
     */
    assetSetAsset?: AssetSetAsset;
    /**
     * Output only. Set if change_resource_type == CAMPAIGN_ASSET_SET.
     *
     * @generated from protobuf field: google.ads.googleads.v11.resources.CampaignAssetSet campaign_asset_set = 19;
     */
    campaignAssetSet?: CampaignAssetSet;
}
// @generated message type with reflection information, may provide speed optimized methods
class ChangeEvent$Type extends MessageType<ChangeEvent> {
    constructor() {
        super("google.ads.googleads.v11.resources.ChangeEvent", [
            { no: 1, name: "resource_name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"], "google.api.resource_reference": { type: "googleads.googleapis.com/ChangeEvent" } } },
            { no: 2, name: "change_date_time", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 3, name: "change_resource_type", kind: "enum", T: () => ["google.ads.googleads.v11.enums.ChangeEventResourceTypeEnum.ChangeEventResourceType", ChangeEventResourceTypeEnum_ChangeEventResourceType], options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 4, name: "change_resource_name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 5, name: "client_type", kind: "enum", T: () => ["google.ads.googleads.v11.enums.ChangeClientTypeEnum.ChangeClientType", ChangeClientTypeEnum_ChangeClientType], options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 6, name: "user_email", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 7, name: "old_resource", kind: "message", T: () => ChangeEvent_ChangedResource, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 8, name: "new_resource", kind: "message", T: () => ChangeEvent_ChangedResource, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 9, name: "resource_change_operation", kind: "enum", T: () => ["google.ads.googleads.v11.enums.ResourceChangeOperationEnum.ResourceChangeOperation", ResourceChangeOperationEnum_ResourceChangeOperation], options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 10, name: "changed_fields", kind: "message", T: () => FieldMask, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 11, name: "campaign", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"], "google.api.resource_reference": { type: "googleads.googleapis.com/Campaign" } } },
            { no: 12, name: "ad_group", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"], "google.api.resource_reference": { type: "googleads.googleapis.com/AdGroup" } } },
            { no: 13, name: "feed", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"], "google.api.resource_reference": { type: "googleads.googleapis.com/Feed" } } },
            { no: 14, name: "feed_item", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"], "google.api.resource_reference": { type: "googleads.googleapis.com/FeedItem" } } },
            { no: 20, name: "asset", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "google.api.field_behavior": ["OUTPUT_ONLY"], "google.api.resource_reference": { type: "googleads.googleapis.com/Asset" } } }
        ], { "google.api.resource": { type: "googleads.googleapis.com/ChangeEvent", pattern: ["customers/{customer_id}/changeEvents/{timestamp_micros}~{command_index}~{mutate_index}"] } });
    }
    create(value?: PartialMessage<ChangeEvent>): ChangeEvent {
        const message = { resourceName: "", changeDateTime: "", changeResourceType: 0, changeResourceName: "", clientType: 0, userEmail: "", resourceChangeOperation: 0, campaign: "", adGroup: "", feed: "", feedItem: "", asset: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ChangeEvent>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ChangeEvent): ChangeEvent {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string resource_name */ 1:
                    message.resourceName = reader.string();
                    break;
                case /* string change_date_time */ 2:
                    message.changeDateTime = reader.string();
                    break;
                case /* google.ads.googleads.v11.enums.ChangeEventResourceTypeEnum.ChangeEventResourceType change_resource_type */ 3:
                    message.changeResourceType = reader.int32();
                    break;
                case /* string change_resource_name */ 4:
                    message.changeResourceName = reader.string();
                    break;
                case /* google.ads.googleads.v11.enums.ChangeClientTypeEnum.ChangeClientType client_type */ 5:
                    message.clientType = reader.int32();
                    break;
                case /* string user_email */ 6:
                    message.userEmail = reader.string();
                    break;
                case /* google.ads.googleads.v11.resources.ChangeEvent.ChangedResource old_resource */ 7:
                    message.oldResource = ChangeEvent_ChangedResource.internalBinaryRead(reader, reader.uint32(), options, message.oldResource);
                    break;
                case /* google.ads.googleads.v11.resources.ChangeEvent.ChangedResource new_resource */ 8:
                    message.newResource = ChangeEvent_ChangedResource.internalBinaryRead(reader, reader.uint32(), options, message.newResource);
                    break;
                case /* google.ads.googleads.v11.enums.ResourceChangeOperationEnum.ResourceChangeOperation resource_change_operation */ 9:
                    message.resourceChangeOperation = reader.int32();
                    break;
                case /* google.protobuf.FieldMask changed_fields */ 10:
                    message.changedFields = FieldMask.internalBinaryRead(reader, reader.uint32(), options, message.changedFields);
                    break;
                case /* string campaign */ 11:
                    message.campaign = reader.string();
                    break;
                case /* string ad_group */ 12:
                    message.adGroup = reader.string();
                    break;
                case /* string feed */ 13:
                    message.feed = reader.string();
                    break;
                case /* string feed_item */ 14:
                    message.feedItem = reader.string();
                    break;
                case /* string asset */ 20:
                    message.asset = reader.string();
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
    internalBinaryWrite(message: ChangeEvent, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string resource_name = 1; */
        if (message.resourceName !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.resourceName);
        /* string change_date_time = 2; */
        if (message.changeDateTime !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.changeDateTime);
        /* google.ads.googleads.v11.enums.ChangeEventResourceTypeEnum.ChangeEventResourceType change_resource_type = 3; */
        if (message.changeResourceType !== 0)
            writer.tag(3, WireType.Varint).int32(message.changeResourceType);
        /* string change_resource_name = 4; */
        if (message.changeResourceName !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.changeResourceName);
        /* google.ads.googleads.v11.enums.ChangeClientTypeEnum.ChangeClientType client_type = 5; */
        if (message.clientType !== 0)
            writer.tag(5, WireType.Varint).int32(message.clientType);
        /* string user_email = 6; */
        if (message.userEmail !== "")
            writer.tag(6, WireType.LengthDelimited).string(message.userEmail);
        /* google.ads.googleads.v11.resources.ChangeEvent.ChangedResource old_resource = 7; */
        if (message.oldResource)
            ChangeEvent_ChangedResource.internalBinaryWrite(message.oldResource, writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        /* google.ads.googleads.v11.resources.ChangeEvent.ChangedResource new_resource = 8; */
        if (message.newResource)
            ChangeEvent_ChangedResource.internalBinaryWrite(message.newResource, writer.tag(8, WireType.LengthDelimited).fork(), options).join();
        /* google.ads.googleads.v11.enums.ResourceChangeOperationEnum.ResourceChangeOperation resource_change_operation = 9; */
        if (message.resourceChangeOperation !== 0)
            writer.tag(9, WireType.Varint).int32(message.resourceChangeOperation);
        /* google.protobuf.FieldMask changed_fields = 10; */
        if (message.changedFields)
            FieldMask.internalBinaryWrite(message.changedFields, writer.tag(10, WireType.LengthDelimited).fork(), options).join();
        /* string campaign = 11; */
        if (message.campaign !== "")
            writer.tag(11, WireType.LengthDelimited).string(message.campaign);
        /* string ad_group = 12; */
        if (message.adGroup !== "")
            writer.tag(12, WireType.LengthDelimited).string(message.adGroup);
        /* string feed = 13; */
        if (message.feed !== "")
            writer.tag(13, WireType.LengthDelimited).string(message.feed);
        /* string feed_item = 14; */
        if (message.feedItem !== "")
            writer.tag(14, WireType.LengthDelimited).string(message.feedItem);
        /* string asset = 20; */
        if (message.asset !== "")
            writer.tag(20, WireType.LengthDelimited).string(message.asset);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.resources.ChangeEvent
 */
export const ChangeEvent = new ChangeEvent$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChangeEvent_ChangedResource$Type extends MessageType<ChangeEvent_ChangedResource> {
    constructor() {
        super("google.ads.googleads.v11.resources.ChangeEvent.ChangedResource", [
            { no: 1, name: "ad", kind: "message", T: () => Ad, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 2, name: "ad_group", kind: "message", T: () => AdGroup, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 3, name: "ad_group_criterion", kind: "message", T: () => AdGroupCriterion, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 4, name: "campaign", kind: "message", T: () => Campaign, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 5, name: "campaign_budget", kind: "message", T: () => CampaignBudget, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 6, name: "ad_group_bid_modifier", kind: "message", T: () => AdGroupBidModifier, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 7, name: "campaign_criterion", kind: "message", T: () => CampaignCriterion, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 8, name: "feed", kind: "message", T: () => Feed, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 9, name: "feed_item", kind: "message", T: () => FeedItem, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 10, name: "campaign_feed", kind: "message", T: () => CampaignFeed, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 11, name: "ad_group_feed", kind: "message", T: () => AdGroupFeed, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 12, name: "ad_group_ad", kind: "message", T: () => AdGroupAd, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 13, name: "asset", kind: "message", T: () => Asset, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 14, name: "customer_asset", kind: "message", T: () => CustomerAsset, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 15, name: "campaign_asset", kind: "message", T: () => CampaignAsset, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 16, name: "ad_group_asset", kind: "message", T: () => AdGroupAsset, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 17, name: "asset_set", kind: "message", T: () => AssetSet, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 18, name: "asset_set_asset", kind: "message", T: () => AssetSetAsset, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } },
            { no: 19, name: "campaign_asset_set", kind: "message", T: () => CampaignAssetSet, options: { "google.api.field_behavior": ["OUTPUT_ONLY"] } }
        ]);
    }
    create(value?: PartialMessage<ChangeEvent_ChangedResource>): ChangeEvent_ChangedResource {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ChangeEvent_ChangedResource>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ChangeEvent_ChangedResource): ChangeEvent_ChangedResource {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.ads.googleads.v11.resources.Ad ad */ 1:
                    message.ad = Ad.internalBinaryRead(reader, reader.uint32(), options, message.ad);
                    break;
                case /* google.ads.googleads.v11.resources.AdGroup ad_group */ 2:
                    message.adGroup = AdGroup.internalBinaryRead(reader, reader.uint32(), options, message.adGroup);
                    break;
                case /* google.ads.googleads.v11.resources.AdGroupCriterion ad_group_criterion */ 3:
                    message.adGroupCriterion = AdGroupCriterion.internalBinaryRead(reader, reader.uint32(), options, message.adGroupCriterion);
                    break;
                case /* google.ads.googleads.v11.resources.Campaign campaign */ 4:
                    message.campaign = Campaign.internalBinaryRead(reader, reader.uint32(), options, message.campaign);
                    break;
                case /* google.ads.googleads.v11.resources.CampaignBudget campaign_budget */ 5:
                    message.campaignBudget = CampaignBudget.internalBinaryRead(reader, reader.uint32(), options, message.campaignBudget);
                    break;
                case /* google.ads.googleads.v11.resources.AdGroupBidModifier ad_group_bid_modifier */ 6:
                    message.adGroupBidModifier = AdGroupBidModifier.internalBinaryRead(reader, reader.uint32(), options, message.adGroupBidModifier);
                    break;
                case /* google.ads.googleads.v11.resources.CampaignCriterion campaign_criterion */ 7:
                    message.campaignCriterion = CampaignCriterion.internalBinaryRead(reader, reader.uint32(), options, message.campaignCriterion);
                    break;
                case /* google.ads.googleads.v11.resources.Feed feed */ 8:
                    message.feed = Feed.internalBinaryRead(reader, reader.uint32(), options, message.feed);
                    break;
                case /* google.ads.googleads.v11.resources.FeedItem feed_item */ 9:
                    message.feedItem = FeedItem.internalBinaryRead(reader, reader.uint32(), options, message.feedItem);
                    break;
                case /* google.ads.googleads.v11.resources.CampaignFeed campaign_feed */ 10:
                    message.campaignFeed = CampaignFeed.internalBinaryRead(reader, reader.uint32(), options, message.campaignFeed);
                    break;
                case /* google.ads.googleads.v11.resources.AdGroupFeed ad_group_feed */ 11:
                    message.adGroupFeed = AdGroupFeed.internalBinaryRead(reader, reader.uint32(), options, message.adGroupFeed);
                    break;
                case /* google.ads.googleads.v11.resources.AdGroupAd ad_group_ad */ 12:
                    message.adGroupAd = AdGroupAd.internalBinaryRead(reader, reader.uint32(), options, message.adGroupAd);
                    break;
                case /* google.ads.googleads.v11.resources.Asset asset */ 13:
                    message.asset = Asset.internalBinaryRead(reader, reader.uint32(), options, message.asset);
                    break;
                case /* google.ads.googleads.v11.resources.CustomerAsset customer_asset */ 14:
                    message.customerAsset = CustomerAsset.internalBinaryRead(reader, reader.uint32(), options, message.customerAsset);
                    break;
                case /* google.ads.googleads.v11.resources.CampaignAsset campaign_asset */ 15:
                    message.campaignAsset = CampaignAsset.internalBinaryRead(reader, reader.uint32(), options, message.campaignAsset);
                    break;
                case /* google.ads.googleads.v11.resources.AdGroupAsset ad_group_asset */ 16:
                    message.adGroupAsset = AdGroupAsset.internalBinaryRead(reader, reader.uint32(), options, message.adGroupAsset);
                    break;
                case /* google.ads.googleads.v11.resources.AssetSet asset_set */ 17:
                    message.assetSet = AssetSet.internalBinaryRead(reader, reader.uint32(), options, message.assetSet);
                    break;
                case /* google.ads.googleads.v11.resources.AssetSetAsset asset_set_asset */ 18:
                    message.assetSetAsset = AssetSetAsset.internalBinaryRead(reader, reader.uint32(), options, message.assetSetAsset);
                    break;
                case /* google.ads.googleads.v11.resources.CampaignAssetSet campaign_asset_set */ 19:
                    message.campaignAssetSet = CampaignAssetSet.internalBinaryRead(reader, reader.uint32(), options, message.campaignAssetSet);
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
    internalBinaryWrite(message: ChangeEvent_ChangedResource, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* google.ads.googleads.v11.resources.Ad ad = 1; */
        if (message.ad)
            Ad.internalBinaryWrite(message.ad, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* google.ads.googleads.v11.resources.AdGroup ad_group = 2; */
        if (message.adGroup)
            AdGroup.internalBinaryWrite(message.adGroup, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* google.ads.googleads.v11.resources.AdGroupCriterion ad_group_criterion = 3; */
        if (message.adGroupCriterion)
            AdGroupCriterion.internalBinaryWrite(message.adGroupCriterion, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* google.ads.googleads.v11.resources.Campaign campaign = 4; */
        if (message.campaign)
            Campaign.internalBinaryWrite(message.campaign, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* google.ads.googleads.v11.resources.CampaignBudget campaign_budget = 5; */
        if (message.campaignBudget)
            CampaignBudget.internalBinaryWrite(message.campaignBudget, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* google.ads.googleads.v11.resources.AdGroupBidModifier ad_group_bid_modifier = 6; */
        if (message.adGroupBidModifier)
            AdGroupBidModifier.internalBinaryWrite(message.adGroupBidModifier, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* google.ads.googleads.v11.resources.CampaignCriterion campaign_criterion = 7; */
        if (message.campaignCriterion)
            CampaignCriterion.internalBinaryWrite(message.campaignCriterion, writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        /* google.ads.googleads.v11.resources.Feed feed = 8; */
        if (message.feed)
            Feed.internalBinaryWrite(message.feed, writer.tag(8, WireType.LengthDelimited).fork(), options).join();
        /* google.ads.googleads.v11.resources.FeedItem feed_item = 9; */
        if (message.feedItem)
            FeedItem.internalBinaryWrite(message.feedItem, writer.tag(9, WireType.LengthDelimited).fork(), options).join();
        /* google.ads.googleads.v11.resources.CampaignFeed campaign_feed = 10; */
        if (message.campaignFeed)
            CampaignFeed.internalBinaryWrite(message.campaignFeed, writer.tag(10, WireType.LengthDelimited).fork(), options).join();
        /* google.ads.googleads.v11.resources.AdGroupFeed ad_group_feed = 11; */
        if (message.adGroupFeed)
            AdGroupFeed.internalBinaryWrite(message.adGroupFeed, writer.tag(11, WireType.LengthDelimited).fork(), options).join();
        /* google.ads.googleads.v11.resources.AdGroupAd ad_group_ad = 12; */
        if (message.adGroupAd)
            AdGroupAd.internalBinaryWrite(message.adGroupAd, writer.tag(12, WireType.LengthDelimited).fork(), options).join();
        /* google.ads.googleads.v11.resources.Asset asset = 13; */
        if (message.asset)
            Asset.internalBinaryWrite(message.asset, writer.tag(13, WireType.LengthDelimited).fork(), options).join();
        /* google.ads.googleads.v11.resources.CustomerAsset customer_asset = 14; */
        if (message.customerAsset)
            CustomerAsset.internalBinaryWrite(message.customerAsset, writer.tag(14, WireType.LengthDelimited).fork(), options).join();
        /* google.ads.googleads.v11.resources.CampaignAsset campaign_asset = 15; */
        if (message.campaignAsset)
            CampaignAsset.internalBinaryWrite(message.campaignAsset, writer.tag(15, WireType.LengthDelimited).fork(), options).join();
        /* google.ads.googleads.v11.resources.AdGroupAsset ad_group_asset = 16; */
        if (message.adGroupAsset)
            AdGroupAsset.internalBinaryWrite(message.adGroupAsset, writer.tag(16, WireType.LengthDelimited).fork(), options).join();
        /* google.ads.googleads.v11.resources.AssetSet asset_set = 17; */
        if (message.assetSet)
            AssetSet.internalBinaryWrite(message.assetSet, writer.tag(17, WireType.LengthDelimited).fork(), options).join();
        /* google.ads.googleads.v11.resources.AssetSetAsset asset_set_asset = 18; */
        if (message.assetSetAsset)
            AssetSetAsset.internalBinaryWrite(message.assetSetAsset, writer.tag(18, WireType.LengthDelimited).fork(), options).join();
        /* google.ads.googleads.v11.resources.CampaignAssetSet campaign_asset_set = 19; */
        if (message.campaignAssetSet)
            CampaignAssetSet.internalBinaryWrite(message.campaignAssetSet, writer.tag(19, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.resources.ChangeEvent.ChangedResource
 */
export const ChangeEvent_ChangedResource = new ChangeEvent_ChangedResource$Type();
