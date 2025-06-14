import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "../context/productcontext";
import reducer from "../reducer/FilterReducer"

// const FilterContext = createContext ();

// // const initialState = {
// //     filter_products : [],
// //     all_products : [],
// //     grid_view :true,
// //     sorting_value:"lowest",
// //     filters : {
// //         text:"",
// //         category :"all",
// //         company : "all",
// //         colors : "all",
// //         maxPrice: 0,
// //         price: 0,
// //         minPrice: 0,
// //     },
    
// // }
// // export const FilterContextProvider = ( {children }) => {
// //     const {products} = useProductContext();

// //     const[state, dispatch] = useReducer(reducer , initialState)

// //     //to set grid view
// //     const setGridView = ( ) => {
// //         return dispatch ( {type: "SET_GRID_VIEW"});
// //     }
// //     //to set list view
// //     const setListView = ( ) => {
// //         return dispatch ( {type: "SET_LIST_VIEW"});
// //     }

// //     //sorting function
// //     const sorting = (event) => {
// //         let userValue = event.target.value;
// //         dispatch({type : "GET_SORT_VALUE", payload: userValue});
// //     }

// //     //update the filter valiuies
// //     const updateFilterValue = (event) =>{
// //         const name = event.target.name;
// //          value = event.target.value;
// //         return dispatch ( {type: "UPDATE_FILTERS_VALUE",payload : {name, value}})
// //     } 

    
// //     useEffect(()=>{
// //         dispatch({type: "FILTER_PRODUCTS"})
// //         dispatch({type : "SORTING_PRODUCTS", payload: products});
// //     },[products, state.sorting_value, state.filters]);

// //     useEffect(() => {
// //         dispatch({type: "LOAD_FILTER_PRODUCTS", payload : products})
// //     }, [products])

// //     return( <FilterContext.Provider 
// //         value = {{...state, 
// //         setGridView, 
// //         setListView, 
// //         sorting,
// //         updateFilterValue, 
// //       }}>{children}

// //     </FilterContext.Provider>
// //     );
// // };

// // export const useFilterContext = () => {
// //     return useContext(FilterContext);
// // }
// import { createContext, useContext, useEffect, useReducer } from "react";
// import { useProductContext } from "../context/productcontext";
// import reducer from "../reducer/FilterReducer";

// const FilterContext = createContext();

// const initialState = {
//   filter_products: [],
//   all_products: [],
//   grid_view: true,
//   sorting_value: "lowest",
//   filters: {
//     text: "",
//     category: "all",
//     company: "all",
//     colors: "all",
//     maxPrice: 0,
//     price: 0,
//     minPrice: 0,
//   },
// };

// export const FilterContextProvider = ({ children }) => {
//   const { products } = useProductContext();

//   const [state, dispatch] = useReducer(reducer, initialState);

//   // Set grid view
//   const setGridView = () => {
//     dispatch({ type: "SET_GRID_VIEW" });
//   };

//   // Set list view
//   const setListView = () => {
//     dispatch({ type: "SET_LIST_VIEW" });
//   };

//   // Sorting function
//   const sorting = (event) => {
//     const userValue = event.target.value;
//     dispatch({ type: "GET_SORT_VALUE", payload: userValue });
//   };

//   // Update the filter values
//   const updateFilterValue = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
//   };

//   // Apply filters and sorting whenever dependencies change
//   useEffect(() => {
//     dispatch({ type: "FILTER_PRODUCTS" });
//     dispatch({ type: "SORTING_PRODUCTS", payload: state.filter_products });
//   }, [products, state.sorting_value, state.filters]);

//   // Load initial products into the state
//   useEffect(() => {
//     dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
//   }, [products]);

//   return (
//     <FilterContext.Provider
//       value={{
//         ...state,
//         setGridView,
//         setListView,
//         sorting,
//         updateFilterValue,
//       }}
//     >
//       {children}
//     </FilterContext.Provider>
//   );
// };

// export const useFilterContext = () => {
//   return useContext(FilterContext);
// };



const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "lowest",
  filters: {
    text: "",
    category: "all",
    company: "all",
    color: "all",
    maxPrice: 0,
    price: 0,
    minPrice: 0,
  },
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  // to set the grid view
  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };

  // to set the list view
  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };

  // sorting function
  const sorting = (event) => {
    let userValue = event.target.value;
    dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  };

  // update the filter values
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  };

  // to clear the filter
  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };

  // to sort the product
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [products, state.sorting_value, state.filters]);

  // to load all the products for grid and list view
  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        sorting,
        updateFilterValue,
        clearFilters,
      }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};