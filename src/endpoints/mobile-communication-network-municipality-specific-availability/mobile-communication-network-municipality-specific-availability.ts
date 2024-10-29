import {
  API_VERSION,
  MOBILE_COMMUNICATION_NETWORK_MUNICIPALITY_SPECIFIC_AVAILABILITY_ENDPOINT,
} from "@/constants";
import { MobileCommunicationNetworkMunicipalitySpecificAvailability } from "./mobile-communication-network-municipality-specific-availability.types";
import { fetchJson } from "@/utils/fetch-json";
import { handleApiError } from "@/utils/error-handler";
import {
  MultiEntityResponse,
  SingleEntityResponse,
  CommonQueryParams,
  ExtendedQueryParams,
} from "@/types";

/**
 * Retrieves all mobile communication network municipality-specific availability entries.
 * @param {string} baseUrl - The base URL for the Traficom API.
 * @param {{ $expand?: string; $select?: string; $filter?: string; $orderby?: string; $top?: number; $skip?: number; $count?: boolean }} [params={}] - Optional parameters for the request.
 * @returns {Promise<MultiEntityResponse<MobileCommunicationNetworkMunicipalitySpecificAvailability>>} A promise that resolves to an object containing the availability data and the OData context.
 * @throws {TraficomError} If there's an error fetching the data.
 */
export const getMobileCommunicationNetworkMunicipalitySpecificAvailability =
  async (
    baseUrl: string,
    params: ExtendedQueryParams = {},
  ): Promise<
    MultiEntityResponse<MobileCommunicationNetworkMunicipalitySpecificAvailability>
  > => {
    const queryParams = new URLSearchParams(
      Object.entries(params).map(([key, value]) => [key, value.toString()]),
    ).toString();
    const endpoint = `${baseUrl}/api/${API_VERSION}/${MOBILE_COMMUNICATION_NETWORK_MUNICIPALITY_SPECIFIC_AVAILABILITY_ENDPOINT}`;
    const url = queryParams ? `${endpoint}?${queryParams}` : endpoint;
    try {
      return await fetchJson(url);
    } catch (error) {
      handleApiError(error);
    }
  };

/**
 * Retrieves a specific mobile communication network municipality-specific availability entry by ID.
 * @param {string} baseUrl - The base URL for the Traficom API.
 * @param {number} id - The ID of the availability entry to retrieve.
 * @param {{ $expand?: string; $select?: string }} [params={}] - Optional parameters for the request.
 * @returns {Promise<SingleEntityResponse<MobileCommunicationNetworkMunicipalitySpecificAvailability>>} A promise that resolves to an object containing the availability data and the OData context.
 * @throws {TraficomError} If there's an error fetching the data.
 */
export const getMobileCommunicationNetworkMunicipalitySpecificAvailabilityById =
  async (
    baseUrl: string,
    id: number,
    params: CommonQueryParams = {},
  ): Promise<
    SingleEntityResponse<MobileCommunicationNetworkMunicipalitySpecificAvailability>
  > => {
    const queryParams = new URLSearchParams(
      Object.entries(params).map(([key, value]) => [key, value.toString()]),
    ).toString();
    const endpoint = `${baseUrl}/api/${API_VERSION}/${MOBILE_COMMUNICATION_NETWORK_MUNICIPALITY_SPECIFIC_AVAILABILITY_ENDPOINT}(${id})`;
    const url = queryParams ? `${endpoint}?${queryParams}` : endpoint;
    try {
      return await fetchJson(url);
    } catch (error) {
      handleApiError(error);
    }
  };
