import "reflect-metadata";
import express from "express";
import type { Application, Request, Response } from "express";
import database from "./infra/db.js";
import NewsController from "./controllers/news-controller.js";
import VideosController from "./controllers/videos-controller.js";
import GalleryController from "./controllers/gallery-controller.js";
import { container } from "./shared/container.js";

class StartUp {
  public app: Application;
  private news = container.resolve(NewsController);
  private video = container.resolve(VideosController);
  private galeria = container.resolve(GalleryController);

  constructor() {
    this.app = express(); //cria o express
    this.app.use(express.json()); //configura middlewares
    this.routes(); //registra as rotas

    console.log("✅ Banco conectado:", database ? "OK" : "ERRO");
  }
  routes() {
    this.app.route("/").get((req, res) => {
      res.send({ versao: "0.0.6" });
    });

    //news
    this.app
      .route("/api/v1/news/:page/:qtd")
      .get((req: Request, res: Response) => {
        return this.news.get(req, res);
      });
    this.app.route("/api/v1/news/:id").get((req: Request, res: Response) => {
      return this.news.getById(req, res);
    });

    //videos
    this.app
      .route("/api/v1/videos/:page/:qtd")
      .get((req: Request, res: Response) => {
        return this.video.get(req, res);
      });
    this.app.route("/api/v1/videos/:id").get((req: Request, res: Response) => {
      return this.video.getById(req, res);
    });

    //galeria
    this.app
      .route("/api/v1/gallery/:page/:qtd")
      .get((req: Request, res: Response) => {
        return this.galeria.get(req, res);
      });
    this.app.route("/api/v1/gallery/:id").get((req: Request, res: Response) => {
      return this.galeria.getById(req, res);
    });
  }
}

export default new StartUp();
