import baseApi from "./baseApi";

const generateToken = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createToken: build.mutation({
      query: (data) => ({
        url: `/message/generate-access-token`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Group", "Chanel", "chat"],
    }),
  }),
});

export const { useCreateTokenMutation } = generateToken;
