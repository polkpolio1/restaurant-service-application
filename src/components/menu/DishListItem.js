import React, { PropTypes } from 'react'
import { Link } from "react-router"

const DishListItem = ({ dish }) => (
  <div className="col-sm-4">
    <div className="card">
      <div className="card-block">
        <h3 class="card-title">{ dish.name }</h3>
        <p className="card-text"><b>category: </b>{dish.category}</p>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <Link className="btn btn-primary" to={ "/dishes/"+ dish.id }>Go to</Link>
    </div>
  </div>
  </div>
)

DishListItem.propTypes = {
  dish: PropTypes.shape({
  	id: PropTypes.number.isRequired,
   	name: PropTypes.string.isRequired,
  	category: PropTypes.string.isRequired,
  	price: PropTypes.number.isRequired
  })
}

export default DishListItem