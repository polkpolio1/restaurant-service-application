import React from 'react'
import { Link } from "react-router"

const CartPopUp = ({ togglePopUp }) => (
  <div className="modal"> 
  	<div className="modal-dialog">
	    <div className="modal-content">
	      <div className="modal-header">
	        <h5 className="modal-title">What do you prefer to do next?</h5>
	        <button type="button" className="close" onClick={togglePopUp}>
	          <span>&times;</span>
	        </button>
	      </div>
	      <div className="modal-body">
	      	<p>Your product was added to cart successfully.</p>
	      	<p className="mb-0">Thanks you!</p>
	      </div>
	      <div className="border-top-1 p-3">
	        <Link className="nav-link p-0 mb-1" to="/cart">
	      		<button type="button" className="btn btn-primary d-block col-12">Go to cart</button>
	      	</Link>
	        <button type="button" className="btn btn-primary d-block col-12" onClick={togglePopUp}>Continue shopping</button>
	      </div>
	    </div>
	  </div>
  </div>
)

export default CartPopUp
