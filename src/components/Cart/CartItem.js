import React from "react";
import { useCartContext } from "../../contexts/cart-context";
import Button from "../Button/Button";
import classes from "./CartItem.module.css";

const CartItem = ({ product }) => {
  const { addItem, removeItem } = useCartContext();

  return (
    <>
      <div className={classes["cart-details"]}>
        <div>
          <h3>{product.name}</h3>
          <div className={classes["cart-price"]}>
            <span>${product.price}</span>
            <span className={classes["cart-amount"]}>X{product.quantity}</span>
          </div>
        </div>
        <div className={classes["cart-buttons"]}>
          <Button onClick={() => removeItem(product.id)}>-</Button>
          <Button onClick={() => addItem({ ...product, quantity: 1 })}>
            +
          </Button>
        </div>
      </div>

      <hr />
    </>
  );
};

export default CartItem;
