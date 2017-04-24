import axios from "axios";

import * as types from '../constants/actionTypes'
import { startLoading, endLoading } from './preloaderActions';


function requestCategories() {
  return {
    type: types.FETCH_CATEGORIES_REQUEST
  }
}

function receiveCategories(categories){
  return {
    type: types.FETCH_CATEGORIES_SUCCESS,
    payload: categories
  }
}

function failureCategories(err){
  return {
    type: types.FETCH_CATEGORIES_FAILURE,
    payload: err
  }
}

export function fetchCategories() {
  return dispatch => {
    dispatch(startLoading())
  	dispatch(requestCategories())
  	return axios.get("http://" + window.location.host + '/api/categories')
      .then((response) => {
        dispatch(receiveCategories(response.data))
        setTimeout(()=>{
          dispatch(endLoading())
        }, 200)
      })
      .catch((err) => {
        dispatch(failureCategories(err))
    })
  }
}

function requestDishes(category) {
  return {
    type: types.FETCH_DISHES_REQUEST,
    category
  }
}

function receiveDishes(dishes){
  return {
    type: types.FETCH_DISHES_SUCCESS,
    payload: dishes
  }
}

function failureDishes(err){
  return {
  	type: types.FETCH_DISHES_FAILURE,
  	payload: err
  }
}

export function fetchDishes(category) {
  return (dispatch) => {
    dispatch(startLoading())
  	dispatch(requestDishes(category))
  	return axios.get("http://" + window.location.host + '/api/categories/' + category)
      .then((response) => {
        dispatch(receiveDishes(response.data))
        setTimeout(()=>{
          dispatch(endLoading())
        }, 200)
      })
      .catch((err) => {
        dispatch(failureDishes(err))
    })
  }
}

function requestDish(id) {
  return {
    type: types.FETCH_DISH_REQUEST,
    id
  }
}

function receiveDish(dish){
  return {
    type: types.FETCH_DISH_SUCCESS,
    payload: dish
  }
}

function failureDish(err){
  return {
    type: types.FETCH_DISH_FAILURE,
    payload: err
  }
}

export function fetchDish(id) {
  return (dispatch) => {
    dispatch(startLoading())
  	dispatch(requestDish(id))
  	return axios.get("http://" + window.location.host + '/api/dishes/' + id)
      .then((response) => {
        dispatch(receiveDish(response.data))
        setTimeout(()=>{
          dispatch(endLoading())
        }, 200)
      })
      .catch((err) => {
        dispatch(failureDish(err))
    })
  }
}