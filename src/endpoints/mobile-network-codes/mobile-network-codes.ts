import { API_VERSION, MOBILE_NETWORK_CODES_ENDPOINT } from "@/constants";
import { MobileNetworkCode } from "./mobile-network-codes.types";
import { fetchJson } from "@/utils/fetch-json";
import { handleApiError } from "@/utils/error-handler";
import {
  MultiEntityResponse,
  SingleEntityResponse,
  CommonQueryParams,
  ExtendedQueryParams,
} from "@/types";

/**
 * Retrieves all mobile network codes.
 * @param {string} baseUrl - The base URL for the Traficom API.
 * @param {{ $expand?: string; $select?: string; $filter?: string; $orderby?: string; $top?: number; $skip?: number; $count?: boolean }} [params={}] - Optional parameters for the request.
 * @returns {Promise<MultiEntityResponse<MobileNetworkCode>>} A promise that resolves to an object containing the mobile network codes data and the OData context.
 * @throws {TraficomError} If there's an error fetching the data.
 */
export const getMobileNetworkCodes = async (
  baseUrl: string,
  params: ExtendedQueryParams = {},
): Promise<MultiEntityResponse<MobileNetworkCode>> => {
  const queryParams = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, value.toString()]),
  ).toString();
  const endpoint = `${baseUrl}/api/${API_VERSION}/${MOBILE_NETWORK_CODES_ENDPOINT}`;
  const url = queryParams ? `${endpoint}?${queryParams}` : endpoint;
  try {
    return await fetchJson(url);
  } catch (error) {
    handleApiError(error);
  }
};

/**
 * Retrieves a specific mobile network code by ID.
 * @param {string} baseUrl - The base URL for the Traficom API.
 * @param {number} id - The ID of the mobile network code to retrieve.
 * @param {{ $expand?: string; $select?: string }} [params={}] - Optional parameters for the request.
 * @returns {Promise<SingleEntityResponse<MobileNetworkCode>>} A promise that resolves to an object containing the mobile network code data and the OData context.
 * @throws {TraficomError} If there's an error fetching the data.
 */
export const getMobileNetworkCodeById = async (
  baseUrl: string,
  id: number,
  params: CommonQueryParams = {},
): Promise<SingleEntityResponse<MobileNetworkCode>> => {
  const queryParams = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, value.toString()]),
  ).toString();
  const endpoint = `${baseUrl}/api/${API_VERSION}/${MOBILE_NETWORK_CODES_ENDPOINT}(${id})`;
  const url = queryParams ? `${endpoint}?${queryParams}` : endpoint;
  try {
    return await fetchJson(url);
  } catch (error) {
    handleApiError(error);
  }
};
