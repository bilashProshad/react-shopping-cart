import classes from "./Input.module.css";

const Input = ({ ...rest }) => {
  return <input {...rest} className={classes.input} />;
};

export default Input;
