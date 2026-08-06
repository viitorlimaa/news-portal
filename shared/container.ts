import "reflect-metadata";
import { container } from "tsyringe";
import type { INewsService } from "../contracts/inews-service.js";
import { NewsService } from "../services/news-service.js";
import type { IVideoService } from "../contracts/ivideos-service.js";
import { VideoService } from "../services/videos-service.js";
import type { IGalleryService } from "../contracts/igallery-services.js";
import { GalleryService } from "../services/gallery-service.js";
import type { IPodcastService } from "../contracts/ipodcast-service.js";
import { PodcastService } from "../services/podcast-service.js";

container.registerSingleton<INewsService>("INewsService", NewsService);
container.registerSingleton<IVideoService>("IVideoService", VideoService);
container.registerSingleton<IGalleryService>("IGalleryService", GalleryService);
container.registerSingleton<IPodcastService>("IPodcastService", PodcastService);

export { container };
