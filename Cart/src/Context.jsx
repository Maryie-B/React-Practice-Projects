import { useContext, useReducer, createContext } from "react";
import reducer from "./reducer";
import { CLEAR_CART, REMOVE, DECREASE, INCREASE } from "./actions";
import cartItems from './data'
import { getToals } from "./utils";

const AppContext = createContext();

const initialState = {
    loading: false, 
    cart: new Map(cartItems.map((item) => [item.id, item]))
};

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const {totalAmount, totalCost} = getToals(state.cart);

    const clearCart = () => {
        dispatch({ type: CLEAR_CART });
    };

    const removeItem =(id) => {
        dispatch({type: REMOVE, payload: {id}});
    };

    const increase = (id) => {
        dispatch({type: INCREASE, payload: {id}});
    };
    
    const decrease = (id) => {
        dispatch({type: DECREASE, payload: {id}});
    };
    
    return <AppContext.Provider value={{...state, clearCart, removeItem, increase, decrease, totalAmount, totalCost}}>
        {children}
    </AppContext.Provider>
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};