import React from 'react';
import {connect} from 'react-redux';
import {startLoading, endLoading} from '../actions/preloaderActions';

import Preloader from '../components/layout/Preloader'

let PreloaderContainer = (props) => {
  const { preloader, children } = props;

  var styleOne = !preloader ? {display: 'none'} : {};
  var styleTwo = preloader ? {display: 'none'} : {};

  return (
    <div className="py-3">
      <div style={styleOne}>
        <Preloader />
      </div>
      <div style={styleTwo}>
        {children}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    preloader: state.preloader
  }
}  

PreloaderContainer = connect(mapStateToProps)(PreloaderContainer)

export default PreloaderContainer