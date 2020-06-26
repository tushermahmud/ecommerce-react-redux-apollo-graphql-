import React from "react";
import {ReactComponent as ShoppingIcon} from "../../assets/11.2 shopping-bag.svg.svg";
import {connect} from "react-redux";
import {toggleCartHidden} from "../../redux/cart/cartActions"
const CartIconComponent=({toggleCartHidden})=>{
    return(
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    )
}

const mapDispatchToProps=dispatch=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
});
export default connect(null,mapDispatchToProps)(CartIconComponent);
