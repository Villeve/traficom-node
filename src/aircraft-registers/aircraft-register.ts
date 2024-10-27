import { AircraftRegister } from ".";
import { fetchJson } from "@/utils";
import { API_VERSION, AIRCRAFT_ENDPOINT } from "@/constants";

/**
 * @public
 * Retrieves aircraft register data.
 * @param {string} baseUrl - The base URL for the Traficom API.
 * @param {{ $expand?: string; $filter?: string; $select?: string; $orderby?: string; $top?: number; $skip?: number; $count?: boolean }} [params={}] - Optional parameters for the request.
 * @returns {Promise<{ value: AircraftRegister[] }>} A promise that resolves to an object containing an array of aircraft register data.
 * @throws {SDKError} If there's an error fetching the data.
 */
export const getAircraftRegister = async (
  baseUrl: string,
  params: {
    $expand?: string;
    $filter?: string;
    $select?: string;
    $orderby?: string;
    $top?: number;
    $skip?: number;
    $count?: boolean;
  } = {},
): Promise<{ value: AircraftRegister[] }> => {
  const queryParams = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, value.toString()]),
  ).toString();
  const baseEndpoint = `${baseUrl}/api/${API_VERSION}/${AIRCRAFT_ENDPOINT}`;
  const url = queryParams ? `${baseEndpoint}?${queryParams}` : baseEndpoint;
  return fetchJson(url);
};

/**
 * @public
 * Retrieves a specific aircraft register entry by ID.
 * @param {string} baseUrl - The base URL for the Traficom API.
 * @param {number} id - The ID of the aircraft register entry to retrieve.
 * @param {{ $expand?: string; $select?: string }} [params={}] - Optional parameters for the request.
 * @returns {Promise<AircraftRegister>} A promise that resolves to an aircraft register object.
 * @throws {SDKError} If there's an error fetching the data.
 */
export const getAircraftRegisterById = async (
  baseUrl: string,
  id: number,
  params: {
    $expand?: string;
    $select?: string;
  } = {},
): Promise<AircraftRegister> => {
  const queryParams = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, value.toString()]),
  ).toString();
  const endpoint = `${baseUrl}/api/${API_VERSION}/${AIRCRAFT_ENDPOINT}(${id})`;
  const url = queryParams ? `${endpoint}?${queryParams}` : endpoint;
  return fetchJson(url);
};
