import { FrequencyDistributionTableSweden } from "./frequency-distribution-table-sweden.types";
import { fetchJson, handleApiError } from "@/utils";
import {
  API_VERSION,
  FREQUENCY_DISTRIBUTION_TABLE_SWEDEN_ENDPOINT,
} from "@/constants";
import {
  MultiEntityResponse,
  SingleEntityResponse,
  CommonQueryParams,
  ExtendedQueryParams,
} from "@/types";

/**
 * Retrieves all frequency distribution table entries in Swedish.
 * @param {string} baseUrl - The base URL for the Traficom API.
 * @param {{ $expand?: string; $select?: string; $filter?: string; $orderby?: string; $top?: number; $skip?: number; $count?: boolean }} [params={}] - Optional parameters for the request.
 * @returns {Promise<MultiEntityResponse<FrequencyDistributionTableSweden>>} A promise that resolves to an object containing the frequency distribution table data and the OData context.
 * @throws {TraficomError} If there's an error fetching the data.
 */
export const getFrequencyDistributionTableSweden = async (
  baseUrl: string,
  params: ExtendedQueryParams = {},
): Promise<MultiEntityResponse<FrequencyDistributionTableSweden>> => {
  const queryParams = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, value.toString()]),
  ).toString();
  const endpoint = `${baseUrl}/api/${API_VERSION}/${FREQUENCY_DISTRIBUTION_TABLE_SWEDEN_ENDPOINT}`;
  const url = queryParams ? `${endpoint}?${queryParams}` : endpoint;
  try {
    return await fetchJson(url);
  } catch (error) {
    handleApiError(error);
  }
};

/**
 * Retrieves a specific frequency distribution table entry in Swedish by ID.
 * @param {string} baseUrl - The base URL for the Traficom API.
 * @param {number} id - The ID of the frequency distribution table entry to retrieve.
 * @param {{ $expand?: string; $select?: string }} [params={}] - Optional parameters for the request.
 * @returns {Promise<SingleEntityResponse<FrequencyDistributionTableSweden>>} A promise that resolves to an object containing the frequency distribution table entry data and the OData context.
 * @throws {TraficomError} If there's an error fetching the data.
 */
export const getFrequencyDistributionTableSwedenById = async (
  baseUrl: string,
  id: number,
  params: CommonQueryParams = {},
): Promise<SingleEntityResponse<FrequencyDistributionTableSweden>> => {
  const queryParams = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, value.toString()]),
  ).toString();
  const endpoint = `${baseUrl}/api/${API_VERSION}/${FREQUENCY_DISTRIBUTION_TABLE_SWEDEN_ENDPOINT}(${id})`;
  const url = queryParams ? `${endpoint}?${queryParams}` : endpoint;
  try {
    return await fetchJson(url);
  } catch (error) {
    handleApiError(error);
  }
};
