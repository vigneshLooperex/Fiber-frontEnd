import { api } from "./api";

export const userConfigApi = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (payload) => ({
                url: '/login',
                method: 'POST',
                body: payload
            })
        }),
        reNewToken: builder.query({
            query: () => '/renew-token'
        })
    })
})

// expo