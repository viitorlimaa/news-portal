import type { IVideoService } from "../contracts/ivideos-service.js";
import Result from "../infra/result.js";
import type { Video } from "../models/video.js";
import { videoRepository } from "../repository/videos-repository.js";

export class VideoService implements IVideoService {
  async get(_id: string): Promise<Video> {
    let result = videoRepository.findById(_id);
    if (!result) throw new Error(`Video ${_id} não encontrado`);
    return result;
  }
  async getAll(page: number, qtd: number): Promise<Result<Video>> {
    const result = new Result<Video>();
    result.Page = page;
    result.Qtd = qtd;
    result.Total = videoRepository.countAll();
    result.Data = videoRepository.findAll(page, qtd);
    return result;
  }
}
