import type { Podcast } from "../models/podcast.js";
import type { IService } from "./iservice.js";

export interface IPodcastService extends IService<Podcast> {}
