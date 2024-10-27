export interface AircraftRegister {
  ID: number;
  Aircraft_name: string;
  Legal_Basis: string;
  Aircraft_model_category: string;
  Minimum_Crew: number;
  Maximum_Passengers: number;
  MTOM_kg: number;
  ELA1_flag: boolean;
  ELA2_flag: boolean;
  Complex_aircraft: boolean;
  Number_of_engines: number;
  Count_of_Propellers: number;
  ICAO: string;
  Aircraft_Construction_Year: number;
  Initial_Registration_Date: string;
  Import_Previous_country: string | null;
  Engine_1_Manufacturer: string;
  Engine_1: string;
  Engine_2_Manufacturer: string | null;
  Engine_2: string | null;
  Engine_3_Manufacturer: string | null;
  Engine_3: string | null;
  Engine_4_Manufacturer: string | null;
  Engine_4: string | null;
}
