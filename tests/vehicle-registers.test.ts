import { TraficomError } from "../src/classes";
import { createClient } from "../src/index";

describe("Vehicle Register Integration Tests", () => {
  let client: ReturnType<typeof createClient>;

  beforeAll(() => {
    client = createClient();
  });

  describe("getVehicleRegisters", () => {
    it("should fetch vehicle registers successfully", async () => {
      const response = await client.getVehicleRegisters();

      expect(response).toBeDefined();
      expect(response["@odata.context"]).toBeDefined();
      expect(Array.isArray(response.value)).toBe(true);

      // Validate first vehicle structure if available
      if (response.value.length > 0) {
        const vehicle = response.value[0];
        expect(vehicle.ID).toBeDefined();
        expect(typeof vehicle.ajoneuvoluokka).toBe("string");
        expect(typeof vehicle.merkkiSelvakielinen).toBe("string");
      }
    });

    it("should handle query parameters correctly", async () => {
      const params = {
        $top: 5,
        $select: "ID,merkkiSelvakielinen,mallimerkinta",
        $orderby: "ID desc",
      };

      const response = await client.getVehicleRegisters(params);

      expect(response.value.length).toBeLessThanOrEqual(5);
      expect(Object.keys(response.value[0])).toEqual(
        expect.arrayContaining(["ID", "merkkiSelvakielinen", "mallimerkinta"]),
      );
    });

    it("should handle filtering correctly", async () => {
      const params = {
        $filter: "ajoneuvoluokka eq 'M1'",
        $top: 3,
      };

      const response = await client.getVehicleRegisters(params);

      expect(response.value.length).toBeGreaterThan(0);
      response.value.forEach((vehicle) => {
        expect(vehicle.ajoneuvoluokka).toBe("M1");
      });
    });
  });

  describe("getVehicleRegisterById", () => {
    let validVehicleId: number;

    beforeAll(async () => {
      // Get a valid ID from the list endpoint
      const response = await client.getVehicleRegisters({ $top: 1 });
      validVehicleId = response.value[0].ID;
    });

    it("should fetch a single vehicle register by ID", async () => {
      const response = await client.getVehicleRegisterById(validVehicleId);

      expect(response).toBeDefined();
      expect(response["@odata.context"]).toBeDefined();
      expect(response.ID).toBe(validVehicleId);
      expect(typeof response.ajoneuvoluokka).toBe("string");
      expect(typeof response.merkkiSelvakielinen).toBe("string");
    });

    it("should handle select parameters correctly", async () => {
      const params = {
        $select: "ID,merkkiSelvakielinen,mallimerkinta",
      };

      const response = await client.getVehicleRegisterById(
        validVehicleId,
        params,
      );

      const responseKeys = Object.keys(response);
      expect(responseKeys).toEqual(
        expect.arrayContaining(["ID", "merkkiSelvakielinen", "mallimerkinta"]),
      );
      expect(responseKeys).not.toContain("ajoneuvoluokka");
    });

    it("should throw TraficomError for non-existent ID", async () => {
      await expect(client.getVehicleRegisterById(999999999)).rejects.toThrow(
        TraficomError,
      );
    });

    it("should throw TraficomError for invalid ID format", async () => {
      // @ts-expect-error Testing invalid input
      await expect(client.getVehicleRegisterById("invalid")).rejects.toThrow(
        TraficomError,
      );
    });
  });
});
