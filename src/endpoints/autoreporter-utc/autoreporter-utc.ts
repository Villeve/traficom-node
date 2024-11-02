import { AutoreporterUTC } from "./autoreporter-utc.types";
import { createEndpointHandlers } from "@/utils/endpoint-factory";
import { AUTOREPORTER_UTC_ENDPOINT } from "@/constants";

const { getAll, getById } = createEndpointHandlers<AutoreporterUTC>(
  AUTOREPORTER_UTC_ENDPOINT,
);

export const getAutoreporterUTCs = getAll;
export const getAutoreporterUTCById = getById;
