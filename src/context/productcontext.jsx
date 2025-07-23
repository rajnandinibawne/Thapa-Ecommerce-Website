import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
// import reducer from "../reducer/productReducer";
import reducer from "../reducer/ProductReducer";
const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products"

const initialState = {
    isLoading :false,
    isError : false,
    products : [],
    featureProducts : [],
    isSingleLoading: false,
    singleProduct: {},

}

const AppProvider = ( { children } )=>{
        //axios -return promise   make http request to handle promise use .then .get 
        // //async await to handle promises

        
        const [state, dispatch] = useReducer(reducer, initialState)
                //DISPATCH   - CALL ACTION mthd, it force to do action
    const getProducts = async (url) => {
            dispatch({type:"SET_LOADING"})
        try {
            const res = await axios.get(url);
            const products = await res.data;
            console.log(products);
            dispatch({type:"SET_API_DATA", payload:products});
        } catch (error) {
            dispatch({type:"API_ERROR"})
        }
        
        
 };
//2nd api call for singl product
const getSingleProduct = async (url) => {
    dispatch({type:"SET_LOADING"})
    try{
        const res = await axios.get(url);
        const singleProduct = await res.data;
        dispatch({type:"SET_SINGLE_PRODUCT", payload:singleProduct});
    } catch (error) {
        dispatch({type:"SINGLE_ERROR"})
    }
}


    useEffect( () =>{
        getProducts(API);
    }, []);

    return (<AppContext.Provider value={{...state, getSingleProduct}}>{children}</AppContext.Provider>)
};              // ... spread operator

//custom Hooks
const useProductContext = ( ) => {
    return useContext(AppContext);
};


export {AppProvider, AppContext, useProductContext};