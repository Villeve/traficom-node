// @ts-nocheck
import { createClient } from "traficom-node";

const client = createClient();

const fetchAircraftRegisters = async () => {
  try {
    // Fetch all aircraft registers
    const allRegisters = await client.getAircraftRegisters();
    console.log("All Aircraft Registers:", allRegisters);

    // Fetch aircraft registers with custom parameters
    const filteredRegisters = await client.getAircraftRegisters({
      $top: 5,
      $orderby: "Aircraft_name",
      $select: "ID,Aircraft_name,ICAO",
    });
    console.log("Filtered Aircraft Registers:", filteredRegisters);

    // Fetch a specific aircraft register by ID
    if (allRegisters.value.length > 0) {
      const firstId = allRegisters.value[0].ID;
      const singleRegister = await client.getAircraftRegisterById(firstId);
      console.log("Single Aircraft Register:", singleRegister);
    }
  } catch (error) {
    console.error("Error fetching Aircraft Registers:", error);
  }
};

fetchAircraftRegisters();
