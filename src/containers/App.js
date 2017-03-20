import React from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'

import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import PreloaderContainer from './PreloaderContainer'

const App = (props) => {
	console.log(props)
  return (
	<div className="centered">
	  <Header/>
	  <PreloaderContainer {...props}/>
	  <Footer/>
	</div>
  )
}

export default App

