import "reflect-metadata";
import express from "express";
import type { Request, Response } from "express";
import NewsController from "../controllers/news-controller.js";
import { container } from "tsyringe";

const newsRouter = express();

const news = container.resolve(NewsController);

newsRouter
  .route("api/v1/news/:page/:qtd")
  .get((req: Request, res: Response) => {
    return news.get(req, res);
  });
newsRouter.route("api/v1/news/:id").get((req: Request, res: Response) => {
  return news.getById(req, res);
});

export default newsRouter;
