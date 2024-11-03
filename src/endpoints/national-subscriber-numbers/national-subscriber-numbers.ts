import { NationalSubscriberNumber } from "./national-subscriber-numbers.types";
import { NATIONAL_SUBSCRIBER_NUMBERS_ENDPOINT } from "@/constants";
import { createEndpointHandlers } from "@/utils/endpoint-factory";

const { getAll, getById } = createEndpointHandlers<NationalSubscriberNumber>(
  NATIONAL_SUBSCRIBER_NUMBERS_ENDPOINT,
);

export const getNationalSubscriberNumbers = getAll;
export const getNationalSubscriberNumberById = getById;
