import { GeneralServiceArea } from "./general-service-areas.types";
import { createEndpointHandlers } from "@/utils/endpoint-factory";
import { GENERAL_SERVICE_AREAS_ENDPOINT } from "@/constants";

const { getAll } = createEndpointHandlers<GeneralServiceArea>(
  GENERAL_SERVICE_AREAS_ENDPOINT,
);

export const getGeneralServiceAreas = getAll;
