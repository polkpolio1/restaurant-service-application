import React, { PropTypes } from 'react'
import { Link } from "react-router"

const DishListItem = ({ name, type, id, price }) => (
  <li>
    <Link activeClassName="active" to={ "/menu/" + type + "/" + id }>{ name }</Link>
    <p><b>Type: </b>{type}</p>
    <p><b>Price: </b>{price}</p>
  </li>
)

DishListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

export default DishListItem