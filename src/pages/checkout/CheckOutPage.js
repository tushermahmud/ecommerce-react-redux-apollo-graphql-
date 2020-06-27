import React from "react";
import {connect} from "react-redux";
import CheckoutItemsComponent from "../../components/checkout-items/CheckoutItemsComponent";
const CheckOutPage =({cartItems})=>{
    const accumulateTotal=cartItems.reduce((accumulateTotal,cartItem)=>
        accumulateTotal+cartItem.price,0);
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
            {cartItems.map(cartItem=>(<CheckoutItemsComponent key={cartItem.id} cartItem={cartItem}/>))}
            <div className="total">
                <span>TOTAL: {accumulateTotal}TK</span>
            </div>
        </div>
    )
}

const mapStateToProps =state=>({
    cartItems:state.cart.cartItems
})
export default connect(mapStateToProps)(CheckOutPage);