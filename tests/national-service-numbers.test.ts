import { createClient } from "../src/index";

describe("national-service-numbers Integration Tests", () => {
  const client = createClient();

  describe("getNationalServiceNumbers", () => {
    it("should fetch a list of national service numbers", async () => {
      const response = await client.getNationalServiceNumbers();

      expect(response).toBeDefined();
      expect(response["@odata.context"]).toBeDefined();
      expect(Array.isArray(response.value)).toBe(true);

      if (response.value.length > 0) {
        const item = response.value[0];
        expect(typeof item.ID).toBe("number");
        expect(typeof item.Number).toBe("string");
        expect(typeof item.Company).toBe("string");
        expect(typeof item.Granted).toBe("string");
      }
    });

    it("should handle $top parameter correctly", async () => {
      const top = 5;
      const response = await client.getNationalServiceNumbers({
        $top: top,
      });

      expect(response.value).toHaveLength(top);
    });

    it("should handle $select parameter correctly", async () => {
      const response = await client.getNationalServiceNumbers({
        $select: "ID,Number,Company",
      });

      if (response.value.length > 0) {
        const item = response.value[0];
        expect(Object.keys(item)).toHaveLength(3);
        expect(item).toHaveProperty("ID");
        expect(item).toHaveProperty("Number");
        expect(item).toHaveProperty("Company");
        expect(item).not.toHaveProperty("Granted");
      }
    });

    it("should handle $filter parameter correctly", async () => {
      const response = await client.getNationalServiceNumbers({
        $filter: "Company eq 'Elisa Oyj'",
      });

      response.value.forEach((item) => {
        expect(item.Company).toBe("Elisa Oyj");
      });
    });
  });

  describe("getNationalServiceNumberById", () => {
    let validId: number;

    beforeAll(async () => {
      // Get a valid ID from the list endpoint
      const response = await client.getNationalServiceNumbers({
        $top: 1,
      });
      if (response.value.length > 0) {
        validId = response.value[0].ID;
      } else {
        console.warn("No national service numbers available for testing");
      }
    });

    it("should fetch a single item by ID", async () => {
      if (validId) {
        const response = await client.getNationalServiceNumberById(validId);

        expect(response).toBeDefined();
        expect(response["@odata.context"]).toBeDefined();
        expect(response.ID).toBe(validId);
        expect(typeof response.Number).toBe("string");
        expect(typeof response.Company).toBe("string");
        expect(typeof response.Granted).toBe("string");
      } else {
        console.warn("Skipping test due to no available data");
      }
    });

    it("should handle $select parameter correctly", async () => {
      if (validId) {
        const response = await client.getNationalServiceNumberById(validId, {
          $select: "ID,Number,Company",
        });

        expect(Object.keys(response)).toHaveLength(4); // Including @odata.context
        expect(response).toHaveProperty("ID");
        expect(response).toHaveProperty("Number");
        expect(response).toHaveProperty("Company");
        expect(response).not.toHaveProperty("Granted");
      } else {
        console.warn("Skipping test due to no available data");
      }
    });
  });
});
