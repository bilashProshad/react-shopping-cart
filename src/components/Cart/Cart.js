import React from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import classes from "./Cart.module.css";
import CartItems from "./CartItems";

const Cart = (props) => {
  return (
    <Modal className={classes["cart-modal"]} onHideCart={props.onHideCart}>
      <CartItems />
      <div className={classes["cart-order-buttons"]}>
        <Button onClick={props.onHideCart}>Close</Button>
        <Button>Order</Button>
      </div>
    </Modal>
  );
};

export default Cart;
