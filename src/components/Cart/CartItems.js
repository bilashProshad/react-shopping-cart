import React from "react";
import { useCartContext } from "../../contexts/cart-context";
import CartItem from "./CartItem";

const CartItems = () => {
  const { items } = useCartContext();

  return (
    <>
      {items.map((item) => (
        <CartItem key={item.id} product={item} />
      ))}
    </>
  );
};

export default CartItems;
