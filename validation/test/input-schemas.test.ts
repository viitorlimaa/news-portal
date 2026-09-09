import {
    galleriesInputSchema,
    newsInputSchema,
    podcastsInputSchema,
    videosInputSchema,
} from "../input-schemas.js";

const coreInput = {
  titulo: "Titulo de teste",
  texto: "Texto de teste",
  imagem: "https://example.com/imagem.jpg",
  dataPublicacao: "2026-08-27T00:00:00.000Z",
  tags: "teste",
  link: "https://example.com/noticia",
  ativo: true,
};

describe("schemas de entrada", () => {
  it("aceita uma noticia valida", () => {
    const result = newsInputSchema.safeParse({
      ...coreInput,
      chapeu: "Tecnologia",
      autor: "Redacao",
    });

    expect(result.success).toBe(true);
  });

  it("rejeita uma noticia sem campos obrigatorios", () => {
    const result = newsInputSchema.safeParse({ ...coreInput, titulo: "" });

    expect(result.success).toBe(false);
  });

  it("rejeita URL invalida em videos e podcasts", () => {
    expect(
      videosInputSchema.safeParse({
        ...coreInput,
        url: "url-invalida",
        duracao: "00:01:00",
      }).success,
    ).toBe(false);

    expect(
      podcastsInputSchema.safeParse({
        ...coreInput,
        url: "url-invalida",
        duracao: "00:01:00",
      }).success,
    ).toBe(false);
  });

  it("aceita uma galeria com imagens", () => {
    const result = galleriesInputSchema.safeParse({
      ...coreInput,
      pictures: [
        {
          thumb: "https://example.com/thumb.jpg",
          thumbNail: "https://example.com/thumb.jpg",
          credito: "Redacao",
          legenda: "Legenda",
        },
      ],
    });

    expect(result.success).toBe(true);
  });
});
