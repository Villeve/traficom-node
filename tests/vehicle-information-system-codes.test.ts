import { createClient } from "@/index";

describe("vehicle-information-system-codes Integration Tests", () => {
  let client: ReturnType<typeof createClient>;

  beforeAll(() => {
    client = createClient();
  });

  describe("getVehicleInformationSystemCodes", () => {
    it("should fetch codes successfully", async () => {
      const response = await client.getVehicleInformationSystemCodes({
        $top: 100,
      });

      expect(response).toBeDefined();
      expect(response["@odata.context"]).toBeDefined();
      expect(Array.isArray(response.value)).toBe(true);

      // Validate first code structure if available
      if (response.value.length > 0) {
        const code = response.value[0];
        expect(code.ID).toBeDefined();
        expect(typeof code.KOODISTONOMISTAJA).toBe("string");
        expect(typeof code.KOODISTONTYYPPI).toBe("string");
        expect(typeof code.KOODISTONNIMI).toBe("string");
      }
    });

    it("should handle query parameters correctly", async () => {
      const params = {
        $top: 5,
        $select: "ID,KOODISTONOMISTAJA,KOODISTONNIMI",
        $orderby: "ID desc",
      };

      const response = await client.getVehicleInformationSystemCodes(params);

      expect(response.value.length).toBeLessThanOrEqual(5);
      expect(Object.keys(response.value[0])).toEqual(
        expect.arrayContaining(["ID", "KOODISTONOMISTAJA", "KOODISTONNIMI"]),
      );
    });

    it("should handle filtering correctly", async () => {
      const params = {
        $filter: "KOODISTONOMISTAJA eq 'TEST'",
        $top: 3,
      };

      const response = await client.getVehicleInformationSystemCodes(params);

      if (response.value.length > 0) {
        response.value.forEach((code) => {
          expect(code.KOODISTONOMISTAJA).toBe("TEST");
        });
      }
    });
  });

  describe("getVehicleInformationSystemCodeById", () => {
    it("should fetch a single code by ID", async () => {
      // First get all codes to get a valid ID
      const allCodes = await client.getVehicleInformationSystemCodes({
        $top: 1,
      });

      if (allCodes.value.length > 0) {
        const firstId = allCodes.value[0].ID;
        const response =
          await client.getVehicleInformationSystemCodeById(firstId);

        expect(response).toBeDefined();
        expect(response["@odata.context"]).toBeDefined();
        expect(response.ID).toBe(firstId);
        expect(typeof response.KOODISTONOMISTAJA).toBe("string");
        expect(typeof response.KOODISTONTYYPPI).toBe("string");
      } else {
        console.warn(
          "No vehicle information system codes available for testing",
        );
      }
    });

    it("should return selected fields when using $select", async () => {
      const allCodes = await client.getVehicleInformationSystemCodes({
        $top: 1,
      });

      if (allCodes.value.length > 0) {
        const firstId = allCodes.value[0].ID;
        const response = await client.getVehicleInformationSystemCodeById(
          firstId,
          {
            $select: "ID,KOODISTONOMISTAJA,KOODISTONNIMI",
          },
        );

        expect(Object.keys(response)).toHaveLength(4); // Including @odata.context
        expect(response).toHaveProperty("ID");
        expect(response).toHaveProperty("KOODISTONOMISTAJA");
        expect(response).toHaveProperty("KOODISTONNIMI");
      } else {
        console.warn(
          "No vehicle information system codes available for testing",
        );
      }
    });
  });
});
