import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500/login" }),
  endpoints: (builder) => ({
   
    login: builder.mutation({
      query: (user) => {
        return {
          url: "/",
          method: "POST",
          body: user,
        };
      },
    }),
    
  }),
});

export const { useLoginMutation } = userApi;
