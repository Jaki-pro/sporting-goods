import { baseApi } from "../../api/baseApi";

const customerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addAdmin: builder.mutation({
      query: (payload) => {
        console.log("nooo");
        return {
          url: "/users/create-admin",
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: ["admins"],
    }),
    getAllAdmin: builder.query({
      query: () => {
        return {
          url: "/admins",
          method: "GET",
        };
      },
      providesTags: ["admins"],
    }),
    deleteAdmin: builder.mutation({
      query: (id) => {
        return {
          url: `/admins/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["admins"],
    }),
  }),
});
export const {
  useGetAllAdminQuery,
  useDeleteAdminMutation,
  useAddAdminMutation,
} = customerApi;
