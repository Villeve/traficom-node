import {
  getTETRAMobileNetworkCodes,
  getTETRAMobileNetworkCodeById,
  TETRAMobileNetworkCode,
} from "./tetra-mobile-network-codes";
import {
  getAircraftRegister,
  getAircraftRegisterById,
  AircraftRegister,
} from "./aircraft-registers";
import { DEFAULT_BASE_URL } from "./constants";

/**
 * TraficomSDK class for interacting with the Traficom API.
 * @class
 */
class TraficomSDK {
  private readonly baseUrl: string;

  /**
   * Creates an instance of TraficomSDK.
   * @param {string} [baseUrl] - The base URL for the Traficom API. If not provided, it uses the default URL from environment variables or a fallback value.
   */
  constructor(baseUrl?: string) {
    this.baseUrl = baseUrl ?? process.env.TRAFICOM_API_URL ?? DEFAULT_BASE_URL;
  }

  /**
   * Retrieves TETRA mobile network codes.
   * @param {Parameters<typeof getTETRAMobileNetworkCodes>[1]} [params={}] - Optional parameters for the request.
   * @returns {Promise<{ value: TETRAMobileNetworkCode[] }>} A promise that resolves to an object containing an array of TETRA mobile network codes.
   */
  async getTETRAMobileNetworkCodes(
    params: Parameters<typeof getTETRAMobileNetworkCodes>[1] = {},
  ): Promise<{ value: TETRAMobileNetworkCode[] }> {
    return getTETRAMobileNetworkCodes(this.baseUrl, params);
  }

  /**
   * Retrieves a specific TETRA mobile network code by ID.
   * @param {number} id - The ID of the TETRA mobile network code to retrieve.
   * @param {Parameters<typeof getTETRAMobileNetworkCodeById>[2]} [params={}] - Optional parameters for the request.
   * @returns {Promise<TETRAMobileNetworkCode>} A promise that resolves to a TETRA mobile network code object.
   */
  async getTETRAMobileNetworkCodeById(
    id: number,
    params: Parameters<typeof getTETRAMobileNetworkCodeById>[2] = {},
  ): Promise<TETRAMobileNetworkCode> {
    return getTETRAMobileNetworkCodeById(this.baseUrl, id, params);
  }

  /**
   * Retrieves aircraft register data.
   * @param {Parameters<typeof getAircraftRegister>[1]} [params={}] - Optional parameters for the request.
   * @returns {Promise<{ value: AircraftRegister[] }>} A promise that resolves to an object containing an array of aircraft register data.
   */
  async getAircraftRegister(
    params: Parameters<typeof getAircraftRegister>[1] = {},
  ): Promise<{ value: AircraftRegister[] }> {
    return getAircraftRegister(this.baseUrl, params);
  }

  /**
   * Retrieves a specific aircraft register entry by ID.
   * @param {number} id - The ID of the aircraft register entry to retrieve.
   * @param {Parameters<typeof getAircraftRegisterById>[2]} [params={}] - Optional parameters for the request.
   * @returns {Promise<AircraftRegister>} A promise that resolves to an aircraft register object.
   */
  async getAircraftRegisterById(
    id: number,
    params: Parameters<typeof getAircraftRegisterById>[2] = {},
  ): Promise<AircraftRegister> {
    return getAircraftRegisterById(this.baseUrl, id, params);
  }
}

export default TraficomSDK;
