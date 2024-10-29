import { RadioAmateurCallSign } from "./radio-amateur-call-signs.types";
import { fetchJson, handleApiError } from "@/utils";
import { API_VERSION, RADIO_AMATEUR_CALL_SIGNS_ENDPOINT } from "@/constants";
import {
  MultiEntityResponse,
  SingleEntityResponse,
  CommonQueryParams,
  ExtendedQueryParams,
} from "@/types";

/**
 * Retrieves all radio amateur call signs.
 * @param {string} baseUrl - The base URL for the Traficom API.
 * @param {{ $expand?: string; $select?: string; $filter?: string; $orderby?: string; $top?: number; $skip?: number; $count?: boolean }} [params={}] - Optional parameters for the request.
 * @returns {Promise<MultiEntityResponse<RadioAmateurCallSign>>} A promise that resolves to an object containing the radio amateur call signs data and the OData context.
 * @throws {TraficomError} If there's an error fetching the data.
 */
export const getRadioAmateurCallSigns = async (
  baseUrl: string,
  params: ExtendedQueryParams = {},
): Promise<MultiEntityResponse<RadioAmateurCallSign>> => {
  const queryParams = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, value.toString()]),
  ).toString();
  const endpoint = `${baseUrl}/api/${API_VERSION}/${RADIO_AMATEUR_CALL_SIGNS_ENDPOINT}`;
  const url = queryParams ? `${endpoint}?${queryParams}` : endpoint;
  try {
    return await fetchJson(url);
  } catch (error) {
    handleApiError(error);
  }
};

/**
 * Retrieves a specific radio amateur call sign by ID.
 * @param {string} baseUrl - The base URL for the Traficom API.
 * @param {number} id - The ID of the radio amateur call sign to retrieve.
 * @param {{ $expand?: string; $select?: string }} [params={}] - Optional parameters for the request.
 * @returns {Promise<SingleEntityResponse<RadioAmateurCallSign>>} A promise that resolves to an object containing the radio amateur call sign data and the OData context.
 * @throws {TraficomError} If there's an error fetching the data.
 */
export const getRadioAmateurCallSignById = async (
  baseUrl: string,
  id: number,
  params: CommonQueryParams = {},
): Promise<SingleEntityResponse<RadioAmateurCallSign>> => {
  const queryParams = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, value.toString()]),
  ).toString();
  const endpoint = `${baseUrl}/api/${API_VERSION}/${RADIO_AMATEUR_CALL_SIGNS_ENDPOINT}(${id})`;
  const url = queryParams ? `${endpoint}?${queryParams}` : endpoint;
  try {
    return await fetchJson(url);
  } catch (error) {
    handleApiError(error);
  }
};
