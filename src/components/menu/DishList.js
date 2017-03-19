import React, { PropTypes } from 'react'
import DishListItem from './DishListItem'

const DishList = ({ dishes }) => (
  <ul>
  	{dishes.map(dish => 
  	  <DishListItem 
  	  	key={dish.id}
  	  	id={dish.id}
  	    name={dish.name}
  	    category={dish.category}
        price={dish.price}
  	  />
  	)}
  </ul>
)

DishList.propTypes = {
  dishes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired).isRequired
}

export default DishList