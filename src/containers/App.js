import React from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const App = (props) => {
  return (
	<div className="centered">
	  <Header/>
	  {props.children}
	  <Footer/>
	</div>
  )
}

export default App
