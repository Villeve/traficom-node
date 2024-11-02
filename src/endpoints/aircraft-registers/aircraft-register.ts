import { AircraftRegister } from "./aircraft-register.types";
import { createEndpointHandlers } from "@/utils/endpoint-factory";
import { AIRCRAFT_ENDPOINT } from "@/constants";

const { getAll, getById } =
  createEndpointHandlers<AircraftRegister>(AIRCRAFT_ENDPOINT);

export const getAircraftRegister = getAll;
export const getAircraftRegisterById = getById;
