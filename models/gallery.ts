import { Core } from "./core.js";
import type { Pictures } from "./pictures.js";

export class Gallery extends Core {
  pictures!: Array<Pictures>;
}
