import express, { type Request, type Response } from "express";
import { container } from "tsyringe";
import GalleryController from "../controllers/gallery-controller.js";

const galleryRouter = express();
const gallery = container.resolve(GalleryController);

galleryRouter
  .route("api/v1/gallery/:page/:qtd")
  .get((req: Request, res: Response) => {
    return gallery.get(req, res);
  });
galleryRouter.route("api/v1/gallery/:id").get((req: Request, res: Response) => {
  return gallery.getById(req, res);
});

export default galleryRouter;
