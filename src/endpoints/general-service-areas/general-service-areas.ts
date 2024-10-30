import { ExtendedQueryParams, MultiEntityResponse } from "@/types";
import { GeneralServiceArea } from "./general-service-areas.types";
import { API_VERSION, GENERAL_SERVICE_AREAS_ENDPOINT } from "@/constants";
import { fetchJson, handleApiError } from "@/utils";

export const getGeneralServiceAreas = async (
  baseUrl: string,
  params: ExtendedQueryParams = {},
): Promise<MultiEntityResponse<GeneralServiceArea>> => {
  const queryParams = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, value.toString()]),
  ).toString();
  const endpoint = `${baseUrl}/api/${API_VERSION}/${GENERAL_SERVICE_AREAS_ENDPOINT}`;
  const url = queryParams ? `${endpoint}?${queryParams}` : endpoint;
  try {
    return await fetchJson(url);
  } catch (error) {
    handleApiError(error);
  }
};
