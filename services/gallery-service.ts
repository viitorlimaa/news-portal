import type { IGalleryServices } from "../contracts/igallery-services.js";
import Result from "../infra/result.js";
import type { Gallery } from "../models/gallery.js";
import { galleryRepository } from "../repository/gallery-repository.js";
import { VideosRepository } from "../repository/videos-repository.js";

export class GalleryService implements IGalleryServices {
  async get(_id: string): Promise<Gallery> {
    let result = VideosRepository.findById(_id);
    if (!result) throw new Error(`Video ${_id} não encontrado`);
    return result;
  }
  async getAll(page: number, qtd: number): Promise<Result<Gallery>> {
    const result = new Result<Gallery>();
    result.Page = page;
    result.Qtd = qtd;
    result.Total = galleryRepository.countAll();
    result.Data = galleryRepository.findAll(page, qtd);
    return result;
  }
}
