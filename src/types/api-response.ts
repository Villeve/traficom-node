export interface ODataResponse<T> {
  value: T[];
  "@odata.context": string;
  "@odata.count"?: number;
}

export interface SingleODataResponse {
  "@odata.context": string;
}

export type SingleEntityResponse<T> = SingleODataResponse & T;
