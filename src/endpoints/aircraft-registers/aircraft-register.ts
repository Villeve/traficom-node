import { AircraftRegister } from "./aircraft-register.types";
import { fetchJson, handleApiError } from "@/utils";
import { API_VERSION, AIRCRAFT_ENDPOINT } from "@/constants";
import {
  MultiEntityResponse,
  SingleEntityResponse,
  CommonQueryParams,
  ExtendedQueryParams,
} from "@/types";

/**
 * @public
 * Retrieves aircraft register data.
 * @param {string} baseUrl - The base URL for the Traficom API.
 * @param {{ $expand?: string; $filter?: string; $select?: string; $orderby?: string; $top?: number; $skip?: number; $count?: boolean }} [params={}] - Optional parameters for the request.
 * @returns {Promise<MultiEntityResponse<AircraftRegister>>} A promise that resolves to an object containing an array of aircraft register data, context, and optionally a count.
 * @throws {TraficomError} If there's an error fetching the data.
 */
export const getAircraftRegister = async (
  baseUrl: string,
  params: ExtendedQueryParams = {},
): Promise<MultiEntityResponse<AircraftRegister>> => {
  const queryParams = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, value.toString()]),
  ).toString();
  const baseEndpoint = `${baseUrl}/api/${API_VERSION}/${AIRCRAFT_ENDPOINT}`;
  const url = queryParams ? `${baseEndpoint}?${queryParams}` : baseEndpoint;
  try {
    return await fetchJson(url);
  } catch (error) {
    handleApiError(error);
  }
};

/**
 * @public
 * Retrieves a specific aircraft register entry by ID.
 * @param {string} baseUrl - The base URL for the Traficom API.
 * @param {number} id - The ID of the aircraft register entry to retrieve.
 * @param {{ $expand?: string; $select?: string }} [params={}] - Optional parameters for the request.
 * @returns {Promise<SingleEntityResponse<AircraftRegister>>} A promise that resolves to an object containing the aircraft register data and the OData context.
 * @throws {TraficomError} If there's an error fetching the data.
 */
export const getAircraftRegisterById = async (
  baseUrl: string,
  id: number,
  params: CommonQueryParams = {},
): Promise<SingleEntityResponse<AircraftRegister>> => {
  const queryParams = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, value.toString()]),
  ).toString();
  const endpoint = `${baseUrl}/api/${API_VERSION}/${AIRCRAFT_ENDPOINT}(${id})`;
  const url = queryParams ? `${endpoint}?${queryParams}` : endpoint;
  try {
    return await fetchJson(url);
  } catch (error) {
    handleApiError(error);
  }
};
