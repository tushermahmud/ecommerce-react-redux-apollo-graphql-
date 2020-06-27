import {cartActionTypes} from "./cartActionTypes";
export const toggleCartHidden=()=>({
    type:cartActionTypes.TOGGLE_CART_HIDDEN,
});
export const addCartItems=item=>({
    type:cartActionTypes.ADD_CART_ITEM,
    payload:item
})
export const removeItemFromCart=item=>({
    type:cartActionTypes.CLEAR_CART_ITEM,
    payload:item,
})
export const removeItemFromCheckout=item=>({
   type:cartActionTypes.REMOVE_ITEM,
   payload:item,
});

