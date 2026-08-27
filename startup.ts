import type { Application } from "express";
import express from "express";
import "reflect-metadata";
import database from "./infra/db.js";
import router from "./router/index.js";

class StartUp {
  public app: Application;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.routes();

    console.log("✅ Banco conectado:", database ? "OK" : "ERRO");
  }

  routes(): void {
    this.app.route("/").get((req, res) => {
      res.send({ versao: "0.0.6" });
    });

    this.app.use(router);
  }
}

export default new StartUp();
