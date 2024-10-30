import { createClient } from "@/index";

describe("general-service-areas Integration Tests", () => {
  const client = createClient();

  describe("getGeneralServiceAreas", () => {
    it("should fetch general service areas data successfully", async () => {
      const response = await client.getGeneralServiceAreas();

      expect(response).toBeDefined();
      expect(response["@odata.context"]).toBeDefined();
      expect(Array.isArray(response.value)).toBe(true);

      // Validate first item structure if available
      if (response.value.length > 0) {
        const item = response.value[0];
        expect(item.ID).toBeDefined();
        expect(typeof item.OperatorName).toBe("string");
        expect(typeof item.Area_wkt).toBe("string");
        expect(typeof item.Area_srid).toBe("number");
      }
    });

    it("should handle query parameters correctly", async () => {
      const params = {
        $top: 5,
        $select: "ID,OperatorName,Area_wkt",
        $orderby: "OperatorName asc",
      };

      const response = await client.getGeneralServiceAreas(params);

      expect(response.value.length).toBeLessThanOrEqual(5);
      expect(Object.keys(response.value[0])).toEqual(
        expect.arrayContaining(["ID", "OperatorName", "Area_wkt"]),
      );

      // Verify ordering
      const names = response.value.map((item) => item.OperatorName);
      const sortedNames = [...names].sort((a, b) => a.localeCompare(b));
      expect(names).toEqual(sortedNames);
    });
  });
});
