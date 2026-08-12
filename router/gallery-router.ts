import type { Request, Response } from "express";
import express from "express";
import { container } from "tsyringe";
import GalleryController from "../controllers/gallery-controller.js";

const galleryRouter = express.Router();

galleryRouter
  .route("/api/v1/gallery/:page/:qtd")
  .get((req: Request, res: Response) => {
    const gallery = container.resolve(GalleryController);
    return gallery.get(req, res);
  });

galleryRouter
  .route("/api/v1/gallery/:id")
  .get((req: Request, res: Response) => {
    const gallery = container.resolve(GalleryController);
    return gallery.getById(req, res);
  });

export default galleryRouter;
