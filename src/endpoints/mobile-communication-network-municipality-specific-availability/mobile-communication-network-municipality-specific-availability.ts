import { MobileCommunicationNetworkMunicipalitySpecificAvailability } from "./mobile-communication-network-municipality-specific-availability.types";
import { createEndpointHandlers } from "@/utils/endpoint-factory";
import { MOBILE_COMMUNICATION_NETWORK_MUNICIPALITY_SPECIFIC_AVAILABILITY_ENDPOINT } from "@/constants";

const { getAll, getById } =
  createEndpointHandlers<MobileCommunicationNetworkMunicipalitySpecificAvailability>(
    MOBILE_COMMUNICATION_NETWORK_MUNICIPALITY_SPECIFIC_AVAILABILITY_ENDPOINT,
  );

export const getMobileCommunicationNetworkMunicipalitySpecificAvailability =
  getAll;
export const getMobileCommunicationNetworkMunicipalitySpecificAvailabilityById =
  getById;
