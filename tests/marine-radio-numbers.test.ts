import { createClient } from "../src";

describe("marine-radio-numbers Integration Tests", () => {
  let client: ReturnType<typeof createClient>;

  beforeAll(() => {
    client = createClient();
  });

  describe("getMarineRadioNumbers", () => {
    it("should fetch a list of marine radio numbers", async () => {
      const response = await client.getMarineRadioNumbers({
        $top: 10,
      });

      expect(response).toBeDefined();
      expect(response["@odata.context"]).toBeDefined();
      expect(Array.isArray(response.value)).toBe(true);

      if (response.value.length > 0) {
        const item = response.value[0];
        expect(typeof item.ID).toBe("number");
        expect(typeof item.MMSINumber).toBe("string");
        expect(typeof item.ShipName).toBe("string");
        expect(typeof item.ShipCallSign).toBe("string");
      }
    });

    it("should handle $top parameter correctly", async () => {
      const top = 5;
      const response = await client.getMarineRadioNumbers({
        $top: top,
      });

      expect(response.value).toHaveLength(top);
    });

    it("should handle $select parameter correctly", async () => {
      const response = await client.getMarineRadioNumbers({
        $select: "ID,MMSINumber,ShipName",
      });

      if (response.value.length > 0) {
        const item = response.value[0];
        expect(Object.keys(item)).toHaveLength(3);
        expect(item).toHaveProperty("ID");
        expect(item).toHaveProperty("MMSINumber");
        expect(item).toHaveProperty("ShipName");
        expect(item).not.toHaveProperty("ShipCallSign");
      }
    });
  });

  describe("getMarineRadioNumberById", () => {
    let validId: number;

    beforeAll(async () => {
      // Get a valid ID from the list endpoint
      const response = await client.getMarineRadioNumbers({
        $top: 1,
      });
      if (response.value.length > 0) {
        validId = response.value[0].ID;
      } else {
        console.warn("No marine radio numbers available for testing");
      }
    });

    it("should fetch a single item by ID", async () => {
      if (validId) {
        const response = await client.getMarineRadioNumberById(validId);

        expect(response).toBeDefined();
        expect(response["@odata.context"]).toBeDefined();
        expect(response.ID).toBe(validId);
        expect(typeof response.MMSINumber).toBe("string");
        expect(typeof response.ShipName).toBe("string");
        expect(typeof response.ShipCallSign).toBe("string");
      } else {
        console.warn("Skipping test due to no available data");
      }
    });

    it("should handle $select parameter correctly", async () => {
      if (validId) {
        const response = await client.getMarineRadioNumberById(validId, {
          $select: "ID,MMSINumber,ShipName",
        });

        expect(Object.keys(response)).toHaveLength(4); // Including @odata.context
        expect(response).toHaveProperty("ID");
        expect(response).toHaveProperty("MMSINumber");
        expect(response).toHaveProperty("ShipName");
        expect(response).not.toHaveProperty("ShipCallSign");
      } else {
        console.warn("Skipping test due to no available data");
      }
    });
  });
});
