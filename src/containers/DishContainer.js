import React from 'react'
import { connect } from 'react-redux'

import { fetchDish } from '../actions/menuActions'

import Dish from '../components/dish/Dish'


class DishContainer extends React.Component {

  componentWillMount() {
    const { dishId } = this.props.params;
    this.props.dispatch(fetchDish(dishId))
  }

  render() {
    const { dish } = this.props.state;

    if(!dish)
      return null

    return <Dish dish={dish} />

  }
}

const mapStateToProps = (state) => {
  return {
    state: state.dish
  }
}

DishContainer = connect(mapStateToProps)(DishContainer)

export default DishContainer