import type { Request, Response } from "express";
import express from "express";
import { container } from "tsyringe";
import VideoController from "../controllers/videos-controller.js";

const videosRouter = express.Router();
const videos = container.resolve(VideoController);

videosRouter
  .route("/api/v1/videos/:page/:qtd")
  .get((req: Request, res: Response) => videos.get(req, res));

videosRouter
  .route("/api/v1/videos/:id")
  .get((req: Request, res: Response) => videos.getById(req, res));

export default videosRouter;
