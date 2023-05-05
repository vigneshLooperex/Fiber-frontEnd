import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../store";

// export const baseUrl= "http://192.168.29.20:8000"
export const baseUrl = "https://fiberbackend.onrender.com"
const baseQuery = fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, api) => {

        const token = (api.getState() as RootState).auth.token;

        if (token) {
          headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
      },
})


export const api = createApi({
    reducerPath: 'api',
    baseQuery,
    endpoints: () => ({}),
})

export const  {reducer} = api
