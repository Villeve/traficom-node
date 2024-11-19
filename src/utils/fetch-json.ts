import { handleApiError } from "./error-handler";
import { TraficomError } from "@/classes";

export const fetchJson = async <T>(url: string): Promise<T> => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new TraficomError(
        `HTTP error! status: ${response.status}`,
        response.status,
      );
    }

    return await response.json();
  } catch (error) {
    return handleApiError(error);
  }
};
