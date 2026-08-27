import type { Response } from "express";
import { ZodError } from "zod";

export class HttpError extends Error {
  constructor(public readonly status: number, message: string) {
    super(message);
  }
}

export function sendControllerError(response: Response, error: unknown): void {
  if (error instanceof ZodError) {
    response.status(400).json({ error: error.flatten() });
    return;
  }

  const status = error instanceof Error && "status" in error
    ? Number((error as Error & { status: number }).status)
    : 500;
  const message = error instanceof Error ? error.message : String(error);
  response.status(status).json({ error: message });
}
