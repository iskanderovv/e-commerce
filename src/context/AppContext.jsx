import React, { createContext, useReducer, useEffect } from 'react';


const AppContext = createContext();


const initialState = {
  cart: JSON.parse(localStorage.getItem('cart')) || [],
};

const appReducer = (state, action) => {
  let updatedCart;
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { id, quantity = 1 } = action.payload;
      const existingProduct = state.cart.find(product => product.id === id);

      if (existingProduct) {
        updatedCart = state.cart.map(product =>
          product.id === id ? { ...product, quantity: product.quantity + quantity } : product
        );
      } else {
        updatedCart = [...state.cart, { ...action.payload, quantity }];
      }
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return { ...state, cart: updatedCart };
    }
    case 'REMOVE_ITEM': {
      updatedCart = state.cart.filter((item, index) => index !== action.payload);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return { ...state, cart: updatedCart };
    }
    case 'INCREASE_QUANTITY': {
      updatedCart = state.cart.map((item, index) =>
        index === action.payload ? { ...item, quantity: item.quantity + 1 } : item
      );
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return { ...state, cart: updatedCart };
    }
    case 'DECREASE_QUANTITY': {
      updatedCart = state.cart.map((item, index) =>
        index === action.payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return { ...state, cart: updatedCart };
    }
    default:
      return state;
  }
};


const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
