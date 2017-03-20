import React, { PropTypes } from 'react'
import { Link } from "react-router"

let SingleDish = ({ dish }) => {

  const { name, category, price } = dish;

  return (
    <div className="col-sm-12">
      <div className="card">
        <div className="card-block">

          <h1 className="card-title">{ name }</h1>

          <p className="card-text">Category: <b><Link to={ "/menu/" + category }>{ category }</Link></b></p>
          
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

          <p className="card-text">Price: <b>{ price }</b></p>

          <Link className="btn btn-primary" to={ "/" }>Add to</Link>

      </div>
      </div>
    </div>
  )

}
SingleDish.propTypes = {
  dish: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
}

export default SingleDish