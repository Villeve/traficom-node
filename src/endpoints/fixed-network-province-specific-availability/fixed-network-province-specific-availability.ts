import {
  API_VERSION,
  FIXED_NETWORK_PROVINCE_SPECIFIC_AVAILABILITY_ENDPOINT,
} from "@/constants";
import { FixedNetworkProvinceSpecificAvailability } from "./fixed-network-province-specific-availability.types";
import { fetchJson } from "@/utils/fetch-json";
import { handleApiError } from "@/utils/error-handler";
import { MultiEntityResponse, ExtendedQueryParams } from "@/types";

export const getFixedNetworkProvinceSpecificAvailability = async (
  baseUrl: string,
  params: ExtendedQueryParams = {},
): Promise<MultiEntityResponse<FixedNetworkProvinceSpecificAvailability>> => {
  const queryParams = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, value.toString()]),
  ).toString();
  const endpoint = `${baseUrl}/api/${API_VERSION}/${FIXED_NETWORK_PROVINCE_SPECIFIC_AVAILABILITY_ENDPOINT}`;
  const url = queryParams ? `${endpoint}?${queryParams}` : endpoint;
  try {
    return await fetchJson(url);
  } catch (error) {
    handleApiError(error);
  }
};
