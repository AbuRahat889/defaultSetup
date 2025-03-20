import { baseApi } from "./baseApi";

// /* eslint-disable @typescript-eslint/no-explicit-any */

const ServiceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // sign up user or client
    getMe: build.query({
      query: () => ({
        url: `/user/me`,
        method: "GET",
      }),
      providesTags: ["user", "auth"],
    }),

    updateUserInfo: build.mutation({
      query: (formdata) => {
        return {
          url: `/user/update-profile`,
          method: "PUT",
          body: formdata,
        };
      },
      invalidatesTags: ["user", "auth"],
    }),

    // login: build.mutation({  /user/update-profile
    // method: "GET",
    //   query: (data: any) => ({
    //     url: `/auth/login`,
    //     method: "POST",
    //     body: data,
    //   }),
    //   invalidatesTags: ["auth"],
    // }),
  }),
});

export const { useUpdateUserInfoMutation , useGetMeQuery} = ServiceApi;
export default ServiceApi;
