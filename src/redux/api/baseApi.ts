import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  tagTypes: ["products"],
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://express-mongo-server-jakaria-hossains-projects.vercel.app/api/v1",
  }),
  endpoints: () => ({}),
});
// deployed server link: https://express-mongo-server-jakaria-hossains-projects.vercel.app/
