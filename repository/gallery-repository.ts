import db from "../infra/db.js";
import type { Gallery } from "../models/gallery.js";

export const galleryRepository = {
  findById(id: string): Gallery | undefined {
    const gallery = db
      .prepare("SELECT * FROM galerias WHERE id = ?")
      .get(id) as Gallery;
    if (!gallery) return undefined;

    gallery.pictures = JSON.parse(
      (gallery.pictures as unknown as string) || "[]",
    );
    return gallery;
  },

  countAll(): number {
    const result = db
      .prepare("SELECT COUNT(*) as total FROM galerias")
      .get() as { total: number };
    return result.total;
  },

  findAll(page: number, qtd: number): Gallery[] {
    const offset = page * qtd - qtd;
    const galleries = db
      .prepare("SELECT * FROM galerias LIMIT ? OFFSET ?")
      .all(qtd, offset) as Gallery[];

    return galleries.map((g) => ({
      ...g,
      pictures: JSON.parse((g.pictures as unknown as string) || "[]"),
    }));
  },
};
