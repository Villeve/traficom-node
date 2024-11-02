import { InternationalTelecomOperatorId } from "./international-telecom-operator-id.types";
import { createEndpointHandlers } from "@/utils/endpoint-factory";
import { INTERNATIONAL_TELECOM_OPERATOR_IDS_ENDPOINT } from "@/constants";

const { getAll, getById } =
  createEndpointHandlers<InternationalTelecomOperatorId>(
    INTERNATIONAL_TELECOM_OPERATOR_IDS_ENDPOINT,
  );

export const getInternationalTelecomOperatorIds = getAll;
export const getInternationalTelecomOperatorIdById = getById;
