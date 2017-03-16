import React, { PropTypes } from 'react'
import MenuListItem from './MenuListItem'

const MenuList = ({ types }) => (
  <ul>
  	{types.map((type, index) => 
  	  <MenuListItem 
  	  	key={index}
  	    type={type}
  	  />
  	)}
  </ul>
)

MenuList.propTypes = {
  types: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired
}

export default MenuList