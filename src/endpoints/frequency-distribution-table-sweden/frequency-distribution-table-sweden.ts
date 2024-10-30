import { FrequencyDistributionTableSweden } from "./frequency-distribution-table-sweden.types";
import { fetchJson, handleApiError } from "@/utils";
import {
  API_VERSION,
  FREQUENCY_DISTRIBUTION_TABLE_SWEDEN_ENDPOINT,
} from "@/constants";
import {
  MultiEntityResponse,
  SingleEntityResponse,
  CommonQueryParams,
  ExtendedQueryParams,
} from "@/types";

export const getFrequencyDistributionTableSweden = async (
  baseUrl: string,
  params: ExtendedQueryParams = {},
): Promise<MultiEntityResponse<FrequencyDistributionTableSweden>> => {
  const queryParams = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, value.toString()]),
  ).toString();
  const endpoint = `${baseUrl}/api/${API_VERSION}/${FREQUENCY_DISTRIBUTION_TABLE_SWEDEN_ENDPOINT}`;
  const url = queryParams ? `${endpoint}?${queryParams}` : endpoint;
  try {
    return await fetchJson(url);
  } catch (error) {
    handleApiError(error);
  }
};

export const getFrequencyDistributionTableSwedenById = async (
  baseUrl: string,
  id: number,
  params: CommonQueryParams = {},
): Promise<SingleEntityResponse<FrequencyDistributionTableSweden>> => {
  const queryParams = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, value.toString()]),
  ).toString();
  const endpoint = `${baseUrl}/api/${API_VERSION}/${FREQUENCY_DISTRIBUTION_TABLE_SWEDEN_ENDPOINT}(${id})`;
  const url = queryParams ? `${endpoint}?${queryParams}` : endpoint;
  try {
    return await fetchJson(url);
  } catch (error) {
    handleApiError(error);
  }
};
