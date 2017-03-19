import * as types from '../constants/actionTypes'

export default function reducer(state={
    dishes: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

  switch (action.type) {
    case types.FETCH_DISHES_REQUEST:
      return {
        ...state,
        fetching: true
      }
    case types.FETCH_DISHES_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    case types.FETCH_DISHES_SUCCESS:
      return {
        ...state,
        fetching: false,
        fetched: true,
        dishes: action.payload,
      }
  }

  return state
}
