import request from "supertest";
import "../../shared/container.js";
import startup from "../../startup.js";

describe("rotas HTTP", () => {
  it("lista noticias com paginacao valida", async () => {
    const response = await request(startup.app).get("/api/v1/news/1/1");

    expect(response.status).toBe(200);
    expect(response.body.result).toEqual(
      expect.objectContaining({ Page: 1, Qtd: 1 }),
    );
  });

  it("bloqueia um corpo invalido ao criar noticia", async () => {
    const response = await request(startup.app)
      .post("/api/v1/news")
      .send({ titulo: "" });

    expect(response.status).toBe(400);
  });

  it("retorna 404 ao buscar noticia inexistente", async () => {
    const response = await request(startup.app).get("/api/v1/news/999999999");

    expect(response.status).toBe(404);
  });
});
