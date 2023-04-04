import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { route } from '@/router/path'
import { ConfigProvider } from 'antd'
import { ConfigProviderProps } from 'antd/es/config-provider'
import { Provider } from 'react-redux'
import { store } from './redux/store'


const custom = {
  token: {
    fontSize: 15
  },
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider theme={custom}>
      <Provider store={store}>
        <RouterProvider router={route} />
      </Provider>
    </ConfigProvider>
  </React.StrictMode>,
)
