import { RailwayEquipmentRegister } from "./railway-equipment-register.types";
import { createEndpointHandlers } from "@/utils/endpoint-factory";
import { RAILWAY_EQUIPMENT_REGISTER_ENDPOINT } from "@/constants";

const { getAll, getById } = createEndpointHandlers<RailwayEquipmentRegister>(
  RAILWAY_EQUIPMENT_REGISTER_ENDPOINT,
);

export const getRailwayEquipmentRegisters = getAll;
export const getRailwayEquipmentRegisterById = getById;
