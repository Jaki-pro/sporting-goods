import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    placeOrder: build.mutation({
      query: (order) => ({
        url: "/orders/create-order",
        method: "POST",
        body: order,
      }),
      invalidatesTags: ["products"],
    }),
  }),
});
export const { usePlaceOrderMutation } = orderApi;
