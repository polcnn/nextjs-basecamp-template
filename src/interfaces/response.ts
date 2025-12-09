export interface IRejectResponse<T = any> {
  statusCode: number;
  message: string;
  data?: T;
}
