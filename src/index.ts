import {
  getTETRAMobileNetworkCodes,
  getTETRAMobileNetworkCodeById,
  TETRAMobileNetworkCode,
} from "./endpoints/tetra-mobile-network-codes";
import {
  getAircraftRegister,
  getAircraftRegisterById,
  AircraftRegister,
} from "./endpoints/aircraft-registers";
import { DEFAULT_BASE_URL } from "./constants";
import {
  getVehicleRegisterById,
  getVehicleRegisters,
  VehicleRegister,
} from "./endpoints/vehicle-registers";
import { MultiEntityResponse, SingleEntityResponse } from "./types";

/**
 * @public
 * TraficomSDK class for interacting with the Traficom API.
 * @class
 */
class TraficomSDK {
  private readonly baseUrl: string;

  /**
   * @public
   * Creates an instance of TraficomSDK.
   * @param {string} [baseUrl] - The base URL for the Traficom API. If not provided, it uses the default URL from environment variables or a fallback value.
   */
  constructor(baseUrl?: string) {
    this.baseUrl = baseUrl ?? process.env.TRAFICOM_API_URL ?? DEFAULT_BASE_URL;
  }

  /**
   * @public
   * Retrieves TETRA mobile network codes.
   * @param {Parameters<typeof getTETRAMobileNetworkCodes>[1]} [params={}] - Optional parameters for the request.
   * @returns {Promise<MultiEntityResponse<TETRAMobileNetworkCode>>} A promise that resolves to an object containing an array of TETRA mobile network codes.
   */
  async getTETRAMobileNetworkCodes(
    params: Parameters<typeof getTETRAMobileNetworkCodes>[1] = {},
  ): Promise<MultiEntityResponse<TETRAMobileNetworkCode>> {
    return getTETRAMobileNetworkCodes(this.baseUrl, params);
  }

  /**
   * @public
   * Retrieves a specific TETRA mobile network code by ID.
   * @param {number} id - The ID of the TETRA mobile network code to retrieve.
   * @param {Parameters<typeof getTETRAMobileNetworkCodeById>[2]} [params={}] - Optional parameters for the request.
   * @returns {Promise<SingleEntityResponse<TETRAMobileNetworkCode>>} A promise that resolves to a TETRA mobile network code object.
   */
  async getTETRAMobileNetworkCodeById(
    id: number,
    params: Parameters<typeof getTETRAMobileNetworkCodeById>[2] = {},
  ): Promise<SingleEntityResponse<TETRAMobileNetworkCode>> {
    return getTETRAMobileNetworkCodeById(this.baseUrl, id, params);
  }

  /**
   * @public
   * Retrieves aircraft register data.
   * @param {Parameters<typeof getAircraftRegister>[1]} [params={}] - Optional parameters for the request.
   * @returns {Promise<MultiEntityResponse<AircraftRegister>>} A promise that resolves to an object containing an array of aircraft register data.
   */
  async getAircraftRegister(
    params: Parameters<typeof getAircraftRegister>[1] = {},
  ): Promise<MultiEntityResponse<AircraftRegister>> {
    return getAircraftRegister(this.baseUrl, params);
  }

  /**
   * @public
   * Retrieves a specific aircraft register entry by ID.
   * @param {number} id - The ID of the aircraft register entry to retrieve.
   * @param {Parameters<typeof getAircraftRegisterById>[2]} [params={}] - Optional parameters for the request.
   * @returns {Promise<SingleEntityResponse<AircraftRegister>>} A promise that resolves to an aircraft register object.
   */
  async getAircraftRegisterById(
    id: number,
    params: Parameters<typeof getAircraftRegisterById>[2] = {},
  ): Promise<SingleEntityResponse<AircraftRegister>> {
    return getAircraftRegisterById(this.baseUrl, id, params);
  }

  /**
   * @public
   * Retrieves vehicle register data.
   * @param {Parameters<typeof getVehicleRegisters>[1]} [params={}] - Optional parameters for the request.
   * @returns {Promise<MultiEntityResponse<VehicleRegister>>} A promise that resolves to an object containing an array of vehicle register data.
   */
  async getVehicleRegisters(
    params: Parameters<typeof getVehicleRegisters>[1] = {},
  ): Promise<MultiEntityResponse<VehicleRegister>> {
    return getVehicleRegisters(this.baseUrl, params);
  }

  /**
   * @public
   * Retrieves a specific vehicle register entry by ID.
   * @param {number} id - The ID of the vehicle register entry to retrieve.
   * @param {Parameters<typeof getVehicleRegisterById>[2]} [params={}] - Optional parameters for the request.
   * @returns {Promise<SingleEntityResponse<VehicleRegister>>} A promise that resolves to a vehicle register object.
   */
  async getVehicleRegisterById(
    id: number,
    params: Parameters<typeof getVehicleRegisterById>[2] = {},
  ): Promise<SingleEntityResponse<VehicleRegister>> {
    return getVehicleRegisterById(this.baseUrl, id, params);
  }
}

export default TraficomSDK;
