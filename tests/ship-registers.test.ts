import { createClient } from "../src/index";

describe("ship-registers Integration Tests", () => {
  let client: ReturnType<typeof createClient>;

  beforeAll(() => {
    client = createClient();
  });

  test("getShipRegisters should return data", async () => {
    const result = await client.getShipRegisters({ $top: 3 });
    expect(result).toHaveProperty("value");
    expect(Array.isArray(result.value)).toBeTruthy();
  });

  test("getShipRegisters with parameters should return filtered data", async () => {
    const result = await client.getShipRegisters({
      $top: 5,
      $orderby: "nimi",
    });
    expect(result.value.length).toBeLessThanOrEqual(5);
  });

  test("getShipRegisterById should return a single item", async () => {
    const allShips = await client.getShipRegisters({ $top: 3 });
    if (allShips.value.length > 0) {
      const firstId = allShips.value[0].ID;
      const result = await client.getShipRegisterById(firstId);
      expect(result).toHaveProperty("ID", firstId);
    } else {
      console.warn("No ship registers available for testing");
    }
  });

  test("getShipRegisterById with $select should return only selected fields", async () => {
    const allShips = await client.getShipRegisters({ $top: 3 });
    if (allShips.value.length > 0) {
      const firstId = allShips.value[0].ID;
      const result = await client.getShipRegisterById(firstId, {
        $select: "ID,nimi,alus_id",
      });
      expect(Object.keys(result)).toHaveLength(4); // Including @odata.context
      expect(result).toHaveProperty("ID");
      expect(result).toHaveProperty("nimi");
      expect(result).toHaveProperty("alus_id");
    } else {
      console.warn("No ship registers available for testing");
    }
  });
});
