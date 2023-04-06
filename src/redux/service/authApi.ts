import { api } from "./api";
const token =  localStorage.getItem('refreshToken')

export const authConfig = api.injectEndpoints({
    endpoints: (builder) => ({
        reNewToken: builder.query({
            query: () => ({
                url: '/renew-token',
                headers: {'Authorization':` Bearer ${token}`}
            })
            
        }),
        login: builder.mutation({
            query: (payload) => ({
                url: '/login',
                method: 'POST',
                body: payload
            })
        }),
       
    })
})

export const {useLoginMutation, useReNewTokenQuery} = authConfig