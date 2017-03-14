import React, { PropTypes } from 'react'

const Dish = ({ name, type  }) => (
  <li>
    <p><b>Name: </b>{name}</p>
    <p><b>Type: </b>{type}</p>
  </li>
)

Dish.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

export default Dish