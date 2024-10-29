import {
  API_VERSION,
  MOBILE_COMMUNICATION_NETWORK_AREA_CODES_ENDPOINT,
} from "@/constants";
import { MobileCommunicationNetworkAreaCode } from "./mobile-communication-network-area-codes.types";
import { fetchJson } from "@/utils/fetch-json";
import { handleApiError } from "@/utils/error-handler";
import {
  MultiEntityResponse,
  SingleEntityResponse,
  CommonQueryParams,
  ExtendedQueryParams,
} from "@/types";

/**
 * Retrieves all mobile communication network area codes.
 * @param {string} baseUrl - The base URL for the Traficom API.
 * @param {{ $expand?: string; $select?: string; $filter?: string; $orderby?: string; $top?: number; $skip?: number; $count?: boolean }} [params={}] - Optional parameters for the request.
 * @returns {Promise<MultiEntityResponse<MobileCommunicationNetworkAreaCode>>} A promise that resolves to an object containing the area codes data and the OData context.
 * @throws {TraficomError} If there's an error fetching the data.
 */
export const getMobileCommunicationNetworkAreaCodes = async (
  baseUrl: string,
  params: ExtendedQueryParams = {},
): Promise<MultiEntityResponse<MobileCommunicationNetworkAreaCode>> => {
  const queryParams = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, value.toString()]),
  ).toString();
  const endpoint = `${baseUrl}/api/${API_VERSION}/${MOBILE_COMMUNICATION_NETWORK_AREA_CODES_ENDPOINT}`;
  const url = queryParams ? `${endpoint}?${queryParams}` : endpoint;
  try {
    return await fetchJson(url);
  } catch (error) {
    handleApiError(error);
  }
};

/**
 * Retrieves a specific mobile communication network area code by ID.
 * @param {string} baseUrl - The base URL for the Traficom API.
 * @param {number} id - The ID of the area code to retrieve.
 * @param {{ $expand?: string; $select?: string }} [params={}] - Optional parameters for the request.
 * @returns {Promise<SingleEntityResponse<MobileCommunicationNetworkAreaCode>>} A promise that resolves to an object containing the area code data and the OData context.
 * @throws {TraficomError} If there's an error fetching the data.
 */
export const getMobileCommunicationNetworkAreaCodeById = async (
  baseUrl: string,
  id: number,
  params: CommonQueryParams = {},
): Promise<SingleEntityResponse<MobileCommunicationNetworkAreaCode>> => {
  const queryParams = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, value.toString()]),
  ).toString();
  const endpoint = `${baseUrl}/api/${API_VERSION}/${MOBILE_COMMUNICATION_NETWORK_AREA_CODES_ENDPOINT}(${id})`;
  const url = queryParams ? `${endpoint}?${queryParams}` : endpoint;
  try {
    return await fetchJson(url);
  } catch (error) {
    handleApiError(error);
  }
};
