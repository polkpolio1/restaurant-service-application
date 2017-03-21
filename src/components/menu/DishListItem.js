import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const DishListItem = ({ dish }) => (
  <div className="col-sm-4 mb-3">
    <div className="card">
      <img className="img-responsive card-img-top" src={ dish.url } />
      <div className="card-block">
        <h3 className="card-title">{ dish.name }</h3>
        <p className="card-text"><b>Components: </b> { dish.components }</p>
        <Link className="btn btn-primary" to={ "/dishes/"+ dish.id }>Go to</Link>
    </div>
  </div>
  </div>
)

DishListItem.propTypes = {
  dish: PropTypes.shape({
  	id: PropTypes.number.isRequired,
   	name: PropTypes.string.isRequired,
    components: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    params: PropTypes.array.isRequired
  })
}

export default DishListItem