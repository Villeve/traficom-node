import { FixedNetworkProvinceSpecificAvailability } from "./fixed-network-province-specific-availability.types";
import { FIXED_NETWORK_PROVINCE_SPECIFIC_AVAILABILITY_ENDPOINT } from "@/constants";
import { createEndpointHandlers } from "@/utils/endpoint-factory";

const { getAll } =
  createEndpointHandlers<FixedNetworkProvinceSpecificAvailability>(
    FIXED_NETWORK_PROVINCE_SPECIFIC_AVAILABILITY_ENDPOINT,
  );

export const getFixedNetworkProvinceSpecificAvailabilities = getAll;
