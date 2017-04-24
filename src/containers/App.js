import React from 'react'
import { connect } from 'react-redux'

import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import PreloaderContainer from './PreloaderContainer'

export default class App extends React.Component {	
  render() {
  	return <div className="container">
      <Header/>
      <PreloaderContainer {...this.props}/>
      <Footer/>
	</div>
  }
}

