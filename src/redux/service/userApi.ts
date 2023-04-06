import { api } from "./api";
const token =  localStorage.getItem('refreshToken')

export const userConfig = api.injectEndpoints({
    endpoints: (builder) => ({
        getHelp: builder.query({
            query: () => '/get-globals'
        }),
       
    })
})

export const {useGetHelpQuery} = userConfig