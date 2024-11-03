import { createClient } from "../src/index";

describe("infomaps Integration Tests", () => {
  let client: ReturnType<typeof createClient>;

  beforeAll(() => {
    client = createClient();
  });

  test("getInfomaps should return data", async () => {
    const result = await client.getInfomaps({ $top: 1 });
    expect(result).toHaveProperty("value");
    expect(Array.isArray(result.value)).toBeTruthy();
  });

  test("getInfomaps with parameters should return filtered data", async () => {
    const result = await client.getInfomaps({
      $top: 5,
      $orderby: "ID",
    });
    expect(result.value.length).toBeLessThanOrEqual(5);
  });

  test("getInfomapById should return a single item", async () => {
    const allInfomaps = await client.getInfomaps({ $top: 1 });
    if (allInfomaps.value.length > 0) {
      const firstId = allInfomaps.value[0].ID;
      const result = await client.getInfomapById(firstId);
      expect(result).toHaveProperty("ID", firstId);
    } else {
      console.warn("No infomaps available for testing");
    }
  });

  test("getInfomapById with $select should return only selected fields", async () => {
    const allInfomaps = await client.getInfomaps({ $top: 1 });
    if (allInfomaps.value.length > 0) {
      const firstId = allInfomaps.value[0].ID;
      const result = await client.getInfomapById(firstId, {
        $select: "ID,Title_Finnish,Title_Swedish,Title_English",
      });
      expect(Object.keys(result)).toHaveLength(5);
      expect(result).toHaveProperty("ID");
      expect(result).toHaveProperty("Title_Finnish");
      expect(result).toHaveProperty("Title_Swedish");
      expect(result).toHaveProperty("Title_English");
    } else {
      console.warn("No infomaps available for testing");
    }
  });
});
