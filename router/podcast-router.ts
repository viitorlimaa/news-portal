import express from "express";
import type { Request, Response } from "express";
import { container } from "tsyringe";
import PodcastController from "../controllers/podcast-controller.js";

const podcastRouter = express.Router();
const podcast = container.resolve(PodcastController);

podcastRouter
  .route("/api/v1/podcast/:page/:qtd")
  .get((req: Request, res: Response) => podcast.get(req, res));

podcastRouter
  .route("/api/v1/podcast/:id")
  .get((req: Request, res: Response) => podcast.getById(req, res));

export default podcastRouter;
