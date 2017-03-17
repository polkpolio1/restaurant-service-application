import React, { PropTypes } from 'react'
import { Link } from "react-router"

const CategoryiesListItem = ({ type }) => (
  <li>
    <p><b>Type:</b></p>
    <Link activeClassName="active" to={ "/menu/"+ type }>{ type }</Link>
  </li>
)

CategoryiesListItem.propTypes = {
  type: PropTypes.string.isRequired,
}

export default CategoryiesListItem