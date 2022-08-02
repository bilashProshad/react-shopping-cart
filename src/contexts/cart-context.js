import React, { useContext, useReducer } from "react";
import cartReducer from "./CartReducer";

const CartContext = React.createContext({
  items: [],
  totalPrice: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

const useCartContext = () => {
  return useContext(CartContext);
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    totalPrice: 0,
  });

  const addCartItemHandler = (item) => {
    dispatch({ type: "ADD", item });
  };

  const removeCartItemHandler = (id) => {
    dispatch({ type: "REMOVE", id });
  };

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        totalPrice: state.totalPrice,
        addItem: addCartItemHandler,
        removeItem: removeCartItemHandler,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { useCartContext, CartProvider };
