import { AutoreporterUTC } from "./autoreporter-utc.types";
import { AUTOREPORTER_UTC_ENDPOINT } from "@/constants";
import { createEndpointHandlers } from "@/utils/endpoint-factory";

const { getAll, getById } = createEndpointHandlers<AutoreporterUTC>(
  AUTOREPORTER_UTC_ENDPOINT,
);

export const getAutoreporterUTCs = getAll;
export const getAutoreporterUTCById = getById;
