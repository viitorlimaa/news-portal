import database from "../infra/db.js";
import type { VideosInput } from "../validation/input-schemas.js";
import { videosSchema, type Videos } from "../validation/videos-schema.js";

export const videosRepository = {
  create(input: VideosInput): Videos {
    const result = database.prepare(`
      INSERT INTO videos
        (titulo, texto, imagem, duracao, url, link, dataPublicacao, tags, ativo)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
      input.titulo, input.texto, input.imagem, input.duracao, input.url,
      input.link, input.dataPublicacao.toISOString(), input.tags, input.ativo ? 1 : 0,
    );
    // Rele o registro criado para validar tambem a conversao feita pelo SQLite.
    return videosSchema.parse(database.prepare("SELECT * FROM videos WHERE id = ?").get(result.lastInsertRowid));
  },

  delete(id: string): boolean {
    return database.prepare("DELETE FROM videos WHERE id = ?").run(id).changes > 0;
  },

  findById(id: string): Videos | undefined {
    const raw = database
      .prepare("SELECT * FROM videos WHERE id = ?")
      .get(id);
    return raw ? videosSchema.parse(raw) : undefined;
  },

  countAll(): number {
    const result = database
      .prepare("SELECT COUNT(*) as total FROM videos")
      .get() as { total: number };
    return result.total;
  },

  findAll(page: number, qtd: number): Videos[] {
    const offset = page * qtd - qtd;
    const raw = database
      .prepare("SELECT * FROM videos LIMIT ? OFFSET ?")
      .all(qtd, offset);
    return videosSchema.array().parse(raw);
  },
};
