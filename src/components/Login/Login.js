import Button from "../Button/Button";
import Form from "../Form/Form";
import Input from "../Input/Input";
import classes from "./Login.module.css";

const Login = () => {
  return (
    <div className={classes.login}>
      <h2>Login</h2>
      <Form>
        <Input type="text" placeholder="email" required />
        <Input type="password" placeholder="password" required />
        <Button type="submit">Login</Button>
      </Form>
    </div>
  );
};

export default Login;
