import { createClient } from "@/index";

describe("broadband-projects Integration Tests", () => {
  const client = createClient();

  describe("getBroadbandProjects", () => {
    it("should fetch broadband projects data successfully", async () => {
      const response = await client.getBroadbandProjects();

      expect(response).toBeDefined();
      expect(response["@odata.context"]).toBeDefined();
      expect(Array.isArray(response.value)).toBe(true);

      // Validate first item structure if available
      if (response.value.length > 0) {
        const item = response.value[0];
        expect(item.ID).toBeDefined();
        expect(typeof item.OperatorName).toBe("string");
        expect(typeof item.ProjectName).toBe("string");
        expect(typeof item.ConstructionStageID).toBe("number");
        expect(typeof item.ConstructionStage).toBe("string");
        expect(typeof item.ApplicationStatusID).toBe("number");
        expect(typeof item.ApplicationStatus).toBe("string");
        expect(typeof item.Municipality).toBe("string");
        expect(typeof item.Province).toBe("string");
        expect(typeof item.Info).toBe("string");
        expect(typeof item.Description).toBe("string");
        expect(typeof item.Area_wkt).toBe("string");
        expect(typeof item.Area_srid).toBe("number");
      }
    });

    it("should handle query parameters correctly", async () => {
      const params = {
        $top: 5,
        $select: "ID,OperatorName,ProjectName",
        $orderby: "OperatorName asc",
      };

      const response = await client.getBroadbandProjects(params);

      expect(response.value.length).toBeLessThanOrEqual(5);
      expect(Object.keys(response.value[0])).toEqual(
        expect.arrayContaining(["ID", "OperatorName", "ProjectName"]),
      );

      // Verify ordering
      const names = response.value.map((item) => item.OperatorName);
      const sortedNames = [...names].sort((a, b) => a.localeCompare(b));
      expect(names).toEqual(sortedNames);
    });
  });
});
