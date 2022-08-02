import React from "react";
import { useCartContext } from "../../contexts/cart-context";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import classes from "./Cart.module.css";
import CartItems from "./CartItems";

const Cart = (props) => {
  const { items, totalPrice } = useCartContext();

  return (
    <Modal className={classes["cart-modal"]} onHideCart={props.onHideCart}>
      <CartItems />
      <div className={classes["cart-items-price"]}>
        <span>Total Price</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
      <div className={classes["cart-order-buttons"]}>
        <Button onClick={props.onHideCart}>Close</Button>
        {items.length !== 0 && <Button>Order</Button>}
      </div>
    </Modal>
  );
};

export default Cart;
