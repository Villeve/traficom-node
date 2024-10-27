import { handleFetchError } from "./error-handler";

export class HttpError extends Error {
  constructor(
    public status: number,
    public statusText: string,
    message: string,
  ) {
    super(message);
    this.name = "HttpError";
  }
}

export class NetworkError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NetworkError";
  }
}

export class JsonParseError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "JsonParseError";
  }
}

export const fetchJson = async <T>(url: string): Promise<T> => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new HttpError(
        response.status,
        response.statusText,
        `HTTP error! status: ${response.status}`,
      );
    }

    const contentType = response.headers.get("content-type");
    if (!contentType?.includes("application/json")) {
      throw new HttpError(
        response.status,
        response.statusText,
        "Response is not JSON",
      );
    }

    return await response.json();
  } catch (error) {
    handleFetchError(error);
  }
};
