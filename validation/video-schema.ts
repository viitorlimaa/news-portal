import z from "zod";
import { coreSchema } from "./core-schema.js";

export const videosSchema = coreSchema.extend({
  url: z.string(),
  duracao: z.string(),
});

export type Videos = z.infer<typeof videosSchema>;
