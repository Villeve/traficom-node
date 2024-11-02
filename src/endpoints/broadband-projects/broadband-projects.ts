import { BroadbandProject } from "./broadband-projects.types";
import { createEndpointHandlers } from "@/utils/endpoint-factory";
import { BROADBAND_PROJECTS_ENDPOINT } from "@/constants";

const { getAll } = createEndpointHandlers<BroadbandProject>(
  BROADBAND_PROJECTS_ENDPOINT,
);

export const getBroadbandProjects = getAll;
