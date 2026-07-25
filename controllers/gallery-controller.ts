import type { Request, Response } from "express";
import { GalleryService } from "../services/gallery-service.js";

class GalleryController {
  private _service: GalleryService;
  constructor() {
    this._service = new GalleryService();
  }

  async get(request: Request, response: Response) {
    try {
      const page = request.params.page
        ? parseInt(request.params.page as string)
        : 1;
      const qtd = request.params.qtd
        ? parseInt(request.params.qtd as string)
        : 10;
      const result = await this._service.getAll(page, qtd);
      response.status(200).json({ result });
    } catch (error: any) {
      response.status(500).json({ error: error.message || error.toString() });
    }
  }

  async getById(request: Request, response: Response) {
    try {
      const id = request.params.id as string;
      const result = this._service.get(id);
      response.status(200).json({ result });
    } catch (error: any) {
      response.status(500).json({ error: error.message || error.toString() });
    }
  }
}

export default new GalleryController();
