import express from "express";
import newsRouter from "./news-router.js";
import videosRouter from "./video-router.js";
import galleryRouter from "./gallery-router.js";
import podcastRouter from "./podcast-router.js";

const router = express.Router();

router.use(newsRouter);
router.use(videosRouter);
router.use(galleryRouter);
router.use(podcastRouter);

export default router;
