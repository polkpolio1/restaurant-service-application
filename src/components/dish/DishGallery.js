import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import classnames from 'classnames'


const DishPrice = ({ url }) => (
  <div className="col-md-4 px-0">
    <img className="img-responsive" src={ url } />
  </div>
)

export default DishPrice