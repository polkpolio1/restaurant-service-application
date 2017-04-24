import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory  } from "react-router"
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'

import App from './containers/App'
import MenuContainer from './containers/MenuContainer'
import DishContainer from './containers/DishContainer'
import HomeContainer from './containers/HomeContainer'
import CartContainer from './containers/CartContainer'
import NotFound from './components/errors/NotFound'

import './assets/styles/index.scss'

if (module.hot) {
  module.hot.accept();
}

const store = configureStore()

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={HomeContainer}></IndexRoute>
        <Route path="/menu(/:category)" component={MenuContainer}></Route>
        <Route path="/dishes/:dishId" component={DishContainer}></Route>
        <Route path="/cart" component={CartContainer}></Route>
        <Route path="*" component={NotFound} />
      </Route>
  	</Router>
  </Provider>,
  document.getElementById('root')
)
