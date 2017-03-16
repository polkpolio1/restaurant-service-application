import * as types from '../constants/ActionTypes'

export function sortDishes(sortType) {
  return { type: types.SET_DISHES_SORT, sortType }
}