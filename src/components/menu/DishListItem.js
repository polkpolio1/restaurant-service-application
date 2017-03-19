import React, { PropTypes } from 'react'
import { Link } from "react-router"

const DishListItem = ({ name, category, id, price }) => (
  <li>
    <Link activeClassName="active" to={ "/dishes/" + id }>{ name }</Link>
    <p><b>category: </b>{category}</p>
    <p><b>Price: </b>{price}</p>
  </li>
)

DishListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

export default DishListItem