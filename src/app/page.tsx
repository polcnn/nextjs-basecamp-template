"use client";

import { useEffect } from "react";
import type { IRejectResponse } from "@/interfaces/response";
import TestService from "@/services/client/test";

const Page = () => {
  useEffect(() => {
    doGetData();
  }, []);

  const doGetData = async () => {
    try {
      const result = await TestService.getTodoById("1");
      console.log(result);
    } catch (error: unknown) {
      console.error(error as IRejectResponse);
    }
  };

  return <p>Test call API in client site page.</p>;
};

export default Page;
