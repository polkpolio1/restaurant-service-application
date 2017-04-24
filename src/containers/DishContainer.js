import React from 'react'
import { connect } from 'react-redux'

import { fetchDish } from '../actions/menuActions'
import { addToCart } from '../actions/cartActions'

import Dish from '../components/dish/Dish'


class DishContainer extends React.Component {

  componentDidMount() {
    const { dishId } = this.props.params
    this.props.dispatch(fetchDish(dishId))
  }

  addToCartHandle(dish, details) {
    this.props.dispatch(addToCart(dish, details))
  }

  render() {

    const { dishId } = this.props.params
    const dish = this.props.dish

    if(!dish || dishId != dish.id )
      return null

    return (
      <Dish dish={dish} addToCartHandle={this.addToCartHandle.bind(this, dish)}/>
    )

  }
}

const mapStateToProps = (state) => {
  return {
    dish: state.dish.dish
  }
}

export default connect(
  mapStateToProps
)(DishContainer)