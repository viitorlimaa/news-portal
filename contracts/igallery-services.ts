import type { Galleries } from "../validation/galleries-schema.js";
import type { GalleriesInput } from "../validation/input-schemas.js";
import type { IService } from "./iservice.js";

export interface IGalleriesService extends IService<Galleries, GalleriesInput> {}
