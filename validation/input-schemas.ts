import z from "zod";
import { picturesSchema } from "./pictures-schema.js";

// Estes schemas representam o contrato de entrada da API; o id e os campos
// gerados pelo banco ficam fora deles para nao serem aceitos pelo cliente.
const coreInputSchema = z.object({
  titulo: z.string().min(1),
  texto: z.string().min(1),
  imagem: z.string().min(1),
  dataPublicacao: z.coerce.date(),
  tags: z.string(),
  link: z.url(),
  ativo: z.boolean(),
});

export const newsInputSchema = coreInputSchema.extend({
  chapeu: z.string().min(1),
  autor: z.string().min(1),
});

export const videosInputSchema = coreInputSchema.extend({
  url: z.url(),
  duracao: z.string().min(1),
});

export const podcastsInputSchema = coreInputSchema.extend({
  url: z.url(),
  duracao: z.string().min(1),
});

export const galleriesInputSchema = coreInputSchema.extend({
  pictures: picturesSchema.array(),
});

// Os tipos abaixo sao gerados pelo schema e mantem a tipagem sincronizada com a validacao.
export type NewsInput = z.infer<typeof newsInputSchema>;
export type VideosInput = z.infer<typeof videosInputSchema>;
export type PodcastsInput = z.infer<typeof podcastsInputSchema>;
export type GalleriesInput = z.infer<typeof galleriesInputSchema>;
