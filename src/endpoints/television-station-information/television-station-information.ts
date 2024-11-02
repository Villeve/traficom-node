import { TelevisionStationInformation } from "./television-station-information.types";
import { createEndpointHandlers } from "@/utils/endpoint-factory";
import { TELEVISION_STATION_INFORMATION_ENDPOINT } from "@/constants";

const { getAll, getById } =
  createEndpointHandlers<TelevisionStationInformation>(
    TELEVISION_STATION_INFORMATION_ENDPOINT,
  );

export const getTelevisionStationInformation = getAll;
export const getTelevisionStationInformationById = getById;
