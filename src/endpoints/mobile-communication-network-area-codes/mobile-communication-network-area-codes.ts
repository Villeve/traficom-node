import { MobileCommunicationNetworkAreaCode } from "./mobile-communication-network-area-codes.types";
import { createEndpointHandlers } from "@/utils/endpoint-factory";
import { MOBILE_COMMUNICATION_NETWORK_AREA_CODES_ENDPOINT } from "@/constants";

const { getAll, getById } =
  createEndpointHandlers<MobileCommunicationNetworkAreaCode>(
    MOBILE_COMMUNICATION_NETWORK_AREA_CODES_ENDPOINT,
  );

export const getMobileCommunicationNetworkAreaCodes = getAll;
export const getMobileCommunicationNetworkAreaCodeById = getById;
