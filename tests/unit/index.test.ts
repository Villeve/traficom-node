import TraficomSDK from "@/index";
import {
  getTETRAMobileNetworkCodes,
  getTETRAMobileNetworkCodeById,
} from "@/tetra-mobile-network-codes";
import {
  getAircraftRegister,
  getAircraftRegisterById,
} from "@/aircraft-registers";

jest.mock("@/tetra-mobile-network-codes");
jest.mock("@/aircraft-registers");

describe("TraficomSDK", () => {
  let sdk: TraficomSDK;

  beforeEach(() => {
    sdk = new TraficomSDK();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("constructor", () => {
    it("should set the default baseUrl", () => {
      expect(sdk["baseUrl"]).toBe("https://opendata.traficom.fi");
    });

    it("should set a custom baseUrl", () => {
      const customSdk = new TraficomSDK("https://custom.api.com");
      expect(customSdk["baseUrl"]).toBe("https://custom.api.com");
    });
  });

  describe("getTETRAMobileNetworkCodes", () => {
    it("should call getTETRAMobileNetworkCodes with correct parameters", async () => {
      const mockParams = { $top: 10 };
      await sdk.getTETRAMobileNetworkCodes(mockParams);
      expect(getTETRAMobileNetworkCodes).toHaveBeenCalledWith(
        "https://opendata.traficom.fi",
        mockParams,
      );
    });
  });

  describe("getTETRAMobileNetworkCodeById", () => {
    it("should call getTETRAMobileNetworkCodeById with correct parameters", async () => {
      const mockId = 123;
      const mockParams = { $select: "ID,Name" };
      await sdk.getTETRAMobileNetworkCodeById(mockId, mockParams);
      expect(getTETRAMobileNetworkCodeById).toHaveBeenCalledWith(
        "https://opendata.traficom.fi",
        mockId,
        mockParams,
      );
    });
  });

  describe("getAircraftRegister", () => {
    it("should call getAircraftRegister with correct parameters", async () => {
      const mockParams = { $orderby: "ID desc" };
      await sdk.getAircraftRegister(mockParams);
      expect(getAircraftRegister).toHaveBeenCalledWith(
        "https://opendata.traficom.fi",
        mockParams,
      );
    });
  });

  describe("getAircraftRegisterById", () => {
    it("should call getAircraftRegisterById with correct parameters", async () => {
      const mockId = 456;
      const mockParams = { $expand: "RelatedEntity" };
      await sdk.getAircraftRegisterById(mockId, mockParams);
      expect(getAircraftRegisterById).toHaveBeenCalledWith(
        "https://opendata.traficom.fi",
        mockId,
        mockParams,
      );
    });
  });
});
