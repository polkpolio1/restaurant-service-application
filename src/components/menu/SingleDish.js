import React, { PropTypes } from 'react'
import { Link } from "react-router"

let SingleDish = ({ dish }) => {

  const { name, category, price } = dish;

  return (
  	<div>
  	  <h1>{name}</h1>
      <Link activeClassName="active" to={ "/menu/" + category }>{ category }</Link>
      <p>Price: <b>{ price }</b></p>
  	</div>
  )

}
SingleDish.propTypes = {
  dish: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
}

export default SingleDish