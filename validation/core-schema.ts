import z from "zod";

const sqliteBooleanSchema = z.union([z.literal(0), z.literal(1), z.boolean()]).transform((value) =>
  typeof value === "boolean" ? value : value === 1,
);

export const coreSchema = z.object({
  id: z.number().int().nonnegative(),
  titulo: z.string(),
  texto: z.string(),
  imagem: z.string(),
  dataPublicacao: z.coerce.date(),
  tags: z.string(),
  link: z.string(),
  ativo: sqliteBooleanSchema,
});

export type Core = z.infer<typeof coreSchema>;