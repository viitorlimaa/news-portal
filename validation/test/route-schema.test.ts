import { resultSchema } from "../../infra/result-schema.js";
import { newsSchema } from "../news-schema.js";
import { idParamsSchema, paginationParamsSchema } from "../route-schema.js";

describe("schemas de parametros das rotas", () => {
  it("converte e aceita parametros de paginacao validos", () => {
    const result = paginationParamsSchema.parse({ page: "2", qtd: "10" });

    expect(result).toEqual({ page: 2, qtd: 10 });
  });

  it("rejeita paginacao zero ou nao numerica", () => {
    expect(paginationParamsSchema.safeParse({ page: "0", qtd: "10" }).success).toBe(false);
    expect(paginationParamsSchema.safeParse({ page: "abc", qtd: "10" }).success).toBe(false);
  });

  it("rejeita id vazio", () => {
    expect(idParamsSchema.safeParse({ id: "" }).success).toBe(false);
  });

  it("valida a estrutura paginada do resultado", () => {
    const result = resultSchema(newsSchema).safeParse({
      Qtd: 1,
      Page: 1,
      Total: 1,
      Data: [{
        id: 1,
        titulo: "Titulo",
        texto: "Texto",
        imagem: "imagem.jpg",
        dataPublicacao: "2026-08-27",
        tags: "teste",
        link: "https://example.com",
        ativo: 1,
        chapeu: "Noticias",
        autor: "Redacao",
      }],
    });

    expect(result.success).toBe(true);
  });
});
