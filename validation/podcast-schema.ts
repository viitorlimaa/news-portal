import z from "zod";
import { coreSchema } from "./core-schema.js";

export const podcastsSchema = coreSchema.extend({
  url: z.string(),
  duracao: z.string(),
});

export type Podcasts = z.infer<typeof podcastsSchema>;
