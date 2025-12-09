import type { AxiosResponse, AxiosError } from "axios";
import axiosClient from "@/services/instance/client";
import type { IRejectResponse } from "@/interfaces/response";
import ResponseUtil from "@/utils/response";

export default class TestService {
  static async getTodoById<T = any>(id: string): Promise<T | IRejectResponse> {
    try {
      const response: AxiosResponse<T> = await axiosClient.get(`/todos/${id}`);
      return response.data;
    } catch (error: unknown) {
      throw ResponseUtil.rejectFormat(error as AxiosError);
    }
  }
}
