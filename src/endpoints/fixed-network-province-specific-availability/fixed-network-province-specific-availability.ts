import { FixedNetworkProvinceSpecificAvailability } from "./fixed-network-province-specific-availability.types";
import { createEndpointHandlers } from "@/utils/endpoint-factory";
import { FIXED_NETWORK_PROVINCE_SPECIFIC_AVAILABILITY_ENDPOINT } from "@/constants";

const { getAll } =
  createEndpointHandlers<FixedNetworkProvinceSpecificAvailability>(
    FIXED_NETWORK_PROVINCE_SPECIFIC_AVAILABILITY_ENDPOINT,
  );

export const getFixedNetworkProvinceSpecificAvailability = getAll;
