import classes from "./Form.module.css";

const Form = ({ children, ...rest }) => {
  return (
    <form {...rest} className={classes.form}>
      {children}
    </form>
  );
};

export default Form;
