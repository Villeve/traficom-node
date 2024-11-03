import { MobileCommunicationNetworkProvinceSpecificAvailability } from "./mobile-communication-network-province-specific-availability.types";
import { MOBILE_COMMUNICATION_NETWORK_PROVINCE_SPECIFIC_AVAILABILITY_ENDPOINT } from "@/constants";
import { createEndpointHandlers } from "@/utils/endpoint-factory";

const { getAll, getById } =
  createEndpointHandlers<MobileCommunicationNetworkProvinceSpecificAvailability>(
    MOBILE_COMMUNICATION_NETWORK_PROVINCE_SPECIFIC_AVAILABILITY_ENDPOINT,
  );

export const getMobileCommunicationNetworkProvinceSpecificAvailabilities =
  getAll;
export const getMobileCommunicationNetworkProvinceSpecificAvailabilityById =
  getById;
