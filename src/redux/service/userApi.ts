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
        getBill: builder.query({
            query:  (page=1) => `/user/bills?sortby=status:-1,createdAt:-1&populate=payment_id plan_id,name&page=${page}`
        }),
        getPaymets: builder.query({
            query:  (page=1) => `/user/payments?sortby=createdAt:-1&populate=bill_id plan_id&page=${page}`
        }),
       
    })
})

export const {useGetHelpQuery, useSendReportMutation, useCollectMutation, useGetPlansQuery, useRechargeMutation, useGetBillQuery,useGetPaymetsQuery} = userConfig