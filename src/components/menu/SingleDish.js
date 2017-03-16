import React, { PropTypes } from 'react'
import { Link } from "react-router"

let SingleDish = ({ dish }) => {

  const { name, type, price } = dish;

  return (
  	<div>
  	  <h1>{name}</h1>
      <Link activeClassName="active" to={ "/menu/" + type }>{ type }</Link>
      <p>Price: <b>{ price }</b></p>
  	</div>
  )

}
SingleDish.propTypes = {
  dish: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
}

export default SingleDish