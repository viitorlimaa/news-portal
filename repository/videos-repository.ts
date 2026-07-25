import database from "../infra/db.js";
import type { Videos } from "../models/video.js";


export const VideosRepository = {
  findById(id: string): Videos | undefined {
    return database.prepare("SELECT * FROM videos WHERE id = ?").get(id) as Videos;
  },

  countAll(): number {
    const result = database
      .prepare("SELECT COUNT(*) as total FROM videos")
      .get() as { total: number };
    return result.total;
  },

  findAll(page: number, qtd: number): Videos[] {
    const offset = page * qtd - qtd;
    return database
      .prepare("SELECT * FROM videos LIMIT ? OFFSET ?")
      .all(qtd, offset) as Videos[];
  },
};
