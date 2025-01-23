// import {
//   createApi,
//   fetchBaseQuery,
//   BaseQueryFn,
//   FetchArgs,
//   FetchBaseQueryError,
// } from "@reduxjs/toolkit/query/react";
// import { RootState } from "../store";
// import { logout, setUser } from "../features/auth/authSlice";

// const baseQuery = fetchBaseQuery({
//   // baseUrl: "https://app.boom360trader.com/api/v1",
//   // credentials: "include", // Uncomment if your API requires cookies or other credentials
//   prepareHeaders: (headers) => {
//     // Retrieve token from Redux state
//     // const token = (getState() as RootState).auth?.token;

//     // Retrieve tokens from localStorage as a fallback
//     const token = localStorage.getItem("accessToken");

//     // Set the accept header
//     headers.set("accept", "application/json");

//     // Set the authorization header
//     if (token) {
//       headers.set("authorization", ` ${token}`);
//     }

//     return headers;
//   },
// });

// const baseQueryWithRefreshToken: BaseQueryFn<
//   string | FetchArgs,
//   unknown,
//   FetchBaseQueryError
// > = async (args, api, extraOptions) => {
//   let result = await baseQuery(args, api, extraOptions);

//   if (result.error?.status === 401) {
//     try {
//       // Refresh the token
//       const res = await fetch(
//         `${process.env.NEXT_PUBLIC_BASE_URL}/auth/accessToken`,
//         {
//           method: "POST",
//           credentials: "include", // Sends cookies with the request
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const data = await res.json();

//       if (data?.data?.accessToken) {
//         const user = (api.getState() as RootState).auth.user;

//         // Dispatch new access token to update state
//         api.dispatch(setUser({ user, token: data.data.accessToken }));

//         // Retry the original query with the new token
//         result = await baseQuery(args, api, extraOptions);
//       } else {
//         api.dispatch(logout());
//         console.error("Failed to obtain a new access token");
//       }
//     } catch (error) {
//       console.error("Error during token refresh:", error);
//       api.dispatch(logout());
//     }
//   }

//   return result;
// };

// export const baseApi = createApi({
//   reducerPath: "baseApi",
//   baseQuery: baseQueryWithRefreshToken,
//   tagTypes: ["Group"], // Define your tag types for invalidation and caching
//   endpoints: () => ({}), // Define endpoints here or extend in other files
// });

// export default baseApi;

// src/features/api/baseApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
export const baseApi = createApi({
  reducerPath: "baseApi", // The key for this API in the Redux store
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL, // Replace with your API's base URL
    // credentials: "include",
    prepareHeaders: (headers) => {
      const token = Cookies?.get("accessToken"); // Assuming token is stored in the auth slice
      if (token) {
        headers.set("Authorization", `${token}`);
        return;
      }
      // return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: [
    "Group",
    "Chanel",
    "ChannelFiles",
    "ChannelMembers",
    "ADMIN",
    "chat",
  ],
});

// Export hooks for usage in functional components
export default baseApi;
