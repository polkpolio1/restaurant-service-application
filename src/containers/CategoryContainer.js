import React from 'react'
import { connect } from 'react-redux'

import { fetchDishes } from '../actions/menuActions'

import DishList from '../components/menu/DishList'
import NotFound from '../components/errors/NotFound'

class CategoryContainer extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchDishes(this.props.category))
  }

  render() {
    const { dishes, error } = this.props.state;
    return <DishList dishes={dishes}/>
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.dishes
  }
}

CategoryContainer = connect(mapStateToProps)(CategoryContainer)

export default CategoryContainer