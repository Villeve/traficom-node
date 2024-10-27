import { API_VERSION, VEHICLE_ENDPOINT } from "@/constants";
import { VehicleRegister } from "./vehicle-register.types";
import { fetchJson } from "@/utils/fetch-json";
import { handleApiError } from "@/utils/error-handler";
import {
  MultiEntityResponse,
  SingleEntityResponse,
  CommonQueryParams,
  ExtendedQueryParams,
} from "@/types";

/**
 * @public
 * Retrieves all vehicle register entries.
 * @param {string} baseUrl - The base URL for the Traficom API.
 * @param {{ $expand?: string; $select?: string; $filter?: string; $orderby?: string; $top?: number; $skip?: number; $count?: boolean }} [params={}] - Optional parameters for the request.
 * @returns {Promise<MultiEntityResponse<VehicleRegister>>} A promise that resolves to an object containing the vehicle register data and the OData context.
 * @throws {TraficomError} If there's an error fetching the data.
 */
export const getVehicleRegisters = async (
  baseUrl: string,
  params: ExtendedQueryParams = {},
): Promise<MultiEntityResponse<VehicleRegister>> => {
  const queryParams = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, value.toString()]),
  ).toString();
  const endpoint = `${baseUrl}/api/${API_VERSION}/${VEHICLE_ENDPOINT}`;
  const url = queryParams ? `${endpoint}?${queryParams}` : endpoint;
  try {
    return await fetchJson(url);
  } catch (error) {
    handleApiError(error);
  }
};

/**
 * @public
 * Retrieves a specific vehicle register entry by ID.
 * @param {string} baseUrl - The base URL for the Traficom API.
 * @param {number} id - The ID of the vehicle register entry to retrieve.
 * @param {{ $expand?: string; $select?: string }} [params={}] - Optional parameters for the request.
 * @returns {Promise<SingleEntityResponse<VehicleRegister>>} A promise that resolves to an object containing the vehicle register data and the OData context.
 * @throws {TraficomError} If there's an error fetching the data.
 */
export const getVehicleRegisterById = async (
  baseUrl: string,
  id: number,
  params: CommonQueryParams = {},
): Promise<SingleEntityResponse<VehicleRegister>> => {
  const queryParams = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, value.toString()]),
  ).toString();
  const endpoint = `${baseUrl}/api/${API_VERSION}/${VEHICLE_ENDPOINT}(${id})`;
  const url = queryParams ? `${endpoint}?${queryParams}` : endpoint;
  try {
    return await fetchJson(url);
  } catch (error) {
    handleApiError(error);
  }
};
