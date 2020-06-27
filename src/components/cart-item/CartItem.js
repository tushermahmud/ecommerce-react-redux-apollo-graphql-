import React from "react";

const CartItem=(props)=> {
    const {name,price,quantity,imageUrl}=props.item;
    return(
        <div className="cart-item">
            <img src={imageUrl} alt="item"/>
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">{quantity}x{price}Tk</span>
            </div>
        </div>
    )
};
export default CartItem;