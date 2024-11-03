import { RadioAmateurCallSign } from "./radio-amateur-call-signs.types";
import { RADIO_AMATEUR_CALL_SIGNS_ENDPOINT } from "@/constants";
import { createEndpointHandlers } from "@/utils/endpoint-factory";

const { getAll, getById } = createEndpointHandlers<RadioAmateurCallSign>(
  RADIO_AMATEUR_CALL_SIGNS_ENDPOINT,
);

export const getRadioAmateurCallSigns = getAll;
export const getRadioAmateurCallSignById = getById;
