import {
  API_VERSION,
  SHORT_MESSAGE_SERVICE_NUMBERS_ENDPOINT,
} from "@/constants";
import { ShortMessageServiceNumber } from "./short-message-service-numbers.types";
import { fetchJson } from "@/utils/fetch-json";
import { handleApiError } from "@/utils/error-handler";
import { MultiEntityResponse, ExtendedQueryParams } from "@/types";

/**
 * Retrieves all short message service numbers.
 * @param {string} baseUrl - The base URL for the Traficom API.
 * @param {{ $expand?: string; $select?: string; $filter?: string; $orderby?: string; $top?: number; $skip?: number; $count?: boolean }} [params={}] - Optional parameters for the request.
 * @returns {Promise<MultiEntityResponse<ShortMessageServiceNumber>>} A promise that resolves to an object containing the short message service numbers data and the OData context.
 * @throws {TraficomError} If there's an error fetching the data.
 */
export const getShortMessageServiceNumbers = async (
  baseUrl: string,
  params: ExtendedQueryParams = {},
): Promise<MultiEntityResponse<ShortMessageServiceNumber>> => {
  const queryParams = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, value.toString()]),
  ).toString();
  const endpoint = `${baseUrl}/api/${API_VERSION}/${SHORT_MESSAGE_SERVICE_NUMBERS_ENDPOINT}`;
  const url = queryParams ? `${endpoint}?${queryParams}` : endpoint;
  try {
    return await fetchJson(url);
  } catch (error) {
    handleApiError(error);
  }
};
