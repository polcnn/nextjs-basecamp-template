const configApp = {
  isProduction: process.env.NODE_ENV === "production",
  endpoint: {
    apiUrl: process.env.NEXT_PUBLIC_ENDPOINT_API_URL ?? "",
  },
};

export default configApp;
