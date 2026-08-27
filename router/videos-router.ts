import type { Request, Response } from "express";
import express from "express";
import { container } from "tsyringe";
import VideosController from "../controllers/videos-controller.js";

const videosRouter = express.Router();

videosRouter
  .route("/api/v1/videos/:page/:qtd")
  .get((req: Request, res: Response) => {
    const videos = container.resolve(VideosController);
    return videos.get(req, res);
  });

videosRouter.post("/api/v1/videos", (req: Request, res: Response) => {
  const videos = container.resolve(VideosController);
  return videos.create(req, res);
});

videosRouter.route("/api/v1/videos/:id").get((req: Request, res: Response) => {
  const videos = container.resolve(VideosController);
  return videos.getById(req, res);
});

videosRouter.delete("/api/v1/videos/:id", (req: Request, res: Response) => {
  const videos = container.resolve(VideosController);
  return videos.delete(req, res);
});

export default videosRouter;
