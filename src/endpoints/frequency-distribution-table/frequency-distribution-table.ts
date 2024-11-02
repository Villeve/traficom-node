import { FrequencyDistributionTable } from "./frequency-distribution-table.types";
import { createEndpointHandlers } from "@/utils/endpoint-factory";
import { FREQUENCY_DISTRIBUTION_TABLE_ENDPOINT } from "@/constants";

const { getAll, getById } = createEndpointHandlers<FrequencyDistributionTable>(
  FREQUENCY_DISTRIBUTION_TABLE_ENDPOINT,
);

export const getFrequencyDistributionTable = getAll;
export const getFrequencyDistributionTableById = getById;
