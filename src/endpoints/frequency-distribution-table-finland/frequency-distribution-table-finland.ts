import { FrequencyDistributionTableFinland } from "./frequency-distribution-table-finland.types";
import { createEndpointHandlers } from "@/utils/endpoint-factory";
import { FREQUENCY_DISTRIBUTION_TABLE_FINLAND_ENDPOINT } from "@/constants";

const { getAll, getById } =
  createEndpointHandlers<FrequencyDistributionTableFinland>(
    FREQUENCY_DISTRIBUTION_TABLE_FINLAND_ENDPOINT,
  );

export const getFrequencyDistributionTableFinland = getAll;
export const getFrequencyDistributionTableFinlandById = getById;
