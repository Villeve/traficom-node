interface SingleODataResponse {
  "@odata.context": string;
}

export type SingleEntityResponse<T> = SingleODataResponse & T;

export interface MultiEntityResponse<T> {
  value: T[];
  "@odata.context": string;
  "@odata.count"?: number;
}
