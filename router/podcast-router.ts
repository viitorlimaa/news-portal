import type { Request, Response } from "express";
import express from "express";
import { container } from "tsyringe";
import PodcastController from "../controllers/podcast-controller.js";

const podcastRouter = express.Router();

podcastRouter
  .route("/api/v1/podcast/:page/:qtd")
  .get((req: Request, res: Response) => {
    const podcast = container.resolve(PodcastController);
    return podcast.get(req, res);
  });

podcastRouter
  .route("/api/v1/podcast/:id")
  .get((req: Request, res: Response) => {
    const podcast = container.resolve(PodcastController);
    return podcast.getById(req, res);
  });

export default podcastRouter;
