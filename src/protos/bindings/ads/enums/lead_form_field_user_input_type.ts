// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "ads/enums/lead_form_field_user_input_type.proto" (package "google.ads.googleads.v11.enums", syntax proto3)
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
/**
 * Describes the input type of a lead form field.
 *
 * @generated from protobuf message google.ads.googleads.v11.enums.LeadFormFieldUserInputTypeEnum
 */
export interface LeadFormFieldUserInputTypeEnum {
}
/**
 * Enum describing the input type of a lead form field.
 *
 * @generated from protobuf enum google.ads.googleads.v11.enums.LeadFormFieldUserInputTypeEnum.LeadFormFieldUserInputType
 */
export enum LeadFormFieldUserInputTypeEnum_LeadFormFieldUserInputType {
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
     * The user will be asked to fill in their given and family name. This field
     * cannot be set at the same time as GIVEN_NAME or FAMILY_NAME.
     *
     * @generated from protobuf enum value: FULL_NAME = 2;
     */
    FULL_NAME = 2,
    /**
     * The user will be asked to fill in their email address.
     *
     * @generated from protobuf enum value: EMAIL = 3;
     */
    EMAIL = 3,
    /**
     * The user will be asked to fill in their phone number.
     *
     * @generated from protobuf enum value: PHONE_NUMBER = 4;
     */
    PHONE_NUMBER = 4,
    /**
     * The user will be asked to fill in their zip code.
     *
     * @generated from protobuf enum value: POSTAL_CODE = 5;
     */
    POSTAL_CODE = 5,
    /**
     * The user will be asked to fill in their street address.
     *
     * @generated from protobuf enum value: STREET_ADDRESS = 8;
     */
    STREET_ADDRESS = 8,
    /**
     * The user will be asked to fill in their city.
     *
     * @generated from protobuf enum value: CITY = 9;
     */
    CITY = 9,
    /**
     * The user will be asked to fill in their region part of the address (for
     * example, state for US, province for Canada).
     *
     * @generated from protobuf enum value: REGION = 10;
     */
    REGION = 10,
    /**
     * The user will be asked to fill in their country.
     *
     * @generated from protobuf enum value: COUNTRY = 11;
     */
    COUNTRY = 11,
    /**
     * The user will be asked to fill in their work email address.
     *
     * @generated from protobuf enum value: WORK_EMAIL = 12;
     */
    WORK_EMAIL = 12,
    /**
     * The user will be asked to fill in their company name.
     *
     * @generated from protobuf enum value: COMPANY_NAME = 13;
     */
    COMPANY_NAME = 13,
    /**
     * The user will be asked to fill in their work phone.
     *
     * @generated from protobuf enum value: WORK_PHONE = 14;
     */
    WORK_PHONE = 14,
    /**
     * The user will be asked to fill in their job title.
     *
     * @generated from protobuf enum value: JOB_TITLE = 15;
     */
    JOB_TITLE = 15,
    /**
     * The user will be asked to fill in their CPF for Brazil users.
     *
     * @generated from protobuf enum value: GOVERNMENT_ISSUED_ID_CPF_BR = 16;
     */
    GOVERNMENT_ISSUED_ID_CPF_BR = 16,
    /**
     * The user will be asked to fill in their DNI for Argentina users.
     *
     * @generated from protobuf enum value: GOVERNMENT_ISSUED_ID_DNI_AR = 17;
     */
    GOVERNMENT_ISSUED_ID_DNI_AR = 17,
    /**
     * The user will be asked to fill in their DNI for Peru users.
     *
     * @generated from protobuf enum value: GOVERNMENT_ISSUED_ID_DNI_PE = 18;
     */
    GOVERNMENT_ISSUED_ID_DNI_PE = 18,
    /**
     * The user will be asked to fill in their RUT for Chile users.
     *
     * @generated from protobuf enum value: GOVERNMENT_ISSUED_ID_RUT_CL = 19;
     */
    GOVERNMENT_ISSUED_ID_RUT_CL = 19,
    /**
     * The user will be asked to fill in their CC for Colombia users.
     *
     * @generated from protobuf enum value: GOVERNMENT_ISSUED_ID_CC_CO = 20;
     */
    GOVERNMENT_ISSUED_ID_CC_CO = 20,
    /**
     * The user will be asked to fill in their CI for Ecuador users.
     *
     * @generated from protobuf enum value: GOVERNMENT_ISSUED_ID_CI_EC = 21;
     */
    GOVERNMENT_ISSUED_ID_CI_EC = 21,
    /**
     * The user will be asked to fill in their RFC for Mexico users.
     *
     * @generated from protobuf enum value: GOVERNMENT_ISSUED_ID_RFC_MX = 22;
     */
    GOVERNMENT_ISSUED_ID_RFC_MX = 22,
    /**
     * The user will be asked to fill in their first name. This
     * field can not be set at the same time as FULL_NAME.
     *
     * @generated from protobuf enum value: FIRST_NAME = 23;
     */
    FIRST_NAME = 23,
    /**
     * The user will be asked to fill in their last name. This
     * field can not be set at the same time as FULL_NAME.
     *
     * @generated from protobuf enum value: LAST_NAME = 24;
     */
    LAST_NAME = 24,
    /**
     * Question: "Which model are you interested in?"
     * Category: "Auto"
     *
     * @generated from protobuf enum value: VEHICLE_MODEL = 1001;
     */
    VEHICLE_MODEL = 1001,
    /**
     * Question: "Which type of vehicle are you interested in?"
     * Category: "Auto"
     *
     * @generated from protobuf enum value: VEHICLE_TYPE = 1002;
     */
    VEHICLE_TYPE = 1002,
    /**
     * Question: "What is your preferred dealership?"
     * Category: "Auto"
     *
     * @generated from protobuf enum value: PREFERRED_DEALERSHIP = 1003;
     */
    PREFERRED_DEALERSHIP = 1003,
    /**
     * Question: "When do you plan on purchasing a vehicle?"
     * Category: "Auto"
     *
     * @generated from protobuf enum value: VEHICLE_PURCHASE_TIMELINE = 1004;
     */
    VEHICLE_PURCHASE_TIMELINE = 1004,
    /**
     * Question: "Do you own a vehicle?"
     * Category: "Auto"
     *
     * @generated from protobuf enum value: VEHICLE_OWNERSHIP = 1005;
     */
    VEHICLE_OWNERSHIP = 1005,
    /**
     * Question: "What vehicle ownership option are you interested in?"
     * Category: "Auto"
     *
     * @generated from protobuf enum value: VEHICLE_PAYMENT_TYPE = 1009;
     */
    VEHICLE_PAYMENT_TYPE = 1009,
    /**
     * Question: "What type of vehicle condition are you interested in?"
     * Category: "Auto"
     *
     * @generated from protobuf enum value: VEHICLE_CONDITION = 1010;
     */
    VEHICLE_CONDITION = 1010,
    /**
     * Question: "What size is your company?"
     * Category: "Business"
     *
     * @generated from protobuf enum value: COMPANY_SIZE = 1006;
     */
    COMPANY_SIZE = 1006,
    /**
     * Question: "What is your annual sales volume?"
     * Category: "Business"
     *
     * @generated from protobuf enum value: ANNUAL_SALES = 1007;
     */
    ANNUAL_SALES = 1007,
    /**
     * Question: "How many years have you been in business?"
     * Category: "Business"
     *
     * @generated from protobuf enum value: YEARS_IN_BUSINESS = 1008;
     */
    YEARS_IN_BUSINESS = 1008,
    /**
     * Question: "What is your job department?"
     * Category: "Business"
     *
     * @generated from protobuf enum value: JOB_DEPARTMENT = 1011;
     */
    JOB_DEPARTMENT = 1011,
    /**
     * Question: "What is your job role?"
     * Category: "Business"
     *
     * @generated from protobuf enum value: JOB_ROLE = 1012;
     */
    JOB_ROLE = 1012,
    /**
     * Question: "Are you over 18 years of age?"
     * Category: "Demographics"
     *
     * @generated from protobuf enum value: OVER_18_AGE = 1078;
     */
    OVER_18_AGE = 1078,
    /**
     * Question: "Are you over 19 years of age?"
     * Category: "Demographics"
     *
     * @generated from protobuf enum value: OVER_19_AGE = 1079;
     */
    OVER_19_AGE = 1079,
    /**
     * Question: "Are you over 20 years of age?"
     * Category: "Demographics"
     *
     * @generated from protobuf enum value: OVER_20_AGE = 1080;
     */
    OVER_20_AGE = 1080,
    /**
     * Question: "Are you over 21 years of age?"
     * Category: "Demographics"
     *
     * @generated from protobuf enum value: OVER_21_AGE = 1081;
     */
    OVER_21_AGE = 1081,
    /**
     * Question: "Are you over 22 years of age?"
     * Category: "Demographics"
     *
     * @generated from protobuf enum value: OVER_22_AGE = 1082;
     */
    OVER_22_AGE = 1082,
    /**
     * Question: "Are you over 23 years of age?"
     * Category: "Demographics"
     *
     * @generated from protobuf enum value: OVER_23_AGE = 1083;
     */
    OVER_23_AGE = 1083,
    /**
     * Question: "Are you over 24 years of age?"
     * Category: "Demographics"
     *
     * @generated from protobuf enum value: OVER_24_AGE = 1084;
     */
    OVER_24_AGE = 1084,
    /**
     * Question: "Are you over 25 years of age?"
     * Category: "Demographics"
     *
     * @generated from protobuf enum value: OVER_25_AGE = 1085;
     */
    OVER_25_AGE = 1085,
    /**
     * Question: "Are you over 26 years of age?"
     * Category: "Demographics"
     *
     * @generated from protobuf enum value: OVER_26_AGE = 1086;
     */
    OVER_26_AGE = 1086,
    /**
     * Question: "Are you over 27 years of age?"
     * Category: "Demographics"
     *
     * @generated from protobuf enum value: OVER_27_AGE = 1087;
     */
    OVER_27_AGE = 1087,
    /**
     * Question: "Are you over 28 years of age?"
     * Category: "Demographics"
     *
     * @generated from protobuf enum value: OVER_28_AGE = 1088;
     */
    OVER_28_AGE = 1088,
    /**
     * Question: "Are you over 29 years of age?"
     * Category: "Demographics"
     *
     * @generated from protobuf enum value: OVER_29_AGE = 1089;
     */
    OVER_29_AGE = 1089,
    /**
     * Question: "Are you over 30 years of age?"
     * Category: "Demographics"
     *
     * @generated from protobuf enum value: OVER_30_AGE = 1090;
     */
    OVER_30_AGE = 1090,
    /**
     * Question: "Are you over 31 years of age?"
     * Category: "Demographics"
     *
     * @generated from protobuf enum value: OVER_31_AGE = 1091;
     */
    OVER_31_AGE = 1091,
    /**
     * Question: "Are you over 32 years of age?"
     * Category: "Demographics"
     *
     * @generated from protobuf enum value: OVER_32_AGE = 1092;
     */
    OVER_32_AGE = 1092,
    /**
     * Question: "Are you over 33 years of age?"
     * Category: "Demographics"
     *
     * @generated from protobuf enum value: OVER_33_AGE = 1093;
     */
    OVER_33_AGE = 1093,
    /**
     * Question: "Are you over 34 years of age?"
     * Category: "Demographics"
     *
     * @generated from protobuf enum value: OVER_34_AGE = 1094;
     */
    OVER_34_AGE = 1094,
    /**
     * Question: "Are you over 35 years of age?"
     * Category: "Demographics"
     *
     * @generated from protobuf enum value: OVER_35_AGE = 1095;
     */
    OVER_35_AGE = 1095,
    /**
     * Question: "Are you over 36 years of age?"
     * Category: "Demographics"
     *
     * @generated from protobuf enum value: OVER_36_AGE = 1096;
     */
    OVER_36_AGE = 1096,
    /**
     * Question: "Are you over 37 years of age?"
     * Category: "Demographics"
     *
     * @generated from protobuf enum value: OVER_37_AGE = 1097;
     */
    OVER_37_AGE = 1097,
    /**
     * Question: "Are you over 38 years of age?"
     * Category: "Demographics"
     *
     * @generated from protobuf enum value: OVER_38_AGE = 1098;
     */
    OVER_38_AGE = 1098,
    /**
     * Question: "Are you over 39 years of age?"
     * Category: "Demographics"
     *
     * @generated from protobuf enum value: OVER_39_AGE = 1099;
     */
    OVER_39_AGE = 1099,
    /**
     * Question: "Are you over 40 years of age?"
     * Category: "Demographics"
     *
     * @generated from protobuf enum value: OVER_40_AGE = 1100;
     */
    OVER_40_AGE = 1100,
    /**
     * Question: "Are you over 41 years of age?"
     * Category: "Demographics"
     *
     * @generated from protobuf enum value: OVER_41_AGE = 1101;
     */
    OVER_41_AGE = 1101,
    /**
     * Question: "Are you over 42 years of age?"
     * Category: "Demographics"
     *
     * @generated from protobuf enum value: OVER_42_AGE = 1102;
     */
    OVER_42_AGE = 1102,
    /**
     * Question: "Are you over 43 years of age?"
     * Category: "Demographics"
     *
     * @generated from protobuf enum value: OVER_43_AGE = 1103;
     */
    OVER_43_AGE = 1103,
    /**
     * Question: "Are you over 44 years of age?"
     * Category: "Demographics"
     *
     * @generated from protobuf enum value: OVER_44_AGE = 1104;
     */
    OVER_44_AGE = 1104,
    /**
     * Question: "Are you over 45 years of age?"
     * Category: "Demographics"
     *
     * @generated from protobuf enum value: OVER_45_AGE = 1105;
     */
    OVER_45_AGE = 1105,
    /**
     * Question: "Are you over 46 years of age?"
     * Category: "Demographics"
     *
     * @generated from protobuf enum value: OVER_46_AGE = 1106;
     */
    OVER_46_AGE = 1106,
    /**
     * Question: "Are you over 47 years of age?"
     * Category: "Demographics"
     *
     * @generated from protobuf enum value: OVER_47_AGE = 1107;
     */
    OVER_47_AGE = 1107,
    /**
     * Question: "Are you over 48 years of age?"
     * Category: "Demographics"
     *
     * @generated from protobuf enum value: OVER_48_AGE = 1108;
     */
    OVER_48_AGE = 1108,
    /**
     * Question: "Are you over 49 years of age?"
     * Category: "Demographics"
     *
     * @generated from protobuf enum value: OVER_49_AGE = 1109;
     */
    OVER_49_AGE = 1109,
    /**
     * Question: "Are you over 50 years of age?"
     * Category: "Demographics"
     *
     * @generated from protobuf enum value: OVER_50_AGE = 1110;
     */
    OVER_50_AGE = 1110,
    /**
     * Question: "Are you over 51 years of age?"
     * Category: "Demographics"
     *
     * @generated from protobuf enum value: OVER_51_AGE = 1111;
     */
    OVER_51_AGE = 1111,
    /**
     * Question: "Are you over 52 years of age?"
     * Category: "Demographics"
     *
     * @generated from protobuf enum value: OVER_52_AGE = 1112;
     */
    OVER_52_AGE = 1112,
    /**
     * Question: "Are you over 53 years of age?"
     * Category: "Demographics"
     *
     * @generated from protobuf enum value: OVER_53_AGE = 1113;
     */
    OVER_53_AGE = 1113,
    /**
     * Question: "Are you over 54 years of age?"
     * Category: "Demographics"
     *
     * @generated from protobuf enum value: OVER_54_AGE = 1114;
     */
    OVER_54_AGE = 1114,
    /**
     * Question: "Are you over 55 years of age?"
     * Category: "Demographics"
     *
     * @generated from protobuf enum value: OVER_55_AGE = 1115;
     */
    OVER_55_AGE = 1115,
    /**
     * Question: "Are you over 56 years of age?"
     * Category: "Demographics"
     *
     * @generated from protobuf enum value: OVER_56_AGE = 1116;
     */
    OVER_56_AGE = 1116,
    /**
     * Question: "Are you over 57 years of age?"
     * Category: "Demographics"
     *
     * @generated from protobuf enum value: OVER_57_AGE = 1117;
     */
    OVER_57_AGE = 1117,
    /**
     * Question: "Are you over 58 years of age?"
     * Category: "Demographics"
     *
     * @generated from protobuf enum value: OVER_58_AGE = 1118;
     */
    OVER_58_AGE = 1118,
    /**
     * Question: "Are you over 59 years of age?"
     * Category: "Demographics"
     *
     * @generated from protobuf enum value: OVER_59_AGE = 1119;
     */
    OVER_59_AGE = 1119,
    /**
     * Question: "Are you over 60 years of age?"
     * Category: "Demographics"
     *
     * @generated from protobuf enum value: OVER_60_AGE = 1120;
     */
    OVER_60_AGE = 1120,
    /**
     * Question: "Are you over 61 years of age?"
     * Category: "Demographics"
     *
     * @generated from protobuf enum value: OVER_61_AGE = 1121;
     */
    OVER_61_AGE = 1121,
    /**
     * Question: "Are you over 62 years of age?"
     * Category: "Demographics"
     *
     * @generated from protobuf enum value: OVER_62_AGE = 1122;
     */
    OVER_62_AGE = 1122,
    /**
     * Question: "Are you over 63 years of age?"
     * Category: "Demographics"
     *
     * @generated from protobuf enum value: OVER_63_AGE = 1123;
     */
    OVER_63_AGE = 1123,
    /**
     * Question: "Are you over 64 years of age?"
     * Category: "Demographics"
     *
     * @generated from protobuf enum value: OVER_64_AGE = 1124;
     */
    OVER_64_AGE = 1124,
    /**
     * Question: "Are you over 65 years of age?"
     * Category: "Demographics"
     *
     * @generated from protobuf enum value: OVER_65_AGE = 1125;
     */
    OVER_65_AGE = 1125,
    /**
     * Question: "Which program are you interested in?"
     * Category: "Education"
     *
     * @generated from protobuf enum value: EDUCATION_PROGRAM = 1013;
     */
    EDUCATION_PROGRAM = 1013,
    /**
     * Question: "Which course are you interested in?"
     * Category: "Education"
     *
     * @generated from protobuf enum value: EDUCATION_COURSE = 1014;
     */
    EDUCATION_COURSE = 1014,
    /**
     * Question: "Which product are you interested in?"
     * Category: "General"
     *
     * @generated from protobuf enum value: PRODUCT = 1016;
     */
    PRODUCT = 1016,
    /**
     * Question: "Which service are you interested in?"
     * Category: "General"
     *
     * @generated from protobuf enum value: SERVICE = 1017;
     */
    SERVICE = 1017,
    /**
     * Question: "Which offer are you interested in?"
     * Category: "General"
     *
     * @generated from protobuf enum value: OFFER = 1018;
     */
    OFFER = 1018,
    /**
     * Question: "Which category are you interested in?"
     * Category: "General"
     *
     * @generated from protobuf enum value: CATEGORY = 1019;
     */
    CATEGORY = 1019,
    /**
     * Question: "What is your preferred method of contact?"
     * Category: "General"
     *
     * @generated from protobuf enum value: PREFERRED_CONTACT_METHOD = 1020;
     */
    PREFERRED_CONTACT_METHOD = 1020,
    /**
     * Question: "What is your preferred location?"
     * Category: "General"
     *
     * @generated from protobuf enum value: PREFERRED_LOCATION = 1021;
     */
    PREFERRED_LOCATION = 1021,
    /**
     * Question: "What is the best time to contact you?"
     * Category: "General"
     *
     * @generated from protobuf enum value: PREFERRED_CONTACT_TIME = 1022;
     */
    PREFERRED_CONTACT_TIME = 1022,
    /**
     * Question: "When are you looking to make a purchase?"
     * Category: "General"
     *
     * @generated from protobuf enum value: PURCHASE_TIMELINE = 1023;
     */
    PURCHASE_TIMELINE = 1023,
    /**
     * Question: "How many years of work experience do you have?"
     * Category: "Jobs"
     *
     * @generated from protobuf enum value: YEARS_OF_EXPERIENCE = 1048;
     */
    YEARS_OF_EXPERIENCE = 1048,
    /**
     * Question: "What industry do you work in?"
     * Category: "Jobs"
     *
     * @generated from protobuf enum value: JOB_INDUSTRY = 1049;
     */
    JOB_INDUSTRY = 1049,
    /**
     * Question: "What is your highest level of education?"
     * Category: "Jobs"
     *
     * @generated from protobuf enum value: LEVEL_OF_EDUCATION = 1050;
     */
    LEVEL_OF_EDUCATION = 1050,
    /**
     * Question: "What type of property are you looking for?"
     * Category: "Real Estate"
     *
     * @generated from protobuf enum value: PROPERTY_TYPE = 1024;
     */
    PROPERTY_TYPE = 1024,
    /**
     * Question: "What do you need a realtor's help with?"
     * Category: "Real Estate"
     *
     * @generated from protobuf enum value: REALTOR_HELP_GOAL = 1025;
     */
    REALTOR_HELP_GOAL = 1025,
    /**
     * Question: "What neighborhood are you interested in?"
     * Category: "Real Estate"
     *
     * @generated from protobuf enum value: PROPERTY_COMMUNITY = 1026;
     */
    PROPERTY_COMMUNITY = 1026,
    /**
     * Question: "What price range are you looking for?"
     * Category: "Real Estate"
     *
     * @generated from protobuf enum value: PRICE_RANGE = 1027;
     */
    PRICE_RANGE = 1027,
    /**
     * Question: "How many bedrooms are you looking for?"
     * Category: "Real Estate"
     *
     * @generated from protobuf enum value: NUMBER_OF_BEDROOMS = 1028;
     */
    NUMBER_OF_BEDROOMS = 1028,
    /**
     * Question: "Are you looking for a fully furnished property?"
     * Category: "Real Estate"
     *
     * @generated from protobuf enum value: FURNISHED_PROPERTY = 1029;
     */
    FURNISHED_PROPERTY = 1029,
    /**
     * Question: "Are you looking for properties that allow pets?"
     * Category: "Real Estate"
     *
     * @generated from protobuf enum value: PETS_ALLOWED_PROPERTY = 1030;
     */
    PETS_ALLOWED_PROPERTY = 1030,
    /**
     * Question: "What is the next product you plan to purchase?"
     * Category: "Retail"
     *
     * @generated from protobuf enum value: NEXT_PLANNED_PURCHASE = 1031;
     */
    NEXT_PLANNED_PURCHASE = 1031,
    /**
     * Question: "Would you like to sign up for an event?"
     * Category: "Retail"
     *
     * @generated from protobuf enum value: EVENT_SIGNUP_INTEREST = 1033;
     */
    EVENT_SIGNUP_INTEREST = 1033,
    /**
     * Question: "Where are you interested in shopping?"
     * Category: "Retail"
     *
     * @generated from protobuf enum value: PREFERRED_SHOPPING_PLACES = 1034;
     */
    PREFERRED_SHOPPING_PLACES = 1034,
    /**
     * Question: "What is your favorite brand?"
     * Category: "Retail"
     *
     * @generated from protobuf enum value: FAVORITE_BRAND = 1035;
     */
    FAVORITE_BRAND = 1035,
    /**
     * Question: "Which type of valid commercial license do you have?"
     * Category: "Transportation"
     *
     * @generated from protobuf enum value: TRANSPORTATION_COMMERCIAL_LICENSE_TYPE = 1036;
     */
    TRANSPORTATION_COMMERCIAL_LICENSE_TYPE = 1036,
    /**
     * Question: "Interested in booking an event?"
     * Category: "Travel"
     *
     * @generated from protobuf enum value: EVENT_BOOKING_INTEREST = 1038;
     */
    EVENT_BOOKING_INTEREST = 1038,
    /**
     * Question: "What is your destination country?"
     * Category: "Travel"
     *
     * @generated from protobuf enum value: DESTINATION_COUNTRY = 1039;
     */
    DESTINATION_COUNTRY = 1039,
    /**
     * Question: "What is your destination city?"
     * Category: "Travel"
     *
     * @generated from protobuf enum value: DESTINATION_CITY = 1040;
     */
    DESTINATION_CITY = 1040,
    /**
     * Question: "What is your departure country?"
     * Category: "Travel"
     *
     * @generated from protobuf enum value: DEPARTURE_COUNTRY = 1041;
     */
    DEPARTURE_COUNTRY = 1041,
    /**
     * Question: "What is your departure city?"
     * Category: "Travel"
     *
     * @generated from protobuf enum value: DEPARTURE_CITY = 1042;
     */
    DEPARTURE_CITY = 1042,
    /**
     * Question: "What is your departure date?"
     * Category: "Travel"
     *
     * @generated from protobuf enum value: DEPARTURE_DATE = 1043;
     */
    DEPARTURE_DATE = 1043,
    /**
     * Question: "What is your return date?"
     * Category: "Travel"
     *
     * @generated from protobuf enum value: RETURN_DATE = 1044;
     */
    RETURN_DATE = 1044,
    /**
     * Question: "How many people are you traveling with?"
     * Category: "Travel"
     *
     * @generated from protobuf enum value: NUMBER_OF_TRAVELERS = 1045;
     */
    NUMBER_OF_TRAVELERS = 1045,
    /**
     * Question: "What is your travel budget?"
     * Category: "Travel"
     *
     * @generated from protobuf enum value: TRAVEL_BUDGET = 1046;
     */
    TRAVEL_BUDGET = 1046,
    /**
     * Question: "Where do you want to stay during your travel?"
     * Category: "Travel"
     *
     * @generated from protobuf enum value: TRAVEL_ACCOMMODATION = 1047;
     */
    TRAVEL_ACCOMMODATION = 1047
}
// @generated message type with reflection information, may provide speed optimized methods
class LeadFormFieldUserInputTypeEnum$Type extends MessageType<LeadFormFieldUserInputTypeEnum> {
    constructor() {
        super("google.ads.googleads.v11.enums.LeadFormFieldUserInputTypeEnum", []);
    }
    create(value?: PartialMessage<LeadFormFieldUserInputTypeEnum>): LeadFormFieldUserInputTypeEnum {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<LeadFormFieldUserInputTypeEnum>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LeadFormFieldUserInputTypeEnum): LeadFormFieldUserInputTypeEnum {
        return target ?? this.create();
    }
    internalBinaryWrite(message: LeadFormFieldUserInputTypeEnum, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.ads.googleads.v11.enums.LeadFormFieldUserInputTypeEnum
 */
export const LeadFormFieldUserInputTypeEnum = new LeadFormFieldUserInputTypeEnum$Type();
