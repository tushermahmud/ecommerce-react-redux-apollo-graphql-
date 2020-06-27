import React from "react";
import {connect} from "react-redux";
import {removeItemFromCart} from "../../redux/cart/cartActions";
import {removeItemFromCheckout} from "../../redux/cart/cartActions";

const CheckoutItemsComponent=(props)=>{
    console.log(props);

    return(
      <div className="checkout-item">
          <div className="image-container">
              <img src={props.cartItem.imageUrl} alt=""/>
          </div>
          <span className="name">{props.cartItem.name}</span>
          <span className="quantity">
              <div className="arrow" onClick={()=>props.clearItemsFromCheckout(props.cartItem)}>&#10094;</div>
              <span className="value">{props.cartItem.quantity}</span>
              <div className="arrow">&#10095;</div>
          </span>
          <span className="price">{props.cartItem.price * props.cartItem.quantity}</span>
          <span className="remove-button"
                onClick={()=>props.clearItems(props.cartItem)}>&#10005;
          </span>
      </div>
    )
};
const mapDispatchToProps=dispatch=>({
    clearItems:cartItem=>dispatch(removeItemFromCart(cartItem)),
    clearItemsFromCheckout:cartItem=>dispatch(removeItemFromCheckout(cartItem))
});
export default connect(null,mapDispatchToProps)(CheckoutItemsComponent);