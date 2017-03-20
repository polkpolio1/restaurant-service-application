import React from 'react'
import { connect } from 'react-redux'

import { fetchCategories } from '../actions/menuActions'

import CategoriesList from '../components/menu/CategoriesList'
// import NotFound from '../components/errors/NotFound'

class CategoriesContainer extends React.Component {

  componentWillMount() {

    this.props.dispatch(fetchCategories())
  }

  render() {
    const { categories, fetched } = this.props.state;
    // if(!fetched){
    //   return <h1>loading</h1>
    // }
    return <CategoriesList categories={categories}/>
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.categories
  }
}

CategoriesContainer = connect(mapStateToProps)(CategoriesContainer)

export default CategoriesContainer