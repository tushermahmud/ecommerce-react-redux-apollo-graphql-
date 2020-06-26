export const addNewItemsToCart=(previousItems,itemsToAdd)=>{
    const existingCartItem=previousItems.find(cartItem=>cartItem.id===itemsToAdd.id);
    if(existingCartItem){
        return previousItems.map(cartItem=>cartItem.id===itemsToAdd.id?
            {...cartItem, quantity:cartItem.quantity + 1}:cartItem
        )
    }
    return [...previousItems,{...itemsToAdd,quantity:1}]
}
