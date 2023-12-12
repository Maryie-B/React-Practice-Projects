import { useContext, useReducer, useEffect, createContext } from "react";
import reducer from "./reducer";
import { CLEAR_CART, REMOVE, DECREASE, INCREASE, LOADING, DISPLAY_ITEMS } from "./actions";
import cartItems from './data'

const items = cartItems.map((item) => [item.id, item]);

const newCartItems = new Map(items);

const AppContext = createContext();

const initialState = {
    loading: false, 
    cart: Array.from(newCartItems.entries())
};

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    
    return <AppContext.Provider value={{...state}}>
        {children}
    </AppContext.Provider>
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};