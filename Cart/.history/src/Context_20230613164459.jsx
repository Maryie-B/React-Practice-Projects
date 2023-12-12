import { useContext, useReducer, useEffect, createContext } from "react";
import reducer from "./reducer";
import { CLEAR_CART, REMOVE, DECREASE, INCREASE, LOADING, DISPLAY_ITEMS } from "./actions";
import cartItems from './data'

const AppContext = createContext();

const initialState = {
    loading: false, 
    cart: new Map(cartItems.map((item) => [item.id, item]))
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