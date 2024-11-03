import { InternationalTelecomOperatorId } from "./international-telecom-operator-id.types";
import { INTERNATIONAL_TELECOM_OPERATOR_IDS_ENDPOINT } from "@/constants";
import { createEndpointHandlers } from "@/utils/endpoint-factory";

const { getAll, getById } =
  createEndpointHandlers<InternationalTelecomOperatorId>(
    INTERNATIONAL_TELECOM_OPERATOR_IDS_ENDPOINT,
  );

export const getInternationalTelecomOperators = getAll;
export const getInternationalTelecomOperatorById = getById;
