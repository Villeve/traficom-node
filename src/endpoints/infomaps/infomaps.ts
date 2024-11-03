import { Infomap } from "./infomaps.types";
import { INFOMAPS_ENDPOINT } from "@/constants";
import { createEndpointHandlers } from "@/utils/endpoint-factory";

const { getAll, getById } = createEndpointHandlers<Infomap>(INFOMAPS_ENDPOINT);

export const getInfomaps = getAll;
export const getInfomapById = getById;
