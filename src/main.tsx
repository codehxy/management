import React from 'react'
import ReactDOM from 'react-dom/client'
//样式的初始化
import "reset-css"

//UI框架

//全局样式
import "@/assets/styles/global.scss"
//组件样式
import App from './App'
// import BaseRouter from './router/index'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>

    <BrowserRouter>
      <App />
    </BrowserRouter>

  </Provider>
)
