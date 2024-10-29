import { createClient } from "@/index";

describe("fixed-network-province-specific-availability Integration Tests", () => {
  let client: ReturnType<typeof createClient>;

  beforeAll(() => {
    client = createClient();
  });

  describe("getFixedNetworkProvinceSpecificAvailability", () => {
    it("should fetch availability data successfully", async () => {
      const response =
        await client.getFixedNetworkProvinceSpecificAvailability();

      expect(response).toBeDefined();
      expect(response["@odata.context"]).toBeDefined();
      expect(Array.isArray(response.value)).toBe(true);

      // Validate first item structure if available
      if (response.value.length > 0) {
        const item = response.value[0];
        expect(item.ID).toBeDefined();
        expect(typeof item.Name).toBe("string");
        expect(typeof item.Number).toBe("string");
        expect(["number", "object"]).toContain(typeof item.Availability2Mb);
      }
    });

    it("should handle query parameters correctly", async () => {
      const params = {
        $top: 5,
        $select: "ID,Name,Number",
        $orderby: "Name asc",
      };

      const response =
        await client.getFixedNetworkProvinceSpecificAvailability(params);

      expect(response.value.length).toBeLessThanOrEqual(5);
      expect(Object.keys(response.value[0])).toEqual(
        expect.arrayContaining(["ID", "Name", "Number"]),
      );

      // Verify ordering
      const names = response.value.map((item) => item.Name);
      const sortedNames = [...names].sort((a, b) => a.localeCompare(b));
      expect(names).toEqual(sortedNames);
    });

    it("should handle filtering correctly", async () => {
      const params = {
        $filter: "Availability100Mb gt 0",
        $top: 3,
      };

      const response =
        await client.getFixedNetworkProvinceSpecificAvailability(params);

      if (response.value.length > 0) {
        response.value.forEach((item) => {
          expect(item.Availability100Mb).toBeGreaterThan(0);
        });
      }
    });
  });
});
