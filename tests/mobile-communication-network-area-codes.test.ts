import { createClient } from "../src/index";

describe("mobile-communication-network-area-codes Integration Tests", () => {
  let client: ReturnType<typeof createClient>;

  beforeAll(() => {
    client = createClient();
  });

  describe("getMobileCommunicationNetworkAreaCodes", () => {
    it("should return data", async () => {
      const result = await client.getMobileCommunicationNetworkAreaCodes();
      expect(result).toHaveProperty("value");
      expect(Array.isArray(result.value)).toBeTruthy();

      if (result.value.length > 0) {
        const firstItem = result.value[0];
        expect(firstItem).toHaveProperty("ID");
        expect(firstItem).toHaveProperty("Number");
        expect(firstItem).toHaveProperty("Company");
        expect(firstItem).toHaveProperty("Granted");
      }
    });

    it("should handle query parameters correctly", async () => {
      const result = await client.getMobileCommunicationNetworkAreaCodes({
        $top: 3,
        $orderby: "Number",
      });

      expect(result.value.length).toBeLessThanOrEqual(3);

      // Verify ordering
      const numbers = result.value.map((item) => item.Number);
      const sortedNumbers = [...numbers].sort((a, b) => a.localeCompare(b));
      expect(numbers).toEqual(sortedNumbers);
    });

    it("should handle $select parameter", async () => {
      const result = await client.getMobileCommunicationNetworkAreaCodes({
        $select: "ID,Number",
      });

      if (result.value.length > 0) {
        const firstItem = result.value[0];
        expect(Object.keys(firstItem)).toHaveLength(2);
        expect(firstItem).toHaveProperty("ID");
        expect(firstItem).toHaveProperty("Number");
        expect(firstItem).not.toHaveProperty("Company");
        expect(firstItem).not.toHaveProperty("Granted");
      }
    });

    it("should handle $filter parameter correctly", async () => {
      const result = await client.getMobileCommunicationNetworkAreaCodes({
        $filter: "Company eq 'Telia Finland Oyj'",
      });

      if (result.value.length > 0) {
        result.value.forEach((item) => {
          expect(item.Company).toBe("Telia Finland Oyj");
        });
      }
    });
  });

  describe("getMobileCommunicationNetworkAreaCodeById", () => {
    let validId: number;

    beforeAll(async () => {
      // Get a valid ID from the list endpoint
      const response = await client.getMobileCommunicationNetworkAreaCodes({
        $top: 1,
      });
      if (response.value.length > 0) {
        validId = response.value[0].ID;
      } else {
        console.warn(
          "No mobile communication network area codes available for testing",
        );
      }
    });

    it("should fetch a single item by ID", async () => {
      if (validId) {
        const response =
          await client.getMobileCommunicationNetworkAreaCodeById(validId);

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
        const response = await client.getMobileCommunicationNetworkAreaCodeById(
          validId,
          {
            $select: "ID,Number,Company",
          },
        );

        expect(Object.keys(response)).toHaveLength(4); // Including @odata.context
      }
    });
  });
});
