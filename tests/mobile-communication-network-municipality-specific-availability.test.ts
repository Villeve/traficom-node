import { createClient } from "@/index";

describe("mobile-communication-network-municipality-specific-availability Integration Tests", () => {
  let client: ReturnType<typeof createClient>;

  beforeAll(() => {
    client = createClient();
  });

  describe("getMobileCommunicationNetworkMunicipalitySpecificAvailability", () => {
    it("should fetch availability data successfully", async () => {
      const response =
        await client.getMobileCommunicationNetworkMunicipalitySpecificAvailability();

      expect(response).toBeDefined();
      expect(response["@odata.context"]).toBeDefined();
      expect(Array.isArray(response.value)).toBe(true);

      // Validate first item structure if available
      if (response.value.length > 0) {
        const item = response.value[0];
        expect(item.ID).toBeDefined();
        expect(typeof item.Name).toBe("string");
        expect(typeof item.Number).toBe("string");
        expect(["number", "object"]).toContain(typeof item.AvailabilityLTE);
        expect(["number", "object"]).toContain(typeof item.AvailabilityLTE30Mb);
        expect(["number", "object"]).toContain(
          typeof item.AvailabilityLTE100Mb,
        );
        expect(["number", "object"]).toContain(
          typeof item.AvailabilityLTE300Mb,
        );
      }
    });

    it("should handle query parameters correctly", async () => {
      const params = {
        $top: 5,
        $select: "ID,Name,Number",
        $orderby: "Name asc",
      };

      const response =
        await client.getMobileCommunicationNetworkMunicipalitySpecificAvailability(
          params,
        );

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
        $filter: "AvailabilityLTE100Mb gt 0",
        $top: 3,
      };

      const response =
        await client.getMobileCommunicationNetworkMunicipalitySpecificAvailability(
          params,
        );

      if (response.value.length > 0) {
        response.value.forEach((item) => {
          expect(item.AvailabilityLTE100Mb).toBeGreaterThan(0);
        });
      }
    });
  });

  describe("getMobileCommunicationNetworkMunicipalitySpecificAvailabilityById", () => {
    let validId: number;

    beforeAll(async () => {
      // Get a valid ID from the list endpoint
      const response =
        await client.getMobileCommunicationNetworkMunicipalitySpecificAvailability(
          {
            $top: 1,
          },
        );
      if (response.value.length > 0) {
        validId = response.value[0].ID;
      } else {
        console.warn(
          "No mobile communication network municipality-specific availability entries available for testing",
        );
      }
    });

    it("should fetch a single item by ID", async () => {
      if (validId) {
        const response =
          await client.getMobileCommunicationNetworkMunicipalitySpecificAvailabilityById(
            validId,
          );

        expect(response).toBeDefined();
        expect(response["@odata.context"]).toBeDefined();
        expect(response.ID).toBe(validId);
        expect(typeof response.Name).toBe("string");
        expect(typeof response.Number).toBe("string");
        expect(["number", "object"]).toContain(typeof response.AvailabilityLTE);
        expect(["number", "object"]).toContain(
          typeof response.AvailabilityLTE30Mb,
        );
        expect(["number", "object"]).toContain(
          typeof response.AvailabilityLTE100Mb,
        );
        expect(["number", "object"]).toContain(
          typeof response.AvailabilityLTE300Mb,
        );
      } else {
        console.warn("Skipping test due to no available data");
      }
    });

    it("should handle $select parameter correctly", async () => {
      if (validId) {
        const response =
          await client.getMobileCommunicationNetworkMunicipalitySpecificAvailabilityById(
            validId,
            {
              $select: "ID,Name,Number",
            },
          );

        expect(Object.keys(response)).toHaveLength(4); // Including @odata.context
        expect(response).toHaveProperty("ID");
        expect(response).toHaveProperty("Name");
        expect(response).toHaveProperty("Number");
        expect(response).not.toHaveProperty("AvailabilityLTE");
      } else {
        console.warn("Skipping test due to no available data");
      }
    });
  });
});
