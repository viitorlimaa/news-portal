import z from "zod";
import { coreSchema } from "./core-schema.js";
import { picturesSchema } from "./pictures-schema.js";

export const galleriesSchema = coreSchema.extend({
  pictures: picturesSchema.array(),
});

export type Galleries = z.infer<typeof galleriesSchema>;
