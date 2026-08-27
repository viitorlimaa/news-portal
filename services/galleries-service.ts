import type { IGalleriesService } from "../contracts/igalleries-services.js";
import Result from "../infra/result.js";
import { galleriesRepository } from "../repository/galleries-repository.js";
import { HttpError } from "../shared/controller-error.js";
import type { Galleries } from "../validation/galleries-schema.js";
import type { GalleriesInput } from "../validation/input-schemas.js";

export class GalleriesService implements IGalleriesService {
  async create(input: GalleriesInput): Promise<Galleries> {
    return galleriesRepository.create(input);
  }

  async delete(id: string): Promise<void> {
    if (!galleriesRepository.delete(id)) {
      throw new HttpError(404, `Galeria ${id} não encontrada`);
    }
  }

  async get(_id: string): Promise<Galleries> {
    let result = galleriesRepository.findById(_id);
    if (!result) throw new Error(`Video ${_id} não encontrado`);
    return result;
  }
  async getAll(page: number, qtd: number): Promise<Result<Galleries>> {
    const result = new Result<Galleries>();
    result.Page = page;
    result.Qtd = qtd;
    result.Total = galleriesRepository.countAll();
    result.Data = galleriesRepository.findAll(page, qtd);
    return result;
  }
}
