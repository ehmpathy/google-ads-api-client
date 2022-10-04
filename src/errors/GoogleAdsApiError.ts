import { GoogleAdsFailure } from '..';
import { isGrpcError } from './GrpcError';

export class GoogleAdsApiError extends Error {
  public failure: GoogleAdsFailure;
  constructor({ failure }: { failure: GoogleAdsFailure }) {
    super(
      `
Google Ads Api has reported the following failure:
${JSON.stringify(failure, null, 2)}
        `.trim(),
    );
    this.failure = failure;
  }
}

export class CouldNotExtractGoogleAdsApiError extends Error {
  public source: Error;
  constructor({ source }: { source: Error }) {
    super(
      `
Could not extract a google ads api error from the following source error:
${JSON.stringify(source, null, 2)}
    `.trim(),
    );
    this.source = source;
  }
}

/**
 * extracts a GoogleAdsError from the error object
 *
 * note:
 * - if its not possible to extract a GoogleAdsError from the input, it will throw a helpful error message
 */
export const extractGoogleAdsApiError = (error: Error) => {
  // check that its a grcp error; otherwise, no chance
  if (!isGrpcError(error))
    throw new CouldNotExtractGoogleAdsApiError({ source: error });

  // try and grab the failure binary from the grcp error
  const googleAdsFailureBin = (error as any).meta?.[
    'google.ads.googleads.v11.errors.googleadsfailure-bin'
  ];
  if (!googleAdsFailureBin)
    throw new CouldNotExtractGoogleAdsApiError({ source: error });

  // decode the failure and cast to GoogleAdsApiError
  const failure = GoogleAdsFailure.fromBinary(
    Uint8Array.from(Buffer.from(googleAdsFailureBin, 'base64')),
  );
  return new GoogleAdsApiError({ failure });
};
