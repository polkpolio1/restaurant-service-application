import React from 'react'
import { connect } from 'react-redux'

import { fetchCategories } from '../actions/menuActions'

import CategoriesList from '../components/menu/CategoriesList'

class CategoriesContainer extends React.Component {

  componentDidMount() {
    if( !this.props.categories.length )
      this.props.dispatch(fetchCategories())
  }

  render() {
    const categories = this.props.categories;
    return <CategoriesList categories={categories}/>
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories.categories
  }
}

export default connect(
  mapStateToProps
)(CategoriesContainer)
