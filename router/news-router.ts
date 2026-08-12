import express from "express";
import type { Request, Response } from "express";
import { container } from "tsyringe";
import NewsController from "../controllers/news-controller.js";

const newsRouter = express.Router();
const news = container.resolve(NewsController);

newsRouter
  .route("/api/v1/news/:page/:qtd")
  .get((req: Request, res: Response) => news.get(req, res));

newsRouter
  .route("/api/v1/news/:id")
  .get((req: Request, res: Response) => news.getById(req, res));

export default newsRouter;
