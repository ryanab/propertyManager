import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Home, TenantHome } from './components/layout'
import { Provider } from 'react-redux'
import store from './stores'

//removed Home component while I work on TenantHome
const app = (
    <Provider store={ store.configureStore() }>
        <div>
          <TenantHome />
        </div>
    </Provider >
)

ReactDOM.render(app, document.getElementById('root'))