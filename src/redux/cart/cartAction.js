import { cartConstatntType } from "./cartTypes";

export const toggleCartHidden = () => ({
    type: cartConstatntType.TOGGLE_CART_HIDDEN,
})


export const addItem = (item) => ({
    type: cartConstatntType.ADD_ITEM,
    payload: item
})


export const clearItemFromCart = (item) => ({
    type: cartConstatntType.CLEAR_ITEM_FROM_CART,
    payload: item
})


export const removeItem = (item) => ({
    type: cartConstatntType.REMOVE_ITEM,
    payload: item
})

