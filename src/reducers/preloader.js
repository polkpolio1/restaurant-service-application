import * as types from '../constants/actionTypes'

export default function reducer(state = false, action) {

  switch (action.type) {
    case types.START_LOADING:
      return true
    case types.END_LOADING:
      return false
  }

  return state
}
