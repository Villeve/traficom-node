import { fetchJson, handleApiError } from "@/utils";
import { InternationalTelecomOperatorId } from "./international-telecom-operator-id.types";
import {
  API_VERSION,
  INTERNATIONAL_TELECOM_OPERATOR_IDS_ENDPOINT,
} from "@/constants";
import {
  MultiEntityResponse,
  SingleEntityResponse,
  CommonQueryParams,
  ExtendedQueryParams,
} from "@/types";

/**
 * Retrieves international telecom operator IDs.
 * @param {string} baseUrl - The base URL for the Traficom API.
 * @param {ExtendedQueryParams} [params={}] - Optional parameters for the request.
 * @returns {Promise<MultiEntityResponse<InternationalTelecomOperatorId>>} A promise that resolves to an object containing an array of international telecom operator IDs.
 * @throws {TraficomError} If there's an error fetching the data.
 */
export const getInternationalTelecomOperatorIds = async (
  baseUrl: string,
  params: ExtendedQueryParams = {},
): Promise<MultiEntityResponse<InternationalTelecomOperatorId>> => {
  const queryParams = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, value.toString()]),
  ).toString();
  const endpoint = `${baseUrl}/api/${API_VERSION}/${INTERNATIONAL_TELECOM_OPERATOR_IDS_ENDPOINT}`;
  const url = queryParams ? `${endpoint}?${queryParams}` : endpoint;
  try {
    return await fetchJson(url);
  } catch (error) {
    handleApiError(error);
  }
};

/**
 * Retrieves a specific international telecom operator ID by ID.
 * @param {string} baseUrl - The base URL for the Traficom API.
 * @param {number} id - The ID of the international telecom operator ID to retrieve.
 * @param {CommonQueryParams} [params={}] - Optional parameters for the request.
 * @returns {Promise<SingleEntityResponse<InternationalTelecomOperatorId>>} A promise that resolves to an object containing the international telecom operator ID data.
 * @throws {TraficomError} If there's an error fetching the data.
 */
export const getInternationalTelecomOperatorIdById = async (
  baseUrl: string,
  id: number,
  params: CommonQueryParams = {},
): Promise<SingleEntityResponse<InternationalTelecomOperatorId>> => {
  const queryParams = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, value.toString()]),
  ).toString();
  const endpoint = `${baseUrl}/api/${API_VERSION}/${INTERNATIONAL_TELECOM_OPERATOR_IDS_ENDPOINT}(${id})`;
  const url = queryParams ? `${endpoint}?${queryParams}` : endpoint;
  try {
    return await fetchJson(url);
  } catch (error) {
    handleApiError(error);
  }
};
