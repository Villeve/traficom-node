import { AircraftRegister } from "./aircraft-register.types";
import { fetchJson, handleApiError } from "@/utils";
import { API_VERSION, AIRCRAFT_ENDPOINT } from "@/constants";
import {
  MultiEntityResponse,
  SingleEntityResponse,
  CommonQueryParams,
  ExtendedQueryParams,
} from "@/types";

export const getAircraftRegister = async (
  baseUrl: string,
  params: ExtendedQueryParams = {},
): Promise<MultiEntityResponse<AircraftRegister>> => {
  const queryParams = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, value.toString()]),
  ).toString();
  const baseEndpoint = `${baseUrl}/api/${API_VERSION}/${AIRCRAFT_ENDPOINT}`;
  const url = queryParams ? `${baseEndpoint}?${queryParams}` : baseEndpoint;
  try {
    return await fetchJson(url);
  } catch (error) {
    handleApiError(error);
  }
};

export const getAircraftRegisterById = async (
  baseUrl: string,
  id: number,
  params: CommonQueryParams = {},
): Promise<SingleEntityResponse<AircraftRegister>> => {
  const queryParams = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, value.toString()]),
  ).toString();
  const endpoint = `${baseUrl}/api/${API_VERSION}/${AIRCRAFT_ENDPOINT}(${id})`;
  const url = queryParams ? `${endpoint}?${queryParams}` : endpoint;
  try {
    return await fetchJson(url);
  } catch (error) {
    handleApiError(error);
  }
};
