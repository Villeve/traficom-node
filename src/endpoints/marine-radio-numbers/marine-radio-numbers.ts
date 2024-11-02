import { MarineRadioNumber } from "./marine-radio-numbers.types";
import { createEndpointHandlers } from "@/utils/endpoint-factory";
import { MARINE_RADIO_NUMBERS_ENDPOINT } from "@/constants";

const { getAll, getById } = createEndpointHandlers<MarineRadioNumber>(
  MARINE_RADIO_NUMBERS_ENDPOINT,
);

export const getMarineRadioNumbers = getAll;
export const getMarineRadioNumberById = getById;
