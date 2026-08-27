import type { PodcastsInput } from "../validation/input-schemas.js";
import type { Podcasts } from "../validation/podcasts-schema.js";
import type { IService } from "./iservice.js";

export interface IPodcastsService extends IService<Podcasts, PodcastsInput> {}
