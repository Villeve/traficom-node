import { VehicleInformationSystemCode } from "./vehicle-information-system-codes.types";
import { VEHICLE_INFORMATION_SYSTEM_CODE_ENDPOINT } from "@/constants";
import { createEndpointHandlers } from "@/utils/endpoint-factory";

const { getAll, getById } =
  createEndpointHandlers<VehicleInformationSystemCode>(
    VEHICLE_INFORMATION_SYSTEM_CODE_ENDPOINT,
  );

export const getVehicleSystemCodes = getAll;
export const getVehicleSystemCodeById = getById;
