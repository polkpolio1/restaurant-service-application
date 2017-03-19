import React from 'react'
import { connect } from 'react-redux'

import CategoriesContainer from './CategoriesContainer'
import CategoryContainer from './CategoryContainer'

class MenuContainer extends React.Component {

  render() {
    const { category } = this.props.params;
    console.log(category)
    return category ? <CategoryContainer category={category}/> : <CategoriesContainer />
  }
}

export default MenuContainer