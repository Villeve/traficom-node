import { DEFAULT_BASE_URL } from "./constants";
import {
  getAircraftRegister,
  getAircraftRegisterById,
  getTETRAMobileNetworkCodeById,
  getTETRAMobileNetworkCodes,
  getVehicleRegisters,
  getVehicleRegisterById,
  getShipRegisters,
  getShipRegisterById,
  getGeneralServiceAreas,
  getVehicleInformationSystemCodeById,
  getVehicleInformationSystemCodes,
  getAutoreporters,
  getInfomaps,
  getAutoreporterById,
  getInfomapById,
  getAutoreporterUTCs,
  getAutoreporterUTCById,
  getInternationalTelecomOperatorIds,
  getInternationalTelecomOperatorIdById,
  getLandlineTelephoneNetworkSubscriberNumbers,
  getLandlineTelephoneNetworkSubscriberNumberById,
  getFixedNetworkMunicipalitySpecificAvailability,
  getFixedNetworkProvinceSpecificAvailability,
  getBroadbandProjects,
  getShortMessageServiceNumbers,
  getMobileCommunicationNetworkAreaCodes,
  getMobileCommunicationNetworkAreaCodeById,
  getMobileCommunicationNetworkMunicipalitySpecificAvailability,
  getMobileCommunicationNetworkMunicipalitySpecificAvailabilityById,
  getMobileCommunicationNetworkProvinceSpecificAvailability,
  getMobileCommunicationNetworkProvinceSpecificAvailabilityById,
  getMarineRadioNumbers,
  getMarineRadioNumberById,
  getMobileNetworkCodes,
  getMobileNetworkCodeById,
  getRadioAmateurCallSigns,
  getRadioAmateurCallSignById,
  getRadioStationInformation,
  getRadioStationInformationById,
  getFreeRadioMicrophoneFrequencies,
  getRailwayEquipmentRegisters,
  getRailwayEquipmentRegisterById,
  getFrequencyDistributionTable,
  getFrequencyDistributionTableById,
  getFrequencyDistributionTableFinland,
  getFrequencyDistributionTableFinlandById,
  getFrequencyDistributionTableSweden,
  getFrequencyDistributionTableSwedenById,
  getTelecomCompanyIdentifiers,
  getTelecomCompanyIdentifierById,
  getTelevisionStationInformation,
  getTelevisionStationInformationById,
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
    getAircraftRegister: (params = {}) =>
      getAircraftRegister(resolvedBaseUrl, params),
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
      getVehicleInformationSystemCodes(resolvedBaseUrl, params),
    getVehicleInformationSystemCodeById: (id, params = {}) =>
      getVehicleInformationSystemCodeById(resolvedBaseUrl, id, params),
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
      getInternationalTelecomOperatorIds(resolvedBaseUrl, params),
    getInternationalTelecomOperatorIdById: (id, params = {}) =>
      getInternationalTelecomOperatorIdById(resolvedBaseUrl, id, params),
    getLandlineTelephoneNetworkSubscriberNumbers: (params = {}) =>
      getLandlineTelephoneNetworkSubscriberNumbers(resolvedBaseUrl, params),
    getLandlineTelephoneNetworkSubscriberNumberById: (id, params = {}) =>
      getLandlineTelephoneNetworkSubscriberNumberById(
        resolvedBaseUrl,
        id,
        params,
      ),
    getFixedNetworkMunicipalitySpecificAvailability: (params = {}) =>
      getFixedNetworkMunicipalitySpecificAvailability(resolvedBaseUrl, params),
    getFixedNetworkProvinceSpecificAvailability: (params = {}) =>
      getFixedNetworkProvinceSpecificAvailability(resolvedBaseUrl, params),
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
      getMobileCommunicationNetworkMunicipalitySpecificAvailability(
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
      getMobileCommunicationNetworkProvinceSpecificAvailability(
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
    getRadioStationInformation: (params = {}) =>
      getRadioStationInformation(resolvedBaseUrl, params),
    getRadioStationInformationById: (id, params = {}) =>
      getRadioStationInformationById(resolvedBaseUrl, id, params),
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
    getFrequencyDistributionTable: (params = {}) =>
      getFrequencyDistributionTable(resolvedBaseUrl, params),
    getFrequencyDistributionTableById: (id, params = {}) =>
      getFrequencyDistributionTableById(resolvedBaseUrl, id, params),
    getFrequencyDistributionTableFinland: (params = {}) =>
      getFrequencyDistributionTableFinland(resolvedBaseUrl, params),
    getFrequencyDistributionTableFinlandById: (id, params = {}) =>
      getFrequencyDistributionTableFinlandById(resolvedBaseUrl, id, params),
    getFrequencyDistributionTableSweden: (params = {}) =>
      getFrequencyDistributionTableSweden(resolvedBaseUrl, params),
    getFrequencyDistributionTableSwedenById: (id, params = {}) =>
      getFrequencyDistributionTableSwedenById(resolvedBaseUrl, id, params),
    getTelecomCompanyIdentifiers: (params = {}) =>
      getTelecomCompanyIdentifiers(resolvedBaseUrl, params),
    getTelecomCompanyIdentifierById: (id, params = {}) =>
      getTelecomCompanyIdentifierById(resolvedBaseUrl, id, params),
    getTelevisionStationInformation: (params = {}) =>
      getTelevisionStationInformation(resolvedBaseUrl, params),
    getTelevisionStationInformationById: (id, params = {}) =>
      getTelevisionStationInformationById(resolvedBaseUrl, id, params),
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
