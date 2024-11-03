import { Autoreporter } from "./autoreporter.types";
import { AUTOREPORTER_ENDPOINT } from "@/constants";
import { createEndpointHandlers } from "@/utils/endpoint-factory";

const { getAll, getById } = createEndpointHandlers<Autoreporter>(
  AUTOREPORTER_ENDPOINT,
);

export const getAutoreporters = getAll;
export const getAutoreporterById = getById;
