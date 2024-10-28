import {
  getTETRAMobileNetworkCodes,
  getTETRAMobileNetworkCodeById,
  TETRAMobileNetworkCode,
} from "./endpoints/tetra-mobile-network-codes";
import {
  getAircraftRegister,
  getAircraftRegisterById,
  AircraftRegister,
} from "./endpoints/aircraft-registers";
import { DEFAULT_BASE_URL } from "./constants";
import {
  getVehicleRegisterById,
  getVehicleRegisters,
  VehicleRegister,
} from "./endpoints/vehicle-registers";
import {
  CommonQueryParams,
  ExtendedQueryParams,
  MultiEntityResponse,
  SingleEntityResponse,
} from "./types";
import {
  getShipRegisterById,
  getShipRegisters,
  ShipRegister,
} from "./endpoints/ship-registers";

/**
 * @public
 * Creates a Traficom API client for interacting with the Traficom API.
 * @param {string} [baseUrl] - The base URL for the Traficom API. If not provided, it uses the default URL from environment variables or a fallback value.
 */
export const createClient = (baseUrl?: string) => {
  const resolvedBaseUrl =
    baseUrl ?? process.env.TRAFICOM_API_URL ?? DEFAULT_BASE_URL;

  return {
    getTETRAMobileNetworkCodes: (
      params: ExtendedQueryParams = {},
    ): Promise<MultiEntityResponse<TETRAMobileNetworkCode>> => {
      return getTETRAMobileNetworkCodes(resolvedBaseUrl, params);
    },

    getTETRAMobileNetworkCodeById: (
      id: number,
      params: CommonQueryParams = {},
    ): Promise<SingleEntityResponse<TETRAMobileNetworkCode>> => {
      return getTETRAMobileNetworkCodeById(resolvedBaseUrl, id, params);
    },

    getAircraftRegister: (
      params: ExtendedQueryParams = {},
    ): Promise<MultiEntityResponse<AircraftRegister>> => {
      return getAircraftRegister(resolvedBaseUrl, params);
    },

    getAircraftRegisterById: (
      id: number,
      params: CommonQueryParams = {},
    ): Promise<SingleEntityResponse<AircraftRegister>> => {
      return getAircraftRegisterById(resolvedBaseUrl, id, params);
    },

    getVehicleRegisters: (
      params: ExtendedQueryParams = {},
    ): Promise<MultiEntityResponse<VehicleRegister>> => {
      return getVehicleRegisters(resolvedBaseUrl, params);
    },

    getVehicleRegisterById: (
      id: number,
      params: CommonQueryParams = {},
    ): Promise<SingleEntityResponse<VehicleRegister>> => {
      return getVehicleRegisterById(resolvedBaseUrl, id, params);
    },

    getShipRegisters: (
      params: ExtendedQueryParams = {},
    ): Promise<MultiEntityResponse<ShipRegister>> => {
      return getShipRegisters(resolvedBaseUrl, params);
    },

    getShipRegisterById: (
      id: number,
      params: CommonQueryParams = {},
    ): Promise<SingleEntityResponse<ShipRegister>> => {
      return getShipRegisterById(resolvedBaseUrl, id, params);
    },
  };
};
