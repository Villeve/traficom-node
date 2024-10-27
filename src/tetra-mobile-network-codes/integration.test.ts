import TraficomSDK from "../index";

describe("tetra-mobile-network-codes Integration Tests", () => {
  let sdk: TraficomSDK;

  beforeAll(() => {
    sdk = new TraficomSDK();
  });

  test("getTETRAMobileNetworkCodes should return data", async () => {
    const result = await sdk.getTETRAMobileNetworkCodes();
    expect(result).toHaveProperty("value");
    expect(Array.isArray(result.value)).toBeTruthy();
  });

  test("getTETRAMobileNetworkCodeById should return a single item", async () => {
    const allCodes = await sdk.getTETRAMobileNetworkCodes();
    if (allCodes.value.length > 0) {
      const firstId = allCodes.value[0].ID;
      const result = await sdk.getTETRAMobileNetworkCodeById(firstId);
      expect(result).toHaveProperty("ID", firstId);
    } else {
      console.warn("No TETRA mobile network codes available for testing");
    }
  });

  // Add more integration tests as needed
});
