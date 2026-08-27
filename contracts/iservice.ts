import type Result from "../infra/result.js";

export interface IService<T, TInput> {
  get(id: string): Promise<T>;
  getAll(page: number, qtd: number): Promise<Result<T>>;
  create(input: TInput): Promise<T>;
  delete(id: string): Promise<void>;
}
