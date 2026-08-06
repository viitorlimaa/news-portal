import database from "../infra/db.js";
import type { Podcast } from "../models/podcast.js";

export const PodcastRepository = {
  findById(id: string): Podcast | undefined {
    return database
      .prepare("SELECT * FROM podcasts WHERE id = ?")
      .get(id) as Podcast;
  },

  countAll(): number {
    const result = database
      .prepare("SELECT COUNT(*) as total FROM podcasts")
      .get() as { total: number };
    return result.total;
  },

  findAll(page: number, qtd: number): Podcast[] {
    const offset = page * qtd - qtd;
    return database
      .prepare("SELECT * FROM podcasts LIMIT ? OFFSET ?")
      .all(qtd, offset) as Podcast[];
  },
};
