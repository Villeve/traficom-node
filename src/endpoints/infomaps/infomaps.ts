import { Infomap } from "./infomaps.types";
import { createEndpointHandlers } from "@/utils/endpoint-factory";
import { INFOMAPS_ENDPOINT } from "@/constants";

const { getAll, getById } = createEndpointHandlers<Infomap>(INFOMAPS_ENDPOINT);

export const getInfomaps = getAll;
export const getInfomapById = getById;
