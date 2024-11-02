import { fetchJson } from "./fetch-json";
import { handleApiError } from "./error-handler";
import {
  MultiEntityResponse,
  SingleEntityResponse,
  CommonQueryParams,
  ExtendedQueryParams,
} from "@/types";
import { API_VERSION } from "@/constants";

export function createEndpointHandlers<T>(baseEndpoint: string) {
  return {
    getAll: async (
      baseUrl: string,
      params: ExtendedQueryParams = {},
    ): Promise<MultiEntityResponse<T>> => {
      const queryParams = new URLSearchParams(
        Object.entries(params).map(([key, value]) => [key, value.toString()]),
      ).toString();
      const endpoint = `${baseUrl}/api/${API_VERSION}/${baseEndpoint}`;
      const url = queryParams ? `${endpoint}?${queryParams}` : endpoint;
      try {
        return await fetchJson(url);
      } catch (error) {
        handleApiError(error);
      }
    },

    getById: async (
      baseUrl: string,
      id: number,
      params: CommonQueryParams = {},
    ): Promise<SingleEntityResponse<T>> => {
      const queryParams = new URLSearchParams(
        Object.entries(params).map(([key, value]) => [key, value.toString()]),
      ).toString();
      const endpoint = `${baseUrl}/api/${API_VERSION}/${baseEndpoint}(${id})`;
      const url = queryParams ? `${endpoint}?${queryParams}` : endpoint;
      try {
        return await fetchJson(url);
      } catch (error) {
        handleApiError(error);
      }
    },
  };
}
