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
import {
  getVehicleInformationSystemCodes,
  getVehicleInformationSystemCodeById,
  VehicleInformationSystemCode,
} from "./endpoints/vehicle-information-system-codes";
import { Autoreporter } from "./endpoints/autoreporter/autoreporter.types";
import {
  getAutoreporterById,
  getAutoreporters,
} from "./endpoints/autoreporter/autoreporter";

/**
 * Creates a Traficom API client for interacting with the Traficom API.
 * @param {string} [baseUrl] - The base URL for the Traficom API. If not provided, it uses the default URL from environment variables or a fallback value.
 * @returns {Object} An object containing methods to interact with the Traficom API
 */
export const createClient = (baseUrl?: string) => {
  const resolvedBaseUrl =
    baseUrl ?? process.env.TRAFICOM_API_URL ?? DEFAULT_BASE_URL;

  return {
    /**
     * Retrieves a list of TETRA mobile network codes
     * @param {ExtendedQueryParams} [params={}] - Query parameters for filtering and pagination
     * @returns {Promise<MultiEntityResponse<TETRAMobileNetworkCode>>} Promise resolving to TETRA mobile network codes response
     */
    getTETRAMobileNetworkCodes: (
      params: ExtendedQueryParams = {},
    ): Promise<MultiEntityResponse<TETRAMobileNetworkCode>> => {
      return getTETRAMobileNetworkCodes(resolvedBaseUrl, params);
    },

    /**
     * Retrieves a specific TETRA mobile network code by ID
     * @param {number} id - The ID of the TETRA mobile network code
     * @param {CommonQueryParams} [params={}] - Common query parameters
     * @returns {Promise<SingleEntityResponse<TETRAMobileNetworkCode>>} Promise resolving to a single TETRA mobile network code
     */
    getTETRAMobileNetworkCodeById: (
      id: number,
      params: CommonQueryParams = {},
    ): Promise<SingleEntityResponse<TETRAMobileNetworkCode>> => {
      return getTETRAMobileNetworkCodeById(resolvedBaseUrl, id, params);
    },

    /**
     * Retrieves a list of aircraft registers
     * @param {ExtendedQueryParams} [params={}] - Query parameters for filtering and pagination
     * @returns {Promise<MultiEntityResponse<AircraftRegister>>} Promise resolving to aircraft registers response
     */
    getAircraftRegister: (
      params: ExtendedQueryParams = {},
    ): Promise<MultiEntityResponse<AircraftRegister>> => {
      return getAircraftRegister(resolvedBaseUrl, params);
    },

    /**
     * Retrieves a specific aircraft register by ID
     * @param {number} id - The ID of the aircraft register
     * @param {CommonQueryParams} [params={}] - Common query parameters
     * @returns {Promise<SingleEntityResponse<AircraftRegister>>} Promise resolving to a single aircraft register
     */
    getAircraftRegisterById: (
      id: number,
      params: CommonQueryParams = {},
    ): Promise<SingleEntityResponse<AircraftRegister>> => {
      return getAircraftRegisterById(resolvedBaseUrl, id, params);
    },

    /**
     * Retrieves a list of vehicle registers
     * @param {ExtendedQueryParams} [params={}] - Query parameters for filtering and pagination
     * @returns {Promise<MultiEntityResponse<VehicleRegister>>} Promise resolving to vehicle registers response
     */
    getVehicleRegisters: (
      params: ExtendedQueryParams = {},
    ): Promise<MultiEntityResponse<VehicleRegister>> => {
      return getVehicleRegisters(resolvedBaseUrl, params);
    },

    /**
     * Retrieves a specific vehicle register by ID
     * @param {number} id - The ID of the vehicle register
     * @param {CommonQueryParams} [params={}] - Common query parameters
     * @returns {Promise<SingleEntityResponse<VehicleRegister>>} Promise resolving to a single vehicle register
     */
    getVehicleRegisterById: (
      id: number,
      params: CommonQueryParams = {},
    ): Promise<SingleEntityResponse<VehicleRegister>> => {
      return getVehicleRegisterById(resolvedBaseUrl, id, params);
    },

    /**
     * Retrieves a list of ship registers
     * @param {ExtendedQueryParams} [params={}] - Query parameters for filtering and pagination
     * @returns {Promise<MultiEntityResponse<ShipRegister>>} Promise resolving to ship registers response
     */
    getShipRegisters: (
      params: ExtendedQueryParams = {},
    ): Promise<MultiEntityResponse<ShipRegister>> => {
      return getShipRegisters(resolvedBaseUrl, params);
    },

    /**
     * Retrieves a specific ship register by ID
     * @param {number} id - The ID of the ship register
     * @param {CommonQueryParams} [params={}] - Common query parameters
     * @returns {Promise<SingleEntityResponse<ShipRegister>>} Promise resolving to a single ship register
     */
    getShipRegisterById: (
      id: number,
      params: CommonQueryParams = {},
    ): Promise<SingleEntityResponse<ShipRegister>> => {
      return getShipRegisterById(resolvedBaseUrl, id, params);
    },

    /**
     * Retrieves a list of vehicle information system codes
     * @param {ExtendedQueryParams} [params={}] - Query parameters for filtering and pagination
     * @returns {Promise<MultiEntityResponse<VehicleInformationSystemCode>>} Promise resolving to vehicle information system codes response
     */
    getVehicleInformationSystemCodes: (
      params: ExtendedQueryParams = {},
    ): Promise<MultiEntityResponse<VehicleInformationSystemCode>> => {
      return getVehicleInformationSystemCodes(resolvedBaseUrl, params);
    },

    /**
     * Retrieves a specific vehicle information system code by ID
     * @param {number} id - The ID of the vehicle information system code
     * @param {CommonQueryParams} [params={}] - Common query parameters
     * @returns {Promise<SingleEntityResponse<VehicleInformationSystemCode>>} Promise resolving to a single vehicle information system code
     */
    getVehicleInformationSystemCodeById: (
      id: number,
      params: CommonQueryParams = {},
    ): Promise<SingleEntityResponse<VehicleInformationSystemCode>> => {
      return getVehicleInformationSystemCodeById(resolvedBaseUrl, id, params);
    },

    /**
     * Retrieves a list of autoreporters
     * @param {ExtendedQueryParams} [params={}] - Query parameters for filtering and pagination
     * @returns {Promise<MultiEntityResponse<Autoreporter>>} Promise resolving to autoreporters response
     */
    getAutoreporters: (
      params: ExtendedQueryParams = {},
    ): Promise<MultiEntityResponse<Autoreporter>> => {
      return getAutoreporters(resolvedBaseUrl, params);
    },

    /**
     * Retrieves a specific autoreporter by ID
     * @param {number} id - The ID of the autoreporter
     * @param {CommonQueryParams} [params={}] - Common query parameters
     * @returns {Promise<SingleEntityResponse<Autoreporter>>} Promise resolving to a single autoreporter
     */
    getAutoreporterById: (
      id: number,
      params: CommonQueryParams = {},
    ): Promise<SingleEntityResponse<Autoreporter>> => {
      return getAutoreporterById(resolvedBaseUrl, id, params);
    },
  };
};
