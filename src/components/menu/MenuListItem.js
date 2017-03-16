import React, { PropTypes } from 'react'
import { Link } from "react-router"

const MenuListItem = ({ type }) => (
  <li>
    <p><b>Type:</b></p>
    <Link activeClassName="active" to={ "/menu/"+ type }>{ type }</Link>
  </li>
)

MenuListItem.propTypes = {
  type: PropTypes.string.isRequired,
}

export default MenuListItem