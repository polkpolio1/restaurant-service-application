import React, { PropTypes } from 'react'
import { Link } from "react-router"

const DishListItem = ({ dish }) => (
  <li>
    <Link activeClassName="active" to={ "/dishes/" + dish.id }>{ dish.name }</Link>
    <p><b>category: </b>{dish.category}</p>
    <p><b>Price: </b>{dish.price}</p>
  </li>
)

DishListItem.propTypes = {
  dish: PropTypes.shape({
  	id: PropTypes.number.isRequired,
   	name: PropTypes.string.isRequired,
  	category: PropTypes.string.isRequired,
  	price: PropTypes.number.isRequired
  })
}

export default DishListItem