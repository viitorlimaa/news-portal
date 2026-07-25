import type Result from "../infra/result.js";

export interface IService<T> {
  get(id: string): Promise<T>;
  getAll(page: number, qtd: number): Promise<Result<T>>;
}
