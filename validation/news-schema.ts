import z from "zod";
import { coreSchema } from "./core-schema.js";

export const newsSchema = coreSchema.extend({
  chapeu: z.string(),
  autor: z.string(),
});

export type News = z.infer<typeof newsSchema>;