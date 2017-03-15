import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory  } from "react-router"
import { Provider } from 'react-redux'

import App from './src/components/App'
import VisibleDishList from './src/components/catalog/VisibleDishList'
import configureStore from './src/store/configureStore'
import './src/styles/index.scss'

if (module.hot) {
  module.hot.accept();
}	

const store = configureStore()

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={VisibleDishList}></IndexRoute>
    	<Route path="/dishes(/:dishId)" component={VisibleDishList}></Route>
      </Route>
  	</Router>
  </Provider>,
  document.getElementById('root')
)
