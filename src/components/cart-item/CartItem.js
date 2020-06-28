import React,{Component} from "react";

class CartItem extends Component{
    componentDidMount() {
        console.log("update");
    }
    render() {
        const {name,price,quantity,imageUrl}=this.props.item;
        return(
            <div className="cart-item">
                <img src={imageUrl} alt="item"/>
                <div className="item-details">
                    <span className="name">{name}</span>
                    <span className="price">{quantity}x{price}Tk</span>
                </div>
            </div>
        )
    }


}
export default CartItem;
