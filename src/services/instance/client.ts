"use client";

import axios from "axios";
import _ from "lodash";
import { getCookie } from "cookies-next/client";
import configApp from "@/config";
import CaseUtil from "@/utils/case";
import { AUTH_KEY } from "@/constants/key";

const axiosClient = axios.create({
  baseURL: configApp.endpoint.apiUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use((config) => {
  if (config.data) config.data = CaseUtil.toSnake(config.data);
  if (config.params) config.params = CaseUtil.toSnake(config.params);

  if (!_.isUndefined(window)) {
    const accessToken: string | undefined =
      getCookie(AUTH_KEY.ACCESS_TOKEN) ?? undefined;

    if (!_.isUndefined(accessToken) && !_.isEmpty(accessToken)) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
  }

  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    response.data = CaseUtil.toCamel(response.data);
    return response;
  },
  async (error) => {
    if (error.response?.data) {
      error.response.data = CaseUtil.toCamel(error.response.data);
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
