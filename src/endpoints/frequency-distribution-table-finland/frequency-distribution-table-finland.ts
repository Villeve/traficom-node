import { FrequencyDistributionTableFinland } from "./frequency-distribution-table-finland.types";
import { FREQUENCY_DISTRIBUTION_TABLE_FINLAND_ENDPOINT } from "@/constants";
import { createEndpointHandlers } from "@/utils/endpoint-factory";

const { getAll, getById } =
  createEndpointHandlers<FrequencyDistributionTableFinland>(
    FREQUENCY_DISTRIBUTION_TABLE_FINLAND_ENDPOINT,
  );

export const getFrequencyDistributionTablesFinland = getAll;
export const getFrequencyDistributionTableFinlandById = getById;
