import { cookies } from "next/headers";
import axios from "axios";
import _ from "lodash";
import configApp from "@/config";
import CaseUtil from "@/utils/case";
import { AUTH_KEY } from "@/constants/key";

const axiosServer = axios.create({
  baseURL: configApp.endpoint.apiUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosServer.interceptors.request.use(async (config) => {
  if (config.data) config.data = CaseUtil.toSnake(config.data);
  if (config.params) config.params = CaseUtil.toSnake(config.params);

  const cookieStore = await cookies();

  const accessToken: string | undefined =
    cookieStore.get(AUTH_KEY.ACCESS_TOKEN)?.value ?? undefined;

  if (!_.isUndefined(accessToken) && !_.isEmpty(accessToken)) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

axiosServer.interceptors.response.use(
  (response) => {
    response.data = CaseUtil.toCamel(response.data);
    return response;
  },
  (error) => {
    if (error.response?.data) {
      error.response.data = CaseUtil.toCamel(error.response.data);
    }

    return Promise.reject(error);
  }
);

export default axiosServer;
