// @ts-nocheck
import TraficomSDK from "traficom-node";

const sdk = new TraficomSDK();

async function fetchAircraftRegisters() {
  try {
    // Fetch all aircraft registers
    const allRegisters = await sdk.getAircraftRegister();
    console.log("All Aircraft Registers:", allRegisters);

    // Fetch aircraft registers with custom parameters
    const filteredRegisters = await sdk.getAircraftRegister({
      $top: 5,
      $orderby: "Aircraft_name",
      $select: "ID,Aircraft_name,ICAO",
    });
    console.log("Filtered Aircraft Registers:", filteredRegisters);

    // Fetch a specific aircraft register by ID
    if (allRegisters.value.length > 0) {
      const firstId = allRegisters.value[0].ID;
      const singleRegister = await sdk.getAircraftRegisterById(firstId);
      console.log("Single Aircraft Register:", singleRegister);
    }
  } catch (error) {
    console.error("Error fetching Aircraft Registers:", error);
  }
}

fetchAircraftRegisters();
