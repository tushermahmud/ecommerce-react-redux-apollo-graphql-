import React from "react";
import CustomButton from "../custom-button/CustomButtonComponent";
import {connect} from "react-redux";
import {addCartItems} from "../../redux/cart/cartActions";
const mapDispatchToProps=dispatch=>({
    addCartItems:item=>dispatch(addCartItems(item))
});
const CollectionItemsComponent=(props)=>{
    const {item,addCartItems}=props;
    return(
        <div className="collection-item">
            <div className="image" style={{
                backgroundImage:`url(${item.imageUrl})`
            }}/>
            <div className="collection-footer">
                <div className="name">{item.name}</div>
                <div className="price">{item.price}</div>
            </div>
            <CustomButton inverted onClick={()=>addCartItems(item)}>ADD TO CART</CustomButton>
        </div>
    );
}
export default connect(null,mapDispatchToProps)(CollectionItemsComponent);