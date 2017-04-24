import React from 'react'
import { connect } from 'react-redux'

import { fetchDishes } from '../actions/menuActions'

import DishList from '../components/menu/DishList'
import NotFound from '../components/errors/NotFound'

class CategoryContainer extends React.Component {

  componentDidMount() {
    const { category } = this.props;
    this.props.dispatch(fetchDishes(category))
  }

  render() {
    const dishes = this.props.dishes
    return <DishList dishes={dishes}/>
  }
}

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes.dishes
  }
}

export default connect(
  mapStateToProps
)(CategoryContainer)
