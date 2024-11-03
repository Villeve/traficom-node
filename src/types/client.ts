import { CommonQueryParams, ExtendedQueryParams } from "./api-params";
import { MultiEntityResponse, SingleEntityResponse } from "./api-response";
import {
  TETRAMobileNetworkCode,
  AircraftRegister,
  VehicleRegister,
  ShipRegister,
  VehicleInformationSystemCode,
  Autoreporter,
  AutoreporterUTC,
  Infomap,
  InternationalTelecomOperatorId,
  LandlineTelephoneNetworkSubscriberNumber,
  FixedNetworkMunicipalitySpecificAvailability,
  FixedNetworkProvinceSpecificAvailability,
  BroadbandProject,
  ShortMessageServiceNumber,
  MobileCommunicationNetworkAreaCode,
  MobileCommunicationNetworkMunicipalitySpecificAvailability,
  MobileCommunicationNetworkProvinceSpecificAvailability,
  MarineRadioNumber,
  MobileNetworkCode,
  RadioAmateurCallSign,
  RadioStationInformation,
  FreeRadioMicrophoneFrequency,
  FreeRadioMicrophoneFrequencyParams,
  RailwayEquipmentRegister,
  FrequencyDistributionTable,
  FrequencyDistributionTableFinland,
  FrequencyDistributionTableSweden,
  TelecomCompanyIdentifier,
  TelevisionStationInformation,
  NationalServiceNumber,
  NationalSubscriberNumber,
  GeneralServiceArea,
} from "@/endpoints";

/**
 * Configuration options for the Traficom API client
 */
export interface TraficomClientConfig {
  /**
   * Base URL for the Traficom API
   * @default "https://opendata.traficom.fi"
   */
  baseUrl?: string;
}

/**
 * Traficom API client interface
 * @description Provides methods to interact with various Traficom API endpoints
 */
export interface TraficomClient {
  /**
   * Retrieve TETRA mobile network codes
   * @param params - Query parameters for filtering and pagination
   * @param params.$expand - Expands related entities inline
   * @param params.$select - Selects specific properties to return
   * @param params.$filter - Filters the results based on a boolean condition
   * @param params.$orderby - Orders results by specified properties
   * @param params.$top - Returns only the first n results
   * @param params.$skip - Skips the first n results
   * @param params.$count - Includes a count of the matching results
   * @returns A promise containing the TETRA mobile network codes and OData context
   * @throws {TraficomError} If there's an error fetching the data
   */
  getTETRAMobileNetworkCodes: (
    params?: ExtendedQueryParams,
  ) => Promise<MultiEntityResponse<TETRAMobileNetworkCode>>;

  /**
   * Retrieve a specific TETRA mobile network code by ID
   * @param id - The ID of the TETRA mobile network code
   * @param params - Common query parameters
   * @param params.$expand - Expands related entities inline
   * @param params.$select - Selects specific properties to return
   * @returns A promise containing a single TETRA mobile network code and OData context
   * @throws {TraficomError} If there's an error fetching the data
   */
  getTETRAMobileNetworkCodeById: (
    id: number,
    params?: CommonQueryParams,
  ) => Promise<SingleEntityResponse<TETRAMobileNetworkCode>>;

  /**
   * Retrieve aircraft registers
   * @param params - Query parameters for filtering and pagination
   * @param params.$expand - Expands related entities inline
   * @param params.$select - Selects specific properties to return
   * @param params.$filter - Filters the results based on a boolean condition
   * @param params.$orderby - Orders results by specified properties
   * @param params.$top - Returns only the first n results
   * @param params.$skip - Skips the first n results
   * @param params.$count - Includes a count of the matching results
   * @returns A promise containing the aircraft registers and OData context
   * @throws {TraficomError} If there's an error fetching the data
   */
  getAircraftRegisters: (
    params?: ExtendedQueryParams,
  ) => Promise<MultiEntityResponse<AircraftRegister>>;

  /**
   * Retrieve a specific aircraft register by ID
   * @param id - The ID of the aircraft register
   * @param params - Common query parameters
   * @param params.$expand - Expands related entities inline
   * @param params.$select - Selects specific properties to return
   * @returns A promise containing a single aircraft register and OData context
   * @throws {TraficomError} If there's an error fetching the data
   */
  getAircraftRegisterById: (
    id: number,
    params?: CommonQueryParams,
  ) => Promise<SingleEntityResponse<AircraftRegister>>;

  /**
   * Retrieve vehicle registers
   * @param params - Query parameters for filtering and pagination
   * @param params.$expand - Expands related entities inline
   * @param params.$select - Selects specific properties to return
   * @param params.$filter - Filters the results based on a boolean condition
   * @param params.$orderby - Orders results by specified properties
   * @param params.$top - Returns only the first n results
   * @param params.$skip - Skips the first n results
   * @param params.$count - Includes a count of the matching results
   * @returns A promise containing the vehicle registers and OData context
   * @throws {TraficomError} If there's an error fetching the data
   */
  getVehicleRegisters: (
    params?: ExtendedQueryParams,
  ) => Promise<MultiEntityResponse<VehicleRegister>>;

  /**
   * Retrieve a specific vehicle register by ID
   * @param id - The ID of the vehicle register
   * @param params - Common query parameters
   * @param params.$expand - Expands related entities inline
   * @param params.$select - Selects specific properties to return
   * @returns A promise containing a single vehicle register and OData context
   * @throws {TraficomError} If there's an error fetching the data
   */
  getVehicleRegisterById: (
    id: number,
    params?: CommonQueryParams,
  ) => Promise<SingleEntityResponse<VehicleRegister>>;

  /**
   * Retrieve ship registers
   * @param params - Query parameters for filtering and pagination
   * @param params.$expand - Expands related entities inline
   * @param params.$select - Selects specific properties to return
   * @param params.$filter - Filters the results based on a boolean condition
   * @param params.$orderby - Orders results by specified properties
   * @param params.$top - Returns only the first n results
   * @param params.$skip - Skips the first n results
   * @param params.$count - Includes a count of the matching results
   * @returns A promise containing the ship registers and OData context
   * @throws {TraficomError} If there's an error fetching the data
   */
  getShipRegisters: (
    params?: ExtendedQueryParams,
  ) => Promise<MultiEntityResponse<ShipRegister>>;

  /**
   * Retrieve a specific ship register by ID
   * @param id - The ID of the ship register
   * @param params - Common query parameters
   * @param params.$expand - Expands related entities inline
   * @param params.$select - Selects specific properties to return
   * @returns A promise containing a single ship register and OData context
   * @throws {TraficomError} If there's an error fetching the data
   */
  getShipRegisterById: (
    id: number,
    params?: CommonQueryParams,
  ) => Promise<SingleEntityResponse<ShipRegister>>;

  /**
   * Retrieve vehicle information system codes
   * @param params - Query parameters for filtering and pagination
   * @param params.$expand - Expands related entities inline
   * @param params.$select - Selects specific properties to return
   * @param params.$filter - Filters the results based on a boolean condition
   * @param params.$orderby - Orders results by specified properties
   * @param params.$top - Returns only the first n results
   * @param params.$skip - Skips the first n results
   * @param params.$count - Includes a count of the matching results
   * @returns A promise containing the vehicle information system codes and OData context
   * @throws {TraficomError} If there's an error fetching the data
   */
  getVehicleInformationSystemCodes: (
    params?: ExtendedQueryParams,
  ) => Promise<MultiEntityResponse<VehicleInformationSystemCode>>;

  /**
   * Retrieve vehicle information system code by ID
   * @param id - The ID of the vehicle information system code
   * @param params - Common query parameters
   * @param params.$expand - Expands related entities inline
   * @param params.$select - Selects specific properties to return
   * @returns A promise containing a single vehicle information system code and OData context
   * @throws {TraficomError} If there's an error fetching the data
   */
  getVehicleInformationSystemCodeById: (
    id: number,
    params?: CommonQueryParams,
  ) => Promise<SingleEntityResponse<VehicleInformationSystemCode>>;

  /**
   * Retrieve autoreporters
   * @param params - Query parameters for filtering and pagination
   * @param params.$expand - Expands related entities inline
   * @param params.$select - Selects specific properties to return
   * @param params.$filter - Filters the results based on a boolean condition
   * @param params.$orderby - Orders results by specified properties
   * @param params.$top - Returns only the first n results
   * @param params.$skip - Skips the first n results
   * @param params.$count - Includes a count of the matching results
   * @returns A promise containing the autoreporters and OData context
   * @throws {TraficomError} If there's an error fetching the data
   */
  getAutoreporters: (
    params?: ExtendedQueryParams,
  ) => Promise<MultiEntityResponse<Autoreporter>>;

  /**
   * Retrieve a specific autoreporter by ID
   * @param id - The ID of the autoreporter
   * @param params - Common query parameters
   * @param params.$expand - Expands related entities inline
   * @param params.$select - Selects specific properties to return
   * @returns A promise containing a single autoreporter and OData context
   * @throws {TraficomError} If there's an error fetching the data
   */
  getAutoreporterById: (
    id: number,
    params?: CommonQueryParams,
  ) => Promise<SingleEntityResponse<Autoreporter>>;

  /**
   * Retrieve infomaps
   * @param params - Query parameters for filtering and pagination
   * @param params.$expand - Expands related entities inline
   * @param params.$select - Selects specific properties to return
   * @param params.$filter - Filters the results based on a boolean condition
   * @param params.$orderby - Orders results by specified properties
   * @param params.$top - Returns only the first n results
   * @param params.$skip - Skips the first n results
   * @param params.$count - Includes a count of the matching results
   * @returns A promise containing the infomaps and OData context
   * @throws {TraficomError} If there's an error fetching the data
   */
  getInfomaps: (
    params?: ExtendedQueryParams,
  ) => Promise<MultiEntityResponse<Infomap>>;

  /**
   * Retrieve a specific infomap by ID
   * @param id - The ID of the infomap
   * @param params - Common query parameters
   * @param params.$expand - Expands related entities inline
   * @param params.$select - Selects specific properties to return
   * @returns A promise containing a single infomap and OData context
   * @throws {TraficomError} If there's an error fetching the data
   */
  getInfomapById: (
    id: number,
    params?: CommonQueryParams,
  ) => Promise<SingleEntityResponse<Infomap>>;

  /**
   * Retrieve autoreporter UTCs
   * @param params - Query parameters for filtering and pagination
   * @param params.$expand - Expands related entities inline
   * @param params.$select - Selects specific properties to return
   * @param params.$filter - Filters the results based on a boolean condition
   * @param params.$orderby - Orders results by specified properties
   * @param params.$top - Returns only the first n results
   * @param params.$skip - Skips the first n results
   * @param params.$count - Includes a count of the matching results
   * @returns A promise containing the autoreporter UTCs and OData context
   * @throws {TraficomError} If there's an error fetching the data
   */
  getAutoreporterUTCs: (
    params?: ExtendedQueryParams,
  ) => Promise<MultiEntityResponse<AutoreporterUTC>>;

  /**
   * Retrieve a specific autoreporter UTC by ID
   * @param id - The ID of the autoreporter UTC
   * @param params - Common query parameters
   * @param params.$expand - Expands related entities inline
   * @param params.$select - Selects specific properties to return
   * @returns A promise containing a single autoreporter UTC and OData context
   * @throws {TraficomError} If there's an error fetching the data
   */
  getAutoreporterUTCById: (
    id: number,
    params?: CommonQueryParams,
  ) => Promise<SingleEntityResponse<AutoreporterUTC>>;

  /**
   * Retrieve international telecom operator IDs
   * @param params - Query parameters for filtering and pagination
   * @param params.$expand - Expands related entities inline
   * @param params.$select - Selects specific properties to return
   * @param params.$filter - Filters the results based on a boolean condition
   * @param params.$orderby - Orders results by specified properties
   * @param params.$top - Returns only the first n results
   * @param params.$skip - Skips the first n results
   * @param params.$count - Includes a count of the matching results
   * @returns A promise containing the international telecom operator IDs and OData context
   * @throws {TraficomError} If there's an error fetching the data
   */
  getInternationalTelecomOperatorIds: (
    params?: ExtendedQueryParams,
  ) => Promise<MultiEntityResponse<InternationalTelecomOperatorId>>;

  /**
   * Retrieve a specific international telecom operator ID by ID
   * @param id - The ID of the international telecom operator ID
   * @param params - Common query parameters
   * @param params.$expand - Expands related entities inline
   * @param params.$select - Selects specific properties to return
   * @returns A promise containing a single international telecom operator ID and OData context
   * @throws {TraficomError} If there's an error fetching the data
   */
  getInternationalTelecomOperatorIdById: (
    id: number,
    params?: CommonQueryParams,
  ) => Promise<SingleEntityResponse<InternationalTelecomOperatorId>>;

  /**
   * Retrieve landline telephone network subscriber numbers
   * @param params - Query parameters for filtering and pagination
   * @param params.$expand - Expands related entities inline
   * @param params.$select - Selects specific properties to return
   * @param params.$filter - Filters the results based on a boolean condition
   * @param params.$orderby - Orders results by specified properties
   * @param params.$top - Returns only the first n results
   * @param params.$skip - Skips the first n results
   * @param params.$count - Includes a count of the matching results
   * @returns A promise containing the landline telephone network subscriber numbers and OData context
   * @throws {TraficomError} If there's an error fetching the data
   */
  getLandlineTelephoneNetworkSubscriberNumbers: (
    params?: ExtendedQueryParams,
  ) => Promise<MultiEntityResponse<LandlineTelephoneNetworkSubscriberNumber>>;

  /**
   * Retrieve a specific landline telephone network subscriber number by ID
   * @param id - The ID of the landline telephone network subscriber number
   * @param params - Common query parameters
   * @param params.$expand - Expands related entities inline
   * @param params.$select - Selects specific properties to return
   * @returns A promise containing a single landline telephone network subscriber number and OData context
   * @throws {TraficomError} If there's an error fetching the data
   */
  getLandlineTelephoneNetworkSubscriberNumberById: (
    id: number,
    params?: CommonQueryParams,
  ) => Promise<SingleEntityResponse<LandlineTelephoneNetworkSubscriberNumber>>;

  /**
   * Retrieve fixed network municipality specific availability
   * @param params - Query parameters for filtering and pagination
   * @param params.$expand - Expands related entities inline
   * @param params.$select - Selects specific properties to return
   * @param params.$filter - Filters the results based on a boolean condition
   * @param params.$orderby - Orders results by specified properties
   * @param params.$top - Returns only the first n results
   * @param params.$skip - Skips the first n results
   * @param params.$count - Includes a count of the matching results
   * @returns A promise containing the fixed network municipality specific availability and OData context
   * @throws {TraficomError} If there's an error fetching the data
   */
  getFixedNetworkMunicipalitySpecificAvailability: (
    params?: ExtendedQueryParams,
  ) => Promise<
    MultiEntityResponse<FixedNetworkMunicipalitySpecificAvailability>
  >;

  /**
   * Retrieve fixed network province specific availability
   * @param params - Query parameters for filtering and pagination
   * @param params.$expand - Expands related entities inline
   * @param params.$select - Selects specific properties to return
   * @param params.$filter - Filters the results based on a boolean condition
   * @param params.$orderby - Orders results by specified properties
   * @param params.$top - Returns only the first n results
   * @param params.$skip - Skips the first n results
   * @param params.$count - Includes a count of the matching results
   * @returns A promise containing the fixed network province specific availability and OData context
   * @throws {TraficomError} If there's an error fetching the data
   */
  getFixedNetworkProvinceSpecificAvailability: (
    params?: ExtendedQueryParams,
  ) => Promise<MultiEntityResponse<FixedNetworkProvinceSpecificAvailability>>;

  /**
   * Retrieve broadband projects
   * @param params - Query parameters for filtering and pagination
   * @param params.$expand - Expands related entities inline
   * @param params.$select - Selects specific properties to return
   * @param params.$filter - Filters the results based on a boolean condition
   * @param params.$orderby - Orders results by specified properties
   * @param params.$top - Returns only the first n results
   * @param params.$skip - Skips the first n results
   * @param params.$count - Includes a count of the matching results
   * @returns A promise containing the broadband projects and OData context
   * @throws {TraficomError} If there's an error fetching the data
   */
  getBroadbandProjects: (
    params?: ExtendedQueryParams,
  ) => Promise<MultiEntityResponse<BroadbandProject>>;

  /**
   * Retrieve short message service numbers
   * @param params - Query parameters for filtering and pagination
   * @param params.$expand - Expands related entities inline
   * @param params.$select - Selects specific properties to return
   * @param params.$filter - Filters the results based on a boolean condition
   * @param params.$orderby - Orders results by specified properties
   * @param params.$top - Returns only the first n results
   * @param params.$skip - Skips the first n results
   * @param params.$count - Includes a count of the matching results
   * @returns A promise containing the short message service numbers and OData context
   * @throws {TraficomError} If there's an error fetching the data
   */
  getShortMessageServiceNumbers: (
    params?: ExtendedQueryParams,
  ) => Promise<MultiEntityResponse<ShortMessageServiceNumber>>;

  /**
   * Retrieve mobile communication network area codes
   * @param params - Query parameters for filtering and pagination
   * @param params.$expand - Expands related entities inline
   * @param params.$select - Selects specific properties to return
   * @param params.$filter - Filters the results based on a boolean condition
   * @param params.$orderby - Orders results by specified properties
   * @param params.$top - Returns only the first n results
   * @param params.$skip - Skips the first n results
   * @param params.$count - Includes a count of the matching results
   * @returns A promise containing the mobile communication network area codes and OData context
   * @throws {TraficomError} If there's an error fetching the data
   */
  getMobileCommunicationNetworkAreaCodes: (
    params?: ExtendedQueryParams,
  ) => Promise<MultiEntityResponse<MobileCommunicationNetworkAreaCode>>;

  /**
   * Retrieve a specific mobile communication network area code by ID
   * @param id - The ID of the mobile communication network area code
   * @param params - Common query parameters
   * @param params.$expand - Expands related entities inline
   * @param params.$select - Selects specific properties to return
   * @returns A promise containing a single mobile communication network area code and OData context
   * @throws {TraficomError} If there's an error fetching the data
   */
  getMobileCommunicationNetworkAreaCodeById: (
    id: number,
    params?: CommonQueryParams,
  ) => Promise<SingleEntityResponse<MobileCommunicationNetworkAreaCode>>;

  /**
   * Retrieve mobile communication network municipality specific availability
   * @param params - Query parameters for filtering and pagination
   * @param params.$expand - Expands related entities inline
   * @param params.$select - Selects specific properties to return
   * @param params.$filter - Filters the results based on a boolean condition
   * @param params.$orderby - Orders results by specified properties
   * @param params.$top - Returns only the first n results
   * @param params.$skip - Skips the first n results
   * @param params.$count - Includes a count of the matching results
   * @returns A promise containing the mobile communication network municipality specific availability and OData context
   * @throws {TraficomError} If there's an error fetching the data
   */
  getMobileCommunicationNetworkMunicipalitySpecificAvailability: (
    params?: ExtendedQueryParams,
  ) => Promise<
    MultiEntityResponse<MobileCommunicationNetworkMunicipalitySpecificAvailability>
  >;

  /**
   * Retrieve a specific mobile communication network municipality specific availability by ID
   * @param id - The ID of the mobile communication network municipality specific availability
   * @param params - Common query parameters
   * @param params.$expand - Expands related entities inline
   * @param params.$select - Selects specific properties to return
   * @returns A promise containing a single mobile communication network municipality specific availability and OData context
   * @throws {TraficomError} If there's an error fetching the data
   */
  getMobileCommunicationNetworkMunicipalitySpecificAvailabilityById: (
    id: number,
    params?: CommonQueryParams,
  ) => Promise<
    SingleEntityResponse<MobileCommunicationNetworkMunicipalitySpecificAvailability>
  >;

  /**
   * Retrieve mobile communication network province specific availability
   * @param params - Query parameters for filtering and pagination
   * @param params.$expand - Expands related entities inline
   * @param params.$select - Selects specific properties to return
   * @param params.$filter - Filters the results based on a boolean condition
   * @param params.$orderby - Orders results by specified properties
   * @param params.$top - Returns only the first n results
   * @param params.$skip - Skips the first n results
   * @param params.$count - Includes a count of the matching results
   * @returns A promise containing the mobile communication network province specific availability and OData context
   * @throws {TraficomError} If there's an error fetching the data
   */
  getMobileCommunicationNetworkProvinceSpecificAvailability: (
    params?: ExtendedQueryParams,
  ) => Promise<
    MultiEntityResponse<MobileCommunicationNetworkProvinceSpecificAvailability>
  >;

  /**
   * Retrieve a specific mobile communication network province specific availability by ID
   * @param id - The ID of the mobile communication network province specific availability
   * @param params - Common query parameters
   * @param params.$expand - Expands related entities inline
   * @param params.$select - Selects specific properties to return
   * @returns A promise containing a single mobile communication network province specific availability and OData context
   * @throws {TraficomError} If there's an error fetching the data
   */
  getMobileCommunicationNetworkProvinceSpecificAvailabilityById: (
    id: number,
    params?: CommonQueryParams,
  ) => Promise<
    SingleEntityResponse<MobileCommunicationNetworkProvinceSpecificAvailability>
  >;

  /**
   * Retrieve marine radio numbers
   * @param params - Query parameters for filtering and pagination
   * @param params.$expand - Expands related entities inline
   * @param params.$select - Selects specific properties to return
   * @param params.$filter - Filters the results based on a boolean condition
   * @param params.$orderby - Orders results by specified properties
   * @param params.$top - Returns only the first n results
   * @param params.$skip - Skips the first n results
   * @param params.$count - Includes a count of the matching results
   * @returns A promise containing the marine radio numbers and OData context
   * @throws {TraficomError} If there's an error fetching the data
   */
  getMarineRadioNumbers: (
    params?: ExtendedQueryParams,
  ) => Promise<MultiEntityResponse<MarineRadioNumber>>;

  /**
   * Retrieve a specific marine radio number by ID
   * @param id - The ID of the marine radio number
   * @param params - Common query parameters
   * @param params.$expand - Expands related entities inline
   * @param params.$select - Selects specific properties to return
   * @returns A promise containing a single marine radio number and OData context
   * @throws {TraficomError} If there's an error fetching the data
   */
  getMarineRadioNumberById: (
    id: number,
    params?: CommonQueryParams,
  ) => Promise<SingleEntityResponse<MarineRadioNumber>>;

  /**
   * Retrieve mobile network codes
   * @param params - Query parameters for filtering and pagination
   * @param params.$expand - Expands related entities inline
   * @param params.$select - Selects specific properties to return
   * @param params.$filter - Filters the results based on a boolean condition
   * @param params.$orderby - Orders results by specified properties
   * @param params.$top - Returns only the first n results
   * @param params.$skip - Skips the first n results
   * @param params.$count - Includes a count of the matching results
   * @returns A promise containing the mobile network codes and OData context
   * @throws {TraficomError} If there's an error fetching the data
   */
  getMobileNetworkCodes: (
    params?: ExtendedQueryParams,
  ) => Promise<MultiEntityResponse<MobileNetworkCode>>;

  /**
   * Retrieve a specific mobile network code by ID
   * @param id - The ID of the mobile network code
   * @param params - Common query parameters
   * @param params.$expand - Expands related entities inline
   * @param params.$select - Selects specific properties to return
   * @returns A promise containing a single mobile network code and OData context
   * @throws {TraficomError} If there's an error fetching the data
   */
  getMobileNetworkCodeById: (
    id: number,
    params?: CommonQueryParams,
  ) => Promise<SingleEntityResponse<MobileNetworkCode>>;

  /**
   * Retrieve radio amateur call signs
   * @param params - Query parameters for filtering and pagination
   * @param params.$expand - Expands related entities inline
   * @param params.$select - Selects specific properties to return
   * @param params.$filter - Filters the results based on a boolean condition
   * @param params.$orderby - Orders results by specified properties
   * @param params.$top - Returns only the first n results
   * @param params.$skip - Skips the first n results
   * @param params.$count - Includes a count of the matching results
   * @returns A promise containing the radio amateur call signs and OData context
   * @throws {TraficomError} If there's an error fetching the data
   */
  getRadioAmateurCallSigns: (
    params?: ExtendedQueryParams,
  ) => Promise<MultiEntityResponse<RadioAmateurCallSign>>;

  /**
   * Retrieve a specific radio amateur call sign by ID
   * @param id - The ID of the radio amateur call sign
   * @param params - Common query parameters
   * @param params.$expand - Expands related entities inline
   * @param params.$select - Selects specific properties to return
   * @returns A promise containing a single radio amateur call sign and OData context
   * @throws {TraficomError} If there's an error fetching the data
   */
  getRadioAmateurCallSignById: (
    id: number,
    params?: CommonQueryParams,
  ) => Promise<SingleEntityResponse<RadioAmateurCallSign>>;

  /**
   * Retrieve radio station information
   * @param params - Query parameters for filtering and pagination
   * @param params.$expand - Expands related entities inline
   * @param params.$select - Selects specific properties to return
   * @param params.$filter - Filters the results based on a boolean condition
   * @param params.$orderby - Orders results by specified properties
   * @param params.$top - Returns only the first n results
   * @param params.$skip - Skips the first n results
   * @param params.$count - Includes a count of the matching results
   * @returns A promise containing the radio station information and OData context
   * @throws {TraficomError} If there's an error fetching the data
   */
  getRadioStations: (
    params?: ExtendedQueryParams,
  ) => Promise<MultiEntityResponse<RadioStationInformation>>;

  /**
   * Retrieve a specific radio station information by ID
   * @param id - The ID of the radio station information
   * @param params - Common query parameters
   * @param params.$expand - Expands related entities inline
   * @param params.$select - Selects specific properties to return
   * @returns A promise containing a single radio station information and OData context
   * @throws {TraficomError} If there's an error fetching the data
   */
  getRadioStationById: (
    id: number,
    params?: CommonQueryParams,
  ) => Promise<SingleEntityResponse<RadioStationInformation>>;

  /**
   * Retrieve free radio microphone frequencies
   * @param locationParams - Location parameters for filtering and pagination
   * @param params - Query parameters for filtering and pagination
   * @param params.$expand - Expands related entities inline
   * @param params.$select - Selects specific properties to return
   * @param params.$filter - Filters the results based on a boolean condition
   * @param params.$orderby - Orders results by specified properties
   * @param params.$top - Returns only the first n results
   * @param params.$skip - Skips the first n results
   * @param params.$count - Includes a count of the matching results
   * @returns A promise containing the free radio microphone frequencies and OData context
   * @throws {TraficomError} If there's an error fetching the data
   */
  getFreeRadioMicrophoneFrequencies: (
    locationParams: FreeRadioMicrophoneFrequencyParams,
    params?: ExtendedQueryParams,
  ) => Promise<MultiEntityResponse<FreeRadioMicrophoneFrequency>>;

  /**
   * Retrieve railway equipment registers
   * @param params - Query parameters for filtering and pagination
   * @param params.$expand - Expands related entities inline
   * @param params.$select - Selects specific properties to return
   * @param params.$filter - Filters the results based on a boolean condition
   * @param params.$orderby - Orders results by specified properties
   * @param params.$top - Returns only the first n results
   * @param params.$skip - Skips the first n results
   * @param params.$count - Includes a count of the matching results
   * @returns A promise containing the railway equipment registers and OData context
   * @throws {TraficomError} If there's an error fetching the data
   */
  getRailwayEquipmentRegisters: (
    params?: ExtendedQueryParams,
  ) => Promise<MultiEntityResponse<RailwayEquipmentRegister>>;

  /**
   * Retrieve a specific railway equipment register by ID
   * @param id - The ID of the railway equipment register
   * @param params - Common query parameters
   * @param params.$expand - Expands related entities inline
   * @param params.$select - Selects specific properties to return
   * @returns A promise containing a single railway equipment register and OData context
   * @throws {TraficomError} If there's an error fetching the data
   */
  getRailwayEquipmentRegisterById: (
    id: number,
    params?: CommonQueryParams,
  ) => Promise<SingleEntityResponse<RailwayEquipmentRegister>>;

  /**
   * Retrieve frequency distribution tables
   * @param params - Query parameters for filtering and pagination
   * @param params.$expand - Expands related entities inline
   * @param params.$select - Selects specific properties to return
   * @param params.$filter - Filters the results based on a boolean condition
   * @param params.$orderby - Orders results by specified properties
   * @param params.$top - Returns only the first n results
   * @param params.$skip - Skips the first n results
   * @param params.$count - Includes a count of the matching results
   * @returns A promise containing the frequency distribution tables and OData context
   * @throws {TraficomError} If there's an error fetching the data
   */
  getFrequencyDistributionTables: (
    params?: ExtendedQueryParams,
  ) => Promise<MultiEntityResponse<FrequencyDistributionTable>>;

  /**
   * Retrieve a specific frequency distribution table by ID
   * @param id - The ID of the frequency distribution table
   * @param params - Common query parameters
   * @param params.$expand - Expands related entities inline
   * @param params.$select - Selects specific properties to return
   * @returns A promise containing a single frequency distribution table and OData context
   * @throws {TraficomError} If there's an error fetching the data
   */
  getFrequencyDistributionTableById: (
    id: number,
    params?: CommonQueryParams,
  ) => Promise<SingleEntityResponse<FrequencyDistributionTable>>;

  /**
   * Retrieve frequency distribution tables for Finland
   * @param params - Query parameters for filtering and pagination
   * @param params.$expand - Expands related entities inline
   * @param params.$select - Selects specific properties to return
   * @param params.$filter - Filters the results based on a boolean condition
   * @param params.$orderby - Orders results by specified properties
   * @param params.$top - Returns only the first n results
   * @param params.$skip - Skips the first n results
   * @param params.$count - Includes a count of the matching results
   * @returns A promise containing the frequency distribution tables for Finland and OData context
   * @throws {TraficomError} If there's an error fetching the data
   */
  getFrequencyDistributionTablesFinland: (
    params?: ExtendedQueryParams,
  ) => Promise<MultiEntityResponse<FrequencyDistributionTableFinland>>;

  /**
   * Retrieve a specific frequency distribution table for Finland by ID
   * @param id - The ID of the frequency distribution table for Finland
   * @param params - Common query parameters
   * @param params.$expand - Expands related entities inline
   * @param params.$select - Selects specific properties to return
   * @returns A promise containing a single frequency distribution table for Finland and OData context
   * @throws {TraficomError} If there's an error fetching the data
   */
  getFrequencyDistributionTableFinlandById: (
    id: number,
    params?: CommonQueryParams,
  ) => Promise<SingleEntityResponse<FrequencyDistributionTableFinland>>;

  /**
   * Retrieve frequency distribution tables for Sweden
   * @param params - Query parameters for filtering and pagination
   * @param params.$expand - Expands related entities inline
   * @param params.$select - Selects specific properties to return
   * @param params.$filter - Filters the results based on a boolean condition
   * @param params.$orderby - Orders results by specified properties
   * @param params.$top - Returns only the first n results
   * @param params.$skip - Skips the first n results
   * @param params.$count - Includes a count of the matching results
   * @returns A promise containing the frequency distribution tables for Sweden and OData context
   * @throws {TraficomError} If there's an error fetching the data
   */
  getFrequencyDistributionTablesSweden: (
    params?: ExtendedQueryParams,
  ) => Promise<MultiEntityResponse<FrequencyDistributionTableSweden>>;

  /**
   * Retrieve a specific frequency distribution table for Sweden by ID
   * @param id - The ID of the frequency distribution table for Sweden
   * @param params - Common query parameters
   * @param params.$expand - Expands related entities inline
   * @param params.$select - Selects specific properties to return
   * @returns A promise containing a single frequency distribution table for Sweden and OData context
   * @throws {TraficomError} If there's an error fetching the data
   */
  getFrequencyDistributionTableSwedenById: (
    id: number,
    params?: CommonQueryParams,
  ) => Promise<SingleEntityResponse<FrequencyDistributionTableSweden>>;

  /**
   * Retrieve telecom company identifiers
   * @param params - Query parameters for filtering and pagination
   * @param params.$expand - Expands related entities inline
   * @param params.$select - Selects specific properties to return
   * @param params.$filter - Filters the results based on a boolean condition
   * @param params.$orderby - Orders results by specified properties
   * @param params.$top - Returns only the first n results
   * @param params.$skip - Skips the first n results
   * @param params.$count - Includes a count of the matching results
   * @returns A promise containing the telecom company identifiers and OData context
   * @throws {TraficomError} If there's an error fetching the data
   */
  getTelecomCompanyIdentifiers: (
    params?: ExtendedQueryParams,
  ) => Promise<MultiEntityResponse<TelecomCompanyIdentifier>>;

  /**
   * Retrieve a specific telecom company identifier by ID
   * @param id - The ID of the telecom company identifier
   * @param params - Common query parameters
   * @param params.$expand - Expands related entities inline
   * @param params.$select - Selects specific properties to return
   * @returns A promise containing a single telecom company identifier and OData context
   * @throws {TraficomError} If there's an error fetching the data
   */
  getTelecomCompanyIdentifierById: (
    id: number,
    params?: CommonQueryParams,
  ) => Promise<SingleEntityResponse<TelecomCompanyIdentifier>>;

  /**
   * Retrieve television station information
   * @param params - Query parameters for filtering and pagination
   * @param params.$expand - Expands related entities inline
   * @param params.$select - Selects specific properties to return
   * @param params.$filter - Filters the results based on a boolean condition
   * @param params.$orderby - Orders results by specified properties
   * @param params.$top - Returns only the first n results
   * @param params.$skip - Skips the first n results
   * @param params.$count - Includes a count of the matching results
   * @returns A promise containing the television station information and OData context
   * @throws {TraficomError} If there's an error fetching the data
   */
  getTelevisionStationInformation: (
    params?: ExtendedQueryParams,
  ) => Promise<MultiEntityResponse<TelevisionStationInformation>>;

  /**
   * Retrieve a specific television station information by ID
   * @param id - The ID of the television station information
   * @param params - Common query parameters
   * @param params.$expand - Expands related entities inline
   * @param params.$select - Selects specific properties to return
   * @returns A promise containing a single television station information and OData context
   * @throws {TraficomError} If there's an error fetching the data
   */
  getTelevisionStationInformationById: (
    id: number,
    params?: CommonQueryParams,
  ) => Promise<SingleEntityResponse<TelevisionStationInformation>>;

  /**
   * Retrieve national service numbers
   * @param params - Query parameters for filtering and pagination
   * @param params.$expand - Expands related entities inline
   * @param params.$select - Selects specific properties to return
   * @param params.$filter - Filters the results based on a boolean condition
   * @param params.$orderby - Orders results by specified properties
   * @param params.$top - Returns only the first n results
   * @param params.$skip - Skips the first n results
   * @param params.$count - Includes a count of the matching results
   * @returns A promise containing the national service numbers and OData context
   * @throws {TraficomError} If there's an error fetching the data
   */
  getNationalServiceNumbers: (
    params?: ExtendedQueryParams,
  ) => Promise<MultiEntityResponse<NationalServiceNumber>>;

  /**
   * Retrieve a specific national service number by ID
   * @param id - The ID of the national service number
   * @param params - Common query parameters
   * @param params.$expand - Expands related entities inline
   * @param params.$select - Selects specific properties to return
   * @returns A promise containing a single national service number and OData context
   * @throws {TraficomError} If there's an error fetching the data
   */
  getNationalServiceNumberById: (
    id: number,
    params?: CommonQueryParams,
  ) => Promise<SingleEntityResponse<NationalServiceNumber>>;

  /**
   * Retrieve national subscriber numbers
   * @param params - Query parameters for filtering and pagination
   * @param params.$expand - Expands related entities inline
   * @param params.$select - Selects specific properties to return
   * @param params.$filter - Filters the results based on a boolean condition
   * @param params.$orderby - Orders results by specified properties
   * @param params.$top - Returns only the first n results
   * @param params.$skip - Skips the first n results
   * @param params.$count - Includes a count of the matching results
   * @returns A promise containing the national subscriber numbers and OData context
   * @throws {TraficomError} If there's an error fetching the data
   */
  getNationalSubscriberNumbers: (
    params?: ExtendedQueryParams,
  ) => Promise<MultiEntityResponse<NationalSubscriberNumber>>;

  /**
   * Retrieve a specific national subscriber number by ID
   * @param id - The ID of the national subscriber number
   * @param params - Common query parameters
   * @param params.$expand - Expands related entities inline
   * @param params.$select - Selects specific properties to return
   * @returns A promise containing a single national subscriber number and OData context
   * @throws {TraficomError} If there's an error fetching the data
   */
  getNationalSubscriberNumberById: (
    id: number,
    params?: CommonQueryParams,
  ) => Promise<SingleEntityResponse<NationalSubscriberNumber>>;

  /**
   * Retrieve general service areas
   * @param params - Query parameters for filtering and pagination
   * @param params.$expand - Expands related entities inline
   * @param params.$select - Selects specific properties to return
   * @param params.$filter - Filters the results based on a boolean condition
   * @param params.$orderby - Orders results by specified properties
   * @param params.$top - Returns only the first n results
   * @param params.$skip - Skips the first n results
   * @param params.$count - Includes a count of the matching results
   * @returns A promise containing the general service areas and OData context
   * @throws {TraficomError} If there's an error fetching the data
   */
  getGeneralServiceAreas: (
    params?: ExtendedQueryParams,
  ) => Promise<MultiEntityResponse<GeneralServiceArea>>;
}
