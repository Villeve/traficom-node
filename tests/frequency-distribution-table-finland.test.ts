import { createClient } from "../src/index";

describe("frequency-distribution-table-finland Integration Tests", () => {
  const client = createClient();

  describe("getFrequencyDistributionTableFinland", () => {
    it("should fetch frequency distribution table data successfully", async () => {
      const response = await client.getFrequencyDistributionTablesFinland({
        $top: 10,
      });

      expect(response).toBeDefined();
      expect(response["@odata.context"]).toBeDefined();
      expect(Array.isArray(response.value)).toBe(true);

      if (response.value.length > 0) {
        const item = response.value[0];
        expect(item.ID).toBeDefined();
        expect(typeof item.Taajuusalue_alaraja).toBe("string");
        expect(typeof item.Taajuusalue_yläraja).toBe("string");
        expect(typeof item.Käyttö_Suomessa).toBe("string");
        expect(typeof item.Osa_alue_alaraja__Hz_).toBe("number");
        expect(typeof item.Osa_alue_yläraja__Hz_).toBe("number");
        expect(typeof item.Osakaistan_käyttö).toBe("string");
      }
    });

    it("should handle $top parameter correctly", async () => {
      const top = 5;
      const response = await client.getFrequencyDistributionTablesFinland({
        $top: top,
      });

      expect(response.value).toHaveLength(top);
    });

    it("should handle $select parameter correctly", async () => {
      const response = await client.getFrequencyDistributionTablesFinland({
        $select: "ID,Taajuusalue_alaraja,Taajuusalue_yläraja",
      });

      if (response.value.length > 0) {
        const item = response.value[0];
        expect(Object.keys(item)).toHaveLength(3);
        expect(item).toHaveProperty("ID");
        expect(item).toHaveProperty("Taajuusalue_alaraja");
        expect(item).toHaveProperty("Taajuusalue_yläraja");
        expect(item).not.toHaveProperty("Käyttö_Suomessa");
      }
    });

    it("should handle $orderby parameter correctly", async () => {
      const response = await client.getFrequencyDistributionTablesFinland({
        $orderby: "Osa_alue_alaraja__Hz_ asc",
        $top: 10,
      });

      if (response.value.length > 1) {
        const frequencies = response.value.map(
          (item) => item.Osa_alue_alaraja__Hz_,
        );
        const sortedFrequencies = [...frequencies].sort((a, b) => a - b);
        expect(frequencies).toEqual(sortedFrequencies);
      }
    });
  });

  describe("getFrequencyDistributionTableFinlandById", () => {
    let validId: number;

    beforeAll(async () => {
      // Get a valid ID from the list endpoint
      const response = await client.getFrequencyDistributionTablesFinland({
        $top: 1,
      });
      if (response.value.length > 0) {
        validId = response.value[0].ID;
      } else {
        console.warn(
          "No frequency distribution table entries available for testing",
        );
      }
    });

    it("should fetch a single item by ID", async () => {
      if (validId) {
        const response =
          await client.getFrequencyDistributionTableFinlandById(validId);

        expect(response).toBeDefined();
        expect(response["@odata.context"]).toBeDefined();
        expect(response.ID).toBe(validId);
        expect(typeof response.Taajuusalue_alaraja).toBe("string");
        expect(typeof response.Taajuusalue_yläraja).toBe("string");
        expect(typeof response.Käyttö_Suomessa).toBe("string");
        expect(typeof response.Osa_alue_alaraja__Hz_).toBe("number");
        expect(typeof response.Osa_alue_yläraja__Hz_).toBe("number");
        expect(typeof response.Osakaistan_käyttö).toBe("string");
      } else {
        console.warn("Skipping test due to no available data");
      }
    });

    it("should handle $select parameter correctly", async () => {
      if (validId) {
        const response = await client.getFrequencyDistributionTableFinlandById(
          validId,
          {
            $select: "ID,Taajuusalue_alaraja,Taajuusalue_yläraja",
          },
        );

        expect(Object.keys(response)).toHaveLength(4); // Including @odata.context
        expect(response).toHaveProperty("ID");
        expect(response).toHaveProperty("Taajuusalue_alaraja");
        expect(response).toHaveProperty("Taajuusalue_yläraja");
        expect(response).not.toHaveProperty("Käyttö_Suomessa");
      } else {
        console.warn("Skipping test due to no available data");
      }
    });
  });
});
