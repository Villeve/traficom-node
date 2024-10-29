import { createClient } from "@/index";

describe("autoreporter-utc Integration Tests", () => {
  let client: ReturnType<typeof createClient>;

  beforeAll(() => {
    client = createClient();
  });

  test("getAutoreporters should return data", async () => {
    const result = await client.getAutoreporterUTCs();
    expect(result).toHaveProperty("value");
    expect(Array.isArray(result.value)).toBeTruthy();
  });

  test("getAutoreporters with parameters should return filtered data", async () => {
    const result = await client.getAutoreporterUTCs({
      $top: 5,
      $orderby: "ID",
    });
    expect(result.value.length).toBeLessThanOrEqual(5);
  });

  test("getAutoreportersById should return a single item", async () => {
    const allAutoreporters = await client.getAutoreporterUTCs();
    if (allAutoreporters.value.length > 0) {
      const firstId = allAutoreporters.value[0].ID;
      const result = await client.getAutoreporterUTCById(firstId);
      expect(result).toHaveProperty("ID", firstId);
    } else {
      console.warn("No autoreporters available for testing");
    }
  });

  test("getAircraftRegisterById with $select should return only selected fields", async () => {
    const allAutoreporters = await client.getAutoreporterUTCs();
    if (allAutoreporters.value.length > 0) {
      const firstId = allAutoreporters.value[0].ID;
      const result = await client.getAutoreporterById(firstId, {
        $select: "ID,AnonIPAddress,MainCategory",
      });
      expect(Object.keys(result)).toHaveLength(4);
      expect(result).toHaveProperty("ID");
      expect(result).toHaveProperty("AnonIPAddress");
      expect(result).toHaveProperty("MainCategory");
    } else {
      console.warn("No autoreporters available for testing");
    }
  });
});
