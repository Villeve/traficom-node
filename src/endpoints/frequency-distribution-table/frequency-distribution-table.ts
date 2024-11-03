import { FrequencyDistributionTable } from "./frequency-distribution-table.types";
import { FREQUENCY_DISTRIBUTION_TABLE_ENDPOINT } from "@/constants";
import { createEndpointHandlers } from "@/utils/endpoint-factory";

const { getAll, getById } = createEndpointHandlers<FrequencyDistributionTable>(
  FREQUENCY_DISTRIBUTION_TABLE_ENDPOINT,
);

export const getFrequencyDistributionTables = getAll;
export const getFrequencyDistributionTableById = getById;
