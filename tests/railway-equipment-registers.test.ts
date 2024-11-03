import { createClient } from "../src/index";

describe("railway-equipment-registers Integration Tests", () => {
  let client: ReturnType<typeof createClient>;

  beforeAll(() => {
    client = createClient();
  });

  describe("getRailwayEquipmentRegisters", () => {
    it("should fetch railway equipment registers successfully", async () => {
      const response = await client.getRailwayEquipmentRegisters({
        $top: 10,
      });

      expect(response).toBeDefined();
      expect(response["@odata.context"]).toBeDefined();
      expect(Array.isArray(response.value)).toBe(true);

      // Validate first equipment structure if available
      if (response.value.length > 0) {
        const equipment = response.value[0];
        expect(equipment.ID).toBeDefined();
        expect(typeof equipment.Laji).toBe("string");
        expect(typeof equipment.Sarjatunnus).toBe("string");
      }
    });

    it("should handle query parameters correctly", async () => {
      const params = {
        $top: 5,
        $orderby: "Laji",
      };

      const response = await client.getRailwayEquipmentRegisters(params);
      expect(response.value.length).toBeLessThanOrEqual(5);
    });

    it("should return selected fields when using $select", async () => {
      const params = {
        $select: "ID,Laji,Sarjatunnus",
        $top: 1,
      };

      const response = await client.getRailwayEquipmentRegisters(params);

      if (response.value.length > 0) {
        const equipment = response.value[0];
        const keys = Object.keys(equipment);
        expect(keys).toHaveLength(3);
        expect(keys).toEqual(
          expect.arrayContaining(["ID", "Laji", "Sarjatunnus"]),
        );
      }
    });
  });

  describe("getRailwayEquipmentRegister", () => {
    it("should fetch a single railway equipment register successfully", async () => {
      const response = await client.getRailwayEquipmentRegisterById(1);

      expect(response).toBeDefined();
      expect(response["@odata.context"]).toBeDefined();
      expect(typeof response.ID).toBe("number");
      expect(typeof response.Laji).toBe("string");
      expect(typeof response.Sarjatunnus).toBe("string");
    });

    it("should handle query parameters correctly", async () => {
      const params = {
        $select: "ID,Laji,Sarjatunnus",
      };

      const response = await client.getRailwayEquipmentRegisterById(1, params);

      const keys = Object.keys(response);
      expect(keys).toHaveLength(4);
      expect(keys).toEqual(
        expect.arrayContaining(["ID", "Laji", "Sarjatunnus"]),
      );
    });
  });
});
