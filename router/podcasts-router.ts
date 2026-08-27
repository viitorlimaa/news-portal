import type { Request, Response } from "express";
import express from "express";
import { container } from "tsyringe";
import PodcastsController from "../controllers/podcasts-controller.js";

const podcastsRouter = express.Router();

podcastsRouter
  .route("/api/v1/podcasts/:page/:qtd")
  .get((req: Request, res: Response) => {
    const podcasts = container.resolve(PodcastsController);
    return podcasts.get(req, res);
  });

podcastsRouter.post("/api/v1/podcasts", (req: Request, res: Response) => {
  const podcasts = container.resolve(PodcastsController);
  return podcasts.create(req, res);
});

podcastsRouter
  .route("/api/v1/podcasts/:id")
  .get((req: Request, res: Response) => {
    const podcasts = container.resolve(PodcastsController);
    return podcasts.getById(req, res);
  });

podcastsRouter.delete("/api/v1/podcasts/:id", (req: Request, res: Response) => {
  const podcasts = container.resolve(PodcastsController);
  return podcasts.delete(req, res);
});

export default podcastsRouter;
