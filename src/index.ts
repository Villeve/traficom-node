import { DEFAULT_BASE_URL } from "./constants";
import {
  getAircraftRegisters,
  getAircraftRegisterById,
  getTETRAMobileNetworkCodeById,
  getTETRAMobileNetworkCodes,
  getVehicleRegisters,
  getVehicleRegisterById,
  getShipRegisters,
  getShipRegisterById,
  getGeneralServiceAreas,
  getVehicleSystemCodeById,
  getVehicleSystemCodes,
  getAutoreporters,
  getAutoreporterById,
  getInfomaps,
  getInfomapById,
  getAutoreporterUTCs,
  getAutoreporterUTCById,
  getInternationalTelecomOperators,
  getInternationalTelecomOperatorById,
  getLandlineTelephoneNetworkSubscriberNumbers,
  getLandlineTelephoneNetworkSubscriberNumberById,
  getFixedNetworkMunicipalitySpecificAvailabilities,
  getFixedNetworkProvinceSpecificAvailabilities,
  getBroadbandProjects,
  getShortMessageServiceNumbers,
  getMobileCommunicationNetworkAreaCodes,
  getMobileCommunicationNetworkAreaCodeById,
  getMobileCommunicationNetworkMunicipalitySpecificAvailabilities,
  getMobileCommunicationNetworkMunicipalitySpecificAvailabilityById,
  getMobileCommunicationNetworkProvinceSpecificAvailabilities,
  getMobileCommunicationNetworkProvinceSpecificAvailabilityById,
  getMarineRadioNumbers,
  getMarineRadioNumberById,
  getMobileNetworkCodes,
  getMobileNetworkCodeById,
  getRadioAmateurCallSigns,
  getRadioAmateurCallSignById,
  getRadioStations,
  getRadioStationById,
  getFreeRadioMicrophoneFrequencies,
  getRailwayEquipmentRegisters,
  getRailwayEquipmentRegisterById,
  getFrequencyDistributionTables,
  getFrequencyDistributionTableById,
  getFrequencyDistributionTablesFinland,
  getFrequencyDistributionTableFinlandById,
  getFrequencyDistributionTablesSweden,
  getFrequencyDistributionTableSwedenById,
  getTelecomCompanyIdentifiers,
  getTelecomCompanyIdentifierById,
  getTelevisionStations,
  getTelevisionStationById,
  getNationalServiceNumbers,
  getNationalServiceNumberById,
  getNationalSubscriberNumbers,
  getNationalSubscriberNumberById,
} from "./endpoints";
import { TraficomClient, TraficomClientConfig } from "./types/client";

/**
 * Creates a Traficom API client
 *
 * @description
 * Creates a client instance for interacting with the Traficom API endpoints.
 * The client provides typed methods for accessing various Traficom data resources
 * like vehicle registers, aircraft registers, telecom codes, etc.
 *
 * @example
 * ```typescript
 * const client = createClient();
 *
 * // Get all vehicle registers
 * const vehicles = await client.getVehicleRegisters();
 *
 * // Get specific aircraft by ID
 * const aircraft = await client.getAircraftRegisterById(123);
 * ```
 *
 * @param config - Optional configuration for the client
 * @returns Typed Traficom API client instance
 */
export const createClient = (config?: TraficomClientConfig): TraficomClient => {
  const resolvedBaseUrl =
    config?.baseUrl ?? process.env.TRAFICOM_API_URL ?? DEFAULT_BASE_URL;

  return {
    getTETRAMobileNetworkCodes: (params = {}) =>
      getTETRAMobileNetworkCodes(resolvedBaseUrl, params),
    getTETRAMobileNetworkCodeById: (id, params = {}) =>
      getTETRAMobileNetworkCodeById(resolvedBaseUrl, id, params),
    getAircraftRegisters: (params = {}) =>
      getAircraftRegisters(resolvedBaseUrl, params),
    getAircraftRegisterById: (id, params = {}) =>
      getAircraftRegisterById(resolvedBaseUrl, id, params),
    getVehicleRegisters: (params = {}) =>
      getVehicleRegisters(resolvedBaseUrl, params),
    getVehicleRegisterById: (id, params = {}) =>
      getVehicleRegisterById(resolvedBaseUrl, id, params),
    getShipRegisters: (params = {}) =>
      getShipRegisters(resolvedBaseUrl, params),
    getShipRegisterById: (id, params = {}) =>
      getShipRegisterById(resolvedBaseUrl, id, params),
    getVehicleInformationSystemCodes: (params = {}) =>
      getVehicleSystemCodes(resolvedBaseUrl, params),
    getVehicleInformationSystemCodeById: (id, params = {}) =>
      getVehicleSystemCodeById(resolvedBaseUrl, id, params),
    getAutoreporters: (params = {}) =>
      getAutoreporters(resolvedBaseUrl, params),
    getAutoreporterById: (id, params = {}) =>
      getAutoreporterById(resolvedBaseUrl, id, params),
    getInfomaps: (params = {}) => getInfomaps(resolvedBaseUrl, params),
    getInfomapById: (id, params = {}) =>
      getInfomapById(resolvedBaseUrl, id, params),
    getAutoreporterUTCs: (params = {}) =>
      getAutoreporterUTCs(resolvedBaseUrl, params),
    getAutoreporterUTCById: (id, params = {}) =>
      getAutoreporterUTCById(resolvedBaseUrl, id, params),
    getInternationalTelecomOperatorIds: (params = {}) =>
      getInternationalTelecomOperators(resolvedBaseUrl, params),
    getInternationalTelecomOperatorIdById: (id, params = {}) =>
      getInternationalTelecomOperatorById(resolvedBaseUrl, id, params),
    getLandlineTelephoneNetworkSubscriberNumbers: (params = {}) =>
      getLandlineTelephoneNetworkSubscriberNumbers(resolvedBaseUrl, params),
    getLandlineTelephoneNetworkSubscriberNumberById: (id, params = {}) =>
      getLandlineTelephoneNetworkSubscriberNumberById(
        resolvedBaseUrl,
        id,
        params,
      ),
    getFixedNetworkMunicipalitySpecificAvailability: (params = {}) =>
      getFixedNetworkMunicipalitySpecificAvailabilities(
        resolvedBaseUrl,
        params,
      ),
    getFixedNetworkProvinceSpecificAvailability: (params = {}) =>
      getFixedNetworkProvinceSpecificAvailabilities(resolvedBaseUrl, params),
    getBroadbandProjects: (params = {}) =>
      getBroadbandProjects(resolvedBaseUrl, params),
    getShortMessageServiceNumbers: (params = {}) =>
      getShortMessageServiceNumbers(resolvedBaseUrl, params),
    getMobileCommunicationNetworkAreaCodes: (params = {}) =>
      getMobileCommunicationNetworkAreaCodes(resolvedBaseUrl, params),
    getMobileCommunicationNetworkAreaCodeById: (id, params = {}) =>
      getMobileCommunicationNetworkAreaCodeById(resolvedBaseUrl, id, params),
    getMobileCommunicationNetworkMunicipalitySpecificAvailability: (
      params = {},
    ) =>
      getMobileCommunicationNetworkMunicipalitySpecificAvailabilities(
        resolvedBaseUrl,
        params,
      ),
    getMobileCommunicationNetworkMunicipalitySpecificAvailabilityById: (
      id,
      params = {},
    ) =>
      getMobileCommunicationNetworkMunicipalitySpecificAvailabilityById(
        resolvedBaseUrl,
        id,
        params,
      ),
    getMobileCommunicationNetworkProvinceSpecificAvailability: (params = {}) =>
      getMobileCommunicationNetworkProvinceSpecificAvailabilities(
        resolvedBaseUrl,
        params,
      ),
    getMobileCommunicationNetworkProvinceSpecificAvailabilityById: (
      id,
      params = {},
    ) =>
      getMobileCommunicationNetworkProvinceSpecificAvailabilityById(
        resolvedBaseUrl,
        id,
        params,
      ),
    getMarineRadioNumbers: (params = {}) =>
      getMarineRadioNumbers(resolvedBaseUrl, params),
    getMarineRadioNumberById: (id, params = {}) =>
      getMarineRadioNumberById(resolvedBaseUrl, id, params),
    getMobileNetworkCodes: (params = {}) =>
      getMobileNetworkCodes(resolvedBaseUrl, params),
    getMobileNetworkCodeById: (id, params = {}) =>
      getMobileNetworkCodeById(resolvedBaseUrl, id, params),
    getRadioAmateurCallSigns: (params = {}) =>
      getRadioAmateurCallSigns(resolvedBaseUrl, params),
    getRadioAmateurCallSignById: (id, params = {}) =>
      getRadioAmateurCallSignById(resolvedBaseUrl, id, params),
    getRadioStations: (params = {}) =>
      getRadioStations(resolvedBaseUrl, params),
    getRadioStationById: (id, params = {}) =>
      getRadioStationById(resolvedBaseUrl, id, params),
    getFreeRadioMicrophoneFrequencies: (locationParams, params = {}) =>
      getFreeRadioMicrophoneFrequencies(
        resolvedBaseUrl,
        locationParams,
        params,
      ),
    getRailwayEquipmentRegisters: (params = {}) =>
      getRailwayEquipmentRegisters(resolvedBaseUrl, params),
    getRailwayEquipmentRegisterById: (id, params = {}) =>
      getRailwayEquipmentRegisterById(resolvedBaseUrl, id, params),
    getFrequencyDistributionTables: (params = {}) =>
      getFrequencyDistributionTables(resolvedBaseUrl, params),
    getFrequencyDistributionTableById: (id, params = {}) =>
      getFrequencyDistributionTableById(resolvedBaseUrl, id, params),
    getFrequencyDistributionTablesFinland: (params = {}) =>
      getFrequencyDistributionTablesFinland(resolvedBaseUrl, params),
    getFrequencyDistributionTableFinlandById: (id, params = {}) =>
      getFrequencyDistributionTableFinlandById(resolvedBaseUrl, id, params),
    getFrequencyDistributionTablesSweden: (params = {}) =>
      getFrequencyDistributionTablesSweden(resolvedBaseUrl, params),
    getFrequencyDistributionTableSwedenById: (id, params = {}) =>
      getFrequencyDistributionTableSwedenById(resolvedBaseUrl, id, params),
    getTelecomCompanyIdentifiers: (params = {}) =>
      getTelecomCompanyIdentifiers(resolvedBaseUrl, params),
    getTelecomCompanyIdentifierById: (id, params = {}) =>
      getTelecomCompanyIdentifierById(resolvedBaseUrl, id, params),
    getTelevisionStationInformation: (params = {}) =>
      getTelevisionStations(resolvedBaseUrl, params),
    getTelevisionStationInformationById: (id, params = {}) =>
      getTelevisionStationById(resolvedBaseUrl, id, params),
    getNationalServiceNumbers: (params = {}) =>
      getNationalServiceNumbers(resolvedBaseUrl, params),
    getNationalServiceNumberById: (id, params = {}) =>
      getNationalServiceNumberById(resolvedBaseUrl, id, params),
    getNationalSubscriberNumbers: (params = {}) =>
      getNationalSubscriberNumbers(resolvedBaseUrl, params),
    getNationalSubscriberNumberById: (id, params = {}) =>
      getNationalSubscriberNumberById(resolvedBaseUrl, id, params),
    getGeneralServiceAreas: (params = {}) =>
      getGeneralServiceAreas(resolvedBaseUrl, params),
  };
};
