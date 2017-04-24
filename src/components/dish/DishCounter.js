import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import classnames from 'classnames'


const DishPrice = ({ quantity, incrementQuantity, decrementQuantity, inputQuantity }) => {
  let alarmInvalid = classnames({
    "hidden-xs-up": quantity <= 10 && quantity > 0
  })
  return (
    <div className="my-3" data-toggle="buttons">
      <h6>Select quantity:</h6>
      <div className="input-group">
        <span className="input-group-btn" onClick={decrementQuantity} disabled>
          <button className="btn btn-secondary">-</button>
        </span>
        <input className="form-control text-center" value={quantity} onChange={inputQuantity} />
        <span className="input-group-btn" onClick={incrementQuantity}>
          <button className="btn btn-secondary">+</button>
        </span>
      </div>
      <div className={"alert alert-danger mt-3 " + alarmInvalid} role="alert">
        <strong>Oh snap!</strong> Quantity must be between zero and ten.
      </div>
    </div>
  )

}

export default DishPrice