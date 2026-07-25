import type { INewsService } from "../contracts/inews-service.js";
import Result from "../infra/result.js";
import type { News } from "../models/news.js";
import { NewsRepository } from "../repository/news-repository.js";

export class NewsService implements INewsService {
  async get(_id: string): Promise<News> {
    const result = NewsRepository.findById(_id);
    if (!result) throw new Error(`Notícia ${_id} não encontrada`);
    return result;
  }

  async getAll(page: number, qtd: number): Promise<Result<News>> {
    let result = new Result<News>();
    result.Page = page;
    result.Qtd = qtd;
    result.Total = NewsRepository.countAll();
    result.Data = NewsRepository.findAll(page, qtd);
    return result;
  }
}
