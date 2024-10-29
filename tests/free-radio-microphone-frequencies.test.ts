import { createClient } from "@/index";

describe("free-radio-microphone-frequencies Integration Tests", () => {
  const client = createClient();

  describe("getFreeRadioMicrophoneFrequencies", () => {
    it("should fetch free radio microphone frequencies for a location", async () => {
      const response = await client.getFreeRadioMicrophoneFrequencies({
        lat: 60.12,
        lng: 25.12,
      });

      expect(response).toBeDefined();
      expect(response["@odata.context"]).toBeDefined();
      expect(Array.isArray(response.value)).toBe(true);

      if (response.value.length > 0) {
        const item = response.value[0];
        expect(typeof item.Start).toBe("number");
        expect(typeof item.End).toBe("number");
        expect(typeof item.FrequencyType).toBe("number");
      }
    });

    it("should handle optional frequency range parameters", async () => {
      const response = await client.getFreeRadioMicrophoneFrequencies({
        lat: 60,
        lng: 25,
        f1: 470,
        f2: 694,
      });

      expect(response).toBeDefined();
      expect(Array.isArray(response.value)).toBe(true);

      if (response.value.length > 0) {
        response.value.forEach((item) => {
          expect(item.Start).toBeGreaterThanOrEqual(470 * 1000000); // Convert MHz to Hz
          expect(item.End).toBeLessThanOrEqual(694 * 1000000); // Convert MHz to Hz
        });
      }
    });

    it("should handle $top parameter correctly", async () => {
      const top = 5;
      const response = await client.getFreeRadioMicrophoneFrequencies(
        {
          lat: 60,
          lng: 25,
        },
        {
          $top: top,
        },
      );

      expect(response.value).toHaveLength(top);
    });

    it("should handle $select parameter correctly", async () => {
      const response = await client.getFreeRadioMicrophoneFrequencies(
        {
          lat: 60,
          lng: 25,
        },
        {
          $select: "Start,End",
        },
      );

      if (response.value.length > 0) {
        const item = response.value[0];
        expect(Object.keys(item)).toHaveLength(2);
        expect(item).toHaveProperty("Start");
        expect(item).toHaveProperty("End");
        expect(item).not.toHaveProperty("FrequencyType");
      }
    });

    it("should handle $orderby parameter correctly", async () => {
      const response = await client.getFreeRadioMicrophoneFrequencies(
        {
          lat: 60,
          lng: 25,
        },
        {
          $orderby: "Start asc",
        },
      );

      if (response.value.length > 1) {
        const frequencies = response.value.map((item) => item.Start);
        const sortedFrequencies = [...frequencies].sort((a, b) => a - b);
        expect(frequencies).toEqual(sortedFrequencies);
      }
    });
  });
});
