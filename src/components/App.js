import React, { PropTypes } from 'react'
import VisibleDishList from './catalog/VisibleDishList'

const App = (props) => {
  return (
	<div className="centered">
	  <header>Header</header>
	  {props.children}
	  <footer>Footer</footer>
	</div>
  )
}

export default App
