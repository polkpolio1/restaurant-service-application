import React, { PropTypes } from 'react'
import classnames from 'classnames'

import DishGallery from './DishGallery'
import DishSize from './DishSize'
import DishCounter from './DishCounter'
import DishDescription from './DishDescription'
import CartPopUp from '../cart/CartPopUp'

class Dish extends React.Component {

  constructor(props){
    super(props)

    this.incrementQuantity = this.incrementQuantity.bind(this)
    this.decrementQuantity = this.decrementQuantity.bind(this)
    this.inputQuantity = this.inputQuantity.bind(this)
    this.setSize = this.setSize.bind(this)
    this.formIsValid = this.formIsValid.bind(this)
    this.addToCart = this.addToCart.bind(this)
    this.togglePopUp = this.togglePopUp.bind(this)

    this.state = {
      quantity: 1,
      size: this.props.dish.params.length-1,
      formInvalid: false,
      popUpVisibility: false
    }
  }  

  formIsValid(){
    if( this.state.quantity <= 0  || this.state.quantity > 10 ){
      this.setState({
        formInvalid: true
      })
    }else{
      this.setState({
        formInvalid: false
      })
    }
  }

  // counter's functions
  incrementQuantity(){
    this.setState({
      quantity: ++this.state.quantity
    })
    this.formIsValid()
  }

  decrementQuantity(){
    this.setState({
      quantity: --this.state.quantity
    })
    this.formIsValid()
  }

  inputQuantity(event){
    console.log(event)
    this.setState({
      quantity: Number(event.target.value) || ""
    })
    // check this
    setTimeout(()=>{
      this.formIsValid()
    })
  }

  // toggle popUpCart visibility
  togglePopUp(){
    this.setState({
      popUpVisibility: !this.state.popUpVisibility
    })
  }

  // params functions
  setSize(event){
    this.setState({
      size: Number(event.target.value)
    })
  }

  // addToCart
  addToCart(){
    if(this.state.formInvalid)
      return false

    let details = {
      quantity: this.state.quantity,
      size: this.state.size
    }

    this.props.addToCartHandle(details)
    this.togglePopUp()
  }

  render(){

    const { name, category, params, components, url } = this.props.dish

    let formSubmitDisabled = classnames({
      "btn btn-primary": true,
      "disabled": this.state.formInvalid
    })

    var popUpCart = this.state.popUpVisibility ? <CartPopUp togglePopUp={this.togglePopUp} /> : null

    return (
      <div className="row mx-0">

        {popUpCart}

        <DishGallery url={url} />

        <div className="col-md-8 px-3">

          <DishDescription 
            name={name}
            category={category}
            components={components}
          />
          <DishSize
            className="pb-2 border-bottom-1" 
            params={params}
            category={category}
            size={this.state.size}
            setSize={this.setSize}
          />
          <DishCounter 
            quantity={this.state.quantity}
            incrementQuantity={this.incrementQuantity}
            decrementQuantity={this.decrementQuantity}
            inputQuantity={this.inputQuantity}
          />
          <button className={formSubmitDisabled} onClick={this.addToCart}>Add to cart</button>

        </div>
      </div>
    )

  }

}

Dish.propTypes = {
  dish: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    components: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    params: PropTypes.array.isRequired
  }).isRequired
}

export default Dish