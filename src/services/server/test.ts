import type { AxiosResponse, AxiosError } from "axios";
import axiosServer from "../instance/server";
import type { IRejectResponse } from "@/interfaces/response";
import ResponseUtil from "@/utils/response";

export default class TestService {
  static async getTodoById<T = any>(id: string): Promise<T | IRejectResponse> {
    try {
      const response: AxiosResponse<T> = await axiosServer.get(`/todos/${id}`);
      return response.data;
    } catch (error: unknown) {
      throw ResponseUtil.rejectFormat(error as AxiosError);
    }
  }
}
