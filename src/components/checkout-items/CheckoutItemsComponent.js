import React from "react";

const CheckoutItemsComponent=({cartItem})=>{
    const {name,quantity,imageUrl,price}=cartItem;
    return(
      <div className="checkout-item">
          <div className="image-container">
              <img src={imageUrl} alt=""/>
          </div>
          <span className="name">{name}</span>
          <span className="quantity">{quantity}</span>
          <span className="price">{price}</span>
          <span className="remove-button">&#10005;</span>
      </div>
    )
}
export default CheckoutItemsComponent;