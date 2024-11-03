import { BroadbandProject } from "./broadband-projects.types";
import { BROADBAND_PROJECTS_ENDPOINT } from "@/constants";
import { createEndpointHandlers } from "@/utils/endpoint-factory";

const { getAll } = createEndpointHandlers<BroadbandProject>(
  BROADBAND_PROJECTS_ENDPOINT,
);

export const getBroadbandProjects = getAll;
