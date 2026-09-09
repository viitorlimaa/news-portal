export default class Result<T = unknown> {
  Qtd: number = 0;
  Page: number = 0;
  Total: number = 0;
  Data: T[] = [];
}
