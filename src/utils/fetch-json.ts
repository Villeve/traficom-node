import { TraficomError } from "@/classes";
import { handleApiError } from "./error-handler";

export async function fetchJson<T>(url: string): Promise<T> {
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
    handleApiError(error);
  }
}
