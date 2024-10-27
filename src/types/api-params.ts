export interface CommonQueryParams {
  $expand?: string;
  $select?: string;
}

export interface ExtendedQueryParams extends CommonQueryParams {
  $filter?: string;
  $orderby?: string;
  $top?: number;
  $skip?: number;
  $count?: boolean;
}
