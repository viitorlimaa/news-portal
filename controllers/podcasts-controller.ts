import type { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import type { IPodcastsService } from "../contracts/ipodcasts-service.js";
import { sendControllerError } from "../shared/controller-error.js";
import { podcastsInputSchema } from "../validation/input-schemas.js";
import { idParamsSchema, paginationParamsSchema } from "../validation/route-schema.js";

@injectable()
export default class PodcastsController {
  constructor(@inject("IPodcastsService") private _service: IPodcastsService) {}

  async get(request: Request, response: Response) {
    try {
      const { page, qtd } = paginationParamsSchema.parse(request.params);
      const result = await this._service.getAll(page, qtd);
      response.status(200).json({ result });
    } catch (error) {
      sendControllerError(response, error);
    }
  }

  async getById(request: Request, response: Response) {
    try {
      const { id } = idParamsSchema.parse(request.params);
      let result = await this._service.get(id);
      response.status(200).json({ result });
    } catch (error) {
      sendControllerError(response, error);
    }
  }

  async create(request: Request, response: Response) {
    try {
      const input = podcastsInputSchema.parse(request.body);
      const result = await this._service.create(input);
      response.status(201).json({ result });
    } catch (error) {
      sendControllerError(response, error);
    }
  }

  async delete(request: Request, response: Response) {
    try {
      const { id } = idParamsSchema.parse(request.params);
      await this._service.delete(id);
      response.status(204).send();
    } catch (error) {
      sendControllerError(response, error);
    }
  }
}
