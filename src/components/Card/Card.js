import React from "react";
import classes from "./Card.module.css";

const Card = ({ children, className, ...rest }) => {
  const styles = `${classes.card} ${className}`;
  return (
    <div className={styles} {...rest}>
      {children}
    </div>
  );
};

export default Card;
