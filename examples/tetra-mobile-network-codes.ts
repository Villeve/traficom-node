// @ts-nocheck
import TraficomSDK from "traficom-node";

const sdk = new TraficomSDK();

async function fetchTETRAMobileNetworkCodes() {
  try {
    // Fetch all TETRA mobile network codes
    const allCodes = await sdk.getTETRAMobileNetworkCodes();
    console.log("All TETRA Mobile Network Codes:", allCodes);

    // Fetch TETRA mobile network codes with custom parameters
    const filteredCodes = await sdk.getTETRAMobileNetworkCodes({
      $top: 5,
      $orderby: "Number desc",
    });
    console.log("Filtered TETRA Mobile Network Codes:", filteredCodes);

    // Fetch a specific TETRA mobile network code by ID
    if (allCodes.value.length > 0) {
      const firstId = allCodes.value[0].ID;
      const singleCode = await sdk.getTETRAMobileNetworkCodeById(firstId);
      console.log("Single TETRA Mobile Network Code:", singleCode);
    }
  } catch (error) {
    console.error("Error fetching TETRA Mobile Network Codes:", error);
  }
}

fetchTETRAMobileNetworkCodes();
