import {
  AircraftRegister,
  getAircraftRegister,
  getAircraftRegisterById,
} from "@/aircraft-registers";
import { fetchJson } from "@/utils";

jest.mock("@/utils", () => ({
  fetchJson: jest.fn(),
}));

describe("Aircraft Register functions", () => {
  const mockBaseUrl = "https://api.example.com";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("getAircraftRegister", () => {
    it("should fetch aircraft register data with default params", async () => {
      const mockResponse = {
        value: [{ ID: 1, Aircraft_name: "Test Aircraft" }],
      };
      (fetchJson as jest.Mock).mockResolvedValue(mockResponse);

      const result = await getAircraftRegister(mockBaseUrl);

      expect(result).toEqual(mockResponse);
      expect(fetchJson).toHaveBeenCalledWith(
        `${mockBaseUrl}/api/v13/AircraftRegister`,
      );
    });

    it("should fetch aircraft register data with custom params", async () => {
      const mockResponse = {
        value: [{ ID: 1, Aircraft_name: "Test Aircraft" }],
      };
      (fetchJson as jest.Mock).mockResolvedValue(mockResponse);

      const params = {
        $top: 10,
        $filter: "Aircraft_name eq 'Test'",
        $orderby: "ID desc",
      };

      const result = await getAircraftRegister(mockBaseUrl, params);

      expect(result).toEqual(mockResponse);
      expect(fetchJson).toHaveBeenCalledWith(
        `${mockBaseUrl}/api/v13/AircraftRegister?%24top=10&%24filter=Aircraft_name+eq+%27Test%27&%24orderby=ID+desc`,
      );
    });
  });

  describe("getAircraftRegisterById", () => {
    it("should fetch aircraft register data by ID with default params", async () => {
      const mockResponse: AircraftRegister = {
        ID: 1,
        Aircraft_name: "Test Aircraft",
      } as AircraftRegister;
      (fetchJson as jest.Mock).mockResolvedValue(mockResponse);

      const result = await getAircraftRegisterById(mockBaseUrl, 1);

      expect(result).toEqual(mockResponse);
      expect(fetchJson).toHaveBeenCalledWith(
        `${mockBaseUrl}/api/v13/AircraftRegister(1)`,
      );
    });

    it("should fetch aircraft register data by ID with custom params", async () => {
      const mockResponse: AircraftRegister = {
        ID: 1,
        Aircraft_name: "Test Aircraft",
      } as AircraftRegister;
      (fetchJson as jest.Mock).mockResolvedValue(mockResponse);

      const params = {
        $expand: "RelatedEntity",
        $select: "ID,Aircraft_name",
      };

      const result = await getAircraftRegisterById(mockBaseUrl, 1, params);

      expect(result).toEqual(mockResponse);
      expect(fetchJson).toHaveBeenCalledWith(
        `${mockBaseUrl}/api/v13/AircraftRegister(1)?%24expand=RelatedEntity&%24select=ID%2CAircraft_name`,
      );
    });
  });
});
