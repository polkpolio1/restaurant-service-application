import React, { PropTypes } from 'react'
import Dish from './Dish'

const DishList = ({ dishes }) => (
  <ul>
  	{dishes.map(dish => 
  	  <Dish 
  	  	key={dish.id}
  	    name={dish.name}
  	    type={dish.type}
  	  />
  	)}
  </ul>
)

DishList.PropTypes = {
  dishes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default DishList