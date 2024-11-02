import { RadioAmateurCallSign } from "./radio-amateur-call-signs.types";
import { createEndpointHandlers } from "@/utils/endpoint-factory";
import { RADIO_AMATEUR_CALL_SIGNS_ENDPOINT } from "@/constants";

const { getAll, getById } = createEndpointHandlers<RadioAmateurCallSign>(
  RADIO_AMATEUR_CALL_SIGNS_ENDPOINT,
);

export const getRadioAmateurCallSigns = getAll;
export const getRadioAmateurCallSignById = getById;
