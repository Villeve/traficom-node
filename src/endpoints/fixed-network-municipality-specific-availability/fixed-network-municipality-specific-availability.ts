import { FixedNetworkMunicipalitySpecificAvailability } from "./fixed-network-municipality-specific-availability.types";
import { createEndpointHandlers } from "@/utils/endpoint-factory";
import { FIXED_NETWORK_MUNICIPALITY_SPECIFIC_AVAILABILITY_ENDPOINT } from "@/constants";

const { getAll } =
  createEndpointHandlers<FixedNetworkMunicipalitySpecificAvailability>(
    FIXED_NETWORK_MUNICIPALITY_SPECIFIC_AVAILABILITY_ENDPOINT,
  );

export const getFixedNetworkMunicipalitySpecificAvailability = getAll;
