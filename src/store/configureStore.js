import { applyMiddleware, createStore } from 'redux'
import rootReducer from '../reducers'

import logger from "redux-logger"
import thunk from "redux-thunk"

export default function configureStore(initialState) {

  const middleware = applyMiddleware(thunk, logger())

  // const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  const store = createStore(rootReducer, initialState, middleware)
  
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
