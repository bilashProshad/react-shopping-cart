import React from "react";

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  <CartContext.Provider>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider };
