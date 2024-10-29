import { createClient } from "@/index";

describe("short-message-service-numbers Integration Tests", () => {
  const client = createClient();

  describe("getShortMessageServiceNumbers", () => {
    it("should fetch a list of short message service numbers", async () => {
      const response = await client.getShortMessageServiceNumbers();

      expect(response).toBeDefined();
      expect(response["@odata.context"]).toBeDefined();
      expect(Array.isArray(response.value)).toBe(true);

      if (response.value.length > 0) {
        const item = response.value[0];
        expect(typeof item.ID).toBe("number");
        expect(typeof item.Number).toBe("string");
        // Company and Granted can be null, so we check if they're either string or null
        expect(item.Company === null || typeof item.Company === "string").toBe(
          true,
        );
        expect(item.Granted === null || typeof item.Granted === "string").toBe(
          true,
        );
      }
    });

    it("should handle $top parameter correctly", async () => {
      const top = 5;
      const response = await client.getShortMessageServiceNumbers({
        $top: top,
      });

      expect(response.value).toHaveLength(top);
    });

    it("should handle $select parameter correctly", async () => {
      const response = await client.getShortMessageServiceNumbers({
        $select: "ID,Number",
      });

      if (response.value.length > 0) {
        const item = response.value[0];
        expect(Object.keys(item)).toHaveLength(2);
        expect(item).toHaveProperty("ID");
        expect(item).toHaveProperty("Number");
        expect(item).not.toHaveProperty("Company");
        expect(item).not.toHaveProperty("Granted");
      }
    });

    it("should handle $filter parameter correctly", async () => {
      const response = await client.getShortMessageServiceNumbers({
        $filter: "Company eq 'Elisa Oyj'",
      });

      if (response.value.length > 0) {
        response.value.forEach((item) => {
          expect(item.Company).toBe("Elisa Oyj");
        });
      }
    });
  });
});
