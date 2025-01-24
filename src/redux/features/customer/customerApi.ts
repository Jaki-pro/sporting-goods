import { baseApi } from "../../api/baseApi";
type TUser = {
  email: string;
  password: string;
};

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
    }),
  }),
});
export const { useAddCustomerMutation } = customerApi;
