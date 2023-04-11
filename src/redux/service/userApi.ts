import { api } from "./api";
const token =  localStorage.getItem('refreshToken')

export const userConfig = api.injectEndpoints({
    endpoints: (builder) => ({
        getHelp: builder.query({
            query: () => '/get-globals'
        }),
        sendReport: builder.mutation({
            query: (payload) => ({
                url: '/user/report',
                method: 'POST',
                body: payload,
            })
        }),
        collect: builder.mutation({
            query: (payload) => ({
                url: '/user/collection-request',
                method: 'POST',
                body: payload,
            })
        }),
        getPlans: builder.query({
            query: () => '/plans'
        }),
        recharge: builder.mutation({
            query: (payload) => ({
                url: '/user/recharge',
                method: 'POST',
                body: payload,
            })
        }),
        
       
    })
})

export const {useGetHelpQuery, useSendReportMutation, useCollectMutation, useGetPlansQuery, useRechargeMutation} = userConfig