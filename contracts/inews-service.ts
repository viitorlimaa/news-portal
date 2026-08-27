import type { NewsInput } from "../validation/input-schemas.js";
import type { News } from "../validation/news-schema.js";
import type { IService } from "./iservice.js";

export interface INewsService extends IService<News, NewsInput> {}
