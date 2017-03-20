import React, { PropTypes } from 'react'
import CategoriesListItem from './CategoriesListItem'

const CategoriesList = ({ categories }) => (
  <div className="row">
  	{categories.map( category => 
  	  <CategoriesListItem 
  	  	key={category.id}
  	    name={category.name}
  	  />
  	)}
  </div>
)

CategoriesList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default CategoriesList