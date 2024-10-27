import TraficomSDK from "@/index";

describe("aircraft-registers Integration Tests", () => {
  let sdk: TraficomSDK;

  beforeAll(() => {
    sdk = new TraficomSDK();
  });

  test("getAircraftRegister should return data", async () => {
    const result = await sdk.getAircraftRegister();
    expect(result).toHaveProperty("value");
    expect(Array.isArray(result.value)).toBeTruthy();
  });

  test("getAircraftRegister with parameters should return filtered data", async () => {
    const result = await sdk.getAircraftRegister({
      $top: 5,
      $orderby: "Aircraft_name",
    });
    expect(result.value.length).toBeLessThanOrEqual(5);
  });

  test("getAircraftRegisterById should return a single item", async () => {
    const allAircraft = await sdk.getAircraftRegister();
    if (allAircraft.value.length > 0) {
      const firstId = allAircraft.value[0].ID;
      const result = await sdk.getAircraftRegisterById(firstId);
      expect(result).toHaveProperty("ID", firstId);
    } else {
      console.warn("No aircraft registers available for testing");
    }
  });

  test("getAircraftRegisterById with $select should return only selected fields", async () => {
    const allAircraft = await sdk.getAircraftRegister();
    if (allAircraft.value.length > 0) {
      const firstId = allAircraft.value[0].ID;
      const result = await sdk.getAircraftRegisterById(firstId, {
        $select: "ID,Aircraft_name,ICAO",
      });
      expect(Object.keys(result)).toHaveLength(4);
      expect(result).toHaveProperty("ID");
      expect(result).toHaveProperty("Aircraft_name");
      expect(result).toHaveProperty("ICAO");
    } else {
      console.warn("No aircraft registers available for testing");
    }
  });
});
