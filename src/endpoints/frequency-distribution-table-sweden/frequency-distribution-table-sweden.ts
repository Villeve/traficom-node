import { FrequencyDistributionTableSweden } from "./frequency-distribution-table-sweden.types";
import { createEndpointHandlers } from "@/utils/endpoint-factory";
import { FREQUENCY_DISTRIBUTION_TABLE_SWEDEN_ENDPOINT } from "@/constants";

const { getAll, getById } =
  createEndpointHandlers<FrequencyDistributionTableSweden>(
    FREQUENCY_DISTRIBUTION_TABLE_SWEDEN_ENDPOINT,
  );

export const getFrequencyDistributionTableSweden = getAll;
export const getFrequencyDistributionTableSwedenById = getById;
