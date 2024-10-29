import { MarineRadioNumber } from "./marine-radio-numbers.types";
import { fetchJson, handleApiError } from "@/utils";
import { API_VERSION, MARINE_RADIO_NUMBERS_ENDPOINT } from "@/constants";
import {
  MultiEntityResponse,
  SingleEntityResponse,
  CommonQueryParams,
  ExtendedQueryParams,
} from "@/types";

/**
 * Retrieves all marine radio numbers.
 * @param {string} baseUrl - The base URL for the Traficom API.
 * @param {{ $expand?: string; $select?: string; $filter?: string; $orderby?: string; $top?: number; $skip?: number; $count?: boolean }} [params={}] - Optional parameters for the request.
 * @returns {Promise<MultiEntityResponse<MarineRadioNumber>>} A promise that resolves to an object containing the marine radio numbers data and the OData context.
 * @throws {TraficomError} If there's an error fetching the data.
 */
export const getMarineRadioNumbers = async (
  baseUrl: string,
  params: ExtendedQueryParams = {},
): Promise<MultiEntityResponse<MarineRadioNumber>> => {
  const queryParams = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, value.toString()]),
  ).toString();
  const endpoint = `${baseUrl}/api/${API_VERSION}/${MARINE_RADIO_NUMBERS_ENDPOINT}`;
  const url = queryParams ? `${endpoint}?${queryParams}` : endpoint;
  try {
    return await fetchJson(url);
  } catch (error) {
    handleApiError(error);
  }
};

/**
 * Retrieves a specific marine radio number by ID.
 * @param {string} baseUrl - The base URL for the Traficom API.
 * @param {number} id - The ID of the marine radio number to retrieve.
 * @param {{ $expand?: string; $select?: string }} [params={}] - Optional parameters for the request.
 * @returns {Promise<SingleEntityResponse<MarineRadioNumber>>} A promise that resolves to an object containing the marine radio number data and the OData context.
 * @throws {TraficomError} If there's an error fetching the data.
 */
export const getMarineRadioNumberById = async (
  baseUrl: string,
  id: number,
  params: CommonQueryParams = {},
): Promise<SingleEntityResponse<MarineRadioNumber>> => {
  const queryParams = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, value.toString()]),
  ).toString();
  const endpoint = `${baseUrl}/api/${API_VERSION}/${MARINE_RADIO_NUMBERS_ENDPOINT}(${id})`;
  const url = queryParams ? `${endpoint}?${queryParams}` : endpoint;
  try {
    return await fetchJson(url);
  } catch (error) {
    handleApiError(error);
  }
};
