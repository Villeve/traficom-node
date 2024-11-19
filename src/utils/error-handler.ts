import { TraficomError } from "@/classes";

export const handleApiError = (error: unknown): never => {
  if (error instanceof TraficomError) {
    throw error;
  }

  if (error instanceof Response) {
    throw new TraficomError(`HTTP error: ${error.status}`, error.status);
  }

  if (error instanceof Error) {
    throw new TraficomError(error.message, undefined, error);
  }

  throw new TraficomError("An unknown error occurred");
};
