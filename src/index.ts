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

class TraficomSDK {
  private readonly baseUrl: string;

  constructor(baseUrl: string = "https://opendata.traficom.fi") {
    this.baseUrl = baseUrl;
  }

  async getTETRAMobileNetworkCodes(
    params: Parameters<typeof getTETRAMobileNetworkCodes>[1] = {},
  ): Promise<{ value: TETRAMobileNetworkCode[] }> {
    return getTETRAMobileNetworkCodes(this.baseUrl, params);
  }

  async getTETRAMobileNetworkCodeById(
    id: number,
    params: Parameters<typeof getTETRAMobileNetworkCodeById>[2] = {},
  ): Promise<TETRAMobileNetworkCode> {
    return getTETRAMobileNetworkCodeById(this.baseUrl, id, params);
  }

  async getAircraftRegister(
    params: Parameters<typeof getAircraftRegister>[1] = {},
  ): Promise<{ value: AircraftRegister[] }> {
    return getAircraftRegister(this.baseUrl, params);
  }

  async getAircraftRegisterById(
    id: number,
    params: Parameters<typeof getAircraftRegisterById>[2] = {},
  ): Promise<AircraftRegister> {
    return getAircraftRegisterById(this.baseUrl, id, params);
  }
}

export default TraficomSDK;
