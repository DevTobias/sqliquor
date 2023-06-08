export class HttpException extends Error {
  public code: number;

  constructor(msg: string, code = 500) {
    super(msg);
    this.code = code;
  }
}
