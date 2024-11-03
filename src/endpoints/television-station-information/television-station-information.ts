import { TelevisionStationInformation } from "./television-station-information.types";
import { TELEVISION_STATION_INFORMATION_ENDPOINT } from "@/constants";
import { createEndpointHandlers } from "@/utils/endpoint-factory";

const { getAll, getById } =
  createEndpointHandlers<TelevisionStationInformation>(
    TELEVISION_STATION_INFORMATION_ENDPOINT,
  );

export const getTelevisionStations = getAll;
export const getTelevisionStationById = getById;
