import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllProducts: build.query({
      query: (query) => {
        // console.log(query);
        return {
          url: `products/`,
          method: "GET",
          params: query,
        };
      },
      providesTags: ["products"],
    }),
    addProduct: build.mutation({
      query: (formData) => {
        return {
          url: "/products",
          method: "POST",
          body: formData,
        };
      },
      invalidatesTags: ["products"],
    }),
    deleteProduct: build.mutation({
      query: (id: string) => {
        return { url: `/products/${id}`, method: "DELETE" };
      },
      invalidatesTags: ["products"],
    }),
    updateProduct: build.mutation({
      query: (payload) => {
        return {
          url: `/products/${payload.productId}`,
          method: "PUT",
          body: payload.data,
        };
      },
      invalidatesTags: ["products"],
    }),
    getSingleProduct: build.query({
      query: (id: string) => {
        return { url: `/products/${id}`, method: "GET" };
      },
      providesTags: ["products"],
    }),
  }),
});
export const {
  useGetAllProductsQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useGetSingleProductQuery,
  useUpdateProductMutation,
} = productApi;
