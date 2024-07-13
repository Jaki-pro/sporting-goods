import { baseApi } from "../../api/baseApi";

const sendMessageApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    sendMessage: build.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: "/contact/send-message",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});
export const { useSendMessageMutation } = sendMessageApi;
