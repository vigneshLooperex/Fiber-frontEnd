import React, {useEffect} from 'react'
import { ConfigProvider } from 'antd'
import { Provider, useSelector } from 'react-redux'
import { RootState, store } from './redux/store'
import { RouterProvider } from 'react-router-dom'
import { useReNewTokenQuery } from './redux/service/authApi'
import {createBrowserRouter, RouteObject} from 'react-router-dom'
import { account, auth } from './router/path'
import AuthLoader from './components/AuthLoader'
import 'react-toastify/dist/ReactToastify.css';

const custom = {
  token: {
    fontSize: 15
  },
}

export default function App() {

    const {isLoading} = useReNewTokenQuery({})

    const login = useSelector((state:RootState) => state.auth.logIn)
    
  return (
    <ConfigProvider theme={custom}>
      {isLoading ? <AuthLoader /> : <RouterProvider router={createBrowserRouter(login ? account : auth)} />}
    </ConfigProvider>
  )
}