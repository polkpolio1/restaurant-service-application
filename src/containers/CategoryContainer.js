import React from 'react'
import { connect } from 'react-redux'

import { fetchDishes } from '../actions/menuActions'

import DishList from '../components/menu/DishList'
// import NotFound from '../components/errors/NotFound'

class CategoryContainer extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchDishes(this.props.category))
  }

  render() {
    const { dishes, fetched } = this.props.state;
    if(!fetched){
      return <h1>loading</h1>
    }
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