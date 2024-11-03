import { LandlineTelephoneNetworkSubscriberNumber } from "./landline-telephone-network-subscriber-numbers.types";
import { LANDLINE_TELEPHONE_NETWORK_SUBSCRIBER_NUMBERS_ENDPOINT } from "@/constants";
import { createEndpointHandlers } from "@/utils/endpoint-factory";

const { getAll, getById } =
  createEndpointHandlers<LandlineTelephoneNetworkSubscriberNumber>(
    LANDLINE_TELEPHONE_NETWORK_SUBSCRIBER_NUMBERS_ENDPOINT,
  );

export const getLandlineTelephoneNetworkSubscriberNumbers = getAll;
export const getLandlineTelephoneNetworkSubscriberNumberById = getById;
