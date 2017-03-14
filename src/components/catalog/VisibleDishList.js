import { connect } from 'react-redux'
import DishList from './DishList'

const mapStateToProps = (state, {params}) => {
	console.log(params)
  return {
    dishes: state.dishes.dishes
  }
}

const VisibleDishList = connect(
  mapStateToProps
)(DishList)

export default VisibleDishList