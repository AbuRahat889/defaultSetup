// /* eslint-disable @typescript-eslint/no-explicit-any */

import { baseApi } from "../baseApi";

const AuthApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // sign up user or client
    signup: build.mutation({
      query: (formData: any) => ({
        url: `/user/register`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["auth", "user"],
    }),
    login: build.mutation({
      query: (data: any) => ({
        url: `/auth/login`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["auth", "user"],
    }),
    forgetPass: build.mutation({
      query: (data) => ({
        url: "/auth/forgot-password",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useSignupMutation, useLoginMutation, useForgetPassMutation } =
  AuthApi;
export default AuthApi;
