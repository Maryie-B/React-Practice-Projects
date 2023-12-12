import { CLEAR_CART, REMOVE, DECREASE, INCREASE, LOADING, DISPLAY_ITEMS } from "./actions";

const reducer = (state, action) => {
    if (action.type === CLEAR_CART) {
        return {...state, cart: new Map()};
    }
    if (action.type === REMOVE) {
        const newCart = new Map(state.cart);
        newCart.delete(action.payload.id);
        return {...state, cart: newCart};
    }
    if (action.type === INCREASE) {
        
    }
    throw new Error(`No matching action type: ${action.type}`);
};

export default reducer;