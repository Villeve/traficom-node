import { MobileNetworkCode } from "./mobile-network-codes.types";
import { MOBILE_NETWORK_CODES_ENDPOINT } from "@/constants";
import { createEndpointHandlers } from "@/utils/endpoint-factory";

const { getAll, getById } = createEndpointHandlers<MobileNetworkCode>(
  MOBILE_NETWORK_CODES_ENDPOINT,
);

export const getMobileNetworkCodes = getAll;
export const getMobileNetworkCodeById = getById;
