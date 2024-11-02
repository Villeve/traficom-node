import { VehicleRegister } from "./vehicle-register.types";
import { createEndpointHandlers } from "@/utils/endpoint-factory";
import { VEHICLE_ENDPOINT } from "@/constants";

const { getAll, getById } =
  createEndpointHandlers<VehicleRegister>(VEHICLE_ENDPOINT);

export const getVehicleRegisters = getAll;
export const getVehicleRegisterById = getById;
