// @ts-nocheck
import { createClient } from "traficom-node";

const client = createClient();

const fetchTETRAMobileNetworkCodes = async () => {
  try {
    // Fetch all TETRA mobile network codes
    const allCodes = await client.getTETRAMobileNetworkCodes();
    console.log("All TETRA Mobile Network Codes:", allCodes);

    // Fetch TETRA mobile network codes with custom parameters
    const filteredCodes = await client.getTETRAMobileNetworkCodes({
      $top: 5,
      $orderby: "Number desc",
    });
    console.log("Filtered TETRA Mobile Network Codes:", filteredCodes);

    // Fetch a specific TETRA mobile network code by ID
    if (allCodes.value.length > 0) {
      const firstId = allCodes.value[0].ID;
      const singleCode = await client.getTETRAMobileNetworkCodeById(firstId);
      console.log("Single TETRA Mobile Network Code:", singleCode);
    }
  } catch (error) {
    console.error("Error fetching TETRA Mobile Network Codes:", error);
  }
};

fetchTETRAMobileNetworkCodes();
