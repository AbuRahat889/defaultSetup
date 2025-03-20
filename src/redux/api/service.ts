import { baseApi } from "./baseApi";

// /* eslint-disable @typescript-eslint/no-explicit-any */

const ServiceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // sign up user or client

    //create service by agencies service
    createService: build.mutation({
      query: (bodyData) => ({
        url: `/service`,
        method: "POST",
        body: bodyData,
      }),
      invalidatesTags: ["service"],
    }),

    //get all service post by agencies service /service/my
    getAgenciesService: build.query({
      query: ({ page }) => ({
        url: `/service/my?page=${page}`,
        method: "GET",
      }),
      providesTags: ["service"],
    }),
    //delete service by id form agencies service/67bac976523b1add64b15103
    deleteServiceById: build.mutation({
      query: (id) => ({
        url: `/service/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["service"],
    }),

    //get all service
    getAllService: build.query({
      query: () => ({
        url: `/service/type`,
        method: "GET",
      }),
      providesTags: ["service"],
    }),

    getServiceByType: build.query({
      query: ({ name, page, limit }) => ({
        url: `/service/type?name=${name}&page=${page}&limit=${limit}`,
        method: "GET",
      }),
      providesTags: ["service"],
    }),

    getServiceByName: build.query({
      query: ({ name }) => ({
        url: `/service/?name=${name}`,
        method: "GET",
      }),
      providesTags: ["service"],
    }),

    getServiceById: build.query({
      query: (id) => ({
        url: `/service/${id}`,
        method: "GET",
      }),
      providesTags: ["service"],
    }),

    //serch service
    getSerchService: build.query({
      query: ({ state, city, name }) => ({
        // service/search?name=security&city=de&state=dhaka
        url: `service/search?name=${name}&city=${city}&state=${state}`,
        method: "GET",
      }),
      providesTags: ["service"],
    }),

    // login: build.mutation({  /service/?name=super-cleaning  /service/?name=home-cleaning
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

export const {
  useCreateServiceMutation,
  useGetAllServiceQuery,
  useGetServiceByTypeQuery,
  useGetServiceByNameQuery,
  useGetServiceByIdQuery,
  useGetAgenciesServiceQuery,
  useDeleteServiceByIdMutation,
  useGetSerchServiceQuery,
} = ServiceApi;
export default ServiceApi;
