import { VehicleRegister } from "./vehicle-registers.types";
import { VEHICLE_ENDPOINT } from "@/constants";
import { createEndpointHandlers } from "@/utils/endpoint-factory";

const { getAll, getById } =
  createEndpointHandlers<VehicleRegister>(VEHICLE_ENDPOINT);

export const getVehicleRegisters = getAll;
export const getVehicleRegisterById = getById;
