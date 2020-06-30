import React from "react";
import {connect} from "react-redux";
import {removeItemFromCart, removeItemFromCheckout,addCartItems} from "../../redux/cart/cartActions";
import StripeButtonComponent from "../../components/stripe-button/StripeButtonComponent";
const mapStateToProps =state=>({
    cartItems:state.cart.cartItems
});
const mapDispatchToProps=dispatch=>({
    clearItems:cartItem=>dispatch(removeItemFromCart(cartItem)),
    clearItemsFromCheckout:cartItem=>dispatch(removeItemFromCheckout(cartItem)),
    addCartItems:cartItem=>dispatch(addCartItems(cartItem))
});
class CheckOutPage extends React.Component{
    checkoutItems=cartItem=>(
        <div className="checkout-item" key={cartItem.id}>
            <div className="image-container">
                <img src={cartItem.imageUrl} alt=""/>
            </div>
            <span className="name">{cartItem.name}</span>
            <span className="quantity">
              <div className="arrow" onClick={()=>this.props.clearItemsFromCheckout(cartItem)}>&#10094;</div>
              <span className="value">{cartItem.quantity}</span>
              <div className="arrow" onClick={()=>this.props.addCartItems(cartItem)}>&#10095;</div>
          </span>
            <span className="price">{cartItem.price * cartItem.quantity}</span>
            <span className="remove-button"
                  onClick={()=>this.props.clearItems(cartItem)}>&#10005;
          </span>
        </div>
    );
    render() {
        const accumulatedTotal=this.props.cartItems.reduce((accumulateTotal,cartItem)=>
                accumulateTotal+(cartItem.price*cartItem.quantity),0);
        return(
            <div className="checkout-page">
                <div className="checkout-header">
                    <div className="header-block">
                        <span>Product</span>
                    </div>
                    <div className="header-block">
                        <span>Description</span>
                    </div>
                    <div className="header-block">
                        <span>Quantity</span>
                    </div>
                    <div className="header-block">
                        <span>Price</span>
                    </div>
                    <div className="header-block">
                        <span>Remove</span>
                    </div>
                </div>
                {this.props.cartItems.map(cartItem=>(this.checkoutItems(cartItem)))}
                <div className="total">
                    <span>TOTAL: {accumulatedTotal}TK</span>
                </div>
                <div className="test-warning">
                    *Please use the following credit card for the payment* <br/>
                    Card NO:4242424242424242 <br/>
                    Expire date:01/22
                </div>
                <StripeButtonComponent price={accumulatedTotal}/>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CheckOutPage);