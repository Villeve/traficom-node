import {
  CommonQueryParams,
  ExtendedQueryParams,
  MultiEntityResponse,
  SingleEntityResponse,
} from "@/types";
import { API_VERSION, AUTOREPORTER_ENDPOINT } from "@/constants";
import { Autoreporter } from "./autoreporter.types";
import { fetchJson } from "@/utils/fetch-json";
import { handleApiError } from "@/utils";

/**
 * Retrieves a list of autoreporter entries.
 * @param {string} baseUrl - The base URL for the Traficom API.
 * @param {ExtendedQueryParams} [params={}] - Optional parameters for filtering, expanding, and selecting data.
 * @returns {Promise<MultiEntityResponse<Autoreporter>>} A promise that resolves to an object containing the autoreporter data and the OData context.
 * @throws {TraficomError} If there's an error fetching the data.
 */
export const getAutoreporters = async (
  baseUrl: string,
  params: ExtendedQueryParams = {},
): Promise<MultiEntityResponse<Autoreporter>> => {
  const queryParams = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, value.toString()]),
  ).toString();
  const endpoint = `${baseUrl}/api/${API_VERSION}/${AUTOREPORTER_ENDPOINT}`;
  const url = queryParams ? `${endpoint}?${queryParams}` : endpoint;
  try {
    return await fetchJson(url);
  } catch (error) {
    handleApiError(error);
  }
};

/**
 * Retrieves a specific autoreporter entry by ID.
 * @param {string} baseUrl - The base URL for the Traficom API.
 * @param {number} id - The ID of the autoreporter entry to retrieve.
 * @param {CommonQueryParams} [params={}] - Optional parameters for the request.
 * @returns {Promise<SingleEntityResponse<Autoreporter>>} A promise that resolves to an object containing the autoreporter data and the OData context.
 * @throws {TraficomError} If there's an error fetching the data.
 */
export const getAutoreporterById = async (
  baseUrl: string,
  id: number,
  params: CommonQueryParams = {},
): Promise<SingleEntityResponse<Autoreporter>> => {
  const queryParams = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, value.toString()]),
  ).toString();
  const endpoint = `${baseUrl}/api/${API_VERSION}/${AUTOREPORTER_ENDPOINT}(${id})`;
  const url = queryParams ? `${endpoint}?${queryParams}` : endpoint;
  try {
    return await fetchJson(url);
  } catch (error) {
    handleApiError(error);
  }
};
