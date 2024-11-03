import { createClient } from "../src/index";

describe("radio-station-information Integration Tests", () => {
  let client: ReturnType<typeof createClient>;

  beforeAll(() => {
    client = createClient();
  });

  describe("getRadioStationInformation", () => {
    it("should fetch a list of radio station information", async () => {
      const response = await client.getRadioStations({
        $top: 5,
      });

      expect(response).toBeDefined();
      expect(response["@odata.context"]).toBeDefined();
      expect(Array.isArray(response.value)).toBe(true);

      if (response.value.length > 0) {
        const item = response.value[0];
        expect(typeof item.ID).toBe("number");
        expect(typeof item.Municipality).toBe("string");
        expect(typeof item.StationName).toBe("string");
        expect(typeof item.Frequency).toBe("number");
      }
    });

    it("should handle $top parameter correctly", async () => {
      const top = 5;
      const response = await client.getRadioStations({
        $top: top,
      });

      expect(response.value).toHaveLength(top);
    });

    it("should handle $select parameter correctly", async () => {
      const response = await client.getRadioStations({
        $select: "ID,Municipality,StationName",
      });

      if (response.value.length > 0) {
        const item = response.value[0];
        expect(Object.keys(item)).toHaveLength(3);
        expect(item).toHaveProperty("ID");
        expect(item).toHaveProperty("Municipality");
        expect(item).toHaveProperty("StationName");
        expect(item).not.toHaveProperty("Frequency");
      }
    });

    it("should handle $orderby parameter correctly", async () => {
      const response = await client.getRadioStations({
        $top: 5,
        $orderby: "StationName asc",
      });

      if (response.value.length > 1) {
        const stationNames = response.value.map((item) => item.StationName);
        const sortedStationNames = [...stationNames].sort();
        expect(stationNames).toEqual(sortedStationNames);
      }
    });
  });

  describe("getRadioStationInformationById", () => {
    let validId: number;

    beforeAll(async () => {
      // Get a valid ID from the list endpoint
      const response = await client.getRadioStations({
        $top: 1,
      });
      if (response.value.length > 0) {
        validId = response.value[0].ID;
      } else {
        console.warn("No radio station information available for testing");
      }
    });

    it("should fetch a single item by ID", async () => {
      if (validId) {
        const response = await client.getRadioStationById(validId);

        expect(response).toBeDefined();
        expect(response["@odata.context"]).toBeDefined();
        expect(response.ID).toBe(validId);
        expect(typeof response.Municipality).toBe("string");
        expect(typeof response.StationName).toBe("string");
        expect(typeof response.Frequency).toBe("number");
      } else {
        console.warn("Skipping test due to no available data");
      }
    });

    it("should handle $select parameter correctly", async () => {
      if (validId) {
        const response = await client.getRadioStationById(validId, {
          $select: "ID,Municipality,StationName",
        });

        expect(Object.keys(response)).toHaveLength(4); // Including @odata.context
        expect(response).toHaveProperty("ID");
        expect(response).toHaveProperty("Municipality");
        expect(response).toHaveProperty("StationName");
        expect(response).not.toHaveProperty("Frequency");
      } else {
        console.warn("Skipping test due to no available data");
      }
    });
  });
});
