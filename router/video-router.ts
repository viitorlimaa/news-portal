import "reflect-metadata";
import express, { type Request, type Response } from "express";
import { container } from "tsyringe";
import VideoController from "../controllers/videos-controller.js";

const videosRouter = express();

const videos = container.resolve(VideoController);

videosRouter
  .route("api/v1/videos/:page/:qtd")
  .get((req: Request, res: Response) => {
    return videos.get(req, res);
  });
videosRouter.route("api/v1/videos/:id").get((req: Request, res: Response) => {
  return videos.getById(req, res);
});

export default videosRouter;
