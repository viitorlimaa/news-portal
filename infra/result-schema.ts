import z from "zod";

// Cria o schema da pagina mantendo Data sincronizado com o recurso retornado.
export function resultSchema<T extends z.ZodType>(itemSchema: T) {
  return z.object({
    Qtd: z.number().int().nonnegative(),
    Page: z.number().int().nonnegative(),
    Total: z.number().int().nonnegative(),
    Data: itemSchema.array(),
  });
}
