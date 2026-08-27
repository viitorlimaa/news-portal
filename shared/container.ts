import "reflect-metadata";
import { container } from "tsyringe";
import type { IGalleriesService } from "../contracts/igalleries-services.js";
import type { INewsService } from "../contracts/inews-service.js";
import type { IPodcastsService } from "../contracts/ipodcasts-service.js";
import type { IVideosService } from "../contracts/ivideos-service.js";
import { GalleriesService } from "../services/galleries-service.js";
import { NewsService } from "../services/news-service.js";
import { PodcastsService } from "../services/podcasts-service.js";
import { VideosService } from "../services/videos-service.js";

container.registerSingleton<INewsService>("INewsService", NewsService);
container.registerSingleton<IVideosService>("IVideosService", VideosService);
container.registerSingleton<IGalleriesService>("IGalleriesService", GalleriesService);
container.registerSingleton<IPodcastsService>("IPodcastsService", PodcastsService);

export { container };

