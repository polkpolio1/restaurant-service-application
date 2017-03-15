import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import DishList from './DishList'
import SingleDish from './SingleDish'
import NotFound from '../errors/NotFound'

let VisibleDishList = ( { state, params } ) => {

  const { dishId } = params;

  if(dishId){
  	const dish = state.filter((dish) => dish.id == dishId )[0];
  	return dish ? <SingleDish dish={dish}/> : <NotFound />
  }

  return (
    <DishList dishes={state}/>
  )
}

const mapStateToProps = (state) => {
  return {
    state: state.dishes.arr
  }
}

VisibleDishList = connect(mapStateToProps)(VisibleDishList)

export default VisibleDishList