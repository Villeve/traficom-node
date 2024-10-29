import { createClient } from "@/index";

describe("landline-telephone-network-subscriber-numbers Integration Tests", () => {
  const client = createClient();

  describe("getLandlineTelephoneNetworkSubscriberNumbers", () => {
    it("should fetch a list of subscriber numbers", async () => {
      const response =
        await client.getLandlineTelephoneNetworkSubscriberNumbers();

      expect(response).toBeDefined();
      expect(response["@odata.context"]).toBeDefined();
      expect(Array.isArray(response.value)).toBe(true);

      if (response.value.length > 0) {
        const item = response.value[0];
        expect(typeof item.ID).toBe("number");
        expect(typeof item.AreaCode).toBe("string");
        expect(typeof item.Number).toBe("string");
        expect(typeof item.Company).toBe("string");
        expect(typeof item.Granted).toBe("string");
      }
    });

    it("should handle $top parameter correctly", async () => {
      const top = 5;
      const response =
        await client.getLandlineTelephoneNetworkSubscriberNumbers({
          $top: top,
        });

      expect(response.value).toHaveLength(top);
    });

    it("should handle $select parameter correctly", async () => {
      const response =
        await client.getLandlineTelephoneNetworkSubscriberNumbers({
          $select: "ID,AreaCode,Number",
        });

      if (response.value.length > 0) {
        const item = response.value[0];
        expect(Object.keys(item)).toHaveLength(3);
        expect(item).toHaveProperty("ID");
        expect(item).toHaveProperty("AreaCode");
        expect(item).toHaveProperty("Number");
        expect(item).not.toHaveProperty("Company");
        expect(item).not.toHaveProperty("Granted");
      }
    });

    it("should handle $filter parameter correctly", async () => {
      const response =
        await client.getLandlineTelephoneNetworkSubscriberNumbers({
          $filter: "Company eq 'Elisa Oyj'",
        });

      response.value.forEach((item) => {
        expect(item.Company).toBe("Elisa Oyj");
      });
    });
  });

  describe("getLandlineTelephoneNetworkSubscriberNumberById", () => {
    let validId: number;

    beforeAll(async () => {
      // Get a valid ID from the list endpoint
      const response =
        await client.getLandlineTelephoneNetworkSubscriberNumbers({
          $top: 1,
        });
      if (response.value.length > 0) {
        validId = response.value[0].ID;
      } else {
        console.warn(
          "No landline telephone network subscriber numbers available for testing",
        );
      }
    });

    it("should fetch a single item by ID", async () => {
      if (validId) {
        const response =
          await client.getLandlineTelephoneNetworkSubscriberNumberById(validId);

        expect(response).toBeDefined();
        expect(response["@odata.context"]).toBeDefined();
        expect(response.ID).toBe(validId);
        expect(typeof response.AreaCode).toBe("string");
        expect(typeof response.Number).toBe("string");
        expect(typeof response.Company).toBe("string");
        expect(typeof response.Granted).toBe("string");
      } else {
        console.warn("Skipping test due to no available data");
      }
    });
  });
});
