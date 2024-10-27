import { HttpError, NetworkError, JsonParseError } from "./fetch-json";

export class SDKError extends Error {
  constructor(public originalError: Error) {
    super(originalError.message);
    this.name = "SDKError";
  }
}

export function handleFetchError(error: unknown): never {
  if (
    error instanceof HttpError ||
    error instanceof NetworkError ||
    error instanceof JsonParseError
  ) {
    throw new SDKError(error);
  } else if (error instanceof Error) {
    throw new SDKError(new Error("An unexpected error occurred"));
  } else {
    throw new SDKError(new Error("An unknown error occurred"));
  }
}
