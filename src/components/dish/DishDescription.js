import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const DishDescription = ({ name, category, components }) => {
  
  return (
    <div>
      <h1 className="pb-3 border-bottom-1">{ name }</h1>
      <p className="mb-0"><b>Category: </b><Link to={ "/menu/" + category }>{ category }</Link></p>
      <p className="mb-0 pb-2 border-bottom-1"><b>Components: </b>{ components }</p>
    </div>
  )

}

export default DishDescription