import {
  API_VERSION,
  FREE_RADIO_MICROPHONE_FREQUENCIES_ENDPOINT,
} from "@/constants";
import {
  FreeRadioMicrophoneFrequency,
  FreeRadioMicrophoneFrequencyParams,
} from "./free-radio-microphone-frequencies.types";
import { fetchJson } from "@/utils/fetch-json";
import { handleApiError } from "@/utils/error-handler";
import { MultiEntityResponse, ExtendedQueryParams } from "@/types";

export const getFreeRadioMicrophoneFrequencies = async (
  baseUrl: string,
  locationParams: FreeRadioMicrophoneFrequencyParams,
  params: ExtendedQueryParams = {},
): Promise<MultiEntityResponse<FreeRadioMicrophoneFrequency>> => {
  const queryParams = new URLSearchParams({
    "parameter.lat": locationParams.lat.toString(),
    "parameter.lng": locationParams.lng.toString(),
    ...(locationParams.f1 !== undefined && {
      "parameter.f1": locationParams.f1.toString(),
    }),
    ...(locationParams.f2 !== undefined && {
      "parameter.f2": locationParams.f2.toString(),
    }),
    ...Object.fromEntries(
      Object.entries(params).map(([key, value]) => [key, value.toString()]),
    ),
  }).toString();

  const endpoint = `${baseUrl}/api/${API_VERSION}/${FREE_RADIO_MICROPHONE_FREQUENCIES_ENDPOINT}`;
  const url = queryParams ? `${endpoint}?${queryParams}` : endpoint;

  try {
    return await fetchJson(url);
  } catch (error) {
    handleApiError(error);
  }
};
