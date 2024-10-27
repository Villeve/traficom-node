import { fetchJson } from "@/utils";
import {
  GetTETRAMobileNetworkCodesParams,
  TETRAMobileNetworkCode,
} from "./tetra-mobile-network-code.types";
import { handleFetchError } from "@/utils/error-handler";
import { API_VERSION, TETRA_ENDPOINT } from "@/constants";

/**
 * @public
 * Retrieves TETRA mobile network codes.
 * @param {string} baseUrl - The base URL for the Traficom API.
 * @param {GetTETRAMobileNetworkCodesParams} [params={}] - Optional parameters for the request.
 * @returns {Promise<{ value: TETRAMobileNetworkCode[] }>} A promise that resolves to an object containing an array of TETRA mobile network codes.
 * @throws {SDKError} If there's an error fetching the data.
 */
export const getTETRAMobileNetworkCodes = async (
  baseUrl: string,
  params: GetTETRAMobileNetworkCodesParams = {},
): Promise<{ value: TETRAMobileNetworkCode[] }> => {
  const queryParams = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, value.toString()]),
  ).toString();
  const url =
    `${baseUrl}/api/${API_VERSION}/${TETRA_ENDPOINT}` +
    (queryParams ? `?${queryParams}` : "");

  try {
    return await fetchJson(url);
  } catch (error) {
    handleFetchError(error);
  }
};

/**
 * @public
 * Retrieves a specific TETRA mobile network code by ID.
 * @param {string} baseUrl - The base URL for the Traficom API.
 * @param {number} id - The ID of the TETRA mobile network code to retrieve.
 * @param {{ $expand?: string; $select?: string }} [params={}] - Optional parameters for the request.
 * @returns {Promise<TETRAMobileNetworkCode>} A promise that resolves to a TETRA mobile network code object.
 * @throws {SDKError} If there's an error fetching the data.
 */
export const getTETRAMobileNetworkCodeById = async (
  baseUrl: string,
  id: number,
  params: {
    $expand?: string;
    $select?: string;
  } = {},
): Promise<TETRAMobileNetworkCode> => {
  const queryParams = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, value.toString()]),
  ).toString();
  const baseUrlWithId = `${baseUrl}/api/${API_VERSION}/${TETRA_ENDPOINT}(${id})`;
  const url = queryParams ? `${baseUrlWithId}?${queryParams}` : baseUrlWithId;
  return fetchJson(url);
};
