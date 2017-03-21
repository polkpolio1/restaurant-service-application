import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import DishPrice from './DishPrice'


const Dish = ({ dish }) => {

  const { name, category, params, components, url } = dish;

  return (
    <div className="row mx-0">

      <div className="col-md-4 px-0">
        <img className="img-responsive" src={ url } />
      </div>

      <div className="col-md-8 px-3">
        <h1>{ name }</h1>
        <hr />
        <p className="mb-0"><b>Category: </b><Link to={ "/menu/" + category }>{ category }</Link></p>
        <p className="mb-0"><b>Components: </b>{ components }</p>
        <hr />

        <DishPrice 
          params={params}
          category={category}
        />

        <hr />
        <Link className="btn btn-primary" to={ "/" }>Add to basket</Link>
      </div>
      
    </div>
  )

}

Dish.propTypes = {
  dish: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    components: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    params: PropTypes.array.isRequired
  }).isRequired
}

export default Dish