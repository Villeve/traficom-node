import { fetchJson } from "@/utils";
import { TETRAMobileNetworkCode } from "./tetra-mobile-network-code.types";
import { handleApiError } from "@/utils";
import { API_VERSION, TETRA_ENDPOINT } from "@/constants";
import { CommonQueryParams, ExtendedQueryParams } from "@/types/api-params";
import { ODataResponse, SingleEntityResponse } from "@/types/api-response";

/**
 * @public
 * Retrieves TETRA mobile network codes.
 * @param {string} baseUrl - The base URL for the Traficom API.
 * @param {ExtendedQueryParams} [params={}] - Optional parameters for the request.
 * @returns {Promise<ODataResponse<TETRAMobileNetworkCode>>} A promise that resolves to an object containing an array of TETRA mobile network codes, context, and optionally a count.
 * @throws {TraficomError} If there's an error fetching the data.
 */
export const getTETRAMobileNetworkCodes = async (
  baseUrl: string,
  params: ExtendedQueryParams = {},
): Promise<ODataResponse<TETRAMobileNetworkCode>> => {
  const queryParams = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, value.toString()]),
  ).toString();
  const url =
    `${baseUrl}/api/${API_VERSION}/${TETRA_ENDPOINT}` +
    (queryParams ? `?${queryParams}` : "");

  try {
    return await fetchJson(url);
  } catch (error) {
    handleApiError(error);
  }
};

/**
 * @public
 * Retrieves a specific TETRA mobile network code by ID.
 * @param {string} baseUrl - The base URL for the Traficom API.
 * @param {number} id - The ID of the TETRA mobile network code to retrieve.
 * @param {CommonQueryParams} [params={}] - Optional parameters for the request.
 * @returns {Promise<SingleEntityResponse<TETRAMobileNetworkCode>>} A promise that resolves to an object containing the TETRA mobile network code data and the OData context.
 * @throws {TraficomError} If there's an error fetching the data.
 */
export const getTETRAMobileNetworkCodeById = async (
  baseUrl: string,
  id: number,
  params: CommonQueryParams = {},
): Promise<SingleEntityResponse<TETRAMobileNetworkCode>> => {
  const queryParams = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, value.toString()]),
  ).toString();
  const baseUrlWithId = `${baseUrl}/api/${API_VERSION}/${TETRA_ENDPOINT}(${id})`;
  const url = queryParams ? `${baseUrlWithId}?${queryParams}` : baseUrlWithId;
  try {
    return await fetchJson(url);
  } catch (error) {
    handleApiError(error);
  }
};
