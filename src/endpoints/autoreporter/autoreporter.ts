import { Autoreporter } from "./autoreporter.types";
import { createEndpointHandlers } from "@/utils/endpoint-factory";
import { AUTOREPORTER_ENDPOINT } from "@/constants";

const { getAll, getById } = createEndpointHandlers<Autoreporter>(
  AUTOREPORTER_ENDPOINT,
);

export const getAutoreporters = getAll;
export const getAutoreporterById = getById;
