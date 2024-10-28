import { createClient } from "@/index";

describe("tetra-mobile-network-codes Integration Tests", () => {
  let client: ReturnType<typeof createClient>;

  beforeAll(() => {
    client = createClient();
  });

  test("getTETRAMobileNetworkCodes should return data", async () => {
    const result = await client.getTETRAMobileNetworkCodes();
    expect(result).toHaveProperty("value");
    expect(Array.isArray(result.value)).toBeTruthy();
  });

  test("getTETRAMobileNetworkCodeById should return a single item", async () => {
    const allCodes = await client.getTETRAMobileNetworkCodes();
    if (allCodes.value.length > 0) {
      const firstId = allCodes.value[0].ID;
      const result = await client.getTETRAMobileNetworkCodeById(firstId);
      expect(result).toHaveProperty("ID", firstId);
    } else {
      console.warn("No TETRA mobile network codes available for testing");
    }
  });
});
