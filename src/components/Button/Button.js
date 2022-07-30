import classes from "./Button.module.css";

const Button = ({ children, ...rest }) => {
  return (
    <button {...rest} className={classes.button}>
      {children}
    </button>
  );
};

export default Button;
