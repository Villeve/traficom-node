import { createClient } from "../src";

describe("radio-amateur-call-signs Integration Tests", () => {
  let client: ReturnType<typeof createClient>;

  beforeAll(() => {
    client = createClient();
  });

  describe("getRadioAmateurCallSigns", () => {
    it("should fetch a list of radio amateur call signs", async () => {
      const response = await client.getRadioAmateurCallSigns();

      expect(response).toBeDefined();
      expect(response["@odata.context"]).toBeDefined();
      expect(Array.isArray(response.value)).toBe(true);

      if (response.value.length > 0) {
        const item = response.value[0];
        expect(typeof item.ID).toBe("number");
        expect(typeof item.CallSign).toBe("string");
        expect(typeof item.Validity).toBe("string");
      }
    });

    it("should handle $top parameter correctly", async () => {
      const top = 5;
      const response = await client.getRadioAmateurCallSigns({
        $top: top,
      });

      expect(response.value).toHaveLength(top);
    });

    it("should handle $select parameter correctly", async () => {
      const response = await client.getRadioAmateurCallSigns({
        $select: "ID,CallSign",
      });

      if (response.value.length > 0) {
        const item = response.value[0];
        expect(Object.keys(item)).toHaveLength(2);
        expect(item).toHaveProperty("ID");
        expect(item).toHaveProperty("CallSign");
        expect(item).not.toHaveProperty("Validity");
      }
    });

    it("should handle $orderby parameter correctly", async () => {
      const response = await client.getRadioAmateurCallSigns({
        $top: 5,
        $orderby: "CallSign asc",
      });

      if (response.value.length > 1) {
        const callSigns = response.value.map((item) => item.CallSign);
        const sortedCallSigns = [...callSigns].sort();
        expect(callSigns).toEqual(sortedCallSigns);
      }
    });
  });

  describe("getRadioAmateurCallSignById", () => {
    let validId: number;

    beforeAll(async () => {
      // Get a valid ID from the list endpoint
      const response = await client.getRadioAmateurCallSigns({
        $top: 1,
      });
      if (response.value.length > 0) {
        validId = response.value[0].ID;
      } else {
        console.warn("No radio amateur call signs available for testing");
      }
    });

    it("should fetch a single item by ID", async () => {
      if (validId) {
        const response = await client.getRadioAmateurCallSignById(validId);

        expect(response).toBeDefined();
        expect(response["@odata.context"]).toBeDefined();
        expect(response.ID).toBe(validId);
        expect(typeof response.CallSign).toBe("string");
        expect(typeof response.Validity).toBe("string");
      } else {
        console.warn("Skipping test due to no available data");
      }
    });

    it("should handle $select parameter correctly", async () => {
      if (validId) {
        const response = await client.getRadioAmateurCallSignById(validId, {
          $select: "ID,CallSign",
        });

        expect(Object.keys(response)).toHaveLength(3); // Including @odata.context
        expect(response).toHaveProperty("ID");
        expect(response).toHaveProperty("CallSign");
        expect(response).not.toHaveProperty("Validity");
      } else {
        console.warn("Skipping test due to no available data");
      }
    });
  });
});
