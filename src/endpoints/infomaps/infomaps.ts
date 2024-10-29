import {
  CommonQueryParams,
  ExtendedQueryParams,
  MultiEntityResponse,
  SingleEntityResponse,
} from "@/types";
import { API_VERSION, INFOMAPS_ENDPOINT } from "@/constants";
import { fetchJson } from "@/utils/fetch-json";
import { handleApiError } from "@/utils";
import { Infomap } from "./infomaps.types";

/**
 * Get all Infomap entries
 * @param baseUrl - The base URL for the API
 * @param params - Query parameters for filtering, sorting, etc.
 * @returns Promise with the response containing Infomap entries
 */
export const getInfomaps = async (
  baseUrl: string,
  params: ExtendedQueryParams = {},
): Promise<MultiEntityResponse<Infomap>> => {
  const queryParams = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, value.toString()]),
  ).toString();
  const endpoint = `${baseUrl}/api/${API_VERSION}/${INFOMAPS_ENDPOINT}`;
  const url = queryParams ? `${endpoint}?${queryParams}` : endpoint;
  try {
    return await fetchJson(url);
  } catch (error) {
    handleApiError(error);
  }
};

/**
 * Get a single Infomap entry by ID
 * @param baseUrl - The base URL for the API
 * @param id - The ID of the Infomap entry
 * @param params - Query parameters for expanding related entities
 * @returns Promise with the response containing a single Infomap entry
 */
export const getInfomapById = async (
  baseUrl: string,
  id: number,
  params: CommonQueryParams = {},
): Promise<SingleEntityResponse<Infomap>> => {
  const queryParams = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, value.toString()]),
  ).toString();
  const endpoint = `${baseUrl}/api/${API_VERSION}/${INFOMAPS_ENDPOINT}(${id})`;
  const url = queryParams ? `${endpoint}?${queryParams}` : endpoint;
  try {
    return await fetchJson(url);
  } catch (error) {
    handleApiError(error);
  }
};
