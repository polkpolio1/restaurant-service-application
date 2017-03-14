import React, { PropTypes } from 'react'
import VisibleDishList from './catalog/VisibleDishList'

const App = ({ children }) => {
  return (
	<div className="centered">
	  <header>Header</header>
	  {children}
	  <footer>Footer</footer>
	</div>
  )
}

export default App
