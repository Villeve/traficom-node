import { GeneralServiceArea } from "./general-service-areas.types";
import { GENERAL_SERVICE_AREAS_ENDPOINT } from "@/constants";
import { createEndpointHandlers } from "@/utils/endpoint-factory";

const { getAll } = createEndpointHandlers<GeneralServiceArea>(
  GENERAL_SERVICE_AREAS_ENDPOINT,
);

export const getGeneralServiceAreas = getAll;
