import { combineReducers } from 'redux'
import * as types from '../constants/actionTypes'

const initialState = {
  byId: {},
  detailsById: {}
}

const detailsById = (state = {}, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      let array = [...Array(action.dish.params.length)]
      return {
        ...state,
        [action.dish.id]: state[action.dish.id] 
        ? state[action.dish.id].map((quantity, size) => size == action.details.size ? action.details.quantity + quantity : quantity)
        : array.map((cur, size) => size == action.details.size ? action.details.quantity : 0)
      }
    default:
      return state
  }
}

const byId = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      return {
        ...state,
        [action.dish.id]: action.dish
      }
    default:
      return state
  }
}

export default combineReducers({
  detailsById,
  byId
})