import type { IPodcastsService } from "../contracts/ipodcasts-service.js";
import Result from "../infra/result.js";
import { PodcastsRepository } from "../repository/podcasts-repository.js";
import { HttpError } from "../shared/controller-error.js";
import type { PodcastsInput } from "../validation/input-schemas.js";
import type { Podcasts } from "../validation/podcasts-schema.js";

export class PodcastsService implements IPodcastsService {
  async create(input: PodcastsInput): Promise<Podcasts> {
    return PodcastsRepository.create(input);
  }

  async delete(id: string): Promise<void> {
    if (!PodcastsRepository.delete(id)) {
      throw new HttpError(404, `Podcast ${id} não encontrado`);
    }
  }

  async get(_id: string): Promise<Podcasts> {
    const result = PodcastsRepository.findById(_id);
    if (!result) throw new Error(`Podcast ${_id} não encontrado`);
    return result;
  }

  async getAll(page: number, qtd: number): Promise<Result<Podcasts>> {
    const result = new Result<Podcasts>();
    result.Page = page;
    result.Qtd = qtd;
    result.Total = PodcastsRepository.countAll();
    result.Data = PodcastsRepository.findAll(page, qtd);
    return result;
  }
}
