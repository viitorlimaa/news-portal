import database from "../infra/db.js";
import type { News } from "../models/news.js";

export const NewsRepository = {
  findById(id: string): News | undefined {
    return database.prepare("SELECT * FROM news WHERE id = ?").get(id) as News;
  },

  countAll(): number {
    const result = database
      .prepare("SELECT COUNT(*) as total FROM news")
      .get() as { total: number };
    return result.total;
  },

  findAll(page: number, qtd: number): News[] {
    const offset = page * qtd - qtd;
    return database
      .prepare("SELECT * FROM news LIMIT ? OFFSET ?")
      .all(qtd, offset) as News[];
  },
};
