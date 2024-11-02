import { RadioStationInformation } from "./radio-station-information.types";
import { createEndpointHandlers } from "@/utils/endpoint-factory";
import { RADIO_STATION_INFORMATION_ENDPOINT } from "@/constants";

const { getAll, getById } = createEndpointHandlers<RadioStationInformation>(
  RADIO_STATION_INFORMATION_ENDPOINT,
);

export const getRadioStationInformation = getAll;
export const getRadioStationInformationById = getById;
