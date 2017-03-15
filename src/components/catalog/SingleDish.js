import React, { PropTypes } from 'react'

let SingleDish = ({ dish }) => {

  const { name, type } = dish;

  return (
  	<div>
  	  <h1>{name}</h1>
  	  <h2><i>{type}</i></h2>
  	</div>
  )

}

SingleDish.PropTypes = {
  dish: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  }).isRequired
}

export default SingleDish