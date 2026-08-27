import db from "../infra/db.js";
import { galleriesSchema, type Galleries } from "../validation/galleries-schema.js";
import type { GalleriesInput } from "../validation/input-schemas.js";
import { picturesSchema, type Pictures } from "../validation/pictures-schema.js";

function mapGalleriesPictures(rawValue: unknown): Pictures[] {
  if (typeof rawValue !== "string") return [];

  try {
    const parsed = JSON.parse(rawValue) as unknown;
    if (!Array.isArray(parsed)) return [];

    return parsed.map((item) => {
      if (typeof item === "string") {
        return picturesSchema.parse({
          thumb: item,
          thumbNail: item,
          credito: "",
          legenda: "",
        });
      }

      return picturesSchema.parse(item);
    });
  } catch {
    return [];
  }
}

function mapGalleries(gallery: Galleries & { fotos?: unknown }): Galleries {
  const { fotos, ...data } = gallery;
  return galleriesSchema.parse({
    ...data,
    pictures: mapGalleriesPictures(fotos),
  });
}

export const galleriesRepository = {
  create(input: GalleriesInput): Galleries {
    const result = db.prepare(`
      INSERT INTO galerias
        (titulo, texto, imagem, link, dataPublicacao, tags, ativo, fotos)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
      input.titulo, input.texto, input.imagem, input.link,
      input.dataPublicacao.toISOString(), input.tags, input.ativo ? 1 : 0,
      JSON.stringify(input.pictures),
    );
    // A leitura posterior garante que fotos serializadas e campos do banco passem pelo schema.
    const raw = db.prepare("SELECT * FROM galerias WHERE id = ?").get(result.lastInsertRowid) as Galleries & { fotos?: unknown };
    return mapGalleries(raw);
  },

  delete(id: string): boolean {
    return db.prepare("DELETE FROM galerias WHERE id = ?").run(id).changes > 0;
  },

  findById(id: string): Galleries | undefined {
    const gallery = db
      .prepare("SELECT * FROM galerias WHERE id = ?")
      .get(id) as (Galleries & { fotos?: unknown }) | undefined;
    if (!gallery) return undefined;

    return mapGalleries(gallery);
  },

  countAll(): number {
    const result = db
      .prepare("SELECT COUNT(*) as total FROM galerias")
      .get() as { total: number };
    return result.total;
  },

  findAll(page: number, qtd: number): Galleries[] {
    const offset = page * qtd - qtd;
    const galleries = db
      .prepare("SELECT * FROM galerias LIMIT ? OFFSET ?")
      .all(qtd, offset) as Array<Galleries & { fotos?: unknown }>;

    return galleries.map((gallery) => mapGalleries(gallery));
  },
};
