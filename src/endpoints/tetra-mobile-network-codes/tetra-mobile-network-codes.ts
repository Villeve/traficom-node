import { TETRAMobileNetworkCode } from "./tetra-mobile-network-codes.types";
import { TETRA_MOBILE_NETWORK_CODES_ENDPOINT } from "@/constants";
import { createEndpointHandlers } from "@/utils/endpoint-factory";

const { getAll, getById } = createEndpointHandlers<TETRAMobileNetworkCode>(
  TETRA_MOBILE_NETWORK_CODES_ENDPOINT,
);

export const getTETRAMobileNetworkCodes = getAll;
export const getTETRAMobileNetworkCodeById = getById;
