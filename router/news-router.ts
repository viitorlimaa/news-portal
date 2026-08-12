import type { Request, Response } from "express";
import express from "express";
import { container } from "tsyringe";
import NewsController from "../controllers/news-controller.js";

const newsRouter = express.Router();

newsRouter
  .route("/api/v1/news/:page/:qtd")
  .get((req: Request, res: Response) => {
    const news = container.resolve(NewsController);
    return news.get(req, res);
  });

newsRouter.route("/api/v1/news/:id").get((req: Request, res: Response) => {
  const news = container.resolve(NewsController);
  return news.getById(req, res);
});

export default newsRouter;
