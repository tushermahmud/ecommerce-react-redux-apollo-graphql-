import React from "react";
import CustomButton from "../custom-button/CustomButtonComponent";
import CartItem from "../cart-item/CartItem";
import {connect}from "react-redux";
import {withRouter} from "react-router-dom";
import {toggleCartHidden} from "../../redux/cart/cartActions";

const CartDropdownComponent=(props)=>{
    const {cartItems,history,dispatch}=props;
    return(
        <div className="cart-dropdown">
            <div className="cart-items">
                <div>
                    {cartItems.length>0?
                        (cartItems.map(cartItem=><CartItem key={cartItem.id} item={cartItem}/>)):
                        (<span style={{
                            fontSize:"18px",
                            margin:"50px auto",
                            display:'table'
                        }}className="empty-message">Your Cart is Empty</span>)
                    }
                </div>
                <CustomButton onClick={()=>{
                    history.push('/checkout')
                    dispatch(toggleCartHidden());
                }}>GO TO CHECKOUT</CustomButton>
            </div>
        </div>
    )
};

const mapStateToProps=state=>({
    cartItems:state.cart.cartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdownComponent));