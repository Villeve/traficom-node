import { NationalServiceNumber } from "./national-service-numbers.types";
import { createEndpointHandlers } from "@/utils/endpoint-factory";
import { NATIONAL_SERVICE_NUMBERS_ENDPOINT } from "@/constants";

const { getAll, getById } = createEndpointHandlers<NationalServiceNumber>(
  NATIONAL_SERVICE_NUMBERS_ENDPOINT,
);

export const getNationalServiceNumbers = getAll;
export const getNationalServiceNumberById = getById;
