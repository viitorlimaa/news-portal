import z from "zod";

export const idParamsSchema = z.object({
  id: z.string().min(1),
});

export const paginationParamsSchema = z.object({
  page: z.coerce.number().int().positive(),
  qtd: z.coerce.number().int().positive(),
});