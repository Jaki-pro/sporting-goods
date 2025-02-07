export type TErrorRespone = {
  status: number;
  data: {
    err: Record<string, unknown>; // Empty object or unknown error structure
    errorSources: { path: string; message: string }[]; // List of error sources
    message: string; // General error message
    stack: string | null; // Stack trace, if available
    success: boolean; // Indicates failure (false)
  };
};
