import { TelecomCompanyIdentifier } from "./telecom-company-identifiers.types";
import { TELECOM_COMPANY_IDENTIFIERS_ENDPOINT } from "@/constants";
import { createEndpointHandlers } from "@/utils/endpoint-factory";

const { getAll, getById } = createEndpointHandlers<TelecomCompanyIdentifier>(
  TELECOM_COMPANY_IDENTIFIERS_ENDPOINT,
);

export const getTelecomCompanyIdentifiers = getAll;
export const getTelecomCompanyIdentifierById = getById;
