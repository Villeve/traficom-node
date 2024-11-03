import { ShortMessageServiceNumber } from "./short-message-service-numbers.types";
import { SHORT_MESSAGE_SERVICE_NUMBERS_ENDPOINT } from "@/constants";
import { createEndpointHandlers } from "@/utils/endpoint-factory";

const { getAll } = createEndpointHandlers<ShortMessageServiceNumber>(
  SHORT_MESSAGE_SERVICE_NUMBERS_ENDPOINT,
);

export const getShortMessageServiceNumbers = getAll;
