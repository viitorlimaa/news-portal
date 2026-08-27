import database from "../infra/db.js";
import type { NewsInput } from "../validation/input-schemas.js";
import { newsSchema, type News } from "../validation/news-schema.js";

export const NewsRepository = {
  create(input: NewsInput): News {
    const result = database.prepare(`
      INSERT INTO news
        (titulo, chapeu, texto, autor, imagem, dataPublicacao, tags, link, ativo)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
      input.titulo, input.chapeu, input.texto, input.autor, input.imagem,
      input.dataPublicacao.toISOString(), input.tags, input.link, input.ativo ? 1 : 0,
    );
    // Rele o registro criado para validar tambem a conversao feita pelo SQLite.
    return newsSchema.parse(database.prepare("SELECT * FROM news WHERE id = ?").get(result.lastInsertRowid));
  },

  delete(id: string): boolean {
    return database.prepare("DELETE FROM news WHERE id = ?").run(id).changes > 0;
  },

  findById(id: string): News | undefined {
    const raw = database.prepare("SELECT * FROM news WHERE id = ?").get(id);
    return raw ? newsSchema.parse(raw) : undefined;
  },

  countAll(): number {
    const result = database
      .prepare("SELECT COUNT(*) as total FROM news")
      .get() as { total: number };
    return result.total;
  },

  findAll(page: number, qtd: number): News[] {
    const offset = page * qtd - qtd;
    const raw = database
      .prepare("SELECT * FROM news LIMIT ? OFFSET ?")
      .all(qtd, offset);
    return newsSchema.array().parse(raw);
  },
};

