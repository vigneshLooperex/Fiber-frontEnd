import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { route } from '@/router/path'
import { ConfigProvider } from 'antd'
import { ConfigProviderProps } from 'antd/es/config-provider'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider theme={{
      token: {
        fontSize: 15
      },
    }}>
      <RouterProvider router={route} />
    </ConfigProvider>
  </React.StrictMode>,
)
