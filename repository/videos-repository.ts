import database from "../infra/db.js";
import type { Video } from "../models/video.js";


export const videoRepository = {
  findById(id: string): Video | undefined {
    return database.prepare("SELECT * FROM videos WHERE id = ?").get(id) as Video;
  },

  countAll(): number {
    const result = database
      .prepare("SELECT COUNT(*) as total FROM videos")
      .get() as { total: number };
    return result.total;
  },

  findAll(page: number, qtd: number): Video[] {
    const offset = page * qtd - qtd;
    return database
      .prepare("SELECT * FROM videos LIMIT ? OFFSET ?")
      .all(qtd, offset) as Video[];
  },
};
