import React from 'react';
import {connect} from 'react-redux';
import {startLoading, endLoading} from '../actions/preloaderActions';

import Preloader from '../components/layout/Preloader'

let PreloaderContainer = (props) => {
  const { preloader, children } = props;

  var styleOne = !preloader ? {display: 'none'} : {};
  var styleTwo = preloader ? {display: 'none'} : {};

  return (
    <div style={{width: '100%'}}>
      <div style={{width: '100%', ...styleOne}}>
        <Preloader />
      </div>
      <div style={{width: '100%', ...styleTwo}}>
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

// var LoadingComponent = function(ComposedComponent, Loader, loadingIdArray) {

//   var LoadingComponentClass = React.createClass({
//     componentWillMount() {
//       // var loadingId = uuid.v4()
//       var loadingId = new Date().getTime()
//       this.loadingId = loadingId;
//       this.loadingIdArray = loadingIdArray ? [loadingId, ...loadingIdArray] : [loadingId];
//     },

//     handleStartLoading(loadingText) {
//       this.props.dispatch(startLoading(this.loadingId, loadingText));
//     },

//     handleEndLoading(loadId) {
//       this.props.dispatch(endLoading(loadId ? loadId : this.loadingId));
//     },

//     render() {
//       var {loading} = this.props;
//       var {loadingId, loadingIdArray} = this;

//       var passToChild = {
//         startLoading: this.handleStartLoading,
//         endLoading: this.handleEndLoading,
//         loadingIdArray,
//         loadingId
//       }

//       var loadingObject;
//       // loadingObject will be null or, if loading, set to an object structured:
//       //   { text, isLoading }
//       // Specifically from the last applicable "loading" state set.
//       // We need both of these pieces of information later.
//       loadingIdArray.forEach((id) => {
//         var loadObj = loading[id];
//         if (loadObj && loadObj.isLoading) {
//           loadingObject = loadObj;
//         }
//       });

//       var isLoading = false;
//       if (loadingObject && loadingObject.isLoading) {
//         isLoading = true;
//       }

//       var styleOne = !isLoading ? {display: 'none'} : {};
//       var styleTwo = isLoading ? {display: 'none'} : {};

//       return (
//         <div style={{width: '100%'}}>
//           <div style={{width: '100%', ...styleOne}}>
//             <Loader loadingText={loadingObject ? loadingObject.text : "Loading..."}/>
//           </div>
//           <div style={{width: '100%', ...styleTwo}}>
//             <ComposedComponent {...this.props} {...passToChild}/>
//           </div>
//         </div>
//       )
//     }
//   });

//   function mapStateToProps(state) {
//     return { loading: state.preloader };
//   }

//   return connect(mapStateToProps)(LoadingComponentClass);
// }

// export default LoadingComponent;