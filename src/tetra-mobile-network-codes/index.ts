import { fetchJson } from "../utils";

export interface TETRAMobileNetworkCode {
  ID: number;
  Number: string;
  Company: string;
  Granted: string;
}

export async function getTETRAMobileNetworkCodes(
  baseUrl: string,
  params: {
    $expand?: string;
    $filter?: string;
    $select?: string;
    $orderby?: string;
    $top?: number;
    $skip?: number;
    $count?: boolean;
  } = {},
): Promise<{ value: TETRAMobileNetworkCode[] }> {
  const queryParams = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, value.toString()]),
  ).toString();
  const url =
    `${baseUrl}/api/v13/_T_MNC_tunnukset` +
    (queryParams ? `?${queryParams}` : "");
  return fetchJson(url);
}

export async function getTETRAMobileNetworkCodeById(
  baseUrl: string,
  id: number,
  params: {
    $expand?: string;
    $select?: string;
  } = {},
): Promise<TETRAMobileNetworkCode> {
  const queryParams = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, value.toString()]),
  ).toString();
  const baseUrlWithId = `${baseUrl}/api/v13/_T_MNC_tunnukset(${id})`;
  const url = queryParams ? `${baseUrlWithId}?${queryParams}` : baseUrlWithId;
  return fetchJson(url);
}
