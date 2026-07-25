import express from "express";
import type { Application, Request, Response } from "express";
import database from "./infra/db.js";
import NewsController from "./controllers/news-controller.js";

class StartUp {
  public app: Application;
  private _newsController: NewsController;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.routes();
    this._newsController = new NewsController();

    console.log("✅ Banco conectado:", database ? "OK" : "ERRO");
  }
  routes() {
    this.app.route("/").get((req, res) => {
      res.send({ versao: "0.0.1" });
    });

    // Buscar notícias páginadas
    this.app
      .route("/api/v1/news/:page/:qtd")
      .get((req: Request, res: Response) => {
        return this._newsController.get(req, res);
      });

    // Buscar por Id
    this.app.route("/api/v1/news/:id").get((req: Request, res: Response) => {
      return this._newsController.getById(req, res);
    });
  }
}

export default new StartUp();
