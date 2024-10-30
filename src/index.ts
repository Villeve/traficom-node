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
import {
  getMobileCommunicationNetworkAreaCodes,
  getMobileCommunicationNetworkAreaCodeById,
  MobileCommunicationNetworkAreaCode,
} from "./endpoints/mobile-communication-network-area-codes";
import {
  getMobileCommunicationNetworkMunicipalitySpecificAvailability,
  getMobileCommunicationNetworkMunicipalitySpecificAvailabilityById,
  MobileCommunicationNetworkMunicipalitySpecificAvailability,
} from "./endpoints/mobile-communication-network-municipality-specific-availability";
import {
  getMobileCommunicationNetworkProvinceSpecificAvailability,
  getMobileCommunicationNetworkProvinceSpecificAvailabilityById,
  MobileCommunicationNetworkProvinceSpecificAvailability,
} from "./endpoints/mobile-communication-network-province-specific-availability";
import {
  getMarineRadioNumbers,
  getMarineRadioNumberById,
  MarineRadioNumber,
} from "./endpoints/marine-radio-numbers";
import {
  getMobileNetworkCodeById,
  getMobileNetworkCodes,
  MobileNetworkCode,
} from "./endpoints/mobile-network-codes";
import {
  getRadioAmateurCallSignById,
  getRadioAmateurCallSigns,
  RadioAmateurCallSign,
} from "./endpoints/radio-amateur-call-signs";
import {
  getRadioStationInformation,
  getRadioStationInformationById,
  RadioStationInformation,
} from "./endpoints/radio-station-information";
import {
  FreeRadioMicrophoneFrequency,
  FreeRadioMicrophoneFrequencyParams,
  getFreeRadioMicrophoneFrequencies,
} from "./endpoints/free-radio-microphone-frequencies";
import {
  getRailwayEquipmentRegisterById,
  getRailwayEquipmentRegisters,
  RailwayEquipmentRegister,
} from "./endpoints/railway-equipment-registers";
import {
  FrequencyDistributionTable,
  getFrequencyDistributionTable,
  getFrequencyDistributionTableById,
} from "./endpoints/frequency-distribution-table";
import {
  FrequencyDistributionTableFinland,
  getFrequencyDistributionTableFinland,
  getFrequencyDistributionTableFinlandById,
} from "./endpoints/frequency-distribution-table-finland";
import {
  FrequencyDistributionTableSweden,
  getFrequencyDistributionTableSweden,
  getFrequencyDistributionTableSwedenById,
} from "./endpoints/frequency-distribution-table-sweden";
import {
  getTelecomCompanyIdentifierById,
  getTelecomCompanyIdentifiers,
  TelecomCompanyIdentifier,
} from "./endpoints/telecom-company-identifiers";
import {
  getTelevisionStationInformation,
  getTelevisionStationInformationById,
  TelevisionStationInformation,
} from "./endpoints/television-station-information";
import {
  NationalServiceNumber,
  getNationalServiceNumberById,
  getNationalServiceNumbers,
} from "./endpoints/national-service-numbers";
import {
  getNationalSubscriberNumberById,
  getNationalSubscriberNumbers,
  NationalSubscriberNumber,
} from "./endpoints/national-subscriber-numbers";
import {
  GeneralServiceArea,
  getGeneralServiceAreas,
} from "./endpoints/general-service-areas";

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

    /**
     * Retrieves a list of mobile communication network area codes
     * @param {ExtendedQueryParams} [params={}] - Query parameters for filtering and pagination
     * @returns {Promise<MultiEntityResponse<MobileCommunicationNetworkAreaCode>>} Promise resolving to mobile communication network area codes response
     */
    getMobileCommunicationNetworkAreaCodes: (
      params: ExtendedQueryParams = {},
    ): Promise<MultiEntityResponse<MobileCommunicationNetworkAreaCode>> => {
      return getMobileCommunicationNetworkAreaCodes(resolvedBaseUrl, params);
    },

    /**
     * Retrieves a specific mobile communication network area code by ID
     * @param {number} id - The ID of the mobile communication network area code
     * @param {CommonQueryParams} [params={}] - Common query parameters
     * @returns {Promise<SingleEntityResponse<MobileCommunicationNetworkAreaCode>>} Promise resolving to a single mobile communication network area code
     */
    getMobileCommunicationNetworkAreaCodeById: (
      id: number,
      params: CommonQueryParams = {},
    ): Promise<SingleEntityResponse<MobileCommunicationNetworkAreaCode>> => {
      return getMobileCommunicationNetworkAreaCodeById(
        resolvedBaseUrl,
        id,
        params,
      );
    },

    /**
     * Retrieves a list of mobile communication network municipality-specific availability entries
     * @param {ExtendedQueryParams} [params={}] - Query parameters for filtering and pagination
     * @returns {Promise<MultiEntityResponse<MobileCommunicationNetworkMunicipalitySpecificAvailability>>} Promise resolving to availability entries response
     */
    getMobileCommunicationNetworkMunicipalitySpecificAvailability: (
      params: ExtendedQueryParams = {},
    ): Promise<
      MultiEntityResponse<MobileCommunicationNetworkMunicipalitySpecificAvailability>
    > => {
      return getMobileCommunicationNetworkMunicipalitySpecificAvailability(
        resolvedBaseUrl,
        params,
      );
    },

    /**
     * Retrieves a specific mobile communication network municipality-specific availability entry by ID
     * @param {number} id - The ID of the availability entry to retrieve
     * @param {CommonQueryParams} [params={}] - Common query parameters
     * @returns {Promise<SingleEntityResponse<MobileCommunicationNetworkMunicipalitySpecificAvailability>>} Promise resolving to a single availability entry
     */
    getMobileCommunicationNetworkMunicipalitySpecificAvailabilityById: (
      id: number,
      params: CommonQueryParams = {},
    ): Promise<
      SingleEntityResponse<MobileCommunicationNetworkMunicipalitySpecificAvailability>
    > => {
      return getMobileCommunicationNetworkMunicipalitySpecificAvailabilityById(
        resolvedBaseUrl,
        id,
        params,
      );
    },

    /**
     * Retrieves a list of mobile communication network province-specific availability entries
     * @param {ExtendedQueryParams} [params={}] - Query parameters for filtering and pagination
     * @returns {Promise<MultiEntityResponse<MobileCommunicationNetworkProvinceSpecificAvailability>>} Promise resolving to availability entries response
     */
    getMobileCommunicationNetworkProvinceSpecificAvailability: (
      params: ExtendedQueryParams = {},
    ): Promise<
      MultiEntityResponse<MobileCommunicationNetworkProvinceSpecificAvailability>
    > => {
      return getMobileCommunicationNetworkProvinceSpecificAvailability(
        resolvedBaseUrl,
        params,
      );
    },

    /**
     * Retrieves a specific mobile communication network province-specific availability entry by ID
     * @param {number} id - The ID of the availability entry
     * @param {CommonQueryParams} [params={}] - Common query parameters
     * @returns {Promise<SingleEntityResponse<MobileCommunicationNetworkProvinceSpecificAvailability>>} Promise resolving to a single availability entry
     */
    getMobileCommunicationNetworkProvinceSpecificAvailabilityById: (
      id: number,
      params: CommonQueryParams = {},
    ): Promise<
      SingleEntityResponse<MobileCommunicationNetworkProvinceSpecificAvailability>
    > => {
      return getMobileCommunicationNetworkProvinceSpecificAvailabilityById(
        resolvedBaseUrl,
        id,
        params,
      );
    },

    /**
     * Retrieves a list of marine radio numbers
     * @param {ExtendedQueryParams} [params={}] - Query parameters for filtering and pagination
     * @returns {Promise<MultiEntityResponse<MarineRadioNumber>>} Promise resolving to marine radio numbers response
     */
    getMarineRadioNumbers: (
      params: ExtendedQueryParams = {},
    ): Promise<MultiEntityResponse<MarineRadioNumber>> => {
      return getMarineRadioNumbers(resolvedBaseUrl, params);
    },

    /**
     * Retrieves a specific marine radio number by ID
     * @param {number} id - The ID of the marine radio number to retrieve
     * @param {CommonQueryParams} [params={}] - Common query parameters
     * @returns {Promise<SingleEntityResponse<MarineRadioNumber>>} Promise resolving to a single marine radio number
     */
    getMarineRadioNumberById: (
      id: number,
      params: CommonQueryParams = {},
    ): Promise<SingleEntityResponse<MarineRadioNumber>> => {
      return getMarineRadioNumberById(resolvedBaseUrl, id, params);
    },

    /**
     * Retrieves a list of mobile network codes
     * @param {ExtendedQueryParams} [params={}] - Query parameters for filtering and pagination
     * @returns {Promise<MultiEntityResponse<MobileNetworkCode>>} Promise resolving to mobile network codes response
     */
    getMobileNetworkCodes: (
      params: ExtendedQueryParams = {},
    ): Promise<MultiEntityResponse<MobileNetworkCode>> => {
      return getMobileNetworkCodes(resolvedBaseUrl, params);
    },

    /**
     * Retrieves a specific mobile network code by ID
     * @param {number} id - The ID of the mobile network code
     * @param {CommonQueryParams} [params={}] - Common query parameters
     * @returns {Promise<SingleEntityResponse<MobileNetworkCode>>} Promise resolving to a single mobile network code
     */
    getMobileNetworkCodeById: (
      id: number,
      params: CommonQueryParams = {},
    ): Promise<SingleEntityResponse<MobileNetworkCode>> => {
      return getMobileNetworkCodeById(resolvedBaseUrl, id, params);
    },

    /**
     * Retrieves a list of radio amateur call signs
     * @param {ExtendedQueryParams} [params={}] - Query parameters for filtering and pagination
     * @returns {Promise<MultiEntityResponse<RadioAmateurCallSign>>} Promise resolving to radio amateur call signs response
     */
    getRadioAmateurCallSigns: (
      params: ExtendedQueryParams = {},
    ): Promise<MultiEntityResponse<RadioAmateurCallSign>> => {
      return getRadioAmateurCallSigns(resolvedBaseUrl, params);
    },

    /**
     * Retrieves a specific radio amateur call sign by ID
     * @param {number} id - The ID of the radio amateur call sign
     * @param {CommonQueryParams} [params={}] - Common query parameters
     * @returns {Promise<SingleEntityResponse<RadioAmateurCallSign>>} Promise resolving to a single radio amateur call sign
     */
    getRadioAmateurCallSignById: (
      id: number,
      params: CommonQueryParams = {},
    ): Promise<SingleEntityResponse<RadioAmateurCallSign>> => {
      return getRadioAmateurCallSignById(resolvedBaseUrl, id, params);
    },

    /**
     * Retrieves a list of radio station information
     * @param {ExtendedQueryParams} [params={}] - Query parameters for filtering and pagination
     * @returns {Promise<MultiEntityResponse<RadioStationInformation>>} Promise resolving to radio station information response
     */
    getRadioStationInformation: (
      params: ExtendedQueryParams = {},
    ): Promise<MultiEntityResponse<RadioStationInformation>> => {
      return getRadioStationInformation(resolvedBaseUrl, params);
    },

    /**
     * Retrieves a specific radio station information entry by ID
     * @param {number} id - The ID of the radio station information entry
     * @param {CommonQueryParams} [params={}] - Common query parameters
     * @returns {Promise<SingleEntityResponse<RadioStationInformation>>} Promise resolving to a single radio station information entry
     */
    getRadioStationInformationById: (
      id: number,
      params: CommonQueryParams = {},
    ): Promise<SingleEntityResponse<RadioStationInformation>> => {
      return getRadioStationInformationById(resolvedBaseUrl, id, params);
    },

    /**
     * Retrieves a list of free radio microphone frequencies
     * @param {FreeRadioMicrophoneFrequencyParams} locationParams - Location parameters
     * @param {ExtendedQueryParams} [params={}] - Query parameters for filtering and pagination
     * @returns {Promise<MultiEntityResponse<FreeRadioMicrophoneFrequency>>} Promise resolving to free radio microphone frequencies response
     */
    getFreeRadioMicrophoneFrequencies: (
      locationParams: FreeRadioMicrophoneFrequencyParams,
      params: ExtendedQueryParams = {},
    ): Promise<MultiEntityResponse<FreeRadioMicrophoneFrequency>> => {
      return getFreeRadioMicrophoneFrequencies(
        resolvedBaseUrl,
        locationParams,
        params,
      );
    },

    /**
     * Retrieves a list of railway equipment register
     * @param {ExtendedQueryParams} [params={}] - Query parameters for filtering and pagination
     * @returns {Promise<MultiEntityResponse<RailwayEquipmentRegister>>} Promise resolving to railway equipment register response
     */
    getRailwayEquipmentRegisters: (
      params: ExtendedQueryParams = {},
    ): Promise<MultiEntityResponse<RailwayEquipmentRegister>> => {
      return getRailwayEquipmentRegisters(resolvedBaseUrl, params);
    },

    /**
     * Retrieves a specific railway equipment register entry by ID
     * @param {number} id - The ID of the railway equipment register entry
     * @param {CommonQueryParams} [params={}] - Common query parameters
     * @returns {Promise<SingleEntityResponse<RailwayEquipmentRegister>>} Promise resolving to a single railway equipment register entry
     */
    getRailwayEquipmentRegisterById: (
      id: number,
      params: CommonQueryParams = {},
    ): Promise<SingleEntityResponse<RailwayEquipmentRegister>> => {
      return getRailwayEquipmentRegisterById(resolvedBaseUrl, id, params);
    },

    /**
     * Retrieves a list of frequency distribution table
     * @param {ExtendedQueryParams} [params={}] - Query parameters for filtering and pagination
     * @returns {Promise<MultiEntityResponse<FrequencyDistributionTable>>} Promise resolving to frequency distribution table response
     */
    getFrequencyDistributionTable: (
      params: ExtendedQueryParams = {},
    ): Promise<MultiEntityResponse<FrequencyDistributionTable>> => {
      return getFrequencyDistributionTable(resolvedBaseUrl, params);
    },

    /**
     * Retrieves a specific frequency distribution table entry by ID
     * @param {number} id - The ID of the frequency distribution table entry
     * @param {CommonQueryParams} [params={}] - Common query parameters
     * @returns {Promise<SingleEntityResponse<FrequencyDistributionTable>>} Promise resolving to a single frequency distribution table entry
     */
    getFrequencyDistributionTableById: (
      id: number,
      params: CommonQueryParams = {},
    ): Promise<SingleEntityResponse<FrequencyDistributionTable>> => {
      return getFrequencyDistributionTableById(resolvedBaseUrl, id, params);
    },

    /**
     * Retrieves a list of frequency distribution table in Finnish
     * @param {ExtendedQueryParams} [params={}] - Query parameters for filtering and pagination
     * @returns {Promise<MultiEntityResponse<FrequencyDistributionTableFinland>>} Promise resolving to frequency distribution table in Finnish response
     */
    getFrequencyDistributionTableFinland: (
      params: ExtendedQueryParams = {},
    ): Promise<MultiEntityResponse<FrequencyDistributionTableFinland>> => {
      return getFrequencyDistributionTableFinland(resolvedBaseUrl, params);
    },

    /**
     * Retrieves a specific frequency distribution table in Finnish entry by ID
     * @param {number} id - The ID of the frequency distribution table in Finnish entry
     * @param {CommonQueryParams} [params={}] - Common query parameters
     * @returns {Promise<SingleEntityResponse<FrequencyDistributionTableFinland>>} Promise resolving to a single frequency distribution table in Finnish entry
     */
    getFrequencyDistributionTableFinlandById: (
      id: number,
      params: CommonQueryParams = {},
    ): Promise<SingleEntityResponse<FrequencyDistributionTableFinland>> => {
      return getFrequencyDistributionTableFinlandById(
        resolvedBaseUrl,
        id,
        params,
      );
    },

    /**
     * Retrieves a list of frequency distribution table in Sweden
     * @param {ExtendedQueryParams} [params={}] - Query parameters for filtering and pagination
     * @returns {Promise<MultiEntityResponse<FrequencyDistributionTableSweden>>} Promise resolving to frequency distribution table in Sweden response
     */
    getFrequencyDistributionTableSweden: (
      params: ExtendedQueryParams = {},
    ): Promise<MultiEntityResponse<FrequencyDistributionTableSweden>> => {
      return getFrequencyDistributionTableSweden(resolvedBaseUrl, params);
    },

    /**
     * Retrieves a specific frequency distribution table in Sweden entry by ID
     * @param {number} id - The ID of the frequency distribution table in Sweden entry
     * @param {CommonQueryParams} [params={}] - Common query parameters
     * @returns {Promise<SingleEntityResponse<FrequencyDistributionTableSweden>>} Promise resolving to a single frequency distribution table in Sweden entry
     */
    getFrequencyDistributionTableSwedenById: (
      id: number,
      params: CommonQueryParams = {},
    ): Promise<SingleEntityResponse<FrequencyDistributionTableSweden>> => {
      return getFrequencyDistributionTableSwedenById(
        resolvedBaseUrl,
        id,
        params,
      );
    },

    /**
     * Retrieves a list of telecom company identifiers
     * @param {ExtendedQueryParams} [params={}] - Query parameters for filtering and pagination
     * @returns {Promise<MultiEntityResponse<TelecomCompanyIdentifier>>} Promise resolving to telecom company identifiers response
     */
    getTelecomCompanyIdentifiers: (
      params: ExtendedQueryParams = {},
    ): Promise<MultiEntityResponse<TelecomCompanyIdentifier>> => {
      return getTelecomCompanyIdentifiers(resolvedBaseUrl, params);
    },

    /**
     * Retrieves a specific telecom company identifier by ID
     * @param {number} id - The ID of the telecom company identifier
     * @param {CommonQueryParams} [params={}] - Common query parameters
     * @returns {Promise<SingleEntityResponse<TelecomCompanyIdentifier>>} Promise resolving to a single telecom company identifier
     */
    getTelecomCompanyIdentifierById: (
      id: number,
      params: CommonQueryParams = {},
    ): Promise<SingleEntityResponse<TelecomCompanyIdentifier>> => {
      return getTelecomCompanyIdentifierById(resolvedBaseUrl, id, params);
    },

    /**
     * Retrieves a list of television station information
     * @param {ExtendedQueryParams} [params={}] - Query parameters for filtering and pagination
     * @returns {Promise<MultiEntityResponse<TelevisionStationInformation>>} Promise resolving to television station information response
     */
    getTelevisionStationInformation: (
      params: ExtendedQueryParams = {},
    ): Promise<MultiEntityResponse<TelevisionStationInformation>> => {
      return getTelevisionStationInformation(resolvedBaseUrl, params);
    },

    /**
     * Retrieves a specific television station information entry by ID
     * @param {number} id - The ID of the television station information entry
     * @param {CommonQueryParams} [params={}] - Common query parameters
     * @returns {Promise<SingleEntityResponse<TelevisionStationInformation>>} Promise resolving to a single television station information entry
     */
    getTelevisionStationInformationById: (
      id: number,
      params: CommonQueryParams = {},
    ): Promise<SingleEntityResponse<TelevisionStationInformation>> => {
      return getTelevisionStationInformationById(resolvedBaseUrl, id, params);
    },

    /**
     * Retrieves a list of national service numbers
     * @param {ExtendedQueryParams} [params={}] - Query parameters for filtering and pagination
     * @returns {Promise<MultiEntityResponse<NationalServiceNumber>>} Promise resolving to national service numbers response
     */
    getNationalServiceNumbers: (
      params: ExtendedQueryParams = {},
    ): Promise<MultiEntityResponse<NationalServiceNumber>> => {
      return getNationalServiceNumbers(resolvedBaseUrl, params);
    },

    /**
     * Retrieves a specific national service number by ID
     * @param {number} id - The ID of the national service number
     * @param {CommonQueryParams} [params={}] - Common query parameters
     * @returns {Promise<SingleEntityResponse<NationalServiceNumber>>} Promise resolving to a single national service number
     */
    getNationalServiceNumberById: (
      id: number,
      params: CommonQueryParams = {},
    ): Promise<SingleEntityResponse<NationalServiceNumber>> => {
      return getNationalServiceNumberById(resolvedBaseUrl, id, params);
    },

    /**
     * Retrieves a list of national subscriber numbers
     * @param {ExtendedQueryParams} [params={}] - Query parameters for filtering and pagination
     * @returns {Promise<MultiEntityResponse<NationalSubscriberNumber>>} Promise resolving to national subscriber numbers response
     */
    getNationalSubscriberNumbers: (
      params: ExtendedQueryParams = {},
    ): Promise<MultiEntityResponse<NationalSubscriberNumber>> => {
      return getNationalSubscriberNumbers(resolvedBaseUrl, params);
    },

    /**
     * Retrieves a specific national subscriber number by ID
     * @param {number} id - The ID of the national subscriber number
     * @param {CommonQueryParams} [params={}] - Common query parameters
     * @returns {Promise<SingleEntityResponse<NationalSubscriberNumber>>} Promise resolving to a single national subscriber number
     */
    getNationalSubscriberNumberById: (
      id: number,
      params: CommonQueryParams = {},
    ): Promise<SingleEntityResponse<NationalSubscriberNumber>> => {
      return getNationalSubscriberNumberById(resolvedBaseUrl, id, params);
    },

    /**
     * Retrieves a list of general service areas
     * @param {ExtendedQueryParams} [params={}] - Query parameters for filtering and pagination
     * @returns {Promise<MultiEntityResponse<GeneralServiceArea>>} Promise resolving to general service areas response
     */
    getGeneralServiceAreas: (
      params: ExtendedQueryParams = {},
    ): Promise<MultiEntityResponse<GeneralServiceArea>> => {
      return getGeneralServiceAreas(resolvedBaseUrl, params);
    },
  };
};
