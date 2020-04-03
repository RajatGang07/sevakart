import { cartConstatntType } from "./cartTypes";
import { addItemToCart, removeItemToCart } from "./utils";

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartConstatntType.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }

        case cartConstatntType.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case cartConstatntType.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }

        case cartConstatntType.REMOVE_ITEM:
                return{
                    ...state,
                    cartItems: removeItemToCart(state.cartItems, action.payload)
                }
        default: return state;
    }
}

export default cartReducer;
