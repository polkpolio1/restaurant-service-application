import React, { PropTypes } from 'react'
import { Link } from "react-router"

const CategoryiesListItem = ({ name }) => (
  <li>
    <p><b>Category:</b></p>
    <Link activeClassName="active" to={ "/menu/"+ name }>{ name }</Link>
  </li>
)

CategoryiesListItem.propTypes = {
  name: PropTypes.string.isRequired
}

export default CategoryiesListItem