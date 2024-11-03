import { AircraftRegister } from "./aircraft-registers.types";
import { AIRCRAFT_ENDPOINT } from "@/constants";
import { createEndpointHandlers } from "@/utils/endpoint-factory";

const { getAll, getById } =
  createEndpointHandlers<AircraftRegister>(AIRCRAFT_ENDPOINT);

export const getAircraftRegisters = getAll;
export const getAircraftRegisterById = getById;
