import express from "express";
import galleriesRouter from "./galleries-router.js";
import newsRouter from "./news-router.js";
import podcastsRouter from "./podcasts-router.js";
import videosRouter from "./videos-router.js";

const router = express.Router();

router.use(newsRouter);
router.use(videosRouter);
router.use(galleriesRouter);
router.use(podcastsRouter);

export default router;
