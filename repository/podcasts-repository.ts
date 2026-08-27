import database from "../infra/db.js";
import type { PodcastsInput } from "../validation/input-schemas.js";
import { podcastsSchema, type Podcasts } from "../validation/podcasts-schema.js";

export const PodcastsRepository = {
  create(input: PodcastsInput): Podcasts {
    const result = database.prepare(`
      INSERT INTO podcasts
        (titulo, texto, imagem, url, duracao, dataPublicacao, tags, link, ativo)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
      input.titulo, input.texto, input.imagem, input.url, input.duracao,
      input.dataPublicacao.toISOString(), input.tags, input.link, input.ativo ? 1 : 0,
    );
    // Rele o registro criado para validar tambem a conversao feita pelo SQLite.
    return podcastsSchema.parse(database.prepare("SELECT * FROM podcasts WHERE id = ?").get(result.lastInsertRowid));
  },

  delete(id: string): boolean {
    return database.prepare("DELETE FROM podcasts WHERE id = ?").run(id).changes > 0;
  },

  findById(id: string): Podcasts | undefined {
    const raw = database
      .prepare("SELECT * FROM podcasts WHERE id = ?")
      .get(id);
    return raw ? podcastsSchema.parse(raw) : undefined;
  },

  countAll(): number {
    const result = database
      .prepare("SELECT COUNT(*) as total FROM podcasts")
      .get() as { total: number };
    return result.total;
  },

  findAll(page: number, qtd: number): Podcasts[] {
    const offset = page * qtd - qtd;
    const raw = database
      .prepare("SELECT * FROM podcasts LIMIT ? OFFSET ?")
      .all(qtd, offset);
    return podcastsSchema.array().parse(raw);
  },
};
