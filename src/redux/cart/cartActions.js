import {cartActionTypes} from "./cartActionTypes";
export const toggleCartHidden=()=>({
    type:cartActionTypes.TOGGLE_CART_HIDDEN,
});
export const addCartItems=item=>({
    type:cartActionTypes.ADD_CART_ITEM,
    payload:item
})

