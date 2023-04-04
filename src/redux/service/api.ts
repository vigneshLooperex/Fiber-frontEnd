import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import type { RootStote } from "../store";

interface RootStote {
  auth: {
    token: string;
  }
}

const baseQuery = fetchBaseQuery({
    baseUrl: "http://192.168.29.20:8000",
    prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootStote).auth.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
})


export const api = createApi({
    reducerPath: 'api',
    baseQuery: baseQuery,
    endpoints: () => ({})
})
