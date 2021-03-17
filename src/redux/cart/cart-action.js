import CartActionTypes from "./cart.types";
export const toggleCartHidden=()=>({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})
export const addItem=item=>({
    type:CartActionTypes.ADD_ITEM,
    payload:item

})
export const ClearItemFromcart=item=>({
    type:CartActionTypes.CLEAR_ITEM_FROMCART,
    payload:item
})
export const removeitem=item=>({
    type:CartActionTypes.REMOVE_ITEM,
    payload:item
})