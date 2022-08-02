import React from "react";
import Button from "../Button/Button";
import classes from "./CartItem.module.css";

const CartItem = () => {
  return (
    <>
      <div className={classes["cart-details"]}>
        <div>
          <h3>Name</h3>
          <div className={classes["cart-price"]}>
            <span>$100</span>
            <span className={classes["cart-amount"]}>X2</span>
          </div>
        </div>
        <div className={classes["cart-buttons"]}>
          <Button>-</Button>
          <Button>+</Button>
        </div>
      </div>

      <hr />
    </>
  );
};

export default CartItem;
