import type { VideosInput } from "../validation/input-schemas.js";
import type { Videos } from "../validation/videos-schema.js";
import type { IService } from "./iservice.js";

export interface IVideosService extends IService<Videos, VideosInput> {}
