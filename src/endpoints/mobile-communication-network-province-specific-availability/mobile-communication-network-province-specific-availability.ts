import { MobileCommunicationNetworkProvinceSpecificAvailability } from "./mobile-communication-network-province-specific-availability.types";
import { createEndpointHandlers } from "@/utils/endpoint-factory";
import { MOBILE_COMMUNICATION_NETWORK_PROVINCE_SPECIFIC_AVAILABILITY_ENDPOINT } from "@/constants";

const { getAll, getById } =
  createEndpointHandlers<MobileCommunicationNetworkProvinceSpecificAvailability>(
    MOBILE_COMMUNICATION_NETWORK_PROVINCE_SPECIFIC_AVAILABILITY_ENDPOINT,
  );

export const getMobileCommunicationNetworkProvinceSpecificAvailability = getAll;
export const getMobileCommunicationNetworkProvinceSpecificAvailabilityById =
  getById;
