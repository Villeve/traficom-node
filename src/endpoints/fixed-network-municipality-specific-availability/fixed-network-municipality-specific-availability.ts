import { FixedNetworkMunicipalitySpecificAvailability } from "./fixed-network-municipality-specific-availability.types";
import { FIXED_NETWORK_MUNICIPALITY_SPECIFIC_AVAILABILITY_ENDPOINT } from "@/constants";
import { createEndpointHandlers } from "@/utils/endpoint-factory";

const { getAll } =
  createEndpointHandlers<FixedNetworkMunicipalitySpecificAvailability>(
    FIXED_NETWORK_MUNICIPALITY_SPECIFIC_AVAILABILITY_ENDPOINT,
  );

export const getFixedNetworkMunicipalitySpecificAvailabilities = getAll;
