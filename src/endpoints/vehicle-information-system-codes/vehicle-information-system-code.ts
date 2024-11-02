import { VehicleInformationSystemCode } from "./vehicle-information-system-code.types";
import { createEndpointHandlers } from "@/utils/endpoint-factory";
import { VEHICLE_INFORMATION_SYSTEM_CODE_ENDPOINT } from "@/constants";

const { getAll, getById } =
  createEndpointHandlers<VehicleInformationSystemCode>(
    VEHICLE_INFORMATION_SYSTEM_CODE_ENDPOINT,
  );

export const getVehicleInformationSystemCodes = getAll;
export const getVehicleInformationSystemCodeById = getById;
