import { FrequencyDistributionTableSweden } from "./frequency-distribution-table-sweden.types";
import { FREQUENCY_DISTRIBUTION_TABLE_SWEDEN_ENDPOINT } from "@/constants";
import { createEndpointHandlers } from "@/utils/endpoint-factory";

const { getAll, getById } =
  createEndpointHandlers<FrequencyDistributionTableSweden>(
    FREQUENCY_DISTRIBUTION_TABLE_SWEDEN_ENDPOINT,
  );

export const getFrequencyDistributionTablesSweden = getAll;
export const getFrequencyDistributionTableSwedenById = getById;
