import type { AxiosError } from "axios";
import type { IRejectResponse } from "@/interfaces/response";

export default class ResponseUtil {
  static rejectFormat<R = any>(error: AxiosError<R>): IRejectResponse {
    return {
      statusCode: error.status ?? 500,
      message: error.message ?? "Unknow Error",
      data: error.response?.data ?? undefined,
    };
  }
}
