export interface TETRAMobileNetworkCode {
  ID: number;
  Number: string;
  Company: string;
  Granted: string;
}

export type GetTETRAMobileNetworkCodesParams = {
  $expand?: string;
  $filter?: string;
  $select?: string;
  $orderby?: string;
  $top?: number;
  $skip?: number;
  $count?: boolean;
};
