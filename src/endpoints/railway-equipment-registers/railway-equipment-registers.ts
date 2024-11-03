import { RailwayEquipmentRegister } from "./railway-equipment-registers.types";
import { RAILWAY_EQUIPMENT_REGISTER_ENDPOINT } from "@/constants";
import { createEndpointHandlers } from "@/utils/endpoint-factory";

const { getAll, getById } = createEndpointHandlers<RailwayEquipmentRegister>(
  RAILWAY_EQUIPMENT_REGISTER_ENDPOINT,
);

export const getRailwayEquipmentRegisters = getAll;
export const getRailwayEquipmentRegisterById = getById;
