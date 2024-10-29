import {
  CommonQueryParams,
  ExtendedQueryParams,
  MultiEntityResponse,
  SingleEntityResponse,
} from "@/types";
import { API_VERSION, AUTOREPORTER_UTC_ENDPOINT } from "@/constants";
import { AutoreporterUTC } from "./autoreporter-utc.types";
import { fetchJson } from "@/utils/fetch-json";
import { handleApiError } from "@/utils";

/**
 * Get all AutoreporterUTC entries
 * @param baseUrl - The base URL for the API
 * @param params - Query parameters for filtering, sorting, etc.
 * @returns Promise with the response containing AutoreporterUTC entries
 */
export const getAutoreporterUTCs = async (
  baseUrl: string,
  params: ExtendedQueryParams = {},
): Promise<MultiEntityResponse<AutoreporterUTC>> => {
  const queryParams = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, value.toString()]),
  ).toString();
  const endpoint = `${baseUrl}/api/${API_VERSION}/${AUTOREPORTER_UTC_ENDPOINT}`;
  const url = queryParams ? `${endpoint}?${queryParams}` : endpoint;
  try {
    return await fetchJson(url);
  } catch (error) {
    handleApiError(error);
  }
};

/**
 * Get a single AutoreporterUTC entry by ID
 * @param baseUrl - The base URL for the API
 * @param id - The ID of the AutoreporterUTC entry
 * @param params - Query parameters for expanding related entities
 * @returns Promise with the response containing a single AutoreporterUTC entry
 */
export const getAutoreporterUTCById = async (
  baseUrl: string,
  id: number,
  params: CommonQueryParams = {},
): Promise<SingleEntityResponse<AutoreporterUTC>> => {
  const queryParams = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, value.toString()]),
  ).toString();
  const endpoint = `${baseUrl}/api/${API_VERSION}/${AUTOREPORTER_UTC_ENDPOINT}(${id})`;
  const url = queryParams ? `${endpoint}?${queryParams}` : endpoint;
  try {
    return await fetchJson(url);
  } catch (error) {
    handleApiError(error);
  }
};
