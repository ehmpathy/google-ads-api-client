# google-ads-api-client

![ci_on_commit](https://github.com/uladkasach/google-ads-api-client/workflows/ci_on_commit/badge.svg)
![deploy_on_tag](https://github.com/uladkasach/google-ads-api-client/workflows/deploy_on_tag/badge.svg)

A friendly and exhaustive client to the [google-ads-api](https://developers.google.com/google-ads/api/docs/start), code generated directly from google's published `protobuf` schema.

A friendly and exhaustive client to the google-ads-api, code generated directly from google's published `protobuf` schema.

# google-ads-api-client

An easy to use and exhaustive client to the google-ads-api, code generated directly from google's published `protobuf` schema.


# overview

this package is a thin utility making it easy to use the `grpc` endpoints that google exposes for their google ads api.

this package:
- code-generates the types + clients specified by google's `protobuf` schema of their api
- exposes a simple way to use the code-generated clients

the benefits:
- ✨ up to date - code generated from google's published `protobuf` definition of their api, ensuring its always up to date
- 🔥 exhaustive - all services and methods that google has published are exposed through this library, no api left behind
- 🚀 easy to use - documented, commented, and discoverable - making it easy to interact with their api
- 🙂 helpful - goes out of the way to keep you in a [pit of success](https://blog.codinghorror.com/falling-into-the-pit-of-success/)

# usage

install
```sh
npm install --save google-ads-api-client
```

# examples

### listing accessible customer ids

The google ads api requires you to specify which of your accessible google-ads-accounts (i.e., customers) you want to manage in a given api call. In order to specify them, you may first need to list the accessible ones.

```ts
import {
  getAuthenticatedGoogleAdsApiGrpcTransport,
  KeywordPlanIdeaServiceClient,
  isGrpcError,
  extractGoogleAdsApiError,
} from 'google-ads-api-client';


/**
 * the transport enables making authenticated api calls
 */
const transport = getAuthenticatedGoogleAdsApiGrpcTransport({
  clientId: '__CLIENT_ID__',
  clientSecret: '__CLIENT_SECRET__',
  refreshToken: '__REFRESH_TOKEN__',
  developerToken: '__DEVELOPER_TOKEN__',
});

/**
 * each service that google has in the google ads api has its own code-generated client
 *
 * note:
 * - you'll notice their online documentation is grouped per service
 * - your IDE will show you all of the available methods google exposes on each service through this client
 * - this client uses the authenticated transport you created above
 *
 * ref:
 * - https://developers.google.com/google-ads/api/reference/rpc/v11/overview#services
 */
const client = new CustomerServiceClient(transport);

/**
 * you can use the clients to make any request google supports
 *
 * note:
 * - wrap the request in a try-catch to decode errors the grcp api might throw (otherwise, they'll be unreadable)
 * - they come with jsdocs, so hover over the methods in your IDE to get more details
 * - each method is well documented online, so you can easily google-search the method to get google's official docs
 * - everything has type defs, so you can be sure you're making valid requests 🙂
 */
try {
  const { status, response } = await client.listAccessibleCustomers({});
  expect(status.code).toEqual('OK');
  expect(response.resourceNames.length).toBeGreaterThan(0);
} catch (error: any) {
  if (isGrpcError(error)) throw extractGoogleAdsApiError(error);
  throw error;
}
```

### lookup geo target constant locations by name

ref:
- https://developers.google.com/google-ads/api/docs/targeting/location-targeting

```ts
  const client = new GeoTargetConstantServiceClient(transport);
  try {
    const { response, status } = await client.suggestGeoTargetConstants(
      SuggestGeoTargetConstantsRequest.create({
        // https://developers.google.com/google-ads/api/reference/rpc/v11/SuggestGeoTargetConstantsRequest
        countryCode: 'US',
        query: {
          oneofKind: 'locationNames',
          locationNames: { names },
        },
      }),
    );
    expect(status.code).toEqual('OK');
    expect(response.geoTargetConstantSuggestions.length).toBeGreaterThan(0);
  } catch (error: any) {
    if (isGrpcError(error)) throw extractGoogleAdsApiError(error);
    throw error;
  }
```

### generate keyword ideas

per google
> Using the KeywordPlanIdeaService, you can search for new keywords that are relevant to your Google Search campaign, or find historical metrics on keywords.

ref:
- https://developers.google.com/google-ads/api/docs/keyword-planning/generate-keyword-ideas

```ts
  const client = new KeywordPlanIdeaServiceClient(transport);
  try {
    const { response, status } = await client.generateKeywordIdeas(
      GenerateKeywordIdeasRequest.create({
        // https://developers.google.com/google-ads/api/reference/rpc/v11/GenerateKeywordIdeasRequest
        customerId: config.google.ads.account.manager.customerId,
        geoTargetConstants: locationResourceNames,
        includeAdultKeywords: false,
        pageToken: undefined as any, // google's proto typedef doesn't match comments here
        pageSize: page.size,
        keywordPlanNetwork:
          KeywordPlanNetworkEnum_KeywordPlanNetwork.GOOGLE_SEARCH,
        keywordAnnotation: [
          KeywordPlanKeywordAnnotationEnum_KeywordPlanKeywordAnnotation.KEYWORD_CONCEPT,
        ],
        seed: {
          oneofKind: 'keywordSeed',
          keywordSeed: { keywords: [seed] },
        },
      }),
    );
    expect(status.code).toEqual('OK');
    expect(response.results.length).toBeGreaterThan(0);
  } catch (error: any) {
    if (isGrpcError(error)) throw extractGoogleAdsApiError(error);
    throw error;
  }
```

# development

1. install the `protoc` binary from google
```sh
PROTOC_ZIP=protoc-3.20.3-linux-x86_64.zip
curl -OL https://github.com/protocolbuffers/protobuf/releases/download/v3.20.3/$PROTOC_ZIP
sudo unzip -o $PROTOC_ZIP -d /usr/local bin/protoc
sudo unzip -o $PROTOC_ZIP -d /usr/local 'include/*'
rm -f $PROTOC_ZIP
protoc --version
# libprotoc 3.20.3
```

1. download the protos from google and generate typedefs and serde from them
```sh
./src/protos/sync.sh # takes ~20min, so be patient
```

# api access

Google has a delightfully complicated process for getting access to their api 😄

In order to get access, you'll need to:
- get a `developerToken`: https://developers.google.com/google-ads/api/docs/first-call/dev-token
- get an OAuth `clientId` and `clientSecret`: https://developers.google.com/google-ads/api/docs/oauth/cloud-project
- get a `refreshToken` from the user you want to impersonate: https://developers.google.com/google-ads/api/docs/client-libs/python/oauth-web
- create a test account: https://developers.google.com/google-ads/api/docs/first-call/test-accounts

# context

### protobuf, rpc, grpc
google uses two google-built technologies, `protobuf` and `rpc`, to maximize their api performance.
- `protobuf` is a way of serializing and deserializing data
  - alternatives:
    - `json`
    - `xml`
  - differences:
    - `protobuf` uses a schema when serializing + deserializing to achieve maximum performance + type saftey
      - these schemas are typically defined in a `.proto` file
    - `protobuf` schemas can be used to generate type definitions in any language
      - e.g., https://github.com/stephenh/ts-proto
  - similarities:
    - each language has to implement their own encoding + decoding utility
    - it serializes data in a deserlizable way
  - refs:
    - https://stackoverflow.com/questions/52409579/protocol-buffer-vs-json-when-to-choose-one-over-another
- `rpc` is a pattern for sending data over http (i.e., over internet)
  - alternatives
    - rest
    - graphql
  - differences
    - endpoint naming convention; https://stackoverflow.com/a/44240048/3068233
      - rpc: `http://MyRestaurant:8080/Orders/PlaceOrder (POST: {Tacos object})`
      - rest: `http://MyRestaurant:8080/Orders/Order?OrderNumber=asdf (POST: {Tacos object})`
  - similarities
    - uses `http` infrastructure to communicate (`GET`, `POST`)
    - sends serialized data over `http`
  - refs:
    - https://stackoverflow.com/questions/26830431/web-service-differences-between-rest-and-rpc
    - https://cloud.google.com/blog/products/api-management/understanding-grpc-openapi-and-rest-and-when-to-use-them

when used together, `protobuf + rpc = grpc`


### protos

`proto` = `protobuf schema`

google publicly exposes their protos here: https://github.com/googleapis/googleapis/tree/master/google/ads/googleads

for example:
```proto
// https://github.com/googleapis/googleapis/blob/master/google/ads/googleads/v11/resources/ad.proto
// An ad.
message Ad {
  option (google.api.resource) = {
    type: "googleads.googleapis.com/Ad"
    pattern: "customers/{customer_id}/ads/{ad_id}"
  };

  // Immutable. The resource name of the ad.
  // Ad resource names have the form:
  //
  // `customers/{customer_id}/ads/{ad_id}`
  string resource_name = 37 [
    (google.api.field_behavior) = IMMUTABLE,
    (google.api.resource_reference) = {
      type: "googleads.googleapis.com/Ad"
    }
  ];

  // Output only. The ID of the ad.
  optional int64 id = 40 [(google.api.field_behavior) = OUTPUT_ONLY];

  // The list of possible final URLs after all cross-domain redirects for the
  // ad.
  repeated string final_urls = 41;

  // A list of final app URLs that will be used on mobile if the user has the
  // specific app installed.
  repeated google.ads.googleads.v11.common.FinalAppUrl final_app_urls = 35;

  // The list of possible final mobile URLs after all cross-domain redirects
  // for the ad.
  repeated string final_mobile_urls = 42;

  //...
```

we use these schemas to generate `typescript` `typedefs` and `serde` (serialize-deserialize) methods with this tool: https://github.com/timostamm/protobuf-ts/

for example:
```ts

/**
 * An ad.
 *
 * @generated from protobuf message google.ads.googleads.v11.resources.Ad
 */
export interface Ad {
    /**
     * Immutable. The resource name of the ad.
     * Ad resource names have the form:
     *
     * `customers/{customer_id}/ads/{ad_id}`
     *
     * @generated from protobuf field: string resource_name = 37;
     */
    resourceName: string;
    /**
     * Output only. The ID of the ad.
     *
     * @generated from protobuf field: int64 id = 40;
     */
    id: bigint;
    /**
     * The list of possible final URLs after all cross-domain redirects for the
     * ad.
     *
     * @generated from protobuf field: repeated string final_urls = 41;
     */
    finalUrls: string[];
    /**
     * A list of final app URLs that will be used on mobile if the user has the
     * specific app installed.
     *
     * @generated from protobuf field: repeated google.ads.googleads.v11.common.FinalAppUrl final_app_urls = 35;
     */
    finalAppUrls: FinalAppUrl[];
    /**
     * The list of possible final mobile URLs after all cross-domain redirects
     * for the ad.
     *
     * @generated from protobuf field: repeated string final_mobile_urls = 42;
     */
    finalMobileUrls: string[];

    // ...
```
