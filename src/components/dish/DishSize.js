import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import classnames from 'classnames'

const DishSize = ({ params, category, size, setSize }) => {

  const switchText = (param) => {
    switch(category){
      case "pizzas":
        return `Ø ${param.diametr} / ${param.weight} g /`
      case "drinks":
        return `${param.weight} l /`
      case "sandwiches":
        return `${param.weight} g /`
      default:
        return null
    }
  }

  const price = params.map(( param, index, arr ) => {
    let labelClass = classnames({
      "btn btn-outline-success d-block": true,
      "active" : size == index
    });
    return (
      <label key={index} className={labelClass}>
        <input className="hidden-xs-up" type="radio" value={index}/> 
        <span>{switchText(param)}</span>
        <span> {param.price} grn</span>
      </label>
    )
  })

  return (
    <div className="my-3" onChange={setSize}>
      <h6>Select size:</h6>
      {price}
    </div>
  )

}

export default DishSize