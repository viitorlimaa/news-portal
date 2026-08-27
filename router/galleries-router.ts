import type { Request, Response } from "express";
import express from "express";
import { container } from "tsyringe";
import GalleriesController from "../controllers/galleries-controller.js";

const galleriesRouter = express.Router();

galleriesRouter
  .route("/api/v1/galleries/:page/:qtd")
  .get((req: Request, res: Response) => {
    const galleries = container.resolve(GalleriesController);
    return galleries.get(req, res);
  });

galleriesRouter.post("/api/v1/galleries", (req: Request, res: Response) => {
  const galleries = container.resolve(GalleriesController);
  return galleries.create(req, res);
});

galleriesRouter
  .route("/api/v1/galleries/:id")
  .get((req: Request, res: Response) => {
    const galleries = container.resolve(GalleriesController);
    return galleries.getById(req, res);
  });

galleriesRouter.delete("/api/v1/galleries/:id", (req: Request, res: Response) => {
  const galleries = container.resolve(GalleriesController);
  return galleries.delete(req, res);
});

export default galleriesRouter;
