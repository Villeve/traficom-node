import { NationalSubscriberNumber } from "./national-subscriber-numbers.types";
import { createEndpointHandlers } from "@/utils/endpoint-factory";
import { NATIONAL_SUBSCRIBER_NUMBERS_ENDPOINT } from "@/constants";

const { getAll, getById } = createEndpointHandlers<NationalSubscriberNumber>(
  NATIONAL_SUBSCRIBER_NUMBERS_ENDPOINT,
);

export const getNationalSubscriberNumbers = getAll;
export const getNationalSubscriberNumberById = getById;
