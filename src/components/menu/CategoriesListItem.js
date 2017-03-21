import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const CategoryiesListItem = ({ name }) => (
  <div className="col-sm-4">
  	<div className="card">
  	  <div className="card-block">
  	  	<h3 className="card-title">{ name }</h3>
	    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
	    <Link className="btn btn-primary" to={ "/menu/"+ name }>Go to</Link>
	  </div>
    </div>
  </div>
)

CategoryiesListItem.propTypes = {
  name: PropTypes.string.isRequired
}

export default CategoryiesListItem