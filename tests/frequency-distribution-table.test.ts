import { createClient } from "@/index";

describe("frequency-distribution-table Integration Tests", () => {
  const client = createClient();

  describe("getFrequencyDistributionTable", () => {
    it("should fetch frequency distribution table data successfully", async () => {
      const response = await client.getFrequencyDistributionTable({
        $top: 10,
      });

      expect(response).toBeDefined();
      expect(response["@odata.context"]).toBeDefined();
      expect(Array.isArray(response.value)).toBe(true);

      if (response.value.length > 0) {
        const item = response.value[0];
        expect(item.ID).toBeDefined();
        expect(typeof item.Frequency_band_lower_limit).toBe("string");
        expect(typeof item.Frequency_band_upper_limit).toBe("string");
        expect(typeof item.Services_in_Finland).toBe("string");
        expect(typeof item.Sub_band_lower_limit__Hz_).toBe("number");
        expect(typeof item.Sub_band_upper_limit__Hz_).toBe("number");
        expect(typeof item.Sub_band_usage).toBe("string");
      }
    });

    it("should handle $top parameter correctly", async () => {
      const top = 5;
      const response = await client.getFrequencyDistributionTable({
        $top: top,
      });

      expect(response.value).toHaveLength(top);
    });

    it("should handle $select parameter correctly", async () => {
      const response = await client.getFrequencyDistributionTable({
        $select: "ID,Frequency_band_lower_limit,Frequency_band_upper_limit",
      });

      if (response.value.length > 0) {
        const item = response.value[0];
        expect(Object.keys(item)).toHaveLength(3);
        expect(item).toHaveProperty("ID");
        expect(item).toHaveProperty("Frequency_band_lower_limit");
        expect(item).toHaveProperty("Frequency_band_upper_limit");
        expect(item).not.toHaveProperty("Services_in_Finland");
      }
    });

    it("should handle $orderby parameter correctly", async () => {
      const response = await client.getFrequencyDistributionTable({
        $orderby: "Sub_band_lower_limit__Hz_ asc",
        $top: 10,
      });

      if (response.value.length > 1) {
        const frequencies = response.value.map(
          (item) => item.Sub_band_lower_limit__Hz_,
        );
        const sortedFrequencies = [...frequencies].sort((a, b) => a - b);
        expect(frequencies).toEqual(sortedFrequencies);
      }
    });
  });

  describe("getFrequencyDistributionTableById", () => {
    let validId: number;

    beforeAll(async () => {
      // Get a valid ID from the list endpoint
      const response = await client.getFrequencyDistributionTable({
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
          await client.getFrequencyDistributionTableById(validId);

        expect(response).toBeDefined();
        expect(response["@odata.context"]).toBeDefined();
        expect(response.ID).toBe(validId);
        expect(typeof response.Frequency_band_lower_limit).toBe("string");
        expect(typeof response.Frequency_band_upper_limit).toBe("string");
        expect(typeof response.Services_in_Finland).toBe("string");
        expect(typeof response.Sub_band_lower_limit__Hz_).toBe("number");
        expect(typeof response.Sub_band_upper_limit__Hz_).toBe("number");
        expect(typeof response.Sub_band_usage).toBe("string");
      } else {
        console.warn("Skipping test due to no available data");
      }
    });

    it("should handle $select parameter correctly", async () => {
      if (validId) {
        const response = await client.getFrequencyDistributionTableById(
          validId,
          {
            $select: "ID,Frequency_band_lower_limit,Frequency_band_upper_limit",
          },
        );

        expect(Object.keys(response)).toHaveLength(4); // Including @odata.context
        expect(response).toHaveProperty("ID");
        expect(response).toHaveProperty("Frequency_band_lower_limit");
        expect(response).toHaveProperty("Frequency_band_upper_limit");
        expect(response).not.toHaveProperty("Services_in_Finland");
      } else {
        console.warn("Skipping test due to no available data");
      }
    });
  });
});
