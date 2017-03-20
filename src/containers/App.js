import React from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'

import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import PreloaderContainer from './PreloaderContainer'

const App = (props) => (
  <div className="container">
    <Header/>
    <PreloaderContainer {...props}/>
    <Footer/>
  </div>
)


export default App

