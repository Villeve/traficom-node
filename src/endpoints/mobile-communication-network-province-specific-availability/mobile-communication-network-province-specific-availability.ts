import {
  API_VERSION,
  MOBILE_COMMUNICATION_NETWORK_PROVINCE_SPECIFIC_AVAILABILITY_ENDPOINT,
} from "@/constants";
import { MobileCommunicationNetworkProvinceSpecificAvailability } from "./mobile-communication-network-province-specific-availability.types";
import { fetchJson } from "@/utils/fetch-json";
import { handleApiError } from "@/utils/error-handler";
import {
  MultiEntityResponse,
  SingleEntityResponse,
  CommonQueryParams,
  ExtendedQueryParams,
} from "@/types";

export const getMobileCommunicationNetworkProvinceSpecificAvailability = async (
  baseUrl: string,
  params: ExtendedQueryParams = {},
): Promise<
  MultiEntityResponse<MobileCommunicationNetworkProvinceSpecificAvailability>
> => {
  const queryParams = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, value.toString()]),
  ).toString();
  const endpoint = `${baseUrl}/api/${API_VERSION}/${MOBILE_COMMUNICATION_NETWORK_PROVINCE_SPECIFIC_AVAILABILITY_ENDPOINT}`;
  const url = queryParams ? `${endpoint}?${queryParams}` : endpoint;
  try {
    return await fetchJson(url);
  } catch (error) {
    handleApiError(error);
  }
};

export const getMobileCommunicationNetworkProvinceSpecificAvailabilityById =
  async (
    baseUrl: string,
    id: number,
    params: CommonQueryParams = {},
  ): Promise<
    SingleEntityResponse<MobileCommunicationNetworkProvinceSpecificAvailability>
  > => {
    const queryParams = new URLSearchParams(
      Object.entries(params).map(([key, value]) => [key, value.toString()]),
    ).toString();
    const endpoint = `${baseUrl}/api/${API_VERSION}/${MOBILE_COMMUNICATION_NETWORK_PROVINCE_SPECIFIC_AVAILABILITY_ENDPOINT}(${id})`;
    const url = queryParams ? `${endpoint}?${queryParams}` : endpoint;
    try {
      return await fetchJson(url);
    } catch (error) {
      handleApiError(error);
    }
  };
