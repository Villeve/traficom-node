import {
  API_VERSION,
  FIXED_NETWORK_MUNICIPALITY_SPECIFIC_AVAILABILITY_ENDPOINT,
} from "@/constants";
import { FixedNetworkMunicipalitySpecificAvailability } from "./fixed-network-municipality-specific-availability.types";
import { fetchJson } from "@/utils/fetch-json";
import { handleApiError } from "@/utils/error-handler";
import { MultiEntityResponse, ExtendedQueryParams } from "@/types";

/**
 * Retrieves all fixed network municipality-specific availability entries.
 * @param {string} baseUrl - The base URL for the Traficom API.
 * @param {{ $expand?: string; $select?: string; $filter?: string; $orderby?: string; $top?: number; $skip?: number; $count?: boolean }} [params={}] - Optional parameters for the request.
 * @returns {Promise<MultiEntityResponse<FixedNetworkMunicipalitySpecificAvailability>>} A promise that resolves to an object containing the availability data and the OData context.
 * @throws {TraficomError} If there's an error fetching the data.
 */
export const getFixedNetworkMunicipalitySpecificAvailability = async (
  baseUrl: string,
  params: ExtendedQueryParams = {},
): Promise<
  MultiEntityResponse<FixedNetworkMunicipalitySpecificAvailability>
> => {
  const queryParams = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, value.toString()]),
  ).toString();
  const endpoint = `${baseUrl}/api/${API_VERSION}/${FIXED_NETWORK_MUNICIPALITY_SPECIFIC_AVAILABILITY_ENDPOINT}`;
  const url = queryParams ? `${endpoint}?${queryParams}` : endpoint;
  try {
    return await fetchJson(url);
  } catch (error) {
    handleApiError(error);
  }
};
