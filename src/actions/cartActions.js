import * as types from '../constants/actionTypes'

export const addToCart = (dish, details) => {
	console.log(dish)
	console.log(details)
  return {
  	type: types.ADD_TO_CART,
  	dish,
    details
  }
}

export const REMOVE_FROM_CART = () => {
  return {
  	type: types.END_LOADING
  }
}

export const CHANGE_PRODUCT_CART_QUANTITY = () => {
  return {
  	type: types.END_LOADING
  }
}

export const CHANGE_PRODUCT_CART_PARAM = () => {
  return {
  	type: types.END_LOADING
  }
}