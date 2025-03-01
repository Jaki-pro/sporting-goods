import { baseApi } from "../../api/baseApi";

const customerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addCustomer: builder.mutation({
      query: (payload) => {
        return {
          url: "/users/create-customer",
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: ["customers"],
    }),
    getAllCustomer: builder.query({
      query: () => {
        return {
          url: "/customers",
          method: "GET",
        };
      },
      providesTags: ["customers"],
    }),
    deleteCustomer: builder.mutation({
      query: (id) => {
        console.log(id);
        return {
          url: `/customers/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["customers"],
    }),
  }),
});
export const {
  useAddCustomerMutation,
  useGetAllCustomerQuery,
  useDeleteCustomerMutation,
} = customerApi;
