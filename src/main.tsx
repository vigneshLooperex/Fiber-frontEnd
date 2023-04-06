import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { ConfigProvider } from 'antd'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import App from './App'


const custom = {
  token: {
    fontSize: 15
  },
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <Provider store={store}>
        <App/>
      </Provider>
  </React.StrictMode>,
)
