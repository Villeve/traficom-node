export interface FreeRadioMicrophoneFrequency {
  Start: number;
  End: number;
  FrequencyType: number;
}

export interface FreeRadioMicrophoneFrequencyParams
  extends Record<string, unknown> {
  /**
   * The latitude in WGS 84 Web Mercator projection.
   * @remarks Must be between -90 and 90 degrees
   */
  lat: number;

  /**
   * The longitude in WGS 84 Web Mercator projection.
   * @remarks Must be between -90 and 90 degrees
   */
  lng: number;

  /**
   * The lower limit for the frequencies in megahertz (MHz).
   */
  f1?: number;

  /**
   * The upper limit for the frequencies in megahertz (MHz).
   */
  f2?: number;
}
