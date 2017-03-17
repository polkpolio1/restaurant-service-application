import React, { PropTypes } from 'react'
import CategoriesListItem from './CategoriesListItem'

const CategoriesList = ({ types }) => (
  <ul>
  	{types.map((type, index) => 
  	  <CategoriesListItem 
  	  	key={index}
  	    type={type}
  	  />
  	)}
  </ul>
)

CategoriesList.propTypes = {
  types: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired
}

export default CategoriesList