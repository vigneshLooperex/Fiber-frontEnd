import { createSlice } from "@reduxjs/toolkit";
import { authConfig } from "../service/authApi";
import { message } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { stat } from "fs";

interface initialStateType {
    token: string,
    user: object,
    isAuthenticate: boolean,
    logIn: boolean
}

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
            // console.log(state, action);
            state.user = action.payload.user,
            state.token = action.payload.token,
            state.isAuthenticate = action.payload.isAuthenticate,
            state.logIn = action.payload.logIn
        }
    },
    extraReducers: (builder) => {
        builder
        .addMatcher(authConfig.endpoints.login.matchFulfilled, (state, action) => {
            // console.log('login', action);

            localStorage.setItem('refreshToken', action.payload.refreshToken)
            message.success('Login Successfull')
            
            state.user = action.payload.user,
            state.isAuthenticate = true,
            state.token = action.payload.accesssToken,
            state.logIn = true
        })
        .addMatcher(authConfig.endpoints.login.matchRejected, (state, action) => {
            console.log("Login reject",action);
            message.error('Login Failed')
            
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

            localStorage.removeItem('refreshToken')
            console.log("renew Token failed",action);
            // message.error('Login Failed')

            state.user = {},
            state.isAuthenticate = false,
            state.logIn = false,
            state.token = ''
        })
    }
})


export const {setCredentials} = authSlice.actions

export default authSlice.reducer

export const useAuth = () => {
    const user = useSelector((state: RootState) => state.auth.user)
    const token = useSelector((state: RootState) => state.auth.token)
    const auth = useSelector((state: RootState) => state.auth)
    return {user, token, auth}
}


// how to see status code in redux toolkit