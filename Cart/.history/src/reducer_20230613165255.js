import { CLEAR_CART, REMOVE, DECREASE, INCREASE, LOADING, DISPLAY_ITEMS } from "./actions";

const reducer = (state, action) => {
    if (action.type === CLEAR_CART) {
        return {...state, cart: new Map()};
    }
    throw new Error(`No matching action type: ${action.type}`);
};

export default reducer;