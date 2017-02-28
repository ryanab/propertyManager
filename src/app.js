import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Home, TenantHome } from './components/layout'
import { ChatHistory, TenantLedger, TenantProfile } from './components/containers'
import { Provider } from 'react-redux'
import store from './stores'
import {Route, Router, IndexRoute, browserHistory, Redirect } from 'react-router'

//removed Home component while I work on TenantHome
const app = (
  <Provider store={ store.configureStore() }>
    <Router history={browserHistory}>
        <Route path="/" component={Home} />
        <Route component={TenantHome}>
          <Route path="messages" component={ChatHistory} />
          <Route path="transactions" component={TenantLedger} />
          <Route path="profile" component={TenantProfile} />          
        </Route>
    </Router>
  </Provider >
)

ReactDOM.render(app, document.getElementById('root'))