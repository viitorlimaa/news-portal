import type { IVideosServices } from "../contracts/ivideos-service.js";
import Result from "../infra/result.js";
import type { Video } from "../models/video.js";
import { VideosRepository } from "../repository/videos-repository.js";

export class VideoService implements IVideosServices {
  async get(_id: string): Promise<Video> {
    let result = VideosRepository.findById(_id);
    if (!result) throw new Error(`Video ${_id} não encontrado`);
    return result;
  }
  async getAll(page: number, qtd: number): Promise<Result<Video>> {
    const result = new Result<Video>();
    result.Page = page;
    result.Qtd = qtd;
    result.Total = VideosRepository.countAll();
    result.Data = VideosRepository.findAll(page, qtd);
    return result;
  }
}
