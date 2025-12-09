import type { IRejectResponse } from "@/interfaces/response";
import TestService from "@/services/server/test";

export const dynamic = "force-dynamic";

const doFetchData = async () => {
  try {
    const result = await TestService.getTodoById("1");
    console.log(result);
  } catch (error: unknown) {
    console.error(error as IRejectResponse);
  }
};

const page = async () => {
  await doFetchData();

  return <p>Test call API in server site page.</p>;
};

export default page;
