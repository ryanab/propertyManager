import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Home, TenantHome } from './components/layout'
import { Provider } from 'react-redux'
import store from './stores'
import {Route, Router, IndexRoute, browserHistory, Redirect } from 'react-router'

//removed Home component while I work on TenantHome
const app = (
  <Provider store={ store.configureStore() }>
    <Router history={browserHistory}>
        <Route path="/" component={TenantHome} />
        <Route path="/home" component={TenantHome} />
    </Router>
  </Provider >
)

ReactDOM.render(app, document.getElementById('root'))