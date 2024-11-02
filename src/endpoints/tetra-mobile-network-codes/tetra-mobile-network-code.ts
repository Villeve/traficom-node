import { TETRAMobileNetworkCode } from "./tetra-mobile-network-code.types";
import { createEndpointHandlers } from "@/utils/endpoint-factory";
import { TETRA_MOBILE_NETWORK_CODES_ENDPOINT } from "@/constants";

const { getAll, getById } = createEndpointHandlers<TETRAMobileNetworkCode>(
  TETRA_MOBILE_NETWORK_CODES_ENDPOINT,
);

export const getTETRAMobileNetworkCodes = getAll;
export const getTETRAMobileNetworkCodeById = getById;
