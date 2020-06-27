import React from "react";
import {ReactComponent as ShoppingIcon} from "../../assets/11.2 shopping-bag.svg.svg";
import {connect} from "react-redux";
import {toggleCartHidden} from "../../redux/cart/cartActions"
const CartIconComponent=({toggleCartHidden,itemCount})=>{
    return(
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{itemCount}</span>
        </div>
    )
}

const mapDispatchToProps=dispatch=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
});
const mapStateToProps=state=>({
    itemCount:state.cart.cartItems.reduce
    ((accumulatedQuantity,cartItem)=>
        accumulatedQuantity+cartItem.quantity,0),
})


export default connect(mapStateToProps,mapDispatchToProps)(CartIconComponent);
