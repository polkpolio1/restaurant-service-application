import React, { PropTypes } from 'react'
import DishListItem from './DishListItem'

const DishList = ({ dishes }) => (
  <div className="row">
  	{dishes.map(dish => 
  	  <DishListItem 
        key={dish.id}
  	  	dish={dish}
  	  />
  	)}
  </div>
)

DishList.propTypes = {
  dishes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    components: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    params: PropTypes.array.isRequired
  }).isRequired).isRequired
}

export default DishList