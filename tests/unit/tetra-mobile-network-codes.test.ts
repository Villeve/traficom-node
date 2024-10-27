import { fetchJson } from "@/utils";
import {
  getTETRAMobileNetworkCodes,
  getTETRAMobileNetworkCodeById,
  TETRAMobileNetworkCode,
} from "../../src/tetra-mobile-network-codes";

jest.mock("@/utils", () => ({
  fetchJson: jest.fn(),
}));

describe("TETRA Mobile Network Code functions", () => {
  const mockBaseUrl = "https://api.example.com";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("getTETRAMobileNetworkCodes", () => {
    it("should fetch TETRA mobile network codes with default params", async () => {
      const mockResponse = {
        value: [
          {
            ID: 1,
            Number: "123",
            Company: "Test Company",
            Granted: "2023-01-01",
          },
        ],
      };
      (fetchJson as jest.Mock).mockResolvedValue(mockResponse);

      const result = await getTETRAMobileNetworkCodes(mockBaseUrl);

      expect(result).toEqual(mockResponse);
      expect(fetchJson).toHaveBeenCalledWith(
        `${mockBaseUrl}/api/v13/_T_MNC_tunnukset`,
      );
    });

    it("should fetch TETRA mobile network codes with custom params", async () => {
      const mockResponse = {
        value: [
          {
            ID: 1,
            Number: "123",
            Company: "Test Company",
            Granted: "2023-01-01",
          },
        ],
      };
      (fetchJson as jest.Mock).mockResolvedValue(mockResponse);

      const params = {
        $top: 10,
        $filter: "Company eq 'Test Company'",
        $orderby: "ID desc",
        $count: true,
      };

      const result = await getTETRAMobileNetworkCodes(mockBaseUrl, params);

      expect(result).toEqual(mockResponse);
      expect(fetchJson).toHaveBeenCalledWith(
        `${mockBaseUrl}/api/v13/_T_MNC_tunnukset?%24top=10&%24filter=Company+eq+%27Test+Company%27&%24orderby=ID+desc&%24count=true`,
      );
    });
  });

  describe("getTETRAMobileNetworkCodeById", () => {
    it("should fetch TETRA mobile network code by ID with default params", async () => {
      const mockResponse: TETRAMobileNetworkCode = {
        ID: 1,
        Number: "123",
        Company: "Test Company",
        Granted: "2023-01-01",
      };
      (fetchJson as jest.Mock).mockResolvedValue(mockResponse);

      const result = await getTETRAMobileNetworkCodeById(mockBaseUrl, 1);

      expect(result).toEqual(mockResponse);
      expect(fetchJson).toHaveBeenCalledWith(
        `${mockBaseUrl}/api/v13/_T_MNC_tunnukset(1)`,
      );
    });

    it("should fetch TETRA mobile network code by ID with custom params", async () => {
      const mockResponse: TETRAMobileNetworkCode = {
        ID: 1,
        Number: "123",
        Company: "Test Company",
        Granted: "2023-01-01",
      };
      (fetchJson as jest.Mock).mockResolvedValue(mockResponse);

      const params = {
        $expand: "RelatedEntity",
        $select: "ID,Number,Company",
      };

      const result = await getTETRAMobileNetworkCodeById(
        mockBaseUrl,
        1,
        params,
      );

      expect(result).toEqual(mockResponse);
      expect(fetchJson).toHaveBeenCalledWith(
        `${mockBaseUrl}/api/v13/_T_MNC_tunnukset(1)?%24expand=RelatedEntity&%24select=ID%2CNumber%2CCompany`,
      );
    });
  });
});
