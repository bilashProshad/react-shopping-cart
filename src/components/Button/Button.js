import classes from "./Button.module.css";

const Button = ({ children, className, ...rest }) => {
  const styles = `${classes.button} ${className}`;
  return (
    <button {...rest} className={styles}>
      {children}
    </button>
  );
};

export default Button;
