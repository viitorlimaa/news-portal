import type { Request, Response } from "express";
import { NewsService } from "../services/news-service.js";

export default class NewsController {
  private _service: NewsService;

  constructor() {
    this._service = new NewsService();
  }

  async get(request: Request, response: Response) {
    try {
      const page = request.params.page
        ? parseInt(request.params.page as string)
        : 1;
      const qtd = request.params.qtd
        ? parseInt(request.params.qtd as string)
        : 10;
      let result = await this._service.getAll(page, qtd);
      response.status(200).json({ result });
    } catch (error: any) {
      response.status(500).json({ error: error.message || error.toString() });
    }
  }

  async getById(request: Request, response: Response) {
    try {
      const _id = request.params.id as string;
      let result = await this._service.get(_id);
      response.status(200).json({ result });
    } catch (error: any) {
      response.status(500).json({ error: error.message || error.toString() });
    }
  }
}
