import { LandlineTelephoneNetworkSubscriberNumber } from "./landline-telephone-network-subscriber-numbers.types";
import { createEndpointHandlers } from "@/utils/endpoint-factory";
import { LANDLINE_TELEPHONE_NETWORK_SUBSCRIBER_NUMBERS_ENDPOINT } from "@/constants";

const { getAll, getById } =
  createEndpointHandlers<LandlineTelephoneNetworkSubscriberNumber>(
    LANDLINE_TELEPHONE_NETWORK_SUBSCRIBER_NUMBERS_ENDPOINT,
  );

export const getLandlineTelephoneNetworkSubscriberNumbers = getAll;
export const getLandlineTelephoneNetworkSubscriberNumberById = getById;
