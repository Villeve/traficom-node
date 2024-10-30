export interface FrequencyDistributionTable {
  ID: number;
  Frequency_band_lower_limit: string;
  Frequency_band_upper_limit: string;
  Services_in_Finland: string;
  Additional_information: string;
  Sub_band_lower_limit: string;
  Sub_band_upper_limit: string;
  Sub_band_lower_limit__Hz_: number;
  Sub_band_upper_limit__Hz_: number;
  Sub_band_width: string;
  Sub_band_usage: string;
  Mode_of_traffic: string;
  Class_of_station: string;
  Direction: string;
  Radiated_power: string;
  Transmitter_power: number;
  Channel_spacing: string;
  Bandwidth: string;
  Duplex_separation: string;
  Duplex_band_lower_limit: string;
  Duplex_band_upper_limit: string;
  Class_of_emission: string;
  Standard_type: string;
  Comment: string;
}
