import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllProducts: build.query({
      query: () => {
        console.log("ok");
        return {
          url: "/products",
          method: "GET",
        };
      },
      providesTags: ["products"],
    }),
  }),
});
export const { useGetAllProductsQuery } = productApi;
