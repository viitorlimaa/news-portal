import type { IVideosService } from "../contracts/ivideos-service.js";
import Result from "../infra/result.js";
import { videosRepository } from "../repository/videos-repository.js";
import { HttpError } from "../shared/controller-error.js";
import type { VideosInput } from "../validation/input-schemas.js";
import type { Videos } from "../validation/videos-schema.js";

export class VideosService implements IVideosService {
  async create(input: VideosInput): Promise<Videos> {
    return videosRepository.create(input);
  }

  async delete(id: string): Promise<void> {
    if (!videosRepository.delete(id)) {
      throw new HttpError(404, `Vídeo ${id} não encontrado`);
    }
  }

  async get(_id: string): Promise<Videos> {
    let result = videosRepository.findById(_id);
    if (!result) throw new Error(`Video ${_id} não encontrado`);
    return result;
  }
  async getAll(page: number, qtd: number): Promise<Result<Videos>> {
    const result = new Result<Videos>();
    result.Page = page;
    result.Qtd = qtd;
    result.Total = videosRepository.countAll();
    result.Data = videosRepository.findAll(page, qtd);
    return result;
  }
}
