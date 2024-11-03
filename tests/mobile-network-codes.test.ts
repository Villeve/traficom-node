import { createClient } from "../src/index";

describe("mobile-network-codes Integration Tests", () => {
  let client: ReturnType<typeof createClient>;

  beforeAll(() => {
    client = createClient();
  });

  describe("getMobileNetworkCodes", () => {
    it("should fetch data successfully", async () => {
      const response = await client.getMobileNetworkCodes();

      expect(response).toBeDefined();
      expect(response["@odata.context"]).toBeDefined();
      expect(Array.isArray(response.value)).toBe(true);

      // Validate first item structure if available
      if (response.value.length > 0) {
        const item = response.value[0];
        expect(item.ID).toBeDefined();
        expect(typeof item.Number).toBe("string");
        expect(typeof item.Company).toBe("string");
        expect(typeof item.Granted).toBe("string");
      }
    });

    it("should handle query parameters correctly", async () => {
      const params = {
        $top: 5,
        $select: "ID,Number,Company",
        $orderby: "Company asc",
      };

      const response = await client.getMobileNetworkCodes(params);

      expect(response.value.length).toBeLessThanOrEqual(5);
      expect(Object.keys(response.value[0])).toEqual(
        expect.arrayContaining(["ID", "Number", "Company"]),
      );

      // Verify ordering
      const companies = response.value.map((item) => item.Company);
      const sortedCompanies = [...companies].sort((a, b) => a.localeCompare(b));
      expect(companies).toEqual(sortedCompanies);
    });

    it("should handle $select parameter correctly", async () => {
      const response = await client.getMobileNetworkCodes({
        $select: "ID,Number",
      });

      if (response.value.length > 0) {
        const item = response.value[0];
        expect(Object.keys(item)).toHaveLength(2);
        expect(item).toHaveProperty("ID");
        expect(item).toHaveProperty("Number");
        expect(item).not.toHaveProperty("Company");
        expect(item).not.toHaveProperty("Granted");
      }
    });
  });

  describe("getMobileNetworkCodeById", () => {
    let validId: number;

    beforeAll(async () => {
      // Get a valid ID from the list endpoint
      const response = await client.getMobileNetworkCodes({
        $top: 1,
      });
      if (response.value.length > 0) {
        validId = response.value[0].ID;
      } else {
        console.warn("No mobile network codes available for testing");
      }
    });

    it("should fetch a single item by ID", async () => {
      if (validId) {
        const response = await client.getMobileNetworkCodeById(validId);

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
        const response = await client.getMobileNetworkCodeById(validId, {
          $select: "ID,Number,Company",
        });

        expect(Object.keys(response)).toHaveLength(4);
      }
    });
  });
});
