export interface BroadbandProject {
  ID: number;
  OperatorName: string;
  ProjectName: string;
  ConstructionStageID: number;
  ConstructionStage: string;
  ApplicationStatusID: number;
  ApplicationStatus: string;
  Municipality: string;
  Province: string;
  Info: string;
  Description: string;
  Area_wkt: string;
  Area_srid: number;
}
