import * as types from '../constants/actionTypes'

export default function reducer(state={
    dish: null,
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

  switch (action.type) {
    case types.FETCH_DISH_REQUEST:
      return {
        ...state,
        fetching: true
      }
    case types.FETCH_DISH_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    case types.FETCH_DISH_SUCCESS:
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: null,
        dish: action.payload,
      }
  }

  return state
}
