/* eslint-disable @typescript-eslint/camelcase */
import * as dotenv from 'dotenv';
import { getAuthenticatedGoogleAdsApiGrpcTransport, KeywordPlanIdeaServiceClient, isGrpcError, extractGoogleAdsApiError } from './index';
import {
  CustomerServiceClient,
  GenerateKeywordIdeasRequest,
  KeywordPlanKeywordAnnotationEnum_KeywordPlanKeywordAnnotation,
  KeywordPlanNetworkEnum_KeywordPlanNetwork,
} from './protos';

dotenv.config();

const config = {
  google: {
    ads: {
      api: {
        clientId: process.env.GOOGLE_ADS_API_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_ADS_API_CLIENT_SECRET!,
        refreshToken: process.env.GOOGLE_ADS_API_REFRESH_TOKEN!,
        developerToken: process.env.GOOGLE_ADS_API_DEVELOPER_TOKEN!,
      },
    },
  },
};

describe('index', () => {
  it('should be possible to list customers', async () => {
    /**
     * the transport enables making authenticated api calls
     */
    const transport = getAuthenticatedGoogleAdsApiGrpcTransport({
      clientId: config.google.ads.api.clientId,
      clientSecret: config.google.ads.api.clientSecret,
      refreshToken: config.google.ads.api.refreshToken,
      developerToken: config.google.ads.api.developerToken,
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
    } catch (error) {
      if (isGrpcError(error)) throw extractGoogleAdsApiError(error);
      throw error;
    }
  });
  it.skip('should be able to get keyword ideas', async () => {
    const transport = getAuthenticatedGoogleAdsApiGrpcTransport({
      clientId: config.google.ads.api.clientId,
      clientSecret: config.google.ads.api.clientSecret,
      refreshToken: config.google.ads.api.refreshToken,
      developerToken: config.google.ads.api.developerToken,
    });
    const client = new KeywordPlanIdeaServiceClient(transport);

    try {
      const { response, status } = await client.generateKeywordIdeas(
        GenerateKeywordIdeasRequest.create({
          // https://developers.google.com/google-ads/api/reference/rpc/v11/GenerateKeywordIdeasRequest
          customerId: '__REDACTED__',
          geoTargetConstants: [],
          includeAdultKeywords: false,
          pageToken: undefined as any, // google's proto typedef doesn't match comments here
          pageSize: 10,
          keywordPlanNetwork: KeywordPlanNetworkEnum_KeywordPlanNetwork.GOOGLE_SEARCH,
          keywordAnnotation: [KeywordPlanKeywordAnnotationEnum_KeywordPlanKeywordAnnotation.KEYWORD_CONCEPT],
          seed: {
            oneofKind: 'keywordSeed',
            keywordSeed: { keywords: ['junk removal'] },
          },
        }),
      );
      expect(status.code).toEqual('OK');
      expect(response.results.length).toBeGreaterThan(0);
    } catch (error) {
      if (isGrpcError(error)) throw extractGoogleAdsApiError(error);
      throw error;
    }
  });
});
