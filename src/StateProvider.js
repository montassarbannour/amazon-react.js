import { createContext , useContext, useReducer } from "react";


// this is the data layer
export const StateContext = createContext();
// bulid a provider
export const StateProvider=({ reducer, initialState, children}) =>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
       {children} 
    </StateContext.Provider>

);

export const UseStateValue = () => useContext(StateContext);
