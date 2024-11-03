import { MobileCommunicationNetworkMunicipalitySpecificAvailability } from "./mobile-communication-network-municipality-specific-availability.types";
import { MOBILE_COMMUNICATION_NETWORK_MUNICIPALITY_SPECIFIC_AVAILABILITY_ENDPOINT } from "@/constants";
import { createEndpointHandlers } from "@/utils/endpoint-factory";

const { getAll, getById } =
  createEndpointHandlers<MobileCommunicationNetworkMunicipalitySpecificAvailability>(
    MOBILE_COMMUNICATION_NETWORK_MUNICIPALITY_SPECIFIC_AVAILABILITY_ENDPOINT,
  );

export const getMobileCommunicationNetworkMunicipalitySpecificAvailabilities =
  getAll;
export const getMobileCommunicationNetworkMunicipalitySpecificAvailabilityById =
  getById;
