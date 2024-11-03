import { ShipRegister } from "./ship-registers.types";
import { SHIP_ENDPOINT } from "@/constants";
import { createEndpointHandlers } from "@/utils/endpoint-factory";

const { getAll, getById } = createEndpointHandlers<ShipRegister>(SHIP_ENDPOINT);

export const getShipRegisters = getAll;
export const getShipRegisterById = getById;
