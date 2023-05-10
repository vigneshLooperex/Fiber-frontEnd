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
            }),
            invalidatesTags: ['User']
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
        muteNotification: builder.mutation({
            query: () => ({
                url: '/user/mute-notification',
                method: 'POST',
            })
        }),
        clearNotification: builder.mutation({
            query: () => ({
                url: '/user/clear-notification',
                method: 'POST',
            })
        }),
        collectRequest: builder.query({
            query: (page=1) => `/user/collection-request?page=${page}&sortby=createdAt:-1`,
            providesTags: ['User']
        }),
    })
})

export const {useGetHelpQuery, useSendReportMutation, useCollectMutation, useGetPlansQuery, useRechargeMutation, useGetBillQuery,useGetPaymetsQuery, useMuteNotificationMutation, useClearNotificationMutation, useCollectRequestQuery} = userConfig