import { MobileNetworkCode } from "./mobile-network-codes.types";
import { createEndpointHandlers } from "@/utils/endpoint-factory";
import { MOBILE_NETWORK_CODES_ENDPOINT } from "@/constants";

const { getAll, getById } = createEndpointHandlers<MobileNetworkCode>(
  MOBILE_NETWORK_CODES_ENDPOINT,
);

export const getMobileNetworkCodes = getAll;
export const getMobileNetworkCodeById = getById;
