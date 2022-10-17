import { credentials, Metadata } from '@grpc/grpc-js';
import { GrpcTransport } from '@protobuf-ts/grpc-transport';
import { UserRefreshClient } from 'google-auth-library';

/**
 * creates an authenticated google-ads-api grcp transport, ready for use in making api calls
 *
 * ref:
 * - https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid
 */
export const getAuthenticatedGoogleAdsApiGrpcTransport = ({
  clientId,
  clientSecret,
  refreshToken,
  developerToken,
  loginCustomerId,
  linkedCustomerId,
}: {
  clientId: string;
  clientSecret: string;
  refreshToken: string;

  /**
   * per google
   * > A developer token is a 22-character string that uniquely identifies a Google Ads API developer.
   * > An example developer token string is ABcdeFGH93KL-NOPQ_STUv.
   *
   * ref
   * - https://developers.google.com/google-ads/api/docs/concepts/call-structure#developer-token
   */
  developerToken: string;

  /**
   * per google
   * > This is the customer ID of the authorized customer to use in the request, without hyphens (-).
   * > If your access to the customer account is through a manager account, this header is required and must be set to the customer ID of the manager account.
   *
   * > Setting the login-customer-id is equivalent to choosing an account in the Google Ads UI after signing in or clicking on your profile image at the top right. If you do not include this header, it defaults to the operating customer.
   *
   * ref
   * - https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid
   */
  loginCustomerId?: string;

  /**
   * per google
   * > This header is only used by third-party app analytics providers when uploading conversions to a linked Google Ads account.
   *
   * ref
   * - https://developers.google.com/google-ads/api/docs/concepts/call-structure#linked-customer-id
   */
  linkedCustomerId?: string;
}) => {
  const authClient = new UserRefreshClient(
    clientId,
    clientSecret,
    refreshToken,
  );
  const sslCreds = credentials.createSsl();
  const transport = new GrpcTransport({
    host: 'googleads.googleapis.com', // TODO: is this always accurate?
    channelCredentials: credentials.combineChannelCredentials(
      sslCreds,
      credentials.createFromGoogleCredential(authClient),
      credentials.createFromMetadataGenerator((_, callback) => {
        const metadata = new Metadata();
        metadata.add('developer-token', developerToken);
        if (loginCustomerId) metadata.add('login-customer-id', loginCustomerId);
        if (linkedCustomerId)
          metadata.add('linked-customer-id', linkedCustomerId);
        callback(null, metadata);
      }),
    ),
  });
  return transport;
};
