import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import classnames from 'classnames'

const DishPrice = ({ params, category }) => {

  const switchText = (param) => {
    switch(category){
      case "pizzas":
        return <span>Ø { param.diametr } / { param.weight } g / </span>
      case "drinks":
        return <span> { param.weight } l / </span>
      case "sandwiches":
        return <span> { param.weight } g / </span>
      default:
        return null
    }
  }

  const price = params.map(( param, index, arr ) => {
    let labelClass = classnames({
      "btn btn-outline-success d-block": true,
      "active" : arr.length == ++index
    });
    return (
      <label key={ index } className={ labelClass }>
        <input className="d-inline-block" type="radio" name="options" id={ "option"+ index }/> 
        { switchText(param) }
        <span>{ param.price } grn</span>
      </label>
    )
  })

  return (
    <div className="my-3" data-toggle="buttons">
      <p>Choose size:</p>
      {price}
    </div>
  )

}

export default DishPrice