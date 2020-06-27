import {cartActionTypes} from "./cartActionTypes";
import {addNewItemsToCart} from "./cartUtil";


const INITIAL_STATE={
    hidden:true,
    cartItems:[]
}
const cartReducer=(state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden:!state.hidden
            };
        case cartActionTypes.ADD_CART_ITEM:
            return {
                ...state,
                cartItems: addNewItemsToCart(state.cartItems,action.payload)
            };
        case cartActionTypes.CLEAR_CART_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    cartItem=> cartItem.id !== action.payload.id
                )
            };
        case cartActionTypes.REMOVE_ITEM:
            return{
                ...state,
                cartItems: state.cartItems.filter(
                    cartItem=>cartItem.id===action.payload.id?
                        cartItem.quantity=cartItem.quantity-1:1
                )
            }
        default:
            return state
    }
};
export default cartReducer;