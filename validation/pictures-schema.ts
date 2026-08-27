import z from "zod";

export const picturesSchema = z.object({
  thumb: z.string(),
  thumbNail: z.string(),
  credito: z.string(),
  legenda: z.string(),
});

export type Pictures = z.infer<typeof picturesSchema>;