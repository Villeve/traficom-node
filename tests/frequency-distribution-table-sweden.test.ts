import { createClient } from "../src/index";

describe("frequency-distribution-table-sweden Integration Tests", () => {
  const client = createClient();

  describe("getFrequencyDistributionTableSweden", () => {
    it("should fetch frequency distribution table data successfully", async () => {
      const response = await client.getFrequencyDistributionTablesSweden({
        $top: 10,
      });

      expect(response).toBeDefined();
      expect(response["@odata.context"]).toBeDefined();
      expect(Array.isArray(response.value)).toBe(true);

      if (response.value.length > 0) {
        const item = response.value[0];
        expect(item.ID).toBeDefined();
        expect(typeof item.Frekvensband_nedre_gräns).toBe("string");
        expect(typeof item.Frekvensband_övre_gräns).toBe("string");
        expect(typeof item.Användning_i_Finland).toBe("string");
        expect(typeof item.Delband_nedre_gräns__Hz_).toBe("number");
        expect(typeof item.Delband_övre_gräns__Hz_).toBe("number");
        expect(typeof item.Delbandets_användning).toBe("string");
      }
    });

    it("should handle $top parameter correctly", async () => {
      const top = 5;
      const response = await client.getFrequencyDistributionTablesSweden({
        $top: top,
      });

      expect(response.value).toHaveLength(top);
    });

    it("should handle $select parameter correctly", async () => {
      const response = await client.getFrequencyDistributionTablesSweden({
        $select: "ID,Frekvensband_nedre_gräns,Frekvensband_övre_gräns",
      });

      if (response.value.length > 0) {
        const item = response.value[0];
        expect(Object.keys(item)).toHaveLength(3);
        expect(item).toHaveProperty("ID");
        expect(item).toHaveProperty("Frekvensband_nedre_gräns");
        expect(item).toHaveProperty("Frekvensband_övre_gräns");
        expect(item).not.toHaveProperty("Användning_i_Finland");
      }
    });

    it("should handle $orderby parameter correctly", async () => {
      const response = await client.getFrequencyDistributionTablesSweden({
        $orderby: "Delband_nedre_gräns__Hz_ asc",
        $top: 10,
      });

      if (response.value.length > 1) {
        const frequencies = response.value.map(
          (item) => item.Delband_nedre_gräns__Hz_,
        );
        const sortedFrequencies = [...frequencies].sort((a, b) => a - b);
        expect(frequencies).toEqual(sortedFrequencies);
      }
    });
  });
});
