import { credentials, Metadata } from '@grpc/grpc-js';
import { GrpcTransport } from '@protobuf-ts/grpc-transport';
import { UserRefreshClient } from 'google-auth-library';

export const getAuthenticatedGoogleAdsApiGrpcTransport = ({
  clientId,
  clientSecret,
  refreshToken,
  developerToken,
}: {
  clientId: string;
  clientSecret: string;
  refreshToken: string;
  developerToken: string;
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
        callback(null, metadata);
      }),
    ),
  });
  return transport;
};
