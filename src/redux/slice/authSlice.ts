import { createSlice } from "@reduxjs/toolkit";
import { authConfig } from "../service/authApi";

const initialState = {
    token: '',
    user: {},
    isAuthenticate: false,
    logIn: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState : initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.user = {},
            state.token = '',
            state.isAuthenticate = false,
            state.logIn = false
        }
    },
    extraReducers: (builder) => {
        builder
        .addMatcher(authConfig.endpoints.login.matchFulfilled, (state, action) => {
            // console.log('login', action);

            localStorage.setItem('refreshToken', action.payload.refreshToken)
            
            state.user = action.payload.user,
            state.isAuthenticate = true,
            state.token = action.payload.accesssToken,
            state.logIn = true
        })
        .addMatcher(authConfig.endpoints.login.matchRejected, (state, action) => {
            console.log("Login reject",action);
            
            state.user = {},
            state.isAuthenticate = false,
            state.logIn = false,
            state.token = ''
        })

        //renewToken
        .addMatcher(authConfig.endpoints.reNewToken.matchFulfilled, (state, action) => {
            
            console.log('renew Token success', action)

            state.user = action.payload.user,
            state.isAuthenticate = true,
            state.token = action.payload.accesssToken,
            state.logIn = true
        })
        .addMatcher(authConfig.endpoints.reNewToken.matchRejected, (state, action) => {
            console.log("renew Token failed",action);

            state.user = {},
            state.isAuthenticate = false,
            state.logIn = false,
            state.token = ''
        })
    }
})


export const {setCredentials} = authSlice.actions

export default authSlice.reducer