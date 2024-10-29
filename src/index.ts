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
import {
  getAutoreporterById,
  getAutoreporters,
  Autoreporter,
} from "./endpoints/autoreporter";
import {
  AutoreporterUTC,
  getAutoreporterUTCById,
  getAutoreporterUTCs,
} from "./endpoints/autoreporter-utc";
import { getInfomapById, getInfomaps, Infomap } from "./endpoints/infomaps";
import {
  getInternationalTelecomOperatorIds,
  getInternationalTelecomOperatorIdById,
  InternationalTelecomOperatorId,
} from "./endpoints/international-telecom-operator-ids";
import {
  getLandlineTelephoneNetworkSubscriberNumberById,
  getLandlineTelephoneNetworkSubscriberNumbers,
  LandlineTelephoneNetworkSubscriberNumber,
} from "./endpoints/landline-telephone-network-subscriber-numbers";
import {
  getFixedNetworkMunicipalitySpecificAvailability,
  FixedNetworkMunicipalitySpecificAvailability,
} from "./endpoints/fixed-network-municipality-specific-availability";
import {
  FixedNetworkProvinceSpecificAvailability,
  getFixedNetworkProvinceSpecificAvailability,
} from "./endpoints/fixed-network-province-specific-availability";
import { BroadbandProject } from "./endpoints/broadband-projects/broadband-projects.types";
import { getBroadbandProjects } from "./endpoints/broadband-projects/broadband-projects";
import { ShortMessageServiceNumber } from "./endpoints/short-message-service-numbers/short-message-service-numbers.types";
import { getShortMessageServiceNumbers } from "./endpoints/short-message-service-numbers";

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

    /**
     * Retrieves a list of autoreporter UTCs
     * @param {ExtendedQueryParams} [params={}] - Query parameters for filtering and pagination
     * @returns {Promise<MultiEntityResponse<AutoreporterUTC>>} Promise resolving to autoreporter UTCs response
     */
    getAutoreporterUTCs: (
      params: ExtendedQueryParams = {},
    ): Promise<MultiEntityResponse<AutoreporterUTC>> => {
      return getAutoreporterUTCs(resolvedBaseUrl, params);
    },

    /**
     * Retrieves a specific autoreporter UTC by ID
     * @param {number} id - The ID of the autoreporter UTC
     * @param {CommonQueryParams} [params={}] - Common query parameters
     * @returns {Promise<SingleEntityResponse<AutoreporterUTC>>} Promise resolving to a single autoreporter UTC
     */
    getAutoreporterUTCById: (
      id: number,
      params: CommonQueryParams = {},
    ): Promise<SingleEntityResponse<AutoreporterUTC>> => {
      return getAutoreporterUTCById(resolvedBaseUrl, id, params);
    },

    /**
     * Retrieves a list of infomaps
     * @param {ExtendedQueryParams} [params={}] - Query parameters for filtering and pagination
     * @returns {Promise<MultiEntityResponse<Infomap>>} Promise resolving to infomaps response
     */
    getInfomaps: (
      params: ExtendedQueryParams = {},
    ): Promise<MultiEntityResponse<Infomap>> => {
      return getInfomaps(resolvedBaseUrl, params);
    },

    /**
     * Retrieves a specific infomap by ID
     * @param {number} id - The ID of the infomap
     * @param {CommonQueryParams} [params={}] - Common query parameters
     * @returns {Promise<SingleEntityResponse<Infomap>>} Promise resolving to a single infomap
     */
    getInfomapById: (
      id: number,
      params: CommonQueryParams = {},
    ): Promise<SingleEntityResponse<Infomap>> => {
      return getInfomapById(resolvedBaseUrl, id, params);
    },

    /**
     * Retrieves a list of international telecommunications operator IDs
     * @param {ExtendedQueryParams} [params={}] - Query parameters for filtering and pagination
     * @returns {Promise<MultiEntityResponse<InternationalTelecomOperatorId>>} Promise resolving to international telecommunications operator IDs response
     */
    getInternationalTelecomOperatorIds: (
      params: ExtendedQueryParams = {},
    ): Promise<MultiEntityResponse<InternationalTelecomOperatorId>> => {
      return getInternationalTelecomOperatorIds(resolvedBaseUrl, params);
    },

    /**
     * Retrieves a specific international telecommunications operator ID by ID
     * @param {number} id - The ID of the international telecom operator ID
     * @param {CommonQueryParams} [params={}] - Common query parameters
     * @returns {Promise<SingleEntityResponse<InternationalTelecomOperatorId>>} Promise resolving to a single international telecommunications operator ID
     */
    getInternationalTelecomOperatorIdById: (
      id: number,
      params: CommonQueryParams = {},
    ): Promise<SingleEntityResponse<InternationalTelecomOperatorId>> => {
      return getInternationalTelecomOperatorIdById(resolvedBaseUrl, id, params);
    },

    /**
     * Retrieves a list of landline telephone network subscriber numbers
     * @param {ExtendedQueryParams} [params={}] - Query parameters for filtering and pagination
     * @returns {Promise<MultiEntityResponse<LandlineTelephoneNetworkSubscriberNumber>>} Promise resolving to landline telephone network subscriber numbers response
     */
    getLandlineTelephoneNetworkSubscriberNumbers: (
      params: ExtendedQueryParams = {},
    ): Promise<
      MultiEntityResponse<LandlineTelephoneNetworkSubscriberNumber>
    > => {
      return getLandlineTelephoneNetworkSubscriberNumbers(
        resolvedBaseUrl,
        params,
      );
    },

    /**
     * Retrieves a specific landline telephone network subscriber number by ID
     * @param {number} id - The ID of the landline telephone network subscriber number
     * @param {CommonQueryParams} [params={}] - Common query parameters
     * @returns {Promise<SingleEntityResponse<LandlineTelephoneNetworkSubscriberNumber>>} Promise resolving to a single landline telephone network subscriber number
     */
    getLandlineTelephoneNetworkSubscriberNumberById: (
      id: number,
      params: CommonQueryParams = {},
    ): Promise<
      SingleEntityResponse<LandlineTelephoneNetworkSubscriberNumber>
    > => {
      return getLandlineTelephoneNetworkSubscriberNumberById(
        resolvedBaseUrl,
        id,
        params,
      );
    },

    /**
     * Retrieves a list of fixed network municipality-specific availability entries
     * @param {ExtendedQueryParams} [params={}] - Query parameters for filtering and pagination
     * @returns {Promise<MultiEntityResponse<FixedNetworkMunicipalitySpecificAvailability>>} Promise resolving to availability entries response
     */
    getFixedNetworkMunicipalitySpecificAvailability: (
      params: ExtendedQueryParams = {},
    ): Promise<
      MultiEntityResponse<FixedNetworkMunicipalitySpecificAvailability>
    > => {
      return getFixedNetworkMunicipalitySpecificAvailability(
        resolvedBaseUrl,
        params,
      );
    },

    /**
     * Retrieves a list of fixed network province-specific availability entries
     * @param {ExtendedQueryParams} [params={}] - Query parameters for filtering and pagination
     * @returns {Promise<MultiEntityResponse<FixedNetworkProvinceSpecificAvailability>>} Promise resolving to availability entries response
     */
    getFixedNetworkProvinceSpecificAvailability: (
      params: ExtendedQueryParams = {},
    ): Promise<
      MultiEntityResponse<FixedNetworkProvinceSpecificAvailability>
    > => {
      return getFixedNetworkProvinceSpecificAvailability(
        resolvedBaseUrl,
        params,
      );
    },

    /**
     * Retrieves a list of broadband projects
     * @param {ExtendedQueryParams} [params={}] - Query parameters for filtering and pagination
     * @returns {Promise<MultiEntityResponse<BroadbandProject>>} Promise resolving to broadband projects response
     */
    getBroadbandProjects: (
      params: ExtendedQueryParams = {},
    ): Promise<MultiEntityResponse<BroadbandProject>> => {
      return getBroadbandProjects(resolvedBaseUrl, params);
    },

    /**
     * Retrieves a list of short message service numbers
     * @param {ExtendedQueryParams} [params={}] - Query parameters for filtering and pagination
     * @returns {Promise<MultiEntityResponse<ShortMessageServiceNumber>>} Promise resolving to short message service numbers response
     */
    getShortMessageServiceNumbers: (
      params: ExtendedQueryParams = {},
    ): Promise<MultiEntityResponse<ShortMessageServiceNumber>> => {
      return getShortMessageServiceNumbers(resolvedBaseUrl, params);
    },
  };
};
