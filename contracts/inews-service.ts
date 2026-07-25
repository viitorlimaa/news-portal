import Result from "../infra/result.js";
import type { News } from "../models/news.js";
import type { IService } from "./iservice.js";

export interface INewsService extends IService<News> {}
