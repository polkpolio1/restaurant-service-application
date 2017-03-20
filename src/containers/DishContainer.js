import React from 'react'
import { connect } from 'react-redux'

import { fetchDish } from '../actions/menuActions'

import SingleDish from '../components/menu/SingleDish'
// import NotFound from '../components/errors/NotFound'


class DishContainer extends React.Component {

  componentWillMount() {
    const { dishId } = this.props.params;
    this.props.dispatch(fetchDish(dishId))
  }

  render() {
    const { dish, fetched } = this.props.state;
    if(!fetched){
      return <h1>loading</h1>
    }
    return <SingleDish dish={dish}/>
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.dish
  }
}

DishContainer = connect(mapStateToProps)(DishContainer)

export default DishContainer