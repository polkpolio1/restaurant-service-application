import React from 'react'
import { connect } from 'react-redux'

import MenuList from '../components/menu/MenuList'
import DishList from '../components/menu/DishList'
import SingleDish from '../components/menu/SingleDish'
import NotFound from '../components/errors/NotFound'

let MenuContainer = ({ state, params }) => {

  const { dishId, dishType } = params

  if(dishId){

    const dish = state.filter((dish) => dish.id == dishId )[0]
    return dish ? <SingleDish dish={dish} /> : <NotFound />

  }else if(dishType){

    const dishes = state.filter((dish) => dish.type == dishType )
    return <DishList dishes={dishes} />

  }else{

    const types = state.reduce((types, obj) => {
      return !types.includes(obj.type) ? types.concat(obj.type) : types;
    }, [])
    return <MenuList types={types} />

  }
}

const mapStateToProps = (state) => {
  return {
    state: state.dishes.arr
  }
}

MenuContainer = connect(mapStateToProps)(MenuContainer)

export default MenuContainer