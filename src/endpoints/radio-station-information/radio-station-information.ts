import { RadioStationInformation } from "./radio-station-information.types";
import { RADIO_STATION_INFORMATION_ENDPOINT } from "@/constants";
import { createEndpointHandlers } from "@/utils/endpoint-factory";

const { getAll, getById } = createEndpointHandlers<RadioStationInformation>(
  RADIO_STATION_INFORMATION_ENDPOINT,
);

export const getRadioStations = getAll;
export const getRadioStationById = getById;
