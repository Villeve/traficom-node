import { FrequencyDistributionTableFinland } from "./frequency-distribution-table-finland.types";
import { fetchJson, handleApiError } from "@/utils";
import {
  API_VERSION,
  FREQUENCY_DISTRIBUTION_TABLE_FINLAND_ENDPOINT,
} from "@/constants";
import {
  MultiEntityResponse,
  SingleEntityResponse,
  CommonQueryParams,
  ExtendedQueryParams,
} from "@/types";

export const getFrequencyDistributionTableFinland = async (
  baseUrl: string,
  params: ExtendedQueryParams = {},
): Promise<MultiEntityResponse<FrequencyDistributionTableFinland>> => {
  const queryParams = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, value.toString()]),
  ).toString();
  const endpoint = `${baseUrl}/api/${API_VERSION}/${FREQUENCY_DISTRIBUTION_TABLE_FINLAND_ENDPOINT}`;
  const url = queryParams ? `${endpoint}?${queryParams}` : endpoint;
  try {
    return await fetchJson(url);
  } catch (error) {
    handleApiError(error);
  }
};

export const getFrequencyDistributionTableFinlandById = async (
  baseUrl: string,
  id: number,
  params: CommonQueryParams = {},
): Promise<SingleEntityResponse<FrequencyDistributionTableFinland>> => {
  const queryParams = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, value.toString()]),
  ).toString();
  const endpoint = `${baseUrl}/api/${API_VERSION}/${FREQUENCY_DISTRIBUTION_TABLE_FINLAND_ENDPOINT}(${id})`;
  const url = queryParams ? `${endpoint}?${queryParams}` : endpoint;
  try {
    return await fetchJson(url);
  } catch (error) {
    handleApiError(error);
  }
};
