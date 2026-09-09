import type { INewsService } from "../contracts/inews-service.js";
import { resultSchema } from "../infra/result-schema.js";
import Result from "../infra/result.js";
import { NewsRepository } from "../repository/news-repository.js";
import { HttpError } from "../shared/controller-error.js";
import type { NewsInput } from "../validation/input-schemas.js";
import { newsSchema, type News } from "../validation/news-schema.js";

export class NewsService implements INewsService {
  async create(input: NewsInput): Promise<News> {
    return NewsRepository.create(input);
  }

  async delete(id: string): Promise<void> {
    if (!NewsRepository.delete(id)) {
      throw new HttpError(404, `Notícia ${id} não encontrada`);
    }
  }

  async get(_id: string): Promise<News> {
    const result = NewsRepository.findById(_id);
    if (!result) throw new HttpError(404, `Notícia ${_id} não encontrada`);
    return result;
  }

  async getAll(page: number, qtd: number): Promise<Result<News>> {
    const result = new Result<News>();
    result.Page = page;
    result.Qtd = qtd;
    result.Total = NewsRepository.countAll();
    result.Data = NewsRepository.findAll(page, qtd);
    return resultSchema(newsSchema).parse(result);
  }
}
