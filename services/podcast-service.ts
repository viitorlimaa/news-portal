import type { IPodcastService } from "../contracts/ipodcast-service.js";
import Result from "../infra/result.js";
import type { Podcast } from "../models/podcast.js";
import { PodcastRepository } from "../repository/podcast-repository.js";

export class PodcastService implements IPodcastService {
  async get(_id: string): Promise<Podcast> {
    const result = PodcastRepository.findById(_id);
    if (!result) throw new Error(`Podcast ${_id} não encontrado`);
    return result;
  }

  async getAll(page: number, qtd: number): Promise<Result<Podcast>> {
    const result = new Result<Podcast>();
    result.Page = page;
    result.Qtd = qtd;
    result.Total = PodcastRepository.countAll();
    result.Data = PodcastRepository.findAll(page, qtd);
    return result;
  }
}
