import db from "../infra/db.js";
import type { Gallery } from "../models/gallery.js";
import type { Pictures } from "../models/pictures.js";

function mapGalleryPictures(rawValue: unknown): Pictures[] {
  if (typeof rawValue !== "string") return [];

  try {
    const parsed = JSON.parse(rawValue) as unknown;
    if (!Array.isArray(parsed)) return [];

    return parsed.map((item) => {
      if (typeof item === "string") {
        return {
          thumb: item,
          thumbNail: item,
          credito: "",
          legenda: "",
        } as Pictures;
      }

      return item as Pictures;
    });
  } catch {
    return [];
  }
}

function mapGallery(gallery: Gallery & { fotos?: unknown }): Gallery {
  const mappedGallery = { ...gallery } as Gallery & { fotos?: unknown };
  mappedGallery.pictures = mapGalleryPictures(mappedGallery.fotos);
  return mappedGallery as Gallery;
}

export const galleryRepository = {
  findById(id: string): Gallery | undefined {
    const gallery = db
      .prepare("SELECT * FROM galerias WHERE id = ?")
      .get(id) as Gallery & { fotos?: unknown };
    if (!gallery) return undefined;

    return mapGallery(gallery);
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
      .all(qtd, offset) as Array<Gallery & { fotos?: unknown }>;

    return galleries.map((gallery) => mapGallery(gallery));
  },
};
