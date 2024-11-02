import { ShipRegister } from "./ship-register.types";
import { createEndpointHandlers } from "@/utils/endpoint-factory";
import { SHIP_ENDPOINT } from "@/constants";

const { getAll, getById } = createEndpointHandlers<ShipRegister>(SHIP_ENDPOINT);

export const getShipRegisters = getAll;
export const getShipRegisterById = getById;
