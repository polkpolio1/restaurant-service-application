import * as types from '../constants/actionTypes'

export default function reducer(state={
    categories: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

  switch (action.type) {
    case types.FETCH_CATEGORIES_REQUEST:
      return {
        ...state,
        fetching: true
      }
    case types.FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    case types.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        fetching: false,
        fetched: true,
        categories: action.payload,
      }
  }

  return state
}
