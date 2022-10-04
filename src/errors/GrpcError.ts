export interface GrpcError extends Error {
  meta: {
    'request-id': string;
    'grpc-status-details-bin': string;
  };
}
export const isGrpcError = (error: unknown): error is GrpcError => {
  if (!(error instanceof Error)) return false;
  if (!(error as any).meta?.['grpc-status-details-bin']) return false;
  return true;
};
