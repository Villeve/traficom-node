import { LandlineTelephoneNetworkSubscriberNumber } from "./landline-telephone-network-subscriber-numbers.types";
import { fetchJson, handleApiError } from "@/utils";
import {
  API_VERSION,
  LANDLINE_TELEPHONE_NETWORK_SUBSCRIBER_NUMBERS_ENDPOINT,
} from "@/constants";
import {
  CommonQueryParams,
  MultiEntityResponse,
  SingleEntityResponse,
} from "@/types";
/**
 * Retrieves a list of landline telephone network subscriber numbers.
 * @param {string} baseUrl - The base URL for the Traficom API.
 * @param {CommonQueryParams} [params={}] - Optional parameters for filtering, sorting, and pagination.
 * @returns {Promise<MultiEntityResponse<LandlineTelephoneNetworkSubscriberNumber>>} A promise that resolves to the list of subscriber numbers.
 * @throws {TraficomError} If there's an error fetching the data.
 */
export const getLandlineTelephoneNetworkSubscriberNumbers = async (
  baseUrl: string,
  params: CommonQueryParams = {},
): Promise<MultiEntityResponse<LandlineTelephoneNetworkSubscriberNumber>> => {
  const queryParams = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, value.toString()]),
  ).toString();
  const url = `${baseUrl}/api/${API_VERSION}/${LANDLINE_TELEPHONE_NETWORK_SUBSCRIBER_NUMBERS_ENDPOINT}${
    queryParams ? `?${queryParams}` : ""
  }`;
  try {
    return await fetchJson(url);
  } catch (error) {
    handleApiError(error);
  }
};

/**
 * Retrieves a specific landline telephone network subscriber number by ID.
 * @param {string} baseUrl - The base URL for the Traficom API.
 * @param {number} id - The ID of the subscriber number to retrieve.
 * @param {CommonQueryParams} [params={}] - Optional parameters for the request.
 * @returns {Promise<SingleEntityResponse<LandlineTelephoneNetworkSubscriberNumber>>} A promise that resolves to the subscriber number data.
 * @throws {TraficomError} If there's an error fetching the data.
 */
export const getLandlineTelephoneNetworkSubscriberNumberById = async (
  baseUrl: string,
  id: number,
  params: CommonQueryParams = {},
): Promise<SingleEntityResponse<LandlineTelephoneNetworkSubscriberNumber>> => {
  const queryParams = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, value.toString()]),
  ).toString();
  const endpoint = `${baseUrl}/api/${API_VERSION}/${LANDLINE_TELEPHONE_NETWORK_SUBSCRIBER_NUMBERS_ENDPOINT}(${id})`;
  const url = queryParams ? `${endpoint}?${queryParams}` : endpoint;
  try {
    return await fetchJson(url);
  } catch (error) {
    handleApiError(error);
  }
};
