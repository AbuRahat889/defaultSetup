/* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-explicit-any */

import baseApi from "./baseApi";

const AuthApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Login
    login: build.mutation({
      query: (data: any) => ({
        url: `/auth/admin-login`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["ADMIN"],
    }),

    UpdateUserImage: build.mutation({
      query: (avatar) => ({
        url: `/auth/update/profile-image`,
        method: "PATCH",
        body: avatar,
      }),
    }),
  }),
});

export const { useLoginMutation, useUpdateUserImageMutation } = AuthApi;
export default AuthApi;
